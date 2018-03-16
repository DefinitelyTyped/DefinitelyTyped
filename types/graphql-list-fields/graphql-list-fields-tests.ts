import getFieldNames = require("graphql-list-fields");

import {
    GraphQLID,
    GraphQLInterfaceType,
    GraphQLObjectType,
    GraphQLResolveInfo,
    GraphQLSchema,
    GraphQLString
} from "graphql";

const sampleGraphQLResolveInfo: GraphQLResolveInfo = {
    fieldName: "",
    fieldNodes: [],
    returnType: GraphQLString,
    parentType: new GraphQLInterfaceType({
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
