import { pushState, reduxReactRouter, ReduxRouter, routerStateReducer } from "redux-router";

export function someAsyncReduxAction(someArg: Object) {
    return function(dispatch: (action: Object) => void) {
        dispatch(pushState(null, someArg));
    };
}
