// Type definitions for redux-thunk v2.1.0
// Project: https://github.com/gaearon/redux-thunk
// Definitions by: Qubo <https://github.com/tkqubo>, Kaur Kuut <https://github.com/xStrom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Redux from "redux";
import { Middleware } from "redux";

export as namespace ReduxThunk;

declare const thunk: Middleware & {
	withExtraArgument(extraArgument: any): Middleware;
};
export default thunk;

declare module 'redux' {
	export type ThunkAction<R, S, E> = (dispatch: Dispatch<S>, getState: () => S, extraArgument: E) => R;

	export interface Dispatch<S> {
		<R, E>(asyncAction: ThunkAction<R, S, E>): R;
	}
}

