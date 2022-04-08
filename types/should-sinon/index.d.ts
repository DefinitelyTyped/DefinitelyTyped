// Type definitions for should-sinon 0.0
// Project: https://github.com/shouldjs/sinon
// Definitions by: AryloYeung <https://github.com/Arylo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as s from 'sinon';
import should = require('should');

declare module 'sinon' {
    interface SinonSpyCallApi {
        should: ShouldSinonAssertion;
    }
    interface ShouldSinonAssertion extends should.Assertion {
        /**
         * Assert stub was called with given object as this always. So if you call stub several times
         * all should be with the same object
         */
        alwaysCalledOn(obj: any): void;
        alwaysCalledWith(...args: any[]): void;
        /**
         * Passes if the spy was always called with the provided arguments and no others.
         */
        alwaysCalledWithExactly(...args: any[]): void;
        /**
         * Returns true if spy was always called with matching arguments (and possibly others).
         */
        alwaysCalledWithMatch(...args: any[]): void;
        alwaysCalledWithNew(): void;
        /**
         * Passes if the spy always threw the given exception. The exception can be a
         * string denoting its type, or an actual object. If no argument is
         * provided, the assertion passes if the spy ever threw any exception.
         */
        alwaysThrew(ex: string | Error): void;
        /**
         * Assert stub was called at exact number of times
         */
        callCount(count: number): void;
        /**
         * Assert stub was called at least once
         */
        called(): void;
        /**
         * Assert stub was called with given object as this
         */
        calledOn(obj: any): void;
        /**
         * Assert stub was called at exactly once
         */
        calledOnce(): void;
        /**
         * Assert stub was called at exactly thrice
         */
        calledThrice(): void;
        /**
         * Assert stub was called at exactly twice
         */
        calledTwice(): void;
        /**
         * Asserts that stub was called with given arguments
         */
        calledWith(...args: any[]): void;
        /**
         * Returns true if call received provided arguments and no others.
         */
        calledWithExactly(...args: any[]): void;
        /**
         * Returns true if spy was called with matching arguments (and possibly others).
         */
        calledWithMatch(...args: any[]): void;
        /**
         * Asserts that stub was called with new
         */
        calledWithNew(): void;
        /**
         * Returns true if the spy/stub was never called with the provided arguments.
         */
        neverCalledWith(...args: any[]): void;
        /**
         * Returns true if the spy/stub was never called with matching arguments.
         */
        neverCalledWithMatch(...args: any[]): void;
        /**
         * Passes if the spy threw the given exception. The exception can be a
         * string denoting its type, or an actual object. If no argument is
         * provided, the assertion passes if the spy ever threw any exception.
         */
        threw(ex: string | Error): void;
    }
}
