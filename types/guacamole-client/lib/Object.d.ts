import { Mimetype } from './GuacCommon';
import { OutputStream } from './OutputStream';
import { InputStream } from './InputStream';
import { Client } from './Client';

/**
 * An object used by the Guacamole client to house arbitrarily-many named
 * input and output streams.
 */
export class Object {
    /**
     * The reserved name denoting the root stream of any object. The contents of
     * the root stream MUST be a JSON map of stream name to mimetype.
     */
    static readonly ROOT_STREAM: string;

    /**
     * The mimetype of a stream containing JSON which maps available stream names
     * to their corresponding mimetype. The root stream of a Guacamole.Object MUST
     * have this mimetype.
     */
    static readonly STREAM_INDEX_MIMETYPE: string;

    /**
     * @param client The client owning this object.
     * @param index The index of this object.
     */
    constructor(client: Client, index: number);

    /**
     * The index of this object.
     */
    readonly index: number;

    /**
     * Requests read access to the input stream having the given name. If
     * successful, a new input stream will be created.
     *
     * @param name The name of the input stream to request.
     * @param bodyCallback
     * The callback to invoke when the body of the requested input stream
     * is received. This callback will be provided a Guacamole.InputStream
     * and its mimetype as its two only arguments. If the onbody handler of
     * this object is overridden, this callback will not be invoked.
     */
    requestInputStream(name: string, bodyCallback?: (stream: InputStream, mimetype: Mimetype) => void): void;

    /**
     * Creates a new output stream associated with this object and having the
     * given mimetype and name. The legality of a mimetype and name is dictated
     * by the object itself.
     * @param mimetype The mimetype of the data which will be sent to the output stream.
     * @param name The defined name of an output stream within this object.
     * @returns An output stream which will write blobs to the named output stream of this object.
     */
    createOutputStream(mimetype: Mimetype, name: string): OutputStream;

    /**
     * Called when this object receives the body of a requested input stream.
     * By default, all objects will invoke the callbacks provided to their
     * requestInputStream() functions based on the name of the stream
     * requested. This behavior can be overridden by specifying a different
     * handler here.
     *
     * @event
     * @param bodyStream The input stream of the received body.
     * @param mimetype The mimetype of the data being received.
     * @param name The name of the stream whose body has been received.
     */
    onbody: null | ((bodyStream: InputStream, mimetype: Mimetype) => void);

    /**
     * Called when this object is being undefined. Once undefined, no further
     * communication involving this object may occur.
     *
     * @event
     */
    onundefine: null | (() => void);
}
