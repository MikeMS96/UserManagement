import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
    this.isUserLogin();
  }
  
  getUser(): void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  isUserLogin(): void {
    if(!localStorage.getItem('role')) {
      this.router.navigate(['login']);
    }
    this.getUser();
  }

  logout(): void {
    localStorage.removeItem('role');
    this.router.navigate(['login']);
  }
}
