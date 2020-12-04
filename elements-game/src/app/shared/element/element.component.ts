import { Component, Input, OnInit } from '@angular/core';
import { Element } from './element';

@Component({
  selector: 'element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() el?: Element;
  constructor(){}

  ngOnInit() {
  }
}
