import { createStore, Store, Reducer } from "redux";
import { batchedSubscribe } from 'redux-batched-subscribe';

interface State {
    [key: string]: any;
}

const rootReducer: Reducer<State> = () => ({});
declare const batchFunction: () => void;

const store: Store<State> = createStore(
    rootReducer,
    undefined,
    batchedSubscribe(batchFunction)
);
