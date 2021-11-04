import { InputStream } from './InputStream';
/**
 * A reader which automatically handles the given input stream, returning
 * received blobs as a single data URI built over the course of the stream.
 * Note that this object will overwrite any installed event handlers on the
 * given Guacamole.InputStream.
 */
export class DataURIReader {
    /**
     * @param stream The stream that data will be read from.
     */
    constructor(stream: InputStream);

    /**
     * Returns the data URI of all data received through the underlying stream
     * thus far.
     * @returns The data URI of all data received through the underlying stream thus far.
     */
    getURI(): string;

    /**
     * Fired once this stream is finished and no further data will be written.
     * @event
     */
    onend: null | (() => void);
}
