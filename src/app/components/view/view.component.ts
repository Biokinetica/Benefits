import { Component, OnInit } from '@angular/core';
import { Reimbursement, ReimburseService } from '../reimburse/reimburse.service';
import { ViewService } from './view.service';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { MatSnackBar } from '@angular/material';
import { Action } from 'rxjs/scheduler/Action';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  displayedColumns = ['reimburse_amt', 'approval', 'class_start', 'class_end', 'desc', 'dated'];
  dataSource: Array<Reimbursement>;
  constructor(private snackBar: MatSnackBar, private reimburseList: ViewService, private router: Router, private logout: LoginService) { }

  ngOnInit() {
    this.viewReimbursements();
  }
  openSnackBar() {
    this.snackBar.open('Successfully Logged Out', 'Undo', {
      duration: 2000
    });
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
  signOut() {
    this.logout.logout();
  }

}
