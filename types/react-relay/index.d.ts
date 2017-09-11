// Type definitions for react-relay 1.3
// Project: https://github.com/facebook/relay
// Definitions by: Johannes Schickling <https://github.com/graphcool>, Matt Martin <https://github.com/voxmatt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="relay-runtime" />

declare namespace __Relay {

    ////////////////////////////
    //  RELAY MODERN TYPES
    ///////////////////////////
    namespace Modern {
        // ~~~~~~~~~~~~~~~~~~~~~
        // Maybe Fix
        // ~~~~~~~~~~~~~~~~~~~~~
        type ConcreteFragment = any;
        type ConcreteBatch = any;
        type ConcreteFragmentDefinition = object;
        type ConcreteOperationDefinition = object;
        type ReactBaseComponent<T> = React.ComponentClass<T> | React.StatelessComponent<T>;

        // ~~~~~~~~~~~~~~~~~~~~~
        // RelayProp
        // ~~~~~~~~~~~~~~~~~~~~~
        // note: refetch and pagination containers augment this
        export interface RelayProp {
            environment: Runtime.Environment;
        }

        // ~~~~~~~~~~~~~~~~~~~~~
        // RelayQL
        // ~~~~~~~~~~~~~~~~~~~~~
        export function RelayQL(
            strings: string[],
            ...substitutions: any[]
        ): Common.RelayConcreteNode;

        // ~~~~~~~~~~~~~~~~~~~~~
        // RelayModernGraphQLTag
        // ~~~~~~~~~~~~~~~~~~~~~
        interface GeneratedNodeMap { [key: string]: GraphQLTaggedNode; }
        type GraphQLTaggedNode =
            (() => ConcreteFragment | ConcreteBatch)
            | {
                modern(): ConcreteFragment | ConcreteBatch,
                classic(relayQL: typeof RelayQL):
                    | ConcreteFragmentDefinition
                    | ConcreteOperationDefinition,
            };
        /**
         * Runtime function to correspond to the `graphql` tagged template function.
         * All calls to this function should be transformed by the plugin.
         */
        interface GraphqlInterface {
            (strings: string[] | TemplateStringsArray): GraphQLTaggedNode;
            experimental(strings: string[] | TemplateStringsArray): GraphQLTaggedNode;
        }
        export const graphql: GraphqlInterface;

        // ~~~~~~~~~~~~~~~~~~~~~
        // ReactRelayQueryRenderer
        // ~~~~~~~~~~~~~~~~~~~~~
        interface QueryRendererProps {
            cacheConfig?: Common.CacheConfig | void;
            environment: Runtime.Environment;
            query: GraphQLTaggedNode;
            render(readyState: ReadyState): React.ReactElement<any> | void;
            variables: Common.Variables;
            rerunParamExperimental?: Common.RerunParam;
        }
        export interface ReadyState {
            error: Error | void;
            props: { [propName: string]: any } | void;
            retry: (() => void) | void;
        }
        interface QueryRendererState {
            readyState: ReadyState;
        }
        class ReactRelayQueryRenderer extends React.Component<QueryRendererProps, QueryRendererState> { }

        // ~~~~~~~~~~~~~~~~~~~~~
        // createFragmentContainer
        // ~~~~~~~~~~~~~~~~~~~~~
        export function createFragmentContainer<T>(
            Component: ReactBaseComponent<T>,
            fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap,
        ): ReactBaseComponent<T>;

        // ~~~~~~~~~~~~~~~~~~~~~
        // createPaginationContainer
        // ~~~~~~~~~~~~~~~~~~~~~
        interface PageInfo {
            endCursor: string | void;
            hasNextPage: boolean;
            hasPreviousPage: boolean;
            startCursor: string | void;
        }
        interface ConnectionData {
            edges?: any[];
            pageInfo?: PageInfo | void;
        }
        export type RelayPaginationProp = RelayProp & {
            hasMore(): boolean,
            isLoading(): boolean,
            loadMore(
                pageSize: number,
                callback: (error?: Error) => void,
                options?: RefetchOptions,
            ): Common.Disposable | void,
            refetchConnection(
                totalCount: number,
                callback: (error?: Error | void) => void,
                refetchVariables?: Common.Variables | void,
            ): Common.Disposable | void,
        };
        export function FragmentVariablesGetter(
            prevVars: Common.Variables,
            totalCount: number,
        ): Common.Variables;
        interface ConnectionConfig {
            direction?: 'backward' | 'forward';
            getConnectionFromProps?(props: object): ConnectionData | void;
            getFragmentVariables?: typeof FragmentVariablesGetter;
            getVariables(
                props: { [propName: string]: any },
                paginationInfo: { count: number, cursor: string | void },
                fragmentVariables: Common.Variables,
            ): Common.Variables;
            query: GraphQLTaggedNode;
        }
        export function createPaginationContainer<T>(
            Component: ReactBaseComponent<T>,
            fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap,
            connectionConfig: ConnectionConfig,
        ): ReactBaseComponent<T>;

        // ~~~~~~~~~~~~~~~~~~~~~
        // createFragmentContainer
        // ~~~~~~~~~~~~~~~~~~~~~
        export interface RefetchOptions {
            force?: boolean;
            rerunParamExperimental?: Common.RerunParam;
        }
        export type RelayRefetchProp = RelayProp & {
            refetch(
                refetchVariables: Common.Variables | ((fragmentVariables: Common.Variables) => Common.Variables),
                renderVariables?: Common.Variables,
                callback?: (error: Error | void) => void,
                options?: RefetchOptions,
            ): Common.Disposable,
        };
        export function createRefetchContainer<T>(
            Component: ReactBaseComponent<T>,
            fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap,
            taggedNode: GraphQLTaggedNode,
        ): ReactBaseComponent<T>;
    }

    ////////////////////////////
    //  RELAY CLASSIC TYPES
    ///////////////////////////
    // note: the namespace here is really for use inside of
    // relay-compat; the module declaration below
    // uses the old, pre-existing types
    namespace Classic {
        // ~~~~~~~~~~~~~~~~~~~~~
        // Maybe Fix
        // ~~~~~~~~~~~~~~~~~~~~~
        type StoreReaderData = any;
        type StoreReaderOptions = any;
        type RelayStoreData = any;
        interface RelayQuery { Fragment: any; Node: any; Root: any; }

        // ~~~~~~~~~~~~~~~~~~~~~
        // Environment
        // ~~~~~~~~~~~~~~~~~~~~~
        interface FragmentResolver {
            dispose(): void;
            resolve(
                fragment: RelayQuery["Fragment"],
                dataIDs: Common.DataID | Common.DataID[],
            ): (StoreReaderData | StoreReaderData[]) | void;
        }
        interface RelayEnvironmentInterface {
            forceFetch(
                querySet: Common.RelayQuerySet,
                onReadyStateChange: Common.ReadyStateChangeCallback,
            ): Common.Abortable;
            getFragmentResolver(
                fragment: RelayQuery["Fragment"],
                onNext: () => void,
            ): FragmentResolver;
            getStoreData(): RelayStoreData;
            primeCache(
                querySet: Common.RelayQuerySet,
                onReadyStateChange: Common.ReadyStateChangeCallback,
            ): Common.Abortable;
            read(
                node: RelayQuery["Node"],
                dataID: Common.DataID,
                options?: StoreReaderOptions,
            ): StoreReaderData | void;
            readQuery(
                root: RelayQuery["Root"],
                options?: StoreReaderOptions,
            ): StoreReaderData[] | void;
        }
    }

    ////////////////////////////
    //  RELAY COMPAT TYPES
    ///////////////////////////
    namespace Compat {
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
        export function getFragment(q: string, v?: Common.Variables): string;
        interface ComponentWithFragment<T> extends React.ComponentClass<T> {
            getFragment: typeof getFragment;
        }
        interface StatelessWithFragment<T> extends React.StatelessComponent<T> {
            getFragment: typeof getFragment;
        }
        type ReactFragmentComponent<T> = ComponentWithFragment<T> | StatelessWithFragment<T>;
        type ReactBaseComponent<T> = React.ComponentClass<T> | React.StatelessComponent<T>;
        export type RelayClassicEnvironment = Classic.RelayEnvironmentInterface;

        // ~~~~~~~~~~~~~~~~~~~~~
        // RelayCompatTypes
        // ~~~~~~~~~~~~~~~~~~~~~
        export type CompatEnvironment = Runtime.Environment | RelayClassicEnvironment;

        // ~~~~~~~~~~~~~~~~~~~~~
        // RelayCompatMutations
        // ~~~~~~~~~~~~~~~~~~~~~
        export function commitUpdate<T>(
            environment: CompatEnvironment,
            config: Runtime.MutationConfig<T>,
        ): Common.Disposable;
        export function applyUpdate(
            environment: CompatEnvironment,
            config: Runtime.OptimisticMutationConfig,
        ): Common.Disposable;

        // ~~~~~~~~~~~~~~~~~~~~~
        // RelayCompatContainer
        // ~~~~~~~~~~~~~~~~~~~~~
        export interface GeneratedNodeMap { [key: string]: Modern.GraphQLTaggedNode; }
        export function createContainer<T>(
            Component: ReactBaseComponent<T>,
            fragmentSpec: Modern.GraphQLTaggedNode | GeneratedNodeMap,
        ): ReactFragmentComponent<T>;

        // ~~~~~~~~~~~~~~~~~~~~~
        // injectDefaultVariablesProvider
        // ~~~~~~~~~~~~~~~~~~~~~
        type VariablesProvider = () => Common.Variables;
        export function injectDefaultVariablesProvider(variablesProvider: VariablesProvider): void;
    }
}

////////////////////////////
//  MODULES
///////////////////////////

declare module 'react-relay' {
    export import QueryRenderer = __Relay.Modern.ReactRelayQueryRenderer;
    export import createFragmentContainer = __Relay.Modern.createFragmentContainer;
    export import createPaginationContainer = __Relay.Modern.createPaginationContainer;
    export import createRefetchContainer = __Relay.Modern.createRefetchContainer;
    export import graphql = __Relay.Modern.graphql;

    export import commitLocalUpdate = __Relay.Runtime.commitLocalUpdate;
    export import commitMutation = __Relay.Runtime.commitRelayModernMutation;
    export import fetchQuery = __Relay.Runtime.fetchRelayModernQuery;
    export import requestSubscription = __Relay.Runtime.requestRelaySubscription;

    // exported for convenience — not exports in the original module
    export import RelayProp = __Relay.Modern.RelayProp;
    export import RelayPaginationProp = __Relay.Modern.RelayPaginationProp;
    export import RelayRefetchProp = __Relay.Modern.RelayRefetchProp;
}

declare module 'react-relay/compat' {
    export import applyOptimisticMutation = __Relay.Compat.applyUpdate;
    export import commitMutation = __Relay.Compat.commitUpdate;
    export import createFragmentContainer = __Relay.Compat.createContainer;
    export import createPaginationContainer = __Relay.Compat.createContainer;
    export import createRefetchContainer = __Relay.Compat.createContainer;
    export import injectDefaultVariablesProvider = __Relay.Compat.injectDefaultVariablesProvider;
    export import QueryRenderer = __Relay.Modern.ReactRelayQueryRenderer;
    export import graphql = __Relay.Modern.graphql;
    export import fetchQuery = __Relay.Runtime.fetchRelayModernQuery;
}

declare module "react-relay/classic" {
    import * as React from "react";

    type ClientMutationID = string;

    /** Fragments are a hash of functions */
    interface Fragments {
        [query: string]: ((variables?: RelayVariables) => string)
    }

    interface CreateContainerOpts {
        initialVariables?: any
        fragments: Fragments
        prepareVariables?(prevVariables: RelayVariables): RelayVariables
    }

    interface RelayVariables {
        [name: string]: any
    }

    /** add static getFragment method to the component constructor */
    interface RelayContainerClass<T> extends React.ComponentClass<T> {
        getFragment: ((q: string, v?: RelayVariables) => string)
    }

    interface RelayQueryRequestResolve {
        response: any
    }

    type RelayMutationStatus =
        'UNCOMMITTED' | // Transaction hasn't yet been sent to the server. Transaction can be committed or rolled back.
        'COMMIT_QUEUED' | // Transaction was committed but another transaction with the same collision key is pending, so the transaction has been queued to send to the server.
        'COLLISION_COMMIT_FAILED' | // Transaction was queued for commit but another transaction with the same collision key failed. All transactions in the collision queue,
        // including this one, have been failed. Transaction can be recommitted or rolled back.
        'COMMITTING' | // Transaction is waiting for the server to respond.
        'COMMIT_FAILED';

    class RelayMutationTransaction {
        applyOptimistic(): RelayMutationTransaction;
        commit(): RelayMutationTransaction | null;
        recommit(): void;
        rollback(): void;
        getError(): Error;
        getStatus(): RelayMutationStatus;
        getHash(): string;
        getID(): ClientMutationID;
    }

    interface RelayMutationRequest {
        getQueryString(): string
        getVariables(): RelayVariables
        resolve(result: RelayQueryRequestResolve): any
        reject(errors: any): any
    }

    interface RelayQueryRequest {
        resolve(result: RelayQueryRequestResolve): any
        reject(errors: any): any

        getQueryString(): string
        getVariables(): RelayVariables
        getID(): string
        getDebugName(): string
    }

    interface RelayNetworkLayer {
        supports(...options: string[]): boolean
    }

    class DefaultNetworkLayer implements RelayNetworkLayer {
        constructor(host: string, options?: any)
        supports(...options: string[]): boolean
    }

    export function createContainer<T>(component: React.ComponentClass<T> | React.StatelessComponent<T>, params?: CreateContainerOpts): RelayContainerClass<T>
    export function injectNetworkLayer(networkLayer: RelayNetworkLayer): any
    export function isContainer(component: React.ComponentClass<any>): boolean
    export function QL(...args: any[]): string

    class Route {
        constructor(params?: RelayVariables)
    }

    /**
     * Relay Mutation class, where T are the props it takes and S is the returned payload from Relay.Store.update.
     * S is typically dynamic as it depends on the data the app is currently using, but it's possible to always
     * return some data in the payload using REQUIRED_CHILDREN which is where specifying S is the most useful.
     */
    class Mutation<T, S> {
        props: T

        constructor(props: T)
        static getFragment(q: string): string
    }

    interface Transaction {
        getError(): Error
        Status(): number
    }

    interface StoreUpdateCallbacks<T> {
        onFailure?(transaction: Transaction): any
        onSuccess?(response: T): any
    }

    interface Store {
        commitUpdate(mutation: Mutation<any, any>, callbacks?: StoreUpdateCallbacks<any>): any
    }

    const Store: Store

    class RootContainer extends React.Component<RootContainerProps, any> { }

    interface RootContainerProps extends React.Props<RootContainer> {
        Component: RelayContainerClass<any>
        route: Route
        renderLoading?(): JSX.Element
        renderFetched?(data: any): JSX.Element
        renderFailure?(error: Error, retry: (...args: any[]) => any): JSX.Element
    }

    type ReadyStateEvent =
        'ABORT' |
        'CACHE_RESTORED_REQUIRED' |
        'CACHE_RESTORE_FAILED' |
        'CACHE_RESTORE_START' |
        'NETWORK_QUERY_ERROR' |
        'NETWORK_QUERY_RECEIVED_ALL' |
        'NETWORK_QUERY_RECEIVED_REQUIRED' |
        'NETWORK_QUERY_START' |
        'STORE_FOUND_ALL' |
        'STORE_FOUND_REQUIRED';

    type OnReadyStateChange = (readyState: {
        ready: boolean,
        done: boolean,
        stale: boolean,
        error?: Error,
        events: ReadyStateEvent[],
        aborted: boolean
    }) => void

    interface RelayProp {
        readonly route: { name: string; }; // incomplete, also has params and queries
        readonly variables: any;
        readonly pendingVariables?: any | null;
        setVariables(variables: any, onReadyStateChange?: OnReadyStateChange): void;
        forceFetch(variables: any, onReadyStateChange?: OnReadyStateChange): void;
        hasOptimisticUpdate(record: any): boolean;
        getPendingTransactions(record: any): RelayMutationTransaction[];
        commitUpdate(mutation: Mutation<any, any>, callbacks?: StoreUpdateCallbacks<any>): any;
    }
}
