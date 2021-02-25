import {
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
    variables: VariablesOf<TMutation>;
    updater?: SelectorStoreUpdater<TMutation['response']> | null;
    uploadables?: UploadableMap;
    optimisticUpdater?: SelectorStoreUpdater<TMutation['response']> | null;
    optimisticResponse?: TMutation['rawResponse'];
    configs?: DeclarativeMutationConfig[];
    onError?: (error: Error) => void | null;
    onCompleted?: (response: TMutation['response'], errors: PayloadError[]) => void | null;
    onUnsubscribe?: () => void | null;
}

export function useMutation<TMutation extends MutationParameters>(
    mutation: GraphQLTaggedNode,
    commitMutationFn?: (environment: IEnvironment, config: MutationConfig<TMutation>) => Disposable,
): [(config: UseMutationConfig<TMutation>) => Disposable, boolean];
