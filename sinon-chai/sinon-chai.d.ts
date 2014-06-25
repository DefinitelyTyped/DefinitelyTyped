// Type definitions for sinon-chai 2.4.0
// Project: https://github.com/domenic/sinon-chai
// Definitions by: Kazi Manzur Rashid <https://github.com/kazimanzurrashid/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

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
        calledOn(context: any): Expect;
        calledWith(...args: any[]): Expect;
        calledWithExactly(...args: any[]): Expect;
        calledWithMatch(...args: any[]): Expect;
        returned(returnVal: any): Expect;
        thrown(errorObjOrErrorTypeStringOrNothing: any): Expect;
    }

    interface LanguageChains {
        always: Expect;
    }
}
