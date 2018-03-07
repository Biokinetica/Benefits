import { Router } from '@angular/router';
import { Reimbursement } from '../reimburse/reimburse.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BencoService {
    selection = new SelectionModel<Reimbursement>(true, []);
    data: Array<Reimbursement>;
    Url = 'https://benefits-app.herokuapp.com/adminpanel';
  constructor(private router: Router, private http: HttpClient) { }
    approveClaimService(selected, dataSource) {
        const storage = localStorage.getItem('currentUser');
         this.selection = selected;
        this.data = dataSource;
        for (let i = 0; i < this.selection.selected.length; i++) {
            if (this.selection.isSelected) {
            this.selection.selected[i].token = JSON.parse(storage);
            }
        }
        console.log(this.selection.selected);
        this.http.post<Array<Reimbursement>>(this.Url, this.selection.selected).subscribe(
            res => {
              console.log(res);
              this.router.navigateByUrl('/benco');

            },
            err => {
              console.log('Error occured');
            }
          );

    }


}
