// Type definitions for graphql-api-koa 2.0
// Project: https://github.com/jaydenseric/graphql-api-koa#readme
// Definitions by: Mike Marcacci <https://github.com/mike-marcacci>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import { GraphQLSchema } from "graphql";
import { Middleware, ParameterizedContext } from "koa";

export interface ExecuteOptions {
  schema?: GraphQLSchema;
  rootValue?: any;
  contextValue?: any;
  fieldResolver?: any;
}

export function errorHandler(): Middleware;

export function execute<StateT = any, CustomT = {}>(
  options: ExecuteOptions & {
    override?: (ctx: ParameterizedContext<StateT, CustomT>) => ExecuteOptions;
  }
): Middleware<StateT, CustomT>;
