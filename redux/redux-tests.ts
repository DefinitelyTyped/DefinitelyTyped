/// <reference path="./redux.d.ts" />

import { createStore, applyMiddleware, Dispatch } from 'redux';

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
    return (next: Redux.Dispatch) => (action: any) => {
        console.log(action.type);
        next(action);
    };
}

let createStoreWithMiddleware = Redux.applyMiddleware(loggingMiddleware)(Redux.createStore);
let store = createStoreWithMiddleware(counter);


store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch({ type: 'INCREMENT' });


namespace CreateStoreExample {
    function todos(state:string[] = [], action:any):string[] {
        switch (action.type) {
            case 'ADD_TODO':
                return state.concat([ action.text ]);
            default:
                return state
        }
    }

    let store = createStore(todos, [ 'Use Redux' ]);

    store.dispatch({
        type: 'ADD_TODO',
        text: 'Read the docs'
    })
}


namespace SubscribeExample {
    const store = createStore((state:any) => state, {
        some: {deep: {property: 42}}
    });

    function select(state:any) {
        return state.some.deep.property
    }

    let currentValue: number;
    function handleChange() {
        let previousValue = currentValue;
        currentValue = select(store.getState());

        if (previousValue !== currentValue) {
            console.log('Some deep nested property changed from', previousValue, 'to', currentValue)
        }
    }

    let unsubscribe = store.subscribe(handleChange);
    handleChange();
}


namespace CustomLoggerMiddlewareExample {
    function logger({ getState }) {
        return (next: Dispatch) => (action: any) => {
            console.log('will dispatch', action)

            // Call the next dispatch method in the middleware chain.
            let returnValue = next(action)

            console.log('state after dispatch', getState())

            // This will likely be the action itself, unless
            // a middleware further in chain changed it.
            return returnValue
        }
    }

    function todos(state:any, action:any) {
        return state;
    }

    let store = createStore(
      todos,
      [ 'Use Redux' ],
      applyMiddleware(logger)
    );

    store.dispatch({
        type: 'ADD_TODO',
        text: 'Understand the middleware'
    })
}
