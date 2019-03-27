import Maybe from "../tsutils/Maybe";
import { GraphQLSchema } from "../type/schema";
import { DocumentNode } from "../language/ast";
import { GraphQLFieldResolver } from "../type/definition";
import { ExecutionResult, ExecutionResultDataDefault } from "../execution/execute";

/**
 * Implements the "Subscribe" algorithm described in the GraphQL specification.
 *
 * Returns a Promise which resolves to either an AsyncIterator (if successful)
 * or an ExecutionResult (client error). The promise will be rejected if a
 * server error occurs.
 *
 * If the client-provided arguments to this function do not result in a
 * compliant subscription, a GraphQL Response (ExecutionResult) with
 * descriptive errors and no data will be returned.
 *
 * If the the source stream could not be created due to faulty subscription
 * resolver logic or underlying systems, the promise will resolve to a single
 * ExecutionResult containing `errors` and no `data`.
 *
 * If the operation succeeded, the promise resolves to an AsyncIterator, which
 * yields a stream of ExecutionResults representing the response stream.
 *
 * Accepts either an object with named arguments, or individual arguments.
 */
export function subscribe<TData = ExecutionResultDataDefault>(args: {
    schema: GraphQLSchema;
    document: DocumentNode;
    rootValue?: any;
    contextValue?: any;
    variableValues?: Maybe<{ [key: string]: any }>;
    operationName?: Maybe<string>;
    fieldResolver?: Maybe<GraphQLFieldResolver<any, any>>;
    subscribeFieldResolver?: Maybe<GraphQLFieldResolver<any, any>>;
}): Promise<AsyncIterator<ExecutionResult<TData>> | ExecutionResult<TData>>;

export function subscribe<TData = ExecutionResultDataDefault>(
    schema: GraphQLSchema,
    document: DocumentNode,
    rootValue?: any,
    contextValue?: any,
    variableValues?: Maybe<{ [key: string]: any }>,
    operationName?: Maybe<string>,
    fieldResolver?: Maybe<GraphQLFieldResolver<any, any>>,
    subscribeFieldResolver?: Maybe<GraphQLFieldResolver<any, any>>
): Promise<AsyncIterator<ExecutionResult<TData>> | ExecutionResult<TData>>;

/**
 * Implements the "CreateSourceEventStream" algorithm described in the
 * GraphQL specification, resolving the subscription source event stream.
 *
 * Returns a Promise<AsyncIterable>.
 *
 * If the client-provided invalid arguments, the source stream could not be
 * created, or the resolver did not return an AsyncIterable, this function will
 * will throw an error, which should be caught and handled by the caller.
 *
 * A Source Event Stream represents a sequence of events, each of which triggers
 * a GraphQL execution for that event.
 *
 * This may be useful when hosting the stateful subscription service in a
 * different process or machine than the stateless GraphQL execution engine,
 * or otherwise separating these two steps. For more on this, see the
 * "Supporting Subscriptions at Scale" information in the GraphQL specification.
 */
export function createSourceEventStream<TData = ExecutionResultDataDefault>(
    schema: GraphQLSchema,
    document: DocumentNode,
    rootValue?: any,
    contextValue?: any,
    variableValues?: { [key: string]: any },
    operationName?: Maybe<string>,
    fieldResolver?: Maybe<GraphQLFieldResolver<any, any>>
): Promise<AsyncIterable<any> | ExecutionResult<TData>>;
