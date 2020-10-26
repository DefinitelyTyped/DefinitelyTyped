import { OutputStream } from './OutputStream';
import { Status } from './Status';
/**
 * A writer which automatically writes to the given output stream with the
 * contents of provided Blob objects.
 */
export class BlobWriter {
    /**
     * @param stream The stream that data will be written to.
     */
    constructor(stream: OutputStream);

    /**
     * Sends the contents of the given blob over the underlying stream.
     * @param blob The blob to send.
     */
    sendBlob(blob: Blob): void;

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
    onack: null | ((statue: Status) => void);

    /**
     * Fired when an error occurs reading a blob passed to sendBlob(). The transfer for the
     * the given blob will cease, but the stream will remain open.
     * @event
     * @param blob The blob that was being read when the error occurred.
     * @param offset The offset of the failed read attempt within the blob, in bytes.
     * @param error The error that occurred.
     */
    onerror: null | ((blob: Blob, offset: number, error: DOMError) => void);

    /**
     * Fired for each successfully-read chunk of data as a blob is being sent via sendBlob().
     * @event
     * @param blob The blob that is being read.
     * @param offset The offset of the read that just succeeded.
     */
    onprogress: null | ((blob: Blob, offset: number) => void);

    /**
     * Fired when a blob passed to sendBlob() has finished being sent.
     * @event
     * @param blob The blob that was sent.
     */
    oncomplete: null | ((blob: Blob) => void);
}
