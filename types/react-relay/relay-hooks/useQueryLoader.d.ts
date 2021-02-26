import { DisposeFn, GraphQLTaggedNode, OperationType, VariablesOf, IEnvironment } from 'relay-runtime';
import { LoadQueryOptions, PreloadableConcreteRequest, PreloadedQuery } from './EntryPointTypes';

export type useQueryLoaderHookType<TQuery extends OperationType> = [
    PreloadedQuery<TQuery> | null | undefined,
    (variables: VariablesOf<TQuery>, options?: UseQueryLoaderLoadQueryOptions) => void,
    DisposeFn,
];

export type UseQueryLoaderLoadQueryOptions = LoadQueryOptions & Readonly<{
    __environment?: IEnvironment | null,
}>;

export function useQueryLoader<TQuery extends OperationType>(
    preloadableRequest: GraphQLTaggedNode | PreloadableConcreteRequest<TQuery>,
): useQueryLoaderHookType<TQuery>;
