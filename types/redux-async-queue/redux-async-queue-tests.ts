import { createStore, applyMiddleware } from 'redux';
import queueMiddleware from 'redux-async-queue';

const reducer = (state: any, action: any) => ({ state, action });

const store = createStore(
    reducer,
    applyMiddleware(queueMiddleware)
);
