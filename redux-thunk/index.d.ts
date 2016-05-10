// Type definitions for redux-thunk v2.1.0
// Project: https://github.com/gaearon/redux-thunk
// Definitions by: Qubo <https://github.com/tkqubo>, Kaur Kuut <https://github.com/xStrom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare namespace Redux {
	type ThunkAction<R, S, E> = (dispatch: Dispatch<S>, getState: () => S, extraArgument: E) => R;

	interface Dispatch<S> {
		<R, E>(asyncAction: ThunkAction<R, S, E>): R;
	}
}

declare module "redux-thunk" {
	import { Middleware } from "redux";

	const thunk: Middleware & {
		withExtraArgument(extraArgument: any): Middleware;
	};

	export default thunk;
}
