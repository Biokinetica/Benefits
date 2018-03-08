import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  DateAdapter,
  MAT_DATE_FORMATS,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatCheckboxModule,
  MatOptionModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './components/login/login.service';
import { ReimburseComponent } from './components/reimburse/reimburse.component';
import { ReimburseService } from './components/reimburse/reimburse.service';
import { CookieService } from 'ngx-cookie-service';
import { Routes, RouterModule, Router } from '@angular/router';
 import { AppRoutingModule } from './app-routing.module';
import { ViewComponent } from './components/view/view.component';
import { AuthHttp, AuthConfig, AuthModule } from 'angular2-jwt';
import { ViewService } from './components/view/view.service';
import { BencoComponent } from './components/benco/benco.component';
import { HttpModule } from '@angular/http';
import { BencoService } from './components/benco/benco.service';
import {MatSnackBar} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReimburseComponent,
    ViewComponent,
    BencoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    MatInputModule,
    MatRippleModule,
    MatDatepickerModule,
    MatNativeDateModule,
   AppRoutingModule,
   AuthModule,
   MatTableModule,
   MatCheckboxModule,
   MatOptionModule,
   MatSelectModule,
   MatSnackBarModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
  ],
  providers: [LoginService,
  ReimburseService,
  ViewService,
  BencoService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
