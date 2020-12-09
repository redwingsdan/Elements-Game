import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ElementsBarComponent } from './elements-bar.component';
import { ElementModule } from 'src/app/shared/element/element.module';

@NgModule({
  declarations: [
    ElementsBarComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    ElementModule
  ],
  providers: [],
  exports: [ElementsBarComponent]
})
export class ElementsBarModule { }
