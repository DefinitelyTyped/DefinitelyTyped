// Type definitions for precond 0.2.3
// Project: https://github.com/MathieuTurcotte/node-precond
// Definitions by: Oliver Schneider <https://github.com/olsio>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module precond {
    export function checkArgument(value: any, message?: string, ...formatArgs: any[]): void;
    export function checkState(value: any, message?: string, ...formatArgs: any[]): void;
    export function checkIsDef(value: any, message?: string, ...formatArgs: any[]): any;
    export function checkIsDefAndNotNull(value: any, message?: string, ...formatArgs: any[]): any;
    export function checkIsString(value: any, message?: string, ...formatArgs: any[]): any;
    export function checkIsArray(value: any, message?: string, ...formatArgs: any[]): any;
    export function checkIsNumber(value: any, message?: string, ...formatArgs: any[]): any;
    export function checkIsBoolean(value: any, message?: string, ...formatArgs: any[]): any;
    export function checkIsFunction(value: any, message?: string, ...formatArgs: any[]): any;
    export function checkIsObject(value: any, message?: string, ...formatArgs: any[]): any;
}