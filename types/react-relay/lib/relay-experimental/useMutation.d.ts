import type {
    DeclarativeMutationConfig,
    Disposable,
    GraphQLTaggedNode,
    IEnvironment,
    MutationConfig,
    MutationParameters,
    PayloadError,
    SelectorStoreUpdater,
    UploadableMap,
    VariablesOf,
} from 'relay-runtime';

export interface UseMutationConfig<TMutation extends MutationParameters> {
    configs?: DeclarativeMutationConfig[];
    onError?: (error: Error) => void | null;
    onCompleted?: (response: TMutation['response'], errors: PayloadError[]) => void | null;
    onUnsubscribe?: () => void | null;
    optimisticResponse?: TMutation['rawResponse'];
    optimisticUpdater?: SelectorStoreUpdater<TMutation['response']> | null;
    updater?: SelectorStoreUpdater<TMutation['response']> | null;
    uploadables?: UploadableMap;
    variables: VariablesOf<TMutation>;
}

// tslint:disable-next-line no-unnecessary-generics
export function useMutation<TMutation extends MutationParameters>(
    mutation: GraphQLTaggedNode,
    commitMutationFn?: (environment: IEnvironment, config: MutationConfig<TMutation>) => Disposable,
): [(config: UseMutationConfig<TMutation>) => Disposable, boolean];
