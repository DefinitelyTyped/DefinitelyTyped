import { reduxReactRouter, routerStateReducer, ReduxRouter, pushState } from 'redux-router';

export function someAsyncReduxAction(someArg: Object) {
    return function(dispatch: (action: Object) => void) {
        dispatch(pushState(null, someArg));
    };
}