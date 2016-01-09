/// <reference path="./redux.d.ts" />

type State = number;
interface Action {
    type: string;
}

function counter(state: State, action: Action) {
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

const loggingMiddleware: Redux.Middleware<State, Action> = () => (next: Redux.Dispatch<Action>) => (action: Action) => {
    console.log(action.type);
    next(action);
};

let createStoreWithMiddleware = Redux.applyMiddleware<State, Action>(loggingMiddleware)(Redux.createStore);
let store = createStoreWithMiddleware(counter, 0);


store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch({ type: 'INCREMENT' });
