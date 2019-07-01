// Type definitions for relay-runtime 5.0
// Project: https://github.com/facebook/relay, https://facebook.github.io/relay
// Definitions by: Matt Martin <https://github.com/voxmatt>
//                 Eloy Durán <https://github.com/alloy>
//                 Cameron Knight <https://github.com/ckknight>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

// ./handlers/connection/RelayConnectionHandler
export interface ConnectionMetadata {
    path: ReadonlyArray<string> | null | undefined;
    direction: string | null | undefined; // 'forward' | 'backward' | 'bidirectional' | null | undefined;
    cursor: string | null | undefined;
    count: string | null | undefined;
}

// ./handlers/connection/RelayConnectionInterface
export interface Record {
    [key: string]: unknown;
}

export interface EdgeRecord extends Record {
    cursor: unknown;
    node: Record;
}

export interface PageInfo {
    endCursor: string | null | undefined;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string | null | undefined;
}

// ./mutations/RelayDeclarativeMutationConfig
interface RangeAddConfig {
    type: 'RANGE_ADD';
    parentName?: string;
    parentID?: string;
    connectionInfo?: ReadonlyArray<{
        key: string;
        filters?: Variables;
        rangeBehavior: string;
    }>;
    connectionName?: string;
    edgeName: string;
    rangeBehaviors?: RangeBehaviors;
}

interface RangeDeleteConfig {
    type: 'RANGE_DELETE';
    parentName?: string;
    parentID?: string;
    connectionKeys?: ReadonlyArray<{
        key: string;
        filters?: Variables;
    }>;
    connectionName?: string;
    deletedIDFieldName: string | ReadonlyArray<string>;
    pathToConnection: ReadonlyArray<string>;
}

interface NodeDeleteConfig {
    type: 'NODE_DELETE';
    parentName?: string;
    parentID?: string;
    connectionName?: string;
    deletedIDFieldName: string;
}

// Unused in Relay Modern
interface LegacyFieldsChangeConfig {
    type: 'FIELDS_CHANGE';
    fieldIDs: { [fieldName: string]: DataID | ReadonlyArray<DataID> };
}

// Unused in Relay Modern
interface LegacyRequiredChildrenConfig {
    type: 'REQUIRED_CHILDREN';
    children: ReadonlyArray<unknown>;
}
export type DeclarativeMutationConfig =
    | RangeAddConfig
    | RangeDeleteConfig
    | NodeDeleteConfig
    | LegacyFieldsChangeConfig
    | LegacyRequiredChildrenConfig;
export type MutationType = 'RANGE_ADD' | 'RANGE_DELETE' | 'NODE_DELETE' | 'FIELDS_CHANGE' | 'REQUIRED_CHILDREN';
export type RangeOperation = 'append' | 'ignore' | 'prepend' | 'refetch' | 'remove';
export type RangeBehaviors =
    | ((connectionArgs: { [name: string]: unknown }) => RangeOperation)
    | {
          [key: string]: RangeOperation;
      };

// ./mutations/applyRelayModernOptimisticMutation
export interface OptimisticMutationConfig {
    configs?: ReadonlyArray<DeclarativeMutationConfig> | null;
    mutation: GraphQLTaggedNode;
    variables: Variables;
    optimisticUpdater?: SelectorStoreUpdater | null;
    optimisticResponse?: object;
}

// ./mutations/commitRelayModernMutation
export interface MutationConfig<TOperation extends OperationType> {
    configs?: ReadonlyArray<DeclarativeMutationConfig>;
    mutation: GraphQLTaggedNode;
    variables: TOperation['variables'];
    uploadables?: UploadableMap;
    onCompleted?:
        | ((response: TOperation['response'], errors: ReadonlyArray<PayloadError> | null | undefined) => void)
        | null;
    onError?: ((error: Error) => void) | null;
    optimisticUpdater?: SelectorStoreUpdater | null;
    optimisticResponse?: TOperation['response'] | null;
    updater?: SelectorStoreUpdater<TOperation['response']> | null;
}

// ./network/RelayNetworkLoggerTransaction
export interface RelayNetworkLog {
    label: string;
    values: ReadonlyArray<unknown>;
}

// ./network/RelayNetworkTypes
export type ExecuteFunction = (
    request: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables?: UploadableMap | null
) => RelayObservable<GraphQLResponse>;

export type FetchFunction = (
    request: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig,
    uploadables?: UploadableMap | null
) => ObservableFromValue<GraphQLResponse>;

export type GraphQLResponse =
    | {
          data: PayloadData;
          errors?: ReadonlyArray<PayloadError>;
          extensions?: PayloadExtensions;
      }
    | {
          data?: PayloadData | null;
          errors: ReadonlyArray<PayloadError>;
          extensions?: PayloadExtensions;
      };

export interface LegacyObserver<T> {
    onCompleted?: () => void;
    onError?: (error: Error) => void;
    onNext?: (data: T) => void;
}

interface Network {
    execute: ExecuteFunction;
}
export { Network as INetwork };

export interface PayloadData {
    [key: string]: unknown;
}

export interface PayloadError {
    message: string;
    locations?: ReadonlyArray<{
        line: number;
        column: number;
    }>;
    severity?: 'CRITICAL' | 'ERROR' | 'WARNING'; // Not officially part of the spec, but used at Facebook
}

export type SubscribeFunction = (
    request: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig,
    observer?: LegacyObserver<GraphQLResponse>
) => RelayObservable<GraphQLResponse> | Disposable;

export type Uploadable = File | Blob;
export interface UploadableMap {
    [key: string]: Uploadable;
}

interface PayloadExtensions {
    [key: string]: unknown;
}

// ./network/RelayObservable
export type ObservableFromValue<T> = Subscribable<T> | Promise<T> | T;

export interface Observer<T> {
    readonly start?: (subscription: Subscription) => void;
    readonly next?: (value: T) => void;
    readonly error?: (error: Error) => void;
    readonly complete?: () => void;
    readonly unsubscribe?: (subscription: Subscription) => void;
}

export interface Subscribable<T> {
    subscribe(observer: Observer<T> | Sink<T>): Subscription;
}

interface Sink<T> {
    next(value: T): void;
    error(error: Error, isUncaughtThrownError?: boolean): void;
    complete(): void;
    readonly closed: boolean;
}
type Source<T> = (sink: Sink<T>) => void | Subscription | (() => unknown);

export interface Subscription {
    unsubscribe(): void;
    readonly closed: boolean;
}

// ./network/createRelayNetworkLogger
export type GraphiQLPrinter = (request: RequestParameters, variables: Variables) => string;

// ./query/RelayModernGraphQLTag
export type GraphQLTaggedNode =
    | ReaderFragment
    | ConcreteRequest
    | (() => ReaderFragment | ConcreteRequest)
    | {
          modern: () => ReaderFragment | ConcreteRequest;
      };

// ./store/RelayRecordState
export type RecordState = 'EXISTENT' | 'NONEXISTENT' | 'UNKNOWN';

// ./store/RelayStoreTypes
interface Environment
    extends CEnvironment<
        Environment,
        ReaderFragment,
        GraphQLTaggedNode,
        ReaderSelectableNode,
        NormalizationSelectableNode,
        ConcreteRequest,
        GraphQLResponse,
        OwnedReaderSelector
    > {
    applyUpdate(optimisticUpdate: OptimisticUpdate): Disposable;

    commitUpdate(updater: StoreUpdater): void;

    commitPayload(operationDescriptor: OperationDescriptor, payload: PayloadData): void;

    getStore(): Store;

    lookup(selector: ReaderSelector, owner?: OperationDescriptor): CSnapshot<ReaderSelectableNode, OperationDescriptor>;

    executeMutation(data: {
        operation: OperationDescriptor;
        optimisticUpdater?: SelectorStoreUpdater | null;
        optimisticResponse?: object | null;
        updater?: SelectorStoreUpdater | null;
        uploadables?: UploadableMap | null;
    }): RelayObservable<GraphQLResponse>;
}
export { Environment as IEnvironment };

export type FragmentMap = CFragmentMap<ReaderFragment>;

export type FragmentReference = never & { __tag: 'FragmentReference' };

export interface FragmentPointer {
    __id: DataID;
    __fragments: { [fragmentName: string]: Variables };
    __fragmentOwner: OperationDescriptor | null;
}

export interface HandleFieldPayload {
    readonly args: Variables;
    readonly dataID: DataID;
    readonly fieldKey: string;
    readonly handle: string;
    readonly handleKey: string;
}

export interface MatchPointer {
    __id: DataID;
    __fragments: { [fragmentName: string]: Variables };
    __fragmentPropName: string;
    __module: unknown;
}

export type MissingFieldHandler =
    | {
          kind: 'scalar';
          handle: (
              field: NormalizationScalarField,
              record: Record | null | undefined,
              args: Variables,
              store: ReadonlyRecordSourceProxy
          ) => unknown;
      }
    | {
          kind: 'linked';
          handle: (
              field: NormalizationLinkedField,
              record: Record | null | undefined,
              args: Variables,
              store: ReadonlyRecordSourceProxy
          ) => DataID | null | undefined;
      }
    | {
          kind: 'pluralLinked';
          handle: (
              field: NormalizationLinkedField,
              record: Record | null | undefined,
              args: Variables,
              store: ReadonlyRecordSourceProxy
          ) => ReadonlyArray<DataID | null | undefined> | null | undefined;
      };

export const RelayDefaultMissingFieldHandlers: ReadonlyArray<MissingFieldHandler>;

export interface OperationLoader {
    get(reference: unknown): NormalizationSplitOperation | null | undefined;

    load(reference: unknown): Promise<NormalizationSplitOperation | null | undefined>;
}

export type OperationDescriptor = COperationDescriptor<
    ReaderSelectableNode,
    NormalizationSelectableNode,
    ConcreteRequest
>;

export type OptimisticUpdate =
    | {
          storeUpdater: StoreUpdater;
      }
    | {
          selectorStoreUpdater: SelectorStoreUpdater | null | undefined;
          operation: OperationDescriptor;
          response: object | null | undefined;
      }
    | {
          source: RecordSource;
          fieldPayloads?: ReadonlyArray<HandleFieldPayload> | null;
      };

export interface OwnedReaderSelector {
    owner: OperationDescriptor | null;
    selector: ReaderSelector;
}

export interface RecordProxy {
    copyFieldsFrom(source: RecordProxy): void;
    getDataID(): DataID;
    getLinkedRecord(name: string, args?: Variables | null): RecordProxy | null | undefined;
    getLinkedRecords(
        name: string,
        args?: Variables | null
    ): ReadonlyArray<RecordProxy | null | undefined> | null | undefined;
    getOrCreateLinkedRecord(name: string, typeName: string, args?: Variables | null): RecordProxy;
    getType(): string;
    getValue(name: string, args?: Variables | null): unknown;
    setLinkedRecord(record: RecordProxy, name: string, args?: Variables | null): RecordProxy;
    setLinkedRecords(
        records: Array<RecordProxy | null | undefined>,
        name: string,
        args?: Variables | null
    ): RecordProxy;
    setValue(value: unknown, name: string, args?: Variables | null): RecordProxy;
}

export interface RecordSourceProxy {
    create(dataID: DataID, typeName: string): RecordProxy;
    delete(dataID: DataID): void;
    get(dataID: DataID): RecordProxy | null | undefined;
    getRoot(): RecordProxy;
}

export interface RecordSourceSelectorProxy {
    create(dataID: DataID, typeName: string): RecordProxy;
    delete(dataID: DataID): void;
    get(dataID: DataID): RecordProxy | null | undefined;
    getRoot(): RecordProxy;
    getRootField(fieldName: string): RecordProxy | null | undefined;
    getPluralRootField(fieldName: string): ReadonlyArray<RecordProxy | null | undefined> | null | undefined;
}

export type RelayContext = CRelayContext<Environment>;

export type ReaderSelector = CReaderSelector<ReaderSelectableNode>;

export type NormalizationSelector = CNormalizationSelector<NormalizationSelectableNode>;

export type SelectorStoreUpdater<TData = unknown> = (store: RecordSourceSelectorProxy, data: TData) => void;

export type Snapshot = CSnapshot<ReaderSelectableNode, OperationDescriptor>;

export type StoreUpdater = (store: RecordSourceProxy) => void;

interface ReadonlyRecordSourceProxy {
    get(dataID: DataID): ReadonlyRecordProxy | null | undefined;
    getRoot(): ReadonlyRecordProxy;
}

interface ReadonlyRecordProxy {
    getDataID(): DataID;
    getLinkedRecord(name: string, args?: Variables | null): RecordProxy | null | undefined;
    getLinkedRecords(
        name: string,
        args?: Variables | null
    ): ReadonlyArray<RecordProxy | null | undefined> | null | undefined;
    getType(): string;
    getValue(name: string, args?: Variables | null): unknown;
}

interface RecordSource {
    get(dataID: DataID): Record | null | undefined;
    getRecordIDs(): ReadonlyArray<DataID>;
    getStatus(dataID: DataID): RecordState;
    has(dataID: DataID): boolean;
    load(dataID: DataID, callback: (error: Error | null | undefined, record: Record | null | undefined) => void): void;
    size(): number;
}
export { RecordSource as IRecordSource };

interface Store {
    getSource(): RecordSource;
    check(selector: NormalizationSelector): boolean;
    lookup(selector: ReaderSelector, owner?: OperationDescriptor): Snapshot;
    notify(): void;
    publish(source: RecordSource): void;
    retain(selector: NormalizationSelector): Disposable;
    subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable;
    holdGC(): Disposable;
}

export interface MutableRecordSource extends RecordSource {
    clear(): void;
    delete(dataID: DataID): void;
    remove(dataID: DataID): void;
    set(dataID: DataID, record: Record): void;
}

type Scheduler = (callback: () => void) => void;

// ./subscription/requestRelaySubscription
export interface GraphQLSubscriptionConfig<TSubscriptionPayload> {
    configs?: ReadonlyArray<DeclarativeMutationConfig>;
    subscription: GraphQLTaggedNode;
    variables: Variables;
    onCompleted?: () => void;
    onError?: (error: Error) => void;
    onNext?: (response: TSubscriptionPayload | null | undefined) => void;
    updater?: SelectorStoreUpdater;
}

// ./util/NormalizationNode
export type NormalizationArgument = NormalizationLiteral | NormalizationVariable;

export type NormalizationArgumentDefinition = NormalizationLocalArgument | NormalizationRootArgument;

export interface NormalizationDefer {
    readonly if: string | null;
    readonly kind: 'Defer';
    readonly label: string;
    readonly metadata: { readonly [key: string]: unknown } | null | undefined;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export type NormalizationField = NormalizationScalarField | NormalizationLinkedField | NormalizationMatchField;

export interface NormalizationLinkedField {
    readonly kind: string; // 'LinkedField';
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly storageKey: string | null | undefined;
    readonly args: ReadonlyArray<NormalizationArgument>;
    readonly concreteType: string | null | undefined;
    readonly plural: boolean;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export interface NormalizationMatchField {
    readonly kind: string; // 'MatchField';
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly storageKey: string | null | undefined;
    readonly args: ReadonlyArray<NormalizationArgument>;
    readonly matchesByType: {
        readonly [key: string]: {
            readonly fragmentPropName: string;
            readonly fragmentName: string;
        };
    };
}

export interface NormalizationOperation {
    readonly kind: string; // 'Operation';
    readonly name: string;
    readonly argumentDefinitions: ReadonlyArray<NormalizationLocalArgument>;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export interface NormalizationScalarField {
    readonly kind: string; // 'ScalarField';
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly args: ReadonlyArray<NormalizationArgument> | null | undefined;
    readonly storageKey: string | null | undefined;
}

export type NormalizationSelection =
    | NormalizationCondition
    | NormalizationField
    | NormalizationHandle
    | NormalizationInlineFragment
    | NormalizationMatchField;

export interface NormalizationSplitOperation {
    readonly kind: string; // 'SplitOperation';
    readonly name: string;
    readonly metadata: { readonly [key: string]: unknown } | null | undefined;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

export interface NormalizationStream {
    readonly if: string | null;
    readonly kind: string; // 'Stream';
    readonly label: string;
    readonly metadata: { readonly [key: string]: unknown } | null | undefined;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

interface NormalizationLiteral {
    readonly kind: string; // 'Literal';
    readonly name: string;
    readonly type?: string | null;
    readonly value: unknown;
}

interface NormalizationVariable {
    readonly kind: string; // 'Variable';
    readonly name: string;
    readonly type?: string | null;
    readonly variableName: string;
}

interface NormalizationLocalArgument {
    readonly kind: string; // 'LocalArgument';
    readonly name: string;
    readonly type: string;
    readonly defaultValue: unknown;
}

interface NormalizationRootArgument {
    readonly kind: string; // 'RootArgument';
    readonly name: string;
    readonly type: string | null | undefined;
}

interface NormalizationCondition {
    readonly kind: string; // 'Condition';
    readonly passingValue: boolean;
    readonly condition: string;
    readonly selections: ReadonlyArray<NormalizationSelection>;
}

type NormalizationHandle = NormalizationScalarHandle | NormalizationLinkedHandle;

interface NormalizationLinkedHandle {
    readonly kind: string; // 'LinkedHandle';
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly args: ReadonlyArray<NormalizationArgument> | null | undefined;
    readonly handle: string;
    readonly key: string;
    readonly filters: ReadonlyArray<string> | null | undefined;
}

interface NormalizationScalarHandle {
    readonly kind: string; // 'ScalarHandle';
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly args: ReadonlyArray<NormalizationArgument> | null | undefined;
    readonly handle: string;
    readonly key: string;
    readonly filters: ReadonlyArray<string> | null | undefined;
}

interface NormalizationInlineFragment {
    readonly kind: string; // 'InlineFragment';
    readonly selections: ReadonlyArray<NormalizationSelection>;
    readonly type: string;
}

type NormalizationSelectableNode =
    | NormalizationDefer
    | NormalizationOperation
    | NormalizationSplitOperation
    | NormalizationStream;

// ./util/ReaderNode
export type ReaderArgument = ReaderLiteral | ReaderVariable;

export type ReaderArgumentDefinition = ReaderLocalArgument | ReaderRootArgument;

export type ReaderField = ReaderScalarField | ReaderLinkedField | ReaderMatchField;

export interface ReaderFragment {
    readonly kind: string; // 'Fragment';
    readonly name: string;
    readonly type: string;
    readonly metadata:
        | {
              readonly connection?: ReadonlyArray<ConnectionMetadata>;
              readonly mask?: boolean;
              readonly plural?: boolean;
              readonly refetch?: ReaderRefetchMetadata;
          }
        | null
        | undefined;
    readonly argumentDefinitions: ReadonlyArray<ReaderArgumentDefinition>;
    readonly selections: ReadonlyArray<ReaderSelection>;
}

export interface ReaderLinkedField {
    readonly kind: string; // 'LinkedField';
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly storageKey: string | null | undefined;
    readonly args: ReadonlyArray<ReaderArgument>;
    readonly concreteType: string | null | undefined;
    readonly plural: boolean;
    readonly selections: ReadonlyArray<ReaderSelection>;
}

export interface ReaderMatchField {
    readonly kind: string; // 'MatchField';
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly storageKey: string | null | undefined;
    readonly args: ReadonlyArray<ReaderArgument> | null | undefined;
    readonly matchesByType: {
        readonly [key: string]: {
            readonly fragmentPropName: string;
            readonly fragmentName: string;
        };
    };
}

export interface ReaderPaginationMetadata {
    readonly backward: {
        readonly count: string;
        readonly cursor: string;
    } | null;
    readonly forward: {
        readonly count: string;
        readonly cursor: string;
    } | null;
    readonly path: ReadonlyArray<string>;
}

export interface ReaderRefetchableFragment extends ReaderFragment {
    readonly metadata: {
        readonly connection?: [ConnectionMetadata];
        readonly refetch: ReaderRefetchMetadata;
    };
}

export interface ReaderScalarField {
    readonly kind: string; // 'ScalarField';
    readonly alias: string | null | undefined;
    readonly name: string;
    readonly args: ReadonlyArray<ReaderArgument> | null | undefined;
    readonly storageKey: string | null | undefined;
}

export type ReaderSelection =
    | ReaderCondition
    | ReaderField
    | ReaderFragmentSpread
    | ReaderInlineFragment
    | ReaderMatchField;

export interface ReaderSplitOperation {
    readonly kind: string; // 'SplitOperation';
    readonly name: string;
    readonly metadata: { readonly [key: string]: unknown } | null | undefined;
    readonly selections: ReadonlyArray<ReaderSelection>;
}

interface ReaderLiteral {
    readonly kind: string; // 'Literal';
    readonly name: string;
    readonly value: unknown;
}

interface ReaderVariable {
    readonly kind: string; // 'Variable';
    readonly name: string;
    readonly variableName: string;
}

interface ReaderLocalArgument {
    readonly kind: string; // 'LocalArgument';
    readonly name: string;
    readonly type: string;
    readonly defaultValue: unknown;
}

interface ReaderRootArgument {
    readonly kind: string; // 'RootArgument';
    readonly name: string;
    readonly type: string | null | undefined;
}

interface ReaderRefetchMetadata {
    readonly connection: ReaderPaginationMetadata | null | undefined;
    readonly operation: string | ConcreteRequest;
    readonly fragmentPathInResult: ReadonlyArray<string>;
}

interface ReaderCondition {
    readonly kind: string; // 'Condition';
    readonly passingValue: boolean;
    readonly condition: string;
    readonly selections: ReadonlyArray<ReaderSelection>;
}

interface ReaderFragmentSpread {
    readonly kind: string; // 'FragmentSpread';
    readonly name: string;
    readonly args: ReadonlyArray<ReaderArgument> | null | undefined;
}

interface ReaderInlineFragment {
    readonly kind: string; // 'InlineFragment';
    readonly selections: ReadonlyArray<ReaderSelection>;
    readonly type: string;
}

type ReaderSelectableNode = ReaderFragment | ReaderSplitOperation;

interface ReaderPaginationFragment extends ReaderFragment {
    readonly metadata: {
        readonly connection: [ConnectionMetadata];
        readonly refetch: ReaderRefetchMetadata & {
            connection: ReaderPaginationMetadata;
        };
    };
}

// ./util/RelayCombinedEnvironmentTypes
export interface CEnvironment<
    TEnvironment,
    TFragment,
    TGraphQLTaggedNode,
    TReaderNode,
    TNormalizationNode,
    TRequest,
    TPayload,
    TReaderSelector
> {
    check(selector: CNormalizationSelector<TNormalizationNode>): boolean;

    lookup(
        selector: CReaderSelector<TReaderNode>
    ): CSnapshot<TReaderNode, COperationDescriptor<TReaderNode, TNormalizationNode, TRequest>>;

    subscribe(
        snapshot: CSnapshot<TReaderNode, COperationDescriptor<TReaderNode, TNormalizationNode, TRequest>>,
        callback: (
            snapshot: CSnapshot<TReaderNode, COperationDescriptor<TReaderNode, TNormalizationNode, TRequest>>
        ) => void
    ): Disposable;

    retain(selector: CNormalizationSelector<TNormalizationNode>): Disposable;

    execute(config: {
        operation: COperationDescriptor<TReaderNode, TNormalizationNode, TRequest>;
        cacheConfig?: CacheConfig | null;
        updater?: SelectorStoreUpdater | null;
    }): RelayObservable<TPayload>;
}

export interface CFragmentMap<TFragment> {
    [key: string]: TFragment;
}

export interface CNormalizationSelector<TNormalizationNode> {
    dataID: DataID;
    node: TNormalizationNode;
    variables: Variables;
}

export interface COperationDescriptor<TReaderNode, TNormalizationNode, TRequest> {
    fragment: CReaderSelector<TReaderNode>;
    node: TRequest;
    root: CNormalizationSelector<TNormalizationNode>;
    variables: Variables;
}

export interface CReaderSelector<TReaderNode> {
    dataID: DataID;
    node: TReaderNode;
    variables: Variables;
}

export interface CRelayContext<TEnvironment> {
    environment: TEnvironment;
    variables: Variables;
}

export interface CSnapshot<TReaderNode, TOwner> extends CReaderSelector<TReaderNode> {
    data: SelectorData | null | undefined;
    seenRecords: RecordMap;
    isMissingData: boolean;
    owner: TOwner | null;
}

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
    setVariables(variables: Variables, request?: ConcreteRequest): void;

    /**
     * Subscribe to resolver updates.
     * Overrides existing callback (if one has been specified).
     */
    setCallback(callback: () => void): void;
}

export interface FragmentSpecResults {
    [key: string]: unknown;
}

export interface Props {
    [key: string]: unknown;
}

interface RecordMap {
    // theoretically, this should be `[dataID: DataID]`, but `DataID` is a string.
    [dataID: string]: Record | undefined;
}
export interface SelectorData {
    [key: string]: unknown;
}

// ./util/RelayConcreteNode
export interface ConcreteRequest {
    readonly kind: string; // 'Request';
    readonly fragment: ReaderFragment;
    readonly operation: NormalizationOperation;
    readonly params: RequestParameters;
}

export type GeneratedNode = ConcreteRequest | ReaderFragment | NormalizationSplitOperation;

export interface RequestParameters {
    readonly name: string;
    readonly operationKind: string; // 'mutation' | 'query' | 'subscription';
    readonly id: string | null | undefined;
    readonly text: string | null | undefined;
    readonly metadata: { [key: string]: unknown };
}

// ./util/RelayRuntimeTypes
export interface CacheConfig {
    force?: boolean | null;
    poll?: number | null;
    liveConfigId?: string | null;
    metadata?: { [key: string]: unknown };
    transactionId?: string | null;
}

export type DataID = string;

export interface Disposable {
    dispose(): void;
}

export interface OperationType {
    readonly variables: Variables;
    readonly response: unknown;
}

export interface Variables {
    [name: string]: any;
}

// Core API

// ./RelayModernEnvironment
interface EnvironmentConfig {
    readonly configName?: string;
    readonly handlerProvider?: HandlerProvider;
    readonly operationLoader?: OperationLoader;
    readonly network: Network;
    readonly store: Store;
    readonly missingFieldHandlers?: ReadonlyArray<MissingFieldHandler>;
}
declare class RelayModernEnvironment implements Environment {
    readonly configName: string | null | undefined;
    constructor(config: EnvironmentConfig);
    getStore(): Store;
    getNetwork(): Network;
    applyUpdate(optimisticUpdate: OptimisticUpdate): Disposable;
    revertUpdate(update: OptimisticUpdate): void;
    replaceUpdate(update: OptimisticUpdate, newUpdate: OptimisticUpdate): void;
    applyMutation(data: {
        operation: OperationDescriptor;
        optimisticUpdater?: SelectorStoreUpdater | null;
        optimisticResponse?: object;
    }): Disposable;
    check(readSelector: NormalizationSelector): boolean;
    commitPayload(operationDescriptor: OperationDescriptor, payload: PayloadData): void;
    commitUpdate(updater: StoreUpdater): void;
    lookup(readSelector: ReaderSelector, owner?: OperationDescriptor): Snapshot;
    subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable;
    retain(selector: NormalizationSelector): Disposable;
    execute(data: {
        operation: OperationDescriptor;
        cacheConfig?: CacheConfig | null;
        updater?: SelectorStoreUpdater | null;
    }): RelayObservable<GraphQLResponse>;
    executeMutation({
        operation,
        optimisticResponse,
        optimisticUpdater,
        updater,
        uploadables,
    }: {
        operation: OperationDescriptor;
        optimisticUpdater?: SelectorStoreUpdater | null;
        optimisticResponse?: object | null;
        updater?: SelectorStoreUpdater | null;
        uploadables?: UploadableMap | null;
    }): RelayObservable<GraphQLResponse>;
}
export { RelayModernEnvironment as Environment };

type HandlerProvider = (name: string) => Handler | null | undefined;

// ./network/RelayNetwork
declare const RelayNetwork: {
    create(fetchFn: FetchFunction, subscribeFn?: SubscribeFunction): Network;
};
export { RelayNetwork as Network };

// ./network/RelayObservable
declare class RelayObservable<T> implements Subscribable<T> {
    // Use RelayObservable.create(source);
    private constructor(source: never);

    static create<V>(source: Source<V>): RelayObservable<V>;

    static onUnhandledError(callback: (error: Error, isUncaughtThrownError: boolean) => void): void;

    static from<V>(obj: ObservableFromValue<V>): RelayObservable<V>;

    static fromLegacy<V>(
        callback: (observer: LegacyObserver<V>) => Disposable | RelayObservable<V>
    ): RelayObservable<V>;

    catch<U>(fn: (error: Error) => RelayObservable<U>): RelayObservable<T | U>;

    do(observer: Observer<T>): RelayObservable<T>;

    finally(fn: () => unknown): RelayObservable<T>;

    ifEmpty<U>(alternate: RelayObservable<U>): RelayObservable<T | U>;

    subscribe(observer: Observer<T> | Sink<T>): Subscription;

    subscribeLegacy(legacyObserver: LegacyObserver<T>): Disposable;

    map<U>(fn: (value: T) => U): RelayObservable<U>;

    mergeMap<U>(fn: (value: T) => ObservableFromValue<U>): RelayObservable<U>;

    poll(pollInterval: number): RelayObservable<T>;

    toPromise(): Promise<T | undefined>;
}
export { RelayObservable as Observable };

// ./networks/RelayQueryResponseCache
declare class RelayQueryResponseCache {
    constructor(config: { size: number; ttl: number });
    clear(): void;
    get(queryID: string, variables: Variables): GraphQLResponse | null;
    set(queryID: string, variables: Variables, payload: GraphQLResponse): void;
}
export { RelayQueryResponseCache as QueryResponseCache };

// ./store/RelayInMemoryRecordSource
declare class RelayInMemoryRecordSource implements MutableRecordSource {
    constructor(records?: RecordMap);
    clear(): void;
    delete(dataID: DataID): void;
    get(dataID: DataID): Record | null | undefined;
    getRecordIDs(): ReadonlyArray<DataID>;
    getStatus(dataID: DataID): RecordState;
    has(dataID: DataID): boolean;
    load(dataID: DataID, callback: (error: Error | null | undefined, record: Record | null | undefined) => void): void;
    remove(dataID: DataID): void;
    set(dataID: DataID, record: Record): void;
    size(): number;
}
export { RelayInMemoryRecordSource as RecordSource };

// ./store/RelayModernStore
declare class RelayModernStore implements Store {
    constructor(source: MutableRecordSource, gcScheduler?: Scheduler, operationLoader?: OperationLoader | null);
    getSource(): RecordSource;
    check(selector: NormalizationSelector): boolean;
    retain(selector: NormalizationSelector): Disposable;
    lookup(selector: ReaderSelector, owner?: OperationDescriptor): Snapshot;
    notify(): void;
    publish(source: RecordSource): void;
    subscribe(snapshot: Snapshot, callback: (snapshot: Snapshot) => void): Disposable;
    holdGC(): Disposable;
}
export { RelayModernStore as Store };

// ./store/RelayModernSelector via ./store/RelayCore
export function areEqualSelectors(thisSelector: OwnedReaderSelector, thatSelector: OwnedReaderSelector): boolean;

export function getDataIDsFromObject(
    fragments: { [key: string]: ReaderFragment },
    object: { [key: string]: unknown }
): { [key: string]: DataID | ReadonlyArray<DataID> | null | undefined };

export function getSelector(
    operationVariables: Variables,
    fragment: ReaderFragment,
    item: unknown
): OwnedReaderSelector | null | undefined;

export function getSelectorList(
    operationVariables: Variables,
    fragment: ReaderFragment,
    items: ReadonlyArray<unknown>
): ReadonlyArray<OwnedReaderSelector> | null | undefined;

export function getSelectorsFromObject(
    operationVariables: Variables,
    fragments: { [key: string]: ReaderFragment },
    object: { [key: string]: unknown }
): {
    [key: string]: OwnedReaderSelector | ReadonlyArray<OwnedReaderSelector> | null | undefined;
};

export function getVariablesFromObject(
    operationVariables: Variables,
    fragments: { [key: string]: ReaderFragment },
    object: { [key: string]: unknown }
): Variables;

// ./store/RelayModernOperationDescriptor via ./store/RelayCore
export function createOperationDescriptor(request: ConcreteRequest, variables: Variables): OperationDescriptor;

// ./store/RelayCore
export function createFragmentSpecResolver(
    context: RelayContext,
    containerName: string,
    fragments: FragmentMap,
    props: Props,
    callback?: () => void
): FragmentSpecResolver;

// ./query/RelayModernGraphQLTag
export function getFragment(taggedNode: GraphQLTaggedNode): ReaderFragment;
export function getFragmentOwner(
    fragmentNode: ReaderFragment,
    fragmentRef: FragmentPointer | ReadonlyArray<FragmentPointer | null | undefined> | null | undefined
): OperationDescriptor | null;
export function getFragmentOwners(
    fragmentNodes: { [key: string]: ReaderFragment },
    fragmentRefs: {
        [key: string]: FragmentPointer | ReadonlyArray<FragmentPointer | null | undefined> | null | undefined;
    }
): { [key: string]: OperationDescriptor | null };
export function getPaginationFragment(taggedNode: GraphQLTaggedNode): ReaderPaginationFragment | null;
export function getRefetchableFragment(taggedNode: GraphQLTaggedNode): ReaderRefetchableFragment | null;
export function getRequest(taggedNode: GraphQLTaggedNode): ConcreteRequest;
export function graphql(strings: ReadonlyArray<string>): GraphQLTaggedNode;

// ./store/RelayStoreUtils
export function getStorageKey(
    field: NormalizationField | NormalizationHandle | ReaderField,
    variables: Variables
): string;
export function getModuleComponentKey(documentName: string): string;
export function getModuleOperationKey(documentName: string): string;

// Declarative mutation API
// ./mutations/RelayDeclarativeMutationConfig
export const MutationTypes: {
    RANGE_ADD: 'RANGE_ADD';
    RANGE_DELETE: 'RANGE_DELETE';
    NODE_DELETE: 'NODE_DELETE';
    FIELDS_CHANGE: 'FIELDS_CHANGE';
    REQUIRED_CHILDREN: 'REQUIRED_CHILDREN';
};

export const RangeOperations: {
    APPEND: 'append';
    IGNORE: 'ignore';
    PREPEND: 'prepend';
    REFETCH: 'refetch'; // legacy only
    REMOVE: 'remove'; // legacy only
};

export const FRAGMENTS_KEY: string;
export const FRAGMENT_OWNER_KEY: string;
export const ID_KEY: string;
export const REF_KEY: string;
export const REFS_KEY: string;
export const ROOT_ID: string;
export const ROOT_TYPE: string;
export const TYPENAME_KEY: string;

// Extensions
// ./handlers/RelayDefaultHandlerProvider
declare function RelayDefaultHandlerProvider(handle: string): Handler;
export { RelayDefaultHandlerProvider as DefaultHandlerProvider };

// ./handlers/connection/RelayConnectionHandler
interface RelayConnectionHandler {
    buildConnectionEdge(
        store: RecordSourceProxy,
        connection: RecordProxy,
        edge: RecordProxy | null | undefined
    ): RecordProxy | null | undefined;
    createEdge(store: RecordSourceProxy, record: RecordProxy, node: RecordProxy, edgeType: string): RecordProxy;
    deleteNode(record: RecordProxy, nodeID: DataID): void;
    getConnection(record: ReadonlyRecordProxy, key: string, filters?: Variables | null): RecordProxy | null | undefined;
    insertEdgeAfter(record: RecordProxy, newEdge: RecordProxy, cursor?: string | null): void;
    insertEdgeBefore(record: RecordProxy, newEdge: RecordProxy, cursor?: string | null): void;
    update(store: RecordSourceProxy, payload: HandleFieldPayload): void;
}
declare const RelayConnectionHandler: RelayConnectionHandler;
export { RelayConnectionHandler as ConnectionHandler };

// ./handlers/viewer/RelayViewerHandler
interface RelayViewerHandler {
    readonly VIEWER_ID: DataID;
    readonly VIEWER_TYPE: 'Viewer';
}
declare const RelayViewerHandler: RelayViewerHandler;
export { RelayViewerHandler as ViewerHandler };

// Helpers (can be implemented via the above API)

// ./mutations/applyRelayModernOptimisticMutation
declare function applyRelayModernOptimisticMutation(
    environment: Environment,
    config: OptimisticMutationConfig
): Disposable;
export { applyRelayModernOptimisticMutation as applyOptimisticMutation };

// ./mutations/commitLocalUpdate
export function commitLocalUpdate(environment: Environment, updater: StoreUpdater): void;

// ./mutations/commitRelayModernMutation
declare function commitRelayModernMutation<TOperation extends OperationType = OperationType>(
    environment: Environment,
    // tslint:disable-next-line no-unnecessary-generics
    config: MutationConfig<TOperation>
): Disposable;
export { commitRelayModernMutation as commitMutation };

// ./query/fetchRelayModernQuery
declare function fetchRelayModernQuery<T extends OperationType>(
    environment: RelayModernEnvironment,
    taggedNode: GraphQLTaggedNode,
    variables: T['variables'],
    cacheConfig?: CacheConfig | null
): Promise<T['response']>;
export { fetchRelayModernQuery as fetchQuery };

// ./store/isRelayModernEnvironment
export function isRelayModernEnvironment(environment: any): environment is RelayModernEnvironment;

// ./subscription/requestRelaySubscription
declare function requestRelaySubscription(environment: Environment, config: GraphQLSubscriptionConfig<{}>): Disposable;
export { requestRelaySubscription as requestSubscription };

// Configuration interface for legacy or special uses
// ./handlers/connection/RelayConnectionInterface
export const ConnectionInterface: {
    get(): {
        CLIENT_MUTATION_ID: 'clientMutationId';
        CURSOR: 'cursor';
        EDGES_HAVE_SOURCE_FIELD: boolean;
        EDGES: 'edges';
        END_CURSOR: 'endCursor';
        HAS_NEXT_PAGE: 'hasNextPage';
        HAS_PREV_PAGE: 'hasPreviousPage';
        NODE: 'node';
        PAGE_INFO_TYPE: 'PageInfo';
        PAGE_INFO: 'pageInfo';
        START_CURSOR: 'startCursor';
    };
};

// Utilities
interface Handler {
    update: (store: RecordSourceProxy, fieldPayload: HandleFieldPayload) => void;
}
type ProfileHandler = (name: string, state?: any) => (error?: Error) => void;
export interface RelayProfiler {
    instrumentMethods(object: object, names: { [key: string]: string }): void;
    instrument<T extends (...args: any[]) => any>(name: string, originalFunction: T): T;
    attachAggregateHandler(name: string, handler: Handler): void;
    detachAggregateHandler(name: string, handler: Handler): void;
    profile(name: string, state?: any): { stop: (error?: Error) => void };
    attachProfileHandler(name: string, handler: ProfileHandler): void;
    detachProfileHandler(name: string, handler: ProfileHandler): void;
}
export const RelayProfiler: RelayProfiler;

// Internal API
export function deepFreeze<T extends object>(value: T): T;

// ./utils/RelayFeatureFlags

interface FeatureFlags {
    ENABLE_VARIABLE_CONNECTION_KEY: boolean;
}

export const RelayFeatureFlags: FeatureFlags;
