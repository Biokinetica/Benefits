import {Component, OnInit} from '@angular/core';
import { LoginService } from './login.service';
import { NgModel } from '@angular/forms';
/**
 * @title Basic Inputs
 */
@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private login: LoginService) {

  }
  ngOnInit(): void {

  }
  signIn(event) {
   const jsonObject = JSON.stringify({
      'email': this.email,
      'pswd': this.password
  });
    this.login.login(jsonObject);
    console.log(jsonObject);
  }
}
