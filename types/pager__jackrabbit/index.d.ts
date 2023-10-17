import * as amqplib from "amqplib";

export = jackrabbit;
declare function jackrabbit(url: string): jackrabbit.JackRabbit;

declare namespace jackrabbit {
    type Message = amqplib.Message;

    type ExchangeOptions = amqplib.Options.AssertExchange & {
        noReply?: boolean | undefined;
    };

    interface JackRabbit extends NodeJS.EventEmitter {
        default(): Exchange;
        direct(name?: string, options?: ExchangeOptions): Exchange;
        fanout(name?: string, options?: ExchangeOptions): Exchange;
        topic(name?: string, options?: ExchangeOptions): Exchange;
        close(callback?: (e: Error) => any): void;
        getInternals: () => {
            amqp: any;
            connection: amqplib.Connection;
        };
    }

    enum exchangeType {
        direct = "direct",
        fanout = "fanout",
        topic = "topic",
    }

    interface Exchange extends NodeJS.EventEmitter {
        name: string;
        type: exchangeType;
        options: amqplib.Options.AssertExchange;
        queue(options: QueueOptions): Queue;
        connect(con: amqplib.Connection): Exchange;
        publish(message: any, options?: PublishOptions): Exchange;
    }

    type PublishOptions = amqplib.Options.Publish & {
        key: string;
        reply?: AckCallback | undefined;
    };

    type QueueOptions = amqplib.Options.AssertQueue & {
        name?: string | undefined;
        key?: string | undefined;
        keys?: ReadonlyArray<string> | undefined;
        prefetch?: number | undefined;
    };

    type AckCallback = (data?: any) => void;

    interface Queue extends NodeJS.EventEmitter {
        name: string;
        options: QueueOptions;
        connect(con: amqplib.Connection): void;
        consume: (
            callback: (
                data: any,
                ack: AckCallback,
                nack: () => void,
                msg: Message,
            ) => void,
            options?: amqplib.Options.Consume,
        ) => void;
        cancel(done: any): void;
        purge(done: any): void;
    }
}
