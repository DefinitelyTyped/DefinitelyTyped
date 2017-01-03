import { reduxReactRouter, routerStateReducer, ReduxRouter, pushState } from './index';

export function someAsyncReduxAction(someArg: Object) {
    return function(dispatch: (action: Object) => void) {
        dispatch(pushState(null, someArg));
    };
}
