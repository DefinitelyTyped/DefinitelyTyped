// Type definitions for graphql-resolve-batch 1.1
// Project: https://github.com/calebmer/graphql-resolve-batch#readme
// Definitions by: Rutger Hendrickx <https://github.com/nayni>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export function createBatchResolver<
    TSource,
    TReturn,
    TArgs = any,
    TContext = any
>(
    batchResolveFn: BatchResolveFunction<TSource, TArgs, TContext, TReturn>
): ResolverFunction<TSource, TArgs, TContext, TReturn>;

export type ResolverFunction<TSource, TArgs, TContext, TReturn> = (
    source: TSource,
    args: TArgs,
    context: TContext
) => Promise<TReturn> | Promise<TReturn[]>;

export type BatchResolveFunction<TSource, TArgs, TContext, TReturn> = (
    sources: ReadonlyArray<TSource>,
    args: TArgs,
    context: TContext
) => TReturn[] | Promise<TReturn[]>;
