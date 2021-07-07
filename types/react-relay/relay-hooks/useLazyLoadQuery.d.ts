import { CacheConfig, FetchPolicy, GraphQLTaggedNode, OperationType, RenderPolicy, VariablesOf } from 'relay-runtime';

export function useLazyLoadQuery<TQuery extends OperationType>(
    gqlQuery: GraphQLTaggedNode,
    variables: VariablesOf<TQuery>,
    options?: {
        fetchKey?: string | number;
        fetchPolicy?: FetchPolicy;
        networkCacheConfig?: CacheConfig;
        UNSTABLE_renderPolicy?: RenderPolicy;
    },
): TQuery['response'];
