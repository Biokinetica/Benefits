import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reimbursement } from '../reimburse/reimburse.service';
import { AuthHttp, AuthConfig, JwtHelper } from 'angular2-jwt';

@Injectable()
export class ViewService {
  constructor(private http: HttpClient) { }
  Url = 'https://benefits-app.herokuapp.com/retrieve';
  token: string;
  dataSource: Array<Reimbursement>;
  jwtHelper: JwtHelper = new JwtHelper();
viewReimburseService() {
  const currentUser: string = JSON.parse(localStorage.getItem('currentUser'));
  console.log(currentUser);
  return this.http.post<Array<Reimbursement>>(this.Url, currentUser);
}
}
