/**
 * Options
 */
export interface Options {
    /**
     * The maximum number of milliseconds a message can remain in the queue. The default is 86400000 (24 hours).
     */
    timeout: number;
}

/**
 * Asap interface
 */
export interface Asap {
    /**
     * Queues a message to be sent to the peer.
     * @param message The message to be sent to the peer. This can be any data type.
     * @param options Options for how this message should be handled. Currently, timeout is the only option.
     */
    send(message: any, options?: Options): void;

    /**
     * Cancels all queued messages if id is not set. Call this function on startup to limit messages to a single session.
     * @param id cancel only the given message if id is set
     */
    cancel(id?: number): void;

    /**
     * Called when a message is received from the peer.
     * The function assigned to asap.onmessage accepts a single parameter containing the message, which will have the same data type it had when it was passed into the send function.
     */
    onmessage: (message: any) => void;
}
declare const asap: Asap;
export default asap;
