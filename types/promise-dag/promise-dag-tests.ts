import * as promiseDag from "promise-dag";

// describe the computation as steps which depend on previous steps.
// in this cooking example, functions which return a promise are prefixed with `p_`.
const mushroomPastaRecipe = {
	hotWater: [(): Promise<string> => p_boilWater("1L")],
	rawPasta: [(): Promise<string> => p_pickIngredient("pasta")],
	cookedPasta: ["hotWater", "rawPasta", (hotWater: string, rawPasta: string) => p_boil(hotWater, rawPasta, "10 minutes")],

	meal: ["cookedPasta", (preparedMeal: string): Promise<string> => Promise.resolve(preparedMeal)]
};

const runCustomPromise = promiseDag.implement({
	resolve: (v: any): Promise<any> => Promise.resolve(v),
	reject: (err: any): Promise<any> => Promise.resolve(err),
	all: (ps: any[] | Array<PromiseLike<any>>): Promise<any[]> => Promise.all(ps)
});

runCustomPromise(mushroomPastaRecipe, ["meal"])["meal"].then(eat);

function eat(meal: string) {
	const consume = `eating ${meal}`;
}

function p_boilWater(volume: string): Promise<string> {
	return Promise.resolve(volume);
}

function p_pickIngredient(ingredient: string): Promise<string> {
	return Promise.resolve(ingredient);
}

function p_boil(volume: string, ingredient: string, duration: string): Promise<string> {
	return Promise.resolve(`cooked ${ingredient} in ${volume} for ${duration}`);
}
