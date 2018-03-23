// Type definitions for redux-testkit 1.0
// Project: https://github.com/wix/redux-testkit#readme
// Definitions by: Andrey Kizimov <https://github.com/Bookler96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Redux from 'redux';

//-----------------------------------------------------------------------

interface ReducerMainCommands {
	expect(action: Redux.AnyAction): InternalReducerCommands;
	execute(action: Redux.AnyAction): any;
}

interface InternalReducerCommands {
	toReturnState(expected: Redux.AnyAction): any;
	toStayTheSame(): any;
	toChangeInState(expectedChanges: any): any;
}

interface ReducerAction extends ReducerMainCommands {
	withState(state: any): ReducerMainCommands;
}

//-----------------------------------------------------------------------

interface SelectorExpect {
	toReturn(expected: any): any;
}
interface SelectorAction {
	expect(state: any, ...arg: any[]): SelectorExpect;
	execute(state: any, ...arg: any[]): any;
}

//-----------------------------------------------------------------------

interface DispatchObject {
	isFunction(): boolean,
    isPlainObject(): boolean,
    getType(): any,
    getAction(): any,
    getName(): any
}

interface ThunkMainCommands {
	execute(...arg: any[]): DispatchObject[];
}

interface ThunkAction extends ThunkMainCommands {
	withState(state: any): ThunkMainCommands;
}

//-----------------------------------------------------------------------

interface FlushThunksMiddleware {
	flush(): void;
	reset(): void;
}

export class FlushThunks {
	static createMiddleware(): FlushThunksMiddleware;
}

//-----------------------------------------------------------------------

export function Reducer(action: Redux.Reducer<any>): ReducerAction;
export function Selector(action: Redux.Reducer<any>): SelectorAction;
export function Thunk(action: Redux.Reducer<any>): ThunkAction;

