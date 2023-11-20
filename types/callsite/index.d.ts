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
