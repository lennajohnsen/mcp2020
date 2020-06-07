import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeskComponent } from './components/desk/desk.component';
import { PowerHourComponent } from './components/power-hour/power-hour.component';
import { KaraokeComponent } from './components/karaoke/karaoke.component';
import { PaperPlateComponent } from './components/paper-plate/paper-plate.component';
import { DinnerModule } from './components/dinners/dinner.module';
import { PlaylistComponent } from './components/karaoke/playlist/playlist.component';
import { SideNavTogglerComponent } from './components/layout/side-nav-toggler/side-nav-toggler.component';
import { SideNavComponent } from './components/layout/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DeskComponent,
    PowerHourComponent,
    KaraokeComponent,
    PaperPlateComponent,
    PlaylistComponent,
    SideNavTogglerComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DinnerModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
