/// <reference path="redux-thunk.d.ts" />
/// <reference path="../redux/redux.d.ts" />
/// <reference path="../es6-promise/es6-promise.d.ts" />
/// <reference path="../express/express.d.ts" />

import { createStore, applyMiddleware, Store, Dispatch } from 'redux';
import thunk from 'redux-thunk';
import { ThunkInterface } from 'redux-thunk';
import { Promise } from 'es6-promise';

declare var rootReducer: Function;
declare var fetch: any;

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

const store: Store = createStoreWithMiddleware(rootReducer);

function fetchSecretSauce() {
    return fetch('https://www.google.com/search?q=secret+sauce');
}

// These are the normal action creators you have seen so far.
// The actions they return can be dispatched without any middleware.
// However, they only express “facts” and not the “async flow”.

function makeASandwich(forPerson: any, secretSauce?: any): any {
    return {
        type: 'MAKE_SANDWICH',
        forPerson,
        secretSauce
    };
}

function apologize(fromPerson: any, toPerson?: any, error?: any): any {
    return {
        type: 'APOLOGIZE',
        fromPerson,
        toPerson,
        error
    };
}

function withdrawMoney(amount: number): any {
    return {
        type: 'WITHDRAW',
        amount
    };
}

// Even without middleware, you can dispatch an action:
store.dispatch(withdrawMoney(100));

// But what do you do when you need to start an asynchronous action,
// such as an API call, or a router transition?

// Meet thunks.
// A thunk is a function that returns a function.
// This is a thunk.

function makeASandwichWithSecretSauce(forPerson: any): ThunkInterface {

    // Invert control!
    // Return a function that accepts `dispatch` so we can dispatch later.
    // Thunk middleware knows how to turn thunk async actions into actions.

    return function (dispatch: Dispatch): any {
        return fetchSecretSauce().then(
            (sauce: any) => dispatch(makeASandwich(forPerson, sauce)),
            (error: any) => dispatch(apologize('The Sandwich Shop', forPerson, error))
        );
    };
}

// Thunk middleware lets me dispatch thunk async actions
// as if they were actions!

store.dispatch(
    makeASandwichWithSecretSauce('Me')
);

// It even takes care to return the thunk’s return value
// from the dispatch, so I can chain Promises as long as I return them.

store.dispatch(
    makeASandwichWithSecretSauce('My wife')
).then(() => {
    console.log('Done!');
});

// In fact I can write action creators that dispatch
// actions and async actions from other action creators,
// and I can build my control flow with Promises.

function makeSandwichesForEverybody(): ThunkInterface {
    return function (dispatch: Dispatch, getState: () => any): any {
        if (!getState().sandwiches.isShopOpen) {

            // You don’t have to return Promises, but it’s a handy convention
            // so the caller can always call .then() on async dispatch result.

            return Promise.resolve();
        }

        // We can dispatch both plain object actions and other thunks,
        // which lets us compose the asynchronous actions in a single flow.

        return dispatch(
            makeASandwichWithSecretSauce('My Grandma')
        ).then(() =>
                Promise.all([
                    dispatch(makeASandwichWithSecretSauce('Me')),
                    dispatch(makeASandwichWithSecretSauce('My wife'))
                ])
        ).then(() =>
                dispatch(makeASandwichWithSecretSauce('Our kids'))
        ).then(() =>
                dispatch(getState().myMoney > 42 ?
                        withdrawMoney(42) :
                        apologize('Me', 'The Sandwich Shop')
                )
        );
    };
}

