import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElementModule } from 'src/app/shared/element/element.module';
import { PlayAreaComponent } from './play-area.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    PlayAreaComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    ElementModule
  ],
  providers: [],
  exports: [PlayAreaComponent]
})
export class PlayAreaModule { }
