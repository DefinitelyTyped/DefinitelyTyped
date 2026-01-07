import type { GraphQLTaggedNode, IEnvironment, Observable, OperationType } from "../..";
import type { FragmentState } from "./FragmentTypes";

/**
 * This function returns an observable that can be used to subscribe to the data
 * contained in a query. It does not return the full response shape, but rather
 * the contents of the query body minus any fragment spreads.  If you wish to
 * read the contents of a fragment spread into this query you may pass the
 * object into which the fragment was spread to `observeFragment`.
 *
 * NOTE: `observeQuery` assumes that you have already fetched and retained the
 * query via some other means, such as `fetchQuery`.
 *
 * This feature is still experimental and does not properly handle some resolver
 * features such as client-to-server edges.
 */
export function observeQuery<T extends OperationType>(
    environment: IEnvironment,
    gqlQuery: GraphQLTaggedNode,
    variables: T["variables"],
): Observable<FragmentState<T["response"]>>;
