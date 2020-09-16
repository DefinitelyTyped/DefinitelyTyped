import { TypedArray } from './GuacCommon.d';
import { OutputStream } from './OutputStream';
import { Status } from './Status';

/**
 * A writer which automatically writes to the given output stream with arbitrary
 * binary data, supplied as ArrayBuffers.
 */
export class ArrayBufferWriter {
    /**
     * The default maximum blob length for new Guacamole.ArrayBufferWriter
     * instances.
     */
    static readonly DEFAULT_BLOB_LENGTH: 6048;

    /**
     * @param stream The stream that data will be written
     */
    constructor(stream: OutputStream);

    /**
     * The maximum length of any blob sent by this Guacamole.ArrayBufferWriter,
     * in bytes. Data sent via sendData() which exceeds
     * this length will be split into multiple blobs. As the Guacamole protocol
     * limits the maximum size of any instruction or instruction element to
     * 8192 bytes, and the contents of blobs will be base64-encoded, this value
     * should only be increased with extreme caution.
     *
     */
    blobLength: number;

    /**
     * Sends the given data.
     * @param data The data to send.
     */
    sendData(data: ArrayBuffer | TypedArray): void;

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
