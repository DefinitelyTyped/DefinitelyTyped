// Type definitions for nodejs-driver v0.8.2
// Project: https://github.com/datastax/nodejs-driver
// Definitions by: Marc Fisher <http://github.com/Svjard>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />
/// <reference path="../long/long.d.ts" />

declare module "cassandra-driver" {
  type Callback = Function;
  type ResultCallback = (err: Error, result: types.ResultSet) => void;

  import * as events from "events";
  import * as stream from "stream";
  import _Long = require("long");

  namespace policies {
    namespace addressResolution {
      var EC2MultiRegionTranslator: EC2MultiRegionTranslatorStatic;

      interface AddressTranslator {
        translate(address: string, port: number, callback: Callback): void;
      }

      interface EC2MultiRegionTranslatorStatic {
        new(): EC2MultiRegionTranslator;
      }

      interface EC2MultiRegionTranslator extends AddressTranslator {
        logError(address: string, err: Error): void;
      }
    }

    namespace loadBalancing {
      var DCAwareRoundRobinPolicy: DCAwareRoundRobinPolicyStatic;
      var RoundRobinPolicy: RoundRobinPolicyStatic;
      var TokenAwarePolicy: TokenAwarePolicyStatic;
      var WhiteListPolicy: WhiteListPolicyStatic;

      interface LoadBalancingPolicy {
        init(client: Client, hosts: HostMap, callback: Callback): void;
        getDistance(host: Host): types.distance;
        newQueryPlan(keyspace: string, queryOptions: any, callback: Callback): void;
      }

      interface DCAwareRoundRobinPolicyStatic {
        new(localDc?: string, usedHostsPerRemoteDc?: number): DCAwareRoundRobinPolicy;
      }

      interface DCAwareRoundRobinPolicy extends LoadBalancingPolicy {
        localHostsArray: Array<Host>;
        remoteHostsArray: Array<Host>;
      }

      interface RoundRobinPolicyStatic {
        new(): RoundRobinPolicy;
      }

      interface RoundRobinPolicy extends LoadBalancingPolicy {}

      interface TokenAwarePolicyStatic {
        new(childPolicy: LoadBalancingPolicy): TokenAwarePolicy;
      }

      interface TokenAwarePolicy extends LoadBalancingPolicy {}

      interface WhiteListPolicyStatic {
        new(childPolicy: LoadBalancingPolicy, whiteList: Array<string>): WhiteListPolicy;
      }

      interface WhiteListPolicy extends LoadBalancingPolicy {}
    }

    namespace reconnection {
      var ConstantReconnectionPolicy: ConstantReconnectionPolicyStatic;
      var ExponentialReconnectionPolicy: ExponentialReconnectionPolicyStatic;

      interface ReconnectionPolicy {
        newSchedule(): {next: Function};
      }

      interface ConstantReconnectionPolicyStatic {
        new(delay: number): ConstantReconnectionPolicy;
      }

      interface ConstantReconnectionPolicy extends ReconnectionPolicy {}

      interface ExponentialReconnectionPolicyStatic {
        new(baseDelay: number, maxDelay: number, startWithNoDelay: boolean): ExponentialReconnectionPolicy;
      }

      interface ExponentialReconnectionPolicy extends ReconnectionPolicy {}
    }

    namespace retry {
      var RetryPolicy: RetryPolicyStatic;

      interface DecisionInfo {
        decision: number;
        consistency: number;
      }

      interface RequestInfo {
        request: any,
        nbRetry: number
      }

      enum retryDecision {
        rethrow = 0,
        retry,
        ignore
      }

      interface RetryPolicyStatic {
        new (): RetryPolicy;

        retryDecision: any;
      }

      interface RetryPolicy {
        onReadTimeout(requestInfo: RequestInfo, consistency: types.consistencies, received: number, blockFor: number, isDataPresent: boolean): DecisionInfo;
        onUnavailable(requestInfo: RequestInfo, consistency: types.consistencies, required: number, alive: number): DecisionInfo;
        onWriteTimeout(requestInfo: RequestInfo, consistency: types.consistencies, received: number, blockFor: number, writeType: string): DecisionInfo;
        rethrowResult(): { decision: retryDecision };
        retryResult(): { decision: retryDecision, consistency: types.consistencies, useCurrentHost: boolean };
      }
    }
  }

  namespace types {
    var BigDecimal: BigDecimalStatic;
    var InetAddress: InetAddressStatic;
    var Integer: IntegerStatic;
    var LocalDate: LocalDateStatic;
    var LocalTime: LocalTimeStatic;
    var Long: _Long;
    var ResultSet: ResultSetStatic;
    var ResultStream: ResultStreamStatic;
    var Row: RowStatic;
    var TimeUuid: TimeUuidStatic;
    var Tuple: TupleStatic;
    var Uuid: UuidStatic;

    enum consistencies {
      any = 0,
      one,
      two,
      three,
      quorum,
      all,
      localQuorm,
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

    interface responseErrorCodes { [key:string]:number; }
    interface unset { unset: boolean; }

    function generateTimestamp(date?: Date, microseconds?: number): _Long;
    function timeuuid(options?: {msecs: number | Date, node: Buffer, clockseq: number, nsecs: number}, buffer?: Buffer, offset?: number): string;

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

    interface InetAddressStatic {
      new(buffer: Buffer): InetAddress;

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
      new(bits: Array<number>, sign: number): Integer;

      fromInt(value: number): Integer;
      fromNumber(value: number): Integer;
      fromBits(bits: Array<number>): Integer;
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
      new(year: number, month: number, day: number): LocalDate;

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
      new(response: any, host: string, triedHost: { [key:string]: any }, consistency: consistencies): ResultSet;
    }

    interface ResultSet {
      info: {
        queriedHost: Host,
        triedHosts: { [key:string]:string; },
        achievedConsistency: consistencies,
        traceId: Uuid,
        warnings: Array<string>,
        customPayload: any
      };
      rows: Array<Row>;
      rowLength: number;
      columns: Array<{ [key:string]:string; }>;
      pageState: string;
      nextPage: any; // function

      first(): Row;
      getPageState(): string;
      getColumns(): Array<{ [key:string]:string; }>;
    }

    interface ResultStreamStatic {
      new (opt: any): ResultSet;
    }

    interface ResultStream extends stream.Readable {
      buffer: Buffer;
      paused: boolean;

      _read(): void;
      _valve(readNext: Function): void;
      add(chunk: Buffer): void;
    }

    interface RowStatic {
      new(columns: Array<{ [key:string]:string; }>): Row;
    }

    interface Row {
      get(columnName: string|number): { [key:string]:any; };
      values(): Array<{ [key:string]:any; }>;
      keys(): Array<string>;
      forEach(callback: Callback): void;
    }

    interface TimeUuidStatic {
      new (value?: Date, ticks?: number, nodeId?: string|Buffer, clockId?: string|Buffer): TimeUuid;

      fromDate(date: Date, ticks?: number, nodeId?: string|Buffer, clockId?: string|Buffer): TimeUuid;
      fromString(value: string): TimeUuid;
      min(date: Date, ticks?: number): TimeUuid;
      max(date: Date, ticks?: number): TimeUuid;
      now(nodeId?: string|Buffer, clockId?: string|Buffer): TimeUuid;
    }

    interface TimeUuid extends Uuid {
      getDatePrecision(): { date: Date, ticks: number };
      getDate(): Date;
      getNodeId(): Buffer;
      getNodeIdString(): string;
    }

    interface TupleStatic {
      new (...arguments: Array<any>): Tuple;

      fromArray(elements: Array<any>): Tuple;
    }

    interface Tuple {
      elements: Array<any>;
      length: number;

      get(index: number): any;
      toString(): string;
      toJSON(): string;
      values(): Array<any>;
    }

    interface UuidStatic {
      new (buffer: Buffer): Uuid;

      fromString(value: string): Uuid;
      random(): Uuid;
    }

    interface Uuid {
      buffer: Buffer;

      getBuffer(): Buffer;
      equals(other: types.Uuid): boolean;
      toString(): string;
      inspect(): string;
      toJSON(): string;
    }
  }

  var Client: ClientStatic;
  var Host: HostStatic;
  var HostMap: HostMapStatic;
  var Encoder: EncoderStatic;

  interface ClientOptions {
    contactPoints: Array<string>,
    keyspace: string,
    policies?: {
      addressResolution?: policies.addressResolution.AddressTranslator,
      loadBalancing?: policies.loadBalancing.LoadBalancingPolicy,
      reconnection?: policies.reconnection.ReconnectionPolicy,
      retry?: policies.retry.RetryPolicy
    },
    queryOptions?: QueryOptions,
    pooling?: {
      heartBeatInterval: number,
      coreConnectionsPerHost: { [key:number]:number; },
      warmup: boolean;
    },
    protocolOptions?: {
      port: number,
      maxSchemaAgreementWaitSeconds: number,
      maxVersion: number
    },
    socketOptions?: {
      connectTimeout: number,
      defunctReadTimeoutThreshold: number,
      keepAlive: boolean,
      keepAliveDelay: number,
      readTimeout: number,
      tcpNoDelay: boolean,
      coalescingThreshold: number
    },
    authProvider?: auth.AuthProvider,
    sslOptions?: any,
    encoding?: {
      map: Function,
      set: Function,
      copyBuffer: boolean,
      useUndefinedAsUnset: boolean
    }
  }

  interface QueryOptions {
    autoPage?: boolean;
    captureStackTrace?: boolean;
    consistency?: number;
    customPayload?: any;
    fetchSize?: number;
    hints?: Array<string> | Array<Array<string>>;
    logged?: boolean;
    pageState?: Buffer|string;
    prepare?: boolean;
    readTimeout?: number;
    retry?: policies.retry.RetryPolicy;
    retryOnTimeout?: boolean;
    routingIndexes?: Array<number>;
    routingKey?: Buffer | Array<Buffer>;
    routingNames?: Array<string>;
    serialConsistency?: number;
    timestamp?: number | _Long;
    traceQuery?: boolean;
  }

  interface ClientStatic {
    new(options?: ClientOptions): Client;
  }

  interface Client extends events.EventEmitter {
    hosts: HostMap;
    keyspace: string;
    metadata: metadata.Metadata;

    batch(queries: Array<string>|Array<{query: string, params?: any}>, options: QueryOptions, callback: ResultCallback): void;
    connect(callback: Callback): void;
    eachRow(query: string, params?: any, options?: QueryOptions, rowCallback?: Callback, callback?: Callback): void;
    execute(query: string, params?: any, options?: QueryOptions, callback?: ResultCallback): void;
    getReplicas(keyspace: string, token: Buffer): Array<any>; // TODO: Should this be a more explicit return?
    shutdown(callback?: Callback): void;
    stream(query: string, params?: any, options?: QueryOptions, callback?: Callback): NodeJS.ReadableStream;
  }

  interface HostStatic {
    new(address: string, protocolVersion: number, options: ClientOptions): Host;
  }

  interface Host extends events.EventEmitter {
    address: string;
    cassandraVersion: string;
    dataCenter: string;
    rack: string;
    tokens: Array<string>;

    canBeConsideredAsUp(): boolean;
    getCassandraVersion(): Array<number>;
    isUp(): boolean;
  }

  interface HostMapStatic {
    new (): HostMap;
  }

  interface HostMap extends events.EventEmitter {
    length: number;

    forEach(callback: Callback): void;
    get(key: string): Host;
    keys(): Array<string>;
    remove(key: string): void;
    removeMultiple(keys: Array<string>): void;
    set(key: string, value: Host): void;
    values(): Array<Host>;
  }

  interface EncoderStatic {
    new(protocolVersion: number, options: ClientOptions) : Encoder;
  }

  interface Encoder {
    decode(buffer: Buffer, type: {code: number, info?: any}): void;
    encode(value: any, typeInfo?: string|number|{code: number, info?: any}): Buffer;
  }

  namespace auth {
    var Authenticator: AuthenticatorStatic;
    var PlainTextAuthProvider: PlainTextAuthProviderStatic;

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

  namespace errors {
    abstract class DriverError {
      constructor(message: string, constructor?: any);
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
    }

    class NotSupportedError extends DriverError {
      constructor(message: string);
    }

    class OperationTimedOutError extends DriverError {}

    class ResponseError extends DriverError {
      constructor(code: number, message: string);
    }
  }

  namespace metadata {
    var Aggregate: AggregateStatic;
    var Index: IndexStatic;
    var MaterializedView: MaterializedViewStatic;
    var Metadata: MetadataStatic;
    var SchemaFunction: SchemaFunctionStatic;
    var TableMetadata: TableMetadataStatic;

    type caching = "all" | "keys_only" | "rows_only" | "none";

    interface AggregateStatic {
      new (): Aggregate;
    }

    interface Aggregate {
      argumentTypes: Array<{ code: number, info: any}>;
      finalFunction: string;
      initCondition: string;
      keyspaceName: string,
      returnType: string;
      signature: Array<string>;
      stateFunction: string;
      stateType: string;
    }

    interface DataTypeInfo {
      code: number,
      info: string | DataTypeInfo | Array<DataTypeInfo>,
      options: {
        frozen: boolean,
        reversed: boolean
      }
    }

    interface ColumnInfo {
      name: string,
      type: DataTypeInfo
    }

    interface DataCollection {
      bloomFilterFalsePositiveChance: number;
      caching: caching;
      clusterKeys: Array<{ c: ColumnInfo, index: number, order: string }>;
      clusteringOrder: Array<string>;
      columns: Array<ColumnInfo>;
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
      partitionKeys: Array<{ c: ColumnInfo, index: number }>
      populateCacheOnFlush: boolean;
      readRepairChance: number;
      speculateRetry: string;
    }

    enum IndexType {
      custom = 0,
      keys,
      composites
    }

    interface IndexStatic {
      new (name: string, target: string, kind: IndexType, options: Object): Index;

      fromRows(indexRows: Array<types.Row>): Array<Index>;
      fromColumnRows(columnRows: Array<types.Row>, columnsByName: { [key:string]: ColumnInfo }): Array<Index>;
    }

    interface Index {
      kind: IndexType;
      name: string;
      options: Object;
      target: string;

      isCompositesKind(): boolean;
      isCustomKind(): boolean;
      isKeysKind(): boolean;
    }

    interface MaterializedViewStatic {
      new (name: string): MaterializedView;
    }

    interface MaterializedView extends DataCollection {}

    interface MetadataStatic {
      new (options: ClientOptions, controlConnection: any): Metadata;
    }

    interface Metadata {
      clearPrepared(): void;

      getAggregate(keyspaceName: string, name: string, signature: Array<string> | Array<{ code: number, info: any }>, callback: Callback): void;
      getAggregates(keyspaceName: string, name: string, callback: Callback): void;
      getFunction(keyspaceName: string, name: string, signature: Array<string> | Array<{ code: number, info: any }>, callback: Callback): void;
      getFunctions(keyspaceName: string, name: string, callback: Callback): void;
      getMaterializedView(keyspaceName: string, name: string, callback: Callback): void;
      getReplicas(keyspaceName: string, tokenBuffer: Buffer): Array<any>;
      getTable(keyspaceName: string, name: string, callback: Callback): void;
      getTrace(traceId: types.Uuid, callback: Callback): void;
      getUdt(keyspaceName: string, name: string, callback: Callback): void;
      refreshKeyspace(name: string, callback?: Callback): void;
      refreshKeyspaces(callback?: Callback): void;
    }

    interface SchemaFunctionStatic {
      new (): SchemaFunction;
    }

    interface SchemaFunction {
      argumentNames: Array<string>;
      argumentTypes: Array<{ code: number, info: any}>;
      body: string;
      calledOnNullInput: boolean;
      keyspaceName: string,
      language: string;
      name: string;
      returnType: string;
      signature: Array<string>;
    }

    interface TableMetadataStatic {
      new (name: string): TableMetadata;
    }

    interface TableMetadata extends DataCollection {
      indexes: Array<Index>;
      indexInterval?: number;
      isCompact: boolean;
      memtableFlushPeriod: number;
      replicateOnWrite: boolean;
    }
  }
}
