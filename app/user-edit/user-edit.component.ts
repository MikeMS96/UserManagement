import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { UserService }  from '../user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  
  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.isAdmin();
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }

  close(): void {
    this.location.back();
  }

  save(): void {
    this.userService.updateUser(this.user)
      .subscribe(() => this.close());
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
