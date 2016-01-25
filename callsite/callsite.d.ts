// Type definitions for callsite 1.0.0
// Project: https://github.com/tj/callsite
// Definitions by: newclear <https://github.com/newclear>
// Definitions: https://github.com/newclear/DefinitelyTyped

declare module "callsite" {
    interface CallSite {
        getFileName(): string;
        getFunctionName(): string;
        getScriptNameOrSourceUrl(): string;
        getMethodName(): string;
        getEvalOrigin(): string;
        getTypeName(): string;
        getLineNumber(): number;
        getColumnNumber(): number;
        getFunction(): Function;
        getThis(): any;
        isNative(): boolean;
        isToplevel(): boolean;
        isEval(): boolean;
        isConstructor(): boolean;
    }

    function callsiteFunc(): CallSite[];

    export = callsiteFunc;
}
