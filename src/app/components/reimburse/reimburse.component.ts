import { Component, OnInit, ViewChild } from '@angular/core';
import { ReimburseService } from './reimburse.service';
import { MatDatepicker } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-reimburse',
  templateUrl: './reimburse.component.html',
  styleUrls: ['./reimburse.component.css']
})
export class ReimburseComponent implements OnInit {
  email: string;
  desc: string;
  start: Date;
  end: Date;
  address_id: Number;
  reimb: Number;
  training_id: Number;
  cookie: string;
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  constructor(private reimbursement: ReimburseService, private cookieService: CookieService) {

  }

  ngOnInit() {
  }
  add(event) {

  console.log(this.cookie);
    this.email = this.cookie;
    this.training_id = 1;
    this.address_id = 1;
    const jsonObject = JSON.stringify({
      email: this.email,
      desc: this.desc,
      class_start: this.start,
      class_end: this.end,
      address_id: this.address_id,
      reimburse_amt: this.reimb,
      training_id: this.training_id
    });

this.reimbursement.addReimbursement(jsonObject);

  }

}
