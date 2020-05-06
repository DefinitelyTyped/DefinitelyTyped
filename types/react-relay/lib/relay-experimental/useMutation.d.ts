import { GraphQLTaggedNode, Disposable, MutationConfig, MutationParameters, IEnvironment, PayloadError, DeclarativeMutationConfig, SelectorStoreUpdater, UploadableMap } from "relay-runtime";

export interface UseMutationConfig<TMutation extends MutationParameters> {
    configs?: DeclarativeMutationConfig[];
    onError?: (error: Error) => void;
    onCompleted?: (
        response: TMutation["response"],
        errors: PayloadError[],
    ) => void;
    onUnsubscribe?: () => void;
    optimisticResponse?: TMutation["rawResponse"];
    optimisticUpdater?: SelectorStoreUpdater;
    updater?: SelectorStoreUpdater;
    uploadables?: UploadableMap;
    variables: TMutation["variables"];
}

// tslint:disable-next-line no-unnecessary-generics
export function useMutation<TMutation extends MutationParameters>(
    mutation: GraphQLTaggedNode,
    commitMutationFn?: (environment: IEnvironment, config: MutationConfig<TMutation>) => Disposable,
): [(config: UseMutationConfig<TMutation>) => Disposable, boolean];
