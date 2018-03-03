import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { AuthorComponentComponent } from './components/author-component/author-component.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginService } from './components/login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    AuthorComponentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    NoopAnimationsModule,
    MatInputModule,
    MatRippleModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
