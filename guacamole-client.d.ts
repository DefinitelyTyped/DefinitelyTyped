declare module 'guacamole-client' {

  /**
   * An object used by the Guacamole client to house arbitrarily-many named
   * input and output streams.
   * 
   * @param client The client owning this object.
   * @param index The index of this object.
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
    requestInputStream(name: string, bodyCallback?: (stream: InputStream, mimetype: string) => void): void;

    /**
     * Creates a new output stream associated with this object and having the
     * given mimetype and name. The legality of a mimetype and name is dictated
     * by the object itself.
     * @param mimetype The mimetype of the data which will be sent to the output stream.
     * @param name The defined name of an output stream within this object.
     * @returns An output stream which will write blobs to the named output stream of this object.
     */
    createOutputStream(mimetype: string, name: string): OutputStream;

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
    onbody: null | ((bodyStream: InputStream, mimetype: string) => void);

    /**
     * Called when this object is being undefined. Once undefined, no further
     * communication involving this object may occur.
     * 
     * @event
     */
    onundefine: null | (() => void);
  }

  export class AudioPlayer {}
  export class VideoPlayer {}

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

  export namespace Tunnel {
    export type State = TunnelState[keyof TunnelState];
  }

  export class Tunnel {
    static readonly State: TunnelState;
    receiveTimeout: number;
    state: Tunnel.State;
    uuid: string;

    connect(data: string): void;
    disconnect(): void;
    isConnected(): boolean;
    sendMessage(message: any, ...messages: any[]): void;

    oninstruction: null | ((opcode: string, args: any[]) => void);
    onstatechange: null | ((state: Tunnel.State) => void);
    onerror: null | ((status: Status) => void);
  }

  export class WebSocketTunnel extends Tunnel {
    constructor(url: string);
    readonly url: string;
  }

  export class Layer {

  }

  type LineCap = 'round' | 'square' | 'butt';
  type LineJoin = 'round' | 'bevel' | 'mitter';
  export class VisibleLayer {
    constructor(width: number, height: number);
    width: number;
    height: number;

    getCanvas(): HTMLCanvasElement;
    distort(a: number, b: number, c: number, d: number, e: number, f: number): void;
    arc: CanvasRenderingContext2D['arc'];
    curveTo: CanvasRenderingContext2D['bezierCurveTo'];
    rect: CanvasRenderingContext2D['rect'];
    clip: CanvasRenderingContext2D['clip'];
    close: CanvasRenderingContext2D['closePath'];
    moveTo: CanvasRenderingContext2D['moveTo'];
    lineTo: CanvasRenderingContext2D['lineTo'];
    dispose(): void;
    drawImage(x: number, y: number, image: HTMLImageElement): void;
    strokeColor(
      cap: LineCap,
      join: LineJoin,
      thickness: number,
      r: number,
      g: number,
      b: number,
      a: number
    ): void;
    fillColor(r: number, g: number, b: number, a: number): void;
    strokeLayer(cap: LineCap, join: LineJoin, thickness: number, layer: Layer): void;
  }

  export class InputStream {
    constructor(client: Client, index: number);
    readonly client: Client;
    readonly index: number;

    sendAck(message: string, code: Status.Code): void;

    onblob: null | ((data64: string) => void);
    onend: null | (() => void);
  }

  export class JSONReader {
    constructor(stream: InputStream);
    readonly stream: InputStream;

    onprogress: null | ((length: number) => void);
    onend: null | (() => void);

    getJSON(): object;
  }

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

  export namespace Status {
    export type Code = StatusCode[keyof StatusCode];
  }

  export class Status {
    static readonly Code: StatusCode;
    constructor(code: Status.Code, message?: string);
    readonly code: Status.Code;
    readonly message?: string;
  }

  export namespace Display {
    export type VisibleLayer = typeof VisibleLayer;
  }

  export class Display {
    getElement(): HTMLElement;
    cursorHotspotX: number;
    cursorHotspotY: number;
    // width: number;
    // height: number;
    scale(scale: number): void;
    getScale(): number;
    getWidth(): number;
    getHeight(): number;
    getDefaultLayer(): VisibleLayer;
    getCursorLayer(): VisibleLayer;
    moveCursor(x: number, y: number): void;

    onresize: null | ((width: number, height: number) => void);
  }

 /**
  * Simple container for properties describing the state of a mouse.
  * 
  * @param x The X position of the mouse pointer in pixels.
  * @param y The Y position of the mouse pointer in pixels.
  * @param left Whether the left mouse button is pressed. 
  * @param middle Whether the middle mouse button is pressed. 
  * @param right Whether the right mouse button is pressed. 
  * @param up Whether the up mouse button is pressed (the fourth button, usually part of a scroll wheel). 
  * @param down Whether the down mouse button is pressed (the fifth button, usually part of a scroll wheel). 
  */
  class MouseState {
    constructor(
      x: number,
      y: number,
      left: boolean,
      middle: boolean,
      right: boolean,
      up: boolean,
      down: boolean
    );

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
    fromClientPosition(element: HTMLElement | HTMLDocument, clientX: number, clientY: number): MouseState;
  }

  export class OutputStream {
    constructor(client: Client, index: number);
    readonly client: Client;
    readonly index: number;
    sendBlob(data64: string): void;
    sendEnd(): void;
    onack: null | (() => void);
  }

  export namespace Client {
    export type State =
      | 0 // IDLE
      | 1 // CONNECTING
      | 2 // WAITING
      | 3 // CONNECTED
      | 4 //  DISCONNECTING
      | 5; // DISCONNECTED

    type ExportLayerBase = {
      height: number;
      width: number;
      url?: string;
    }
    type ExportLayer = ExportLayerBase | (ExportLayerBase & {
      x: number;
      y: number;
      z: number;
      alpha: number;
      matrix: unknown;
      parent: unknown;
    });

    export type ExportedState = {
      currentState: State;
      currentTimestamp: number;
      layers: { [key: number]: ExportLayer };
    };
  }

  /**
   * Guacamole protocol client. Given a Guacamole.Tunnel,
   * automatically handles incoming and outgoing Guacamole instructions via the
   * provided tunnel, updating its display using one or more canvas elements.
   * 
   * @constructor
   * @param tunnel The tunnel to use to send and receive Guacamole instructions.
   */
  export class Client {
    constructor(tunnel: WebSocketTunnel);

    readonly tunnel: WebSocketTunnel;

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
    createArgumentValueStream(mimetype: string, name: string): OutputStream;

    /**
     * Opens a new audio stream for writing, where audio data having the give
     * mimetype will be sent along the returned stream. The instruction
     * necessary to create this stream will automatically be sent.
     *
     * @param mimetype The mimetype of the audio data that will be sent along the returned stream.
     */
    createAudioStream(mimetype: string): OutputStream;

    /**
     * Opens a new clipboard object for writing, having the given mimetype. The
     * instruction necessary to create this stream will automatically be sent.
     *
     * @param mimetype The mimetype of the data being sent.
     * @param name The name of the pipe.
     */
    createClipboardStream(mimetype: string, name: string): OutputStream;

    /**
     * Opens a new file for writing, having the given index, mimetype and
     * filename. The instruction necessary to create this stream will
     * automatically be sent.
     *
     * @param mimetype The mimetype of the file being sent.
     * @param filename The filename of the file being sent.
     */
    createFileStream(mimetype: string, filename: string): OutputStream;

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
    createObjectOutputStream(index: number, mimetype: string, name: string): OutputStream;

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
    createPipeStream(mimetype: string, name: string): OutputStream;

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
     * @param pressed Whether the key is pressed (true) or released (false).
     * @param keysym The keysym of the key being pressed or released.
     */
    sendKeyEvent(state: number, keysym: number): void;
    // 1.0.0
    // sendKeyEvent(pressed: boolean, keysym: number): void;
    // 0.9.13

    /**
     * Sends a mouse event having the properties provided by the given mouse state.
     * 
     * @param mouseState The state of the mouse to send in the mouse event.
     */
    sendMouseState(state: Client.State): void;

    /**
     * Sends the current size of the screen.
     * 
     * @param {Number} width The width of the screen.
     * @param {Number} height The height of the screen.
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
    onaudio: null | ((audioStream: InputStream, mimetype: string) => AudioPlayer | null);

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
    onvideo: null | ((videoStream: InputStream, layer: VisibleLayer, mimetype: string) => VideoPlayer | null);

    /**
     * Fired when the current value of a connection parameter is being exposed
     * by the server.
     *
     * @event
     * @param stream The stream that will receive connection parameter data from the server.
     * @param mimetype The mimetype of the data which will be received.
     * @param name The name of the connection parameter whose value is being exposed.
     */
    onargv: null | ((parameterStream: InputStream, mimetype: string, name: string) => void);

    /**
     * Fired when the clipboard of the remote client is changing.
     * 
     * @event
     * @param stream The stream that will receive clipboard data from the server.
     * @param mimetype The mimetype of the data which will be received.
     */
    onclipboard: null | ((clipboardStream: InputStream, mimetype: string) => void);

    /**
     * Fired when a file stream is created. The stream provided to this event
     * handler will contain its own event handlers for received data.
     * 
     * @event
     * @param stream The stream that will receive data from the server.
     * @param mimetype The mimetype of the file received.
     * @param filename The name of the file received.
     */
    onfile: null | ((fileStream: InputStream, mimetype: string, name: string) => void);

    /**
     * Fired when a filesystem object is created. The object provided to this
     * event handler will contain its own event handlers and functions for
     * requesting and handling data.
     *
     * @event
     * @param object The created filesystem object.
     * @param name The name of the filesystem.
     */
    onfilesystem: null | ((object: Object, name: string) => void);

    /**
     * Fired when a pipe stream is created. The stream provided to this event
     * handler will contain its own event handlers for received data;
     * 
     * @event
     * @param stream The stream that will receive data from the server.
     * @param mimetype The mimetype of the data which will be received.
     * @param name The name of the pipe.
     */
    onpipe: null | ((pipeStream: InputStream, mimetype: string, name: string) => void);

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

  export namespace Keyboard {
    export class ModifierState {
      static fromKeyboardEvent(event: KeyboardEvent): ModifierState;
      ctrl: boolean;
      hyper: boolean;
      meta: boolean;
      shift: boolean;
      alt: boolean;
    }
  }

  export class Keyboard {
    constructor(element: HTMLDocument | HTMLElement);

    onkeydown: null | ((keysym: number) => boolean | void);
    onkeyup: null | ((keysym: number) => void);
    pressed: { [keysym: number]: true };
    modifiers: Keyboard.ModifierState;
    release(keysym: number): void;
    reset(): void;
  }

  export namespace Mouse {
    export type State = MouseState;
  }

  /**
   * Provides cross-browser mouse events for a given element. The events of
   * the given element are automatically populated with handlers that translate
   * mouse events into a non-browser-specific event provided by the
   * Guacamole.Mouse instance.
   * 
   * @param element The Element to use to provide mouse events.
   */
  export class Mouse {
    static readonly State: typeof MouseState;
    constructor(element: HTMLDocument | HTMLElement);

    /**
     * The current mouse state. The properties of this state are updated when
     * mouse events fire. This state object is also passed in as a parameter to
     * the handler of any mouse events.
     */
    currentState: MouseState;

    /**
     * Fired whenever the user releases a mouse button down over the element
     * associated with this Guacamole.Mouse.
     *
     * @event
     * @param state The current mouse state.
     */
    onmouseup: null | ((state: MouseState) => void);

    /**
     * Fired whenever the user presses a mouse button down over the element
     * associated with this Guacamole.Mouse.
     *
     * @event
     * @param state The current mouse state.
     */
    onmousedown: null | ((state: MouseState) => void);

    /**
     * Fired whenever the user moves the mouse over the element associated with
     * this Guacamole.Mouse.
     * 
     * @event
     * @param state The current mouse state.
     */
    onmousemove: null | ((state: MouseState) => void);

    /**
     * Fired whenever the mouse leaves the boundaries of the element associated
     * with this Guacamole.Mouse.
     * 
     * @event
     */
    onmouseout: null | (() => void);
  }
}
