// Type definitions for relay-runtime 1.3
// Project: https://github.com/facebook/relay
// Definitions by: Matt Martin <https://github.com/voxmatt>
//                 Eloy Durán <https://github.com/alloy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/**
 * SOURCE:
 * Relay 1.3.0
 * https://github.com/facebook/relay/blob/b85a1d69bb72be4ace67179f55c2a54a8d761c8b/packages/react-relay/classic/environment/RelayCombinedEnvironmentTypes.js
 */
// ~~~~~~~~~~~~~~~~~~~~~
// Maybe Fix
// ~~~~~~~~~~~~~~~~~~~~~
export type RelayConcreteNode = any;
export type RelayMutationTransaction = any;
export type RelayMutationRequest = any;
export type RelayQueryRequest = any;
export type ConcreteFragmentDefinition = object;
export type ConcreteOperationDefinition = object;

/**
 * FIXME: RelayContainer used to be typed with ReactClass<any>, but
 * ReactClass is broken and allows for access to any property. For example
 * ReactClass<any>.getFragment('foo') is valid even though ReactClass has no
 * such getFragment() type definition. When ReactClass is fixed this causes a
 * lot of errors in Relay code since methods like getFragment() are used often
 * but have no definition in Relay's types. Suppressing for now.
 */
export type RelayContainer = any;

// ~~~~~~~~~~~~~~~~~~~~~
// Used in artifacts
// emitted by
// relay-compiler
// ~~~~~~~~~~~~~~~~~~~~~

// File: https://github.com/facebook/relay/blob/fe0e70f10bbcba1fff89911313ea69f24569464b/packages/relay-runtime/util/RelayConcreteNode.js
// Using enum here to create a distinct types.
export type ConcreteFragment = any;
export type ConcreteRequest = any;
export type ConcreteBatchRequest = any;

export type RequestNode = ConcreteRequest | ConcreteBatchRequest;

export const enum FragmentReference {}

// ~~~~~~~~~~~~~~~~~~~~~
// RelayQL
// ~~~~~~~~~~~~~~~~~~~~~
export type RelayQL = (strings: string[], ...substitutions: any[]) => RelayConcreteNode;

// ~~~~~~~~~~~~~~~~~~~~~
// RelayModernGraphQLTag
// ~~~~~~~~~~~~~~~~~~~~~
export interface GeneratedNodeMap {
    [key: string]: GraphQLTaggedNode;
}
export type GraphQLTaggedNode =
    | (() => ConcreteFragment | RequestNode)
    | {
          modern(): ConcreteFragment | RequestNode;
          classic(relayQL: RelayQL): ConcreteFragmentDefinition | ConcreteOperationDefinition;
      };
// ~~~~~~~~~~~~~~~~~~~~~
// General Usage
// ~~~~~~~~~~~~~~~~~~~~~
export type DataID = string;
export interface Variables {
    [name: string]: any;
}
export type Uploadable = File | Blob;
export interface UploadableMap {
    [key: string]: Uploadable;
}

// ~~~~~~~~~~~~~~~~~~~~~
// RelayNetworkTypes
// Version: Relay 1.3.0
// File: https://github.com/facebook/relay/blob/master/packages/relay-runtime/network/RelayNetworkTypes.js
// ~~~~~~~~~~~~~~~~~~~~~

export interface LegacyObserver<T> {
    onCompleted?(): void;
    onError?(error: Error): void;
    onNext?(data: T): void;
}
export interface PayloadError {
    message: string;
    locations?: Array<{
        line: number;
        column: number;
    }>;
}
/**
 * A function that executes a GraphQL operation with request/response semantics.
 *
 * May return an Observable or Promise of a raw server response.
 */
export function FetchFunction(
    operation: RequestNode,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables?: UploadableMap
): ObservableFromValue<QueryPayload>;

/**
 * A function that executes a GraphQL subscription operation, returning one or
 * more raw server responses over time.
 *
 * May return an Observable, otherwise must call the callbacks found in the
 * fourth parameter.
 */
export type SubscribeFunction = (
    operation: RequestNode,
    variables: Variables,
    cacheConfig: CacheConfig,
    observer: LegacyObserver<QueryPayload>
) => RelayObservable<QueryPayload> | Disposable;

// ~~~~~~~~~~~~~~~~~~~~~
// RelayStoreTypes
// Version: Relay 1.3.0
// File: https://github.com/facebook/relay/blob/master/packages/relay-runtime/store/RelayStoreTypes.js
// ~~~~~~~~~~~~~~~~~~~~~
/**
 * A function that receives a proxy over the store and may trigger side-effects
 * (indirectly) by calling `set*` methods on the store or its record proxies.
 */
export type StoreUpdater = (store: RecordSourceProxy) => void;

/**
 * Similar to StoreUpdater, but accepts a proxy tied to a specific selector in
 * order to easily access the root fields of a query/mutation as well as a
 * second argument of the response object of the mutation.
 */
export type SelectorStoreUpdater = (
    store: RecordSourceSelectorProxy,
    // Actually RelayCombinedEnvironmentTypes#SelectorData, but mixed is
    // inconvenient to access deeply in product code.
    data: any // FLOW FIXME
) => void;

/**
 * Extends the RecordSourceProxy interface with methods for accessing the root
 * fields of a Selector.
 */
export interface RecordSourceSelectorProxy {
    create(dataID: DataID, typeName: string): RecordProxy;
    delete(dataID: DataID): void;
    get(dataID: DataID): RecordProxy | null;
    getRoot(): RecordProxy;
    getRootField(fieldName: string): RecordProxy | null;
    getPluralRootField(fieldName: string): RecordProxy[] | null;
}

export interface RecordProxy {
    copyFieldsFrom(source: RecordProxy): void;
    getDataID(): DataID;
    getLinkedRecord(name: string, args?: Variables): RecordProxy | null;
    getLinkedRecords(name: string, args?: Variables): ReadonlyArray<RecordProxy | null> | null;
    getOrCreateLinkedRecord(name: string, typeName: string, args?: Variables): RecordProxy;
    getType(): string;
    getValue(name: string, args?: Variables): any;
    setLinkedRecord(record: RecordProxy, name: string, args?: Variables): RecordProxy;
    setLinkedRecords(
        records: Array<RecordProxy | null> | undefined | null,
        name: string,
        args?: Variables
    ): RecordProxy;
    setValue(value: any, name: string, args?: Variables): RecordProxy;
}

export interface RecordSourceProxy {
    create(dataID: DataID, typeName: string): RecordProxy;
    delete(dataID: DataID): void;
    get(dataID: DataID): Array<RecordProxy | null> | null;
    getRoot(): RecordProxy;
}

export interface HandleFieldPayload {
    // The arguments that were fetched.
    args: Variables;
    // The __id of the record containing the source/handle field.
    dataID: DataID;
    // The (storage) key at which the original server data was written.
    fieldKey: string;
    // The name of the handle
    handle: string;
    // The (storage) key at which the handle's data should be written by the
    // handler
    handleKey: string;
}
export interface HandlerInterface {
    update(store: RecordSourceProxy, fieldPayload: HandleFieldPayload): void;
    [functionName: string]: (...args: any[]) => any;
}
export const ConnectionHandler: HandlerInterface;
export const ViewerHandler: HandlerInterface;

// ~~~~~~~~~~~~~~~~~~~~~
// RelayCombinedEnvironmentTypes
// Version: Relay 1.3.0
// File: https://github.com/facebook/relay/blob/b85a1d69bb72be4ace67179f55c2a54a8d761c8b/packages/react-relay/classic/environment/RelayCombinedEnvironmentTypes.js
// ~~~~~~~~~~~~~~~~~~~~~
/**
 * Settings for how a query response may be cached.
 *
 * - `force`: causes a query to be issued unconditionally, irrespective of the
 *   state of any configured response cache.
 * - `poll`: causes a query to live update by polling at the specified interval
 *   in milliseconds. (This value will be passed to setTimeout.)
 */
export interface CacheConfig {
    force?: boolean;
    poll?: number;
}

/**
 * Represents any resource that must be explicitly disposed of. The most common
 * use-case is as a return value for subscriptions, where calling `dispose()`
 * would cancel the subscription.
 */
export interface Disposable {
    dispose(): void;
}

/**
 * Arbitrary data e.g. received by a container as props.
 */
export interface Props {
    [key: string]: any;
}

/**
 * A selector defines the starting point for a traversal into the graph for the
 * purposes of targeting a subgraph.
 */
export interface CSelector<TNode> {
    dataID: DataID;
    node: TNode;
    variables: Variables;
}

/**
 * A representation of a selector and its results at a particular point in time.
 */
export type CSnapshot<TNode> = CSelector<TNode> & {
    data: SelectorData | null | undefined;
    seenRecords: RecordMap;
};

/**
 * The results of a selector given a store/RecordSource.
 */
export interface SelectorData {
    [key: string]: any;
}

/**
 * The results of reading the results of a FragmentMap given some input
 * `Props`.
 */
export interface FragmentSpecResults {
    [key: string]: any;
}

/**
 * A utility for resolving and subscribing to the results of a fragment spec
 * (key -> fragment mapping) given some "props" that determine the root ID
 * and variables to use when reading each fragment. When props are changed via
 * `setProps()`, the resolver will update its results and subscriptions
 * accordingly. Internally, the resolver:
 * - Converts the fragment map & props map into a map of `Selector`s.
 * - Removes any resolvers for any props that became null.
 * - Creates resolvers for any props that became non-null.
 * - Updates resolvers with the latest props.
 */
export interface FragmentSpecResolver {
    /**
     * Stop watching for changes to the results of the fragments.
     */
    dispose(): void;

    /**
     * Get the current results.
     */
    resolve(): FragmentSpecResults;

    /**
     * Update the resolver with new inputs. Call `resolve()` to get the updated
     * results.
     */
    setProps(props: Props): void;

    /**
     * Override the variables used to read the results of the fragments. Call
     * `resolve()` to get the updated results.
     */
    setVariables(variables: Variables): void;
}

export interface CFragmentMap<TFragment> {
    [key: string]: TFragment;
}

/**
 * An operation selector describes a specific instance of a GraphQL operation
 * with variables applied.
 *
 * - `root`: a selector intended for processing server results or retaining
 *   response data in the store.
 * - `fragment`: a selector intended for use in reading or subscribing to
 *   the results of the the operation.
 */
export interface COperationSelector<TNode, TOperation> {
    fragment: CSelector<TNode>;
    node: TOperation;
    root: CSelector<TNode>;
    variables: Variables;
}

/**
 * The public API of Relay core. Represents an encapsulated environment with its
 * own in-memory cache.
 */
export interface CEnvironment<TEnvironment, TFragment, TGraphQLTaggedNode, TNode, TOperation, TPayload> {
    /**
     * Read the results of a selector from in-memory records in the store.
     */
    lookup(selector: CSelector<TNode>): CSnapshot<TNode>;

    /**
     * Subscribe to changes to the results of a selector. The callback is called
     * when data has been committed to the store that would cause the results of
     * the snapshot's selector to change.
     */
    subscribe(snapshot: CSnapshot<TNode>, callback: (snapshot: CSnapshot<TNode>) => void): Disposable;

    /**
     * Ensure that all the records necessary to fulfill the given selector are
     * retained in-memory. The records will not be eligible for garbage collection
     * until the returned reference is disposed.
     *
     * Note: This is a no-op in the classic core.
     */
    retain(selector: CSelector<TNode>): Disposable;

    /**
     * Send a query to the server with request/response semantics: the query will
     * either complete successfully (calling `onNext` and `onCompleted`) or fail
     * (calling `onError`).
     *
     * Note: Most applications should use `streamQuery` in order to
     * optionally receive updated information over time, should that feature be
     * supported by the network/server. A good rule of thumb is to use this method
     * if you would otherwise immediately dispose the `streamQuery()`
     * after receving the first `onNext` result.
     */
    sendQuery(config: {
        cacheConfig?: CacheConfig;
        onCompleted?(): void;
        onError?(error: Error): void;
        onNext?(payload: TPayload): void;
        operation: COperationSelector<TNode, TOperation>;
    }): Disposable;

    /**
     * Send a query to the server with request/subscription semantics: one or more
     * responses may be returned (via `onNext`) over time followed by either
     * the request completing (`onCompleted`) or an error (`onError`).
     *
     * Networks/servers that support subscriptions may choose to hold the
     * subscription open indefinitely such that `onCompleted` is not called.
     */
    streamQuery(config: {
        cacheConfig?: CacheConfig;
        onCompleted?(): void;
        onError?(error: Error): void;
        onNext?(payload: TPayload): void;
        operation: COperationSelector<TNode, TOperation>;
    }): Disposable;

    unstable_internal: CUnstableEnvironmentCore<TEnvironment, TFragment, TGraphQLTaggedNode, TNode, TOperation>;
}

export interface CUnstableEnvironmentCore<TEnvironment, TFragment, TGraphQLTaggedNode, TNode, TOperation> {
    /**
     * Create an instance of a FragmentSpecResolver.
     *
     * TODO: The FragmentSpecResolver *can* be implemented via the other methods
     * defined here, so this could be moved out of core. It's convenient to have
     * separate implementations until the experimental core is in OSS.
     */
    createFragmentSpecResolver(
        context: CRelayContext<TEnvironment>,
        containerName: string,
        fragments: CFragmentMap<TFragment>,
        props: Props,
        callback: () => void
    ): FragmentSpecResolver;

    /**
     * Creates an instance of an OperationSelector given an operation definition
     * (see `getOperation`) and the variables to apply. The input variables are
     * filtered to exclude variables that do not matche defined arguments on the
     * operation, and default values are populated for null values.
     */
    createOperationSelector(operation: TOperation, variables: Variables): COperationSelector<TNode, TOperation>;

    /**
     * Given a graphql`...` tagged template, extract a fragment definition usable
     * by this version of Relay core. Throws if the value is not a fragment.
     */
    getFragment(node: TGraphQLTaggedNode): TFragment;

    /**
     * Given a graphql`...` tagged template, extract an operation definition
     * usable by this version of Relay core. Throws if the value is not an
     * operation.
     */
    getOperation(node: TGraphQLTaggedNode): TOperation;

    /**
     * Determine if two selectors are equal (represent the same selection). Note
     * that this function returns `false` when the two queries/fragments are
     * different objects, even if they select the same fields.
     */
    areEqualSelectors(a: CSelector<TNode>, b: CSelector<TNode>): boolean;

    /**
     * Given the result `item` from a parent that fetched `fragment`, creates a
     * selector that can be used to read the results of that fragment for that item.
     *
     * Example:
     *
     * Given two fragments as follows:
     *
     * ```
     * fragment Parent on User {
     *   id
     *   ...Child
     * }
     * fragment Child on User {
     *   name
     * }
     * ```
     *
     * And given some object `parent` that is the results of `Parent` for id "4",
     * the results of `Child` can be accessed by first getting a selector and then
     * using that selector to `lookup()` the results against the environment:
     *
     * ```
     * const childSelector = getSelector(queryVariables, Child, parent);
     * const childData = environment.lookup(childSelector).data;
     * ```
     */
    getSelector(operationVariables: Variables, fragment: TFragment, prop: any): CSelector<TNode> | null;

    /**
     * Given the result `items` from a parent that fetched `fragment`, creates a
     * selector that can be used to read the results of that fragment on those
     * items. This is similar to `getSelector` but for "plural" fragments that
     * expect an array of results and therefore return an array of selectors.
     */
    getSelectorList(operationVariables: Variables, fragment: TFragment, props: any[]): Array<CSelector<TNode>> | null;

    /**
     * Given a mapping of keys -> results and a mapping of keys -> fragments,
     * extracts the selectors for those fragments from the results.
     *
     * The canonical use-case for this function are Relay Containers, which
     * use this function to convert (props, fragments) into selectors so that they
     * can read the results to pass to the inner component.
     */
    getSelectorsFromObject(
        operationVariables: Variables,
        fragments: CFragmentMap<TFragment>,
        props: Props
    ): { [key: string]: CSelector<TNode> | Array<CSelector<TNode>> | null | undefined };

    /**
     * Given a mapping of keys -> results and a mapping of keys -> fragments,
     * extracts a mapping of keys -> id(s) of the results.
     *
     * Similar to `getSelectorsFromObject()`, this function can be useful in
     * determining the "identity" of the props passed to a component.
     */
    getDataIDsFromObject(
        fragments: CFragmentMap<TFragment>,
        props: Props
    ): { [key: string]: DataID | DataID[] | null | undefined };

    /**
     * Given a mapping of keys -> results and a mapping of keys -> fragments,
     * extracts the merged variables that would be in scope for those
     * fragments/results.
     *
     * This can be useful in determing what varaibles were used to fetch the data
     * for a Relay container, for example.
     */
    getVariablesFromObject(operationVariables: Variables, fragments: CFragmentMap<TFragment>, props: Props): Variables;
}

/**
 * The type of the `relay` property set on React context by the React/Relay
 * integration layer (e.g. QueryRenderer, FragmentContainer, etc).
 */
export interface CRelayContext<TEnvironment> {
    environment: TEnvironment;
    variables: Variables;
}

// ~~~~~~~~~~~~~~~~~~~~~
// RelayTypes
/**
 * Version: Relay 1.3.0
 * File:
 * https://github.com/facebook/relay/blob/fa9f48ea209ee2402d433b59a84d1cbc046574e2/packages/react-relay/classic/tools/RelayTypes.js
 */
// ~~~~~~~~~~~~~~~~~~~~~
export interface RerunParam {
    param: string;
    import: string;
    max_runs: number;
}
export interface FIELDS_CHANGE {
    type: "FIELDS_CHANGE";
    fieldIDs: { [fieldName: string]: DataID | DataID[] };
}
export interface RANGE_ADD {
    type: "RANGE_ADD";
    parentName?: string;
    parentID?: string;
    connectionInfo?: Array<{
        key: string;
        filters?: Variables;
        rangeBehavior: string;
    }>;
    connectionName?: string;
    edgeName: string;
    rangeBehaviors?: RangeBehaviors;
}
export interface NODE_DELETE {
    type: "NODE_DELETE";
    parentName?: string;
    parentID?: string;
    connectionName?: string;
    deletedIDFieldName: string;
}
export interface RANGE_DELETE {
    type: "RANGE_DELETE";
    parentName?: string;
    parentID?: string;
    connectionKeys?: Array<{
        key: string;
        filters?: Variables;
    }>;
    connectionName?: string;
    deletedIDFieldName: string | string[];
    pathToConnection: string[];
}
export interface REQUIRED_CHILDREN {
    type: "REQUIRED_CHILDREN";
    children: RelayConcreteNode[];
}
export type RelayMutationConfig = FIELDS_CHANGE | RANGE_ADD | NODE_DELETE | RANGE_DELETE | REQUIRED_CHILDREN;

export interface RelayMutationTransactionCommitCallbacks {
    onFailure?: RelayMutationTransactionCommitFailureCallback;
    onSuccess?: RelayMutationTransactionCommitSuccessCallback;
}
export type RelayMutationTransactionCommitFailureCallback = (
    transaction: RelayMutationTransaction,
    preventAutoRollback: () => void
) => void;
export type RelayMutationTransactionCommitSuccessCallback = (
    response: {
        [key: string]: any;
    }
) => void;
export interface NetworkLayer {
    sendMutation(request: RelayMutationRequest): Promise<any> | null;
    sendQueries(requests: RelayQueryRequest[]): Promise<any> | null;
    supports(...options: string[]): boolean;
}
export interface QueryResult {
    error?: Error;
    ref_params?: { [name: string]: any };
    response: QueryPayload;
}
export interface ReadyState {
    aborted: boolean;
    done: boolean;
    error: Error | null;
    events: ReadyStateEvent[];
    ready: boolean;
    stale: boolean;
}
export type RelayContainerErrorEventType = "CACHE_RESTORE_FAILED" | "NETWORK_QUERY_ERROR";
export type RelayContainerLoadingEventType =
    | "ABORT"
    | "CACHE_RESTORED_REQUIRED"
    | "CACHE_RESTORE_START"
    | "NETWORK_QUERY_RECEIVED_ALL"
    | "NETWORK_QUERY_RECEIVED_REQUIRED"
    | "NETWORK_QUERY_START"
    | "STORE_FOUND_ALL"
    | "STORE_FOUND_REQUIRED";
export type ReadyStateChangeCallback = (readyState: ReadyState) => void;
export interface ReadyStateEvent {
    type: RelayContainerLoadingEventType | RelayContainerErrorEventType;
    error?: Error;
}
export interface Abortable {
    abort(): void;
}

// ~~~~~~~~~~~~~~~~~~~~~
// RelayInternalTypes
/**
 * Version: Relay 1.3.0
 * File:
 * https://github.com/facebook/relay/blob/master/packages/react-relay/classic/tools/RelayInternalTypes.js
 */
// ~~~~~~~~~~~~~~~~~~~~~
export interface QueryPayload {
    [key: string]: any;
}
export interface RelayQuerySet {
    [queryName: string]: any;
}
export type RangeBehaviorsFunction = (
    connectionArgs: {
        [argName: string]: any;
    }
) => "APPEND" | "IGNORE" | "PREPEND" | "REFETCH" | "REMOVE";
export interface RangeBehaviorsObject {
    [key: string]: "APPEND" | "IGNORE" | "PREPEND" | "REFETCH" | "REMOVE";
}
export type RangeBehaviors = RangeBehaviorsFunction | RangeBehaviorsObject;

// ~~~~~~~~~~~~~~~~~~~~~
// Maybe Fix
// ~~~~~~~~~~~~~~~~~~~~~
export type RelayDebugger = any;
export type OptimisticUpdate = any;
export type OperationSelector = COperationSelector<any, any>;
export type Selector = CSelector<any>;
export type PayloadData = any;
export type Snapshot = CSnapshot<any>;
export type RelayResponsePayload = any;
export type MutableRecordSource = RecordSource;

/**
 * A function that returns an Observable representing the response of executing
 * a GraphQL operation.
 */
export type ExecuteFunction = (
    operation: object,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables?: UploadableMap
) => Promise<any>;
export interface RelayNetwork {
    execute: ExecuteFunction;
}

// ~~~~~~~~~~~~~~~~~~~~~
// RelayDefaultHandlerProvider
// ~~~~~~~~~~~~~~~~~~~~~
export function HandlerProvider(name: string): HandlerInterface | null;

// ~~~~~~~~~~~~~~~~~~~~~
// RelayModernEnvironment
// ~~~~~~~~~~~~~~~~~~~~~
export interface EnvironmentConfig {
    configName?: string;
    handlerProvider?: typeof HandlerProvider;
    network: Network;
    store: Store;
}
export class Environment {
    constructor(config: EnvironmentConfig);
    getStore(): Store;
    getDebugger(): RelayDebugger;
    applyUpdate(optimisticUpdate: OptimisticUpdate): Disposable;
    revertUpdate(update: OptimisticUpdate): void;
    replaceUpdate(update: OptimisticUpdate, newUpdate: OptimisticUpdate): void;
    applyMutation(config: {
        operation: OperationSelector;
        optimisticUpdater?: SelectorStoreUpdater;
        optimisticResponse?: object;
    }): Disposable;
    check(readSelector: Selector): boolean;
    commitPayload(operationSelector: OperationSelector, payload: PayloadData): void;
    commitUpdate(updater: StoreUpdater): void;
    lookup(readSelector: Selector): Snapshot;
    subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable;
    retain(selector: Selector): Disposable;
    execute(config: {
        operation: OperationSelector;
        cacheConfig?: CacheConfig;
        updater?: SelectorStoreUpdater;
    }): RelayObservable<RelayResponsePayload>;
    executeMutation(config: {
        operation: OperationSelector;
        optimisticUpdater?: SelectorStoreUpdater;
        optimisticResponse?: object;
        updater?: SelectorStoreUpdater;
        uploadables?: UploadableMap;
    }): RelayObservable<RelayResponsePayload>;
}

// ~~~~~~~~~~~~~~~~~~~~~
// RelayInMemoryRecordSource
// ~~~~~~~~~~~~~~~~~~~~~
export interface RelayInMemoryRecordSource {
    [key: string]: any;
}
export interface RecordMap {
    [dataID: string]: RelayInMemoryRecordSource | null | undefined;
}

// ~~~~~~~~~~~~~~~~~~~~~
// Network
// ~~~~~~~~~~~~~~~~~~~~~
export class Network {
    /**
     * Creates an implementation of the `Network` interface defined in
     * `RelayNetworkTypes` given `fetch` and `subscribe` functions.
     */
    static create(fetchFn: typeof FetchFunction, subscribeFn?: SubscribeFunction): RelayNetwork;
}

// ~~~~~~~~~~~~~~~~~~~~~
// Network
// ~~~~~~~~~~~~~~~~~~~~~
export class RecordSource {
    constructor(records?: RecordMap);
    clear(): void;
    delete(dataID: DataID): void;
    get(dataID: DataID): RelayInMemoryRecordSource | null;
    getRecordIDs(): DataID[];
    getStatus(dataID: DataID): "EXISTENT" | "NONEXISTENT" | "UNKNOWN";
    has(dataID: DataID): boolean;
    load(dataID: DataID, callback: (error: Error | null, record: RelayInMemoryRecordSource | null) => void): void;
    remove(dataID: DataID): void;
    set(dataID: DataID, record: RelayInMemoryRecordSource): void;
    size(): number;
    toJSON(): RecordMap;
}

// ~~~~~~~~~~~~~~~~~~~~~
// ModernStore
// ~~~~~~~~~~~~~~~~~~~~~
export class Store {
    constructor(source: RecordSource);
    getSource(): MutableRecordSource;
    check(selector: Selector): boolean;
    retain(selector: Selector): Disposable;
    lookup(selector: Selector): Snapshot;
    notify(): void;
    publish(source: RecordSource): void;
    subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable;
}

// ~~~~~~~~~~~~~~~~~~~~~
// RelayRecordSourceInspector
// ~~~~~~~~~~~~~~~~~~~~~
/**
 * An internal class to provide a console-friendly string representation of a
 * RelayInMemoryRecordSource.
 */
export class RecordSummary {
    id: DataID;
    type: string | null | undefined;
    static createFromRecord(id: DataID, record: any): RecordSummary;
    constructor(id: DataID, type: string | null | undefined);
    toString(): string;
}
/**
 * Internal class for inspecting a single RelayInMemoryRecordSource.
 */
export class RecordInspector {
    constructor(sourceInspector: RelayRecordSourceInspector, record: RelayInMemoryRecordSource);
    /**
     * Get the cache id of the given record. For types that implement the `Node`
     * interface (or that have an `id`) this will be `id`, for other types it will be
     * a synthesized identifier based on the field path from the nearest ancestor
     * record that does have an `id`.
     */
    getDataID(): DataID;

    /**
     * Returns a list of the fields that have been fetched on the current record.
     */
    getFields(): string[];

    /**
     * Returns the type of the record.
     */
    getType(): string;

    /**
     * Returns a copy of the internal representation of the record.
     */
    inspect(): any;

    /**
     * Returns the value of a scalar field. May throw if the given field is
     * present but not actually scalar.
     */
    getValue(name: string, args?: Variables): any;

    /**
     * Returns an inspector for the given scalar "linked" field (a field whose
     * value is another RelayInMemoryRecordSource instead of a scalar). May throw if the field is
     * present but not a scalar linked record.
     */
    getLinkedRecord(name: string, args?: Variables): RecordInspector | null;

    /**
     * Returns an array of inspectors for the given plural "linked" field (a field
     * whose value is an array of Records instead of a scalar). May throw if the
     * field is  present but not a plural linked record.
     */
    getLinkedRecords(name: string, args?: Variables): RecordInspector[] | null;
}

export class RelayRecordSourceInspector {
    constructor(source: RecordSource);
    static getForEnvironment(environment: Environment): RelayRecordSourceInspector;
    /**
     * Returns an inspector for the record with the given id, or null/undefined if
     * that record is deleted/unfetched.
     */
    get(dataID: DataID): RecordInspector | null;
    /**
     * Returns a list of "<id>: <type>" for each record in the store that has an
     * `id`.
     */
    getNodes(): RecordSummary[];
    /**
     * Returns a list of "<id>: <type>" for all records in the store including
     * those that do not have an `id`.
     */
    getRecords(): RecordSummary[];

    /**
     * Returns an inspector for the synthesized "root" object, allowing access to
     * e.g. the `viewer` object or the results of other fields on the "Query"
     * type.
     */
    getRoot(): RecordInspector;
}

// note RecordSourceInspector is only available in dev environment
export class RecordSourceInspector extends RelayRecordSourceInspector {}

// ~~~~~~~~~~~~~~~~~~~~~
// RelayObservable
// ~~~~~~~~~~~~~~~~~~~~~
export interface Subscription {
    unsubscribe(): void;
    readonly closed: boolean;
}
export interface Observer<T> {
    start?(subscription: Subscription): any;
    next?(nextThing: T): any;
    error?(error: Error): any;
    complete?(): any;
    unsubscribe?(subscription: Subscription): any;
}
export type Source<T> = <T>() => any; // tslint:disable-line:no-unnecessary-generics
export interface Subscribable<T> {
    subscribe(observer: Observer<T>): Subscription;
}
export type ObservableFromValue<T> = RelayObservable<T> | Promise<T> | T;
export class RelayObservable<T> implements Subscribable<T> {
    _source: Source<T>;

    constructor(source: Source<T>);

    /**
     * When an unhandled error is detected, it is reported to the host environment
     * (the ESObservable spec refers to this method as "HostReportErrors()").
     *
     * The default implementation in development builds re-throws errors in a
     * separate frame, and from production builds does nothing (swallowing
     * uncaught errors).
     *
     * Called during application initialization, this method allows
     * application-specific handling of uncaught errors. Allowing, for example,
     * integration with error logging or developer tools.
     */
    static onUnhandledError(callback: (error: Error) => any): void;

    /**
     * Accepts various kinds of data sources, and always returns a RelayObservable
     * useful for accepting the result of a user-provided FetchFunction.
     */
    static from<V>(obj: ObservableFromValue<V>): RelayObservable<V>;

    /**
     * Creates a RelayObservable, given a function which expects a legacy
     * Relay Observer as the last argument and which returns a Disposable.
     *
     * To support migration to Observable, the function may ignore the
     * legacy Relay observer and directly return an Observable instead.
     */
    static fromLegacy<V>(
        callback: (legacyObserver: LegacyObserver<V>) => Disposable | RelayObservable<V>
    ): RelayObservable<V>;

    /**
     * Returns a new Observable which returns the same values as this one, but
     * modified so that the provided Observer is called to perform a side-effects
     * for all events emitted by the source.
     *
     * Any errors that are thrown in the side-effect Observer are unhandled, and
     * do not affect the source Observable or its Observer.
     *
     * This is useful for when debugging your Observables or performing other
     * side-effects such as logging or performance monitoring.
     */
    do(observer: Observer<T>): RelayObservable<T>;

    /**
     * Returns a new Observable which returns the same values as this one, but
     * modified so that the finally callback is performed after completion,
     * whether normal or due to error or unsubscription.
     *
     * This is useful for cleanup such as resource finalization.
     */
    finally(fn: () => any): RelayObservable<T>;

    /**
     * Returns a new Observable which is identical to this one, unless this
     * Observable completes before yielding any values, in which case the new
     * Observable will yield the values from the alternate Observable.
     *
     * If this Observable does yield values, the alternate is never subscribed to.
     *
     * This is useful for scenarios where values may come from multiple sources
     * which should be tried in order, i.e. from a cache before a network.
     */
    ifEmpty<U>(alternate: RelayObservable<U>): RelayObservable<T | U>;

    /**
     * Observable's primary API: returns an unsubscribable Subscription to the
     * source of this Observable.
     */
    subscribe(observer: Observer<T>): Subscription;

    /**
     * Supports subscription of a legacy Relay Observer, returning a Disposable.
     */
    subscribeLegacy(legacyObserver: LegacyObserver<T>): Disposable;

    /**
     * Returns a new Observerable where each value has been transformed by
     * the mapping function.
     */
    map<U>(fn: (thing: T) => U): RelayObservable<U>;

    /**
     * Returns a new Observable where each value is replaced with a new Observable
     * by the mapping function, the results of which returned as a single
     * concattenated Observable.
     */
    concatMap<U>(fn: (thing: T) => ObservableFromValue<U>): RelayObservable<U>;

    /**
     * Returns a new Observable which first mirrors this Observable, then when it
     * completes, waits for `pollInterval` milliseconds before re-subscribing to
     * this Observable again, looping in this manner until unsubscribed.
     *
     * The returned Observable never completes.
     */
    poll(pollInterval: number): RelayObservable<T>;

    /**
     * Returns a Promise which resolves when this Observable yields a first value
     * or when it completes with no value.
     */
    toPromise(): Promise<T | null | undefined>;
}

export type Observable<T> = RelayObservable<T>;

// ~~~~~~~~~~~~~~~~~~~~~
// commitLocalUpdate
// ~~~~~~~~~~~~~~~~~~~~~
// exposed through RelayModern, not Runtime directly
export type commitLocalUpdate = (environment: Environment, updater: StoreUpdater) => void;

// ~~~~~~~~~~~~~~~~~~~~~
// commitRelayModernMutation
// ~~~~~~~~~~~~~~~~~~~~~
// exposed through RelayModern, not Runtime directly
export interface MutationConfig<T> {
    configs?: RelayMutationConfig[];
    mutation: GraphQLTaggedNode;
    variables: Variables;
    uploadables?: UploadableMap;
    onCompleted?(response: T, errors: PayloadError[] | null | undefined): void;
    onError?(error?: Error): void;
    optimisticUpdater?: SelectorStoreUpdater;
    optimisticResponse?: object;
    updater?: SelectorStoreUpdater;
}
export function commitRelayModernMutation(environment: Environment, config: MutationConfig<any>): Disposable;

// ~~~~~~~~~~~~~~~~~~~~~
// applyRelayModernOptimisticMutation
// ~~~~~~~~~~~~~~~~~~~~~
// exposed through RelayModern, not Runtime directly
export interface OptimisticMutationConfig {
    configs?: RelayMutationConfig[];
    mutation: GraphQLTaggedNode;
    variables: Variables;
    optimisticUpdater?: SelectorStoreUpdater;
    optimisticResponse?: object;
}

// ~~~~~~~~~~~~~~~~~~~~~
// fetchRelayModernQuery
// ~~~~~~~~~~~~~~~~~~~~~
// exposed through RelayModern, not Runtime directly
/**
 * A helper function to fetch the results of a query. Note that results for
 * fragment spreads are masked: fields must be explicitly listed in the query in
 * order to be accessible in the result object.
 *
 * NOTE: This module is primarily intended for integrating with classic APIs.
 * Most product code should use a Renderer or Container.
 *
 * TODO(t16875667): The return type should be `Promise<?SelectorData>`, but
 * that's not really helpful as `SelectorData` is essentially just `mixed`. We
 * can probably leverage generated flow types here to return the real expected
 * shape.
 */
export function fetchRelayModernQuery(
    environment: any, // FIXME - $FlowFixMe in facebook source code
    taggedNode: GraphQLTaggedNode,
    variables: Variables,
    cacheConfig?: CacheConfig
): Promise<any>; // FIXME - $FlowFixMe in facebook source code

// ~~~~~~~~~~~~~~~~~~~~~
// requestRelaySubscription
// ~~~~~~~~~~~~~~~~~~~~~
// exposed through RelayModern, not Runtime directly
export interface GraphQLSubscriptionConfig {
    configs?: RelayMutationConfig[];
    subscription: GraphQLTaggedNode;
    variables: Variables;
    onCompleted?(): void;
    onError?(error: Error): void;
    onNext?(response: object | null | undefined): void;
    updater?(store: RecordSourceSelectorProxy): void;
}
export function requestRelaySubscription(environment: Environment, config: GraphQLSubscriptionConfig): Disposable;
