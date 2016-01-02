/// <reference path="redux-devtools.d.ts" />
/// <reference path="../redux/redux.d.ts" />
/// <reference path="../react/react.d.ts" />

import { compose, createStore, applyMiddleware, Middleware, Reducer } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import * as React from 'react';
import { Component } from 'react';

declare var m1: Middleware;
declare var m2: Middleware;
declare var m3: Middleware;
declare var reducer: Reducer;
class CounterApp extends Component<any, any> { };
class Provider extends Component<{ store: any }, any> { };

const finalCreateStore = compose(
    // Enables your middleware:
    applyMiddleware(m1, m2, m3), // any Redux middleware, e.g. redux-thunk
    // Provides support for DevTools:
    devTools(),
    // Lets you write ?debug_session=<name> in address bar to persist debug sessions
    persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);
const store = finalCreateStore(reducer);

class Root extends Component<any, any> {
    render() {
        return (
            <div>
                <Provider store={store}>
                    {() => <CounterApp />}
                </Provider>
                <DebugPanel top right bottom>
                    <DevTools store={store} monitor={LogMonitor} />
                </DebugPanel>
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
                <DebugPanel top right bottom>
                    <DevTools store={store}
                        monitor={LogMonitor}
                        visibleOnLoad={true} />
                </DebugPanel>
            </div>
        );
    }
}
