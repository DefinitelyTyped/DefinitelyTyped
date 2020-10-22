import { FetchPolicy, RenderPolicy } from './QueryResource';
import { CacheConfig, GraphQLTaggedNode, OperationType } from 'relay-runtime';

export function useLazyLoadQuery<TQuery extends OperationType>(
    gqlQuery: GraphQLTaggedNode,
    variables: TQuery['variables'],
    options?: {
        fetchKey?: string | number;
        fetchPolicy?: FetchPolicy;
        networkCacheConfig?: CacheConfig;
        UNSTABLE_renderPolicy?: RenderPolicy;
    },
): TQuery['response'];
