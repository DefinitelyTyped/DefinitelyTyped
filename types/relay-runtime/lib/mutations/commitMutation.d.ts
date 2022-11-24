import { PayloadError, UploadableMap } from '../network/RelayNetworkTypes';
import { CacheConfig, Disposable, Variables } from '../util/RelayRuntimeTypes';
import { DeclarativeMutationConfig } from './RelayDeclarativeMutationConfig';
import { GraphQLTaggedNode } from '../query/RelayModernGraphQLTag';
import { Environment, SelectorStoreUpdater } from '../store/RelayStoreTypes';

export interface MutationParameters {
    readonly response: {};
    readonly variables: {};
    readonly rawResponse?: {} | undefined;
}

export interface MutationConfig<TOperation extends MutationParameters> {
    configs?: DeclarativeMutationConfig[] | undefined;
    cacheConfig?: CacheConfig | undefined;
    mutation: GraphQLTaggedNode;
    onError?: ((error: Error) => void) | null | undefined;
    onCompleted?:
        | ((response: TOperation['response'], errors: ReadonlyArray<PayloadError> | null | undefined) => void)
        | null
        | undefined;
    onUnsubscribe?: (() => void | null | undefined) | undefined;
    /**
     * An object whose type matches the raw response type of the mutation. Make sure you decorate
     * your mutation with `@raw_response_type` if you are using this field.
     */
    optimisticResponse?: (TOperation['rawResponse'] extends {} ? TOperation['rawResponse'] : never) | undefined;
    optimisticUpdater?: SelectorStoreUpdater<TOperation['response']> | null | undefined;
    updater?: SelectorStoreUpdater<TOperation['response']> | null | undefined;
    uploadables?: UploadableMap | null | undefined;
    variables: TOperation['variables'];
}

/**
 * Higher-level helper function to execute a mutation against a specific
 * environment.
 */
export function commitMutation<TOperation extends MutationParameters = MutationParameters>(
    environment: Environment,
    // tslint:disable-next-line no-unnecessary-generics
    config: MutationConfig<TOperation>,
): Disposable;
