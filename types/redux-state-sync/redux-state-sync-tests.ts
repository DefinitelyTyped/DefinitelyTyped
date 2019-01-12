import { createStore, applyMiddleware, Action } from 'redux'
import { createStateSyncMiddleware, initStateWithPrevTab, withReduxStateSync } from 'redux-state-sync'


interface TestState {
    a: number;
    b: string;
    c: string;
}
const config = {
    channel: 'test',
    predicate: () => {},
    blacklist: [],
    whitelist: [],
    broadcastChannelOption: {}
}
const middlewares = [
    createStateSyncMiddleware(config),
];

function rootReducer(state: TestState, action: Action): TestState {
    return state;
}
  
const store = createStore(withReduxStateSync(rootReducer), ['test'], ...applyMiddleware(middlewares))
initStateWithPrevTab(store);

