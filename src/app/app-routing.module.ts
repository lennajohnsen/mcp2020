import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeskComponent } from './components/desk/desk.component';
import { KaraokeComponent } from './components/karaoke/karaoke.component';
import { PaperPlateComponent } from './components/paper-plate/paper-plate.component';
import { PowerHourComponent } from './components/power-hour/power-hour.component';
import { DinnersComponent } from './components/dinners/dinners.component';


const routes: Routes = [
  { path: '', redirectTo: '/desk', pathMatch: 'full' },
  { path: 'desk', component: DeskComponent },
  { path: 'speaker', component: KaraokeComponent },
  { path: 'award', component: PaperPlateComponent },
  { path: 'clock', component: PowerHourComponent },
  { path: 'snack', component: DinnersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
