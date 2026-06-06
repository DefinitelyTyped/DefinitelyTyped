import { GraphQLFieldResolver, GraphQLSchema } from "graphql";

export function wrapResolvers<TContext>(
    schema: GraphQLSchema,
    resolveFn: (
        resolveFn: GraphQLFieldResolver<unknown, TContext>,
    ) => (
        ...args: Parameters<GraphQLFieldResolver<unknown, TContext>>
    ) => Promise<GraphQLFieldResolver<unknown, TContext>>,
): void;

export {};
