import { Mimetype } from './GuacCommon';
import { Tunnel } from './Tunnel';
import { OutputStream } from './OutputStream';
import { InputStream } from './InputStream';
import { Status } from './Status';
import { Display } from './Display';
import { AudioPlayer } from './AudioPlayer';
import { VideoPlayer } from './VideoPlayer';
import { VisibleLayer } from './VisibleLayer';
import { Mouse } from './Mouse';
import * as Guacamole from './Object';

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
    onfilesystem: null | ((object: Guacamole.Object, name: string) => void);

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
