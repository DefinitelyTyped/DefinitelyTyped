import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import { errorHandler, execute } from "graphql-api-koa";
import Koa from "koa";

const app = new Koa()
    .use(errorHandler())
    .use(
        execute({
            schema: new GraphQLSchema({
                query: new GraphQLObjectType({
                    name: "Query",
                    fields: () => ({
                        hello: {
                            type: GraphQLString,
                            resolve() {
                                return "world";
                            },
                        },
                    }),
                }),
            }),
        }),
    );
