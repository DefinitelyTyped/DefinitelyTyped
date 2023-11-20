import { GraphQLSubscriptionConfig, OperationType, requestSubscription } from "relay-runtime";

// eslint-disable-next-line @definitelytyped/no-unnecessary-generics
export function useSubscription<TSubscriptionPayload extends OperationType>(
    // The actual subtype of OperationType is required to allow for type inference inside GraphQLSubscriptionConfig.s
    config: GraphQLSubscriptionConfig<TSubscriptionPayload>,
    requestSubscriptionFn?: typeof requestSubscription,
): void;
