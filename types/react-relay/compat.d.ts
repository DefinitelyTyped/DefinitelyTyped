export {
    QueryRenderer,
    commitMutation,
    createFragmentContainer,
    createPaginationContainer,
    createRefetchContainer,
    fetchQuery,
    graphql,
} from "react-relay";

import * as RelayRuntimeTypes from "relay-runtime";
import { RelayEnvironmentInterface } from "react-relay/classic";

// ~~~~~~~~~~~~~~~~~~~~~
// Maybe Fix
// ~~~~~~~~~~~~~~~~~~~~~
type ConcreteFragment = any;
type ConcreteBatch = any;
type ConcreteFragmentDefinition = object;
type ConcreteOperationDefinition = object;

// ~~~~~~~~~~~~~~~~~~~~~
// Util
// ~~~~~~~~~~~~~~~~~~~~~
export function getFragment(q: string, v?: RelayRuntimeTypes.Variables): string;
export interface ComponentWithFragment<T> extends React.ComponentClass<T> {
    getFragment: typeof getFragment;
}
export interface StatelessWithFragment<T> extends React.StatelessComponent<T> {
    getFragment: typeof getFragment;
}
export type ReactFragmentComponent<T> = ComponentWithFragment<T> | StatelessWithFragment<T>;
export type ReactBaseComponent<T> = React.ComponentClass<T> | React.StatelessComponent<T>;
export type RelayClassicEnvironment = RelayEnvironmentInterface;

// ~~~~~~~~~~~~~~~~~~~~~
// RelayCompatTypes
// ~~~~~~~~~~~~~~~~~~~~~
export type CompatEnvironment = RelayRuntimeTypes.Environment | RelayClassicEnvironment;

// ~~~~~~~~~~~~~~~~~~~~~
// RelayCompatMutations
// ~~~~~~~~~~~~~~~~~~~~~
export function commitUpdate(
    environment: CompatEnvironment,
    config: RelayRuntimeTypes.MutationConfig<any>
): RelayRuntimeTypes.Disposable;
export function applyUpdate(
    environment: CompatEnvironment,
    config: RelayRuntimeTypes.OptimisticMutationConfig
): RelayRuntimeTypes.Disposable;

// ~~~~~~~~~~~~~~~~~~~~~
// RelayCompatContainer
// ~~~~~~~~~~~~~~~~~~~~~
export interface GeneratedNodeMap {
    [key: string]: RelayRuntimeTypes.GraphQLTaggedNode;
}
export function createContainer<T>(
    Component: ReactBaseComponent<T>,
    fragmentSpec: RelayRuntimeTypes.GraphQLTaggedNode | GeneratedNodeMap
): ReactFragmentComponent<T>;

// ~~~~~~~~~~~~~~~~~~~~~
// injectDefaultVariablesProvider
// ~~~~~~~~~~~~~~~~~~~~~
export type VariablesProvider = () => RelayRuntimeTypes.Variables;
export function injectDefaultVariablesProvider(variablesProvider: VariablesProvider): void;
