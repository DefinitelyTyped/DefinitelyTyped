// Type definitions for crimsonq 0.5
// Project: https://github.com/ywadi/crimsonqClient
// Definitions by: AsharDweedar <https://github.com/AsharDweedar>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as IORedis from 'ioredis';
import { EventEmitter } from 'events';

declare class CrimsonQClient {
    constructor(ConnectionSettings: IORedis.RedisOptions);
    redisCommander: typeof IORedis;
    redisSubscriber: typeof IORedis;
    command: Command;
    connect(): Promise<{ value: string; error: Error }>;
    Producer(): Producer;
    Consumer(consumerId: string): Consumer;
}

// declare var CrimsonQ: CrimsonQClient;
export = CrimsonQClient;

interface CommandResult { value: string | string[]; error: typeof Error; }

declare class Producer {
    constructor(cqClient: CrimsonQClient);
    pushToConsumer(consumerId: string, message: {}): Promise<CommandResult | typeof Error>;
    pushToTopic(topic: string, message: {}): Promise<CommandResult | typeof Error>;
    ping(consumerId: string, message: {}): Promise<CommandResult | typeof Error>;
}
declare class CrimsonQEventEmitter extends EventEmitter {
    on(eventName: string | symbol, listener: (msg: RecievedMessage) => void): this;
}

declare class Consumer {
    constructor(cqClient: CrimsonQClient, consumerId: string);
    cqClient: CrimsonQClient;
    consumerId: string;
    events: CrimsonQEventEmitter;
    init(topics: ReadonlyArray<string>, concurrency: number): Promise<Error | undefined>;
    getTopics(): Promise<CommandResult | typeof Error>;
    setTopics(topics: ReadonlyArray<string>): Promise<CommandResult | typeof Error>;
    messageCountByStatus(): Promise<CommandResult | typeof Error>;
    pull(): Promise<RecievedMessage | string | Error>;
    completeMessage(messageId: string): Promise<CommandResult | typeof Error>;
    flushMessages(status: 'failed' | 'completed'): Promise<CommandResult | typeof Error>;
    retryMessages(messageId?: string): Promise<CommandResult | typeof Error>;
    failMessage(messageId: string, errorMessage: string): Promise<CommandResult | typeof Error>;
    updateConcurrency(concurrency: number): Promise<CommandResult | typeof Error>;
    concurrencyOk(concurrency: number): Promise<boolean>;
    ping(): Promise<CommandResult | typeof Error>;
    Subscribe(): Promise<void>;
}

declare class RecievedMessage {
    constructor(consumer: Consumer, key: string, message: object);
    consumer: Consumer;
    key: string;
    message: {
      key: string;
      topic: string;
      value: string;
      status: string;
      statusHistory: object[];
    };
    done(): Promise<CommandResult | typeof Error | undefined>;
    fail(errorMessage: string): Promise<CommandResult | typeof Error | undefined>;
}

interface Command {
    msg_push_consumer(consumerId: string, message: {}): Promise<CommandResult | typeof Error>;
    msg_push_topic(topic: string, message: {}): Promise<CommandResult | typeof Error>;
    consumer_exists(consumerId: string): Promise<CommandResult | typeof Error>;
    consumer_create(consumerId: string, topics: ReadonlyArray<string>, concurrency: number): Promise<CommandResult | typeof Error>;
    consumer_topics_set(consumerId: string, topics: ReadonlyArray<string>): Promise<CommandResult | typeof Error>;
    consumer_concurrency_set(consumerId: string, concurrency: number): Promise<CommandResult | typeof Error>;
    consumer_topics_get(consumerId: string): Promise<CommandResult | typeof Error>;
    msg_counts(consumerId: string): Promise<CommandResult | typeof Error>;
    msg_complete(consumerId: string, key: string): Promise<CommandResult | typeof Error>;
    msg_fail(consumerId: string, key: string, errorMessage: string): Promise<CommandResult | typeof Error>;
    consumer_flush_failed(consumerId: string, messageId: string): Promise<CommandResult | typeof Error>;
    consumer_flush_completed(consumerId: string): Promise<CommandResult | typeof Error>;
    msg_retry(consumerId: string, messageId: string): Promise<CommandResult | typeof Error>;
    msg_retryall(consumerId: string): Promise<CommandResult | typeof Error>;
    consumer_concurrency_ok(consumerId: string): Promise<CommandResult | typeof Error>;
}
