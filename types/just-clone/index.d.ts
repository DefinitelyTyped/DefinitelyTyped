// Type definitions for just-clone 3.1
// Project: https://github.com/angus-c/just#readme
// Definitions by: Chris Howard <https://github.com/ConnectivityChris>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function clone<T extends object>(obj: T): T;

export = clone;
