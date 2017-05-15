import {
  Action,
  Middleware,
  Reducer,
  applyMiddleware,
  createStore
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools();

const reducer: Reducer<{}> = () => ({});
const middleware: Middleware[] = [];
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware)
));

const store2 = createStore(reducer, composeWithDevTools({
  serialize: {
    options: {
      undefined: true,
      function: (fn: any) => fn.toString()
    }
  }
}));

const store3 = createStore(reducer, composeWithDevTools({
  serialize: {
    replacer: (key, value) => 'foo'
  }
}));

const store4 = createStore(reducer, composeWithDevTools({
  serialize: {
    replacer: (key, value) => 'bar'
  }
}));

const store5 = createStore(reducer, composeWithDevTools({
  serialize: {
    reviver: (key, value) => 'baz'
  }
}));

const store6 = createStore(reducer, composeWithDevTools({
  serialize: {
    immutable: /* Immutable */ {}
  }
}));

const store7 = createStore(reducer, composeWithDevTools({
  serialize: {
    immutable: /* Immutable */ {},
    refs: [/* Record */ {}]
  }
}));

const store8 = createStore(reducer, composeWithDevTools({
  actionSanitizer: (action) => action,
  stateSanitizer: (state) => state
}));

const store9 = createStore(reducer, composeWithDevTools({
  actionsBlacklist: 'SOME_ACTION'
}));

const store10 = createStore(reducer, composeWithDevTools({
  predicate: (state, action) => state.dev.logLevel === 'VERBOSE' && !action.forwarded
}));

const store11 = createStore(reducer, composeWithDevTools({
  shouldRecordChanges: true,
  pauseActionType: '@@PAUSE',
  autoPause: true,
  shouldStartLocked: true,
  shouldHotReload: true,
  shouldCatchErrors: true,
  features: {
    pause: true, // start/pause recording of dispatched actions
    lock: true, // lock/unlock dispatching actions and side effects
    persist: true, // persist states on page reloading
    export: 'custom', // export history of actions in a file
    import: 'custom', // import history of actions from a file
    jump: true, // jump back and forth (time travelling)
    skip: true, // skip (cancel) actions
    reorder: true, // drag and drop actions in the history list
    dispatch: true, // dispatch custom actions or action creators
    test: true // generate tests for the selected actions
  }
}));
