import { RelayRuntimeTypes, RelayCommonTypes } from 'relay-runtime';
import { RelayEnvironmentInterface } from 'react-relay/classic';
import {} from 'react-relay/modern';

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
export function getFragment(q: string, v?: RelayCommonTypes.Variables): string;
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
    config: RelayRuntimeTypes.MutationConfig<any>,
): RelayCommonTypes.Disposable;
export function applyUpdate(
    environment: CompatEnvironment,
    config: RelayRuntimeTypes.OptimisticMutationConfig,
): RelayCommonTypes.Disposable;

// ~~~~~~~~~~~~~~~~~~~~~
// RelayCompatContainer
// ~~~~~~~~~~~~~~~~~~~~~
export interface GeneratedNodeMap { [key: string]: RelayCommonTypes.GraphQLTaggedNode; }
export function createContainer<T>(
    Component: ReactBaseComponent<T>,
    fragmentSpec: RelayCommonTypes.GraphQLTaggedNode | GeneratedNodeMap,
): ReactFragmentComponent<T>;

// ~~~~~~~~~~~~~~~~~~~~~
// injectDefaultVariablesProvider
// ~~~~~~~~~~~~~~~~~~~~~
export type VariablesProvider = () => RelayCommonTypes.Variables;
export function injectDefaultVariablesProvider(variablesProvider: VariablesProvider): void;
