import { Connection, Message, Options } from "amqplib";

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
        direct = "direct",
        fanout = "fanout",
        topic = "topic",
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
        reply?: AckCallback | undefined;
    };

    type QueueOptions = Options.AssertQueue & {
        name?: string | undefined;
        key?: string | undefined;
        keys?: ReadonlyArray<string> | undefined;
        prefetch?: number | undefined;
    };

    type AckCallback = (data?: any) => void;

    interface Queue extends NodeJS.EventEmitter {
        name: string;
        options: QueueOptions;
        connect(con: Connection): void;
        consume: (
            callback: (data: any, ack: AckCallback, nack: () => void, msg: Message) => void,
            options?: Options.Consume,
        ) => void;
        cancel(done: any): void;
        purge(done: any): void;
    }
}

export default jackrabbit.jackrabbit;
