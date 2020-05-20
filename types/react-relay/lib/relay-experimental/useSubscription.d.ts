import { GraphQLSubscriptionConfig, OperationType, requestSubscription } from 'relay-runtime';

export function useSubscription<TSubscriptionPayload extends OperationType>(
    config: GraphQLSubscriptionConfig<TSubscriptionPayload>,
    requestSubscriptionFn?: typeof requestSubscription,
): void;
