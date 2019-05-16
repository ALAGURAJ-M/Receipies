import { Component, OnInit } from '@angular/core';
import{ Recipe} from '../recipe.model'
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
	
	
	recipes: Recipe[] = [new Recipe('A Test 1','TEst 1 Desc','https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/mrtrending0475.jpg?itok=ULkGk3Pn')];
	
	constructor() {
		
		///console.log(obj);
		this.recipes.push(new Recipe('A Test 2','TEst 2 Desc','https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'));
		  }

	  ngOnInit() {
	  }

}
