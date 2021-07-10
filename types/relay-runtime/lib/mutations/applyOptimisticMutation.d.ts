import { DeclarativeMutationConfig } from './RelayDeclarativeMutationConfig';
import { Disposable, Variables } from '../util/RelayRuntimeTypes';
import { GraphQLTaggedNode } from '../query/RelayModernGraphQLTag';
import { SelectorStoreUpdater, Environment } from '../store/RelayStoreTypes';

export interface OptimisticMutationConfig {
    configs?: ReadonlyArray<DeclarativeMutationConfig> | null | undefined;
    mutation: GraphQLTaggedNode;
    variables: Variables;
    optimisticUpdater?: SelectorStoreUpdater | null | undefined;
    optimisticResponse?: object | undefined;
}

/**
 * Higher-level helper function to execute a mutation against a specific
 * environment.
 */
export function applyOptimisticMutation(environment: Environment, config: OptimisticMutationConfig): Disposable;
