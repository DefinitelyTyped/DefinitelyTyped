import type { GraphQLTaggedNode, OperationType } from 'relay-runtime';
import type { LoadQueryOptions, PreloadableConcreteRequest, PreloadedQuery } from './EntryPointTypes';

type useQueryLoaderHookType<TQuery extends OperationType> = [
    PreloadedQuery<TQuery> | null | undefined,
    (variables: TQuery['variables'], options?: LoadQueryOptions) => void,
    () => void,
];

export function useQueryLoader<TQuery extends OperationType>(
    preloadableRequest: GraphQLTaggedNode | PreloadableConcreteRequest<TQuery>,
): useQueryLoaderHookType<TQuery>;
