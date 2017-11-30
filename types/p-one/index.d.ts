// Type definitions for p-one 1.0
// Project: https://github.com/kevva/p-one#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = pOne;

declare function pOne<T>(input: Iterable<PromiseLike<T> | T>,
                         testFn: (element: T, index: number) => boolean | Promise<boolean>,
                         options?: pOne.Options): Promise<boolean>;

declare namespace pOne {
    interface Options {
        concurrency?: number;
    }
}
