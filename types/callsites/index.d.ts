// Type definitions for callsites 2.0
// Project: https://github.com/sindresorhus/callsites#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export = callsites;

declare function callsites(): callsites.CallSite[];

declare namespace callsites {
    interface CallSite {
        getThis(): object | undefined;
        getTypeName(): string;
        getFunction(): Function | undefined; // tslint:disable-line ban-types
        getFunctionName(): string;
        getMethodName(): string | null;
        getFileName(): string | undefined;
        getLineNumber(): number;
        getColumnNumber(): number;
        getEvalOrigin(): CallSite | string;
        isToplevel(): boolean;
        isEval(): boolean;
        isNative(): boolean;
        isConstructor(): boolean;
    }
}
