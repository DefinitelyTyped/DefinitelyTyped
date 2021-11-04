// Type definitions for flat 5.0.0
// Project: https://github.com/hughsk/flat
// Definitions by:  Ilya Mochalov <https://github.com/chrootsu>
//                  Oz Weiss <https://github.com/thewizarodofoz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var flatten: FlatTypes.Flatten;

export = flatten;

declare namespace FlatTypes {
    interface FlattenOptions {
        delimiter?: string | undefined;
        safe?: boolean | undefined;
        maxDepth?: number | undefined;
        transformKey?: ((key: string) => string) | undefined;
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
        delimiter?: string | undefined;
        object?: boolean | undefined;
        overwrite?: boolean | undefined;
        transformKey?: ((key: string) => string) | undefined;
    }

    interface Unflatten {
        <TTarget, TResult>(
            target: TTarget,
            options?: UnflattenOptions
        ): TResult;
    }
}
