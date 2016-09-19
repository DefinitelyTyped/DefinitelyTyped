// Type definitions for redux-promise v0.5.3
// Project: https://github.com/acdlite/redux-promise
// Definitions by: Rogelio Morrell Caballero <https://github.com/molekilla>, Kaur Kuut <https://github.com/xStrom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare namespace Redux {
	type PromiseAction<S> = (dispatch: Redux.Dispatch<S>, getState?: () => S) => any;

	interface Dispatch<S> {
		<R>(asyncAction: PromiseAction<S>): R;
	}
}

declare namespace ReduxPromise {
	export interface Promise extends Redux.Middleware {}
}

declare module "redux-promise" {
	var promise: ReduxPromise.Promise;
	export = promise;
}
