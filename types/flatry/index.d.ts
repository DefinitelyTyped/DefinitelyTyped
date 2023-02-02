// Type definitions for flatry 1.0
// Project: https://github.com/ymatuhin/flatry#readme
// Definitions by: po5epT <https://github.com/po5epT>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function flatry<T>(promise: Promise<T>): Promise<[unknown] | [null, T]>;
declare function flatry<T>(fn: () => T): [unknown] | [null, T];

export = flatry;
