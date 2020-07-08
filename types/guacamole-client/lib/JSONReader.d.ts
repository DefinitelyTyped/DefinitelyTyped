import { InputStream } from './InputStream';

/**
 * A reader which automatically handles the given input stream, assembling all
 * received blobs into a JavaScript object by appending them to each other, in
 * order, and decoding the result as JSON. Note that this object will overwrite
 * any installed event handlers on the given Guacamole.InputStream.
 * @param stream The stream that JSON will be read from.
 */
export class JSONReader {
    /**
     * @param stream The stream that JSON will be read from.
     */
    constructor(stream: InputStream);

    /**
     * Fired once for every blob of data received.
     * @event
     * @param length The number of characters received.
     */
    onprogress: null | ((length: number) => void);

    /**
     * Fired once this stream is finished and no further data will be written.
     * @event
     */
    onend: null | (() => void);

    /**
     * @return The current length of this Guacamole.JSONReader.
     */
    getLength(): number;

    /**
     * @return The contents of this Guacamole.JSONReader, as parsed from the JSON contents of the input stream.
     */
    getJSON(): object;
}
