import { Handler } from '../handler';
import { AppSyncIdentity, AppSyncResolverEventHeaders } from './appsync-resolver';

/**
 * An AWS Amplify GraphQL resolver event. It differs slightly from a native ('direct') AppSync resolver event.
 *
 * @see https://docs.amplify.aws/cli/graphql/custom-business-logic/#structure-of-the-function-event
 */
export interface AmplifyGraphQlResolverEvent<TArguments = Record<string, any>, TSource = Record<string, any>> {
    /** The name of the parent object type (data model) of the field being resolved. */
    typeName: string;
    /** The field within the given type to resolve. */
    fieldName: string;
    /** A map of GraphQL arguments passed to the field being resolved. */
    arguments: TArguments;
    /** The identity used to authenticate the request to AppSync. */
    identity?: AppSyncIdentity;
    /** The parent object's value if resolving a nested field. */
    source: TSource;
    /** The request headers  */
    request: {
        headers: AppSyncResolverEventHeaders;
        domainName: string | null;
    };
    /** The object returned by a possible previous pipeline resolver function. */
    prev: { result: { [key: string]: any } } | null;
}

/**
 * A handler for Amplify GraphQL Lambda resolvers. The returned result will be resolved as the value (no need to convert to a JSON string).
 *
 * @see https://docs.amplify.aws/cli/graphql/custom-business-logic/#structure-of-the-function-event
 */
export type AmplifyGraphQlResolverHandler<TArguments = Record<string, any>, TSource = Record<string, any>> = Handler<
    AmplifyGraphQlResolverEvent<TArguments, TSource>
>;
