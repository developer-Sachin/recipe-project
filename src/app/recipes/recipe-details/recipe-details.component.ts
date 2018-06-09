import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe:Recipe;

  alternateImage = "https://www.w3schools.com/w3images/lights.jpg";

  constructor() { }

  ngOnInit() {
  }

}
