import { Status } from './Status';
import { OutputStream } from './OutputStream';

/**
 * A writer which automatically writes to the given output stream with text
 * data.
 */
export class StringWriter {
    /**
     * @param stream The stream that data will be written to.
     */
    constructor(stream: OutputStream);

    /**
     * Sends the given text.
     * @param text The text to send.
     */
    sendText(text: string): void;

    /**
     * Signals that no further text will be sent, effectively closing the
     * stream.
     */
    sendEnd(): void;

    /**
     * Fired for received data, if acknowledged by the server.
     * @event
     * @param status The status of the operation.
     */
    onack: null | ((status: Status) => void);
}
