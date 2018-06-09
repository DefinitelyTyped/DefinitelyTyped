// Type definitions for redux-thunk 2.3
// Project: https://github.com/reduxjs/redux-thunk
// Definitions by: Daniel Lytkin <https://github.com/aikoven>, Zhongliang Wang <https://github.com/Cryrivers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Middleware, Action, AnyAction } from "redux";

export interface ThunkDispatch<S, E, A extends Action> {
  <T extends A>(action: T): T;
  <R>(asyncAction: ThunkAction<R, S, E, A>): R;
}

export type ThunkAction<R, S, E, A extends Action> = (
  dispatch: ThunkDispatch<S, E, A>,
  getState: () => S,
  extraArgument: E
) => R;

export type ThunkMiddleware<S = {}, A extends Action = AnyAction, E = undefined> = Middleware<ThunkDispatch<S, E, A>, S, ThunkDispatch<S, E, A>>;

declare const thunk: ThunkMiddleware & {
  withExtraArgument<E>(extraArgument: E): ThunkMiddleware<{}, AnyAction, E>
};

export default thunk;
