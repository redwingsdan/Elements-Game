import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElementComponent } from './element.component';

@NgModule({
  declarations: [
    ElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [ElementComponent]
})
export class ElementModule { }
