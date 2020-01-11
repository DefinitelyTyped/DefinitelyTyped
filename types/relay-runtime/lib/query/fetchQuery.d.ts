import { OperationType, CacheConfig } from '../util/RelayRuntimeTypes';
import { Environment } from '../store/RelayStoreTypes';
import { GraphQLTaggedNode } from './RelayModernGraphQLTag';

export function fetchQuery<T extends OperationType>(
    environment: Environment,
    taggedNode: GraphQLTaggedNode,
    variables: T['variables'],
    cacheConfig?: CacheConfig | null,
): Promise<T['response']>;
