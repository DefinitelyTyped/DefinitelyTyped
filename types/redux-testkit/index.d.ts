// Type definitions for redux-testkit 1.0
// Project: https://github.com/wix/redux-testkit#readme
// Definitions by: Andrey Kizimov <https://github.com/Bookler96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as Redux from 'redux';
import { ThunkAction } from 'redux-thunk';

export function Reducer(action: Redux.Reducer<any>): {
	withState(state: any): {
		expect: (action: Redux.Action) => {
			toReturnState(expected: any): any,
			toStayTheSame(): any;
			toChangeInState(expectedChanges: any): any;
		},
		execute(action: Redux.Action): any;
	};

	expect: (action: Redux.Action) => {
		toReturnState(expected: any): any,
		toStayTheSame(): any;
		toChangeInState(expectedChanges: any): any;
	};
	execute(action: Redux.Action): any;
};

export function Selector(selector: (state: any, action: any) => any): {
	expect(state: any, ...args: any[]): any;
	execute(state: any, ...args: any[]): any;
};

export function Thunk(thunkFunc: ThunkAction<any, any, any>, extraArg?: any): {
	execute(...args: any[]): any;
	withState(state: any): {
		execute(...args: any[]): any;
	}
};

export namespace FlushThunks {
	function createMiddleware(): {
		flush(): any;
		reset(): any;
	};
}
