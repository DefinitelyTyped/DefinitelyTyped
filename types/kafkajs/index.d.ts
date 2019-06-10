// Type definitions for kafkajs 1.8
// Project: https://github.com/tulios/kafkajs, https://kafka.js.org
// Definitions by: Michal Kaminski <https://github.com/michal-b-kaminski>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

/// <reference types="node" />

import * as tls from "tls";

export class Kafka {
    constructor(options: KafkaOptions);

    producer(options?: ProducerOptions): Producer;
    consumer(options?: ConsumerOptions): Consumer;
    admin(options?: AdminOptions): Admin;
}

export const PartitionAssigners: {
    roundRobin: PartitionAssigner;
};

export namespace AssignerProtocol {
    interface MemberMetadataOptions {
        version: number;
        topics: string[];
        userData?: Buffer;
    }

    interface MemberMetadata {
        encode(options: MemberMetadataOptions): Buffer;
        decode(buffer: Buffer): MemberMetadataOptions;
    }

    interface MemberAssignmentOptions {
        version: number;
        assignment: { [key: string]: number[] };
        userData?: Buffer;
    }

    interface MemberAssignment {
        encode(options: MemberAssignmentOptions): Buffer;
        decode(buffer: Buffer): MemberAssignmentOptions;
    }

    interface AssignerProtocolStatic {
        MemberMetadata: MemberMetadata;
        MemberAssignment: MemberAssignment;
    }
}

export const AssignerProtocol: AssignerProtocol.AssignerProtocolStatic;

export enum CompressionTypes {
    None = 0,
    GZIP = 1,
    Snappy = 2,
    LZ4 = 3,
    ZSTD = 4
}

export const CompressionCodecs: { [key in CompressionTypes]: () => any };

export enum ResourceTypes {
    UNKNOWN = 0,
    ANY = 1,
    TOPIC = 2,
    GROUP = 3,
    CLUSTER = 4,
    TRANSACTIONAL_ID = 5,
    DELEGATION_TOKEN = 6
}

export interface LoggerMessage {
    /** @var namespace Context from which the logger was called. */
    readonly namespace: string;

    /** @var level Logger level. */
    readonly level: logLevel;

    /** @var label Logger level label. */
    readonly label: string;

    /** @var log Content of the logger entry. */
    readonly log: LoggerMessageContent;
}

export interface LoggerMessageContent {
    /** @var timestamp Message timestamp. */
    readonly timestamp: Date;

    /** @var message Message sent to the logger. */
    readonly message: string;

    // Other possible fields in the content, that depend on the context.
    [key: string]: any;
}

export interface KafkaOptions {
    clientId?: string;
    brokers: string[];
    ssl?: tls.ConnectionOptions;
    sasl?: SASLOptions;
    connectionTimeout?: number;
    requestTimeout?: number;
    retry?: RetryOptions;
    logLevel?: logLevel;
    logCreator?: () => (message: LoggerMessage) => void;
}

export interface SASLOptions {
    mechanism: "plain" | "scram-sha-256" | "scram-sha-512";
    username: string;
    password: string;
}

export interface RetryOptions {
    maxRetryTime?: number;
    initialRetryTime?: number;
    factor?: number;
    multiplier?: number;
    retries?: number;
    maxInFlightRequests?: number | null;
}

export enum logLevel {
    NOTHING = 0,
    ERROR = 1,
    WARN = 2,
    INFO = 4,
    DEBUG = 5
}

export interface Producer {
    connect(): Promise<void>;
    disconnect(): Promise<void>;

    send(payload: MessagePayload): Promise<void>;
    sendBatch(payload: MessageBatchPayload): Promise<void>;

    transaction(): Promise<Transaction>;

    events: ProducerEvents;
    on(
        event: ProducerEvents[keyof ProducerEvents],
        cb: (e: InstrumentationEvent) => void
    ): () => Producer;
}

export interface ProducerOptions {
    createPartitioner?: () => (options: {
        topic: string;
        partitionMetadata: PartitionMetadata[];
        message: ProducerMessage;
    }) => number;
    retry?: RetryOptions;
    metadataMaxAge?: number;
    allowAutoTopicCreation?: boolean;
    transactionTimeout?: number;
    idempotent?: boolean;
}

export interface PartitionerPartitionMetadata {
    partitionId: number;
    leader: number;
}

export interface PartitionMetadata {
    partitionId: number;
    leader: number;
    partitionErrorCode?: number;
    replicas?: number[];
    isr?: number[];
}

export interface MessagePayloadBase {
    acks?: AcksBehaviour;
    timeout?: number;
    compression?: CompressionTypes;
}

export interface MessagePayload extends MessagePayloadBase {
    topic: string;
    messages: ProducerMessage[];
    transactionTimeout?: number;
    idempotent?: boolean;
}

export interface MessageBatchPayload extends MessagePayloadBase {
    topicMessages: ProducerTopicMessage[];
}

export interface ProducerMessage {
    partition?: number;
    key?: string;
    value: string | Buffer | ArrayBuffer;
    headers?: { [key: string]: string };
}

export interface ProducerTopicMessage {
    topic: string;
    messages: ProducerMessage[];
}

export enum AcksBehaviour {
    All = -1,
    No = 0,
    Leader = 1
}

export interface Transaction {
    send(payload: MessagePayload): Promise<void>;
    sendBatch(payload: MessageBatchPayload): Promise<void>;

    sendOffsets(offsets: TransactionSendOffsets): Promise<void>;

    commit(): Promise<void>;
    abort(): Promise<void>;
}

export interface TransactionSendOffsets {
    consumerGroupId: string;
    topics: TransactionSendOffsetsTopic[];
}

export interface TransactionSendOffsetsTopic {
    topic: string;
    partitions: TransactionSendOffsetsTopicPartitions[];
}

export interface TransactionSendOffsetsTopicPartitions {
    partition: number;
    offset: string;
}

export interface Consumer {
    connect(): Promise<void>;
    disconnect(): Promise<void>;

    subscribe(options: ConsumerSubscribeOptions): Promise<void>;

    run(options: ConsumerRunOptions): Promise<void>;

    pause(topics: Array<{ topic: string }>): void;
    resume(topics: Array<{ topic: string }>): void;
    seek(options: ConsumerSeekOptions): void;

    describeGroup(): Promise<GroupMetadata>;

    events: ConsumerEvents;
    on(
        event: ConsumerEvents[keyof ConsumerEvents],
        cb: (e: InstrumentationEvent) => void
    ): () => Consumer;
}

export interface ConsumerOptions {
    groupId: string;
    partitionAssigners?: PartitionAssigner[];
    sessionTimeout?: number;
    heartbeatInterval?: number;
    metadataMaxAge?: number;
    allowAutoTopicCreation?: boolean;
    maxBytesPerPartition?: number;
    minBytes?: number;
    maxBytes?: number;
    maxWaitTimeInMs?: number;
    retry?: RetryOptions;
    readUncommitted?: boolean;
}

export interface PartitionAssigner {
    ({ cluster }: { cluster: any /* TODO */ }): {
        name: string;
        version: number;
        assign: (options: {
            members: Array<{ memberId: string }>;
            topics: any[];
            userData?: Buffer;
        }) => Promise<
            Array<{
                memberId: number;
                memberAssignment: Buffer;
            }>
        >;
        protocol?: (options: {
            topics: any /* TODO */;
        }) => { name: string; metadata: Buffer };
    };
}

export interface ConsumerRunOptions {
    eachMessage?: (payload: ConsumerEachMessagePayload) => Promise<void>;
    eachBatch?: (payload: ConsumerEachBatchPayload) => Promise<void>;
    eachBatchAutoResolve?: boolean;
    autoCommitInterval?: number;
    autoCommitThreshold?: number;
    autoCommit?: boolean;
}

export interface ConsumerSubscribeOptions {
    topic: string;
    fromBeginning?: boolean;
}

export interface ConsumerMessage {
    timestamp: number;
    key: string;
    value: Buffer;
    headers: { [key: string]: string };
    offset: number;
}

export interface ConsumerBatch {
    topic: string;
    partition: number;
    highWatermark: number;
    messages: ConsumerMessage[];
}

export interface ConsumerEachMessagePayload {
    topic: string;
    partition: number;
    message: ConsumerMessage;
}

export interface ConsumerEachBatchPayload {
    batch: ConsumerBatch;
    resolveOffset: (offset: number) => Promise<void>;
    heartbeat: () => Promise<void>;
    isRunning: () => boolean;
    commitOffsetsIfNecessary: (
        offsets?: OffsetsByTopicPartition
    ) => Promise<void>;
    uncommittedOffsets: () => OffsetsByTopicPartition;
}

export interface OffsetsByTopicPartition {
    topics: TopicOffsets[];
}

export interface TopicOffsets {
    partitions: PartitionOffset[];
}

export interface PartitionOffset {
    partition: string;
    offset: string;
}

export interface ConsumerSeekOptions {
    topic: string;
    partition: number;
    offset: number;
}

export interface GroupMemberMetadata {
    memberId: string;
    clientId: string;
    clientHost: string;
    memberMetadata: Buffer;
    memberAssignment: Buffer;
}

export interface GroupMetadata {
    errorCode: number;
    groupId: string;
    protocolType: string;
    protocol: string;
    members: GroupMemberMetadata[];
    state: string;
}

export interface Admin {
    connect(): Promise<void>;
    disconnect(): Promise<void>;

    createTopics(options: AdminCreateTopicsOptions): Promise<void>;
    deleteTopics(options: AdminDeleteTopicsOptions): Promise<void>;
    getTopicMetadata(options: {
        topics?: string[];
    }): Promise<{ topics: TopicMetadata[] }>;

    fetchOffsets(
        options: AdminFetchOffsetsOptions
    ): Promise<AdminTopicOffset[]>;
    resetOffsets(options: AdminResetOffsetsOptions): Promise<void>;
    setOffsets(options: AdminSetOffsetsOptions): Promise<void>;

    describeConfigs(
        options: AdminDescribeConfigsOptions
    ): Promise<AdminConfigDescription>;
    alterConfigs(options: AdminAlterConfigsOptions): Promise<void>;

    events: AdminEvents;
    on(
        event: AdminEvents[keyof AdminEvents],
        cb: (e: InstrumentationEvent) => void
    ): () => Admin;
}

export interface AdminOptions {
    retry?: RetryOptions;
}

export interface AdminCreateTopicsOptions {
    validateOnly?: boolean;
    waitForLeaders?: boolean;
    timeout?: number;
    topics: AdminTopic[];
}

export interface AdminTopic {
    topic: string;
    numPartitions?: number;
    replicationFactor?: number;
    replicaAssignment?: AdminTopicReplicaAssignment[];
    configEntries?: AdminTopicConfigEntry[];
}

export interface AdminTopicReplicaAssignment {
    partition: number;
    replicas: number[];
}

export interface AdminTopicConfigEntry {
    name: string;
    value: string;
}

export interface AdminDeleteTopicsOptions {
    timeout?: number;
    topics: string[];
}

export interface AdminFetchOffsetsOptions {
    groupId: string;
    topic: string;
}

export interface AdminResetOffsetsOptions {
    groupId: string;
    topic: string;
    earliest?: boolean;
}

export interface TopicMetadata {
    name: string;
    partitions: PartitionMetadata[];
}

export interface AdminDescribeConfigsOptions {
    resources: ResourceConfigQuery[];
}

export interface ResourceConfigQuery {
    type: ResourceTypes;
    name: string;
    configNames?: string[];
}

export interface AdminConfigDescription {
    resources: AdminConfigDescriptionResource[];
    throttleTime: number;
}

export interface AdminConfigDescriptionResource {
    configEntries: AdminConfigDescriptionResourceConfigEntry[];
    errorCode: number;
    errorMessage: string;
    resourceName: string;
    resourceType: ResourceTypes;
}

export interface AdminConfigDescriptionResourceConfigEntry {
    configName: string;
    configValue: string;
    isDefault: boolean;
    isSensitive: boolean;
    readOnly: boolean;
}

export interface AdminAlterConfigsOptions {
    validateOnly: boolean;
    resources: ResourceConfigQuery[];
}

export interface ResourceConfigQuery {
    type: ResourceTypes;
    name: string;
    configEntries: ResourceConfigEntry[];
}

export interface ResourceConfigEntry {
    name: string;
    value: string;
}

export interface AdminAlterConfigReturn {
    resources: AdminAlterConfigResource[];
    throttleTime: number;
}

export interface AdminAlterConfigResource {
    errorCode: number;
    errorMessage: string;
    resourceName: string;
    resourceType: ResourceTypes;
}

export interface AdminTopicOffset {
    partition: number;
    offset: string;
}

export interface AdminSetOffsetsSeekEntry {
    partition: number;
    offset: string;
}

export interface AdminSetOffsetsOptions {
    groupId: string;
    topic: string;
    partitions: AdminSetOffsetsSeekEntry[];
}

export interface InstrumentationEvent {
    id: number;
    type: string;
    timestamp: number;
    payload: { [key: string]: any };
}

export interface ConsumerEvents {
    HEARTBEAT: "consumer.heartbeat";
    COMMIT_OFFSETS: "consumer.commit_offsets";
    GROUP_JOIN: "consumer.group_join";
    FETCH: "consumer.fetch";
    START_BATCH_PROCESS: "consumer.start_batch_process";
    END_BATCH_PROCESS: "consumner.end_batch_process";
    CONNECT: "consumer.connect";
    DISCONNECT: "consumer.disconnect";
    STOP: "consumer.stop";
    CRASH: "consumer.crash";
    REQUEST: "consumer.request";
    REQUEST_TIMEOUT: "consumer.request_timeout";
    REQUEST_QUEUE_SIZE: "consumer.request_queue_size";
}

export interface ProducerEvents {
    CONNECT: "producer.connect";
    DISCONNECT: "producer.disconnect";
    REQUEST: "producer.request";
    REQUEST_TIMEOUT: "producer.request_timeout";
    REQUEST_QUEUE_SIZE: "producer.request_queue_size";
}

export interface AdminEvents {
    CONNECT: "admin.connect";
    DISCONNECT: "admin.disconnect";
    REQUEST: "admin.request";
    REQUEST_TIMEOUT: "admin.request_timeout";
    REQUEST_QUEUE_SIZE: "admin.request_queue_size";
}
