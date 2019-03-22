// Type definitions for graphql-resolvers 0.3
// Project: https://github.com/lucasconstantino/graphql-resolvers#readme
// Definitions by: Mike Engel <https://github.com/mike-engel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { IFieldResolver } from "graphql-tools";

export const skip: undefined;

export function combineResolvers<
    TSource = any,
    TContext = any,
    TArgs = Record<string, any>
>(
    ...resolvers: Array<IFieldResolver<TSource, TContext, TArgs>>
): IFieldResolver<TSource, TContext, TArgs>;

export function pipeResolvers<
    TSource = any,
    TContext = any,
    TArgs = Record<string, any>
>(
    ...resolvers: Array<IFieldResolver<TSource, TContext, TArgs>>
): IFieldResolver<TSource, TContext, TArgs>;

export function allResolvers<
    TSource = any,
    TContext = any,
    TArgs = Record<string, any>
>(
    resolvers: Array<IFieldResolver<TSource, TContext, TArgs>>
): IFieldResolver<TSource, TContext, TArgs>;

export function resolveDependee<TArgs = Record<string, any>>(
    dependeeName: string
): IFieldResolver<any, any, TArgs>;

export function resolveDependees<TArgs = Record<string, any>>(
    dependeeNames: string[]
): IFieldResolver<any, any, TArgs>;

export function isDependee<
    TSource = any,
    TContext = any,
    TArgs = Record<string, any>
>(
    resolver: IFieldResolver<TSource, TContext, TArgs>
): IFieldResolver<TSource, TContext, TArgs>;
