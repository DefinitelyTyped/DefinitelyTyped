import { createStore, applyMiddleware, Action } from "redux";
import { createStateSyncMiddleware, initStateWithPrevTab, withReduxStateSync, initMessageListener } from "redux-state-sync";

interface TestState {
    a: number;
    b: string;
    c: string;
}
const middleware = createStateSyncMiddleware({
    channel: 'test',
    predicate: (action) => true,
    blacklist: [],
    whitelist: [],
    broadcastChannelOption: {},
    prepareState: (state) => state,
});

// $ExpectError
const middlewareError = createStateSyncMiddleware({ broadcastChannelOption: null });

function rootReducer(state: TestState, action: Action): TestState {
    return state;
}

const store = createStore(withReduxStateSync(rootReducer, (state) => state), ['test'], applyMiddleware(middleware));
initStateWithPrevTab(store);
initMessageListener(store);
