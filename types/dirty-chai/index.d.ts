// Type definitions for dirty-chai 2.0
// Project: https://github.com/prodatakey/dirty-chai
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
//                 Gregor Stamać <https://github.com/gstamac>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="chai" />
/// <reference types="chai-as-promised" />

import Assertion = Chai.Assertion;

declare module 'dirty-chai' {
    function dirtyChai(chai: any, utils: any): void;

    namespace dirtyChai { }

    export = dirtyChai;
}

declare namespace Chai {
    interface Assertion {
        (message?: string): Assertion;
        ensure(): Assertion;
    }

    interface PromisedAssertion extends Eventually, PromiseLike<any> {
        (message?: string): Assertion;
        ensure(): Assertion;
    }
}
