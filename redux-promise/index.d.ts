// Type definitions for redux-promise v0.5.3
// Project: https://github.com/acdlite/redux-promise
// Definitions by: Rogelio Morrell Caballero <https://github.com/molekilla>, Kaur Kuut <https://github.com/xStrom>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Redux from 'redux';

declare const promise: ReduxPromise.Promise;
export = promise;

declare namespace ReduxPromise {
	export interface Promise extends Redux.Middleware {}
}

declare module 'redux' {
	type PromiseAction<S> = (dispatch: Redux.Dispatch<S>, getState?: () => S) => any;

	interface Dispatch<S> {
		<R>(asyncAction: PromiseAction<S>): R;
	}
}
