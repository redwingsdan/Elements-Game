import { CdkDragDrop, CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { AppElement } from 'src/app/shared/element/element';

@Component({
  selector: 'play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.scss']
})
export class PlayAreaComponent implements OnInit {
  @Input() elementsList!: AppElement[];
  removedItems = [];
  @Output() drop = new EventEmitter<any>();
  @Output() add = new EventEmitter<any>();
  constructor(){}

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.elementsList && !changes.elementsList.isFirstChange()){
      this.addElement();
    }
  }

  addElement() {
    this.add.emit();
  }
  onDrop(event: CdkDragEnd) {
    event.source.data.position.x += event.distance.x;
    event.source.data.position.y += event.distance.y;
    this.drop.emit(event);
  }
}
