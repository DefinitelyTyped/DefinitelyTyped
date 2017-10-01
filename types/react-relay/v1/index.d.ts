// Type definitions for react-relay 1.3
// Project: https://github.com/facebook/relay
// Definitions by: Johannes Schickling <https://github.com/graphcool>, Matt Martin <https://github.com/voxmatt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as React from 'react';
import { RelayCommonTypes, RelayRuntimeTypes } from 'relay-runtime';

////////////////////////////
//  RELAY MODERN TYPES
///////////////////////////
export namespace RelayModernTypes {
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
    interface RelayProp {
        environment: RelayRuntimeTypes.Environment;
    }

    // ~~~~~~~~~~~~~~~~~~~~~
    // RelayQL
    // ~~~~~~~~~~~~~~~~~~~~~
    function RelayQL(
        strings: string[],
        ...substitutions: any[]
    ): RelayCommonTypes.RelayConcreteNode;

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
    const graphql: GraphqlInterface;

    // ~~~~~~~~~~~~~~~~~~~~~
    // ReactRelayQueryRenderer
    // ~~~~~~~~~~~~~~~~~~~~~
    interface QueryRendererProps {
        cacheConfig?: RelayCommonTypes.CacheConfig;
        environment: RelayRuntimeTypes.Environment;
        query: GraphQLTaggedNode;
        render(readyState: ReadyState): React.ReactElement<any> | undefined | null;
        variables: RelayCommonTypes.Variables;
        rerunParamExperimental?: RelayCommonTypes.RerunParam;
    }
    interface ReadyState {
        error: Error | undefined | null;
        props: { [propName: string]: any } | undefined | null;
        retry?(): void;
    }
    interface QueryRendererState {
        readyState: ReadyState;
    }
    class ReactRelayQueryRenderer extends React.Component<QueryRendererProps, QueryRendererState> { }

    // ~~~~~~~~~~~~~~~~~~~~~
    // createFragmentContainer
    // ~~~~~~~~~~~~~~~~~~~~~
    function createFragmentContainer<T>(
        Component: ReactBaseComponent<T>,
        fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap,
    ): ReactBaseComponent<T>;

    // ~~~~~~~~~~~~~~~~~~~~~
    // createPaginationContainer
    // ~~~~~~~~~~~~~~~~~~~~~
    interface PageInfo {
        endCursor: string | undefined | null;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor: string | undefined | null;
    }
    interface ConnectionData {
        edges?: any[];
        pageInfo?: PageInfo;
    }
    type RelayPaginationProp = RelayProp & {
        hasMore(): boolean,
        isLoading(): boolean,
        loadMore(
            pageSize: number,
            callback: (error?: Error) => void,
            options?: RefetchOptions,
        ): RelayCommonTypes.Disposable | undefined | null,
        refetchConnection(
            totalCount: number,
            callback: (error?: Error) => void,
            refetchVariables?: RelayCommonTypes.Variables,
        ): RelayCommonTypes.Disposable | undefined | null,
    };
    function FragmentVariablesGetter(
        prevVars: RelayCommonTypes.Variables,
        totalCount: number,
    ): RelayCommonTypes.Variables;
    interface ConnectionConfig {
        direction?: 'backward' | 'forward';
        getConnectionFromProps?(props: object): ConnectionData | undefined | null;
        getFragmentVariables?: typeof FragmentVariablesGetter;
        getVariables(
            props: { [propName: string]: any },
            paginationInfo: { count: number, cursor?: string },
            fragmentVariables: RelayCommonTypes.Variables,
        ): RelayCommonTypes.Variables;
        query: GraphQLTaggedNode;
    }
    function createPaginationContainer<T>(
        Component: ReactBaseComponent<T>,
        fragmentSpec: GraphQLTaggedNode | GeneratedNodeMap,
        connectionConfig: ConnectionConfig,
    ): ReactBaseComponent<T>;

    // ~~~~~~~~~~~~~~~~~~~~~
    // createFragmentContainer
    // ~~~~~~~~~~~~~~~~~~~~~
    interface RefetchOptions {
        force?: boolean;
        rerunParamExperimental?: RelayCommonTypes.RerunParam;
    }
    type RelayRefetchProp = RelayProp & {
        refetch(
            refetchVariables: RelayCommonTypes.Variables | ((fragmentVariables: RelayCommonTypes.Variables) => RelayCommonTypes.Variables),
            renderVariables?: RelayCommonTypes.Variables,
            callback?: (error?: Error) => void,
            options?: RefetchOptions,
        ): RelayCommonTypes.Disposable,
    };
    function createRefetchContainer<T>(
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
export namespace RelayClassicTypes {
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
            dataIDs: RelayCommonTypes.DataID | RelayCommonTypes.DataID[],
        ): StoreReaderData | StoreReaderData[] | undefined | null;
    }
    interface RelayEnvironmentInterface {
        forceFetch(
            querySet: RelayCommonTypes.RelayQuerySet,
            onReadyStateChange: RelayCommonTypes.ReadyStateChangeCallback,
        ): RelayCommonTypes.Abortable;
        getFragmentResolver(
            fragment: RelayQuery["Fragment"],
            onNext: () => void,
        ): FragmentResolver;
        getStoreData(): RelayStoreData;
        primeCache(
            querySet: RelayCommonTypes.RelayQuerySet,
            onReadyStateChange: RelayCommonTypes.ReadyStateChangeCallback,
        ): RelayCommonTypes.Abortable;
        read(
            node: RelayQuery["Node"],
            dataID: RelayCommonTypes.DataID,
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
export namespace RelayCompatTypes {
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
    function getFragment(q: string, v?: RelayCommonTypes.Variables): string;
    interface ComponentWithFragment<T> extends React.ComponentClass<T> {
        getFragment: typeof getFragment;
    }
    interface StatelessWithFragment<T> extends React.StatelessComponent<T> {
        getFragment: typeof getFragment;
    }
    type ReactFragmentComponent<T> = ComponentWithFragment<T> | StatelessWithFragment<T>;
    type ReactBaseComponent<T> = React.ComponentClass<T> | React.StatelessComponent<T>;
    type RelayClassicEnvironment = RelayClassicTypes.RelayEnvironmentInterface;

    // ~~~~~~~~~~~~~~~~~~~~~
    // RelayCompatTypes
    // ~~~~~~~~~~~~~~~~~~~~~
    type CompatEnvironment = RelayRuntimeTypes.Environment | RelayClassicEnvironment;

    // ~~~~~~~~~~~~~~~~~~~~~
    // RelayCompatMutations
    // ~~~~~~~~~~~~~~~~~~~~~
    function commitUpdate(
        environment: CompatEnvironment,
        config: RelayRuntimeTypes.MutationConfig<any>,
    ): RelayCommonTypes.Disposable;
    function applyUpdate(
        environment: CompatEnvironment,
        config: RelayRuntimeTypes.OptimisticMutationConfig,
    ): RelayCommonTypes.Disposable;

    // ~~~~~~~~~~~~~~~~~~~~~
    // RelayCompatContainer
    // ~~~~~~~~~~~~~~~~~~~~~
    interface GeneratedNodeMap { [key: string]: RelayModernTypes.GraphQLTaggedNode; }
    function createContainer<T>(
        Component: ReactBaseComponent<T>,
        fragmentSpec: RelayModernTypes.GraphQLTaggedNode | GeneratedNodeMap,
    ): ReactFragmentComponent<T>;

    // ~~~~~~~~~~~~~~~~~~~~~
    // injectDefaultVariablesProvider
    // ~~~~~~~~~~~~~~~~~~~~~
    type VariablesProvider = () => RelayCommonTypes.Variables;
    function injectDefaultVariablesProvider(variablesProvider: VariablesProvider): void;
}


////////////////////////////
//  MODULES
///////////////////////////
export import QueryRenderer = RelayModernTypes.ReactRelayQueryRenderer;
export import createFragmentContainer = RelayModernTypes.createFragmentContainer;
export import createPaginationContainer = RelayModernTypes.createPaginationContainer;
export import createRefetchContainer = RelayModernTypes.createRefetchContainer;
export import graphql = RelayModernTypes.graphql;

export import commitLocalUpdate = RelayRuntimeTypes.commitLocalUpdate;
export import commitMutation = RelayRuntimeTypes.commitRelayModernMutation;
export import fetchQuery = RelayRuntimeTypes.fetchRelayModernQuery;
export import requestSubscription = RelayRuntimeTypes.requestRelaySubscription;

// exported for convenience — not exports in the original module
export import RelayProp = RelayModernTypes.RelayProp;
export import RelayPaginationProp = RelayModernTypes.RelayPaginationProp;
export import RelayRefetchProp = RelayModernTypes.RelayRefetchProp;

declare module 'react-relay/compat' {
    export import applyOptimisticMutation = RelayCompatTypes.applyUpdate;
    export import commitMutation = RelayCompatTypes.commitUpdate;
    export import createFragmentContainer = RelayCompatTypes.createContainer;
    export import createPaginationContainer = RelayCompatTypes.createContainer;
    export import createRefetchContainer = RelayCompatTypes.createContainer;
    export import injectDefaultVariablesProvider = RelayCompatTypes.injectDefaultVariablesProvider;
    export import QueryRenderer = RelayModernTypes.ReactRelayQueryRenderer;
    export import graphql = RelayModernTypes.graphql;
    export import fetchQuery = RelayRuntimeTypes.fetchRelayModernQuery;
}
// tslint:enable strict-export-declare-modifiers

declare module "react-relay/classic" {
    import * as React from "react";

    type ClientMutationID = string;

    /** Fragments are a hash of functions */
    interface Fragments {
        [query: string]: ((variables?: RelayVariables) => string);
    }

    interface CreateContainerOpts {
        initialVariables?: any;
        fragments: Fragments;
        prepareVariables?(prevVariables: RelayVariables): RelayVariables;
    }

    interface RelayVariables {
        [name: string]: any;
    }

    /** add static getFragment method to the component constructor */
    interface RelayContainerClass<T> extends React.ComponentClass<T> {
        getFragment: ((q: string, v?: RelayVariables) => string);
    }

    interface RelayQueryRequestResolve {
        response: any;
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
        getQueryString(): string;
        getVariables(): RelayVariables;
        resolve(result: RelayQueryRequestResolve): any;
        reject(errors: any): any;
    }

    interface RelayQueryRequest {
        resolve(result: RelayQueryRequestResolve): any;
        reject(errors: any): any;
        getQueryString(): string;
        getVariables(): RelayVariables;
        getID(): string;
        getDebugName(): string;
    }

    interface RelayNetworkLayer {
        supports(...options: string[]): boolean;
    }

    class DefaultNetworkLayer implements RelayNetworkLayer {
        constructor(host: string, options?: any);
        supports(...options: string[]): boolean;
    }

    function createContainer<T>(component: React.ComponentClass<T> | React.StatelessComponent<T>, params?: CreateContainerOpts): RelayContainerClass<T>;
    function injectNetworkLayer(networkLayer: RelayNetworkLayer): any;
    function isContainer(component: React.ComponentClass<any>): boolean;
    function QL(...args: any[]): string;

    class Route {
        constructor(params?: RelayVariables)
    }

    /**
     * Relay Mutation class, where T are the props it takes and S is the returned payload from Relay.Store.update.
     * S is typically dynamic as it depends on the data the app is currently using, but it's possible to always
     * return some data in the payload using REQUIRED_CHILDREN which is where specifying S is the most useful.
     */
    class Mutation<T, S> {
        props: T;

        constructor(props: T);
        static getFragment(q: string): string;
    }

    interface Transaction {
        getError(): Error;
        Status(): number;
    }

    interface StoreUpdateCallbacks<T> {
        onFailure?(transaction: Transaction): any;
        onSuccess?(response: T): any;
    }

    interface Store {
        commitUpdate(mutation: Mutation<any, any>, callbacks?: StoreUpdateCallbacks<any>): any;
    }

    const Store: Store;

    class RootContainer extends React.Component<RootContainerProps, any> { }

    interface RootContainerProps extends React.Props<RootContainer> {
        Component: RelayContainerClass<any>;
        route: Route;
        renderLoading?(): JSX.Element;
        renderFetched?(data: any): JSX.Element;
        renderFailure?(error: Error, retry: (...args: any[]) => any): JSX.Element;
    }

    class Renderer extends React.Component<RendererProps, any> { }

    interface RendererProps {
        Container: RelayContainerClass<any>; // Relay container that defines fragments and the view to render.
        forceFetch?: boolean; // Whether to send a server request regardless of data available on the client.
        queryConfig: Route; // `QueryConfig` or `Relay.Route` that defines the query roots.
        environment: Store;  // An instance of `Relay.Environment` or any object that implements the `RelayEnvironment` interface.
        render?: RenderCallback; //  Called to render when data requirements are being fulfilled.
        onReadyStateChange?: OnReadyStateChange;
    }

    interface RenderStateConfig {
        props?: { [propName: string]: any };
        done: boolean;
        error?: Error;
        retry?(): void;
        stale: boolean;
    }
    type RenderCallback = (renderState: RenderStateConfig) => any;

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
    }) => void;

    interface RelayProp {
        readonly route: { name: string; }; // incomplete, also has params and queries
        readonly variables: any;
        readonly pendingVariables?: any;
        setVariables(variables: any, onReadyStateChange?: OnReadyStateChange): void;
        forceFetch(variables: any, onReadyStateChange?: OnReadyStateChange): void;
        hasOptimisticUpdate(record: any): boolean;
        getPendingTransactions(record: any): RelayMutationTransaction[];
        commitUpdate(mutation: Mutation<any, any>, callbacks?: StoreUpdateCallbacks<any>): any;
    }
}
