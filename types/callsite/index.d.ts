// Type definitions for callsite 1.0.0
// Project: https://github.com/tj/callsite
// Definitions by: newclear <https://github.com/newclear>
// Definitions: https://github.com/newclear/DefinitelyTyped



declare namespace Callsite {

    interface CallSite {
        getThis(): any;
        getTypeName(): string;
        getFunctionName(): string;
        getMethodName(): string;
        getFileName(): string;
        getLineNumber(): number;
        getColumnNumber(): number;
        getFunction(): Function;
        getEvalOrigin(): string;
        isNative(): boolean;
        isToplevel(): boolean;
        isEval(): boolean;
        isConstructor(): boolean;
    }
}

declare function Callsite(): Callsite.CallSite[];

export = Callsite;
