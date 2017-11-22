// Type definitions for ospec 1.4
// Project: https://mithril.js.org/
// Definitions by: Tomek Łaziuk <https://github.com/tlaziuk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace o {
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

declare interface o {
    (title: string, assertions: o.TestFn): void;
    (value: any): o.Assertion;
    after: (done: o.done, setup: o.timeout) => void;
    afterEach: o["after"];
    before: (done: o.done, setup: o.timeout) => void;
    beforeEach: o["before"];
    new: () => o;
    only: (title: string, assertions: o.TestFn) => void;
    run(fn?: (result: o.ResultTrue | o.ResultFalse) => void): void;
    spec: (title: string, tests: () => void) => void;
    spy: o.SpyFn;
}

export = o;
