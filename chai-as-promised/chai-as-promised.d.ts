// Type definitions for chai-as-promised
// Project: https://github.com/domenic/chai-as-promised/
// Definitions by: jt000 <https://github.com/jt000>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../chai/chai.d.ts" />

declare module 'chai-as-promised' {
    function chaiAsPromised(chai: any, utils: any): void;
    export = chaiAsPromised;
}

declare module Chai {

    interface Assertion {
        become(expected: any): Assertion;
        fulfilled: Assertion;
        rejected: Assertion;
        rejectedWith(expected: any): Assertion;
        notify(fn: Function): Assertion;
    }

    interface LanguageChains {
        eventually: Assertion;
    }

    interface Assert {
        eventually: Assert;
        isFulfilled(promise: any, message?: string): void;
        becomes(promise: any, expected: any, message?: string): void;
        doesNotBecome(promise: any, expected: any, message?: string): void;
        isRejected(promise: any, message?: string): void;
        isRejected(promise: any, expected: any, message?: string): void;
        isRejected(promise: any, match: RegExp, message?: string): void;
    }
}
