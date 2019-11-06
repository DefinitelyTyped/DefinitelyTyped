// Type definitions for graphql-resolvers 0.2
// Project: https://github.com/lucasconstantino/graphql-resolvers#readme
// Definitions by: Mike Engel <https://github.com/mike-engel>
//                 Alejandro Corredor <https://github.com/aecorredor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { IFieldResolver } from "graphql-tools";

export const skip: undefined;

export interface TArgsDefault {
    [argument: string]: any;
}

export function combineResolvers<TSource = any, TContext = any, TArgs = TArgsDefault>(
    ...resolvers: Array<IFieldResolver<TSource, TContext, TArgs>>
): IFieldResolver<TSource, TContext, TArgs>;

export function pipeResolvers<TSource = any, TContext = any, TArgs = TArgsDefault>(
    ...resolvers: Array<IFieldResolver<TSource, TContext, TArgs>>
): IFieldResolver<TSource, TContext, TArgs>;

export function allResolvers<TSource = any, TContext = any, TArgs = TArgsDefault>(
    resolvers: Array<IFieldResolver<TSource, TContext, TArgs>>
): IFieldResolver<TSource, TContext, TArgs>;

export function resolveDependee(dependeeName: string): IFieldResolver<any, any, any>;

export function resolveDependees(dependeeNames: string[]): IFieldResolver<any, any, any>;

export function isDependee<TSource = any, TContext = any, TArgs = TArgsDefault>(
    resolver: IFieldResolver<TSource, TContext, TArgs>
): IFieldResolver<TSource, TContext, TArgs>;
