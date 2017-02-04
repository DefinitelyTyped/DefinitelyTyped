// Type definitions for kafka-node 1.3.0
// Project: https://github.com/SOHU-Co/kafka-node/
// Definitions by: Daniel Imrie-Situnayake <https://github.com/dansitu/>, Nathan <https://github.com/nathanph>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


// # Classes
export declare class Client {
    constructor(connectionString: string, clientId: string, options?: ZKOptions);
    close(callback?: Function): void;
    topicExists(topics: Array<string>, callback: Function): void;
}

export declare class Producer {
    constructor(client: Client);
    on(eventName: string, cb: () => any): Producer;
    on(eventName: string, cb: (error: any) => any): Producer;
    send(payloads: Array<ProduceRequest>, cb: (error: any, data: any) => any): void;
    createTopics(topics: Array<string>, async: boolean, cb?: (error: any, data: any) => any): void;
}

export declare class HighLevelProducer {
    constructor(client: Client);
    on(eventName: string, cb: () => any): HighLevelProducer;
    on(eventName: string, cb: (error: any) => any): HighLevelProducer;
    send(payloads: Array<ProduceRequest>, cb: (error: any, data: any) => any): void;
    createTopics(topics: Array<string>, async: boolean, cb?: (error: any, data: any) => any): void;
}

export declare class Consumer {
    constructor(client: Client, fetchRequests: Array<FetchRequest>, options: ConsumerOptions);
    on(eventName: string, cb: (message: string) => any): Consumer;
    on(eventName: string, cb: (error: any) => any): Consumer;
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
    on(eventName: string, cb: (message: string) => any): HighLevelConsumer;
    on(eventName: string, cb: (error: any) => any): HighLevelConsumer;
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

export declare class ConsumerGroup {
    constructor(options: ConsumerGroupOptions, topics: string[] | string)
    on(eventName: string, cb: (message: string) => any): ConsumerGroup;
    on(eventName: string, cb: (error: any) => any): ConsumerGroup;
    commit(cb: (error: any, data: any) => any): void;
    close(force: boolean, cb: () => any): void;
}

export declare class Offset {
    constructor(client: Client);
    on(eventName: string, cb: () => any): Offset;
    fetch(payloads: Array<OffsetRequest>, cb: (error: any, data: any) => any): void;
    commit(groupId: string, payloads: Array<OffsetCommitRequest>, cb: (error: any, data: any) => any): void;
    fetchCommits(groupId: string, payloads: Array<OffsetFetchRequest>, cb: (error: any, data: any) => any): void;
    fetchLatestOffsets(topics: Array<string>, cb: (error: any, data: any) => any): void;
    on(eventName: string, cb: (error: any) => any): Offset;
}

export declare class KeyedMessage {
    constructor(key: string, message: string);
}

// # Interfaces
export interface ZKOptions {
    sessionTimeout?: number;
    spinDelay?: number;
    retries?: number;
}

export interface ProduceRequest {
    topic: string;
    messages: any; // Array<string> | Array<KeyedMessage> | string | KeyedMessage
    key?: string;
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
}

export interface ConsumerGroupOptions {
    // DOCUMENTED OPTIONS
    host: string;               // example: 'zookeeper:2181',
    zk?: ZKOptions;             // put client zk settings if you need them (see Client)
    batch?: any;                // put client batch settings if you need them (see Client)
    ssl?: boolean;              // optional (defaults to false) or tls options hash
    groupId?: string;           // default: 'kafka-node-group'
    sessionTimeout?: number;    // default: 30000
    protocol?: string[];        // default: ['roundrobin']
    fromOffset?: string;        // default: 'latest'
    outOfRangeOffset?: string;  // default: 'earliest'
    migrateHLC?: false;         // default: false
    migrateRolling?: true;      // default: true

    // UNDOCUMENTED OPTIONS
    // Auto commit config
    autoCommit?: boolean;            // default: true
    autoCommitIntervalMs?: number;   // default: 5000
    // Fetch message config
    fetchMaxWaitMs?: number;         // default: 100
    paused?: boolean;                // default: false
    maxNumSegments?: number;         // default: 1000
    fetchMinBytes?: number;          // default: 1
    fetchMaxBytes?: number ;         // default: 1048576 (1024 * 1024)
    maxTickMessages?: number;        // default: 1000
    retries?: number;                // default: 10
    retryFactor?: number;            // default: 1.8
    retryMinTimeout?: number;        // default 1000
    connectOnReady?: boolean;        // default: true
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
}

export interface FetchRequest {
    topic: string;
    offset?: number;
}

