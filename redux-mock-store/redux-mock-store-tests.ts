/// <reference path="./redux-mock-store.d.ts" />

import configureStore from 'redux-mock-store';

// Redux store API tests
// The following test are taken from ../redux/redux-tests.ts
function counter(state: any, action: any) {
    if (!state) {
        state = 0;
    }
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function loggingMiddleware() {
    return (next: Redux.Dispatch<any>) => (action: any) => {
        console.log(action.type);
        next(action);
    };
}

const storeMock = configureStore([loggingMiddleware]);
const initialState = 0
let store = storeMock(initialState);


store.subscribe(() => {
    // ...
});

store.dispatch({ type: 'INCREMENT' });


// Additional mock store API tests
var actions: Array<any> = store.getActions();

store.clearActions();