// Type definitions for node-bunnymq 2.3.2
// Project: https://github.com/dial-once/node-bunnymq
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "bunnymq" {
    namespace bunnymq {
        /**
         * bunnymq instance.
         * @interface
         */
        export interface Instance {
            /**
             * Consumer.
             * @type {Consumer}
             */
            subscribe<T>(queueName: string, callback: (...args: any[]) => T): void;

            /**
             * Producer.
             * @type {Producer}
             */
            publish<T>(queueName: string, message: any, options?: PublisherOptions): Promise<T>;
        }

        /**
         * Options.
         * @interface
         */
        export interface Options {
            /**
             * Consumer suffix.
             * @type {string}
             */
            consumerSuffix?: string;

            /**
             * Host.
             * @type {string}
             */
            host?: string;

            /**
             * Hostname.
             * @type {string}
             */
            hostname?: string;

            /**
             * Number of fetched messages at once on the channel.
             * @type {number}
             */
            prefetch?: number;

            /**
             * Requeue put back message into the broker if consumer crashes/trigger exception.
             * @type {boolean}
             */
            requeue?: boolean;

            /**
             * Default timeout for RPC calls.
             * @type {number}
             */
            rpcTimeout?: number;

            /**
             * Time between two reconnect (in milliseconds).
             * @type {number}
             */
            timeout?: number;

            /**
             * Transport.
             * @type {any}
             */
            transport?: any;
        }

        /**
         * Options for publisher.
         * @interface
         */
        export interface PublisherOptions {
            routingKey?: string;
            rpc?: boolean;
        }
    }

    /**
     * Constructor.
     * @param {Options} [options] Options.
     * @return {Instance} A instance of bunnymq.
     */
    function bunnymq(options?: bunnymq.Options): bunnymq.Instance;
    export = bunnymq;
}
