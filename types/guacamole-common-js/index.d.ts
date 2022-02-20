// Type definitions for guacamole-common-js 1.3
// Project: https://github.com/padarom/guacamole-common-js
// Definitions by: Konstantin Simeonov <https://github.com/KonstantinSimeonov>
//                 Alex Vakrilov <https://github.com/vakrilov>
//                 Petar Metodiev <https://github.com/PetarMetodiev>
//                 Jon Sun <https://github.com/Talent30>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// This is a fork of https://github.com/DefinitelyTyped/DefinitelyTyped/tree/4f7f0feac5f5a43f56a1d579a3b2aff67c65e461/types/guacamole-client
// Thanks to all the contributors!

// TODO: BigInt?
export type TypedArray =
    | Uint32Array
    | Uint16Array
    | Uint8Array
    | Uint8ClampedArray
    | Int32Array
    | Int16Array
    | Int8Array
    | Float64Array
    | Float32Array;

export type Mimetype = string;

/**
 * Guacamole Tunnel which cycles between all specified tunnels until
 * no tunnels are left. Another tunnel is used if an error occurs but
 * no instructions have been received. If an instruction has been
 * received, or no tunnels remain, the error is passed directly out
 * through the onerror handler (if defined).
 */
export class ChainedTunnel extends Tunnel {
    /**
     * @param tunnelChain The tunnels to use, in order of priority.
     */
    constructor(...tunnels: Tunnel[]);
}

/**
 * Guacamole Tunnel implemented over HTTP via XMLHttpRequest.
 */
export class HTTPTunnel extends Tunnel {
    /**
     * @param tunnelURL The URL of the HTTP tunneling service.
     * @param [crossDomain=false] Whether tunnel requests will be cross-domain, and thus must use CORS
     * mechanisms and headers. By default, it is assumed that tunnel requests
     * will be made to the same domain.
     * @param [extraTunnelHeaders={}] Key value pairs containing the header names and values of any additional
     * headers to be sent in tunnel requests. By default, no extra headers will be added.
     */
    constructor(tunnelURL: string, crossDomain?: boolean, extraTunnelHeaders?: boolean);
}

/**
 * Implementation of Guacamole.AudioRecorder providing support for raw PCM
 * format audio. This recorder relies only on the Web Audio API and does not
 * require any browser-level support for its audio formats.
 */
export class RawAudioRecorder extends AudioRecorder {
    static isSupportedType: typeof AudioRecorder['isSupportedType'];

    /**
     * Returns a list of all mimetypes supported by Guacamole.RawAudioRecorder. Only
     * the core mimetypes themselves will be listed. Any mimetype parameters, even
     * required ones, will not be included in the list. For example, "audio/L8" is
     * a raw audio mimetype that may be supported, but it is invalid without
     * additional parameters. Something like "audio/L8;rate=44100" would be valid,
     * however (see https://tools.ietf.org/html/rfc4856).
     *
     * @returns
     *     A list of all mimetypes supported by Guacamole.RawAudioRecorder,
     *     excluding any parameters. If the necessary JavaScript APIs for recording
     *     raw audio are absent, this list will be empty.
     */
    static getSupportedTypes(): string[];

    /**
     * @param stream The Guacamole.OutputStream to write audio data to.
     *
     * @param mimetype The mimetype of the audio data to send along the provided stream, which
     * must be a "audio/L8" or "audio/L16" mimetype with necessary parameters,
     * such as: "audio/L16;rate=44100,channels=2".
     */
    constructor(stream: OutputStream, mimetype: Mimetype);
}

/**
 * Guacamole Tunnel which replays a Guacamole protocol dump from a static file
 * received via HTTP. Instructions within the file are parsed and handled as
 * quickly as possible, while the file is being downloaded.
 */
export class StaticHTTPTunnel extends Tunnel {
    /**
     * @param url The URL of a Guacamole protocol dump.
     * @param [crossDomain=false] Whether tunnel requests will be cross-domain, and thus must use CORS
     * mechanisms and headers. By default, it is assumed that tunnel requests will be made to the same domain.
     * @param [extraTunnelHeaders={}] Key value pairs containing the header names and values of any additional
     * headers to be sent in tunnel requests. By default, no extra headers will be added.
     */
    constructor(url: string, crossDomain?: boolean, extraTunnelHeaders?: Record<string, string>);
}

/**
 * Guacamole Tunnel implemented over WebSocket via XMLHttpRequest.
 */
export class WebSocketTunnel extends Tunnel {
    /**
     * @param tunnelURL The URL of the WebSocket tunneling service.
     */
    constructor(tunnelURL: string);
}

export const API_VERSION: string;

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

/**
 * Abstract audio player which accepts, queues and plays back arbitrary audio
 * data. It is up to implementations of this class to provide some means of
 * handling a provided Guacamole.InputStream. Data received along the provided
 * stream is to be played back immediately.
 */
export class AudioPlayer {
    /**
     * Returns a list of all mimetypes supported by any built-in
     * Guacamole.AudioPlayer, in rough order of priority. Beware that only the core
     * mimetypes themselves will be listed. Any mimetype parameters, even required
     * ones, will not be included in the list. For example, "audio/L8" is a
     * supported raw audio mimetype that is supported, but it is invalid without
     * additional parameters. Something like "audio/L8;rate=44100" would be valid,
     * however (see https://tools.ietf.org/html/rfc4856).
     * @returns A list of all mimetypes supported by any built-in Guacamole.AudioPlayer, excluding any parameters.
     */
    static getSupportedTypes(): Mimetype[];

    /**
     * Returns an instance of Guacamole.AudioPlayer providing support for the given
     * audio format. If support for the given audio format is not available, null
     * is returned.
     *
     * @param stream The Guacamole.InputStream to read audio data from.
     * @param mimetype The mimetype of the audio data in the provided stream.
     * @return A Guacamole.AudioPlayer instance supporting the given mimetype and
     * reading from the given stream, or null if support for the given mimetype is absent.
     */
    static getInstance(stream: InputStream, mimetype: Mimetype): AudioPlayer | null;

    /**
     * Notifies this Guacamole.AudioPlayer that all audio up to the current
     * point in time has been given via the underlying stream, and that any
     * difference in time between queued audio data and the current time can be
     * considered latency.
     */
    sync(): void;
}

/**
 * Abstract audio recorder which streams arbitrary audio data to an underlying
 * Guacamole.OutputStream. It is up to implementations of this class to provide
 * some means of handling this Guacamole.OutputStream. Data produced by the
 * recorder is to be sent along the provided stream immediately.
 */
export class AudioRecorder {
    /**
     * Determines whether the given mimetype is supported by any built-in
     * implementation of Guacamole.AudioRecorder, and thus will be properly handled
     * by Guacamole.AudioRecorder.getInstance().
     *
     * @param mimetype The mimetype to check.
     *
     * @returns true if the given mimetype is supported by any built-in Guacamole.AudioRecorder, false otherwise.
     */
    static isSupportedType(mimetype: Mimetype): boolean;

    /**
     * Returns a list of all mimetypes supported by any built-in
     * Guacamole.AudioRecorder, in rough order of priority. Beware that only the
     * core mimetypes themselves will be listed. Any mimetype parameters, even
     * required ones, will not be included in the list. For example, "audio/L8" is
     * a supported raw audio mimetype that is supported, but it is invalid without
     * additional parameters. Something like "audio/L8;rate=44100" would be valid,
     * however (see https://tools.ietf.org/html/rfc4856).
     *
     * A list of all mimetypes supported by any built-in
     * Guacamole.AudioRecorder, excluding any parameters.
     */
    static getSupportedTypes(): string[];

    /**
     * Returns an instance of Guacamole.AudioRecorder providing support for the
     * given audio format. If support for the given audio format is not available,
     * null is returned.
     *
     * @param stream The Guacamole.OutputStream to send audio data through.
     *
     * @param mimetype The mimetype of the audio data to be sent along the provided stream.
     * @return A Guacamole.AudioRecorder instance supporting the given mimetype and
     * writing to the given stream, or null if support for the given mimetype is absent.
     */
    static getInstance(stream: OutputStream, mimetype: Mimetype): AudioRecorder | null;

    /**
     * Callback which is invoked when the audio recording process has stopped
     * and the underlying Guacamole stream has been closed normally. Audio will
     * only resume recording if a new Guacamole.AudioRecorder is started. This
     * Guacamole.AudioRecorder instance MAY NOT be reused.
     *
     * @event
     */
    onclose: null | (() => void);

    /**
     * Callback which is invoked when the audio recording process cannot
     * continue due to an error, if it has started at all. The underlying
     * Guacamole stream is automatically closed. Future attempts to record
     * audio should not be made, and this Guacamole.AudioRecorder instance
     * MAY NOT be reused.
     *
     * @event
     */
    onerror: null | (() => void);
}

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
    onerror: null | ((blob: Blob, offset: number, error: Error) => void);

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

export {};

export namespace Client {
    export {};
    export type State =
        | 0 // IDLE
        | 1 // CONNECTING
        | 2 // WAITING
        | 3 // CONNECTED
        | 4 //  DISCONNECTING
        | 5; // DISCONNECTED

    interface ExportLayerBase {
        height: number;
        width: number;
        url?: string | undefined;
    }

    type ExportLayer =
        | ExportLayerBase
        | (ExportLayerBase & {
              x: number;
              y: number;
              z: number;
              alpha: number;
              matrix: unknown;
              parent: unknown;
          });

    export interface ExportedState {
        currentState: State;
        currentTimestamp: number;
        layers: { [key: number]: ExportLayer };
    }
}

/**
 * Guacamole protocol client. Given a Guacamole.Tunnel,
 * automatically handles incoming and outgoing Guacamole instructions via the
 * provided tunnel, updating its display using one or more canvas elements.
 */
export class Client {
    /**
     * @param tunnel The tunnel to use to send and receive Guacamole instructions.
     */
    constructor(tunnel: Tunnel);

    /**
     * Sends a disconnect instruction to the server and closes the tunnel.
     */
    disconnect(): void;

    /**
     * @description
     * Connects the underlying tunnel of this Guacamole.Client, passing the
     * given arbitrary data to the tunnel during the connection process.
     *
     * @param data Arbitrary connection data to be sent to the underlying
     *             tunnel during the connection process.
     * @throws {Guacamole.Status} If an error occurs during connection.
     */
    connect(data?: any): void;

    /**
     * Opens a new argument value stream for writing, having the given
     * parameter name and mimetype, requesting that the connection parameter
     * with the given name be updated to the value described by the contents
     * of the following stream. The instruction necessary to create this stream
     * will automatically be sent.
     *
     * @param mimetype The mimetype of the data being sent.
     * @param name The name of the connection parameter to attempt to update.
     */
    createArgumentValueStream(mimetype: Mimetype, name: string): OutputStream;

    /**
     * Opens a new audio stream for writing, where audio data having the give
     * mimetype will be sent along the returned stream. The instruction
     * necessary to create this stream will automatically be sent.
     *
     * @param mimetype The mimetype of the audio data that will be sent along the returned stream.
     */
    createAudioStream(mimetype: Mimetype): OutputStream;

    /**
     * Opens a new clipboard object for writing, having the given mimetype. The
     * instruction necessary to create this stream will automatically be sent.
     *
     * @param mimetype The mimetype of the data being sent.
     * @param name The name of the pipe.
     */
    createClipboardStream(mimetype: Mimetype, name: string): OutputStream;

    /**
     * Opens a new file for writing, having the given index, mimetype and
     * filename. The instruction necessary to create this stream will
     * automatically be sent.
     *
     * @param mimetype The mimetype of the file being sent.
     * @param filename The filename of the file being sent.
     */
    createFileStream(mimetype: Mimetype, filename: string): OutputStream;

    /**
     * Creates a new output stream associated with the given object and having
     * the given mimetype and name. The legality of a mimetype and name is
     * dictated by the object itself. The instruction necessary to create this
     * stream will automatically be sent.
     *
     * @param index The index of the object for which the output stream is being created.
     * @param mimetype The mimetype of the data which will be sent to the output stream.
     * @param name The defined name of an output stream within the given object.
     * @returns An output stream which will write blobs to the named output stream of the given object.
     */
    createObjectOutputStream(index: number, mimetype: Mimetype, name: string): OutputStream;

    /**
     * Allocates an available stream index and creates a new
     * Guacamole.OutputStream using that index, associating the resulting
     * stream with this Guacamole.Client. Note that this stream will not yet
     * exist as far as the other end of the Guacamole connection is concerned.
     * Streams exist within the Guacamole protocol only when referenced by an
     * instruction which creates the stream, such as a "clipboard", "file", or
     * "pipe" instruction.
     *
     * @returns A new Guacamole.OutputStream with a newly-allocated index and associated with this Guacamole.Client.
     */
    createOutputStream(): OutputStream;

    /**
     * Opens a new pipe for writing, having the given name and mimetype. The
     * instruction necessary to create this stream will automatically be sent.
     *
     * @param mimetype The mimetype of the data being sent.
     * @param name The name of the pipe.
     */
    createPipeStream(mimetype: Mimetype, name: string): OutputStream;

    /**
     * Marks a currently-open stream as complete. The other end of the
     * Guacamole connection will be notified via an "end" instruction that the
     * stream is closed, and the index will be made available for reuse in
     * future streams.
     *
     * @param index The index of the stream to end.
     */
    endStream(index: number): void;

    /**
     * Produces an opaque representation of Guacamole.Client state which can be
     * later imported through a call to importState(). This object is
     * effectively an independent, compressed snapshot of protocol and display
     * state. Invoking this function implicitly flushes the display.
     *
     * @param callback
     *     Callback which should be invoked once the state object is ready. The
     *     state object will be passed to the callback as the sole parameter.
     *     This callback may be invoked immediately, or later as the display
     */
    exportState(callback: (state: Client.ExportedState) => void): void;

    /**
     * Returns the underlying display of this Guacamole.Client. The display
     * contains an Element which can be added to the DOM, causing the
     * display to become visible.
     *
     * @return The underlying display of this Guacamole.Client.
     */
    getDisplay(): Display;

    /**
     * Restores Guacamole.Client protocol and display state based on an opaque
     * object from a prior call to exportState(). The Guacamole.Client instance
     * used to export that state need not be the same as this instance.
     *
     * @param state An opaque representation of Guacamole.Client state from a prior call to exportState().
     *
     * @param callback The function to invoke when state has finished being imported. This
     * may happen immediately, or later as images within the provided state object are loaded.
     */
    importState(state: Client.ExportedState, callback?: () => void): void;

    /**
     * Requests read access to the input stream having the given name. If
     * successful, a new input stream will be created.
     *
     * @param index The index of the object from which the input stream is being requested.
     * @param name The name of the input stream to request.
     */
    requestObjectInputStream(index: number, name: string): OutputStream;

    /**
     * Acknowledge receipt of a blob on the stream with the given index.
     *
     * @param index The index of the stream associated with the received blob.
     * @param message A human-readable message describing the error or status.
     * @param code The error code, if any, or 0 for success.
     */
    sendAck(index: number, message: string, code: number): void;

    /**
     * Given the index of a file, writes a blob of data to that file.
     *
     * @param index The index of the file to write to.
     * @param data Base64-encoded data to write to the file.
     */
    sendBlob(index: number, data64: string): void;

    /**
     * Sends a key event having the given properties as if the user
     * pressed or released a key.
     *
     * @param pressed Whether the key is pressed (1) or released (0).
     * @param keysym The keysym of the key being pressed or released.
     */
    sendKeyEvent(pressed: 0 | 1, keysym: number): void;

    /**
     * Sends a mouse event having the properties provided by the given mouse state.
     *
     * @param mouseState The state of the mouse to send in the mouse event.
     */
    sendMouseState(state: Mouse.State): void;

    /**
     * Sends the current size of the screen.
     *
     * @param width The width of the screen.
     * @param height The height of the screen.
     */
    sendSize(width: number, height: number): void;

    /**
     * Fired whenever the state of this Guacamole.Client changes.
     *
     * @event
     * @param state The new state of the client.
     */
    onstatechange: null | ((state: Client.State) => void);

    /**
     * Fired when the remote client sends a name update.
     *
     * @event
     * @param name The new name of this client.
     */
    onname: null | ((name: string) => void);

    /**
     * Fired when an error is reported by the remote client, and the connection
     * is being closed.
     *
     * @event
     * @param status A status object which describes the error.
     */
    onerror: null | ((status: Status) => void);

    /**
     * Fired when a audio stream is created. The stream provided to this event
     * handler will contain its own event handlers for received data.
     *
     * @event
     * @param audioStream The stream that will receive audio data from the server.
     * @param mimetype The mimetype of the audio data which will be received.
     * @return
     * An object which implements the Guacamole.AudioPlayer interface and
     * has been initialied to play the data in the provided stream, or null
     * if the built-in audio players of the Guacamole client should be used.
     */
    onaudio: null | ((audioStream: InputStream, mimetype: Mimetype) => AudioPlayer | null);

    /**
     * Fired when a video stream is created. The stream provided to this event
     * handler will contain its own event handlers for received data.
     *
     * @event
     * @param videoStream The stream that will receive video data from the server.
     * @param layer
     * The destination layer on which the received video data should be
     * played. It is the responsibility of the Guacamole.VideoPlayer
     * implementation to play the received data within this layer.
     * @param mimetype
     * The mimetype of the video data which will be received.
     * @return
     * An object which implements the Guacamole.VideoPlayer interface and
     * has been initialied to play the data in the provided stream, or null
     * if the built-in video players of the Guacamole client should be used.
     */
    onvideo: null | ((videoStream: InputStream, layer: VisibleLayer, mimetype: Mimetype) => VideoPlayer | null);

    /**
     * Fired when the current value of a connection parameter is being exposed
     * by the server.
     *
     * @event
     * @param stream The stream that will receive connection parameter data from the server.
     * @param mimetype The mimetype of the data which will be received.
     * @param name The name of the connection parameter whose value is being exposed.
     */
    onargv: null | ((parameterStream: InputStream, mimetype: Mimetype, name: string) => void);

    /**
     * Fired when the clipboard of the remote client is changing.
     *
     * @event
     * @param stream The stream that will receive clipboard data from the server.
     * @param mimetype The mimetype of the data which will be received.
     */
    onclipboard: null | ((clipboardStream: InputStream, mimetype: Mimetype) => void);

    /**
     * Fired when a file stream is created. The stream provided to this event
     * handler will contain its own event handlers for received data.
     *
     * @event
     * @param stream The stream that will receive data from the server.
     * @param mimetype The mimetype of the file received.
     * @param filename The name of the file received.
     */
    onfile: null | ((fileStream: InputStream, mimetype: Mimetype, name: string) => void);

    /**
     * Fired when a filesystem object is created. The object provided to this
     * event handler will contain its own event handlers and functions for
     * requesting and handling data.
     *
     * @event
     * @param object The created filesystem object.
     * @param name The name of the filesystem.
     */
    onfilesystem: null | ((object: GuacObject, name: string) => void);

    /**
     * Fired when a pipe stream is created. The stream provided to this event
     * handler will contain its own event handlers for received data;
     *
     * @event
     * @param stream The stream that will receive data from the server.
     * @param mimetype The mimetype of the data which will be received.
     * @param name The name of the pipe.
     */
    onpipe: null | ((pipeStream: InputStream, mimetype: Mimetype, name: string) => void);

    /**
     * Fired whenever a sync instruction is received from the server, indicating
     * that the server is finished processing any input from the client and
     * has sent any results.
     *
     * @event
     * @param timestamp The timestamp associated with the sync instruction.
     */
    onsync: null | ((timestramp: number) => void);
}

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

export namespace Display {
    export {};
    export type VisibleLayer = typeof VisibleLayer;
}

/**
 * The Guacamole display. The display does not deal with the Guacamole
 * protocol, and instead implements a set of graphical operations which
 * embody the set of operations present in the protocol. The order operations
 * are executed is guaranteed to be in the same order as their corresponding
 * functions are called.
 */
export class Display {
    /**
     * The X coordinate of the hotspot of the mouse cursor. The hotspot is
     * the relative location within the image of the mouse cursor at which
     * each click occurs.
     */
    cursorHotspotX: number;

    /**
     * The Y coordinate of the hotspot of the mouse cursor. The hotspot is
     * the relative location within the image of the mouse cursor at which
     * each click occurs.
     */
    cursorHotspotY: number;

    /**
     * The current X coordinate of the local mouse cursor. This is not
     * necessarily the location of the actual mouse - it refers only to
     * the location of the cursor image within the Guacamole display, as
     * last set by moveCursor().
     */
    cursorX: number;

    /**
     * The current X coordinate of the local mouse cursor. This is not
     * necessarily the location of the actual mouse - it refers only to
     * the location of the cursor image within the Guacamole display, as
     * last set by moveCursor().
     */
    cursorY: number;

    /**
     * Add the specified arc to the current path.
     * @param layer The layer to draw upon.
     * @param x The X coordinate of the center of the circle which will contain the arc.
     * @param y The Y coordinate of the center of the circle which will contain the arc.
     * @param radius The radius of the circle.
     * @param startAngle The starting angle of the arc, in radians.
     * @param endAngle The ending angle of the arc, in radians.
     * @param negative Whether the arc should be drawn in order of decreasing angle.
     */
    arc(
        layer: Layer,
        x: number,
        y: number,
        radius: number,
        startAngle: number,
        endAngle: number,
        negative: boolean,
    ): void;

    /**
     * Starts a new path at the specified point.
     * @param layer The layer to draw upon.
     * @param cp1x The X coordinate of the first control point.
     * @param cp1y The Y coordinate of the first control point.
     * @param cp2x The X coordinate of the second control point.
     * @param cp2y The Y coordinate of the second control point.
     * @param x The X coordinate of the endpoint of the curve.
     * @param y The Y coordinate of the endpoint of the curve.
     */
    curveTo(layer: Layer, cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;

    /**
     * Closes the current path by connecting the end point with the start point (if any) with a straight line.
     * @param layer The layer to draw upon.
     */
    close(layer: Layer): void;

    /**
     * Add the specified rectangle to the current path.
     * @param layer The layer to draw upon.
     * @param x The X coordinate of the upper-left corner of the rectangle to draw.
     * @param y The Y coordinate of the upper-left corner of the rectangle to draw.
     * @param w The width of the rectangle to draw.
     * @param h The height of the rectangle to draw.
     */
    rect(layer: Layer, x: number, y: number, w: number, h: number): void;

    /**
     * Clip all future drawing operations by the current path. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as fillColor()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param layer The layer to affect.
     */
    clip(layer: Layer): void;

    /**
     * Stroke the current path with the specified color. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as clip()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param layer The layer to draw upon.
     * @param cap The line cap style. Can be "round", "square", or "butt".
     * @param join The line join style. Can be "round", "bevel", or "miter".
     * @param thickness The line thickness in pixels.
     * @param r The red component of the color to fill.
     * @param g The green component of the color to fill.
     * @param b The blue component of the color to fill.
     * @param a The alpha component of the color to fill.
     */
    strokeColor(
        layer: Layer,
        cap: Layer.LineCap,
        join: Layer.LineJoin,
        thickness: number,
        r: number,
        g: number,
        b: number,
        a: number,
    ): void;

    /**
     * Fills the current path with the specified color. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as clip()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param layer The layer to draw upon.
     * @param r The red component of the color to fill.
     * @param g The green component of the color to fill.
     * @param b The blue component of the color to fill.
     * @param a The alpha component of the color to fill.
     */
    fillColor(layer: Layer, r: number, g: number, b: number, a: number): void;

    /**
     * Stroke the current path with the image within the specified layer. The
     * image data will be tiled infinitely within the stroke. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as clip()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param layer The layer to draw upon.
     * @param cap The line cap style. Can be "round", "square", or "butt".
     * @param join The line join style. Can be "round", "bevel", or "miter".
     * @param thickness The line thickness in pixels.
     * @param srcLayer The layer to use as a repeating pattern within the stroke.
     */
    strokeLayer(layer: Layer, cap: Layer.LineCap, join: Layer.LineJoin, thickness: number, srcLayer: Layer): void;

    /**
     * Fills the current path with the image within the specified layer. The
     * image data will be tiled infinitely within the stroke. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as clip()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param layer The layer to draw upon.
     * @param srcLayer The layer to use as a repeating pattern within the fill.
     */
    fillLayer(layer: Layer, srcLayer: Layer): void;

    /**
     * Push current layer state onto stack.
     * @param layer The layer to draw upon.
     */
    push(layer: Layer): void;

    /**
     * Pop layer state off stack.
     * @param layer The layer to draw upon.
     */
    pop(layer: Layer): void;

    /**
     * Reset the layer, clearing the stack, the current path, and any transform matrix.
     * @param layer The layer to draw upon.
     */
    reset(layer: Layer): void;

    /**
     * Sets the given affine transform (defined with six values from the transform's matrix).
     * @param layer The layer to modify.
     * @param a The first value in the affine transform's matrix.
     * @param b The second value in the affine transform's matrix.
     * @param c The third value in the affine transform's matrix.
     * @param d The fourth value in the affine transform's matrix.
     * @param e The fifth value in the affine transform's matrix.
     * @param f The sixth value in the affine transform's matrix.
     */
    setTransform(layer: Layer, a: number, b: number, c: number, d: number, e: number, f: number): void;

    /**
     * Applies the given affine transform (defined with six values from the transform's matrix).
     * @param layer The layer to modify.
     * @param a The first value in the affine transform's matrix.
     * @param b The second value in the affine transform's matrix.
     * @param c The third value in the affine transform's matrix.
     * @param d The fourth value in the affine transform's matrix.
     * @param e The fifth value in the affine transform's matrix.
     * @param f The sixth value in the affine transform's matrix.
     */
    transform(layer: Layer, a: number, b: number, c: number, d: number, e: number, f: number): void;

    /**
     * Sets the channel mask for future operations on this Layer.
     * The channel mask is a Guacamole-specific compositing operation identifier
     * with a single bit representing each of four channels (in order): source
     * image where destination transparent, source where destination opaque,
     * destination where source transparent, and destination where source opaque.
     * @param layer The layer to modify.
     * @param mask The channel mask for future operations on this Layer.
     */
    setChannelMask(layer: Layer, mask: number): void;

    /**
     * Sets the miter limit for stroke operations using the miter join. This
     * limit is the maximum ratio of the size of the miter join to the stroke
     * width. If this ratio is exceeded, the miter will not be drawn for that
     * joint of the path.
     * @param layer The layer to modify.
     * @param limit The miter limit for stroke operations using the miter join.
     */
    setMeterLimit(layer: Layer, limit: number): void;

    /**
     * Removes the given layer container entirely, such that it is no longer
     * contained within its parent layer, if any.
     * @param layer The layer being removed from its parent.
     */
    dispose(layer: Layer): void;

    /**
     * Applies the given affine transform (defined with six values from the
     * transform's matrix) to the given layer.
     * @param layer The layer being distorted.
     * @param a The first value in the affine transform's matrix.
     * @param b The second value in the affine transform's matrix.
     * @param c The third value in the affine transform's matrix.
     * @param d The fourth value in the affine transform's matrix.
     * @param e The fifth value in the affine transform's matrix.
     * @param f The sixth value in the affine transform's matrix.
     */
    distort(layer: Layer, a: number, b: number, c: number, d: number, e: number, f: number): void;

    /**
     * Moves the upper-left corner of the given layer to the given X and Y
     * coordinate, sets the Z stacking order, and reparents the layer
     * to the given parent layer.
     * @param layer The layer being moved.
     * @param parent The parent to set.
     * @param x The X coordinate to move to.
     * @param y The Y coordinate to move to.
     * @param z The Z coordinate to move to.
     */
    move(layer: VisibleLayer, parent: VisibleLayer, x: number, y: number, z: number): void;

    /**
     * Sets the opacity of the given layer to the given value, where 255 is
     * fully opaque and 0 is fully transparent.
     * @param layer The layer whose opacity should be set.
     * @param alpha The opacity to set.
     */
    shade(layer: VisibleLayer, alpha: number): void;

    /**
     * Sets the scale of the client display element such that it renders at
     * a relatively smaller or larger size, without affecting the true
     * resolution of the display.
     * @param scale The scale to resize to, where 1.0 is normal size (1:1 scale).
     */
    scale(scale: number): void;

    /**
     * Returns the scale of the display.
     */
    getScale(): number;

    /**
     * Returns a canvas element containing the entire display, with all child
     * layers composited within.
     * @return A new canvas element containing a copy of the display.
     */
    flatten(): void;
    /**
     * Returns the element which contains the Guacamole display.
     */
    getElement(): HTMLElement;

    /**
     * Returns the width of this display.
     */
    getWidth(): number;

    /**
     * Returns the height of this display.
     */
    getHeight(): number;

    /**
     * Returns the default layer of this display. Each Guacamole display always
     * has at least one layer. Other layers can optionally be created within
     * this layer, but the default layer cannot be removed and is the absolute
     * ancestor of all other layers.
     * @return The default layer.
     */
    getDefaultLayer(): VisibleLayer;

    /**
     * Returns the cursor layer of this display. Each Guacamole display contains
     * a layer for the image of the mouse cursor. This layer is a special case
     * and exists above all other layers, similar to the hardware mouse cursor.
     * @return The cursor layer.
     */
    getCursorLayer(): VisibleLayer;

    /**
     * Creates a new layer. The new layer will be a direct child of the default
     * layer, but can be moved to be a child of any other layer. Layers returned
     * by this function are visible.
     * @return The newly-created layer.
     */
    createLayer(): VisibleLayer;

    /**
     * Creates a new buffer. Buffers are invisible, off-screen surfaces. They
     * are implemented in the same manner as layers, but do not provide the
     * same nesting semantics.
     * @return The newly-created buffer.
     */
    createBuffer(): Layer;

    /**
     * Flush all pending draw tasks, if possible, as a new frame. If the entire
     * frame is not ready, the flush will wait until all required tasks are unblocked.
     * @param callback The function to call when this frame is
     * flushed. This may happen immediately, or
     * later when blocked tasks become unblocked.
     */
    flush(callback: () => void): void;

    /**
     * Sets the hotspot and image of the mouse cursor displayed within the
     * Guacamole display.
     * @param hotspotX The X coordinate of the cursor hotspot.
     * @param hotspotY The Y coordinate of the cursor hotspot.
     * @param layer The source layer containing the data which should be used as the mouse cursor image.
     * @param srcx The X coordinate of the upper-left corner of the
     * rectangle within the source layer's coordinate space to copy data from.
     * @param srcy The Y coordinate of the upper-left corner of the
     * rectangle within the source layer's coordinate space to copy data from.
     * @param srcw The width of the rectangle within the source layer's coordinate space to copy data from.
     * @param srch The height of the rectangle within the source layer's coordinate space to copy data from.
     */
    setCursor(
        hotspotX: number,
        hotspotY: number,
        layer: Layer,
        srcx: number,
        srcy: number,
        srcw: number,
        srch: number,
    ): void;

    /**
     * Sets whether the software-rendered cursor is shown. This cursor differs
     * from the hardware cursor in that it is built into the Guacamole.Display,
     * and relies on its own Guacamole layer to render.
     * @param [shown=true] Whether to show the software cursor.
     */
    showCursor(shown: boolean): void;

    /**
     * Sets the location of the local cursor to the given coordinates. For the
     * sake of responsiveness, this function performs its action immediately.
     * Cursor motion is not maintained within atomic frames.
     * @param x The X coordinate to move the cursor to.
     * @param y The Y coordinate to move the cursor to.
     */
    moveCursor(x: number, y: number): void;

    /**
     * Changes the size of the given Layer to the given width and height.
     * Resizing is only attempted if the new size provided is actually different
     * from the current size.
     * @param layer The layer to resize.
     * @param width The new width.
     * @param height The new height.
     */
    resize(layer: Layer, width: number, height: number): void;

    /**
     * Draws the specified image at the given coordinates. The image specified
     * must already be loaded.
     * @param layer The layer to draw upon.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     * @param image The image to draw. Note that this is an Image object - not a URL.
     */
    drawImage(layer: Layer, x: number, y: number, image: HTMLImageElement): void;

    /**
     * Draws the image contained within the specified Blob at the given
     * coordinates. The Blob specified must already be populated with image data.
     * @param layer The layer to draw upon.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     * @param blob The Blob containing the image data to draw.
     */
    drawBlob(layer: Layer, x: number, y: number, blob: Blob): void;

    /**
     * Draws the image at the specified URL at the given coordinates. The image
     * will be loaded automatically, and this and any future operations will
     * wait for the image to finish loading.
     * @param layer The layer to draw upon.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     * @param url The URL of the image to draw.
     */
    draw(layer: Layer, x: number, y: number, url: string): void;

    /**
     * Plays the video at the specified URL within this layer. The video
     * will be loaded automatically, and this and any future operations will
     * wait for the video to finish loading. Future operations will not be
     * executed until the video finishes playing.
     * @param layer The layer to draw upon.
     * @param mimetype The mimetype of the video to play.
     * @param duration The duration of the video in milliseconds.
     * @param url The URL of the video to play.
     */
    play(layer: Layer, mimetype: Mimetype, duration: number, url: string): void;

    /**
     * Transfer a rectangle of image data from one Layer to this Layer using the
     * specified transfer function.
     * @param srcLayer The Layer to copy image data from.
     * @param srcx The X coordinate of the upper-left corner of the
     * rectangle within the source Layer's coordinate space to copy data from.
     * @param srcy The Y coordinate of the upper-left corner of the
     * rectangle within the source Layer's coordinate space to copy data from.
     * @param srcw The width of the rectangle within the source Layer's
     * coordinate space to copy data from.
     * @param  srch The height of the rectangle within the source
     * Layer's coordinate space to copy data from.
     * @param dstLayer The layer to draw upon.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     * @param transferFunction The transfer function to use to
     * transfer data from source to destination.
     */
    transfer(
        srcLayer: Layer,
        srcx: number,
        srcy: number,
        srcw: number,
        srch: number,
        dstLayer: Layer,
        x: number,
        y: number,
        transferFunction: (srcPixel: Layer.Pixel, dstPixel: Layer.Pixel) => void,
    ): void;

    /**
     * Put a rectangle of image data from one Layer to this Layer directly
     * without performing any alpha blending. Simply copy the data.
     * @param srcLayer The Layer to copy image data from.
     * @param srcx The X coordinate of the upper-left corner of the
     * rectangle within the source Layer's coordinate space to copy data from.
     * @param srcy The Y coordinate of the upper-left corner of the
     * rectangle within the source Layer's coordinate space to copy data from.
     * @param srcw The width of the rectangle within the source Layer's
     * coordinate space to copy data from.
     * @param srch The height of the rectangle within the source
     * Layer's coordinate space to copy data from.
     * @param dstLayer The layer to draw upon.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     */
    put(
        srcLayer: Layer,
        srcx: number,
        srcy: number,
        srcw: number,
        srch: number,
        dstLayer: Layer,
        x: number,
        y: number,
    ): void;

    /**
     * Copy a rectangle of image data from one Layer to this Layer. This
     * operation will copy exactly the image data that will be drawn once all
     * operations of the source Layer that were pending at the time this
     * function was called are complete. This operation will not alter the
     * size of the source Layer even if its autosize property is set to true.
     * @param srcLayer The Layer to copy image data from.
     * @param srcx The X coordinate of the upper-left corner of the
     * rectangle within the source Layer's coordinate space to copy data from.
     * @param srcy The Y coordinate of the upper-left corner of the
     * rectangle within the source Layer's coordinate space to copy data from.
     * @param srcw The width of the rectangle within the source Layer's
     * coordinate space to copy data from.
     * @param srch The height of the rectangle within the source
     * Layer's coordinate space to copy data from.
     * @param dstLayer The layer to draw upon.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     */
    copy(
        srcLayer: Layer,
        srcx: number,
        srcy: number,
        srcw: number,
        srch: number,
        dstLayer: Layer,
        x: number,
        y: number,
    ): void;

    /**
     * Add the specified line to the current path.
     * @param layer The layer to draw upon.
     * @param x The X coordinate of the endpoint of the line to draw.
     * @param y The Y coordinate of the endpoint of the line to draw.
     */
    lineTo(layer: Layer, x: number, y: number): void;

    /**
     * Fired when the default layer (and thus the entire Guacamole display) is resized.
     * @event
     * @param width The new width of the Guacamole display.
     * @param height The new height of the Guacamole display.
     */
    onresize: null | ((width: number, height: number) => void);

    /**
     * Fired whenever the local cursor image is changed. This can be used to
     * implement special handling of the client-side cursor, or to override
     * the default use of a software cursor layer.
     * @event
     * @param cursorCanvas The cursor image.
     * @param x The X-coordinate of the cursor hotspot.
     * @param y The Y-coordinate of the cursor hotspot.
     */
    oncursor: null | ((cursorCanvas: HTMLCanvasElement, x: number, y: number) => void);
}

export function Event(type: any): any;

/**
 * A hidden input field which attempts to keep itself focused at all times,
 * except when another input field has been intentionally focused, whether
 * programatically or by the user. The actual underlying input field, returned
 * by getElement(), may be used as a reliable source of keyboard-related events,
 * particularly composition and input events which may require a focused input
 * field to be dispatched at all.
 */
export class InputSink {
    /**
     * Attempts to focus the underlying input field. The focus attempt occurs
     * asynchronously, and may silently fail depending on browser restrictions.
     */
    focus(): void;

    /**
     * Returns the underlying input field. This input field MUST be manually
     * added to the DOM for the Guacamole.InputSink to have any effect.
     */
    getElement(): HTMLElement;
}

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

/**
 * Integer pool which returns consistently increasing integers while integers
 * are in use, and previously-used integers when possible.
 */
export class IntegerPool {
    /**
     * The next integer to return if no more integers remain.
     */
    next_int: number;

    /**
     * Returns the next available integer in the pool. If possible, a previously
     * used integer will be returned.
     *
     * @return The next available integer.
     */
    next(): number;

    /**
     * Frees the given integer, allowing it to be reused.
     *
     * @param integer The integer to free.
     */
    free(integer: number): void;
}

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

export namespace Keyboard {
    export {};
    /**
     * The state of all supported keyboard modifiers.
     */
    export class ModifierState {
        /**
         * Returns the modifier state applicable to the keyboard event given.
         * @param event The keyboard event to read.
         * @returns The current state of keyboard modifiers.
         */
        static fromKeyboardEvent(event: KeyboardEvent): ModifierState;

        /**
         * Whether shift is currently pressed.
         */
        shift: boolean;

        /**
         * Whether ctrl is currently pressed.
         */
        ctrl: boolean;

        /**
         * Whether alt is currently pressed.
         */
        alt: boolean;

        /**
         * Whether meta (apple key) is currently pressed.
         */
        meta: boolean;

        /**
         * Whether hyper (windows key) is currently pressed.
         */
        hyper: boolean;
    }
}

/**
 * Provides cross-browser and cross-keyboard keyboard for a specific element.
 * Browser and keyboard layout variation is abstracted away, providing events
 * which represent keys as their corresponding X11 keysym.
 */
export class Keyboard {
    /**
     * @param element
     * The Element to use to provide keyboard events. If omitted, at least one
     * Element must be manually provided through the listenTo() function for
     * the Guacamole.Keyboard instance to have any effect.
     */
    constructor(element?: HTMLDocument | HTMLElement);

    /**
     * Fired whenever the user presses a key with the element associated
     * with this Guacamole.Keyboard in focus.
     * @event
     * @param keysym The keysym of the key being pressed.
     * @return true if the key event should be allowed through to the browser, false otherwise.
     */
    onkeydown: null | ((keysym: number) => boolean | void);

    /**
     * Fired whenever the user releases a key with the element associated
     * with this Guacamole.Keyboard in focus.
     * @event
     * @param keysym The keysym of the key being released.
     */
    onkeyup: null | ((keysym: number) => void);

    /**
     * All modifiers and their states.
     */
    modifiers: Keyboard.ModifierState;

    /**
     * The state of every key, indexed by keysym. If a particular key is
     * pressed, the value of pressed for that keysym will be true. If a key
     * is not currently pressed, it will not be defined.
     */
    pressed: { [keysym: number]: true };

    /**
     * Marks a key as pressed, firing the keydown event if registered. Key
     * repeat for the pressed key will start after a delay if that key is
     * not a modifier. The return value of this function depends on the
     * return value of the keydown event handler, if any.
     *
     * @param keysym The keysym of the key to press.
     * @return true if event should NOT be canceled, false otherwise.
     */
    press(keysym: number): boolean;

    /**
     * Marks a key as released, firing the keyup event if registered.
     * @param keysym The keysym of the key to release.
     */
    release(keysym: number): void;

    /**
     * Presses and releases the keys necessary to type the given string of
     * text.
     *
     * @param str The string to type.
     */
    type(str: string): void;

    /**
     * Resets the state of this keyboard, releasing all keys, and firing keyup
     * events for each released key.
     */
    reset(): void;

    /**
     * Attaches event listeners to the given Element, automatically translating
     * received key, input, and composition events into simple keydown/keyup
     * events signalled through this Guacamole.Keyboard's onkeydown and
     * onkeyup handlers.
     *
     * @param element
     * The Element to attach event listeners to for the sake of handling key or input events.
     */
    listenTo(element: HTMLElement | HTMLDocument): void;
}

export namespace Layer {
    export {};
    export type LineCap = 'round' | 'square' | 'butt';
    export type LineJoin = 'round' | 'bevel' | 'mitter';

    /**
     * Represents a single pixel of image data. All components have a minimum value
     * of 0 and a maximum value of 255.
     */
    export class Pixel {
        /**
         * @param r The red component of this pixel.
         * @param g The green component of this pixel.
         * @param b The blue component of this pixel.
         * @param a The alpha component of this pixel.
         */
        constructor(r: number, g: number, b: number, a: number);

        /**
         * The red component of this pixel, where 0 is the minimum value,
         * and 255 is the maximum.
         */
        red: number;

        /**
         * The green component of this pixel, where 0 is the minimum value,
         * and 255 is the maximum.
         */
        green: number;

        /**
         * The blue component of this pixel, where 0 is the minimum value,
         * and 255 is the maximum.
         */
        blue: number;

        /**
         * The alpha component of this pixel, where 0 is the minimum value,
         * and 255 is the maximum.
         */
        alpha: number;
    }
}

/**
 * Abstract ordered drawing surface. Each Layer contains a canvas element and
 * provides simple drawing instructions for drawing to that canvas element,
 * however unlike the canvas element itself, drawing operations on a Layer are
 * guaranteed to run in order, even if such an operation must wait for an image
 * to load before completing.
 */
export class Layer {
    /**
     * Channel mask for the composite operation "rout".
     */
    static readonly ROUT: 0x2;

    /**
     * Channel mask for the composite operation "atop".
     */
    static readonly ATOP: 0x6;

    /**
     * Channel mask for the composite operation "xor".
     */
    static readonly XOR: 0xa;

    /**
     * Channel mask for the composite operation "rover".
     */
    static readonly ROVER: 0xb;

    /**
     * Channel mask for the composite operation "over".
     */
    static readonly OVER: 0xe;

    /**
     * Channel mask for the composite operation "plus".
     */
    static readonly PLUS: 0xf;

    /**
     * Channel mask for the composite operation "rin".
     * Beware that WebKit-based browsers may leave the contents of the destionation
     * layer where the source layer is transparent, despite the definition of this
     * operation.
     */
    static readonly RIN: 0x1;

    /**
     * Channel mask for the composite operation "in".
     * Beware that WebKit-based browsers may leave the contents of the destionation
     * layer where the source layer is transparent, despite the definition of this
     * operation.
     */
    static readonly IN: 0x4;

    /**
     * Channel mask for the composite operation "out".
     * Beware that WebKit-based browsers may leave the contents of the destionation
     * layer where the source layer is transparent, despite the definition of this
     * operation.
     */
    static readonly OUT: 0x8;

    /**
     * Channel mask for the composite operation "ratop".
     * Beware that WebKit-based browsers may leave the contents of the destionation
     * layer where the source layer is transparent, despite the definition of this
     * operation.
     */
    static readonly RATOP: 0x9;

    /**
     * Channel mask for the composite operation "src".
     * Beware that WebKit-based browsers may leave the contents of the destionation
     * layer where the source layer is transparent, despite the definition of this
     * operation.
     */
    static readonly SRC: 0xc;

    /**
     * @param width The width of the Layer, in pixels. The canvas element
     * backing this Layer will be given this width.
     * @param height The height of the Layer, in pixels. The canvas element
     * backing this Layer will be given this height.
     */
    constructor(width: number, height: number);

    /**
     * Set to true if this Layer should resize itself to accomodate the
     * dimensions of any drawing operation, and false (the default) otherwise.
     * Note that setting this property takes effect immediately, and thus may
     * take effect on operations that were started in the past but have not
     * yet completed. If you wish the setting of this flag to only modify
     * future operations, you will need to make the setting of this flag an
     * operation with sync().
     * @example
     * // Set autosize to true for all future operations
     * layer.sync(function() {
     *     layer.autosize = true;
     * });
     */
    autoresize: boolean;

    /**
     * The current width of this layer.
     */
    width: number;

    /**
     * The current height of this layer.
     */
    height: number;

    /**
     * Returns the canvas element backing this Layer. Note that the dimensions
     * of the canvas may not exactly match those of the Layer, as resizing a
     * canvas while maintaining its state is an expensive operation.
     * @returns The canvas element backing this Layer.
     */
    getCanvas(): HTMLCanvasElement;

    /**
     * Returns a new canvas element containing the same image as this Layer.
     * Unlike getCanvas(), the canvas element returned is guaranteed to have
     * the exact same dimensions as the Layer.
     * @returns A new canvas element containing a copy of the image content this Layer.
     */
    toCanvas(): HTMLCanvasElement;

    /**
     * Changes the size of this Layer to the given width and height. Resizing
     * is only attempted if the new size provided is actually different from
     * the current size.
     * @param newWidth The new width to assign to this Layer.
     * @param newHeight The new height to assign to this Layer.
     */
    resize(newWidth: number, newHeight: number): void;

    /**
     * Draws the specified image at the given coordinates. The image specified
     * must already be loaded.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     * @param image The image to draw. Note that this is an Image object - not a URL.
     */
    drawImage(x: number, y: number, image: HTMLImageElement): void;

    /**
     * Transfer a rectangle of image data from one Layer to this Layer using the
     * specified transfer function.
     * @param srcLayer The Layer to copy image data from.
     * @param srcx The X coordinate of the upper-left corner of the
     *                      rectangle within the source Layer's coordinate
     *                      space to copy data from.
     * @param srcy The Y coordinate of the upper-left corner of the
     *                      rectangle within the source Layer's coordinate
     *                      space to copy data from.
     * @param srcw The width of the rectangle within the source Layer's
     *                      coordinate space to copy data from.
     * @param srch The height of the rectangle within the source
     *                      Layer's coordinate space to copy data from.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     * @param transferFunction The transfer function to use to
     * transfer data from source to destination.
     */
    transfer(
        srcLayer: Layer,
        srcx: number,
        srcy: number,
        srcw: number,
        srch: number,
        x: number,
        y: number,
        transferFunction: (srcPixel: Layer.Pixel, dstPixel: Layer.Pixel) => void,
    ): void;

    /**
     * Put a rectangle of image data from one Layer to this Layer directly
     * without performing any alpha blending. Simply copy the data.
     * @param srcLayer The Layer to copy image data from.
     * @param srcx The X coordinate of the upper-left corner of the
     * rectangle within the source Layer's coordinate space to copy data from.
     * @param srcy The Y coordinate of the upper-left corner of the
     * rectangle within the source Layer's coordinate space to copy data from.
     * @param srcw The width of the rectangle within the source Layer's
     * coordinate space to copy data from.
     * @param srch The height of the rectangle within the source
     * coordinate space to copy data from.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     */
    put(srcLayer: Layer, srcx: number, srcy: number, srcw: number, srch: number, x: number, y: number): void;

    /**
     * Copy a rectangle of image data from one Layer to this Layer. This
     * operation will copy exactly the image data that will be drawn once all
     * operations of the source Layer that were pending at the time this
     * function was called are complete. This operation will not alter the
     * size of the source Layer even if its autosize property is set to true.
     * @param srcLayer The Layer to copy image data from.
     * @param srcx The X coordinate of the upper-left corner of the
     * rectangle within the source Layer's coordinate space to copy data from.
     * @param srcy The Y coordinate of the upper-left corner of the
     * rectangle within the source Layer's coordinate space to copy data from.
     * @param srcw The width of the rectangle within the source Layer's
     * coordinate space to copy data from.
     * @param srch The height of the rectangle within the source
     * Layer's coordinate space to copy data from.
     * @param x The destination X coordinate.
     * @param y The destination Y coordinate.
     */
    copy(srcLayer: Layer, srcx: number, srcy: number, srcw: number, srch: number, x: number, y: number): void;

    distort(a: number, b: number, c: number, d: number, e: number, f: number): void;

    /**
     * Starts a new path at the specified point.
     * @param cp1x The X coordinate of the first control point.
     * @param cp1y The Y coordinate of the first control point.
     * @param cp2x The X coordinate of the second control point.
     * @param cp2y The Y coordinate of the second control point.
     * @param x The X coordinate of the endpoint of the curve.
     * @param y The Y coordinate of the endpoint of the curve.
     */
    curveTo: CanvasRenderingContext2D['bezierCurveTo'];

    /**
     * Add the specified rectangle to the current path.
     * @param x The X coordinate of the upper-left corner of the rectangle to draw.
     * @param y The Y coordinate of the upper-left corner of the rectangle to draw.
     * @param w The width of the rectangle to draw.
     * @param h The height of the rectangle to draw.
     */
    rect: CanvasRenderingContext2D['rect'];

    /**
     * Starts a new path at the specified point.
     * @param x The X coordinate of the point to draw.
     * @param y The Y coordinate of the point to draw.
     */
    moveTo: CanvasRenderingContext2D['moveTo'];

    /**
     * Add the specified line to the current path.
     * @param x The X coordinate of the endpoint of the line to draw.
     * @param y The Y coordinate of the endpoint of the line to draw.
     */
    lineTo: CanvasRenderingContext2D['lineTo'];

    /**
     * Add the specified arc to the current path.
     * @param x The X coordinate of the center of the circle which
     *                   will contain the arc.
     * @param y The Y coordinate of the center of the circle which
     *                   will contain the arc.
     * @param radius The radius of the circle.
     * @param startAngle The starting angle of the arc, in radians.
     * @param endAngle The ending angle of the arc, in radians.
     * @param negative Whether the arc should be drawn in order of
     *                           decreasing angle.
     */
    arc: CanvasRenderingContext2D['arc'];

    /**
     * Closes the current path by connecting the end point with the start
     * point (if any) with a straight line.
     */
    close: CanvasRenderingContext2D['closePath'];

    /**
     * Clip all future drawing operations by the current path. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as fillColor()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     */
    clip: CanvasRenderingContext2D['clip'];

    /**
     * Stroke the current path with the specified color. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as clip()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param cap The line cap style. Can be "round", "square", or "butt".
     * @param join The line join style. Can be "round", "bevel", miter".
     * @param thickness The line thickness in pixels.
     * @param r The red component of the color to fill.
     * @param g The green component of the color to fill.
     * @param b The blue component of the color to fill.
     * @param a The alpha component of the color to fill.
     */
    strokeColor(
        cap: Layer.LineCap,
        join: Layer.LineJoin,
        thickness: number,
        r: number,
        g: number,
        b: number,
        a: number,
    ): void;

    /**
     * Fills the current path with the specified color. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as clip()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param r The red component of the color to fill.
     * @param g The green component of the color to fill.
     * @param b The blue component of the color to fill.
     * @param a The alpha component of the color to fill.
     */
    fillColor(r: number, g: number, b: number, a: number): void;

    /**
     * Stroke the current path with the specified color. The current path
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as clip()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param cap The line cap style. Can be "round", "square", or "butt".
     * @param join The line join style. Can be "round", "bevel", or "miter".
     * @param thickness The line thickness in pixels.
     * @param r The red component of the color to fill.
     * @param g The green component of the color to fill.
     * @param b The blue component of the color to fill.
     * @param a The alpha component of the color to fill.
     */
    strokeLayer(cap: Layer.LineCap, join: Layer.LineJoin, thickness: number, layer: Layer): void;

    /**
     * Fills the current path with the image within the specified layer. The
     * is implicitly closed. The current path can continue to be reused
     * for other operations (such as clip()) but a new path will be started
     * once a path drawing operation (path() or rect()) is used.
     * @param srcLayer The layer to use as a repeating pattern within the fill.
     */
    fillLayer(srcLayer: Layer): void;

    /**
     * Push current layer state onto stack.
     */
    push(): void;

    /**
     * Pop layer state off stack.
     */
    pop(): void;

    /**
     * Reset the layer, clearing the stack, the current path, and any transform
     * matrix.
     */
    reset(): void;

    /**
     * Sets the given affine transform (defined with six values from the
     * transform's matrix).
     * @param a The first value in the affine transform's matrix.
     * @param b The second value in the affine transform's matrix.
     * @param c The third value in the affine transform's matrix.
     * @param d The fourth value in the affine transform's matrix.
     * @param e The fifth value in the affine transform's matrix.
     * @param f The sixth value in the affine transform's matrix.
     */
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void;

    /**
     * Applies the given affine transform (defined with six values from the
     * transform's matrix).
     * @param a The first value in the affine transform's matrix.
     * @param b The second value in the affine transform's matrix.
     * @param c The third value in the affine transform's matrix.
     * @param d The fourth value in the affine transform's matrix.
     * @param e The fifth value in the affine transform's matrix.
     * @param f The sixth value in the affine transform's matrix.
     */
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void;

    /**
     * Sets the channel mask for future operations on this Layer.
     * The channel mask is a Guacamole-specific compositing operation identifier
     * with a single bit representing each of four channels (in order): source
     * image where destination transparent, source where destination opaque,
     * destination where source transparent, and destination where source opaque.
     * @param mask The channel mask for future operations on this Layer.
     */
    setChannelMask(mask: number): void;

    /**
     * Sets the miter limit for stroke operations using the miter join. This
     * limit is the maximum ratio of the size of the miter join to the stroke
     * width. If this ratio is exceeded, the miter will not be drawn for that
     * joint of the path.
     * @param limit The miter limit for stroke operations using the miter join.
     */
    setMiterLimit(limit: number): void;
}

export namespace Mouse {
    export {};
    /**
     * Simple container for properties describing the state of a mouse.
     */
    export class State {
        /**
         * @param x The X position of the mouse pointer in pixels.
         * @param y The Y position of the mouse pointer in pixels.
         * @param left Whether the left mouse button is pressed.
         * @param middle Whether the middle mouse button is pressed.
         * @param right Whether the right mouse button is pressed.
         * @param up Whether the up mouse button is pressed (the fourth button, usually part of a scroll wheel).
         * @param down Whether the down mouse button is pressed (the fifth button, usually part of a scroll wheel).
         */
        constructor(x: number, y: number, left: boolean, middle: boolean, right: boolean, up: boolean, down: boolean);

        /**
         * The current X position of the mouse pointer.
         */
        x: number;

        /**
         * The current Y position of the mouse pointer.
         */
        y: number;

        /**
         * Whether the left mouse button is currently pressed.
         */
        left: boolean;

        /**
         * Whether the middle mouse button is currently pressed.
         */
        middle: boolean;

        /**
         * Whether the right mouse button is currently pressed.
         */
        right: boolean;

        /**
         * Whether the up mouse button is currently pressed. This is the fourth
         * mouse button, associated with upward scrolling of the mouse scroll
         * wheel.
         */
        up: boolean;

        /**
         * Whether the down mouse button is currently pressed. This is the fifth
         * mouse button, associated with downward scrolling of the mouse scroll
         * wheel.
         */
        down: boolean;

        /**
         * Updates the position represented within this state object by the given
         * element and clientX/clientY coordinates (commonly available within event
         * objects). Position is translated from clientX/clientY (relative to
         * viewport) to element-relative coordinates.
         *
         * @param element The element the coordinates should be relative to.
         * @param clientX The X coordinate to translate, viewport-relative.
         * @param clientY The Y coordinate to translate, viewport-relative.
         */
        fromClientPosition(element: HTMLElement | HTMLDocument, clientX: number, clientY: number): State;
    }

    class GuacTouchDevice {
        /**
         * @param element The Element to use to provide touch events.
         */
        constructor(element: HTMLElement);

        /**
         * The distance a two-finger touch must move per scrollwheel event, in
         * pixels.
         */
        scrollThreshold: number;

        /**
         * The maximum number of milliseconds to wait for a touch to end for the
         * gesture to be considered a click.
         */
        clickTimingThreshold: number;

        /**
         * The maximum number of pixels to allow a touch to move for the gesture to
         * be considered a click.
         */
        clickMoveThreshold: number;

        /**
         * The current mouse state. The properties of this state are updated when
         * mouse events fire. This state object is also passed in as a parameter to
         * the handler of any mouse events.
         */
        currentState: State;

        /**
         * Fired whenever a mouse button is effectively pressed. This can happen
         * as part of a "click" gesture initiated by the user by tapping one
         * or more fingers over the touchpad element, as part of a "scroll"
         * gesture initiated by dragging two fingers up or down, etc.
         * @event
         * @param state The current mouse state.
         */
        onmousedown: null | ((state: State) => void);

        /**
         * Fired whenever a mouse button is effectively released. This can happen
         * as part of a "click" gesture initiated by the user by tapping one
         * or more fingers over the touchpad element, as part of a "scroll"
         * gesture initiated by dragging two fingers up or down, etc.
         * @event
         * @param state The current mouse state.
         */
        onmouseup: null | ((state: State) => void);

        /**
         * Fired whenever the user moves the mouse by dragging their finger over
         * the touchpad element.
         * @event
         * @param state The current mouse state.
         */
        onmousemove: null | ((state: State) => void);
    }

    /**
     * Provides cross-browser relative touch event translation for a given element.
     *
     * Touch events are translated into mouse events as if the touches occurred
     * on a touchpad (drag to push the mouse pointer, tap to click).
     * @param element The Element to use to provide touch events.
     */
    export class Touchpad extends GuacTouchDevice {}

    /**
     * Provides cross-browser absolute touch event translation for a given element.
     * Touch events are translated into mouse events as if the touches occurred
     * on a touchscreen (tapping anywhere on the screen clicks at that point,
     * long-press to right-click).
     * @param element The Element to use to provide touch events.
     */
    export class Touchscreen extends GuacTouchDevice {
        /**
         * The amount of time a press must be held for long press to be
         * detected.
         */
        longPressThreshold: number;
    }
}

/**
 * Provides cross-browser mouse events for a given element. The events of
 * the given element are automatically populated with handlers that translate
 * mouse events into a non-browser-specific event provided by the
 * Guacamole.Mouse instance.
 */
export class Mouse {
    /**
     * @param element The Element to use to provide mouse events.
     */
    constructor(element: HTMLDocument | HTMLElement);

    /**
     * The current mouse state. The properties of this state are updated when
     * mouse events fire. This state object is also passed in as a parameter to
     * the handler of any mouse events.
     */
    currentState: Mouse.State;

    /**
     * Fired whenever the user releases a mouse button down over the element
     * associated with this Guacamole.Mouse.
     *
     * @event
     * @param state The current mouse state.
     */
    onmouseup: null | ((state: Mouse.State) => void);

    /**
     * Fired whenever the user presses a mouse button down over the element
     * associated with this Guacamole.Mouse.
     *
     * @event
     * @param state The current mouse state.
     */
    onmousedown: null | ((state: Mouse.State) => void);

    /**
     * Fired whenever the user moves the mouse over the element associated with
     * this Guacamole.Mouse.
     *
     * @event
     * @param state The current mouse state.
     */
    onmousemove: null | ((state: Mouse.State) => void);

    /**
     * Fired whenever the mouse leaves the boundaries of the element associated
     * with this Guacamole.Mouse.
     *
     * @event
     */
    onmouseout: null | (() => void);
}

export function Object(client: any, index: any): any;

export function OnScreenKeyboard(layout: any): any;

/**
 * Abstract stream which can receive data.
 */
export class OutputStream {
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
     * Writes the given base64-encoded data to this stream as a blob.
     * @param data The base64-encoded data to send.
     */
    sendBlob(data64: string): void;

    /**
     * Closes this stream.
     */
    sendEnd(): void;

    /**
     * Fired whenever an acknowledgement is received from the server, indicating
     * that a stream operation has completed, or an error has occurred.
     * @event
     * @param status The status of the operation.
     */
    onack: null | ((status: Status) => void);
}

/**
 * Simple Guacamole protocol parser that invokes an oninstruction event when
 * full instructions are available from data received via receive().
 */
export class Parser {
    /**
     * Appends the given instruction data packet to the internal buffer of
     * this Guacamole.Parser, executing all completed instructions at
     * the beginning of this buffer, if any.
     * @param packet The instruction data to receive.
     */
    receive(packet: string): void;

    /**
     * Fired once for every complete Guacamole instruction received, in order.
     * @event
     * @param opcode The Guacamole instruction opcode.
     * @param parameters The parameters provided for the instruction, if any.
     */
    oninstruction: null | ((opcode: string, params: unknown[]) => void);
}

export function Position(template: any): void;

/**
 * A description of the format of raw PCM audio, such as that used by
 * Guacamole.RawAudioPlayer and Guacamole.RawAudioRecorder. This object
 * describes the number of bytes per sample, the number of channels, and the
 * overall sample rate.
 */
export class RawAudioFormat {
    /**
     * Parses the given mimetype, returning a new Guacamole.RawAudioFormat
     * which describes the type of raw audio data represented by that mimetype. If
     * the mimetype is not a supported raw audio data mimetype, null is returned.
     *
     * @param mimetype The audio mimetype to parse.
     * @returns
     *     A new Guacamole.RawAudioFormat which describes the type of raw
     *     audio data represented by the given mimetype, or null if the given
     *     mimetype is not supported.
     */
    static parse(mimetype: Mimetype): RawAudioFormat;

    /**
     * @param template The object whose properties should be copied into the corresponding
     * properties of the new Guacamole.RawAudioFormat.
     */
    constructor(template: RawAudioFormat);

    /**
     * The number of bytes in each sample of audio data. This value is
     * independent of the number of channels.
     */
    bytesPerSample: number;

    /**
     * The number of audio channels (ie: 1 for mono, 2 for stereo).
     *
     */
    channels: number;

    /**
     * The number of samples per second, per channel.
     */
    rate: number;
}

/**
 * Implementation of Guacamole.AudioPlayer providing support for raw PCM format
 * audio. This player relies only on the Web Audio API and does not require any
 * browser-level support for its audio formats.
 */
export class RawAudioPlayer extends AudioPlayer {
    /**
     * Determines whether the given mimetype is supported by
     * Guacamole.RawAudioPlayer.
     * @param mimetype The mimetype to check.
     * @returns true if the given mimetype is supported by Guacamole.RawAudioPlayer, false otherwise.
     */
    static isSupportedType(mimetype: Mimetype): boolean;

    /**
     * Returns a list of all mimetypes supported by Guacamole.RawAudioPlayer. Only
     * the core mimetypes themselves will be listed. Any mimetype parameters, even
     * required ones, will not be included in the list. For example, "audio/L8" is
     * a raw audio mimetype that may be supported, but it is invalid without
     * additional parameters. Something like "audio/L8;rate=44100" would be valid,
     * however (see https://tools.ietf.org/html/rfc4856).
     *
     * @returns
     *     A list of all mimetypes supported by Guacamole.RawAudioPlayer, excluding
     *     any parameters. If the necessary JavaScript APIs for playing raw audio
     *     are absent, this list will be empty.
     */
    static getSupportedTypes(): Mimetype[];

    /**
     * @param stream The Guacamole.InputStream to read audio data from.
     *
     * @param mimetype The mimetype of the audio data in the provided stream, which must be a
     * "audio/L8" or "audio/L16" mimetype with necessary parameters, such as: "audio/L16;rate=44100,channels=2".
     */
    constructor(stream: InputStream, mimetype: Mimetype);

    sync(): void;
}

export function SessionRecording(tunnel: any): any;

export namespace Status {
    export {};
    type StatusCode = Readonly<{
        SUCCESS: 0x0000;
        /**
         * The requested operation is unsupported.
         */
        UNSUPPORTED: 0x0100;
        /**
         * The operation could not be performed due to an internal failure.
         */
        SERVER_ERROR: 0x0200;
        /**
         * The operation could not be performed as the server is busy.
         */
        SERVER_BUSY: 0x0201;
        /**
         * The operation could not be performed because the upstream server is not
         * responding.
         */
        UPSTREAM_TIMEOUT: 0x0202;
        /**
         * The operation was unsuccessful due to an error or otherwise unexpected
         * condition of the upstream server.
         */
        UPSTREAM_ERROR: 0x0203;
        /**
         * The operation could not be performed as the requested resource does not
         * exist.
         */
        RESOURCE_NOT_FOUND: 0x0204;
        /**
         * The operation could not be performed as the requested resource is
         * already in use.
         */
        RESOURCE_CONFLICT: 0x0205;
        /**
         * The operation could not be performed as the requested resource is now
         * closed.
         */
        RESOURCE_CLOSED: 0x0206;
        /**
         * The operation could not be performed because the upstream server does
         * not appear to exist.
         */
        UPSTREAM_NOT_FOUND: 0x0207;
        /**
         * The operation could not be performed because the upstream server is not
         * available to service the request.
         */
        UPSTREAM_UNAVAILABLE: 0x0208;
        /**
         * The session within the upstream server has ended because it conflicted
         * with another session.
         */
        SESSION_CONFLICT: 0x0209;
        /**
         * The session within the upstream server has ended because it appeared to
         * be inactive.
         */
        SESSION_TIMEOUT: 0x020a;
        /**
         * The session within the upstream server has been forcibly terminated.
         */
        SESSION_CLOSED: 0x020b;
        /**
         * The operation could not be performed because bad parameters were given.
         */
        CLIENT_BAD_REQUEST: 0x0300;
        /**
         * Permission was denied to perform the operation, as the user is not yet
         * authorized (not yet logged in, for example).
         */
        CLIENT_UNAUTHORIZED: 0x0301;
        /**
         * Permission was denied to perform the operation, and this permission will
         * not be granted even if the user is authorized.
         */
        CLIENT_FORBIDDEN: 0x0303;
        /**
         * The client took too long to respond.
         */
        CLIENT_TIMEOUT: 0x0308;
        /**
         * The client sent too much data.
         */
        CLIENT_OVERRUN: 0x030d;
        /**
         * The client sent data of an unsupported or unexpected type.
         */
        CLIENT_BAD_TYPE: 0x030f;
        /**
         * The operation failed because the current client is already using too
         * many resources.
         */
        CLIENT_TOO_MANY: 0x031d;
    }>;

    export type Code = StatusCode[keyof StatusCode];
    export const Code: StatusCode &
        Readonly<{
            /**
             * Returns the Guacamole protocol status code which most closely
             * represents the given HTTP status code.
             *
             * @param status
             *     The HTTP status code to translate into a Guacamole protocol status
             *     code.
             *
             * @returns
             *     The Guacamole protocol status code which most closely represents the
             *     given HTTP status code.
             */
            fromHTTPCode(status: number): Code;

            /**
             * Returns the Guacamole protocol status code which most closely
             * represents the given WebSocket status code.
             *
             * @param code
             *     The WebSocket status code to translate into a Guacamole protocol
             *     status code.
             *
             * @returns
             *     The Guacamole protocol status code which most closely represents the
             *     given WebSocket status code.
             */
            fromWebSocketCode(code: number): Code;
        }>;
}

/**
 * A Guacamole status. Each Guacamole status consists of a status code, defined
 * by the protocol, and an optional human-readable message, usually only
 * included for debugging convenience.
 */
export class Status {
    /**
     * @param code The Guacamole status code, as defined by Guacamole.Status.Code.
     * @param [message] An optional human-readable message.
     */
    constructor(code: Status.Code, message?: string);

    /**
     * The Guacamole status code.
     * @see Guacamole.Status.Code
     */
    code: Status.Code;

    /**
     * An arbitrary human-readable message associated with this status, if any.
     * The human-readable message is not required, and is generally provided
     * for debugging purposes only. For user feedback, it is better to translate
     * the Guacamole status code into a message.
     */
    message?: string | undefined;

    /**
     * Returns whether this status represents an error.
     * @returns true if this status represents an error, false otherwise.
     */
    isError(): boolean;
}

/**
 * A reader which automatically handles the given input stream, returning
 * strictly text data. Note that this object will overwrite any installed event
 * handlers on the given Guacamole.InputStream.
 */
export class StringReader {
    /**
     * @param stream The stream that data will be read from.
     */
    constructor(stream: InputStream);

    /**
     * Fired once for every blob of text data received.
     *
     * @event
     * @param text The data packet received.
     */
    ontext: null | ((text: string) => void);

    /**
     * Fired once this stream is finished and no further data will be written.
     * @event
     */
    onend: null | (() => void);
}

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

export function Touch(element: any): void;

export namespace Tunnel {
    export {};

    type TunnelState = Readonly<{
        /**
         * A connection is in pending. It is not yet known whether connection was successful.
         */
        CONNECTING: 0;
        /**
         * Connection was successful, and data is being received.
         */
        OPEN: 1;
        /**
         * The connection is closed. Connection may not have been successful, the
         * tunnel may have been explicitly closed by either side, or an error may have occurred.
         */
        CLOSED: 2;
        /**
         * The connection is open, but communication through the tunnel appears to
         * be disrupted, and the connection may close as a result.
         */
        UNSTABLE: 3;
    }>;
    /**
     * All possible tunnel states.
     */
    export type State = TunnelState[keyof TunnelState];
    /**
     * All possible tunnel states.
     */
    export const State: TunnelState;
}

export abstract class Tunnel {
    static readonly INTERNAL_DATA_OPCODE: '';
    /**
     * The maximum amount of time to wait for data to be received, in
     * milliseconds. If data is not received within this amount of time,
     * the tunnel is closed with an error. The default value is 15000.
     */
    receiveTimeout: number;

    /**
     * The current state of this tunnel.
     */
    state: Tunnel.State;

    /**
     * The UUID uniquely identifying this tunnel. If not yet known, this will
     * be null.
     */
    uuid: string | null;

    /**
     * The amount of time to wait for data to be received before considering
     * the connection to be unstable, in milliseconds. If data is not received
     * within this amount of time, the tunnel status is updated to warn that
     * the connection appears unresponsive and may close. The default value is
     * 1500.
     */
    unstableThreshold: number;

    /**
     * Connect to the tunnel with the given optional data. This data is
     * typically used for authentication. The format of data accepted is
     * up to the tunnel implementation.
     *
     * @param data The data to send to the tunnel when connecting.
     */
    connect(data?: string): void;

    /**
     * Disconnect from the tunnel.
     */
    disconnect(): void;

    /**
     * Returns whether this tunnel is currently connected.
     * @returns true if this tunnel is currently connected, false otherwise.
     */
    isConnected(): boolean;

    /**
     * Send the given message through the tunnel to the service on the other
     * side. All messages are guaranteed to be received in the order sent.
     *
     * @param elements
     *     The elements of the message to send to the service on the other side
     *     of the tunnel.
     */
    sendMessage(message: any, ...messages: any[]): void;

    /**
     * Fired once for every complete Guacamole instruction received, in order.
     * @event
     * @param opcode The Guacamole instruction opcode.
     * @param parameters The parameters provided for the instruction, if any.
     */
    oninstruction: null | ((opcode: string, args: unknown[]) => void);

    /**
     * Fired whenever the state of the tunnel changes.
     * @event
     * @param state The new state of the client.
     */
    onstatechange: null | ((state: Tunnel.State) => void);

    /**
     * Fired whenever an error is encountered by the tunnel.
     * @event
     * @param status A status object which describes the error.
     */
    onerror: null | ((status: Status) => void);
}

export function VideoPlayer(): void;

export namespace AudioContextFactory {
    const singleton: any;

    function getAudioContext(): any;
}

/**
 * Abstract video player which accepts, queues and plays back arbitrary video
 * data. It is up to implementations of this class to provide some means of
 * handling a provided Guacamole.InputStream and rendering the received data to
 * the provided Guacamole.Display.VisibleLayer. Data received along the
 * provided stream is to be played back immediately.
 */
export class VideoPlayer {
    /**
     * Determines whether the given mimetype is supported by any built-in
     * implementation of Guacamole.VideoPlayer, and thus will be properly handled
     * by Guacamole.VideoPlayer.getInstance().
     * @param mimetype The mimetype to check.
     * @returns true if the given mimetype is supported by any built-in Guacamole.VideoPlayer, false otherwise.
     */
    static isSupportedType(mimetype: MimeType): boolean;

    /**
     * Returns a list of all mimetypes supported by any built-in
     * Guacamole.VideoPlayer, in rough order of priority. Beware that only the core
     * mimetypes themselves will be listed. Any mimetype parameters, even required
     * ones, will not be included in the list.
     *
     * @returns A list of all mimetypes supported by any built-in Guacamole.VideoPlayer,
     * excluding any parameters.
     */
    static getSupportedTypes(): Mimetype[];

    /**
     * Returns an instance of Guacamole.VideoPlayer providing support for the given
     * video format. If support for the given video format is not available, null
     * is returned.
     *
     * @param stream The Guacamole.InputStream to read video data from.
     * @param layer The destination layer in which this Guacamole.VideoPlayer should play
     * the received video data.
     * @param mimetype The mimetype of the video data in the provided stream.
     * @return
     * A Guacamole.VideoPlayer instance supporting the given mimetype and
     * reading from the given stream, or null if support for the given mimetype
     * is absent.
     */
    static getInstance(stream: InputStream, layer: VisibleLayer, mimetype: MimeType): VideoPlayer | null;

    /**
     * Notifies this Guacamole.VideoPlayer that all video up to the current
     * point in time has been given via the underlying stream, and that any
     * difference in time between queued video data and the current time can be
     * considered latency.
     */
    sync(): void;
}

/**
 * An object used by the Guacamole client to house arbitrarily-many named
 * input and output streams.
 */
export class GuacObject {
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

/**
 * Represents a single key, or a single possible behavior of a key. Each key
 * on the on-screen keyboard must have at least one associated
 * Guacamole.OnScreenKeyboard.Key, whether that key is explicitly defined or
 * implied, and may have multiple Guacamole.OnScreenKeyboard.Key if behavior
 * depends on modifier states.
 */
declare class Key {
    /**
     * @param template The object whose identically-named properties will be used to initialize
     * the properties of this key.
     * @param [name] The name to use instead of any name provided within the template, if
     * any. If omitted, the name within the template will be used, assuming the
     * template contains a name.
     */
    constructor(template: Key, name?: string);

    /**
     * The unique name identifying this key within the keyboard layout.
     */
    name: string;

    /**
     * The human-readable title that will be displayed to the user within the
     * key. If not provided, this will be derived from the key name.
     */
    title: string;

    /**
     * The keysym to be pressed/released when this key is pressed/released. If
     * not provided, this will be derived from the title if the title is a
     * single character.
     */
    keysym: number;

    /**
     * The name of the modifier set when the key is pressed and cleared when
     * this key is released, if any. The names of modifiers are distinct from
     * the names of keys; both the "RightShift" and "LeftShift" keys may set
     * the "shift" modifier, for example. By default, the key will affect no
     * modifiers.
     */
    modifier: string;

    /**
     * An array containing the names of each modifier required for this key to
     * have an effect. For example, a lowercase letter may require nothing,
     * while an uppercase letter would require "shift", assuming the Shift key
     * is named "shift" within the layout. By default, the key will require
     * no modifiers.
     */
    requires: string[];
}

/**
 * Represents an entire on-screen keyboard layout, including all available
 * keys, their behaviors, and their relative position and sizing.
 * @param template
 *     The object whose identically-named properties will be used to initialize
 *     the properties of this layout.
 */
declare class Layout {
    constructor(template: Layout);
    /**
     * The language of keyboard layout, such as "en_US". This property is for
     * informational purposes only, but it is recommend to conform to the
     * [language code]_[country code] format.
     */
    language: string;

    /**
     * The type of keyboard layout, such as "qwerty". This property is for
     * informational purposes only, and does not conform to any standard.
     */
    type: string;

    /**
     * Map of key name to corresponding keysym, title, or key object. If only
     * the keysym or title is provided, the key object will be created
     * implicitly. In all cases, the name property of the key object will be
     * taken from the name given in the mapping.
     */
    keys: Record<string, number | string | Key | Key[]>;

    /**
     * Arbitrarily nested, arbitrarily grouped key names. The contents of the
     * layout will be traversed to produce an identically-nested grouping of
     * keys in the DOM tree. All strings will be transformed into their
     * corresponding sets of keys, while all objects and arrays will be
     * transformed into named groups and anonymous groups respectively. Any
     * numbers present will be transformed into gaps of that size, scaled
     * according to the same units as each key.
     */
    layout: Layout;

    /**
     * The width of the entire keyboard, in arbitrary units. The width of each
     * key is relative to this width, as both width values are assumed to be in
     * the same units. The conversion factor between these units and pixels is
     * derived later via a call to resize() on the Guacamole.OnScreenKeyboard.
     */
    width: number;

    /**
     * The width of each key, in arbitrary units, relative to other keys in
     * this layout. The true pixel size of each key will be determined by the
     * overall size of the keyboard. If not defined here, the width of each
     * key will default to 1.
     */
    keyWidths: Record<string, number>;
}

export namespace OnScreenKeyboard {
    export {};
    export type Key = typeof Key;
    export type Layout = typeof Layout;
}

/**
 * Dynamic on-screen keyboard. Given the layout object for an on-screen
 * keyboard, this object will construct a clickable on-screen keyboard with its
 * own key events.
 * @param layout The layout of the on-screen keyboard to display.
 */
export class OnScreenKeyboard {
    constructor(layout: Layout);

    /**
     * The number of mousemove events to require before re-enabling mouse
     * event handling after receiving a touch event.
     */
    touchMouseThreshold: number;

    /**
     * Fired whenever the user presses a key on this Guacamole.OnScreenKeyboard.
     *
     * @event
     * @param keysym The keysym of the key being pressed.
     */
    onkeydown: null | ((keysym: number) => void);

    /**
     * Fired whenever the user releases a key on this Guacamole.OnScreenKeyboard.
     * @event
     * @param keysym The keysym of the key being released.
     */
    onkeyup: null | ((keysym: number) => void);

    /**
     * The keyboard layout provided at time of construction.
     */
    layout: Layout;

    /**
     * Returns the element containing the entire on-screen keyboard.
     * @returns The element containing the entire on-screen keyboard.
     */
    getElement(): HTMLElement;

    /**
     * Resizes all elements within this Guacamole.OnScreenKeyboard such that
     * the width is close to but does not exceed the specified width. The
     * height of the keyboard is determined based on the width.
     * @param width The width to resize this Guacamole.OnScreenKeyboard to, in pixels.
     */
    resize(width: number): void;

    /**
     * Map of all key names to their corresponding set of keys. Each key name
     * may correspond to multiple keys due to the effect of modifiers.
     */
    keys: Record<string, Key[]>;
}

/**
 * Simple container for Guacamole.Layer, allowing layers to be easily
 * repositioned and nested. This allows certain operations to be accelerated
 * through DOM manipulation, rather than raster operations.
 */
export class VisibleLayer extends Layer {
    /**
     * @param width The width of the Layer, in pixels. The canvas element backing this Layer will be given this width.
     * @param height The height of the Layer, in pixels. The canvas element backing this Layer will be given this height.
     */
    constructor(width: number, height: number);

    /**
     * The opacity of the layer container, where 255 is fully opaque and 0 is
     * fully transparent.
     */
    alpha: number;

    /**
     * X coordinate of the upper-left corner of this layer container within
     * its parent, in pixels.
     */
    x: number;

    /**
     * Y coordinate of the upper-left corner of this layer container within
     * its parent, in pixels.
     */
    y: number;

    /**
     * Z stacking order of this layer relative to other sibling layers.
     */
    z: number;

    /**
     * The affine transformation applied to this layer container. Each element
     * corresponds to a value from the transformation matrix, with the first
     * three values being the first row, and the last three values being the
     * second row. There are six values total.
     */
    matrix: [number, number, number, number, number, number];

    /**
     * The parent layer container of this layer, if any.
     */
    parent: VisibleLayer | null;

    /**
     * Set of all children of this layer, indexed by layer index. This object
     * will have one property per child.
     */
    children: Record<number, VisibleLayer | undefined>;

    /**
     * Returns the element containing the canvas and any other elements
     * associated with this layer.
     * @returns The element containing this layer's canvas.
     */
    getElement(): HTMLElement;

    /**
     * Moves the upper-left corner of this layer to the given X and Y coordinate.
     * @param x The X coordinate to move to.
     * @param y The Y coordinate to move to.
     */
    translate(x: number, y: number): void;

    /**
     * Moves the upper-left corner of this VisibleLayer to the given X and Y
     * coordinate, sets the Z stacking order, and reparents this VisibleLayer
     * to the given VisibleLayer.
     * @param parent The parent to set.
     * @param x The X coordinate to move to.
     * @param y The Y coordinate to move to.
     * @param z The Z coordinate to move to.
     */
    move(parent: VisibleLayer, x: number, y: number, z: number): void;

    /**
     * Sets the opacity of this layer to the given value, where 255 is fully
     * opaque and 0 is fully transparent.
     * @param a The opacity to set.
     */
    shade(a: number): void;

    /**
     * Removes this layer container entirely, such that it is no longer
     * contained within its parent layer, if any.
     */
    dispose(): void;

    /**
     * Applies the given affine transform (defined with six values from the
     * transform's matrix).
     * @param a The first value in the affine transform's matrix.
     * @param b The second value in the affine transform's matrix.
     * @param c The third value in the affine transform's matrix.
     * @param d The fourth value in the affine transform's matrix.
     * @param e The fifth value in the affine transform's matrix.
     * @param f The sixth value in the affine transform's matrix.
     */
    distort(a: number, b: number, c: number, d: number, e: number, f: number): void;
}
