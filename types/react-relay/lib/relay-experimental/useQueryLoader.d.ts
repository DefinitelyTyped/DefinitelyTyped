import { PreloadedQuery, LoadQueryOptions, PreloadableConcreteRequest } from './EntryPointTypes';

import { GraphQLTaggedNode, OperationType } from 'relay-runtime';

type useQueryLoaderHookType<TQuery extends OperationType> = [
    PreloadedQuery<TQuery> | null | undefined,
    (variables: TQuery['variables'], options?: LoadQueryOptions) => void,
    () => void,
];

export function useQueryLoader<TQuery extends OperationType>(
    preloadableRequest: GraphQLTaggedNode | PreloadableConcreteRequest<TQuery>,
): useQueryLoaderHookType<TQuery>;

export {};
