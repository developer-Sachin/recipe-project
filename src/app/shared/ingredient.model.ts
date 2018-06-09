export class Ingredient {
  public name: string;
  public amount: number;

  public constructor(name: string , amount: number){
    this.name = name;
    this.amount = amount;
  }

  /*
     remove everything . there is a shortcut for the abouve code.

     constructor(public name: string , public amount: number){}   -- thats it
   */

}
