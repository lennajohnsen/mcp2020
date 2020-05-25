import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DinnersComponent } from './dinners.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { CookbookComponent } from './cookbook/cookbook.component';
import { MenuAddComponent } from './cookbook/menu-add/menu-add.component';
import { MenuSubtractComponent } from './cookbook/menu-subtract/menu-subtract.component'; 



@NgModule({
  declarations: [
    DinnersComponent,
    RecipeComponent,
    CookbookComponent,
    MenuAddComponent,
    MenuSubtractComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DinnerModule { }
