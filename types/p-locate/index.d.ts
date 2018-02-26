// Type definitions for p-locate 2.0
// Project: https://github.com/sindresorhus/p-locate#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pLocate;

declare function pLocate<T>(input: Iterable<PromiseLike<T> | T>, tester: (element: T) => Promise<boolean> | boolean, options?: pLocate.Options): Promise<T | undefined>;

declare namespace pLocate {
    interface Options {
        concurrency?: number;
        preserveOrder?: boolean;
    }
}
