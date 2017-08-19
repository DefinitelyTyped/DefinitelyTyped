import {
    GraphQLObjectType,
} from './definition';
import {
    GraphQLType,
    GraphQLNamedType,
    GraphQLAbstractType
} from './definition';
import {
    GraphQLDirective,
} from './directives';


/**
 * Schema Definition
 *
 * A Schema is created by supplying the root types of each type of operation,
 * query and mutation (optional). A schema definition is then supplied to the
 * validator and executor.
 *
 * Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       query: MyAppQueryRootType,
 *       mutation: MyAppMutationRootType,
 *     })
 *
 * Note: If an array of `directives` are provided to GraphQLSchema, that will be
 * the exact list of directives represented and allowed. If `directives` is not
 * provided then a default set of the specified directives (e.g. @include and
 * @skip) will be used. If you wish to provide *additional* directives to these
 * specified directives, you must explicitly declare them. Example:
 *
 *     const MyAppSchema = new GraphQLSchema({
 *       ...
 *       directives: specifiedDirectives.concat([ myCustomDirective ]),
 *     })
 *
 */
export class GraphQLSchema {
    // private _queryType: GraphQLObjectType;
    // private _mutationType: GraphQLObjectType;
    // private _subscriptionType: GraphQLObjectType;
    // private _directives: Array<GraphQLDirective>;
    // private _typeMap: TypeMap;
    // private _implementations: { [interfaceName: string]: Array<GraphQLObjectType> };
    // private _possibleTypeMap: { [abstractName: string]: { [possibleName: string]: boolean } };

    constructor(config: GraphQLSchemaConfig)

    getQueryType(): GraphQLObjectType;
    getMutationType(): GraphQLObjectType;
    getSubscriptionType(): GraphQLObjectType;
    getTypeMap(): GraphQLNamedType;
    getType(name: string): GraphQLType;
    getPossibleTypes(abstractType: GraphQLAbstractType): Array<GraphQLObjectType>;

    isPossibleType(
        abstractType: GraphQLAbstractType,
        possibleType: GraphQLObjectType
    ): boolean;

    getDirectives(): Array<GraphQLDirective>;
    getDirective(name: string): GraphQLDirective;
}

export interface GraphQLSchemaConfig {
    query: GraphQLObjectType;
    mutation?: GraphQLObjectType;
    subscription?: GraphQLObjectType;
    types?: Array<GraphQLNamedType>;
    directives?: Array<GraphQLDirective>;
}
