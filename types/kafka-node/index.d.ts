// Type definitions for kafka-node 1.3.3
// Project: https://github.com/SOHU-Co/kafka-node/
// Definitions by: Daniel Imrie-Situnayake <https://github.com/dansitu/>, Bill <https://github.com/bkim54>, Michael Haan <https://github.com/sfrooster>, Amiram Korach <https://github.com/amiram>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// # Classes
export declare class Client {
    constructor(connectionString: string, clientId?: string, options?: ZKOptions, noBatchOptions?: AckBatchOptions, sslOptions?: any);
    close(callback?: Function): void;
    topicExists(topics: Array<string>, callback: (err?: TopicsNotExistError | any) => any): void;
    refreshMetadata(topics: Array<string>, cb?: (error?: any) => any): void;
    sendOffsetCommitV2Request(group: string, generationId: number, memberId: string, commits: Array<OffsetCommitRequest>, cb: Function): void;
}

export declare class KafkaClient extends Client {
    constructor(options?: KafkaClientOptions);
    connect(): void;
}

export declare class Producer {
    constructor(client: Client, options?: ProducerOptions, customPartitioner?: any);
    on(eventName: "ready", cb: () => any): void;
    on(eventName: "error", cb: (error: any) => any): void;
    send(payloads: Array<ProduceRequest>, cb: (error: any, data: any) => any): void;
    createTopics(topics: Array<string>, async: true, cb: (error?: any, data?: any) => any): void;
    createTopics(topics: Array<string>, async: false, cb: () => any): void;
    createTopics(topics: Array<string>, cb: (error?: any, data?: any) => any): void;
    close(): void;
}

export declare class HighLevelProducer extends Producer {
}

export declare class Consumer {
    constructor(client: Client, fetchRequests: Array<OffsetFetchRequest | string>, options: ConsumerOptions);
    client: Client;
    on(eventName: "message", cb: (message: Message) => any): void;
    on(eventName: "error" | "offsetOutOfRange", cb: (error: any) => any): void;
    addTopics(topics: Array<string> | Array<Topic>, cb: (error: any, added: Array<string> | Array<Topic>) => any): void;
    addTopics(topics: Array<string> | Array<Topic>, cb: (error: any, added: Array<string> | Array<Topic>) => any, fromOffset: boolean): void;
    removeTopics(topics: string | Array<string>, cb: (error: any, removed: number) => any): void;
    commit(cb: (error: any, data: any) => any): void;
    commit(force: boolean, cb: (error: any, data: any) => any): void;
    setOffset(topic: string, partition: number, offset: number): void;
    pause(): void;
    resume(): void;
    pauseTopics(topics: Array<any> /* Array<string|Topic> */): void;
    resumeTopics(topics: Array<any> /* Array<string|Topic> */): void;
    close(force: boolean, cb: () => any): void;
    close(cb: () => any): void;
}

export declare class HighLevelConsumer {
    constructor(client: Client, payloads: Array<Topic>, options: HighLevelConsumerOptions);
    client: Client;
    on(eventName: "message", cb: (message: Message) => any): void;
    on(eventName: "error" | "offsetOutOfRange", cb: (error: any) => any): void;
    addTopics(topics: Array<string> | Array<Topic>, cb?: (error: any, added: Array<string> | Array<Topic>) => any): void;
    removeTopics(topics: string | Array<string>, cb: (error: any, removed: number) => any): void;
    commit(cb: (error: any, data: any) => any): void;
    commit(force: boolean, cb: (error: any, data: any) => any): void;
    setOffset(topic: string, partition: number, offset: number): void;
    pause(): void;
    resume(): void;
    close(force: boolean, cb: () => any): void;
    close(cb: () => any): void;
}

export declare class ConsumerGroup extends HighLevelConsumer {
    constructor(options: ConsumerGroupOptions, topics: string[] | string);
    generationId: number;
    memberId: string;
}

export declare class Offset {
    constructor(client: Client);
    on(eventName: string, cb: () => any): void;
    fetch(payloads: Array<OffsetRequest>, cb: (error: any, data: any) => any): void;
    commit(groupId: string, payloads: Array<OffsetCommitRequest>, cb: (error: any, data: any) => any): void;
    fetchCommits(groupId: string, payloads: Array<OffsetFetchRequest>, cb: (error: any, data: any) => any): void;
    fetchLatestOffsets(topics: Array<string>, cb: (error: any, data: any) => any): void;
    fetchEarliestOffsets(topics: Array<string>, cb: (error: any, data: any) => any): void;
    on(eventName: string, cb: (error: any) => any): void;
}

export declare class KeyedMessage {
    constructor(key: string, message: string);
}

// # Interfaces

export interface Message {
  topic: string;
  value: string;
  offset?: number;
  partition?: number;
  highWaterOffset?: number;
  key?: number;
}

export interface ProducerOptions {
  requireAcks?: number;
  ackTimeoutMs?: number;
  partitionerType?: number;
}

export interface KafkaClientOptions {
    kafkaHost?: string;
    connectTimeout?: number;
    requestTimeout?: number;
    authConnect?: boolean;
    connectRetryOptions?: ConnectRetryOptions;
}

export interface ConnectRetryOptions {
    retries?: number;
    factor?: number;
    minTimeout?: number;
    maxTimeout?: number;
    randomize?: boolean;
}

export interface AckBatchOptions {
    noAckBatchSize: number | null,
    noAckBatchAge: number | null
}

export interface ZKOptions {
    sessionTimeout?: number;
    spinDelay?: number;
    retries?: number;
}

export interface ProduceRequest {
    topic: string;
    messages: any; // Array<string> | Array<KeyedMessage> | string | KeyedMessage
    key?: any;
    partition?: number;
    attributes?: number;
}

export interface ConsumerOptions {
    groupId?: string;
    autoCommit?: boolean;
    autoCommitIntervalMs?: number;
    fetchMaxWaitMs?: number;
    fetchMinBytes?: number;
    fetchMaxBytes?: number;
    fromOffset?: boolean;
    encoding?: string;
    keyEncoding?: string;
}

export interface HighLevelConsumerOptions extends ConsumerOptions {
  id?: string;
}

export interface CustomPartitionAssignmentProtocol {
    name: string;
    version: number;
    userData: {};
    assign: (topicPattern: any, groupMembers: any, callback: (error: any, result: any) => void) => void;
}

export interface ConsumerGroupOptions {
    host: string;
    zk?: ZKOptions;
    batch?: AckBatchOptions;
    ssl?: boolean;
    id?: string;
    groupId: string;
    sessionTimeout?: number;
    protocol?: Array<"roundrobin" | "range" | CustomPartitionAssignmentProtocol>;
    fromOffset?: "earliest" | "latest" | "none";
    migrateHLC?: boolean;
    migrateRolling?: boolean;
    autoCommit?: boolean;
    autoCommitIntervalMs?: number;
    fetchMaxWaitMs?: number;
    paused?: boolean;
    maxNumSegments?: number;
    fetchMinBytes?: number;
    fetchMaxBytes?: number;
    retries?: number;
    retryFactor?: number;
    retryMinTimeout?: number;
    connectOnReady?: boolean;
}

export interface Topic {
    topic: string;
    offset?: number;
    encoding?: string;
    autoCommit?: boolean;
}

export interface OffsetRequest {
    topic: string;
    partition?: number;
    time?: number;
    maxNum?: number;
}

export interface OffsetCommitRequest {
    topic: string;
    partition?: number;
    offset: number;
    metadata?: string;
}

export interface OffsetFetchRequest {
    topic: string;
    partition?: number;
    offset?: number;
}

export declare class TopicsNotExistError extends Error {
    topics: string | string[]
}
