declare module goog {
    function require(name: 'goog.pubsub.PubSub'): typeof goog.pubsub.PubSub;
}

declare module goog.pubsub {

    /**
     * Topic-based publish/subscribe channel.  Maintains a map of topics to
     * subscriptions.  When a message is published to a topic, all functions
     * subscribed to that topic are invoked in the order they were added.
     * Uncaught errors abort publishing.
     *
     * Topics may be identified by any nonempty string, <strong>except</strong>
     * strings corresponding to native Object properties, e.g. "constructor",
     * "toString", "hasOwnProperty", etc.
     *
     * @constructor
     * @extends {goog.Disposable}
     */
    class PubSub extends goog.Disposable {
        constructor();
        
        /**
         * Subscribes a function to a topic.  The function is invoked as a method on
         * the given {@code opt_context} object, or in the global scope if no context
         * is specified.  Subscribing the same function to the same topic multiple
         * times will result in multiple function invocations while publishing.
         * Returns a subscription key that can be used to unsubscribe the function from
         * the topic via {@link #unsubscribeByKey}.
         *
         * @param {string} topic Topic to subscribe to.
         * @param {Function} fn Function to be invoked when a message is published to
         *     the given topic.
         * @param {Object=} opt_context Object in whose context the function is to be
         *     called (the global scope if none).
         * @return {number} Subscription key.
         */
        subscribe(topic: string, fn: Function, opt_context?: Object): number;
        
        /**
         * Subscribes a single-use function to a topic.  The function is invoked as a
         * method on the given {@code opt_context} object, or in the global scope if
         * no context is specified, and is then unsubscribed.  Returns a subscription
         * key that can be used to unsubscribe the function from the topic via
         * {@link #unsubscribeByKey}.
         *
         * @param {string} topic Topic to subscribe to.
         * @param {Function} fn Function to be invoked once and then unsubscribed when
         *     a message is published to the given topic.
         * @param {Object=} opt_context Object in whose context the function is to be
         *     called (the global scope if none).
         * @return {number} Subscription key.
         */
        subscribeOnce(topic: string, fn: Function, opt_context?: Object): number;
        
        /**
         * Unsubscribes a function from a topic.  Only deletes the first match found.
         * Returns a Boolean indicating whether a subscription was removed.
         *
         * @param {string} topic Topic to unsubscribe from.
         * @param {Function} fn Function to unsubscribe.
         * @param {Object=} opt_context Object in whose context the function was to be
         *     called (the global scope if none).
         * @return {boolean} Whether a matching subscription was removed.
         */
        unsubscribe(topic: string, fn: Function, opt_context?: Object): boolean;
        
        /**
         * Removes a subscription based on the key returned by {@link #subscribe}.
         * No-op if no matching subscription is found.  Returns a Boolean indicating
         * whether a subscription was removed.
         *
         * @param {number} key Subscription key.
         * @return {boolean} Whether a matching subscription was removed.
         */
        unsubscribeByKey(key: number): boolean;
        
        /**
         * Publishes a message to a topic.  Calls functions subscribed to the topic in
         * the order in which they were added, passing all arguments along.  If any of
         * the functions throws an uncaught error, publishing is aborted.
         *
         * @param {string} topic Topic to publish to.
         * @param {...*} var_args Arguments that are applied to each subscription
         *     function.
         * @return {boolean} Whether any subscriptions were called.
         */
        publish(topic: string, ...var_args: any[]): boolean;
        
        /**
         * Clears the subscription list for a topic, or all topics if unspecified.
         * @param {string=} opt_topic Topic to clear (all topics if unspecified).
         */
        clear(opt_topic?: string): void;
        
        /**
         * Returns the number of subscriptions to the given topic (or all topics if
         * unspecified).
         * @param {string=} opt_topic The topic (all topics if unspecified).
         * @return {number} Number of subscriptions to the topic.
         */
        getCount(opt_topic?: string): number;
    }
}
