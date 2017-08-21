// Type definitions for p-every 1.0
// Project: https://github.com/kevva/p-every#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pEvery;

declare function pEvery<T>(input: Iterable<PromiseLike<T> | T>,
                           testFn: (element: T, index: number) => boolean | Promise<boolean>,
                           options?: pEvery.Options): Promise<boolean>;

declare namespace pEvery {
    interface Options {
        concurrency?: number;
    }
}
