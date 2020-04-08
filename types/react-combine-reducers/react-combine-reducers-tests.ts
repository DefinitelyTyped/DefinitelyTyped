import combineReducers from "react-combine-reducers";

type SimpleAction = { type: string; payload: any };

type GreeniesState = {
  fruit: 'apple' | 'pear' | 'kiwi';
  vegetable: 'carrot' | 'eggplant';
};

type ProteinsState = {
  similiCarne: 'tofu' | 'seitan';
  vegetable: 'bean' | 'artichoke';
};

type DrinkState = {
  beverage: 'water' | 'juice';
  numberOfGlasses: number;
};

type DessertState = {
  cake: 'chocolate' | 'cherry';
  drink: 'tea' | 'coffee';
};

type FullMealState = {
  proteins: ProteinsState;
  greenies: GreeniesState;
  dessert: DessertState;
  drink: DrinkState;
}

type FullMealReducer = (state: FullMealState, action: SimpleAction) => FullMealState;

const proteinsReducer = (
  proteinsState: ProteinsState,
  action: SimpleAction
) => {
  switch (action) {
    default:
      return proteinsState;
  }
}

const drinkReducer = (
  drinkState: DrinkState,
  action: SimpleAction
) => {
  switch (action) {
    default:
      return drinkState;
  }
}

const dessertReducer = (
  dessertState: DessertState,
  action: SimpleAction
) => {
  switch (action) {
    default:
      return dessertState;
  }
}

const greeniesReducer = (
  greeniesState: GreeniesState,
  action: SimpleAction
) => {
  switch (action) {
    default:
      return greeniesState;
  }
}

// $ExpectError
combineReducers("");

// $ExpectError
combineReducers<FullMealReducer>({});

// $ExpectError
combineReducers<FullMealReducer>();

// $ExpectError
combineReducers<FullMealReducer>({
  books: ["The Book Thief"]
});

// $ExpectError
combineReducers<FullMealReducer>({
  proteins: [100]
});

// $ExpectError
combineReducers<FullMealReducer>({
  proteins: [3, proteinsReducer],
});

// $ExpectError
combineReducers<FullMealReducer>({
  proteins: [proteinsReducer, 3],
});

// $ExpectError
combineReducers<FullMealReducer>({
  proteins: [proteinsReducer, {
    similiCarne: 'tofu',
    vegetable: 'artichoke'
  }],
});

// $ExpectError
combineReducers<FullMealReducer>({
  proteins: [proteinsReducer, {
    similiCarne: 'tofu',
    vegetable: 'artichoke'
  }],
  greenies: [proteinsReducer, {
    fruit: 'kiwi',
    vegetable: 'eggplant'
  }],
  drink: [proteinsReducer, {
    beverage: 'juice',
    numberOfGlasses: 2
  }],
  dessert: [proteinsReducer, {
    cake: 'chocolate',
    drink: 'tea',
  }]
});

const [fullMealReducer, initialMeal] = combineReducers<FullMealReducer>({
  proteins: [proteinsReducer, {
    similiCarne: 'tofu',
    vegetable: 'artichoke'
  }],
  greenies: [greeniesReducer, {
    fruit: 'kiwi',
    vegetable: 'eggplant'
  }],
  drink: [drinkReducer, {
    beverage: 'juice',
    numberOfGlasses: 2
  }],
  dessert: [dessertReducer, {
    cake: 'chocolate',
    drink: 'tea',
  }],
});

initialMeal.dessert;
initialMeal.drink;
initialMeal.proteins;
initialMeal.greenies;

// $ExpectError
initialMeal.lamps;

// $ExpectError
fullMealReducer(3, {});

// $ExpectError
fullMealReducer({}, {});

// $ExpectError
fullMealReducer({
  proteins: {
    similiCarne: 'tofu',
    vegetable: 'artichoke'
  },
  greenies:  {
    fruit: 'kiwi',
    vegetable: 'eggplant'
  },
  drink: {
    beverage: 'juice',
    numberOfGlasses: 2
  },
  dessert: {
    cake: 'chocolate',
    drink: 'tea',
  },
}, 67);

fullMealReducer({
  proteins: {
    similiCarne: 'tofu',
    vegetable: 'artichoke'
  },
  greenies:  {
    fruit: 'kiwi',
    vegetable: 'eggplant'
  },
  drink: {
    beverage: 'juice',
    numberOfGlasses: 2
  },
  dessert: {
    cake: 'chocolate',
    drink: 'tea',
  },
}, {
  type: 'eat',
  payload: 'everything'
});

export { fullMealReducer, initialMeal };
