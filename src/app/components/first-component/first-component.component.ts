import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit, OnDestroy {
  show = true;
  noShow = false;
  anything = null;
  authors: Array<String> = ['Joshua Fialkov', 'Author C. Clark', 'Phillip K. Dick', 'Saladin Ahmed'];
  myNumber = 10;
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

}
