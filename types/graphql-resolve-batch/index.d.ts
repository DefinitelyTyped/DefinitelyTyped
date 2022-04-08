// Type definitions for graphql-resolve-batch 1.1
// Project: https://github.com/calebmer/graphql-resolve-batch#readme
// Definitions by: Rutger Hendrickx <https://github.com/nayni>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { GraphQLResolveInfo } from 'graphql';

/**
 * Creates a GraphQL.js field resolver that batches together multiple resolves
 * together that share the *exact* same GraphQL field selection.
 *
 * Note:
 *  The batchResolveFunction you supply always expects you to return an array of TReturn (or a promise with this array).
 *  This is because you will have to return a TReturn for every source given to you by the batch function.
 *  For an example of this please see the examples in the original project repository:
 *  https://github.com/calebmer/graphql-resolve-batch/tree/master/examples
 *
 * @template TSource The original type of a single source.
 * @template TReturn The return type of the field resolver.
 * @template TArgs The type of supplied arguments.
 * @template TContext The type of the current resolver context.
 * @param batchResolveFn A batch function to resolve all fields for the given sources in a single batch.
 */
export function createBatchResolver<
    TSource,
    TReturn,
    TArgs = any,
    TContext = any
>(
    batchResolveFn: BatchResolveFunction<TSource, TArgs, TContext, TReturn>
): ResolverFunction<TSource, TArgs, TContext, TReturn>;

/**
 * The resulting field resolver that batches together multiple resolves.
 * Graphql-resolve-batch will always return a promise for this resulting resolver.
 */
export type ResolverFunction<TSource, TArgs, TContext, TReturn> = (
    source: TSource,
    args: TArgs,
    context: TContext
) => Promise<TReturn>;

/**
 * A batch function to resolve all fields for the given sources in a single batch.
 */
export type BatchResolveFunction<TSource, TArgs, TContext, TReturn> = (
    sources: ReadonlyArray<TSource>,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TReturn[] | Promise<TReturn[]>;
