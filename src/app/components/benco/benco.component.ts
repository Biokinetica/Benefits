import { Component, OnInit } from '@angular/core';
import { ViewService } from '../view/view.service';
import { Router } from '@angular/router';
import { Reimbursement } from '../reimburse/reimburse.service';
import { SelectionModel } from '@angular/cdk/collections';
import { BencoService } from './benco.service';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-benco',
  templateUrl: './benco.component.html',
  styleUrls: ['./benco.component.css']
})
export class BencoComponent implements OnInit {
  displayedColumns = ['select', 'reimburse_amt', 'approval', 'class_start', 'class_end', 'desc', 'dated'];
  dataSource = new MatTableDataSource<Reimbursement>();
  selection = new SelectionModel<Reimbursement>(true, []);
  constructor(private reimburseList: ViewService, private router: Router, private approve: BencoService) { }

  ngOnInit() {
    this.viewEmployeeClaims();
  }

  approveClaims() {
      this.approve.approveClaimService(this.selection, this.dataSource.data);
  }

  viewEmployeeClaims() {
    this.reimburseList.viewAllService().subscribe(
      res => {
       // console.log(res);
        this.dataSource.data = res;
      },
      err => {
        console.log('Error occured');
      });
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
