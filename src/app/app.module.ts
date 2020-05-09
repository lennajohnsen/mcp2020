import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeskComponent } from './components/desk/desk.component';
import { PowerHourComponent } from './components/power-hour/power-hour.component';
import { KaraokeComponent } from './components/karaoke/karaoke.component';
import { PaperPlateComponent } from './components/paper-plate/paper-plate.component';
import { DinnersComponent } from './components/dinners/dinners.component';

@NgModule({
  declarations: [
    AppComponent,
    DeskComponent,
    PowerHourComponent,
    KaraokeComponent,
    PaperPlateComponent,
    DinnersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
