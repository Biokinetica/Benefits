import { Component, OnInit, ViewChild } from '@angular/core';
import { ReimburseService } from './reimburse.service';
import { MatDatepicker } from '@angular/material';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-reimburse',
  templateUrl: './reimburse.component.html',
  styleUrls: ['./reimburse.component.css']
})
export class ReimburseComponent implements OnInit {
  token: string;
  desc: string;
  start: Date;
  end: Date;
  address_id: Number;
  reimb: Number;
  training_id: Number;
  dated: Date;
  types = [
    {value: 1, viewValue: 'Certification'},
    {value: 2, viewValue: 'University Course'},
    {value: 3, viewValue: 'Seminar'},
    {value: 4, viewValue: 'Certification Prep Course'},
    {value: 5, viewValue: 'Technical Training'},
    {value: 6, viewValue: 'Other'}
  ];
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  constructor(private reimbursement: ReimburseService) {

  }

  ngOnInit() {
    this.token = JSON.parse(localStorage.getItem('currentUser'));
  }
  add(event) {
    this.address_id = 1;
    const jsonObject = JSON.stringify({
      token: this.token,
      desc: this.desc,
      class_start: this.start,
      class_end: this.end,
      address_id: this.address_id,
      reimburse_amt: this.reimb,
      training_id: this.training_id,
      dated: this.dated
    });

this.reimbursement.addReimbursement(jsonObject);

  }

}
