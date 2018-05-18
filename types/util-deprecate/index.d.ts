// Type definitions for util-deprecate 1.0
// Project: https://github.com/TooTallNate/util-deprecate
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export = deprecate;

// tslint:disable-next-line ban-types
declare function deprecate<T extends Function>(fn: T, message: string): T;
