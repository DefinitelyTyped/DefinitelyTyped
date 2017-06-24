// Type definitions for kafka-node 1.3.3
// Project: https://github.com/SOHU-Co/kafka-node/
// Definitions by: Daniel Imrie-Situnayake <https://github.com/dansitu/>, Bill <https://github.com/bkim54>, Michael Haan <https://github.com/sfrooster>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


// # Classes
export declare class Client {
    constructor(connectionString: string, clientId?: string, options?: ZKOptions);
    close(callback?: Function): void;
    topicExists(topics: Array<string>, callback: Function): void;
    refreshMetadata(topics: Array<string>, cb?: (error: any, data: any) => any): void;
    close(cb: (error: any) => any): void;
    sendOffsetCommitV2Request(group: string, generationId: number, memberId: string, commits: Array<OffsetCommitRequest>, cb: (error: any, data: any) => any): void;
}

export declare class Producer {
    constructor(client: Client, options?: any, customPartitioner?: any);
    on(eventName: string, cb: () => any): void;
    on(eventName: string, cb: (error: any) => any): void;
    send(payloads: Array<ProduceRequest>, cb: (error: any, data: any) => any): void;
    createTopics(topics: Array<string>, async: boolean, cb?: (error: any, data: any) => any): void;
    close(cb: (error: any) => any): void;
}

export declare class HighLevelProducer {
    constructor(client: Client, options?: any, customPartitioner?: any);
    on(eventName: string, cb: () => any): void;
    on(eventName: string, cb: (error: any) => any): void;
    send(payloads: Array<ProduceRequest>, cb: (error: any, data: any) => any): void;
    createTopics(topics: Array<string>, async: boolean, cb?: (error: any, data: any) => any): void;
    close(cb: (error: any) => any): void;
}

export declare class Consumer {
    constructor(client: Client, fetchRequests: Array<OffsetFetchRequest>, options: ConsumerOptions);
    client: Client;
    on(eventName: string, cb: (message: string) => any): void;
    on(eventName: string, cb: (error: any) => any): void;
    addTopics(topics: Array<string>, cb: (error: any, added: boolean) => any): void;
    addTopics(topics: Array<Topic>, cb: (error: any, added: boolean) => any, fromOffset: boolean): void;
    removeTopics(topics: Array<string>, cb: (error: any, removed: boolean) => any): void;
    commit(cb: (error: any, data: any) => any): void;
    setOffset(topic: string, partition: number, offset: number): void;
    pause(): void;
    resume(): void;
    pauseTopics(topics: Array<any> /* Array<string|Topic> */): void;
    resumeTopics(topics: Array<any> /* Array<string|Topic> */): void;
    close(force: boolean, cb: () => any): void;
}

export declare class HighLevelConsumer {
    constructor(client: Client, payloads: Array<Topic>, options: ConsumerOptions);
    client: Client;
    on(eventName: string, cb: (message: string) => any): void;
    on(eventName: string, cb: (error: any) => any): void;
    addTopics(topics: Array<string>, cb: (error: any, added: boolean) => any): void;
    addTopics(topics: Array<Topic>, cb: (error: any, added: boolean) => any, fromOffset: boolean): void;
    removeTopics(topics: Array<string>, cb: (error: any, removed: boolean) => any): void;
    commit(cb: (error: any, data: any) => any): void;
    setOffset(topic: string, partition: number, offset: number): void;
    pause(): void;
    resume(): void;
    pauseTopics(topics: Array<any> /* Array<string|Topic> */): void;
    resumeTopics(topics: Array<any> /* Array<string|Topic> */): void;
    close(force: boolean, cb: () => any): void;
}

export declare class ConsumerGroup extends HighLevelConsumer {
    constructor(options: ConsumerGroupOptions, topics: string[]);
    on(eventName: string, cb: (message: string) => any): void;
    on(eventName: string, cb: (error: any) => any): void;
    close(force: boolean, cb: (error: any) => any): void;
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
    id?: string;
    autoCommit?: boolean;
    autoCommitIntervalMs?: number;
    fetchMaxWaitMs?: number;
    fetchMinBytes?: number;
    fetchMaxBytes?: number;
    fromOffset?: boolean;
    encoding?: string;
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
    id: string;
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
