import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";
import { execute } from "graphql-api-koa";

execute({
  schema: new GraphQLSchema({
    query: new GraphQLObjectType({
      name: "Query",
      fields: () => ({
        hello: {
          type: GraphQLString,
          resolve() {
            return "world";
          }
        }
      })
    })
  })
});

/* This is the thest that SHOULD exist here... but for whatever reason, the
   DefinitelyTyped repo always errors with:

   Module '"/Users/mike/Code/DefinitelyTyped/types/koa/index"' has no default export.

import Koa from "koa";
import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";
import { errorHandler, execute } from "graphql-api-koa";

const app = new Koa()
  .use(errorHandler())
  .use(
    execute({ schema: new GraphQLSchema({
      query: new GraphQLObjectType({
        name: "Query",
        fields: () => ({
          hello: {
            type: GraphQLString,
            resolve() {
              return "world";
            }
          }
        })
      })
    })
  }));
*/
