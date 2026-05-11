import { RelayObservable } from "../network/RelayObservable";
import { Environment } from "../store/RelayStoreTypes";
import { CacheConfig, FetchQueryFetchPolicy, OperationType } from "../util/RelayRuntimeTypes";
import { GraphQLTaggedNode } from "./RelayModernGraphQLTag";

export function fetchQuery<T extends OperationType>(
    environment: Environment,
    taggedNode: GraphQLTaggedNode,
    variables: T["variables"],
    cacheConfig?: {
        networkCacheConfig?: CacheConfig | null | undefined;
        fetchPolicy?: FetchQueryFetchPolicy | null | undefined;
    } | null,
): RelayObservable<T["response"]>;
