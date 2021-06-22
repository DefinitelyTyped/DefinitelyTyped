// Type definitions for precond 0.2.3
// Project: https://github.com/MathieuTurcotte/node-precond
// Definitions by: Oliver Schneider <https://github.com/olsio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


export declare function checkArgument(value: any, message?: string, ...formatArgs: any[]): void;
export declare function checkState(value: any, message?: string, ...formatArgs: any[]): void;
export declare function checkIsDef(value: any, message?: string, ...formatArgs: any[]): any;
export declare function checkIsDefAndNotNull(value: any, message?: string, ...formatArgs: any[]): any;
export declare function checkIsString(value: any, message?: string, ...formatArgs: any[]): any;
export declare function checkIsArray(value: any, message?: string, ...formatArgs: any[]): any;
export declare function checkIsNumber(value: any, message?: string, ...formatArgs: any[]): any;
export declare function checkIsBoolean(value: any, message?: string, ...formatArgs: any[]): any;
export declare function checkIsFunction(value: any, message?: string, ...formatArgs: any[]): any;
export declare function checkIsObject(value: any, message?: string, ...formatArgs: any[]): any;
