import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReimburseComponent } from './components/reimburse/reimburse.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'reimburse', component: ReimburseComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
