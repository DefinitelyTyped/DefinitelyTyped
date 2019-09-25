import { DeclarativeMutationConfig } from './RelayDeclarativeMutationConfig';

import { GraphQLTaggedNode, Variables, SelectorStoreUpdater, Environment } from '../../index';
import { Disposable } from '../util/RelayRuntimeTypes';

export interface OptimisticMutationConfig {
    configs?: ReadonlyArray<DeclarativeMutationConfig> | null;
    mutation: GraphQLTaggedNode;
    variables: Variables;
    optimisticUpdater?: SelectorStoreUpdater | null;
    optimisticResponse?: object;
}

/**
 * Higher-level helper function to execute a mutation against a specific
 * environment.
 */
export function applyOptimisticMutation(environment: Environment, config: OptimisticMutationConfig): Disposable;
