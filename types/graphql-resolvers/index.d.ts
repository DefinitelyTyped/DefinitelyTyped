// Type definitions for graphql-resolvers 0.2
// Project: https://github.com/lucasconstantino/graphql-resolvers#readme
// Definitions by: Mike Engel <https://github.com/mike-engel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { IFieldResolver } from "graphql-tools";

export const skip: undefined;

export interface TArgs {
    [argument: string]: any;
}

export function combineResolvers<TSource = any, TContext = any>(
    ...resolvers: Array<IFieldResolver<TSource, TContext, TArgs>>
): IFieldResolver<TSource, TContext, TArgs>;

export function pipeResolvers<TSource = any, TContext = any>(
    ...resolvers: Array<IFieldResolver<TSource, TContext, TArgs>>
): IFieldResolver<TSource, TContext, TArgs>;

export function allResolvers<TSource = any, TContext = any>(
    resolvers: Array<IFieldResolver<TSource, TContext, TArgs>>
): IFieldResolver<TSource, TContext, TArgs>;

export function resolveDependee(
    dependeeName: string
): IFieldResolver<any, any, TArgs>;

export function resolveDependees(
    dependeeNames: string[]
): IFieldResolver<any, any, TArgs>;

export function isDependee<TSource = any, TContext = any>(
    resolver: IFieldResolver<TSource, TContext, TArgs>
): IFieldResolver<TSource, TContext, TArgs>;
