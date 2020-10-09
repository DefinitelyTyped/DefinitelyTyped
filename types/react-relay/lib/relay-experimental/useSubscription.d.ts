import type { GraphQLSubscriptionConfig, OperationType } from 'relay-runtime';
import { requestSubscription } from 'relay-runtime';

export function useSubscription<TSubscriptionPayload extends OperationType>(
    // The actual subtype of OperationType is required to allow for type inference inside GraphQLSubscriptionConfig.s
    config: GraphQLSubscriptionConfig<TSubscriptionPayload>,
    requestSubscriptionFn?: typeof requestSubscription,
): void;
