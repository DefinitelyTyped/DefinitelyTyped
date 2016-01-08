import * as prismarineRecipe from "prismarine-recipe";
let Recipe = prismarineRecipe("1.8").Recipe;
console.log(JSON.stringify(Recipe.find(5)[0], null, 2));