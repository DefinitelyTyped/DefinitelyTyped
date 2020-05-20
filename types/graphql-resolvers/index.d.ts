// Type definitions for graphql-resolvers 0.3
// Project: https://github.com/lucasconstantino/graphql-resolvers#readme
// Definitions by: Alejandro Corredor <https://github.com/aecorredor>
//                 Luis Felipe Zaguini <https://github.com/zaguiini>
//                 Mike Engel <https://github.com/mike-engel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { GraphQLResolveInfo } from "graphql";
import { MergeInfo } from "graphql-tools";

export type IFieldResolver<TSource, TContext, TArgs = Record<string, any>, TReturn = any> = (
  source: TSource,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo & { mergeInfo?: MergeInfo },
) => TReturn;

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
