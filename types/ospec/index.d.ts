// Type definitions for ospec 1.4
// Project: https://github.com/MithrilJS/mithril.js#readme
// Definitions by: Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export = ospec;

declare namespace ospec {
    interface Assertion {
        equals: AssertionFn;
        notEquals: AssertionFn;
        deepEquals: AssertionFn;
        notDeepEquals: AssertionFn;
        [_: string]: AssertionFn;
    }

    interface AssertionFn {
        (value: any): (description: string) => void;
    }

    interface done {
        (): void;
    }

    interface timeout {
        (timeout: number): void;
    }

    interface TestFn {
        (done?: done, timeout?: timeout): void | Promise<void>;
    }

    interface Spy<T extends Function = Function> {
        callCount: number;
        args: T["arguments"];
    }

    interface SpyFn {
        (): Spy & Function;
        <T extends Function>(fn: T): Spy<T> & T;
    }

    interface ResultTrue {
        pass: true;
    }

    interface ResultFalse {
        pass: false;
        error: Error["stack"];
        message: Error["message"] | string;
        context: string;
    }
}

declare interface ospec {
    (title: string, assertions: ospec.TestFn): void;
    (value: any): ospec.Assertion;
    after: (done: ospec.done, setup: ospec.timeout) => void;
    afterEach: ospec["after"];
    before: (done: ospec.done, setup: ospec.timeout) => void;
    beforeEach: ospec["before"];
    new: () => ospec;
    only: (title: string, assertions: ospec.TestFn) => void;
    run(fn?: (result: ospec.ResultTrue | ospec.ResultFalse) => void): void;
    spec: (title: string, tests: () => void) => void;
    spy: ospec.SpyFn;
}
