import { combineReducers, applyMiddleware, createStore } from 'redux';
import { createBrowserHistory, routerReducer, routerMiddleware, startListener, push } from 'redux-first-routing';

// Create the history object
const history = createBrowserHistory();

// Add the reducer, which adds location state to the store
const rootReducer = combineReducers({
    router: routerReducer // Convention is to use the "router" property
});

// Build the middleware, which intercepts navigation actions and calls the corresponding history method
const middleware = routerMiddleware(history);

// Create the store
const store = createStore(rootReducer, {}, applyMiddleware(middleware));

// Start the history listener, which automatically dispatches actions to keep the store in sync with the history
startListener(history, store);

// Now you can read the location from the store!
let currentLocation = store.getState().router.pathname;

// You can also subscribe to changes in the location!
const unsubscribe = store.subscribe(() => {
    const previousLocation = currentLocation;
    currentLocation = store.getState().router.pathname;

    if (previousLocation !== currentLocation) {
        console.log(`Location changed from ${previousLocation} to ${currentLocation}`);
        // Render your application reactively here (optionally using a compatible router)
    }
});

// And you can dispatch navigation actions from anywhere!
store.dispatch(push('/about'));

// Unsubscribe
unsubscribe();
