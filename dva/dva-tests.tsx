/// <reference path="../react/react.d.ts" />
/// <reference path="./dva.d.ts" />

import React = __React;

import dva from 'dva';
import { connect } from 'dva';
import { Router, Route } from 'dva/router';

// 1. Initialize
const app = dva();

// 2. Model
app.model({
    namespace: 'count',
    state: 0,
    reducers: {
        add(count: number) {
            return count + 1
        },
        minus(count: number) {
            return count - 1
        },
    },
});

// 3. View
const App = connect(({ count }) => ({
    count
}))(function ({ count, dispatch }) {
    return (
        <div>
            <h2>{ count }</h2>
            <button key="add" onClick={() => { dispatch({type: 'count/add'})}}>+</button>
            <button key="minus" onClick={() => { dispatch({type: 'count/minus'})}}>-</button>
        </div>
    );
});

// 4. Router
app.router(({ history }) =>
    <Router history={history}>
        <Route path="/" component={App}/>
    </Router>
);

// 5. Start
const countApp = app.start();
