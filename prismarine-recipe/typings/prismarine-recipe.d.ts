declare module "prismarine-recipe"{
    function prismarineRecipe(version: string): prismarineRecipe.MCRecipeVersion;

    module prismarineRecipe{
        interface Recipe{
            result: RecipeItem;
            inShape: RecipeItem[][];
            outShape: RecipeItem[][];
            ingredients: RecipeItem[];
            requiresTable: boolean;
            delta: RecipeItem;
        }
        interface RecipeStatic{
            find(itemType: number, metadata?: number): Recipe[];
        }
        interface MCRecipeVersion{
            Recipe: RecipeStatic;
            RecipeItem: RecipeItemStatic;
        }
        interface RecipeItem{
            id: number;
            metadata: number;
            count?: number;
        }
        interface RecipeItemStatic{
            fromEnum(itemFromRecipeEnum: number[] | number | RecipeItem): RecipeItem;
            clone(recipeItem: RecipeItem): RecipeItem;
        }
    }

    export = prismarineRecipe;
}
