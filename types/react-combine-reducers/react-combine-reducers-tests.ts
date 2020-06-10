import combineReducers from 'react-combine-reducers';

interface SimpleAction {
    type: string;
    payload: any;
}

interface GreeniesState {
    fruit: 'apple' | 'pear' | 'kiwi';
    vegetable: 'carrot' | 'eggplant';
}

interface ProteinsState {
    similiCarne: 'tofu' | 'seitan';
    vegetable: 'bean' | 'artichoke';
}

interface DrinkState {
    beverage: 'water' | 'juice';
    numberOfGlasses: number;
}

interface DessertState {
    cake: 'chocolate' | 'cherry';
    drink: 'tea' | 'coffee';
}

interface FullMealState {
    proteins: ProteinsState;
    greenies: GreeniesState;
    dessert: DessertState;
    drink: DrinkState;
}

type FullMealReducer = (state: FullMealState, action: SimpleAction) => FullMealState;

const proteinsReducer = (proteinsState: ProteinsState, action: SimpleAction) => {
    switch (action) {
        default:
            return proteinsState;
    }
};

const drinkReducer = (drinkState: DrinkState, action: SimpleAction) => {
    switch (action) {
        default:
            return drinkState;
    }
};

const dessertReducer = (dessertState: DessertState, action: SimpleAction) => {
    switch (action) {
        default:
            return dessertState;
    }
};

const greeniesReducer = (greeniesState: GreeniesState, action: SimpleAction) => {
    switch (action) {
        default:
            return greeniesState;
    }
};

// $ExpectError
combineReducers('');

// $ExpectError
combineReducers<FullMealReducer>({});

// $ExpectError
combineReducers<FullMealReducer>();

combineReducers<FullMealReducer>({
    // $ExpectError
    books: ['The Book Thief'],
});

combineReducers<FullMealReducer>({
    // $ExpectError
    proteins: [100],
});

combineReducers<FullMealReducer>({
    // $ExpectError
    proteins: [3, proteinsReducer],
});

combineReducers<FullMealReducer>({
    // $ExpectError
    proteins: [proteinsReducer, 3],
});

// $ExpectError
combineReducers<FullMealReducer>({
    proteins: [
        proteinsReducer,
        {
            similiCarne: 'tofu',
            vegetable: 'artichoke',
        },
    ],
});

combineReducers<FullMealReducer>({
    proteins: [
        proteinsReducer,
        {
            similiCarne: 'tofu',
            vegetable: 'artichoke',
        },
    ],
    greenies: [
        // $ExpectError
        proteinsReducer,
        {
            fruit: 'kiwi',
            vegetable: 'eggplant',
        },
    ],
    drink: [
        // $ExpectError
        proteinsReducer,
        {
            beverage: 'juice',
            numberOfGlasses: 2,
        },
    ],
    dessert: [
        // $ExpectError
        proteinsReducer,
        {
            cake: 'chocolate',
            drink: 'tea',
        },
    ],
});

const [fullMealReducer, initialMeal] = combineReducers<FullMealReducer>({
    proteins: [
        proteinsReducer,
        {
            similiCarne: 'tofu',
            vegetable: 'artichoke',
        },
    ],
    greenies: [
        greeniesReducer,
        {
            fruit: 'kiwi',
            vegetable: 'eggplant',
        },
    ],
    drink: [
        drinkReducer,
        {
            beverage: 'juice',
            numberOfGlasses: 2,
        },
    ],
    dessert: [
        dessertReducer,
        {
            cake: 'chocolate',
            drink: 'tea',
        },
    ],
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

fullMealReducer(
    {
        proteins: {
            similiCarne: 'tofu',
            vegetable: 'artichoke',
        },
        greenies: {
            fruit: 'kiwi',
            vegetable: 'eggplant',
        },
        drink: {
            beverage: 'juice',
            numberOfGlasses: 2,
        },
        dessert: {
            cake: 'chocolate',
            drink: 'tea',
        },
    },
    // $ExpectError
    67,
);

fullMealReducer(
    {
        proteins: {
            similiCarne: 'tofu',
            vegetable: 'artichoke',
        },
        greenies: {
            fruit: 'kiwi',
            vegetable: 'eggplant',
        },
        drink: {
            beverage: 'juice',
            numberOfGlasses: 2,
        },
        dessert: {
            cake: 'chocolate',
            drink: 'tea',
        },
    },
    {
        type: 'eat',
        payload: 'everything',
    },
);

export { fullMealReducer, initialMeal };
