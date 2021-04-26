/**
 * @experimental
 */
declare module 'diagnostic_channel' {
    /**
     * Returns wether a named channel has subscribers or not.
     */
    function hasSubscribers(name: string): boolean;

    /**
     * Gets or create a diagnostic channel by name.
     */
    function channel<T>(name: string): Channel<T>;

    type ChannelListener<T> = (name: string, message: T) => void;

    /**
     * Simple diagnostic channel that allows
     */
    class Channel<T> {
        public readonly name: string;
        private constructor(name: string);

        /**
         * Add a listener to the message channel.
         */
        subscribe(listener: ChannelListener<T>): void;
        /**
         * Removes a previously registered listener.
         */
        unsubscribe(listener: ChannelListener<T>): void;
    }
}
