/// <reference types="redux" />
/// <reference types="react" />

import { compose, createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { createDevTools as devTools, persistState } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import * as React from 'react';
import { Component } from 'react';

declare var m1: Middleware;
declare var m2: Middleware;
declare var m3: Middleware;
declare var reducer: Reducer<any>;
class CounterApp extends Component<any, any> { };
class Provider extends Component<{ store: any }, any> { };

const finalCreateStore = compose(
    // Enables your middleware:
    applyMiddleware(m1, m2, m3), // any Redux middleware, e.g. redux-thunk
    // Provides support for DevTools:
    devTools(null),
    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/)[0])
)(createStore);
const store = finalCreateStore(reducer);

class Root extends Component<any, any> {
    render() {
        return (
            <div>
                <Provider store={store}>
                    {() => <CounterApp />}
                </Provider>
            </div>
        );
    }
}

//
// https://github.com/gaearon/redux-devtools/blob/master/examples/counter/containers/App.js
//

class App extends Component<any, any> {
    render() {
        return (
            <div>
                <Provider store={store}>
                    {() => <CounterApp />}
                </Provider>
            </div>
        );
    }
}
