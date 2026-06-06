import { GraphQLInputObjectType, GraphQLObjectType } from "graphql";
import GraphQLJSON, { GraphQLJSONObject } from "graphql-type-json";

const TestType = new GraphQLObjectType({
    name: "TestType",
    fields: {
        testValue: {
            type: GraphQLJSON,
        },
        testObject: {
            type: GraphQLJSONObject,
        },
    },
});

const TestInputType = new GraphQLInputObjectType({
    name: "TestInputType",
    fields: {
        testValue: {
            type: GraphQLJSON,
        },
        testObject: {
            type: GraphQLJSONObject,
        },
    },
});
