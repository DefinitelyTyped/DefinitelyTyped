// Type definitions for @adeira/graphql-resolve-wrapper 0.2
// Project: https://github.com/adeira/universe/tree/master/src/graphql-resolve-wrapper
// Definitions by: Martin Zlámal <https://github.com/mrtnzlml>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.4

import { GraphQLSchema, GraphQLFieldResolver } from 'graphql';

export function wrapResolvers<TContext>(
    schema: GraphQLSchema,
    resolveFn: (
        resolveFn: GraphQLFieldResolver<unknown, TContext>,
    ) => (
        ...args: Parameters<GraphQLFieldResolver<unknown, TContext>>
    ) => Promise<GraphQLFieldResolver<unknown, TContext>>,
): void;

export {};
