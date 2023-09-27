import { applyMiddleware, Middleware } from "redux";
import { createInjectableStore } from "redux-injectable-store";

interface State {
    foo: string;
    bar?: string | undefined;
    baz?: string | undefined;
}

const initialState: State = { foo: "bar" };

const middleware: Middleware[] = [];
const enhancer = applyMiddleware(...middleware);
const store = createInjectableStore<State>(initialState, enhancer);
const anotherStore = createInjectableStore<State>(initialState, enhancer, reducer => reducer);

const dummyReducer = (state: State) => state;

store.inject("foo", dummyReducer);
store.inject("bar", dummyReducer, true);
store.clearReducers();

anotherStore.injectAll({
    bar: dummyReducer,
    baz: dummyReducer,
});
