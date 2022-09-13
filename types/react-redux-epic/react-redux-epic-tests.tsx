import * as React from 'react';
import { Epic } from 'redux-observable';
import { renderToString, wrapRootEpic } from 'react-redux-epic';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/ignoreElements';

interface Action {
    type: string;
    payload: any;
}

const rootEpic: Epic<Action, {}> = action$ => {
    return action$
        .do(action => {
            // Action dispatched
        })
        .ignoreElements();
};

const wrappedRootEpic = wrapRootEpic(rootEpic);

renderToString(<div>Hello, world</div>, wrappedRootEpic).subscribe({
    next({ markup }) {
        // Done
    }
});
