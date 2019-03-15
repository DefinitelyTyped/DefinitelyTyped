// Type definitions for p-wait-for 2.0
// Project: https://github.com/sindresorhus/p-wait-for#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pWaitFor;

declare function pWaitFor(condition: () => PromiseLike<boolean> | boolean, options?: pWaitFor.Options): Promise<void>;

declare namespace pWaitFor {
    interface Options {
        interval?: number;
        timeout?: number;
    }
}
