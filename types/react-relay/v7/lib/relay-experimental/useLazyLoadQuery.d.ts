import { CacheConfig, FetchPolicy, GraphQLTaggedNode, OperationType, RenderPolicy, VariablesOf } from 'relay-runtime';

export function useLazyLoadQuery<TQuery extends OperationType>(
    gqlQuery: GraphQLTaggedNode,
    variables: VariablesOf<TQuery>,
    options?: {
        fetchKey?: string | number | undefined;
        fetchPolicy?: FetchPolicy | undefined;
        networkCacheConfig?: CacheConfig | undefined;
        UNSTABLE_renderPolicy?: RenderPolicy | undefined;
    },
): TQuery['response'];
