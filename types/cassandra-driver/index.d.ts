// Type definitions for cassandra-driver 4.1
// Project: https://github.com/datastax/nodejs-driver
// Definitions by: Marc Fisher <https://github.com/Svjard>
//                 Christian D <https://github.com/pc-jedi>
//                 Michal Kaminski <https://github.com/michal-b-kaminski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

export type Callback = Function;
export type ResultCallback = (err: Error, result: types.ResultSet) => void;

import * as events from 'events';
import * as stream from 'stream';
import * as tls from 'tls';
import _Long = require('long');

export namespace policies {
  namespace addressResolution {
    let EC2MultiRegionTranslator: EC2MultiRegionTranslatorStatic;

    interface AddressTranslator {
      translate(address: string, port: number, callback: Callback): void;
    }

    interface EC2MultiRegionTranslatorStatic {
      new (): EC2MultiRegionTranslator;
    }

    interface EC2MultiRegionTranslator extends AddressTranslator {
      logError(address: string, err: Error): void;
    }
  }

  namespace loadBalancing {
    class LoadBalancingPolicy {
      init(client: Client, hosts: HostMap, callback: Callback): void;
      getDistance(host: Host): types.distance;
      newQueryPlan(keyspace: string, queryOptions: ExecutionOptions | null, callback: Callback): void;
      getOptions(): Map<string, any>;
    }

    class DCAwareRoundRobinPolicy extends LoadBalancingPolicy {
      localDc: string;
      localHostsArray: Host[];

      constructor(localDc?: string);
    }

    class RoundRobinPolicy extends LoadBalancingPolicy {}

    class TokenAwarePolicy extends LoadBalancingPolicy {
      constructor(childPolicy: LoadBalancingPolicy);
    }

    class WhiteListPolicy extends LoadBalancingPolicy {
      constructor(childPolicy: LoadBalancingPolicy, whiteList: string[]);
    }
  }

  namespace reconnection {
    let ConstantReconnectionPolicy: ConstantReconnectionPolicyStatic;
    let ExponentialReconnectionPolicy: ExponentialReconnectionPolicyStatic;

    interface ReconnectionPolicy {
      newSchedule(): {
        next(): { delay: number; done: boolean; }
      };
      getOptions(): Map<string, any>;
    }

    interface ConstantReconnectionPolicyStatic {
      new (delay: number): ConstantReconnectionPolicy;
    }

    interface ConstantReconnectionPolicy extends ReconnectionPolicy { }

    interface ExponentialReconnectionPolicyStatic {
      new (baseDelay: number, maxDelay: number, startWithNoDelay: boolean): ExponentialReconnectionPolicy;
    }

    interface ExponentialReconnectionPolicy extends ReconnectionPolicy { }
  }

  namespace retry {
    let RetryPolicy: RetryPolicyStatic;

    interface DecisionInfo {
      decision: number;
      consistency?: number;
      useCurrentHost?: boolean;
    }

    interface RequestInfo {
      request: any;
      nbRetry: number;
    }

    enum retryDecision {
      rethrow = 0,
      retry,
      ignore
    }

    interface RetryPolicyStatic {
      new (): RetryPolicy;

      retryDecision: {
        rethrow: number,
        retry: number,
        ignore: number
      };
    }

    interface RetryPolicy {
      onReadTimeout(requestInfo: RequestInfo, consistency: types.consistencies, received: number, blockFor: number, isDataPresent: boolean): DecisionInfo;
      onUnavailable(requestInfo: RequestInfo, consistency: types.consistencies, required: number, alive: number): DecisionInfo;
      onWriteTimeout(requestInfo: RequestInfo, consistency: types.consistencies, received: number, blockFor: number, writeType: string): DecisionInfo;
      rethrowResult(): DecisionInfo;
      retryResult(consistency?: types.consistencies, useCurrentHost?: boolean): DecisionInfo;
    }
  }

  namespace speculativeExecution {
    let NoSpeculativeExecutionPolicy: NoSpeculativeExecutionPolicyStatic;

    interface SpeculativeExecutionPolicy {
      init(client: Client): void;
      newPlan(keyspace: string, queryInfo: string | string[]): {
          nextExecution: () => number;
      };
      getOptions(): Map<string, any>;
      shutdown(): void;
    }

    interface NoSpeculativeExecutionPolicyStatic {
      new (): NoSpeculativeExecutionPolicy;
    }

    interface NoSpeculativeExecutionPolicy extends SpeculativeExecutionPolicy { }

    interface ConstantSpeculativeExecutionPolicyStatic {
      new (delay: number, maxSpeculativeExecutions: number): ConstantSpeculativeExecutionPolicy;
    }

    interface ConstantSpeculativeExecutionPolicy extends SpeculativeExecutionPolicy { }
  }

  namespace timestampGeneration {
      let MonotonicTimestampGenerator: MonotonicTimestampGeneratorStatic;

      interface TimestampGenerator {
        next(client: Client): null | number | _Long;
      }

      interface MonotonicTimestampGeneratorStatic {
        new (warningThreshold?: number, minLogInterval?: number): MonotonicTimestampGeneratorStatic;
      }

      interface MonotonicTimestampGenerator extends TimestampGenerator {
        getDate(): number;
      }
  }
}

export namespace types {
  let BigDecimal: BigDecimalStatic;
  let Duration: DurationStatic;
  let Long: typeof _Long;
  let InetAddress: InetAddressStatic;
  let Integer: IntegerStatic;
  let LocalDate: LocalDateStatic;
  let LocalTime: LocalTimeStatic;
  let ResultSet: ResultSetStatic;
  // let ResultStream: ResultStreamStatic;
  let Row: RowStatic;
  let TimeUuid: TimeUuidStatic;
  let Tuple: TupleStatic;
  let Uuid: UuidStatic;

  enum consistencies {
    any = 0,
    one,
    two,
    three,
    quorum,
    all,
    localQuorum,
    eachQuorum,
    serial,
    localSerial,
    localOne
  }

  enum dataTypes {
    custom = 0,
    ascii,
    bigint,
    blob,
    boolean,
    counter,
    decimal,
    double,
    float,
    int,
    text,
    timestamp,
    uuid,
    varchar,
    varint,
    timeuuid,
    inet,
    date,
    time,
    smallint,
    tinyint,
    list,
    map,
    set,
    udt,
    tuple
  }

  enum distance {
    local = 0,
    remote,
    ignored
  }

  interface responseErrorCodes { [key: string]: number; }
  interface unset { unset: boolean; }

  function generateTimestamp(date?: Date, microseconds?: number): _Long;
  function timeuuid(options?: { msecs: number | Date, node: Buffer, clockseq: number, nsecs: number }, buffer?: Buffer, offset?: number): string;

  interface BigDecimalStatic {
    new (unscaledValue: number, scale: number): BigDecimal;

    fromBuffer(buf: Buffer): BigDecimal;
    toBuffer(value: BigDecimal): Buffer;
    fromString(value: string): BigDecimal;
    fromNumber(value: number): BigDecimal;
  }

  interface BigDecimal {
    equals(other: BigDecimal): boolean;
    inspect(): string;
    notEquals(other: BigDecimal): boolean;
    compare(other: BigDecimal): number;
    subtract(other: BigDecimal): BigDecimal;
    add(other: BigDecimal): BigDecimal;
    greaterThan(other: BigDecimal): boolean;
    isNegative(): boolean;
    isZero(): boolean;
    toString(): string;
    toNumber(): number;
    toJSON(): string;
  }

  interface DurationStatic {
    new (month: number, days: number, nanoseconds: number | _Long): Duration;

    fromBuffer(buffer: Buffer): Duration;
    fromString(input: string): Duration;
  }

  interface Duration {
    equals(other: Duration): boolean;
    toBuffer(): Buffer;
    toString(): string;
  }

  interface InetAddressStatic {
    new (buffer: Buffer): InetAddress;

    fromString(value: string): InetAddress;
  }

  interface InetAddress {
    equals(other: InetAddress): boolean;
    getBuffer(): Buffer;
    inspect(): string;
    toString(): string;
    toJSON(): string;

    length: number;
    version: number;
  }

  interface IntegerStatic {
    new (bits: number[], sign: number): Integer;

    fromInt(value: number): Integer;
    fromNumber(value: number): Integer;
    fromBits(bits: number[]): Integer;
    fromString(str: string, opt_radix?: number): Integer;
    fromBuffer(bits: Buffer): Integer;
    toBuffer(value: Integer): Buffer;

    ZERO: Integer;
    ONE: Integer;
  }

  interface Integer {
    toInt(): number;
    toNumber(): number;
    toString(opt_radix?: number): string;
    getBits(index: number): number;
    getBitsUnsigned(index: number): number;
    getSign(): number;
    isZero(): boolean;
    isNegative(): boolean;
    isOdd(): boolean;
    equals(other: Integer): boolean;
    notEquals(other: Integer): boolean;
    greaterThan(other: Integer): boolean;
    greaterThanOrEqual(other: Integer): boolean;
    lessThan(other: Integer): boolean;
    lessThanOrEqual(other: Integer): boolean;
    compare(other: Integer): number;
    shorten(numBits: number): Integer;
    negate(): Integer;
    add(other: Integer): Integer;
    subtract(other: Integer): Integer;
    multiply(other: Integer): Integer;
    divide(other: Integer): Integer;
    modulo(other: Integer): Integer;
    not(): Integer;
    and(other: Integer): Integer;
    or(other: Integer): Integer;
    xor(other: Integer): Integer;
    shiftLeft(numBits: number): Integer;
    shiftRight(numBits: number): Integer;
    inspect(): string;
    abs(): Integer;
    toJSON(): string;
  }

  interface LocalDateStatic {
    new (year: number, month: number, day: number): LocalDate;

    now(): LocalDate;
    utcNow(): LocalDate;
    fromDate(date: Date): LocalDate;
    fromString(value: string): LocalDate;
    fromBuffer(buffer: Buffer): LocalDate;
  }

  interface LocalDate {
    _value: number;
    year: number;
    month: number;
    day: number;

    equals(other: LocalDate): boolean;
    inspect(): string;
    toBuffer(): Buffer;
    toString(): string;
    toJSON(): string;
  }

  interface LocalTimeStatic {
    new (totalNanoseconds: _Long): LocalTime;

    fromString(value: string): LocalTime;
    now(nanoseconds?: number): LocalTime;
    fromDate(date: Date, nanoseconds: number): LocalTime;
    fromMilliseconds(milliseconds: number, nanoseconds?: number): LocalTime;
    fromBuffer(value: Buffer): LocalTime;
  }

  interface LocalTime {
    hour: number;
    minute: number;
    second: number;
    nanosecond: number;

    compare(other: LocalTime): boolean;
    equals(other: LocalTime): boolean;
    getTotalNanoseconds(): _Long;
    inspect(): string;
    toBuffer(): Buffer;
    toString(): string;
    toJSON(): string;
  }

  interface ResultSetStatic {
    new (response: any, host: string, triedHost: { [key: string]: any }, speculativeExecutions: number, consistency: consistencies): ResultSet;
  }

  interface ResultSet {
    info: {
      queriedHost: Host,
      triedHosts: { [key: string]: string; },
      speculativeExecutions: number,
      achievedConsistency: consistencies,
      traceId: Uuid,
      warnings: string[],
      customPayload: any
    };
    rows: Row[];
    rowLength: number;
    columns: Array<{ [key: string]: string; }>;
    pageState: string;
    nextPage: () => void;

    first(): Row | null;
    getPageState(): string;
    getColumns(): Array<{ [key: string]: string; }>;
    wasApplied(): boolean;
    [Symbol.iterator](): Iterator<Row>;
  }

  interface ResultStreamStatic {
    new (opt: any): ResultSet;
  }

  interface ResultStream extends stream.Readable {
    buffer: Buffer;
    paused: boolean;

    _valve(readNext: () => void): void;
    add(chunk: Buffer): void;
  }

  interface RowStatic {
    new (columns: Array<{ [key: string]: string; }>): Row;
  }

  interface Row {
    get(columnName: string | number): { [key: string]: any; };
    values(): Array<{ [key: string]: any; }>;
    keys(): string[];
    forEach(callback: Callback): void;
    [key: string]: any;
  }

  interface TimeUuidStatic {
    new (value?: Date, ticks?: number, nodeId?: string | Buffer, clockId?: string | Buffer): TimeUuid;

    fromDate(date: Date, ticks?: number, nodeId?: string | Buffer, clockId?: string | Buffer): TimeUuid;
    fromString(value: string): TimeUuid;
    min(date: Date, ticks?: number): TimeUuid;
    max(date: Date, ticks?: number): TimeUuid;
    now(nodeId?: string | Buffer, clockId?: string | Buffer): TimeUuid;
  }

  interface TimeUuid extends Uuid {
    getDatePrecision(): { date: Date, ticks: number };
    getDate(): Date;
    getNodeId(): Buffer;
    getNodeIdString(): string;
  }

  interface TupleStatic {
    new (...args: any[]): Tuple;

    fromArray(elements: any[]): Tuple;
  }

  interface Tuple {
    elements: any[];
    length: number;

    get(index: number): any;
    toString(): string;
    toJSON(): string;
    values(): any[];
  }

  interface UuidStatic {
    new (buffer: Buffer): Uuid;

    fromString(value: string): Uuid;
    random(): Uuid;
  }

  interface Uuid {
    buffer: Buffer;

    getBuffer(): Buffer;
    // tslint:disable-next-line:no-unnecessary-qualifier
    equals(other: types.Uuid): boolean;
    toString(): string;
    inspect(): string;
    toJSON(): string;
  }
}

export let Client: ClientStatic;
export let Encoder: EncoderStatic;

export interface ClientOptions {
  contactPoints: string[];
  localDataCenter?: string;
  keyspace?: string;
  refreshSchemaDelay?: number;
  isMetadataSyncEnabled?: boolean;
  prepareOnAllHosts?: boolean;
  rePrepareOnUp?: boolean;
  maxPrepared?: number;
  policies?: {
    loadBalancing?: policies.loadBalancing.LoadBalancingPolicy;
    retry?: policies.retry.RetryPolicy;
    reconnection?: policies.reconnection.ReconnectionPolicy;
    addressResolution?: policies.addressResolution.AddressTranslator;
    speculativeExecution?: policies.speculativeExecution.SpeculativeExecutionPolicy;
    timestampGeneration?: policies.timestampGeneration.TimestampGenerator;
  };
  queryOptions?: QueryOptions;
  pooling?: {
    heartBeatInterval?: number;
    coreConnectionsPerHost?: { [key: number]: number; };
    maxRequestsPerConnection?: number;
    warmup?: boolean;
  };
  protocolOptions?: {
    port?: number;
    maxSchemaAgreementWaitSeconds?: number;
    maxVersion?: number;
    noCompact?: boolean;
  };
  socketOptions?: {
    connectTimeout?: number;
    defunctReadTimeoutThreshold?: number;
    keepAlive?: boolean;
    keepAliveDelay?: number;
    readTimeout?: number;
    tcpNoDelay?: boolean;
    coalescingThreshold?: number;
  };
  authProvider?: auth.AuthProvider;
  requestTracker?: tracker.RequestTracker;
  sslOptions?: tls.ConnectionOptions;
  encoding?: {
    map?: typeof Map | ((...args: any[]) => any);
    set?: typeof Set | ((...args: any[]) => any);
    copyBuffer?: boolean;
    useUndefinedAsUnset?: boolean;
    useBigIntAsLong?: boolean;
    useBigIntAsVarint?: boolean;
  };
  profiles?: ExecutionProfile[];
  promiseFactory?: (handler: (callback: (err?: any, result?: any) => void) => void) => Promise<any>;
  metrics?: metrics.ClientMetrics;
}

export interface QueryOptions {
  autoPage?: boolean;
  captureStackTrace?: boolean;
  consistency?: number;
  customPayload?: any;
  executionProfile?: string | ExecutionProfile;
  fetchSize?: number;
  hints?: string[] | string[][];
  isIdempotent?: boolean;
  keyspace?: string;
  logged?: boolean;
  counter?: boolean;
  pageState?: Buffer | string;
  prepare?: boolean;
  readTimeout?: number;
  retry?: policies.retry.RetryPolicy;
  routingIndexes?: number[];
  routingKey?: Buffer | Buffer[];
  routingNames?: string[];
  serialConsistency?: number;
  timestamp?: number | _Long;
  traceQuery?: boolean;
  host?: Host;
}

export interface ClientStatic {
  new (options?: ClientOptions): Client;
}

export interface Client extends events.EventEmitter {
  hosts: HostMap;
  keyspace: string;
  metadata: metadata.Metadata;
  metrics: metrics.ClientMetrics;

  batch(queries: string[] | Array<{ query: string, params?: any }>, options: QueryOptions, callback: ResultCallback): void;
  batch(queries: string[] | Array<{ query: string, params?: any }>, callback: ResultCallback): void;
  batch(queries: string[] | Array<{ query: string, params?: any }>, options?: QueryOptions): Promise<types.ResultSet>;

  connect(callback: Callback): void;
  connect(): Promise<void>;
  eachRow(query: string, params?: any, options?: QueryOptions, rowCallback?: Callback, callback?: Callback): void;
  execute(query: string, params: any, options: QueryOptions, callback: ResultCallback): void;
  execute(query: string, params: any, callback: ResultCallback): void;
  execute(query: string, callback: ResultCallback): void;
  execute(query: string, params?: any, options?: QueryOptions): Promise<types.ResultSet>;
  getReplicas(keyspace: string, token: Buffer): any[]; // TODO: Should this be a more explicit return?
  getState(): metadata.ClientState;
  shutdown(callback?: Callback): void;
  shutdown(): Promise<void>;
  stream(query: string, params?: any, options?: QueryOptions, callback?: Callback): NodeJS.ReadableStream;
}

export interface Host extends events.EventEmitter {
  address: string;
  cassandraVersion: string;
  datacenter: string;
  rack: string;
  tokens: string[];
  hostId: types.Uuid;

  canBeConsideredAsUp(): boolean;
  getCassandraVersion(): number[];
  isUp(): boolean;
}

export interface HostMap extends events.EventEmitter {
  length: number;

  clear(): Host[];
  forEach(callback: Callback): void;
  get(key: string): Host;
  keys(): string[];
  remove(key: string): void;
  removeMultiple(keys: string[]): void;
  set(key: string, value: Host): void;
  values(): Host[];
}

export interface EncoderStatic {
  new (protocolVersion: number, options: ClientOptions): Encoder;
}

export interface Encoder {
  decode(buffer: Buffer, type: { code: number, info?: any }): void;
  encode(value: any, typeInfo?: string | number | { code: number, info?: any }): Buffer;
}

export interface ExecutionProfileOptions {
  consistency: number;
  loadBalancing: policies.loadBalancing.LoadBalancingPolicy;
  name: string;
  readTimeout: number;
  retry: policies.retry.RetryPolicy;
  serialConsistency: number;
}

export interface ExecutionProfileStatic {
  new (name: string, options: ExecutionProfileOptions): ExecutionProfile;
}

export interface ExecutionProfile extends ExecutionProfileOptions {}

export namespace auth {
  let Authenticator: AuthenticatorStatic;
  let PlainTextAuthProvider: PlainTextAuthProviderStatic;

  interface AuthenticatorStatic {
    new (): Authenticator;
  }

  interface Authenticator {
    evaluateChallenge(challenge: Buffer, callback: Callback): void;
    initialResponse(callback: Callback): void;
    onAuthenticationSuccess(token?: Buffer): void;
  }

  interface AuthProvider {
    newAuthenticator(endpoint: string, name: string): void;
  }

  interface PlainTextAuthProviderStatic {
    new (username: string, password: string): PlainTextAuthProvider;
  }

  interface PlainTextAuthProvider extends AuthProvider {
    newAuthenticator(endpoint: string, name: string): void;
  }
}

export namespace errors {
  abstract class DriverError extends Error {
    constructor(message: string, constructor?: any);

    info: string;
  }

  class ArgumentError extends DriverError {
    constructor(message: string);
  }

  class AuthenticationError extends DriverError {
    constructor(message: string);
  }

  class DriverInternalError extends DriverError {
    constructor(message: string);
  }

  class NoHostAvailableError extends DriverError {
    constructor(innerErrors: any, message?: string);

    innerErrors: any;
  }

  class NotSupportedError extends DriverError {
    constructor(message: string);
  }

  class OperationTimedOutError extends DriverError {
    constructor(message: string, host?: string);

    host?: string;
  }

  class ResponseError extends DriverError {
    constructor(code: number, message: string);

    code: number;
  }

  class BusyConnectionError extends DriverError {
    constructor(address: string, maxRequestsPerConnection: number, connectionLength: number);
  }
}

export namespace metadata {
  let Metadata: MetadataStatic;

  type caching = "all" | "keys_only" | "rows_only" | "none";

  interface Aggregate {
    argumentTypes: Array<{ code: number, info: any }>;
    finalFunction: string;
    initCondition: string;
    keyspaceName: string;
    returnType: string;
    signature: string[];
    stateFunction: string;
    stateType: string;
  }

  interface ClientState {
    getConnectedHosts(): Host[];
    getInFlightQueries(host: Host): number;
    getOpenConnections(host: Host): number;
    toString(): string;
  }

  interface DataTypeInfo {
    code: number;
    info: string | DataTypeInfo | DataTypeInfo[];
    options: {
      frozen: boolean;
      reversed: boolean;
    };
  }

  interface ColumnInfo {
    name: string;
    type: DataTypeInfo;
  }

  interface DataCollection {
    bloomFilterFalsePositiveChance: number;
    caching: caching;
    clusterKeys: Array<{ c: ColumnInfo, index: number, order: string }>;
    clusteringOrder: string[];
    columns: ColumnInfo[];
    columnsByName: { [key: string]: ColumnInfo };
    comment: string;
    compactionClass: string;
    compactionOptions: any;
    compression: any;
    crcCheckChange?: number;
    defaultTtl: number;
    extensions: any;
    gcGraceSeconds: number;
    localReadRepairChance: number;
    maxIndexInterval?: number;
    minIndexInterval?: number;
    name: string;
    partitionKeys: Array<{ c: ColumnInfo, index: number }>;
    populateCacheOnFlush: boolean;
    readRepairChance: number;
    speculateRetry: string;
  }

  enum IndexType {
    custom = 0,
    keys,
    composites
  }

  interface Index {
    kind: IndexType;
    name: string;
    options: object;
    target: string;

    isCompositesKind(): boolean;
    isCustomKind(): boolean;
    isKeysKind(): boolean;
  }

  interface MaterializedView extends DataCollection { }

  interface QueryTrace {
    requestType: any;
    coordinator: any;
    parameters: any;
    startedAt: any;
    duration: any;
    clientAddress: any;
    events: Array<{ id: any; activity: any; source: any; elapsed: any; thread: any }>;
  }

  type MetadataCallback<T> = (err: any, retVal: T) => void;

  interface MetadataStatic {
    new (options: ClientOptions, controlConnection: any): Metadata;
  }

  interface Metadata {
    clearPrepared(): void;

    getAggregate(keyspaceName: string, name: string, signature: string[] | Array<{ code: number, info: any }>, callback: MetadataCallback<Aggregate>): void;
    getAggregate(keyspaceName: string, name: string, signature: string[] | Array<{ code: number, info: any }>): Promise<Aggregate>;
    getAggregates(keyspaceName: string, name: string, callback: MetadataCallback<Aggregate[]>): void;
    getAggregates(keyspaceName: string, name: string): Promise<Aggregate[]>;
    getFunction(keyspaceName: string, name: string, signature: string[] | Array<{ code: number, info: any }>, callback: MetadataCallback<SchemaFunction>): void;
    getFunction(keyspaceName: string, name: string, signature: string[] | Array<{ code: number, info: any }>): Promise<SchemaFunction>;
    getFunctions(keyspaceName: string, name: string, callback: MetadataCallback<SchemaFunction[]>): void;
    getFunctions(keyspaceName: string, name: string): Promise<SchemaFunction[]>;
    getMaterializedView(keyspaceName: string, name: string, callback: MetadataCallback<MaterializedView>): void;
    getMaterializedView(keyspaceName: string, name: string, callback: Callback): Promise<MaterializedView>;
    getReplicas(keyspaceName: string, token: Buffer | token.Token | token.TokenRange): any[]; // TODO
    getTable(keyspaceName: string, name: string, callback: MetadataCallback<TableMetadata>): void;
    getTable(keyspaceName: string, name: string): Promise<TableMetadata>;
    getTokenRanges(): Set<token.TokenRange>;
    getTokenRangesForHost(keyspaceName: string, host: Host): Set<token.TokenRange> | null;
    getTrace(traceId: types.Uuid, consistency: types.consistencies, callback: MetadataCallback<QueryTrace>): void;
    getTrace(traceId: types.Uuid, consistency: types.consistencies, callback: Callback): Promise<QueryTrace>;
    getTrace(traceId: types.Uuid, callback: MetadataCallback<QueryTrace>): void;
    getTrace(traceId: types.Uuid): Promise<QueryTrace>;
    getUdt(keyspaceName: string, name: string, callback: MetadataCallback<any>): void; // TODO
    getUdt(keyspaceName: string, name: string): Promise<any>; // TODO
    newToken(components: Buffer[] | Buffer | string): token.Token;
    newTokenRange(start: token.Token, end: token.Token): token.TokenRange;
    refreshKeyspace(name: string, callback: Callback): void;
    refreshKeyspace(name: string): Promise<void>;
    refreshKeyspaces(waitReconnect: boolean, callback: Callback): void;
    refreshKeyspaces(waitReconnect?: boolean): Promise<void>;
    refreshKeyspaces(callback: Callback): void;
  }

  interface SchemaFunction {
    argumentNames: string[];
    argumentTypes: Array<{ code: number, info: any }>;
    body: string;
    calledOnNullInput: boolean;
    keyspaceName: string;
    language: string;
    name: string;
    returnType: string;
    signature: string[];
  }

  interface TableMetadata extends DataCollection {
    indexes: Index[];
    indexInterval?: number;
    isCompact: boolean;
    memtableFlushPeriod: number;
    replicateOnWrite: boolean;
    cdc?: boolean;
    virtual: boolean;
  }
}

export interface ExecutionOptionsStatic {
  new (): ExecutionOptions;
}

export interface ExecutionOptions {
  getCaptureStackTrace(): boolean;
  getConsistency(): types.consistencies;
  getCustomPayload(): { [key: string]: any };
  getFetchSize(): number;
  getFixedHost(): Host;
  getHints(): string[] | string[][];
  isAutoPage(): boolean;
  isBatchCounter(): boolean;
  isBatchLogged(): boolean;
  isIdempotent(): boolean;
  isPrepared(): boolean;
  isQueryTracing(): boolean;
  getKeyspace(): string;
  getLoadBalancingPolicy(): policies.loadBalancing.LoadBalancingPolicy;
  getPageState(): Buffer;
  getRawQueryOptions(): QueryOptions;
  getReadTimeout(): number;
  getRetryPolicy(): policies.retry.RetryPolicy;
  getRoutingKey(): Buffer | Buffer[];
  getSerialConsistency(): types.consistencies;
  getTimestamp(): number | Long | undefined | null;
  setHints(hints: string[]): void;
}

export let ExecutionOptions: ExecutionOptionsStatic;
export let ExecutionProfile: ExecutionProfileStatic;

export namespace mapping {
  let Mapper: MapperStatic;
  let ModelBatchItem: ModelBatchItemStatic;
  let ModelMappingInfo: ModelMappingInfoStatic;
  let ModelMapper: ModelMapperStatic;
  let MappingHandler: MappingHandlerStatic;
  let Result: ResultStatic;
  let DefaultTableMappings: DefaultTableMappingsStatic;
  let UnderscoreCqlToCamelCaseMappings: UnderscoreCqlToCamelCaseMappingsStatic;

  interface MappingExecutionOptions {
    executionProfile?: string;
    isIdempotent?: boolean;
    logged?: boolean;
    timestamp?: number | Long;
    fetchSize?: number;
    pageState?: number;
  }

  interface ModelTables {
    name: string;
    isView: boolean;
  }

  interface MappingQuery {
    query: string;
    isIdempotent: boolean;
    isCounter: boolean;
  }

  interface MapperStatic {
    new (client: Client, options?: MappingOptions): Mapper;
  }
  interface Mapper {
    batch(items: ModelBatchItem[], executionOptions?: string | MappingExecutionOptions): Promise<Result>;
    forModel(name: string): ModelMapper;
  }

  interface MappingOptions {
    models: { [key: string]: ModelOptions };
  }

  interface ModelOptions {
    tables?: string[] | ModelTables[];
    mappings?: TableMappings;
    columns?: { [key: string]: string };
    keyspace?: string;
  }

  interface ModelMappingInfoStatic {
    new (keyspace: string, tables: ModelTables[], mappings: TableMappings, columns: { [key: string]: string }): ModelMappingInfo;
    parse(options: MappingOptions, currentKeyspace: string): { [key: string]: ModelMappingInfo };
    createDefault(modelName: string, currentKeyspace: string): ModelMappingInfo;
  }
  interface ModelMappingInfo {
    keyspace: string;
    tables: ModelTables[];

    getColumnName(propName: string): string;
    getPropertyName(columnName: string): string;
    newInstance(): TableMappings;
  }

  interface MappingDocInfo {
    fields?: string[];
    ttl?: number;
    ifNotExists?: boolean;
    when?: { [key: string]: string };
    orderBy?: { [key: string]: string };
    limit?: number;
    deleteOnlyColumns?: boolean;
  }

  interface ModelBatchItemStatic {
    new (
      queries: Promise<MappingQuery[]>,
      doc: { [key: string]: any },
      docInfo: MappingDocInfo,
      mappingInfo: ModelMappingInfo
    ): ModelBatchItem;
  }
  interface ModelBatchItem {}

  interface MappingHandlerStatic {
    new (client: Client, mappingInfo: ModelMappingInfo): MappingHandler;
  }
  interface MappingHandler {}

  interface ModelBatchMapper {
    insert(doc: { [key: string]: any }, docInfo?: MappingDocInfo): ModelBatchItem;
    remove(doc: { [key: string]: any }, docInfo?: MappingDocInfo): ModelBatchItem;
    update(doc: { [key: string]: any }, docInfo?: MappingDocInfo): ModelBatchItem;
  }

  interface ModelMapperStatic {
    new (name: string, handler: MappingHandler): ModelMapper;
  }
  interface ModelMapper {
    name: string;
    batching: ModelBatchMapper;

    get(doc: { [key: string]: any }, docInfo?: MappingDocInfo, executionOptions?: string | MappingExecutionOptions): Promise<Result>;
    find(doc: { [key: string]: any }, docInfo?: MappingDocInfo, executionOptions?: string | MappingExecutionOptions): Promise<Result>;
    findAll(docInfo?: MappingDocInfo, executionOptions?: string | MappingExecutionOptions): Promise<Result>;
    insert(doc: { [key: string]: any }, docInfo?: MappingDocInfo, executionOptions?: string | MappingExecutionOptions): Promise<Result>;
    update(doc: { [key: string]: any }, docInfo?: MappingDocInfo, executionOptions?: string | MappingExecutionOptions): Promise<Result>;
    remove(doc: { [key: string]: any }, docInfo?: MappingDocInfo, executionOptions?: string | MappingExecutionOptions): Promise<Result>;
    mapWithQuery(
      query: string,
      paramsHandler: (doc: { [key: string]: any }) => any,
      executionOptions?: string | MappingExecutionOptions
    ): (doc: { [key: string]: any }, executionOptions?: string | MappingExecutionOptions) => Promise<Result>;
  }

  interface ResultStatic {
    new (rs: types.ResultSet, info: ModelMappingInfo, rowAdapter: (row: types.Row, info: ModelMappingInfo) => { [key: string]: any }): Result;
  }
  interface Result {
    [Symbol.iterator](): Iterator<{ [key: string]: any }>;
    wasApplied(): boolean;
    first(): { [key: string]: any };
    toArray(): Array<{ [key: string]: any }>;
    forEach(callback: (currentValue: { [key: string]: any }, index: number) => void, thisArg?: any): void;
  }

  interface TableMappings {
    getColumnName(propName: string): string;
    getPropertyName(columnName: string): string;
    newObjectInstance(): { [key: string]: any };
  }

  interface DefaultTableMappingsStatic {
    new (): DefaultTableMappings;
  }
  interface DefaultTableMappings extends TableMappings {}
  interface UnderscoreCqlToCamelCaseMappingsStatic {
    new (): UnderscoreCqlToCamelCaseMappings;
  }
  interface UnderscoreCqlToCamelCaseMappings extends TableMappings {}
}

export namespace tracker {
  let RequestLogger: RequestLoggerStatic;

  interface RequestLoggerOptions {
    slowThreshold?: number;
    logNormalRequests?: boolean;
    logErroredRequests?: boolean;
    messageMaxQueryLength?: number;
    messageMaxParameterValueLength?: number;
    messageMaxErrorStackTraceLength?: number;
  }

  interface RequestTracker {
    onError(
      host: Host,
      query: string | Array<{ query: string, params?: any }>,
      parameters: any[] | { [key: string]: any } | null,
      executionOptions: ExecutionOptions,
      requestLength: number,
      err: Error,
      latency: number[]
    ): void;
    onSuccess(
      host: Host,
      query: string | Array<{ query: string, params?: any }>,
      parameters: any[] | { [key: string]: any } | null,
      executionOptions: ExecutionOptions,
      requestLength: number,
      responseLength: number,
      latency: number[]
    ): void;
    shutdown(): void;
  }

  interface RequestLoggerStatic {
    new (options: RequestLoggerOptions): RequestLogger;
  }
  interface RequestLogger extends RequestTracker {}
}

export namespace metrics {
  let DefaultMetrics: DefaultMetricsStatic;

  interface ClientMetrics {
    onAuthenticationError(e: Error | errors.AuthenticationError): void;
    onClientTimeoutError(e: errors.OperationTimedOutError): void;
    onClientTimeoutRetry(e: Error): void;
    onConnectionError(e: Error): void;
    onIgnoreError(e: Error): void;
    onOtherError(e: Error): void;
    onOtherErrorRetry(e: Error): void;
    onReadTimeoutError(e: errors.ResponseError): void;
    onReadTimeoutRetry(e: Error): void;
    onResponse(latency: number[]): void;
    onSpeculativeExecution(): void;
    onSuccessfulResponse(latency: number[]): void;
    onUnavailableError(e: errors.ResponseError): void;
    onUnavailableRetry(e: Error): void;
    onWriteTimeoutError(e: errors.ResponseError): void;
    onWriteTimeoutRetry(e: Error): void;
  }

  interface DefaultMetricsStatic {
    new (): DefaultMetrics;
  }
  interface DefaultMetrics extends ClientMetrics {}
}

export namespace token {
  interface Tokenizer {
    hash(value: Buffer | number[]): Token;
    parse(value: string): Token;
    minToken(): Token;
    split(start: Token, end: Token, numberOfSplits: number): TokenRange[];
    splitBase(start: number, end: number, ringEnd: number, ringLength: number, numberOfSplits: number): number[];
    stringify(token: Token): string;
  }

  class Token {
    constructor(value: any);

    getType(): { code: number, info: any };
    getValue(): any;
    compare(other: Token): number;
    equals(other: Token): boolean;
  }

  class TokenRange {
    start: Token;
    end: Token;

    constructor(start: Token, end: Token, tokenizer: Tokenizer);

    splitEvenly(numberOfSplits: number): TokenRange[];
    isEmpty(): boolean;
    isWrappedAround(): boolean;
    unwrap(): TokenRange[];
    contains(token: Token): boolean;
    equals(other: TokenRange): boolean;
    compare(other: TokenRange): number;
  }
}

export namespace concurrent {
  interface executeConcurrentOptions {
    executionProfile?: string;
    concurrencyLevel?: number;
    raiseOnFirstError?: boolean;
    collectResults?: boolean;
    maxErrors?: number;
  }

  function executeConcurrent(
    client: Client,
    query: string | Array<{ query: string; params?: any[] }>,
    parameters: any[][] | stream.Readable | { [key: string]: any },
    options?: executeConcurrentOptions,
  ): Promise<ResultSetGroup>;

  class ResultSetGroup {
    totalExecuted: number;
    errors: Error[];
    resultItems: any[];

    constructor(options: { collectResults: boolean; maxErrors?: number });
  }
}

export function defaultOptions(): ClientOptions;
export const version: string;
