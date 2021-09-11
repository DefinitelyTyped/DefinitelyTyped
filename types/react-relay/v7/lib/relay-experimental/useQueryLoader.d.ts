import { DisposeFn, GraphQLTaggedNode, OperationType, VariablesOf } from 'relay-runtime';
import { LoadQueryOptions, PreloadableConcreteRequest, PreloadedQuery } from './EntryPointTypes';

export type useQueryLoaderHookType<TQuery extends OperationType> = [
    PreloadedQuery<TQuery> | null | undefined,
    (variables: VariablesOf<TQuery>, options?: LoadQueryOptions) => void,
    DisposeFn,
];

export function useQueryLoader<TQuery extends OperationType>(
    preloadableRequest: GraphQLTaggedNode | PreloadableConcreteRequest<TQuery>,
): useQueryLoaderHookType<TQuery>;
