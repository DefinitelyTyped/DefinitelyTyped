import dva from 'dva';
import { connect } from 'dva';
import { Router, Route } from 'dva/router';
import * as React from "react";

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
const App = connect(({ count }: any) => ({
    count
}))(function ({ count, dispatch }: any) {
    return (
        <div>
            <h2>{ count }</h2>
            <button key="add" onClick={() => { dispatch({type: 'count/add'})}}>+</button>
            <button key="minus" onClick={() => { dispatch({type: 'count/minus'})}}>-</button>
        </div>
    );
});

// 4. Router
app.router(({ history }: any) =>
    <Router history={history}>
        <Route path="/" component={App}/>
    </Router>
);

// 5. Start
const countApp = app.start();
