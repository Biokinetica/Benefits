import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable()
export class ReimburseService {
  constructor(private http: HttpClient, private router: Router) { }
  Url = 'https://benefits-app.herokuapp.com/my-benefits';
  token: string;

addReimbursement(jsonObject) {
  const currentUser: string = JSON.parse(localStorage.getItem('currentUser'));
  const headers = new HttpHeaders({'auth' : currentUser});
  console.log(currentUser);
  return this.http.post<Reimbursement>(this.Url, jsonObject, {headers: headers}).subscribe(
    res => {
      console.log(res);
      this.router.navigateByUrl('/view');
    },
    err => {
      console.log('Error occured');
    }
  );
}
}

export interface Reimbursement {
    token: object;
    desc: string;
    class_start: Date;
    class_end: Date;
  address_id: Number;
  reimburse_amt: Number;
  training_id: Number;
  approval: string;
  dated: Date;
  reimburse_id: Number;
}
