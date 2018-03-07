import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Http, Headers, Response } from '@angular/http';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {
   }
  Url = 'https://benefits-app.herokuapp.com/user';

login(jsonObject) {
  return this.http.post<Token>(this.Url, jsonObject).subscribe(
    res => {
      localStorage.setItem('currentUser', JSON.stringify(res));
      if (res.admin) {
      this.router.navigateByUrl('/benco');
      } else {
      this.router.navigateByUrl('/view');
      }

    },
    err => {
      console.log('Error occured');
    }
  );
}
}

export interface Token {
  auth: string;
  admin: boolean;
}

export interface User {
    email: string;
    pswd: string;
}
