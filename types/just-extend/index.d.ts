// Type definitions for just-extend 1.1
// Project: https://github.com/angus-c/just#readme
// Definitions by: Peter Safranek <https://github.com/pe8ter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare function extend(obj1: object, ...objn: any[]): object;

declare function extend(deep: boolean, obj1: object, ...objn: any[]): object;

export = extend;
