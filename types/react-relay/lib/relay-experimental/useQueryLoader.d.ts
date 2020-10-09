import type { GraphQLTaggedNode, OperationType, VariablesOf } from 'relay-runtime';
import type { LoadQueryOptions, PreloadableConcreteRequest, PreloadedQuery } from './EntryPointTypes';

type useQueryLoaderHookType<TQuery extends OperationType> = [
    PreloadedQuery<TQuery> | null | undefined,
    (variables: VariablesOf<TQuery>, options?: LoadQueryOptions) => void,
    () => void,
];

export function useQueryLoader<TQuery extends OperationType>(
    preloadableRequest: GraphQLTaggedNode | PreloadableConcreteRequest<TQuery>,
): useQueryLoaderHookType<TQuery>;
