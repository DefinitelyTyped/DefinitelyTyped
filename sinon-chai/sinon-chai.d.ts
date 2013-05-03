// Type definitions for sinon-chai 2.4.0
// Project: https://github.com/domenic/sinon-chai
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../chai/chai.d.ts" />

declare module chai {
    interface Been {
        called: bool;
        calledOnce: bool;
        calledTwice: bool;
        calledThrice: bool;
        calledBefore(spy: any): bool;
        calledAfter(spy: any): bool;
        calledOn(context: any): bool;
        alwaysCalledOn(context: any): bool;
        calledWith(...args: any[]): bool;
        alwaysCalledWith(...args: any[]): bool;
        calledWithExactly(...args: any[]): bool;
        alwaysCalledWithExactly(...args: any[]): bool;
        calledWithMatch(...args: any[]): bool;
        alwaysCalledWithMatch(...args: any[]): bool;
        returned(returnVal: any): bool;
        alwaysReturned(returnVal: any): bool;
        threw(errorObjOrErrorTypeStringOrNothing: any): bool;
        alwaysThrew(errorObjOrErrorTypeStringOrNothing: any): bool;
    }

    interface Have {
        been: Been;
    }
}
