import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementModule } from './shared/element/element.module';
import { ElementsBarModule } from './modules/elements-bar/elements-bar.module';
import { PlayAreaModule } from './modules/play-area/play-area.module';
import { DragAndDropService } from './shared/drag-and-drop/drag-and-drop.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	  ElementModule,
    PlayAreaModule,
    ElementsBarModule
  ],
  providers: [DragAndDropService],
  bootstrap: [AppComponent]
})
export class AppModule { }
