import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(name: string, password: string): void {
    if(name === 'admin' && password === 'admin') {
      localStorage.setItem('role','admin');
      this.router.navigate(['user-list']);
    }
    else if(name === 'user' && password === 'user') {
      localStorage.setItem('role','user');
      this.router.navigate(['user-list']);
    }
    else { alert('Invalid Credentials'); }
  }
}
