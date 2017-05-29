import {
  Action,
  Middleware,
  Reducer,
  applyMiddleware,
  createStore
} from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';

const composeEnhancers = composeWithDevTools();

const reducer: Reducer<{}> = () => ({});
const middleware: Middleware[] = [];
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware)
));

const store1 = createStore(reducer, composeWithDevTools({
  actionSanitizer: (action) => action,
  stateSanitizer: (state) => state
}));

const store2 = createStore(reducer, composeWithDevTools({
  actionsBlacklist: 'SOME_ACTION'
}));

const store3 = createStore(reducer, composeWithDevTools({
  shouldRecordChanges: true,
  shouldStartLocked: true,
  shouldHotReload: true,
  shouldCatchErrors: true
}));

const store4 = createStore(reducer, composeWithDevTools({
  id: 'android-app',
  name: 'Android app',
  sendTo: 'https://example.com'
}));

const store5 = createStore(reducer, composeWithDevTools({
  name: 'Android app',
  realtime: true,
  hostname: 'localhost',
  port: 8000,
  secure: false,
  maxAge: 30,
  startOn: '@@START',
  stopOn: '@@STOP',
  sendOn: ['@@SEND'],
  sendOnError: 2
}));
