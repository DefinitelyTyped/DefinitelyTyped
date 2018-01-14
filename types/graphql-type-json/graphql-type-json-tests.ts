import { GraphQLObjectType, GraphQLInputObjectType } from "graphql";
import * as GraphQLJSON from "graphql-type-json";

const TestType = new GraphQLObjectType({
    name: "TestType",
    fields: {
        test: {
            type: GraphQLJSON
        }
    }
});

const TestInputType = new GraphQLInputObjectType({
    name: "TestInputType",
    fields: {
        test: {
            type: GraphQLJSON
        }
    }
});
