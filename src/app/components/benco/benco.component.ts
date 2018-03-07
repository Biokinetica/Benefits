import { Component, OnInit } from '@angular/core';
import { ViewService } from '../view/view.service';
import { Router } from '@angular/router';
import { Reimbursement } from '../reimburse/reimburse.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-benco',
  templateUrl: './benco.component.html',
  styleUrls: ['./benco.component.css']
})
export class BencoComponent implements OnInit {
  displayedColumns = ['select', 'reimburse_amt', 'approval', 'class_start', 'class_end', 'desc', 'dated'];
  dataSource: Array<Reimbursement>;
  selection = new SelectionModel<Reimbursement>(true, []);
  constructor(private reimburseList: ViewService, private router: Router) { }

  ngOnInit() {
    this.viewEmployeeClaims();
  }

  viewEmployeeClaims() {
    this.reimburseList.viewReimburseService().subscribe(
      res => {
       // console.log(res);
        this.dataSource = res;
      },
      err => {
        console.log('Error occured');
      });
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.forEach(row => this.selection.select(row));
  }

}
