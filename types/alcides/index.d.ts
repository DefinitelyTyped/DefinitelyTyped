// Type definitions for alcides 1.4
// Project: https://github.com/asaidimu/alcides
// Definitions by: saidimu <https://github.com/asaidimu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/// <reference types="chai" />

interface SuiteFunction {
    (description: string, cb: () => void): void;
}

interface TestFunction {
    (description: string, cb: (state: any) => void): void;
}

interface SetUpHook {
    (cb: () => any): void;
}

interface TearDownHook {
    (cb: (state: any) => void): void;
}

declare var assert: Chai.AssertStatic;
declare var suite: SuiteFunction;
declare var test: TestFunction;
declare var setUp: SetUpHook;
declare var tearDown: TearDownHook;
