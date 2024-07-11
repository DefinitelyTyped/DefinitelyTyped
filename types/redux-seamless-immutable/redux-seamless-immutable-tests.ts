import { Action, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { combineReducers, routerReducer, stateTransformer } from "redux-seamless-immutable";

interface State {
    prop1: boolean;
    prop2: string;
}

type GenericActionPayload = Action & {
    payload: string;
};

function reducer1(state: State, action: GenericActionPayload): State {
    const payload = action.payload;
    return state;
}

function reducer2(state: State, action: GenericActionPayload): State {
    const payload = action.payload;
    return state;
}

// Test `combineReducers` and `routerReducer`
const combined = combineReducers({
    reducer1,
    reducer2,
    routerReducer,
});

// Test `stateTransformer`
const loggerMiddleware = createLogger({
    stateTransformer,
});

// Test integration with `createStore`
const store = createStore(
    combined,
    applyMiddleware(
        loggerMiddleware,
    ),
);
