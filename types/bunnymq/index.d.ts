// Type definitions for node-bunnymq 2.3
// Project: https://github.com/dial-once/node-bunnymq
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function bunnymq(options?: bunnymq.Options): bunnymq.Instance;
declare namespace bunnymq {
    type ConsumerCallback<T> = (...args: any[]) => T;
    type LoggerOutput = (format: any, ...args: any[]) => void;

    interface Connection {
        [address: string]: any;
        startedAt: string;
    }

    interface Consumer {
        /**
         * Handle messages from a named queue.
         *
         * @param {string}           queue      A named queue.
         * @param {ConsumerCallback} callback   A callback.
         */
        consume<T>(queue: string, callback: ConsumerCallback<T>): void;
    }

    interface Instance {
        connection: Connection;
        consumer: Consumer;
        producer: Producer;

        /**
         * Subscriber to handle messages from a named queue.
         *
         * @param {string}           queue      A named queue.
         * @param {ConsumerCallback} callback   A callback.
         */
        subscribe<T>(queueName: string, callback: ConsumerCallback<T>): void;

        /**
         * Publisher to send messages to a named queue.
         *
         * @type {Producer}
         * @return {Promise} The consumer response.
         */
        publish<T>(queueName: string, message: any, options?: ProducerOptions): Promise<T>;
    }

    interface Logger {
        debug: LoggerOutput;
        error: LoggerOutput;
        info: LoggerOutput;
        log: LoggerOutput;
        warn: LoggerOutput;
    }

    interface Options {
        consumerSuffix?: string;
        host?: string;
        hostname?: string;

        /**
         * Number of fetched messages at once on the channel.
         *
         * @type {number}
         */
        prefetch?: number;

        /**
         * Requeue put back message into the broker if consumer crashes/trigger exception.
         *
         * @type {boolean}
         */
        requeue?: boolean;
        rpcTimeout?: number;
        timeout?: number;
        transport?: any;
    }

    interface Producer {
        /**
         * Send messages to a named queue.
         *
         * @param {string}  queue   A named queue.
         * @param {any}     message A message.
         * @return {Promise} The consumer response.
         */
        produce<T>(queue: string, message: any, options?: ProducerOptions): Promise<T>;
    }

    interface ProducerOptions {
        routingKey?: string;
        rpc?: boolean;
        timeout?: number;
    }
}

export = bunnymq;
export as namespace bunnymq;
