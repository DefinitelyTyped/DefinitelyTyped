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
         * @param queue A named queue.
         * @param callback A callback.
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
         * @param queue A named queue.
         * @param callback A callback.
         */
        subscribe<T>(queueName: string, callback: ConsumerCallback<T>): void;

        /**
         * Publisher to send messages to a named queue.
         *
         * @return The consumer response.
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
        consumerSuffix?: string | undefined;
        host?: string | undefined;
        hostname?: string | undefined;

        /**
         * Number of fetched messages at once on the channel.
         */
        prefetch?: number | undefined;

        /**
         * Requeue put back message into the broker if consumer crashes/trigger exception.
         */
        requeue?: boolean | undefined;
        rpcTimeout?: number | undefined;
        timeout?: number | undefined;
        transport?: any;
    }

    interface Producer {
        /**
         * Send messages to a named queue.
         *
         * @param queue A named queue.
         * @param message A message.
         * @return The consumer response.
         */
        produce<T>(queue: string, message: any, options?: ProducerOptions): Promise<T>;
    }

    interface ProducerOptions {
        routingKey?: string | undefined;
        rpc?: boolean | undefined;
        timeout?: number | undefined;
    }
}

export = bunnymq;
export as namespace bunnymq;
