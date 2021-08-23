import { DeclarativeMutationConfig } from '../mutations/RelayDeclarativeMutationConfig';
import { GraphQLTaggedNode } from '../query/RelayModernGraphQLTag';
import { Disposable, OperationType } from '../util/RelayRuntimeTypes';
import { SelectorStoreUpdater, Environment } from '../store/RelayStoreTypes';

export interface GraphQLSubscriptionConfig<TSubscription extends OperationType> {
    configs?: ReadonlyArray<DeclarativeMutationConfig> | undefined;
    subscription: GraphQLTaggedNode;
    variables: TSubscription['variables'];
    onCompleted?: (() => void) | undefined;
    onError?: ((error: Error) => void) | undefined;
    onNext?: ((response: TSubscription['response'] | null | undefined) => void) | undefined;
    updater?: SelectorStoreUpdater<TSubscription['response']> | undefined;
}

export function requestSubscription<TSubscription extends OperationType = OperationType>(
    environment: Environment,
    // tslint:disable-next-line no-unnecessary-generics
    config: GraphQLSubscriptionConfig<TSubscription>,
): Disposable;
