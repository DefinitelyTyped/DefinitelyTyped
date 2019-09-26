import { PayloadError, UploadableMap } from '../network/RelayNetworkTypes';
import { Disposable, Variables } from '../util/RelayRuntimeTypes';
import { DeclarativeMutationConfig } from './RelayDeclarativeMutationConfig';
import { GraphQLTaggedNode } from '../query/RelayModernGraphQLTag';
import { SelectorStoreUpdater } from '../store/RelayStoreTypes';
import { RelayModernEnvironment as Environment } from '../store/RelayModernEnvironment';

export interface MutationParameters {
    readonly variables: Variables;
    readonly response: unknown;
    readonly rawResponse?: unknown;
}

export interface MutationConfig<TOperation extends MutationParameters> {
    configs?: ReadonlyArray<DeclarativeMutationConfig>;
    mutation: GraphQLTaggedNode;
    variables: TOperation['variables'];
    uploadables?: UploadableMap;
    onCompleted?:
        | ((response: TOperation['response'], errors: ReadonlyArray<PayloadError> | null | undefined) => void)
        | null;
    onError?: ((error: Error) => void) | null;
    optimisticUpdater?: SelectorStoreUpdater | null;
    optimisticResponse?: TOperation['response'] | null;
    updater?: SelectorStoreUpdater<TOperation['response']> | null;
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
