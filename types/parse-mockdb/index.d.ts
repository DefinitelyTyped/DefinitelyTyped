// Type definitions for parse-mockdb v0.1.14
// Project: https://github.com/HustleInc/parse-mockdb
// Definitions by: David Poetzsch-Heffter <https://github.com/dpoetzsch>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

declare namespace ParseMockDB {
    function mockDB(): void;
    function unMockDB(): void;
    function cleanUp(): void;

    function promiseResultSync<T>(promise: Parse.IPromise<T>): T;

    type HookType = "beforeSave" | "beforeDelete";
    function registerHook(className: string, hookType: HookType, hookFn: (request: Parse.Cloud.BeforeSaveRequest) => Parse.IPromise<any>): void;
}

declare module "parse-mockdb" {
    import * as Parse from 'parse'
    export = ParseMockDB;
}
