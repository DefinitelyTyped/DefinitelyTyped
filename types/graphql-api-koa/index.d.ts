import { GraphQLSchema } from "graphql";
import { DefaultContext, DefaultState, Middleware, ParameterizedContext } from "koa";

export interface ExecuteOptions {
    schema?: GraphQLSchema | undefined;
    rootValue?: any;
    contextValue?: any;
    fieldResolver?: any;
}

export function errorHandler(): Middleware;

export function execute<StateT = DefaultState, ContextT = DefaultContext>(
    options: ExecuteOptions & {
        override?: ((ctx: ParameterizedContext<StateT, ContextT>) => ExecuteOptions) | undefined;
    },
): Middleware<StateT, ContextT>;
