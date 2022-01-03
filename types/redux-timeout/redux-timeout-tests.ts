import { AnyAction, applyMiddleware, createStore } from 'redux';
import { addTimeout, removeTimeout, reduxTimeout, WATCH_ALL } from 'redux-timeout';

const reducer = (state = [], action: AnyAction) => state;
const store = createStore(reducer, applyMiddleware(reduxTimeout()));

store.dispatch(addTimeout(1, WATCH_ALL, () => {}));
store.dispatch(addTimeout(1, 'ACTION', () => {}));
store.dispatch(addTimeout(1, ['ACTION1', 'ACTION2'], () => {}));
store.dispatch(removeTimeout('ACTION'));
