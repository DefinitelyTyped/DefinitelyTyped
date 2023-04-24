import { createStore, applyMiddleware, Action } from "redux";
import { createStateSyncMiddleware, initStateWithPrevTab, withReduxStateSync, initMessageListener } from "redux-state-sync";

interface TestState {
    a: number;
    b: string;
    c: string;
}
const initialState: TestState = {
    a: 0,
    b: '',
    c: '',
};
const middleware = createStateSyncMiddleware({
    channel: 'test',
    predicate: (action) => true,
    blacklist: [],
    whitelist: [],
    broadcastChannelOption: {},
    prepareState: (state) => state,
    receiveState: (prevState, nextState) => nextState,
});

// @ts-expect-error
const middlewareError = createStateSyncMiddleware({ broadcastChannelOption: null });

function rootReducer(state: TestState = initialState, action: Action): TestState {
    return state;
}

const store = createStore(
    withReduxStateSync(rootReducer, (prevState, nextState) => nextState),
    initialState,
    applyMiddleware(middleware)
);
initStateWithPrevTab(store);
initMessageListener(store);
store.getState().a; // $ExpectType number
store.getState().b; // $ExpectType string
// @ts-expect-error
store.getState().missingProperty;
