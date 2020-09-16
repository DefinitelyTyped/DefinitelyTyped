import * as React from 'react';
import * as ReactDOM from 'react-dom';
import mirror = require('mirrorx');
/**
 * add mirror.model.tests
 */
mirror.model({
    name: 'app',
    initialState: 0,
    reducers: {
        increment(state: any) { return state + 1; },
        decrement(state: any) { return state - 1; }
    },
    effects: {
        async incrementAsync() {
            await new Promise<void>((resolve, reject) => {
                setTimeout(() => {
                    resolve();
                }, 1000);
            });
            mirror.actions.app.increment();
        }
    }
});
