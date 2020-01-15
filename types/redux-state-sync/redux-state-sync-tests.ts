import { createStore, applyMiddleware, Action } from "redux";
import { createStateSyncMiddleware, initStateWithPrevTab, withReduxStateSync } from "redux-state-sync";

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
        broadcastChannelOption: {}
    });

function rootReducer(state: TestState, action: Action): TestState {
    return state;
}

const store = createStore(withReduxStateSync(rootReducer), ['test'], applyMiddleware(middleware));
initStateWithPrevTab(store);
