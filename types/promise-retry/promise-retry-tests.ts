import promiseRetry = require('promise-retry');

// From sleep
declare function sleep(milliseconds: number): Promise<void>;

// Adapted from Chai
interface Assertion {
    equal: Equal;
    not: Assertion;
    to: Assertion;
}
type Equal = (value: any, message?: string) => Assertion;
type Operator = string; // "==" | "===" | ">" | ">=" | "<" | "<=" | "!=" | "!==";
interface ExpectStatic {
    (target: any, message?: string): Assertion;
    fail(actual?: any, expected?: any, message?: string, operator?: Operator): void;
}
declare const expect: ExpectStatic;

// Adapted from Mocha
interface ContextDefinition {
    (desc: string, f: () => void): void;
    timeout(ms: number): void;
}
declare const describe: ContextDefinition;
interface Runnable {
    timeout(n: number): this;
}
interface TestDefinition {
    (desc: string, f: (done?: (error?: Error) => void) => void): Runnable;
    timeout(ms: number): void;
}
declare const it: TestDefinition;

// Adapted from lib.d.ts
interface Console {
    assert(test?: boolean, message?: string, ...optionalParams: any[]): void;
    error(message?: any, ...optionalParams: any[]): void;
    log(message?: any, ...optionalParams: any[]): void;
}
declare let Console: {
    prototype: Console;
    new(): Console;
};
declare let console: Console;

describe("Promise-retry tests", () => {
    it('should allow params to be input either way round', () => {
        let count = 0;

        promiseRetry(
            (retryCb, attemptNumber) => {
                count += 1;

                return Promise.resolve()
                .then(() => {
                    console.log("Count in then()", count);
                    if (count > 1) return Promise.resolve('final');
                    else return Promise.reject(new Error('arbitrary excuse to retry'));
                })
                .catch((err: any) => {
                    console.log("Count in catch()", count);
                    if (count > 1) return Promise.resolve('final');
                    else return retryCb(err);
                });
            },
            {forever: true, factor: 1, minTimeout: 0, maxTimeout: 30, randomize: false}
        )
        .then((value: any) => console.log("Finished with value ", value))
        .catch((err: any) => console.error(err.message || err));

        promiseRetry(
            {forever: true, factor: 1, minTimeout: 0, maxTimeout: 30, randomize: false},
            (retryCb, attemptNumber) => {
                count += 1;

                return Promise.resolve()
                .then(() => {
                    console.log("Count in then()", count);
                    if (count > 1) return Promise.resolve('final');
                    else return Promise.reject(new Error('arbitrary excuse to retry'));
                })
                .catch((err: any) => {
                    console.log("Count in catch()", count);
                    if (count > 1) return Promise.resolve('final');
                    else return retryCb(err);
                });
            }
        )
        .then((value: any) => console.log("Finished with value ", value))
        .catch((err: any) => console.error(err.message || err));
    });
});
