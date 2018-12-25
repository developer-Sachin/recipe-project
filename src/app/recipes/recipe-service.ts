import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list-service";

@Injectable()
export class RecipeService {

  constructor(private shoppingListService: ShoppingListService){}

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test Recipe Desc', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('test', 2)
      ]),
    new Recipe('Samosa', 'Samosa Desc', 'https://i0.wp.com/media.hungryforever.com/' +
      'wp-content/uploads/2017/06/07214720/feature-image-keema-samosa.jpg?zoom=1.25&ssl=1?w=1269&strip=all&quality=80', [
      new Ingredient('White Flour', 1),
      new Ingredient('Potato', 5)
    ]),
    new Recipe('Palak Paneer', 'Palak Paneer', 'https://www.cookwithkushi.com/wp-content/uploads/2016/05/IMG_9736_.jpg', [
      new Ingredient('Cottage Cheese', 2),
      new Ingredient('Spinach', 4)
    ]),
    new Recipe('Chole Bhature', 'Chole Bhature desc', 'http://www.jaipurthepinkcity.com/wp-content' +
      '/uploads/2015/09/chole-bhature-recipe-in-hindi.jpg', [
      new Ingredient('white flour', 2),
      new Ingredient('Chick Peas', 3),
      new Ingredient('Yeast', 1)
    ]),
    new Recipe('Litti CHokha', 'Litti chokha desc', 'https://www.whiskaffair.com/wp-content/' +
      'uploads/2017/11/Litti-Chokha-1-800x1198.jpg', [
      new Ingredient('Wheat', 2),
      new Ingredient('Brinjal', 4)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
