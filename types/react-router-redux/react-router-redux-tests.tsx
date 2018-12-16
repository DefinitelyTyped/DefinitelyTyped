import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, combineReducers, applyMiddleware, Reducer } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';

import { ConnectedRouter, routerReducer, routerMiddleware, push, RouterState, createMatchSelector } from 'react-router-redux';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

interface State {
  router: RouterState;
}

// For testing, assume the router reducer is the only sub-reducer:
const reducers: Reducer<State> = combineReducers<State>({router: routerReducer});

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  reducers,
  applyMiddleware(middleware)
);

const Home = () => <div>Home</div>;
ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={Home}/>
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// Now you can dispatch navigation actions from anywhere!
store.dispatch(push('/foo'));

// And match location path using createMatchSelector
const matchSelector = createMatchSelector('/:foo');
const match = matchSelector(store.getState());
