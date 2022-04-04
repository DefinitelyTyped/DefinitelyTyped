import { Client } from './Client.d';
import { Status } from './Status.d';

/**
 * An input stream abstraction used by the Guacamole client to facilitate
 * transfer of files or other binary data.
 */
export class InputStream {
    /**
     * @param client The client owning this stream.
     * @param index The index of this stream.
     */
    constructor(client: Client, index: number);

    /**
     * The index of this stream.
     */
    readonly index: number;

    /**
     * Acknowledges the receipt of a blob.
     * @param message A human-readable message describing the error or status.
     * @param code The error code, if any, or 0 for success.
     */
    sendAck(message: string, code: Status.Code): void;

    /**
     * Called when a blob of data is received.
     * @event
     * @param data The received base64 data.
     */
    onblob: null | ((data64: string) => void);

    /**
     * Called when this stream is closed.
     * @event
     */
    onend: null | (() => void);
}
