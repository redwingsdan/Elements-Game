import { Component } from '@angular/core';
import { DragAndDropService } from './shared/drag-and-drop/drag-and-drop.service';
import { AppElement } from './shared/element/element';
import { air, earth, fire, lava, mud, water } from 'src/app/shared/element/element.service';
import { copyArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elements-game';
  elementsList: AppElement[] = [air, water, fire, earth, lava, mud];
  constructor(private dndService: DragAndDropService) {}

  addItem(event: any) {
    event.item.data.position = event.distance;
    this.elementsList = this.elementsList.concat({... event.item.data});
    //copyArrayItem(event.previousContainer.data,
    //  this.elementsList,
    //  event.previousIndex,
    //  event.currentIndex);
  }
  dropItem(event: any){
    //this.dndService.drop(event);
    if (event.distance.x <= -150) {
      this.addItem(event);
    }
  }
}
