// Type definitions for kafkajs 1.8
// Project: https://github.com/tulios/kafkajs, https://kafka.js.org
// Definitions by: Michal Kaminski <https://github.com/michal-b-kaminski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

/// <reference types="node" />

import * as tls from "tls";
import * as net from "net";

export class Kafka {
    constructor(config: KafkaConfig);
    producer(config?: ProducerConfig): Producer;
    consumer(config?: ConsumerConfig): Consumer;
    admin(config?: AdminConfig): Admin;
    logger(): Logger;
}

export interface KafkaConfig {
    brokers: string[];
    ssl?: tls.SecureContextOptions;
    sasl?: SASLOptions;
    clientId?: string;
    connectionTimeout?: number;
    authenticationTimeout?: number;
    requestTimeout?: number;
    enforceRequestTimeout?: boolean;
    retry?: RetryOptions;
    socketFactory?: ISocketFactory;
    logLevel?: logLevel;
    logCreator?: logCreator;
}

export type ISocketFactory = (host: string, port: number, ssl: tls.SecureContextOptions, onConnect: () => void) => net.Socket;

export interface SASLOptions {
    mechanism: "plain" | "scram-sha-256" | "scram-sha-512";
    username: string;
    password: string;
}

export interface ProducerConfig {
    createPartitioner?: ICustomPartitioner;
    retry?: RetryOptions;
    metadataMaxAge?: number;
    allowAutoTopicCreation?: boolean;
    idempotent?: boolean;
    transactionalId?: string;
    transactionTimeout?: number;
    maxInFlightRequests?: number;
}

export type ICustomPartitioner = () => (
    message: { topic: string; partitionMetadata: PartitionMetadata[]; message: Message },
) => number;

export interface Message {
    key?: string | Buffer;
    value: string | Buffer | null;
    partition?: string | number;
    headers?: IHeaders;
    timestamp?: number | string;
}

export interface PartitionMetadata {
    partitionErrorCode: number;
    partitionId: number;
    leader: number;
    replicas: number[];
    isr: number[];
}

// tslint:disable-next-line:interface-name
export interface IHeaders {
    [key: string]: string;
}

export interface ConsumerConfig {
    groupId: string;
    partitionAssigners?: PartitionAssigner[];
    metadataMaxAge?: number;
    sessionTimeout?: number;
    rebalanceTimeout?: number;
    heartbeatInterval?: number;
    maxBytesPerPartition?: number;
    minBytes?: number;
    maxBytes?: number;
    maxWaitTimeInMs?: number;
    retry?: RetryOptions;
    allowAutoTopicCreation?: boolean;
    maxInFlightRequests?: number;
    readUncommitted?: boolean;
}

export interface PartitionAssigner {
    new (config: { cluster: Cluster }): Assigner;
}

export interface Cluster {
    isConnected(): void;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    refreshMetadata(): Promise<void>;
    refreshMetadataIfNecessary(): Promise<void>;
    addTargetTopic(topic: string): Promise<void>;
    findBroker(node: { nodeId: string }): Promise<Broker>;
    findControllerBroker(): Promise<Broker>;
    findTopicPartitionMetadata(topic: string): PartitionMetadata[];
    findLeaderForPartitions(topic: string, partitions: number[]): { [leader: string]: number[] };
    findGroupCoordinator(group: { groupId: string }): Promise<Broker>;
    findGroupCoordinatorMetadata(group: {
        groupId: string;
    }): Promise<{ errorCode: number; coordinator: { nodeId: number; host: string; port: number } }>;
    defaultOffset(config: { fromBeginning: boolean }): number;
    fetchTopicsOffset(
        topics: Array<{ topic: string; partitions: Array<{ partition: number }>; fromBeginning: boolean }>,
    ): Promise<{ topic: string; partitions: Array<{ partition: number; offset: string }> }>;
}

export interface Assignment { [topic: string]: number[]; }

export interface GroupMember { memberId: string; }

export interface GroupMemberAssignment { memberId: string; memberAssignment: Buffer; }

export interface GroupState { name: string; metadata: Buffer; }

export interface Assigner {
    name: string;
    version: number;
    assign(group: {
        members: GroupMember[];
        topics: string[],
        userData: Buffer,
    }): Promise<GroupMemberAssignment[]>;
    protocol(subscription: { topics: string[], userData: Buffer }): GroupState;
}

export interface RetryOptions {
    maxRetryTime?: number;
    initialRetryTime?: number;
    factor?: number;
    multiplier?: number;
    retries?: number;
}

export interface AdminConfig {
    retry?: RetryOptions;
}

// tslint:disable-next-line:interface-name
export interface ITopicConfig {
    topic: string;
    numPartitions?: number;
    replicationFactor?: number;
    replicaAssignment?: object[];
    configEntries?: object[];
}

// tslint:disable-next-line:interface-name
export interface ITopicMetadata {
    topic: string;
    partitions: PartitionMetadata[];
}

export enum ResourceType {
    UNKNOWN = 0,
    ANY = 1,
    TOPIC = 2,
    GROUP = 3,
    CLUSTER = 4,
    TRANSACTIONAL_ID = 5,
    DELEGATION_TOKEN = 6,
}

export interface ResourceConfigQuery {
    type: ResourceType;
    name: string;
    configNames: string[];
}

export interface ConfigEntries {
    configName: string;
    configValue: string;
    isDefault: boolean;
    isSensitive: boolean;
    readOnly: boolean;
    configSynonyms: ConfigSynonyms[];
}

export interface ConfigSynonyms {
    configName: string;
    configValue: string;
    configSource: number;
}

export interface DescribeConfigResponse {
    resources: Array<{
        configEntries: ConfigEntries[],
        errorCode: number,
        errorMessage: string,
        resourceName: string,
        resourceType: ResourceType,
    }>;
    throttleTime: number;
}

// tslint:disable-next-line:interface-name
export interface IResourceConfig {
    type: ResourceType;
    name: string;
    configEntries: Array<{ name: string, value: string }>;
}

export type ValueOf<T> = T[keyof T];

export interface AdminEvents {
    CONNECT: "admin.connect";
    DISCONNECT: "admin.disconnect";
    REQUEST: "admin.network.request";
    REQUEST_TIMEOUT: "admin.network.request_timeout";
    REQUEST_QUEUE_SIZE: "admin.network.request_queue_size";
}

export interface InstrumentationEvent<T> {
    id: string;
    type: string;
    timestamp: number;
    payload: T;
}

export type ConnectEvent = InstrumentationEvent<null>;
export type DisconnectEvent = InstrumentationEvent<null>;
export type RequestEvent = InstrumentationEvent<{
    apiKey: number,
    apiName: string,
    apiVersion: number,
    broker: string,
    clientId: string,
    correlationId: number,
    createdAt: number,
    duration: number,
    pendingDuration: number,
    sentAt: number,
    size: number,
}>;
export type RequestTimeoutEvent = InstrumentationEvent<{
    apiKey: number,
    apiName: string,
    apiVersion: number,
    broker: string,
    clientId: string,
    correlationId: number,
    createdAt: number,
    pendingDuration: number,
    sentAt: number,
}>;
export type RequestQueueSizeEvent = InstrumentationEvent<{
    broker: string,
    clientId: string,
    queueSize: number,
}>;

export interface SeekEntry {
    partition: number;
    offset: string;
}

export interface Admin {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    createTopics(options: {
        validateOnly?: boolean;
        waitForLeaders?: boolean;
        timeout?: number;
        topics: ITopicConfig[];
    }): Promise<boolean>;
    deleteTopics(topics: { topics: string[], timeout: number}): Promise<void>;
    fetchTopicMetadata(topicMetadata: ITopicMetadata): Promise<void>;
    fetchOffsets(topic: { groupId: string; topic: string }): Promise<Array<{ partition: number; offset: string }>>;
    fetchTopicOffsets(topic: string): Promise<void>;
    setOffsets(topic: { groupId: string; topic: string; partitions: SeekEntry[] }): Promise<void>;
    resetOffsets(topic: { groupId: string; topic: string; earliest: boolean }): Promise<void>;
    describeConfigs(configs: {
        resources: ResourceConfigQuery[],
        includeSynonyms: boolean,
    }): Promise<DescribeConfigResponse>;
    alterConfigs(configs: {
        validateOnly: boolean,
        resources: IResourceConfig[],
    }): Promise<any>;
    logger(): Logger;
    on(eventName: ValueOf<AdminEvents>, listener: (...args: any[]) => void): void;
    events: AdminEvents;
}

export const PartitionAssigners: { roundRobin: PartitionAssigner };

// tslint:disable-next-line:interface-name
export interface ISerializer<T> {
    encode(value: T): Buffer;
    decode(buffer: Buffer): T;
}

export interface MemberMetadata {
    version: number;
    topics: string[];
    userData: Buffer;
}

export interface MemberAssignment {
    version: number;
    assignment: Assignment;
    userData: Buffer;
}

export const AssignerProtocol: {
    MemberMetadata: ISerializer<MemberMetadata>;
    MemberAssignment: ISerializer<MemberAssignment>;
};

export type DefaultPartitioner = (
    message: { topic: string; partitionMetadata: PartitionMetadata[]; message: Message },
) => number;

export type JavaCompatiblePartitioner = (
    message: { topic: string; partitionMetadata: PartitionMetadata[]; message: Message },
) => number;

export const Partitioners: {
    DefaultPartitioner: DefaultPartitioner,
    JavaCompatiblePartitioner: JavaCompatiblePartitioner,
};

export enum logLevel {
    NOTHING = 0,
    ERROR = 1,
    WARN = 2,
    INFO = 4,
    DEBUG = 5,
}

export interface LogEntry { namespace: string; level: logLevel; label: string; log: string; }

export type Logger = (entry: LogEntry) => void;

export type logCreator = (logLevel: string) => (
    namespace: string, level: string, label: string, log: string,
) => void;

export interface Broker {
    isConnected(): boolean;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    apiVersions(): Promise<{ [apiKey: number]: { minVersion: number; maxVersion: number } }>;
    metadata(
        topics: string[],
    ): Promise<{
        brokers: Array<{ nodeId: number; host: string; port: number }>;
        topicMetadata: Array<{ topicErrorCode: number; topic: number; partitionMetadata: PartitionMetadata[] }>;
    }>;
    offsetCommit(request: {
        groupId: string;
        groupGenerationId: number;
        memberId: string;
        retentionTime?: number;
        topics: Array<{ topic: string; partitions: Array<{ partition: number; offset: string }> }>;
    }): Promise<any>;
}

export interface KafkaMessage {
    key: Buffer;
    value: Buffer;
    timestamp: string;
    size: number;
    attributes: number;
    offset: string;
    headers?: IHeaders;
}

export interface ProducerRecord {
    topic: string;
    messages: Message[];
    acks?: number;
    timeout?: number;
    compression?: CompressionTypes;
}

export interface RecordMetadata {
    topicName: string;
    partition: number;
    errorCode: number;
    offset: string;
    timestamp: string;
}

export interface TopicMessages {
    topic: string;
    messages: Message[];
}

export interface ProducerBatch {
    acks: number;
    timeout: number;
    compression: CompressionTypes;
    topicMessages: TopicMessages[];
}

export interface PartitionOffset {
    partition: number;
    offset: string;
}

export interface TopicOffsets {
    topic: string;
    partitions: PartitionOffset[];
}

export interface Offsets {
    topics: TopicOffsets[];
}

export interface Sender {
    send(record: ProducerRecord): Promise<RecordMetadata[]>;
    sendBatch(batch: ProducerBatch): Promise<RecordMetadata[]>;
}

export interface ProducerEvents {
    CONNECT: "producer.connect";
    DISCONNECT: "producer.disconnect";
    REQUEST: "producer.network.request";
    REQUEST_TIMEOUT: "producer.network.request_timeout";
    REQUEST_QUEUE_SIZE: "producer.network.request_queue_size";
}

export type Producer = Sender & {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    isIdempotent(): boolean;
    events: ProducerEvents;
    on(eventName: ValueOf<ProducerEvents>, listener: (...args: any[]) => void): void;
    transaction(): Promise<Transaction>;
    logger(): Logger;
};

export type Transaction = Sender & {
    sendOffsets(offsets: Offsets & { consumerGroupId: string }): Promise<void>;
    commit(): Promise<void>;
    abort(): Promise<void>;
    isActive(): boolean;
};

export interface ConsumerGroup {
    groupId: string;
    generationId: number;
    memberId: string;
    coordinator: Broker;
}

export interface MemberDescription {
    clientHost: string;
    clientId: string;
    memberId: string;
    memberAssignment: Buffer;
    memberMetadata: Buffer;
}

export interface GroupDescription {
    groupId: string;
    members: MemberDescription[];
    protocol: string;
    protocolType: string;
    state: string;
}

export interface TopicPartitions { topic: string; partitions: number[]; }

export interface Batch {
    topic: string;
    partition: number;
    highWatermark: string;
    messages: KafkaMessage[];
    isEmpty(): boolean;
    firstOffset(): string | null;
    lastOffset(): string;
    offsetLag(): string;
}

export interface ConsumerEvents {
    HEARTBEAT: "consumer.heartbeat";
    COMMIT_OFFSETS: "consumer.commit_offsets";
    GROUP_JOIN: "consumer.group_join";
    FETCH: "consumer.fetch";
    START_BATCH_PROCESS: "consumer.start_batch_process";
    END_BATCH_PROCESS: "consumer.end_batch_process";
    CONNECT: "consumer.connect";
    DISCONNECT: "consumer.disconnect";
    STOP: "consumer.stop";
    CRASH: "consumer.crash";
    REQUEST: "consumer.network.request";
    REQUEST_TIMEOUT: "consumer.network.request_timeout";
    REQUEST_QUEUE_SIZE: "consumer.network.request_queue_size";
}
export type ConsumerHeartbeatEvent = InstrumentationEvent<{
    groupId: string,
    memberId: string,
    groupGenerationId: number,
}>;
export type ConsumerCommitOffsetsEvent = InstrumentationEvent<{
    groupId: string,
    memberId: string,
    groupGenerationId: number,
    topics: Array<{
        topic: string,
        partitions: Array<{
            offset: string,
            partition: string,
        }>
    }>,
}>;
// tslint:disable-next-line:interface-name
export interface IMemberAssignment {
    [key: string]: number[];
}
export type ConsumerGroupJoinEvent = InstrumentationEvent<{
    duration: number,
    groupId: string,
    isLeader: boolean,
    leaderId: string,
    groupProtocol: string,
    memberId: string,
    memberAssignment: IMemberAssignment;
}>;
export type ConsumerFetchEvent = InstrumentationEvent<{
    numberOfBatches: number,
    duration: number,
}>;

// tslint:disable-next-line:interface-name
export interface IBatchProcessEvent {
    topic: string;
    partition: number;
    highWatermark: string;
    offsetLag: string;
    batchSize: number;
    firstOffset: string;
    lastOffset: string;
}
export type ConsumerStartBatchProcessEvent = InstrumentationEvent<IBatchProcessEvent>;
export type ConsumerEndBatchProcessEvent = InstrumentationEvent<IBatchProcessEvent & { duration: number }>;
export type ConsumerCrashEvent = InstrumentationEvent<{
    error: Error,
    groupId: string,
}>;

export interface Consumer {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    subscribe(topic: { topic: string; fromBeginning?: boolean }): Promise<void>;
    stop(): Promise<void>;
    run(config?: {
        autoCommit?: boolean;
        autoCommitInterval?: number | null;
        autoCommitThreshold?: number | null;
        eachBatchAutoResolve?: boolean;
        partitionsConsumedConcurrently?: number;
        eachBatch?: (
            batch: {
                batch: Batch;
                resolveOffset(offset: string): void;
                heartbeat(): Promise<void>;
                commitOffsetsIfNecessary(offsets?: Offsets): Promise<void>;
                uncommittedOffsets(): Promise<void>;
                isRunning(): boolean;
            },
        ) => Promise<void>;
        eachMessage?: (message: { topic: string; partition: number; message: KafkaMessage }) => Promise<void>;
    }): Promise<void>;
    seek(topicPartition: { topic: string; partition: number; offset: string }): void;
    describeGroup(): Promise<GroupDescription>;
    pause(topicPartitions: TopicPartitions[]): void;
    resume(topicPartitions: TopicPartitions[]): void;
    on(eventName: ValueOf<ConsumerEvents>, listener: (...args: any[]) => void): void;
    logger(): Logger;
    events: ConsumerEvents;
}

export enum CompressionTypes {
    None = 0,
    GZIP = 1,
    Snappy = 2,
    LZ4 = 3,
    ZSTD = 4,
}

export const CompressionCodecs: {
    [CompressionTypes.GZIP]: () => any;
    [CompressionTypes.Snappy]: () => any;
    [CompressionTypes.LZ4]: () => any;
    [CompressionTypes.ZSTD]: () => any;
};
