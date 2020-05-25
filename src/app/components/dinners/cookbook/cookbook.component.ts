import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BREKKIE, APP, SOUP, ENTREE, SALAD, SIDE, SNACK, DESSERT, BEVVIE } from '../recipes/recipes';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.scss']
})
export class CookbookComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  // breakfast = "";
  menu = [];

  // valueChanged(){
  //   this.menu = this.random_brekkie;
  //   this.menuChange.emit(this.menu);
  // }
  
  addChoice(choice){
    this.menu.push(choice);
    this.valueChange.emit(this.menu)
  }
  
  breakfast_recipes = BREKKIE
  appetizer_recipes = APP
  soup_recipes = SOUP
  entree_recipes = ENTREE
  salad_recipes = SALAD
  sidedish_recipes = SIDE
  snack_recipes = SNACK
  dessert_recipes = DESSERT
  beverage_recipes = BEVVIE

  random_brekkie
  random_app
  random_soup
  random_entree
  random_salad
  random_side
  random_snack
  random_dessert
  random_bevvie

  selectRandomBrekkie(recipes): void{
    this.random_brekkie = recipes[Math.floor(Math.random()*recipes.length)];
  }

  selectRandomApp(recipes): void{
    this.random_app = recipes[Math.floor(Math.random()*recipes.length)];
  }

  selectRandomSoup(recipes): void{
    this.random_soup = recipes[Math.floor(Math.random()*recipes.length)];
  }

  selectRandomEntree(recipes): void{
    this.random_entree = recipes[Math.floor(Math.random()*recipes.length)];
  }

  selectRandomSalad(recipes): void{
    this.random_salad = recipes[Math.floor(Math.random()*recipes.length)];
  }

  selectRandomSide(recipes): void{
    this.random_side = recipes[Math.floor(Math.random()*recipes.length)];
  }

  selectRandomSnack(recipes): void{
    this.random_snack = recipes[Math.floor(Math.random()*recipes.length)];
  }

  selectRandomDessert(recipes): void{
    this.random_dessert = recipes[Math.floor(Math.random()*recipes.length)];
  }

  selectRandomBevvie(recipes): void{
    this.random_bevvie = recipes[Math.floor(Math.random()*recipes.length)];
  }
  constructor() { }

  ngOnInit(): void {
  }

}
