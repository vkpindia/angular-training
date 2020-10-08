import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userName: string;
  public password: string;
  public message: string;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * name
   */
  public login(): void {
    if (this.userName === 'smith' && this.password === '12345') {
      this.message = `Welcome to ${this.userName}`;
    } else {
      this.message = 'Invalid username or passowrd';
    }
    this.userName = '';
    this.password = '';
  }
}
