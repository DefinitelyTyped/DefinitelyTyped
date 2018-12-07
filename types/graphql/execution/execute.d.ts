import Maybe from "../tsutils/Maybe";
import { GraphQLError, locatedError } from "../error";
import { GraphQLSchema } from "../type/schema";
import {
    GraphQLField,
    GraphQLFieldResolver,
    ResponsePath,
    GraphQLObjectType,
    GraphQLResolveInfo,
} from "../type/definition";
import {
    DirectiveNode,
    DocumentNode,
    OperationDefinitionNode,
    SelectionSetNode,
    FieldNode,
    InlineFragmentNode,
    FragmentDefinitionNode,
} from "../language/ast";
import { MaybePromise } from "../jsutils/MaybePromise";

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
    contextValue: any;
    operation: OperationDefinitionNode;
    variableValues: { [key: string]: any };
    fieldResolver: GraphQLFieldResolver<any, any>;
    errors: GraphQLError[];
}

export interface ExecutionResultDataDefault {
    [key: string]: any
}

/**
 * The result of GraphQL execution.
 *
 *   - `errors` is included when any errors occurred as a non-empty array.
 *   - `data` is the result of a successful execution of the query.
 */
export interface ExecutionResult<TData = ExecutionResultDataDefault> {
    errors?: ReadonlyArray<GraphQLError>;
    data?: TData;
}

export type ExecutionArgs = {
    schema: GraphQLSchema;
    document: DocumentNode;
    rootValue?: any;
    contextValue?: any;
    variableValues?: Maybe<{ [key: string]: any }>;
    operationName?: Maybe<string>;
    fieldResolver?: Maybe<GraphQLFieldResolver<any, any>>;
};

/**
 * Implements the "Evaluating requests" section of the GraphQL specification.
 *
 * Returns either a synchronous ExecutionResult (if all encountered resolvers
 * are synchronous), or a Promise of an ExecutionResult that will eventually be
 * resolved and never rejected.
 *
 * If the arguments to this function do not result in a legal execution context,
 * a GraphQLError will be thrown immediately explaining the invalid input.
 *
 * Accepts either an object with named arguments, or individual arguments.
 */
export function execute<TData = ExecutionResultDataDefault>(args: ExecutionArgs): MaybePromise<ExecutionResult<TData>>;
export function execute<TData = ExecutionResultDataDefault>(
    schema: GraphQLSchema,
    document: DocumentNode,
    rootValue?: any,
    contextValue?: any,
    variableValues?: Maybe<{ [key: string]: any }>,
    operationName?: Maybe<string>,
    fieldResolver?: Maybe<GraphQLFieldResolver<any, any>>
): MaybePromise<ExecutionResult<TData>>;

/**
 * Given a ResponsePath (found in the `path` entry in the information provided
 * as the last argument to a field resolver), return an Array of the path keys.
 */
export function responsePathAsArray(path: ResponsePath): ReadonlyArray<string | number>;

/**
 * Given a ResponsePath and a key, return a new ResponsePath containing the
 * new key.

 */
export function addPath(
    prev: ResponsePath | undefined,
    key: string | number
): { prev: ResponsePath | undefined; key: string | number };

/**
 * Essential assertions before executing to provide developer feedback for
 * improper use of the GraphQL library.
 */
export function assertValidExecutionArguments(
    schema: GraphQLSchema,
    document: DocumentNode,
    rawVariableValues: Maybe<{ [key: string]: any }>
): void;

/**
 * Constructs a ExecutionContext object from the arguments passed to
 * execute, which we will pass throughout the other execution methods.
 *
 * Throws a GraphQLError if a valid execution context cannot be created.
 */
export function buildExecutionContext(
    schema: GraphQLSchema,
    document: DocumentNode,
    rootValue: any,
    contextValue: any,
    rawVariableValues: Maybe<{ [key: string]: any }>,
    operationName: Maybe<string>,
    fieldResolver: Maybe<GraphQLFieldResolver<any, any>>
): ReadonlyArray<GraphQLError> | ExecutionContext;

/**
 * Given a selectionSet, adds all of the fields in that selection to
 * the passed in map of fields, and returns it at the end.
 *
 * CollectFields requires the "runtime type" of an object. For a field which
 * returns an Interface or Union type, the "runtime type" will be the actual
 * Object type returned by that field.
 */
export function collectFields(
    exeContext: ExecutionContext,
    runtimeType: GraphQLObjectType,
    selectionSet: SelectionSetNode,
    fields: { [key: string]: Array<FieldNode> },
    visitedFragmentNames: { [key: string]: boolean }
): { [key: string]: Array<FieldNode> };

export function buildResolveInfo(
    exeContext: ExecutionContext,
    fieldDef: GraphQLField<any, any>,
    fieldNodes: ReadonlyArray<FieldNode>,
    parentType: GraphQLObjectType,
    path: ResponsePath
): GraphQLResolveInfo;

// Isolates the "ReturnOrAbrupt" behavior to not de-opt the `resolveField`
// function. Returns the result of resolveFn or the abrupt-return Error object.
export function resolveFieldValueOrError<TSource>(
    exeContext: ExecutionContext,
    fieldDef: GraphQLField<TSource, any>,
    fieldNodes: ReadonlyArray<FieldNode>,
    resolveFn: GraphQLFieldResolver<TSource, any>,
    source: TSource,
    info: GraphQLResolveInfo
): Error | any;

/**
 * If a resolve function is not given, then a default resolve behavior is used
 * which takes the property of the source object of the same name as the field
 * and returns it as the result, or if it's a function, returns the result
 * of calling that function while passing along args and context.
 */
export const defaultFieldResolver: GraphQLFieldResolver<any, any>;

/**
 * This method looks up the field on the given type defintion.
 * It has special casing for the two introspection fields, __schema
 * and __typename. __typename is special because it can always be
 * queried as a field, even in situations where no other fields
 * are allowed, like on a Union. __schema could get automatically
 * added to the query type, but that would require mutating type
 * definitions, which would cause issues.
 */
export function getFieldDef(
    schema: GraphQLSchema,
    parentType: GraphQLObjectType,
    fieldName: string
): Maybe<GraphQLField<any, any>>;
