import { PayloadError, UploadableMap } from '../network/RelayNetworkTypes';
import { CacheConfig, Disposable, Variables } from '../util/RelayRuntimeTypes';
import { DeclarativeMutationConfig } from './RelayDeclarativeMutationConfig';
import { GraphQLTaggedNode } from '../query/RelayModernGraphQLTag';
import { Environment, SelectorStoreUpdater } from '../store/RelayStoreTypes';

export interface MutationParameters {
    readonly response: {};
    readonly variables: {};
    readonly rawResponse?: {};
}

export interface MutationConfig<TOperation extends MutationParameters> {
    configs?: DeclarativeMutationConfig[];
    cacheConfig?: CacheConfig;
    mutation: GraphQLTaggedNode;
    onError?: ((error: Error) => void) | null;
    onCompleted?:
        | ((response: TOperation['response'], errors: ReadonlyArray<PayloadError> | null | undefined) => void)
        | null;
    onUnsubscribe?: () => void | null | undefined;
    optimisticResponse?: TOperation['response'];
    optimisticUpdater?: SelectorStoreUpdater<TOperation['response']> | null;
    updater?: SelectorStoreUpdater<TOperation['response']> | null;
    uploadables?: UploadableMap | null;
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
