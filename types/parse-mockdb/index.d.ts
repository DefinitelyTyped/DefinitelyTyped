declare namespace ParseMockDB {
    function mockDB(): void;
    function unMockDB(): void;
    function cleanUp(): void;

    function promiseResultSync<T>(promise: Parse.IPromise<T>): T;

    type HookType = "beforeSave" | "beforeDelete";
    function registerHook(
        className: string,
        hookType: HookType,
        hookFn: (request: Parse.Cloud.BeforeSaveRequest) => Parse.IPromise<any>,
    ): void;
}

declare module "parse-mockdb" {
    import * as Parse from "parse";
    export = ParseMockDB;
}
