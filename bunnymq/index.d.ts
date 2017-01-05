// Type definitions for node-bunnymq 2.2.1
// Project: https://github.com/dial-once/node-bunnymq
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "bunnymq" {
    namespace bunnymq {
        export type ConsumerCallback = (message: Object) => void;

        /**
         * Consumer.
         * @interface
         */
        export interface Consumer {
            /**
             * Handle messages from a named queue.
             * @param {string}           queue      A named queue.
             * @param {ConsumerCallback} callback   A callback.
             */
            consume(queue: string, callback: ConsumerCallback): void;
        }

        /**
         * bunnymq instance.
         * @interface
         */
        export interface Instance {
            /**
             * Consumer.
             * @type {Consumer}
             */
            consumer: Consumer;

            /**
             * Producer.
             * @type {Producer}
             */
            producer: Producer;
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
         * Producer.
         * @inteface
         */
        export interface Producer {
            /**
             * Send messages to a named queue.
             * @param {string}  queue   A named queue.
             * @param {Object}  message A message.
             * @return {Object} The consumer response.
             */
            produce(queue: string, message: Object, options?: ProducerOptions): PromiseLike<Object>;
        }

        /**
         * Options for producer.
         * @interface
         */
        export interface ProducerOptions {
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
