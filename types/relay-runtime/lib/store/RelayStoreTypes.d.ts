import { ReaderFragment } from '../util/ReaderNode';
import { Variables, Disposable, DataID, CacheConfig } from '../util/RelayRuntimeTypes';
import { ConcreteRequest } from '../util/RelayConcreteNode';
import { RequestIdentifier } from '../util/getRequestIdentifier';
import {
    NormalizationSelectableNode,
    NormalizationSplitOperation,
    NormalizationScalarField,
    NormalizationLinkedField,
} from '../util/NormalizationNode';
import {
    ConnectionReference,
    ConnectionResolver,
    ConnectionSnapshot,
    ConnectionInternalEvent,
    ConnectionID,
} from './RelayConnection';
import { PayloadData, Network, UploadableMap, PayloadError, GraphQLResponse } from '../network/RelayNetworkTypes';
import { RelayObservable } from '../network/RelayObservable';
import { RelayOperationTracker } from './RelayOperationTracker';
import { RecordState } from './RelayRecordState';

export type FragmentReference = unknown;
export type OperationTracker = RelayOperationTracker;

/*
 * An individual cached graph object.
 */
export interface Record {
    [key: string]: unknown;
}

/**
 * A collection of records keyed by id.
 */
export interface RecordMap {
    // theoretically, this should be `[dataID: DataID]`, but `DataID` is a string.
    [dataID: string]: Record | null | undefined;
}

export interface FragmentMap {
    [key: string]: ReaderFragment;
}

/**
 * The results of a selector given a store/RecordSource.
 */
export interface SelectorData {
    [key: string]: unknown;
}

export interface SingularReaderSelector {
    readonly kind: string;
    readonly dataID: DataID;
    readonly node: ReaderFragment;
    readonly owner: RequestDescriptor;
    readonly variables: Variables;
}

export type ReaderSelector = SingularReaderSelector | PluralReaderSelector;

export interface PluralReaderSelector {
    readonly kind: string;
    readonly selectors: ReadonlyArray<SingularReaderSelector>;
}

export interface RequestDescriptor {
    readonly identifier: RequestIdentifier;
    readonly node: ConcreteRequest;
    readonly variables: Variables;
}

/**
 * A selector defines the starting point for a traversal into the graph for the
 * purposes of targeting a subgraph.
 */
export interface NormalizationSelector {
    readonly dataID: DataID;
    readonly node: NormalizationSelectableNode;
    readonly variables: Variables;
}

/**
 * A representation of a selector and its results at a particular point in time.
 */
export interface TypedSnapshot<TData> {
    readonly data: TData;
    readonly isMissingData: boolean;
    readonly seenRecords: RecordMap;
    readonly selector: SingularReaderSelector;
}
export type Snapshot = TypedSnapshot<SelectorData>;

/**
 * An operation selector describes a specific instance of a GraphQL operation
 * with variables applied.
 *
 * - `root`: a selector intended for processing server results or retaining
 *   response data in the store.
 * - `fragment`: a selector intended for use in reading or subscribing to
 *   the results of the the operation.
 */
export interface OperationDescriptor {
    readonly fragment: SingularReaderSelector;
    readonly request: RequestDescriptor;
    readonly root: NormalizationSelector;
}

/**
 * Arbitrary data e.g. received by a container as props.
 */
export interface Props {
    [key: string]: unknown;
}

/**
 * The type of the `relay` property set on React context by the React/Relay
 * integration layer (e.g. QueryRenderer, FragmentContainer, etc).
 */
export interface RelayContext {
    environment: Environment;
}

/**
 * The results of reading the results of a FragmentMap given some input
 * `Props`.
 */
export interface FragmentSpecResults {
    [key: string]: unknown;
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
    setVariables(variables: Variables, node: ConcreteRequest): void;

    /**
     * Subscribe to resolver updates.
     * Overrides existing callback (if one has been specified).
     */
    setCallback(callback: () => void): void;
}

/**
 * A read-only interface for accessing cached graph data.
 */
export interface RecordSource {
    get(dataID: DataID): Record | null | undefined;
    getRecordIDs(): DataID[];
    getStatus(dataID: DataID): RecordState;
    has(dataID: DataID): boolean;
    size(): number;
    toJSON(): { [key: string]: Record };
}

/**
 * A read/write interface for accessing and updating graph data.
 */
export interface MutableRecordSource extends RecordSource {
    clear(): void;
    delete(dataID: DataID): void;
    remove(dataID: DataID): void;
    set(dataID: DataID, record: Record): void;
}

export interface CheckOptions {
    target: MutableRecordSource;
    handlers: ReadonlyArray<MissingFieldHandler>;
}

export type OperationAvailability = 'available' | 'stale' | 'missing';

/**
 * An interface for keeping multiple views of data consistent across an
 * application.
 */
export interface Store {
    /**
     * Get a read-only view of the store's internal RecordSource.
     */
    getSource(): RecordSource;

    /**
     * Determine if the operation can be resolved with data in the store (i.e. no
     * fields are missing).
     */
    check(operation: OperationDescriptor, options?: CheckOptions): OperationAvailability;

    /**
     * Read the results of a selector from in-memory records in the store.
     * Optionally takes an owner, corresponding to the operation that
     * owns this selector (fragment).
     */
    lookup(selector: SingularReaderSelector): Snapshot;

    /**
     * Notify subscribers (see `subscribe`) of any data that was published
     * (`publish()`) since the last time `notify` was called.
     *
     * Also this method should return an array of the affected fragment owners
     */
    notify(): ReadonlyArray<RequestDescriptor>;

    /**
     * Publish new information (e.g. from the network) to the store, updating its
     * internal record source. Subscribers are not immediately notified - this
     * occurs when `notify()` is called.
     */
    publish(source: RecordSource): void;

    /**
     * Ensure that all the records necessary to fulfill the given selector are
     * retained in-memory. The records will not be eligible for garbage collection
     * until the returned reference is disposed.
     */
    retain(operation: OperationDescriptor): Disposable;

    /**
     * Subscribe to changes to the results of a selector. The callback is called
     * when `notify()` is called *and* records have been published that affect the
     * selector results relative to the last `notify()`.
     */
    subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable;

    /**
     * The method should disable garbage collection until
     * the returned reference is disposed.
     */
    holdGC(): Disposable;

    lookupConnection_UNSTABLE<TEdge, TState>(
        connectionReference: ConnectionReference<TEdge>,
        resolver: ConnectionResolver<TEdge, TState>,
    ): ConnectionSnapshot<TEdge, TState>;

    subscribeConnection_UNSTABLE<TEdge, TState>(
        snapshot: ConnectionSnapshot<TEdge, TState>,
        resolver: ConnectionResolver<TEdge, TState>,
        callback: (state: TState) => void,
    ): Disposable;

    /**
     * Publish connection events, updating the store's list of events. As with
     * publish(), subscribers are only notified after notify() is called.
     */
    publishConnectionEvents_UNSTABLE(events: ConnectionInternalEvent[], final: boolean): void;

    /**
     * Get a read-only view of the store's internal connection events for a given
     * connection.
     */
    getConnectionEvents_UNSTABLE(connectionID: ConnectionID): ReadonlyArray<ConnectionInternalEvent>;

    /**
     * Record a backup/snapshot of the current state of the store, including
     * records and derived data such as fragment and connection subscriptions.
     * This state can be restored with restore().
     */
    snapshot(): void;

    /**
     * Reset the state of the store to the point that snapshot() was last called.
     */
    restore(): void;
}

/**
 * A type that accepts a callback and schedules it to run at some future time.
 * By convention, implementations should not execute the callback immediately.
 */
export type Scheduler = (callback: () => void) => void;

/**
 * An interface for imperatively getting/setting properties of a `Record`. This interface
 * is designed to allow the appearance of direct Record manipulation while
 * allowing different implementations that may e.g. create a changeset of
 * the modifications.
 */
export type Unarray<T> = T extends Array<infer U> | ReadonlyArray<infer U> ? U : T;
export type Primitive = string | number | boolean | null | undefined;

export interface RecordProxy<T = {}> {
    copyFieldsFrom(source: RecordProxy): void;
    getDataID(): DataID;
    // If a parent type is provided, provide the child type
    getLinkedRecord<K extends keyof T>(name: K, args?: Variables | null): RecordProxy<NonNullable<T[K]>>;
    // If a hint is provided, the return value is guaranteed to be the hint type
    getLinkedRecord<H = never>(
        name: string,
        args?: Variables | null,
    ): [H] extends [never] ? RecordProxy | null : RecordProxy<H>;
    getLinkedRecords<K extends keyof T>(
        name: K,
        args?: Variables | null,
    ): Array<RecordProxy<Unarray<NonNullable<T[K]>>>>;
    getLinkedRecords<H = never>(
        name: string,
        args?: Variables | null,
    ): [H] extends [never]
        ? RecordProxy[] | null
        : NonNullable<H> extends Array<infer U>
        ? Array<RecordProxy<U>> | (H extends null ? null : never)
        : never;
    getOrCreateLinkedRecord(name: string, typeName: string, args?: Variables | null): RecordProxy<T>;
    getType(): string;
    getValue<K extends keyof T>(name: K, args?: Variables | null): T[K];
    getValue(name: string, args?: Variables | null): Primitive | Primitive[];
    setLinkedRecord<K extends keyof T>(
        record: RecordProxy<T[K]> | null,
        name: K,
        args?: Variables | null,
    ): RecordProxy<T>;
    setLinkedRecord(record: RecordProxy | null, name: string, args?: Variables | null): RecordProxy;
    setLinkedRecords<K extends keyof T>(
        records: Array<RecordProxy<Unarray<T[K]>> | null> | null | undefined,
        name: K,
        args?: Variables | null,
    ): RecordProxy<T>;
    setLinkedRecords(
        records: Array<RecordProxy | null> | null | undefined,
        name: string,
        args?: Variables | null,
    ): RecordProxy<T>;
    setValue<K extends keyof T>(value: T[K], name: K, args?: Variables | null): RecordProxy<T>;
    setValue(value: Primitive | Primitive[], name: string, args?: Variables | null): RecordProxy;
}

export interface ReadOnlyRecordProxy {
    getDataID(): DataID;
    getLinkedRecord(name: string, args?: Variables): RecordProxy | null | undefined;
    getLinkedRecords(name: string, args?: Variables): Array<RecordProxy | null | undefined> | null | undefined;
    getType(): string;
    getValue(name: string, args?: Variables | null): unknown;
}

/**
 * An interface for imperatively getting/setting properties of a `RecordSource`. This interface
 * is designed to allow the appearance of direct RecordSource manipulation while
 * allowing different implementations that may e.g. create a changeset of
 * the modifications.
 */

export interface RecordSourceProxy {
    create(dataID: DataID, typeName: string): RecordProxy;
    delete(dataID: DataID): void;
    // tslint:disable-next-line
    get<T = {}>(dataID: DataID): RecordProxy<T> | null | undefined;
    getRoot(): RecordProxy;
}

export interface ReadOnlyRecordSourceProxy {
    get(dataID: DataID): ReadOnlyRecordProxy | null | undefined;
    getRoot(): ReadOnlyRecordProxy;
}

/**
 * Extends the RecordSourceProxy interface with methods for accessing the root
 * fields of a Selector.
 */

export interface RecordSourceSelectorProxy<T = {}> extends RecordSourceProxy {
    getRootField<K extends keyof T>(fieldName: K): RecordProxy<NonNullable<T[K]>>;
    getRootField(fieldName: string): RecordProxy | null;
    getPluralRootField(fieldName: string): Array<RecordProxy<T> | null> | null;
    insertConnectionEdge_UNSTABLE(connectionID: ConnectionID, args: Variables, edge: RecordProxy): void;
}

interface OperationDescriptor {
    readonly fragment: SingularReaderSelector;
    readonly request: RequestDescriptor;
    readonly root: NormalizationSelector;
}

interface LogEventQueryResourceFetch {
    readonly name: 'queryresource.fetch';
    readonly operation: OperationDescriptor;
    // FetchPolicy from relay-experimental
    readonly fetchPolicy: string;
    // RenderPolicy from relay-experimental
    readonly renderPolicy: string;
    readonly queryAvailability: OperationAvailability;
    readonly shouldFetch: boolean;
}

interface LogEventExecuteInfo {
    readonly name: 'execute.info';
    readonly transactionID: number;
    readonly info: unknown;
}

interface LogEventExecuteStart {
    readonly name: 'execute.start';
    readonly transactionID: number;
    readonly params: {
        // RequestParameters type
        readonly name: string;
        readonly operationKind: string;
        readonly text: string;
    };
    readonly variables: object;
}

interface LogEventExecuteNext {
    readonly name: 'execute.next';
    readonly transactionID: number;
    readonly response: unknown;
}

interface LogEventExecuteError {
    readonly name: 'execute.error';
    readonly transactionID: number;
    readonly error: Error;
}

interface LogEventExecuteComplete {
    readonly name: 'execute.complete';
    readonly transactionID: number;
}

interface LogEventExecuteUnsubscribe {
    readonly name: 'execute.unsubscribe';
    readonly transactionID: number;
}

type LogEvent =
    | LogEventQueryResourceFetch
    | LogEventExecuteInfo
    | LogEventExecuteStart
    | LogEventExecuteNext
    | LogEventExecuteError
    | LogEventExecuteComplete
    | LogEventExecuteUnsubscribe;

export type LogFunction = (logEvent: LogEvent) => void;

/**
 * The public API of Relay core. Represents an encapsulated environment with its
 * own in-memory cache.
 */
export interface Environment {
    /**
     * Determine if the operation can be resolved with data in the store (i.e. no
     * fields are missing).
     *
     * Note that this operation effectively "executes" the selector against the
     * cache and therefore takes time proportional to the size/complexity of the
     * selector.
     */
    check(operation: OperationDescriptor, options?: CheckOptions): OperationAvailability;

    /**
     * Subscribe to changes to the results of a selector. The callback is called
     * when data has been committed to the store that would cause the results of
     * the snapshot's selector to change.
     */
    subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable;

    /**
     * Ensure that all the records necessary to fulfill the given operation are
     * retained in-memory. The records will not be eligible for garbage collection
     * until the returned reference is disposed.
     */
    retain(operation: OperationDescriptor): Disposable;

    /**
     * Apply an optimistic update to the environment. The mutation can be reverted
     * by calling `dispose()` on the returned value.
     */
    applyUpdate(optimisticUpdate: OptimisticUpdateFunction): Disposable;

    /**
     * Apply an optimistic mutation response and/or updater. The mutation can be
     * reverted by calling `dispose()` on the returned value.
     */
    applyMutation(optimisticConfig: OptimisticResponseConfig): Disposable;

    /**
     * Commit an updater to the environment. This mutation cannot be reverted and
     * should therefore not be used for optimistic updates. This is mainly
     * intended for updating fields from client schema extensions.
     */
    commitUpdate(updater: StoreUpdater): void;

    /**
     * Commit a payload to the environment using the given operation selector.
     */
    commitPayload(operationDescriptor: OperationDescriptor, payload: PayloadData): void;

    /**
     * Get the environment's internal Network.
     */
    getNetwork(): Network;

    /**
     * Get the environment's internal Store.
     */
    getStore(): Store;

    /**
     * Returns the environment specific OperationTracker.
     */
    getOperationTracker(): RelayOperationTracker;

    /**
     * Read the results of a selector from in-memory records in the store.
     * Optionally takes an owner, corresponding to the operation that
     * owns this selector (fragment).
     */
    lookup(selector: SingularReaderSelector): Snapshot;

    /**
     * Send a query to the server with Observer semantics: one or more
     * responses may be returned (via `next`) over time followed by either
     * the request completing (`completed`) or an error (`error`).
     *
     * Networks/servers that support subscriptions may choose to hold the
     * subscription open indefinitely such that `complete` is not called.
     *
     * Note: Observables are lazy, so calling this method will do nothing until
     * the result is subscribed to: environment.execute({...}).subscribe({...}).
     */
    execute(config: {
        operation: OperationDescriptor;
        cacheConfig?: CacheConfig | null;
        updater?: SelectorStoreUpdater | null;
    }): RelayObservable<GraphQLResponse>;

    /**
     * Returns an Observable of GraphQLResponse resulting from executing the
     * provided Mutation operation, the result of which is then normalized and
     * committed to the publish queue along with an optional optimistic response
     * or updater.
     *
     * Note: Observables are lazy, so calling this method will do nothing until
     * the result is subscribed to:
     * environment.executeMutation({...}).subscribe({...}).
     */
    executeMutation({
        operation,
        optimisticUpdater,
        optimisticResponse,
        updater,
        uploadables,
    }: {
        operation: OperationDescriptor;
        optimisticUpdater?: SelectorStoreUpdater | null;
        optimisticResponse?: { [key: string]: any } | null;
        updater?: SelectorStoreUpdater | null;
        uploadables?: UploadableMap | null;
    }): RelayObservable<GraphQLResponse>;

    /**
     * Returns an Observable of GraphQLResponse resulting from executing the
     * provided Query or Subscription operation responses, the result of which is
     * then normalized and comitted to the publish queue.
     *
     * Note: Observables are lazy, so calling this method will do nothing until
     * the result is subscribed to:
     * environment.executeWithSource({...}).subscribe({...}).
     */
    executeWithSource({
        operation,
        source,
    }: {
        operation: OperationDescriptor;
        source: RelayObservable<GraphQLResponse>;
    }): RelayObservable<GraphQLResponse>;
}

/**
 * The results of reading data for a fragment. This is similar to a `Selector`,
 * but references the (fragment) node by name rather than by value.
 */
export interface FragmentPointer {
    __id: DataID;
    __fragments: { [fragmentName: string]: Variables };
    __fragmentOwner: RequestDescriptor;
}

/**
 * The partial shape of an object with a '...Fragment @module(name: "...")'
 * selection
 */
export interface ModuleImportPointer {
    readonly __fragmentPropName: string | null | undefined;
    readonly __module_component: unknown;
    readonly $fragmentRefs: unknown;
}

/**
 * A callback for resolving a Selector from a source.
 */
export type AsyncLoadCallback = (loadingState: LoadingState) => void;
export interface LoadingState {
    status: 'aborted' | 'complete' | 'error' | 'missing';
    error?: Error;
}

/**
 * A map of records affected by an update operation.
 */
export interface UpdatedRecords {
    [dataID: string]: boolean;
}

/**
 * A function that updates a store (via a proxy) given the results of a "handle"
 * field payload.
 */
export class Handler {
    update: (store: RecordSourceProxy, fieldPayload: HandleFieldPayload) => void;
}

/**
 * A payload that is used to initialize or update a "handle" field with
 * information from the server.
 */
export interface HandleFieldPayload {
    // The arguments that were fetched.
    readonly args: Variables;
    // The __id of the record containing the source/handle field.
    readonly dataID: DataID;
    // The (storage) key at which the original server data was written.
    readonly fieldKey: string;
    // The name of the handle.
    readonly handle: string;
    // The (storage) key at which the handle's data should be written by the
    // handler.
    readonly handleKey: string;
}

/**
 * A payload that represents data necessary to process the results of an object
 * with a `@module` fragment spread:
 * - data: The GraphQL response value for the @match field.
 * - dataID: The ID of the store object linked to by the @match field.
 * - operationReference: A reference to a generated module containing the
 *   SplitOperation with which to normalize the field's `data`.
 * - variables: Query variables.
 * - typeName: the type that matched.
 *
 * The dataID, variables, and fragmentName can be used to create a Selector
 * which can in turn be used to normalize and publish the data. The dataID and
 * typeName can also be used to construct a root record for normalization.
 */
export interface ModuleImportPayload {
    readonly data: PayloadData;
    readonly dataID: DataID;
    readonly operationReference: any;
    readonly path: ReadonlyArray<string>;
    readonly typeName: string;
    readonly variables: Variables;
}

/**
 * Data emitted after processing a Defer or Stream node during normalization
 * that describes how to process the corresponding response chunk when it
 * arrives.
 */
export interface DeferPlaceholder {
    readonly kind: 'defer';
    readonly data: PayloadData;
    readonly label: string;
    readonly path: ReadonlyArray<string>;
    readonly selector: NormalizationSelector;
    readonly typeName: string;
}
export interface StreamPlaceholder {
    readonly kind: 'stream';
    readonly label: string;
    readonly path: ReadonlyArray<string>;
    readonly parentID: DataID;
    readonly node: NormalizationSelectableNode;
    readonly variables: Variables;
}
export type IncrementalDataPlaceholder = DeferPlaceholder | StreamPlaceholder;

/**
 * A user-supplied object to load a generated operation (SplitOperation) AST
 * by a module reference. The exact format of a module reference is left to
 * the application, but it must be a plain JavaScript value (string, number,
 * or object/array of same).
 */
export interface OperationLoader {
    /**
     * Synchronously load an operation, returning either the node or null if it
     * cannot be resolved synchronously.
     */
    get(reference: unknown): NormalizationSplitOperation | null | undefined;

    /**
     * Asynchronously load an operation.
     */
    load(reference: unknown): Promise<NormalizationSplitOperation | null | undefined>;
}

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
export type SelectorStoreUpdater<T = object> = (
    store: RecordSourceSelectorProxy<T>,
    // Actually SelectorData, but mixed is inconvenient to access deeply in
    // product code.
    data: T,
) => void;

/**
 * A set of configs that can be used to apply an optimistic update into the
 * store.
 */
export type OptimisticUpdate = OptimisticUpdateFunction | OptimisticUpdateRelayPayload;

export interface OptimisticUpdateFunction {
    readonly storeUpdater: StoreUpdater;
}

export interface OptimisticUpdateRelayPayload {
    readonly operation: OperationDescriptor;
    readonly payload: RelayResponsePayload;
    readonly updater: SelectorStoreUpdater | null | undefined;
}

export interface OptimisticResponseConfig {
    readonly operation: OperationDescriptor;
    readonly response: PayloadData | null | undefined;
    readonly updater: SelectorStoreUpdater | null | undefined;
}

/**
 * A set of handlers that can be used to provide substitute data for missing
 * fields when reading a selector from a source.
 */
export type MissingFieldHandler =
    | {
          kind: 'scalar';
          handle: (
              field: NormalizationScalarField,
              record: Record | null | undefined,
              args: Variables,
              store: ReadOnlyRecordSourceProxy,
          ) => unknown;
      }
    | {
          kind: 'linked';
          handle: (
              field: NormalizationLinkedField,
              record: Record | null | undefined,
              args: Variables,
              store: ReadOnlyRecordSourceProxy,
          ) => DataID | null | undefined;
      }
    | {
          kind: 'pluralLinked';
          handle: (
              field: NormalizationLinkedField,
              record: Record | null | undefined,
              args: Variables,
              store: ReadOnlyRecordSourceProxy,
          ) => Array<DataID | null | undefined> | null | undefined;
      };

/**
 * The results of normalizing a query.
 */
export interface RelayResponsePayload {
    readonly connectionEvents: ConnectionInternalEvent[] | null | undefined;
    readonly errors: PayloadError[] | null | undefined;
    readonly fieldPayloads: HandleFieldPayload[] | null | undefined;
    readonly incrementalPlaceholders: IncrementalDataPlaceholder[] | null | undefined;
    readonly moduleImportPayloads: ModuleImportPayload[] | null | undefined;
    readonly source: MutableRecordSource;
}

/**
 * Public interface for Publish Queue
 */
export interface PublishQueue {
    /**
     * Schedule applying an optimistic updates on the next `run()`.
     */
    applyUpdate(updater: OptimisticUpdate): void;

    /**
     * Schedule reverting an optimistic updates on the next `run()`.
     */
    revertUpdate(updater: OptimisticUpdate): void;

    /**
     * Schedule a revert of all optimistic updates on the next `run()`.
     */
    revertAll(): void;

    /**
     * Schedule applying a payload to the store on the next `run()`.
     */
    commitPayload(
        operation: OperationDescriptor,
        payload: RelayResponsePayload,
        updater?: SelectorStoreUpdater | null,
    ): void;

    /**
     * Schedule an updater to mutate the store on the next `run()` typically to
     * update client schema fields.
     */
    commitUpdate(updater: StoreUpdater): void;

    /**
     * Schedule a publish to the store from the provided source on the next
     * `run()`. As an example, to update the store with substituted fields that
     * are missing in the store.
     */
    commitSource(source: RecordSource): void;

    /**
     * Execute all queued up operations from the other public methods.
     */
    run(): ReadonlyArray<RequestDescriptor>;
}
