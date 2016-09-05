// <reference path="../react/react.d.ts" />
// <reference path="./dva.d.ts" />

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
        add  (count) {
            return count + 1
        },
        minus(count) {
            return count - 1
        },
    },
});

// 3. View
const App = connect(({ count }) => ({
    count
}))(function (props) {
    return (
        <div>
            <h2>{ props.count }</h2>
            <button key="add" onClick={() => { props.dispatch({type: 'count/add'})}}>+</button>
            <button key="minus" onClick={() => { props.dispatch({type: 'count/minus'})}}>-</button>
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
