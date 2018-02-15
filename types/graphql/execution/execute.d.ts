import { GraphQLError, locatedError } from '../error';
import { GraphQLSchema } from '../type/schema';
import {
  GraphQLField,
  GraphQLFieldResolver,
  ResponsePath,
} from '../type/definition';
import {
  DirectiveNode,
  DocumentNode,
  OperationDefinitionNode,
  SelectionSetNode,
  FieldNode,
  InlineFragmentNode,
  FragmentDefinitionNode,
} from '../language/ast';
/**
 * Data that must be available at all points during query execution.
 *
 * Namely, schema of the type system that is currently executing,
 * and the fragments defined in the query document
 */
export interface ExecutionContext {
  schema: GraphQLSchema;
  fragments: { [key: string]: FragmentDefinitionNode };
  rootValue: any;
  operation: OperationDefinitionNode;
  variableValues: { [key: string]: any };
  fieldResolver: GraphQLFieldResolver<any, any>;
  errors: GraphQLError[];
}

/**
 * The result of execution. `data` is the result of executing the
 * query, `extensions` represents additional metadata, `errors` is
 * null if no errors occurred, and is a
 * non-empty array if an error occurred.
 */
export interface ExecutionResult {
  data?: { [key: string]: any };
  extensions?: { [key: string]: any };
  errors?: GraphQLError[];
}

export type ExecutionArgs = {
  schema: GraphQLSchema;
  document: DocumentNode;
  rootValue?: any;
  contextValue?: any;
  variableValues?: { [key: string]: any };
  operationName?: string;
  fieldResolver?: GraphQLFieldResolver<any, any>;
};

/**
 * Implements the "Evaluating requests" section of the GraphQL specification.
 *
 * Returns a Promise that will eventually be resolved and never rejected.
 *
 * If the arguments to this function do not result in a legal execution context,
 * a GraphQLError will be thrown immediately explaining the invalid input.
 *
 * Accepts either an object with named arguments, or individual arguments.
 */
export function execute(args: ExecutionArgs): Promise<ExecutionResult>;
export function execute(
  schema: GraphQLSchema,
  document: DocumentNode,
  rootValue?: any,
  contextValue?: any,
  variableValues?: {
    [key: string]: any;
  },
  operationName?: string,
  fieldResolver?: GraphQLFieldResolver<any, any>,
): Promise<ExecutionResult>;

/**
 * Given a ResponsePath (found in the `path` entry in the information provided
 * as the last argument to a field resolver), return an Array of the path keys.
 */
export function responsePathAsArray(path: ResponsePath): Array<string | number>;

export function addPath(prev: ResponsePath, key: string | number): any;

/**
 * If a resolve function is not given, then a default resolve behavior is used
 * which takes the property of the source object of the same name as the field
 * and returns it as the result, or if it's a function, returns the result
 * of calling that function while passing along args and context.
 */
export const defaultFieldResolver: GraphQLFieldResolver<any, any>;
