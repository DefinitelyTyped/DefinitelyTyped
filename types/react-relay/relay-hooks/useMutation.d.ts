import {
    ConcreteRequest,
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

export interface MutationErrorSource<TMutation extends MutationParameters> {
    readonly errors: PayloadError[];
    readonly operation: ConcreteRequest;
    readonly variables: VariablesOf<TMutation>;
}

export interface MutationError<TMutation extends MutationParameters> {
    readonly name: string;
    readonly messageFormat: string;
    readonly messageParams: Array<string | number | boolean>;
    readonly type: 'fatal' | 'error' | 'warn' | 'info';
    readonly source: MutationErrorSource<TMutation>;
    readonly taalOpcodes: number[];
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
