type ResultFunc = (description: string) => void;
type Callback = () => void;
type TestFunc = (done: Callback, timeout: Callback) => void;
type ReporterFunc = (results: TestResult[]) => void;

interface TestResult {
    pass: boolean | null;
    error?: Error;
    testError?: Error;
    message?: string;
    context?: string;
}

interface SpyFunc {
    (...args: any[]): void;

    callCount: number;
    args: any[];
    calls: any[];
}

declare namespace Ospec {
    interface Assertion<T> {
        equals(expected: T): ResultFunc;
        notEquals(expected: T): ResultFunc;
        deepEquals(expected: T): ResultFunc;
        notDeepEquals(expected: T): ResultFunc;

        throws(expected: object | string): ResultFunc;
        notThrows(expected: object | string): ResultFunc;
    }

    interface Static {
        (title: string, assertions: TestFunc): void;
        <T>(value: T): Assertion<T>;

        before(setup: TestFunc): void;
        after(teardown: TestFunc): void;
        beforeEach(setup: TestFunc): void;
        afterEach(teardown: TestFunc): void;

        spec(title: string, tests: TestFunc): void;
        specTimeout(msec: number): void;
        only(title: string, assertions: TestFunc): void;
        spy(fn?: Callback): SpyFunc;
        run(reporter?: ReporterFunc): void;

        "new"(name?: string): Static;
    }
}

declare const Ospec: Ospec.Static;
export = Ospec;
