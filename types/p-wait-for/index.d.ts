// Type definitions for p-wait-for 1.0
// Project: https://github.com/sindresorhus/p-wait-for#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export = pWaitFor;

declare function pWaitFor(condition: () => PromiseLike<boolean> | boolean, interval?: number): Promise<void>;
