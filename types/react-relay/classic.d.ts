import * as React from "react";
import * as RelayRuntimeTypes from "relay-runtime";

// ~~~~~~~~~~~~~~~~~~~~~
// Maybe Fix
// ~~~~~~~~~~~~~~~~~~~~~
export type StoreReaderData = any;
export type StoreReaderOptions = any;
export type RelayStoreData = any;
export interface RelayQuery {
    Fragment: any;
    Node: any;
    Root: any;
}

// ~~~~~~~~~~~~~~~~~~~~~
// Environment
// ~~~~~~~~~~~~~~~~~~~~~
export interface FragmentResolver {
    dispose(): void;
    resolve(
        fragment: RelayQuery["Fragment"],
        dataIDs: RelayRuntimeTypes.DataID | RelayRuntimeTypes.DataID[]
    ): StoreReaderData | StoreReaderData[] | undefined | null;
}

export interface RelayEnvironmentInterface {
    forceFetch(
        querySet: RelayRuntimeTypes.RelayQuerySet,
        onReadyStateChange: RelayRuntimeTypes.ReadyStateChangeCallback
    ): RelayRuntimeTypes.Abortable;
    getFragmentResolver(fragment: RelayQuery["Fragment"], onNext: () => void): FragmentResolver;
    getStoreData(): RelayStoreData;
    primeCache(
        querySet: RelayRuntimeTypes.RelayQuerySet,
        onReadyStateChange: RelayRuntimeTypes.ReadyStateChangeCallback
    ): RelayRuntimeTypes.Abortable;
    read(
        node: RelayQuery["Node"],
        dataID: RelayRuntimeTypes.DataID,
        options?: StoreReaderOptions
    ): StoreReaderData | void;
    readQuery(root: RelayQuery["Root"], options?: StoreReaderOptions): StoreReaderData[] | void;
}

// ~~~~~~~~~~~~~~~~~~~~~
// the rest is to match pre-existing types from before v1
// ~~~~~~~~~~~~~~~~~~~~~
export type ClientMutationID = string;

/** Fragments are a hash of functions */
export interface Fragments {
    [query: string]: ((variables?: RelayVariables) => string);
}

export interface CreateContainerOpts {
    initialVariables?: any;
    fragments: Fragments;
    prepareVariables?(prevVariables: RelayVariables): RelayVariables;
}

export interface RelayVariables {
    [name: string]: any;
}

/** add static getFragment method to the component constructor */
export interface RelayContainerClass<T> extends React.ComponentClass<T> {
    getFragment: ((q: string, v?: RelayVariables) => string);
}

export interface RelayQueryRequestResolve {
    response: any;
}

export type RelayMutationStatus =
    | "UNCOMMITTED" // Transaction hasn't yet been sent to the server. Transaction can be committed or rolled back.
    | "COMMIT_QUEUED" // Transaction was committed but another transaction with the same collision key is pending, so the transaction has been queued to send to the server.
    | "COLLISION_COMMIT_FAILED" // Transaction was queued for commit but another transaction with the same collision key failed. All transactions in the collision queue,
    // including this one, have been failed. Transaction can be recommitted or rolled back.
    | "COMMITTING" // Transaction is waiting for the server to respond.
    | "COMMIT_FAILED";

export class RelayMutationTransaction {
    applyOptimistic(): RelayMutationTransaction;
    commit(): RelayMutationTransaction | null;
    recommit(): void;
    rollback(): void;
    getError(): Error;
    getStatus(): RelayMutationStatus;
    getHash(): string;
    getID(): ClientMutationID;
}

export interface RelayMutationRequest {
    getQueryString(): string;
    getVariables(): RelayVariables;
    resolve(result: RelayQueryRequestResolve): any;
    reject(errors: any): any;
}

export interface RelayQueryRequest {
    resolve(result: RelayQueryRequestResolve): any;
    reject(errors: any): any;
    getQueryString(): string;
    getVariables(): RelayVariables;
    getID(): string;
    getDebugName(): string;
}

export interface RelayNetworkLayer {
    supports(...options: string[]): boolean;
}

export class DefaultNetworkLayer implements RelayNetworkLayer {
    constructor(host: string, options?: any);
    supports(...options: string[]): boolean;
}

export function createContainer<T>(
    component: React.ComponentClass<T> | React.StatelessComponent<T>,
    params?: CreateContainerOpts
): RelayContainerClass<T>;
export function injectNetworkLayer(networkLayer: RelayNetworkLayer): any;
export function isContainer(component: React.ComponentClass<any>): boolean;
export function QL(...args: any[]): string;

export class Route {
    constructor(params?: RelayVariables);
}

/**
 * Relay Mutation class, where T are the props it takes and S is the returned payload from Relay.Store.update.
 * S is typically dynamic as it depends on the data the app is currently using, but it's possible to always
 * return some data in the payload using REQUIRED_CHILDREN which is where specifying S is the most useful.
 */
export class Mutation<T, S> {
    props: T;

    constructor(props: T);
    static getFragment(q: string): string;
}

export interface Transaction {
    getError(): Error;
    Status(): number;
}

export interface StoreUpdateCallbacks<T> {
    onFailure?(transaction: Transaction): any;
    onSuccess?(response: T): any;
}

export interface Store {
    commitUpdate(mutation: Mutation<any, any>, callbacks?: StoreUpdateCallbacks<any>): any;
}

export const Store: Store;

export class RootContainer extends React.Component<RootContainerProps, any> {}

export interface RootContainerProps extends React.Props<RootContainer> {
    Component: RelayContainerClass<any>;
    route: Route;
    renderLoading?(): JSX.Element;
    renderFetched?(data: any): JSX.Element;
    renderFailure?(error: Error, retry: (...args: any[]) => any): JSX.Element;
}

export class Renderer extends React.Component<RendererProps, any> {}

export interface RendererProps {
    Container: RelayContainerClass<any>; // Relay container that defines fragments and the view to render.
    forceFetch?: boolean; // Whether to send a server request regardless of data available on the client.
    queryConfig: Route; // `QueryConfig` or `Relay.Route` that defines the query roots.
    environment: Store; // An instance of `Relay.Environment` or any object that implements the `RelayEnvironment` interface.
    render?: RenderCallback; //  Called to render when data requirements are being fulfilled.
    onReadyStateChange?: OnReadyStateChange;
}

export interface RenderStateConfig {
    props?: { [propName: string]: any };
    done: boolean;
    error?: Error;
    retry?(): void;
    stale: boolean;
}
export type RenderCallback = (renderState: RenderStateConfig) => any;

export type ReadyStateEvent =
    | "ABORT"
    | "CACHE_RESTORED_REQUIRED"
    | "CACHE_RESTORE_FAILED"
    | "CACHE_RESTORE_START"
    | "NETWORK_QUERY_ERROR"
    | "NETWORK_QUERY_RECEIVED_ALL"
    | "NETWORK_QUERY_RECEIVED_REQUIRED"
    | "NETWORK_QUERY_START"
    | "STORE_FOUND_ALL"
    | "STORE_FOUND_REQUIRED";

export type OnReadyStateChange = (
    readyState: {
        ready: boolean;
        done: boolean;
        stale: boolean;
        error?: Error;
        events: ReadyStateEvent[];
        aborted: boolean;
    }
) => void;

export interface RelayProp<V> {
    readonly route: { name: string }; // incomplete, also has params and queries
    readonly variables: V;
    readonly pendingVariables?: V;
    setVariables(variables: V, onReadyStateChange?: OnReadyStateChange): void;
    forceFetch(variables: V, onReadyStateChange?: OnReadyStateChange): void;
    hasOptimisticUpdate(record: any): boolean;
    getPendingTransactions(record: any): RelayMutationTransaction[];
    commitUpdate(mutation: Mutation<any, any>, callbacks?: StoreUpdateCallbacks<any>): any;
}

export interface RelayProps<V> {
    readonly relay: RelayProp<V>;
}
