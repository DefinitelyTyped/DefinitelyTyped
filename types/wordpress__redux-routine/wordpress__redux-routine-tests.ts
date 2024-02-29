import createMiddleware from "@wordpress/redux-routine";
import { applyMiddleware, createStore } from "redux";

const middleware = createMiddleware({
    FOO: action => action.foo,
    BAR(action) {
        return action.bar;
    },
});

const store = createStore(state => state, applyMiddleware(middleware));
