// Type definitions for sinon-chai 2.4.0
// Project: https://github.com/domenic/sinon-chai
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid/>
// DefinitelyTyped: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../chai/chai.d.ts" />

declare module chai {
    interface Expect {
        called: Expect;
        calledOnce: Expect;
        calledTwice: Expect;
        calledThrice: Expect;
        calledBefore(spy: Function): Expect;
        calledAfter(spy: Function): Expect;
        calledWithNew: Expect;
        alwaysCalledWithNew: Expect;
        calledOn(context: any): Expect;
        alwaysCalledOn(context: any): Expect;
        calledWith(...args: any[]): Expect;
        alwaysCalledWith(...args: any[]): Expect;
        calledWithExactly(...args: any[]): Expect;
        alwaysCalledWithExactly(...args: any[]): Expect;
        calledWithMatch(...args: any[]): Expect;
        alwaysCalledWithMatch(...args: any[]): Expect;
        returned(returnVal: any): Expect;
        alwaysReturned(returnVal: any): Expect;
        threw(errorObjOrErrorTypeStringOrNothing: any): Expect;
        alwaysThrew(errorObjOrErrorTypeStringOrNothing: any): Expect;
    }
}
