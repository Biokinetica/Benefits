import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReimburseComponent } from './components/reimburse/reimburse.component';
import { ViewComponent } from './components/view/view.component';
import { BencoComponent } from './components/benco/benco.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'view', component: ViewComponent },
  { path: 'benco', component: BencoComponent },
  { path: 'reimburse', component: ReimburseComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
