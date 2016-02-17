// Type definitions for kafka-node 0.2.22
// Project: https://github.com/SOHU-Co/kafka-node/
// Definitions by: Daniel Imrie-Situnayake <https://github.com/dansitu/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'kafka-node' {

    // # Classes
    export class Client {
        constructor(connectionString: string, clientId: string, options?: ZKOptions);
        close(callback?: Function): void;
    }

    export class Producer {
        constructor(client: Client);
        on(eventName: string, cb: () => any): void;
        on(eventName: string, cb: (error: any) => any): void;
        send(payloads: Array<ProduceRequest>, cb: (error: any, data: any) => any): void;
        createTopics(topics: Array<string>, async: boolean, cb?: (error: any, data: any) => any): void;
    }

    export class HighLevelProducer {
        constructor(client: Client);
        on(eventName: string, cb: () => any): void;
        on(eventName: string, cb: (error: any) => any): void;
        send(payloads: Array<ProduceRequest>, cb: (error: any, data: any) => any): void;
        createTopics(topics: Array<string>, async: boolean, cb?: (error: any, data: any) => any): void;
    }

    export class Consumer {
        constructor(client: Client, fetchRequests: Array<Topic>, options: ConsumerOptions);
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

    export class HighLevelConsumer {
        constructor(client: Client, payloads: Array<Topic>, options: ConsumerOptions);
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

    export class Offset {
        constructor(client: Client);
        on(eventName: string, cb: () => any): void;
        fetch(payloads: Array<OffsetRequest>, cb: (error: any, data: any) => any): void;
        commit(groupId: string, payloads: Array<OffsetCommitRequest>, cb: (error: any, data: any) => any): void;
        fetchCommits(groupId: string, payloads: Array<OffsetFetchRequest>, cb: (error: any, data: any) => any): void;
    }

    export class KeyedMessage {
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

    export interface Topic {
        topic: string;
        offset?: number;
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

}
