import { GraphQLTaggedNode, OperationType, RenderPolicy } from 'relay-runtime';

import { PreloadedQuery } from './EntryPointTypes';

export function usePreloadedQuery<TQuery extends OperationType>(
    gqlQuery: GraphQLTaggedNode,
    preloadedQuery: PreloadedQuery<TQuery>,
    options?: {
        UNSTABLE_renderPolicy?: RenderPolicy;
    },
): TQuery['response'];
