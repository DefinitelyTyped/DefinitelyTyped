import { createInjectableStore } from "redux-injectable-store";
import { applyMiddleware, compose, AnyAction, Middleware } from "redux";

interface State {
    foo: string;
    bar?: string;
    baz?: string;
}

const initialState: State = { foo: "bar" };

const middleware: Middleware[] = [];
const enhancer = applyMiddleware(...middleware);
const store = createInjectableStore<State>(initialState, enhancer);
const anotherStore = createInjectableStore<State>(initialState, enhancer, reducer => reducer);

const dummyReducer = (state: string) => state;

store.inject("foo", dummyReducer);

anotherStore.injectAll({
    bar: dummyReducer,
    baz: dummyReducer
});
