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
