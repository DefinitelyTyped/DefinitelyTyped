import { DeclarativeMutationConfig } from '../mutations/RelayDeclarativeMutationConfig';
import { GraphQLTaggedNode } from '../query/RelayModernGraphQLTag';
import { Variables, Disposable } from '../util/RelayRuntimeTypes';
import { SelectorStoreUpdater, Environment } from '../store/RelayStoreTypes';

export interface GraphQLSubscriptionConfig<TSubscriptionPayload> {
    configs?: ReadonlyArray<DeclarativeMutationConfig>;
    subscription: GraphQLTaggedNode;
    variables: Variables;
    onCompleted?: () => void;
    onError?: (error: Error) => void;
    onNext?: (response: TSubscriptionPayload | null | undefined) => void;
    updater?: SelectorStoreUpdater<TSubscriptionPayload>;
}

export function requestSubscription<TSubscriptionPayload>(
    environment: Environment,
    // tslint:disable-next-line no-unnecessary-generics
    config: GraphQLSubscriptionConfig<TSubscriptionPayload>,
): Disposable;
