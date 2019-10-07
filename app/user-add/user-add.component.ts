import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  users: User[]; 

  constructor(private location: Location,private userService: UserService,private router: Router) { }

  ngOnInit() {
    this.isAdmin();
    this.getUser();
  }

  getUser(): void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  close(): void {
    this.location.back();
  }

  add(name: string, mobileNum:number, location:string): void {
    var id : number;
    id = Math.max(...this.users.map(user => user.id)) + 1;
    if (!name && !location && !mobileNum) { return;}
    this.userService.addUser({id,name, mobileNum, location} as User)
      .subscribe(user => {
        this.users.push(user);
      });
      this.close();
  }

  isAdmin(): void {
    let role = localStorage.getItem('role');
    if(!role){ this.router.navigate(['login']); }
    else if( role === 'user'){
      alert('Only admin has access to this feature')
      this.router.navigate(['user-list']);
    }
  }
}
