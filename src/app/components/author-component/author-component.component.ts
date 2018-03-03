import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-author-component',
  templateUrl: './author-component.component.html',
  styleUrls: ['./author-component.component.css']
})
export class AuthorComponentComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
