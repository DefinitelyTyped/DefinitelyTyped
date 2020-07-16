import { GraphQLTaggedNode, OperationType } from 'relay-runtime';

import { PreloadedQuery } from './EntryPointTypes';

export function usePreloadedQuery<TQuery extends OperationType>(
    gqlQuery: GraphQLTaggedNode,
    preloadedQuery: PreloadedQuery<TQuery>,
): TQuery['response'];
