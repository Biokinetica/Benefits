import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }
  Url = 'https://benefits-app.herokuapp.com/user';

login(jsonObject) {
  return this.http.post<User>(this.Url, jsonObject).subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log('Error occured');
    }
  );
}
}

export interface User {
    email: string;
    pswd: string;
}
