// Type definitions for graphql-api-koa 2.0
// Project: https://github.com/jaydenseric/graphql-api-koa#readme
// Definitions by: Mike Marcacci <https://github.com/mike-marcacci>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import { GraphQLSchema } from "graphql";
import { Middleware, ParameterizedContext } from "koa";

interface ExecuteOptions {
  schema?: GraphQLSchema;
  rootValue?: any;
  contextValue?: any;
  fieldResolver?: any;
}

export const errorHandler: <StateT = any, CustomT = {}>() => Middleware<
  StateT,
  CustomT
>;

export const execute: <StateT = any, CustomT = {}>(
  options: ExecuteOptions & {
    override?: (ctx: ParameterizedContext<StateT, CustomT>) => ExecuteOptions;
  }
) => Middleware<StateT, CustomT>;
