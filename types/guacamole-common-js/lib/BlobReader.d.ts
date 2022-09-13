import { Mimetype } from './GuacCommon';
import { InputStream } from './InputStream';

/**
 * A reader which automatically handles the given input stream, assembling all
 * received blobs into a single blob by appending them to each other in order.
 * Note that this object will overwrite any installed event handlers on the
 * given Guacamole.InputStream.
 */
export class BlobReader {
    /**
     * @param stream The stream that data will be read from.
     * @param mimetype The mimetype of the blob being built.
     */
    constructor(stream: InputStream, mimetype: Mimetype);

    /**
     * Returns the current length of this Guacamole.InputStream, in bytes.
     * @return The current length of this Guacamole.InputStream.
     */
    getLength(): number;

    /**
     * Returns the contents of this Guacamole.BlobReader as a Blob.
     * @return The contents of this Guacamole.BlobReader.
     */
    getBlob(): Blob;

    /**
     * Fired once for every blob of data received.
     * @event
     * @param length The number of bytes received.
     */
    onprogress: null | ((length: number) => void);

    /**
     * Fired once this stream is finished and no further data will be written.
     * @event
     */
    onend: null | (() => void);
}
