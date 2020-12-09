import { Component, Input, OnInit } from '@angular/core';
import { AppElement } from './element';

@Component({
  selector: 'element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() el?: AppElement;
  @Input() iconClass: string = "";
  constructor(){}

  ngOnInit() {
  }
}
