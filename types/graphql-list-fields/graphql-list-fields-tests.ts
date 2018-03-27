import getFieldNames = require("graphql-list-fields");

import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLResolveInfo,
    GraphQLSchema,
    GraphQLString
} from "graphql";

const sampleGraphQLResolveInfo: GraphQLResolveInfo = {
    fieldName: "",
    fieldNodes: [],
    returnType: GraphQLString,
    parentType: new GraphQLObjectType({
        name: "Sample",
        fields: {
            name: { type: GraphQLString }
        }
    }),
    path: undefined,
    schema: new GraphQLSchema({
        query: new GraphQLObjectType({
            name: "SampleType",
            fields: {}
        })
    }),
    fragments: {},
    rootValue: null,
    operation: {
        kind: "OperationDefinition",
        operation: "query",
        selectionSet: {
            kind: "SelectionSet",
            selections: []
        }
    },
    variableValues: {}
};

const fieldNames: string[] = getFieldNames(sampleGraphQLResolveInfo);
