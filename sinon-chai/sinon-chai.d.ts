// Type definitions for sinon-chai 2.4.0
// Project: https://github.com/domenic/sinon-chai
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../chai/chai.d.ts" />

declare module chai {
    interface Been {
        called: boolean;
        calledOnce: boolean;
        calledTwice: boolean;
        calledThrice: boolean;
        calledBefore(spy: any): boolean;
        calledAfter(spy: any): boolean;
        calledOn(context: any): boolean;
        alwaysCalledOn(context: any): boolean;
        calledWith(...args: any[]): boolean;
        alwaysCalledWith(...args: any[]): boolean;
        calledWithExactly(...args: any[]): boolean;
        alwaysCalledWithExactly(...args: any[]): boolean;
        calledWithMatch(...args: any[]): boolean;
        alwaysCalledWithMatch(...args: any[]): boolean;
        returned(returnVal: any): boolean;
        alwaysReturned(returnVal: any): boolean;
        threw(errorObjOrErrorTypeStringOrNothing: any): boolean;
        alwaysThrew(errorObjOrErrorTypeStringOrNothing: any): boolean;
    }

    interface Have {
        been: Been;
    }
}
