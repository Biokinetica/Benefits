import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class ReimburseService {
  constructor(private http: HttpClient, private cookieService: CookieService) { }
  Url = 'https://benefits-app.herokuapp.com/my-benefits';
  token: string;

addReimbursement(jsonObject) {
  const cookie = this.cookieService.get('BenefitFocus');
  const headers = new HttpHeaders({'auth' : cookie});
  console.log(cookie);
  return this.http.post<Reimbursement>(this.Url, jsonObject, {headers: headers}).subscribe(
    res => {
      console.log(res);
    },
    err => {
      console.log('Error occured');
    }
  );
}
}

export interface Reimbursement {
    email: string;
    desc: string;
    class_start: Date;
    class_end: Date;
  address_id: Number;
  reimburse_amt: Number;
  training_id: Number;
}
