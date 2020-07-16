import { createStore, Store, Reducer } from "redux";
import { batchedSubscribe, BatchFunction, NotifyFunction } from 'redux-batched-subscribe';

interface State {
    [key: string]: any;
}

const rootReducer: Reducer<State> = () => ({});

const asyncNotify: BatchFunction = (() => {
    let notifying = false;

    return (notify: NotifyFunction) => {
        if (notifying) {
            return;
        }

        notifying = true;
        setTimeout(() => {
            notify();
            notifying = false;
        });
    };
})();

const store = createStore(
    rootReducer,
    batchedSubscribe(asyncNotify)
);

const unsubscribe = store.subscribeImmediate(() => {
    store.getState();
});

unsubscribe();
