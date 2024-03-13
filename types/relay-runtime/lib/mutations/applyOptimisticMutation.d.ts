import { GraphQLTaggedNode } from "../query/RelayModernGraphQLTag";
import { Environment, SelectorStoreUpdater } from "../store/RelayStoreTypes";
import { Disposable, Variables } from "../util/RelayRuntimeTypes";
import { DeclarativeMutationConfig } from "./RelayDeclarativeMutationConfig";

export interface OptimisticMutationConfig {
    configs?: readonly DeclarativeMutationConfig[] | null | undefined;
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
