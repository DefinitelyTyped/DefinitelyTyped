import { DeclarativeMutationConfig } from '../mutations/RelayDeclarativeMutationConfig';
import { GraphQLTaggedNode } from '../query/RelayModernGraphQLTag';
import { Variables, Disposable, OperationType } from '../util/RelayRuntimeTypes';
import { SelectorStoreUpdater, Environment } from '../store/RelayStoreTypes';

export interface GraphQLSubscriptionConfig<TSubscription extends OperationType> {
    configs?: ReadonlyArray<DeclarativeMutationConfig>;
    subscription: GraphQLTaggedNode;
    variables: Variables;
    onCompleted?: () => void;
    onError?: (error: Error) => void;
    onNext?: (response: TSubscription['response'] | null | undefined) => void;
    updater?: SelectorStoreUpdater<TSubscription['response']>;
}

export function requestSubscription<TSubscription extends OperationType = OperationType>(
    environment: Environment,
    // tslint:disable-next-line no-unnecessary-generics
    config: GraphQLSubscriptionConfig<TSubscription>,
): Disposable;
