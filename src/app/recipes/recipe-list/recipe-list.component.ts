import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe','Test Recipe Desc','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Samosa', 'Samosa Desc', 'https://i0.wp.com/media.hungryforever.com/' +
      'wp-content/uploads/2017/06/07214720/feature-image-keema-samosa.jpg?zoom=1.25&ssl=1?w=1269&strip=all&quality=80'),
    new Recipe('Palak Paneer', 'Palak Paneer', 'https://www.cookwithkushi.com/wp-content/uploads/2016/05/IMG_9736_.jpg'),
    new Recipe('Chole Bhature','Chole Bhature desc','http://www.jaipurthepinkcity.com/wp-content' +
      '/uploads/2015/09/chole-bhature-recipe-in-hindi.jpg'),
    new Recipe('Litti CHokha','Litti chokha desc','https://www.whiskaffair.com/wp-content/' +
      'uploads/2017/11/Litti-Chokha-1-800x1198.jpg')
];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
     this.recipeWasSelected.emit(recipe);
  }

}
