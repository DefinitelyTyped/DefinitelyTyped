import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLFieldResolver,
    GraphQLFieldConfigMap,
    GraphQLResolveInfo,
    GraphQLTypeResolver,
    GraphQLFieldConfig,
    GraphQLInterfaceType,
    GraphQLInputType,
    GraphQLInputFieldConfigMap,
    GraphQLNonNull,
    GraphQLID,
    GraphQLInt
} from "graphql";
import {
    // Connections
    connectionArgs,
    forwardConnectionArgs,
    backwardConnectionArgs,
    connectionDefinitions,
    connectionFromArray,
    connectionFromPromisedArray,
    cursorForObjectInConnection,
    // Object Identification
    nodeDefinitions,
    toGlobalId,
    fromGlobalId,
    globalIdField,
    pluralIdentifyingRootField,
    // Mutations
    mutationWithClientMutationId,
} from "graphql-relay";

// Connections
// connectionArgs returns the arguments that fields should provide when they return a connection type that supports bidirectional pagination.
connectionArgs.first = { type: GraphQLInt };
connectionArgs.after = { type: GraphQLString };
connectionArgs.before = { type: GraphQLString };
connectionArgs.last = { type: GraphQLInt };
// forwardConnectionArgs returns the arguments that fields should provide when they return a connection type that only supports forward pagination.
forwardConnectionArgs.after = { type: GraphQLString };
forwardConnectionArgs.first = { type: GraphQLInt };
// backwardConnectionArgs returns the arguments that fields should provide when they return a connection type that only supports backward pagination.
backwardConnectionArgs.before = { type: GraphQLString };
backwardConnectionArgs.last = { type: GraphQLInt };
// connectionDefinitions returns a connectionType and its associated edgeType, given a node type.
const resolve: GraphQLFieldResolver<any, any> = (source, args, context, info) => {
    context.flag = "f";
};
const fields: GraphQLFieldConfigMap<any, any> = {};
let t: GraphQLObjectType;
let e: GraphQLObjectType;
const def = connectionDefinitions({
    connectionFields: fields,
    edgeFields: fields,
    name: "N",
    nodeType: new GraphQLObjectType({
        name: "N",
        fields: {},
    }),
    resolveCursor: resolve,
    resolveNode: resolve,
});
t = def.connectionType;
e = def.edgeType;
// connectionFromArray is a helper method that takes an array and the arguments from connectionArgs,
// does pagination and filtering, and returns an object in the shape expected by a connectionType's resolve function.
const conn = connectionFromArray([1, 2, 3], {
    after: "a",
    before: "b",
    first: 1,
    last: 5,
});
conn.edges.map((e) => { e.cursor.toLowerCase(); e.node.toExponential(); });
conn.pageInfo.endCursor = "e";
conn.pageInfo.hasNextPage = true;
conn.pageInfo.hasPreviousPage = true;
conn.pageInfo.startCursor = "s";
// connectionFromPromisedArray is similar to connectionFromArray, but it takes a promise that resolves to an array, and returns a promise that resolves to the expected shape by connectionType.
const conn2 = connectionFromPromisedArray(new Promise<number[]>((resolve) => {
    resolve([]);
}), {
        after: "a",
        before: "b",
        first: 1,
        last: 5,
    });
conn2.then((res) => {
    res = conn;
});
// cursorForObjectInConnection is a helper method that takes an array and a member object, and returns a cursor for use in the mutation payload.
cursorForObjectInConnection(["a"], "b").toLowerCase();
// An example usage of these methods from the test schema:
const shipType: GraphQLObjectType = new GraphQLObjectType({
    name: "ShipType",
    fields: {},
});
const {connectionType: ShipConnection} =
    connectionDefinitions({ nodeType: shipType });
const factionType = new GraphQLObjectType({
    name: "Faction",
    fields: () => ({
        ships: {
            type: ShipConnection,
            args: connectionArgs,
            resolve: (faction, args) => connectionFromArray(
                faction.ships.map((id: any) => id),
                args
            ),
        }
    }),
});
// Object Identification
// nodeDefinitions returns the Node interface that objects can implement, and returns the node root field to include on the query type.
// To implement this, it takes a function to resolve an ID to an object, and to determine the type of a given object.
const resolver: GraphQLTypeResolver<any, any> = () => {
    return new GraphQLObjectType({
        name: "T",
        fields: {},
    });
};
const idFetcher = (id: string, context: any, info: GraphQLResolveInfo) => {
    context.flag = "f";
};
const nodeDef = nodeDefinitions<any>(idFetcher, resolver);
const nodeFieldConfig: GraphQLFieldConfig<any, any> = nodeDef.nodeField;
const nodesFieldConfig: GraphQLFieldConfig<any, any> = nodeDef.nodesField;
const interfaceType: GraphQLInterfaceType = nodeDef.nodeInterface;
// toGlobalId takes a type name and an ID specific to that type name, and returns a "global ID" that is unique among all types.
toGlobalId("t", "i").toLowerCase();
// fromGlobalId takes the "global ID" created by toGlobalID, and returns the type name and ID used to create it.
const fgi = fromGlobalId("gid");
fgi.id.toLowerCase();
fgi.type.toUpperCase();
// globalIdField creates the configuration for an id field on a node.
const idFetcher2 = (object: any, context: any, info: GraphQLResolveInfo) => {
    return "";
};
const gif: GraphQLFieldConfig<any, any> = globalIdField("t", idFetcher2);
// pluralIdentifyingRootField creates a field that accepts a list of non-ID identifiers (like a username) and maps them to their corresponding objects.
const input: GraphQLInputType = GraphQLString;
const prf: GraphQLFieldConfig<any, any> = pluralIdentifyingRootField({
    argName: "a",
    inputType: input,
    outputType: input,
    resolveSingleInput: (input: any, context: any, info: GraphQLResolveInfo) => {
        return "";
    },
    description: "d",
});
// An example usage of these methods from the test schema:
const {nodeInterface, nodeField} = nodeDefinitions(
    (globalId) => {
        const {type, id} = fromGlobalId(globalId);
        return "data[type][id]";
    },
    (obj) => {
        return obj.ships ? factionType : shipType;
    }
);

const factionType2 = new GraphQLObjectType({
    name: 'Faction',
    fields: () => ({
        id: globalIdField(),
    }),
    interfaces: [nodeInterface]
});

const queryType = new GraphQLObjectType({
    name: 'Query',
    fields: () => ({
        node: nodeField
    })
});
// Mutations
// mutationWithClientMutationId takes a name, input fields, output fields, and a mutation method to map from the input fields to the output fields, performing the mutation along the way.
// It then creates and returns a field configuration that can be used as a top-level field on the mutation type.
const gifcm: GraphQLInputFieldConfigMap = {};
const gfcm: GraphQLFieldConfigMap<any, any> = {};
mutationWithClientMutationId({
    name: "M",
    description: "D",
    inputFields: gifcm,
    mutateAndGetPayload: (
        object: any,
        context: any,
        info: GraphQLResolveInfo) => {
        return new Promise<string>((resolve) => {
            resolve(context.flag);
        });
    },
    outputFields: gfcm,
});
// An example usage of these methods from the test schema:
const data: any = {};
const shipMutation = mutationWithClientMutationId({
    name: 'IntroduceShip',
    inputFields: {
        shipName: {
            type: new GraphQLNonNull(GraphQLString)
        },
        factionId: {
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    outputFields: {
        ship: {
            type: shipType,
            resolve: (payload) => data['Ship'][payload.shipId]
        },
        faction: {
            type: factionType,
            resolve: (payload) => data['Faction'][payload.factionId]
        }
    },
    mutateAndGetPayload: ({shipName, factionId}) => {
        const newShip = {
            id: "11",
            name: shipName
        };
        // data.Ship[newShip.id] = newShip;
        // data.Faction[factionId].ships.push(newShip.id);
        return {
            shipId: newShip.id,
            factionId,
        };
    }
});

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        introduceShip: shipMutation
    })
});
