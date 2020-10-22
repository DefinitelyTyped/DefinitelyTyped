// Type definitions for jackrabbit 4.3
// Project: https://github.com/hunterloftis/jackrabbit
// Definitions by: Elvis Adomnica <https://github.com/elvisvoer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import { Connection, Options, Message } from 'amqplib';

declare namespace jackrabbit {
    function jackrabbit(url: string): JackRabbit;

    interface JackRabbit extends NodeJS.EventEmitter {
        default(): Exchange;
        direct(name?: string): Exchange;
        fanout(name?: string): Exchange;
        topic(name?: string): Exchange;
        close(callback: (e: Error) => any): void;
        getInternals: () => {
            amqp: any;
            connection: Connection;
        };
    }

    enum exchangeType {
        direct = 'direct',
        fanout = 'fanout',
        topic = 'topic',
    }

    interface Exchange extends NodeJS.EventEmitter {
        name: string;
        type: exchangeType;
        options: Options.AssertExchange;
        queue(options: QueueOptions): Queue;
        connect(con: Connection): Exchange;
        publish(message: any, options?: PublishOptions): Exchange;
    }

    type PublishOptions = Options.Publish & {
        key: string;
        reply?: AckCallback;
    };

    type QueueOptions = Options.AssertQueue & {
        name?: string;
        key?: string;
        keys?: ReadonlyArray<string>;
        prefetch?: number;
    };

    type AckCallback = (data?: any) => void;

    interface Queue extends NodeJS.EventEmitter {
        name: string;
        options: QueueOptions;
        connect(con: Connection): void;
        consume: (
            callback: (data: any, ack: AckCallback, nack: () => void, msg: Message) => void,
            options?: Options.Consume
        ) => void;
        cancel(done: any): void;
        purge(done: any): void;
    }
}

export default jackrabbit.jackrabbit;
