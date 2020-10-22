import { GraphQLTaggedNode, OperationType } from 'relay-runtime';

import { PreloadedQuery } from './EntryPointTypes';
import { RenderPolicy } from './QueryResource';

export function usePreloadedQuery<TQuery extends OperationType>(
    gqlQuery: GraphQLTaggedNode,
    preloadedQuery: PreloadedQuery<TQuery>,
    options?: {
        UNSTABLE_renderPolicy?: RenderPolicy;
    }
): TQuery['response'];
