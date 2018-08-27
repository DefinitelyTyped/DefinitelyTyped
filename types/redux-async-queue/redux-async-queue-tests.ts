import { createStore, applyMiddleware, Reducer, Store } from 'redux';
import queueMiddleware from 'redux-async-queue';

const reducer: Reducer<any> = (state: any, action: any) => ({ state, action });

const store: Store<any> = createStore(
    reducer,
    applyMiddleware(queueMiddleware)
);
