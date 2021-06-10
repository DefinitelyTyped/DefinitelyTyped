import { OperationType, CacheConfig, FetchQueryFetchPolicy } from '../util/RelayRuntimeTypes';
import { Environment } from '../store/RelayStoreTypes';
import { GraphQLTaggedNode } from './RelayModernGraphQLTag';
import { RelayObservable } from '../network/RelayObservable';

export function fetchQuery<T extends OperationType>(
    environment: Environment,
    taggedNode: GraphQLTaggedNode,
    variables: T['variables'],
    cacheConfig?: { networkCacheConfig?: CacheConfig | null, fetchPolicy?: FetchQueryFetchPolicy | null } | null,
): RelayObservable<T['response']>;
