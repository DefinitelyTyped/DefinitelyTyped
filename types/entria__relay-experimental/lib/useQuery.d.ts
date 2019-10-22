import { FetchPolicy } from './QueryResource';
import { CacheConfig, GraphQLTaggedNode, OperationType } from 'relay-runtime';

export function useQuery<TQuery extends OperationType>(
    gqlQuery: GraphQLTaggedNode,
    variables?: TQuery['variables'] | null,
    options?: {
        fetchKey?: string | number;
        fetchPolicy?: FetchPolicy;
        networkCacheConfig?: CacheConfig;
    },
): TQuery['response'];
