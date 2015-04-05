// Type definitions for chai-as-promised
// Project: https://github.com/domenic/chai-as-promised/
// Definitions by: jt000 <https://github.com/jt000>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../chai/chai.d.ts" />

declare module 'chai-as-promised' {
    import chai = require('chai');

    function chaiAsPromised(chai: any, utils: any): void;

    export = chaiAsPromised;
}

declare module chai {

    interface LanguageChains {
        become(expected: any): Expect;
        eventually: Expect;
        rejected: Expect;
        rejectedWith(expected: any): Expect;
        notify(fn: Function): Expect;
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