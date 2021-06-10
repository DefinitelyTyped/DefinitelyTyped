import { InputStream } from './InputStream.d';

/**
 * A reader which automatically handles the given input stream, returning
 * strictly received packets as array buffers. Note that this object will
 * overwrite any installed event handlers on the given Guacamole.InputStream.
 */
export class ArrayBufferReader {
    /**
     * @param stream The stream that data will be read from.
     */
    constructor(stream: InputStream);

    /**
     * Fired once for every blob of data received.
     * @event
     * @param buffer The data packet received.
     */
    ondata: null | ((data: ArrayBuffer) => void);

    /**
     * Fired once this stream is finished and no further data will be written.
     * @event
     */
    onend: null | (() => void);
}
