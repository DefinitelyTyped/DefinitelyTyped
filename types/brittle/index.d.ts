interface CoercibleAssertion {
    (actual: unknown, expected: unknown, message?: string): void;
    coercively(actual: unknown, expected: unknown, message?: string): void;
}

type AnyErrorConstructor = new() => Error;

interface ExceptionAssertion {
    (fn: Promise<unknown> | (() => Promise<unknown>), message?: string): Promise<void>;
    (
        fn: Promise<unknown> | (() => Promise<unknown>),
        error?: RegExp | AnyErrorConstructor,
        message?: string,
    ): Promise<void>;
    (fn: () => unknown, message?: string): void;
    (fn: () => unknown, error?: RegExp | AnyErrorConstructor, message?: string): void;

    all(fn: Promise<unknown> | (() => Promise<unknown>), message?: string): Promise<void>;
    all(
        fn: Promise<unknown> | (() => Promise<unknown>),
        error?: RegExp | AnyErrorConstructor,
        message?: string,
    ): Promise<void>;
    all(fn: () => unknown, message?: string): void;
    all(fn: () => unknown, error?: RegExp | AnyErrorConstructor, message?: string): void;
}

interface Assertion {
    is: CoercibleAssertion;
    not: CoercibleAssertion;
    alike: CoercibleAssertion;
    unlike: CoercibleAssertion;
    ok(value: unknown, message?: string): void;
    absent(value: unknown, message?: string): void;
    pass(message?: string): void;
    fail(message?: string): void;
    exception: ExceptionAssertion;
    execution<T>(fn: T | Promise<T>, message?: string): Promise<number>;
    snapshot(actual: unknown, message?: string): void;
}

interface TestOptions {
    timeout?: number;
    solo?: boolean;
    skip?: boolean;
    todo?: boolean;
}

interface TestInstance extends Assertion {
    plan(n: number): void;
    teardown(fn: () => unknown | Promise<unknown>, options?: { order?: number }): void;
    timeout(ms: number): void;
    comment(message: string): void;
    end(): void;
    test: TestFn;
}

interface TestFn {
    (name: string, options: TestOptions, callback: (t: TestInstance) => void | Promise<void>): Promise<void>;
    (name: string, callback: (t: TestInstance) => void | Promise<void>): Promise<void>;
    (callback: (t: TestInstance) => void | Promise<void>): Promise<void>;
    (name: string, options: TestOptions): TestInstance;
    (name: string): TestInstance;
    (): TestInstance;
}

interface Test extends TestFn {
    test: Test;
    solo: TestFn;
    skip: TestFn;
    configure(options: TestOptions): void;
}

declare const test: Test;

export = test;
