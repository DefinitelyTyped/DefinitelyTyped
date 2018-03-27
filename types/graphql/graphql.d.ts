import { Source } from "./language/source";
import { GraphQLFieldResolver } from "./type/definition";
import { GraphQLSchema } from "./type/schema";
import { ExecutionResult } from "./execution/execute";

/**
 * This is the primary entry point function for fulfilling GraphQL operations
 * by parsing, validating, and executing a GraphQL document along side a
 * GraphQL schema.
 *
 * More sophisticated GraphQL servers, such as those which persist queries,
 * may wish to separate the validation and execution phases to a static time
 * tooling step, and a server runtime step.
 *
 * Accepts either an object with named arguments, or individual arguments:
 *
 * schema:
 *    The GraphQL type system to use when validating and executing a query.
 * source:
 *    A GraphQL language formatted string representing the requested operation.
 * rootValue:
 *    The value provided as the first argument to resolver functions on the top
 *    level type (e.g. the query object type).
 * variableValues:
 *    A mapping of variable name to runtime value to use for all variables
 *    defined in the requestString.
 * operationName:
 *    The name of the operation to use if requestString contains multiple
 *    possible operations. Can be omitted if requestString contains only
 *    one operation.
 * fieldResolver:
 *    A resolver function to use when one is not provided by the schema.
 *    If not provided, the default field resolver is used (which looks for a
 *    value or method on the source value with the field's name).
 */
export interface GraphQLArgs {
    schema: GraphQLSchema;
    source: Source | string;
    rootValue?: any;
    contextValue?: any;
    variableValues?: { [key: string]: any } | void;
    operationName?: string | void;
    fieldResolver?: GraphQLFieldResolver<any, any> | void;
}

export function graphql(args: GraphQLArgs): Promise<ExecutionResult>;
export function graphql(
    schema: GraphQLSchema,
    source: Source | string,
    rootValue?: any,
    contextValue?: any,
    variableValues?: { [key: string]: any } | void,
    operationName?: string | void,
    fieldResolver?: GraphQLFieldResolver<any, any> | void
): Promise<ExecutionResult>;

/**
 * The graphqlSync function also fulfills GraphQL operations by parsing,
 * validating, and executing a GraphQL document along side a GraphQL schema.
 * However, it guarantees to complete synchronously (or throw an error) assuming
 * that all field resolvers are also synchronous.
 */
export function graphqlSync(args: GraphQLArgs): ExecutionResult;
export function graphqlSync(
    schema: GraphQLSchema,
    source: Source | string,
    rootValue?: any,
    contextValue?: any,
    variableValues?: { [key: string]: any } | void,
    operationName?: string | void,
    fieldResolver?: GraphQLFieldResolver<any, any> | void
): ExecutionResult;
