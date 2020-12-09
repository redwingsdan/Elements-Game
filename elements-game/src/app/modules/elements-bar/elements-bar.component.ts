import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppElement } from 'src/app/shared/element/element';
import { allElements } from 'src/app/shared/element/element.service';

@Component({
  selector: 'elements-bar',
  templateUrl: './elements-bar.component.html',
  styleUrls: ['./elements-bar.component.scss']
})
export class ElementsBarComponent implements OnInit {
  allElements = allElements;
  @Output() drop = new EventEmitter<any>();
  constructor(){}

  ngOnInit() {
  }

  onDrop(event: CdkDragDrop<AppElement[]>) {
    this.drop.emit(event);
  }
}
