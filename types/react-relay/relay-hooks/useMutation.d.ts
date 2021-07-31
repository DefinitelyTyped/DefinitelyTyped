import {
    DeclarativeMutationConfig,
    Disposable,
    GraphQLTaggedNode,
    IEnvironment,
    MutationConfig,
    MutationParameters,
    NormalizationOperation,
    PayloadError,
    ReaderFragment,
    RequestParameters,
    SelectorStoreUpdater,
    UploadableMap,
    VariablesOf,
} from 'relay-runtime';

export interface MutationOperation {
    fragment: ReaderFragment;
    kind: string;
    operation: NormalizationOperation;
    params: RequestParameters;
    hash: string;
}

export interface MutationErrorSource<TMutation extends MutationParameters> {
    errors: PayloadError[];
    operation: MutationOperation;
    variables: VariablesOf<TMutation>; // TODO: Does this work correctly?    [name: string]: any;
}

export interface MutationError<TMutation extends MutationParameters> {
    name: string;
    messageFormat: string;
    messageParams: (string | number | boolean)[];
    type: "fatal" | "error" | "warn" | "info";
    source: MutationErrorSource<TMutation>; // TODO
}

export interface UseMutationConfig<TMutation extends MutationParameters> {
    variables: VariablesOf<TMutation>;
    updater?: SelectorStoreUpdater<TMutation['response']> | null | undefined;
    uploadables?: UploadableMap | undefined;
    optimisticUpdater?: SelectorStoreUpdater<TMutation['response']> | null | undefined;
    optimisticResponse?: TMutation['rawResponse'] | undefined;
    configs?: DeclarativeMutationConfig[] | undefined;
    onError?: ((error: MutationError<TMutation>) => void | null) | undefined;
    onCompleted?: ((response: TMutation['response'], errors: PayloadError[] | null) => void | null) | undefined;
    onUnsubscribe?: (() => void | null) | undefined;
}

export function useMutation<TMutation extends MutationParameters>(
    mutation: GraphQLTaggedNode,
    commitMutationFn?: (environment: IEnvironment, config: MutationConfig<TMutation>) => Disposable,
): [(config: UseMutationConfig<TMutation>) => Disposable, boolean];
