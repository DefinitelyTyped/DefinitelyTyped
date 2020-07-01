// Type definitions for flat 5.0.0
// Project: https://github.com/hughsk/flat
// Definitions by:  Ilya Mochalov <https://github.com/chrootsu>
//                  Oz Weiss <https://github.com/thewizarodofoz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var flatten: FlatTypes.Flatten;

export = flatten;

declare namespace FlatTypes {
    interface FlattenOptions {
        delimiter?: string;
        safe?: boolean;
        maxDepth?: number;
        transformKey?: (key: string) => string;
    }

    interface Flatten {
        <TTarget, TResult>(
            target: TTarget,
            options?: FlattenOptions
        ): TResult;

        flatten: Flatten;
        unflatten: Unflatten;
    }

    interface UnflattenOptions {
        delimiter?: string;
        object?: boolean;
        overwrite?: boolean;
        transformKey?: (key: string) => string;
    }

    interface Unflatten {
        <TTarget, TResult>(
            target: TTarget,
            options?: UnflattenOptions
        ): TResult;
    }
}
