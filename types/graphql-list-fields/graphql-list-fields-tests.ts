import getFieldNames = require("graphql-list-fields");

import { GraphQLID, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "SampleType",
        fields: {
            scalarField: {
                type: GraphQLString,
                resolve(source, args, context, info) {
                    const fieldNames: string[] = getFieldNames(info);
                },
            },
            someType: {
                type: new GraphQLObjectType({
                    name: "SomeType",
                    fields: {
                        a: { type: GraphQLID },
                        b: { type: GraphQLString },
                        c: { type: GraphQLString },
                        d: { type: GraphQLString },
                    },
                }),
                resolve(source, args, context, info) {
                    const fieldNames: string[] = getFieldNames(info);
                },
            },
        },
    }),
});
