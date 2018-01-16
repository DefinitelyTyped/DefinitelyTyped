export {
    QueryRenderer,
    fetchQuery,
    graphql,
} from "./index";
import {
    ConnectionConfig,
    RelayPaginationProp as RelayModernPaginationProp,
    RelayRefetchProp as RelayModernRefetchProp
} from "./index";
import * as RelayRuntimeTypes from "relay-runtime";
import { RelayEnvironmentInterface } from "./classic";

// ~~~~~~~~~~~~~~~~~~~~~
// Maybe Fix
// ~~~~~~~~~~~~~~~~~~~~~
export type ConcreteFragment = any;
export type ConcreteBatch = any;
export type ConcreteFragmentDefinition = object;
export type ConcreteOperationDefinition = object;

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
// RelayProps
// ~~~~~~~~~~~~~~~~~~~~~
export interface RelayProp {
    environment: CompatEnvironment;
}

export type RelayPaginationProp = RelayModernPaginationProp & RelayProp;
export type RelayRefetchProp = RelayModernRefetchProp & RelayProp;

// ~~~~~~~~~~~~~~~~~~~~~
// RelayCompatMutations
// ~~~~~~~~~~~~~~~~~~~~~
export function commitMutation(
    environment: CompatEnvironment,
    config: RelayRuntimeTypes.MutationConfig<any>
): RelayRuntimeTypes.Disposable;
export function applyOptimisticMutation(
    environment: CompatEnvironment,
    config: RelayRuntimeTypes.OptimisticMutationConfig
): RelayRuntimeTypes.Disposable;

// ~~~~~~~~~~~~~~~~~~~~~
// RelayCompatContainers
// ~~~~~~~~~~~~~~~~~~~~~
export interface GeneratedNodeMap {
    [key: string]: RelayRuntimeTypes.GraphQLTaggedNode;
}

export function createFragmentContainer<T>(
    Component: ReactBaseComponent<T>,
    fragmentSpec: RelayRuntimeTypes.GraphQLTaggedNode | GeneratedNodeMap
): ReactFragmentComponent<T>;

export function createRefetchContainer<T>(
    Component: ReactBaseComponent<T>,
    fragmentSpec: RelayRuntimeTypes.GraphQLTaggedNode | GeneratedNodeMap,
    taggedNode: RelayRuntimeTypes.GraphQLTaggedNode
): ReactFragmentComponent<T>;

export function createPaginationContainer<T>(
    Component: ReactBaseComponent<T>,
    fragmentSpec: RelayRuntimeTypes.GraphQLTaggedNode | GeneratedNodeMap,
    connectionConfig: ConnectionConfig<T>
): ReactFragmentComponent<T>;

// ~~~~~~~~~~~~~~~~~~~~~
// injectDefaultVariablesProvider
// ~~~~~~~~~~~~~~~~~~~~~
export type VariablesProvider = () => RelayRuntimeTypes.Variables;
export function injectDefaultVariablesProvider(variablesProvider: VariablesProvider): void;
