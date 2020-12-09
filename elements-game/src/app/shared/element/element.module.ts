import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ElementComponent } from './element.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    ElementComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  exports: [ElementComponent]
})
export class ElementModule { }
