import { DeclarativeMutationConfig } from "../mutations/RelayDeclarativeMutationConfig";
import { GraphQLTaggedNode } from "../query/RelayModernGraphQLTag";
import { Environment, SelectorStoreUpdater } from "../store/RelayStoreTypes";
import { CacheConfig, Disposable, OperationType } from "../util/RelayRuntimeTypes";

export interface GraphQLSubscriptionConfig<TSubscription extends OperationType> {
    cacheConfig?: CacheConfig | undefined;
    configs?: ReadonlyArray<DeclarativeMutationConfig> | undefined;
    subscription: GraphQLTaggedNode;
    variables: TSubscription["variables"];
    onCompleted?: (() => void) | undefined;
    onError?: ((error: Error) => void) | undefined;
    onNext?: ((response: TSubscription["response"] | null | undefined) => void) | undefined;
    updater?: SelectorStoreUpdater<TSubscription["response"]> | undefined;
}

export function requestSubscription<TSubscription extends OperationType = OperationType>(
    environment: Environment,
    // eslint-disable-next-line @definitelytyped/no-unnecessary-generics
    config: GraphQLSubscriptionConfig<TSubscription>,
): Disposable;
