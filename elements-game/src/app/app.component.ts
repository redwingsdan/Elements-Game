import { Component } from '@angular/core';
import { Element } from './shared/element/element';
import { allElements } from './shared/element/element.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Elements Game';
  allElements = allElements;
}
