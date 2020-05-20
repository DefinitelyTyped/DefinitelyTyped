import { GraphQLSubscriptionConfig, OperationType, requestSubscription } from 'relay-runtime';

// The actual subtype of OperationType is required to allow for type inferrence inside GraphQLSubscriptionConfig.
// tslint:disable-next-line:no-unnecessary-generics
export function useSubscription<TSubscriptionPayload extends OperationType>(
    config: GraphQLSubscriptionConfig<TSubscriptionPayload>,
    requestSubscriptionFn?: typeof requestSubscription,
): void;
