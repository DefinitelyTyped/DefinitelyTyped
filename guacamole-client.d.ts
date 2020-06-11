declare module 'guacamole-client' {
  export class Object {
    static readonly ROOT_STREAM: string;
    static readonly STREAM_INDEX_MIMETYPE: string;
    constructor(public client: Client, public index: number);
    requestInputStream(name: string, bodyCallback?: (stream: InputStream, mimetype: string) => void);
    onbody: null | ((stream: InputStream, mimetype: string) => void);
  }

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

  declare namespace Tunnel {
    export type State = TunnelState[keyof TunnelState];
  }

  export class Tunnel {
    static readonly State: typeof TunnelState;
    receiveTimeout: number;
    state: Tunnel.State;
    uuid: string;

    connect(data: string): void;
    disconnect(): void;
    isConnected(): boolean;
    sendMessage(message: any, ...messages: any[]);

    oninstruction: null | ((opcode: string, args: any[]) => void);
    onstatechange: null | ((state: Tunnel.State) => void);
    onerror: null | ((status: Status) => void);
  }

  export class WebSocketTunnel extends Tunnel {
    constructor(url: string);
  }

  export class Layer {

  }

  type LineCap = 'round' | 'square' | 'butt';
  type LineJoin = 'round' | 'bevel' | 'mitter';
  export class VisibleLayer {
    constructor(public width: number, public height: number);

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
    constructor(public client: Client, public index: number);

    sendAck(message: string, code: Status.Code): void;

    onblob: null | ((data64: string) => void);
    onend: null | (() => void);
  }

  export class JSONReader {
    constructor(public stream: InputStream);

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

  declare namespace Status {
    export type Code = StatusCode[keyof StatusCode];
  }

  export class Status {
    static readonly Code: typeof StatusCode;
    constructor(public code: Status.Code, public message?: string);
  }

  declare namespace Display {
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

  class MouseState {
    constructor(
      public x: number,
      public y: number,
      public left: boolean,
      public middle: boolean,
      public right: boolean,
      public up: boolean,
      public down: boolean
    );
  }

  export class OutputStream {
    constructor(public client: Client, public index: number);
    sendBlob(data64: string): void;
    sendEnd(): void;
    onack: null | (() => void);
  }

  declare namespace Client {
    export type State =
      | 0 // IDLE
      | 1 // CONNECTING
      | 2 // WAITING
      | 3 // CONNECTED
      | 4 //  DISCONNECTING
      | 5; // DISCONNECTED
  }

  export class Client {
    constructor(tunnel: WebSocketTunnel);

    disconnect(): void;
    connect(data?: any);
    createFileStream(mimetype: string, filename: string): OutputStream;
    endStream(index: number): void;
    // 1.0.0
    // sendKeyEvent(pressed: boolean, keysym: number): void;
    // 0.9.13
    sendKeyEvent(state: number, keysym: number): void;
    sendMouseState(state: State): void;
    getDisplay(): Display;

    onclipboard: null | ((e: InputStream) => void);
    onerror: null | ((status: Status) => void);
    onstatechange: null | ((state: Client.State) => void);
    onfilesystem: null | ((object: Object, name: string) => void);
  }

  declare namespace Keyboard {
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
    modifiers: ModifierState;
    release(keysym: number): void;
    reset(): void;
  }

  declare namespace Mouse {
    export type State = MouseState;
  }

  export class Mouse {
    static readonly State: typeof State;
    constructor(element: HTMLDocument | HTMLElement);

    currentState: MouseState;
    onmouseup: null | ((state: MouseState) => void);
    onmousedown: null | ((state: MouseState) => void);
    onmousemove: null | ((state: MouseState) => void);
  }
}
