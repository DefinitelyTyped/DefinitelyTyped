import { GraphQLObjectType } from './definition';
import {
  GraphQLType,
  GraphQLNamedType,
  GraphQLAbstractType,
} from './definition';
import { SchemaDefinitionNode } from '../language/ast';
import { GraphQLDirective } from './directives';

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
  astNode?: SchemaDefinitionNode;
  // private _queryType: GraphQLObjectType;
  // private _mutationType: GraphQLObjectType;
  // private _subscriptionType: GraphQLObjectType;
  // private _directives: Array<GraphQLDirective>;
  // private _typeMap: TypeMap;
  // private _implementations: { [interfaceName: string]: Array<GraphQLObjectType> };
  // private _possibleTypeMap: { [abstractName: string]: { [possibleName: string]: boolean } };

  constructor(config: GraphQLSchemaConfig);

  getQueryType(): GraphQLObjectType;
  getMutationType(): GraphQLObjectType | null | undefined;
  getSubscriptionType(): GraphQLObjectType | null | undefined;
  getTypeMap(): { [typeName: string]: GraphQLNamedType };
  getType(name: string): GraphQLNamedType;
  getPossibleTypes(abstractType: GraphQLAbstractType): GraphQLObjectType[];

  isPossibleType(
    abstractType: GraphQLAbstractType,
    possibleType: GraphQLObjectType,
  ): boolean;

  getDirectives(): GraphQLDirective[];
  getDirective(name: string): GraphQLDirective;
}

export interface GraphQLSchemaConfig {
  query: GraphQLObjectType;
  mutation?: GraphQLObjectType;
  subscription?: GraphQLObjectType;
  types?: GraphQLNamedType[];
  directives?: GraphQLDirective[];
  astNode?: SchemaDefinitionNode;
}
