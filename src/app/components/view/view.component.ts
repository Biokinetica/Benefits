import { Component, OnInit } from '@angular/core';
import { Reimbursement, ReimburseService } from '../reimburse/reimburse.service';
import { ViewService } from './view.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  displayedColumns = ['reimburse_amt', 'approval', 'class_start', 'class_end', 'desc', 'dated'];
  dataSource: Array<Reimbursement>;
  constructor(private reimburseList: ViewService, private router: Router) { }

  ngOnInit() {
    this.viewReimbursements();
  }
  viewReimbursements() {
    this.reimburseList.viewReimburseService().subscribe(
      res => {
       // console.log(res);
        this.dataSource = res;
      },
      err => {
        console.log('Error occured');
      });
  }
  addReimbursementButton() {
    this.router.navigateByUrl('/reimburse');
  }

}
