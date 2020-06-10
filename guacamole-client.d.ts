declare module 'guacamole-client' {
  export class Object {
    readonly static ROOT_STREAM: string;
    readonly static STREAM_INDEX_MIMETYPE: string;
    constructor(public client: Client, public index: number);
    requestInputStream(name: string, bodyCallback?: (stream: InputStream, mimetype: string) => void);
    onbody: null | ((stream: InputStream, mimetype: string) => void);
  }

  export class WebSocketTunnel {
    constructor(url: string);
  }

  export class VisibleLayer {
    constructor(public width: number, public height: number);

    getCanvas(): HTMLCanvasElement;
  }
  
  export class InputStream {
    constructor(public client: Client, public index: number);

    sendAck(message: string, code: number): void;
  }

  export class JSONReader {
    constructor(public stream: InputStream);

    onprogress: null | ((length: number) => void);
    onend: null | (() => void);

    getJSON(): object;
  }

  type StatusCode = Readonly<{
    SUCCESS: 0x0000,
    /**
     * The requested operation is unsupported.
     */
    UNSUPPORTED: 0x0100,
    /**
     * The operation could not be performed due to an internal failure.
     */
    SERVER_ERROR: 0x0200,
    /**
     * The operation could not be performed as the server is busy.
     */
    SERVER_BUSY: 0x0201,
    /**
     * The operation could not be performed because the upstream server is not
     * responding.
     */
    UPSTREAM_TIMEOUT: 0x0202,

    /**
     * The operation was unsuccessful due to an error or otherwise unexpected
     * condition of the upstream server.
     */
    UPSTREAM_ERROR: 0x0203,
    /**
     * The operation could not be performed as the requested resource does not
     * exist.
     */
    RESOURCE_NOT_FOUND: 0x0204,
    /**
     * The operation could not be performed as the requested resource is
     * already in use.
     */
    RESOURCE_CONFLICT: 0x0205,
    /**
     * The operation could not be performed as the requested resource is now
     * closed.
     */
    RESOURCE_CLOSED: 0x0206,
    /**
     * The operation could not be performed because the upstream server does
     * not appear to exist.
     */

    UPSTREAM_NOT_FOUND: 0x0207,
    /**
     * The operation could not be performed because the upstream server is not
     * available to service the request.
     */
    UPSTREAM_UNAVAILABLE: 0x0208,
    /**
     * The session within the upstream server has ended because it conflicted
     * with another session.
     */
    SESSION_CONFLICT: 0x0209,
    /**
     * The session within the upstream server has ended because it appeared to
     * be inactive.
     */
    SESSION_TIMEOUT: 0x020A,
    /**
     * The session within the upstream server has been forcibly terminated.
     */
    SESSION_CLOSED: 0x020B,
    /**
     * The operation could not be performed because bad parameters were given.
     */
    CLIENT_BAD_REQUEST: 0x0300,
    /**
     * Permission was denied to perform the operation, as the user is not yet
     * authorized (not yet logged in, for example).
     */
    CLIENT_UNAUTHORIZED: 0x0301,
    /**
     * Permission was denied to perform the operation, and this permission will
     * not be granted even if the user is authorized.
     */
    CLIENT_FORBIDDEN: 0x0303,
    /**
     * The client took too long to respond.
     */
    CLIENT_TIMEOUT: 0x0308,
    /**
     * The client sent too much data.
     */
    CLIENT_OVERRUN: 0x030D,
    /**
     * The client sent data of an unsupported or unexpected type.
     */
    CLIENT_BAD_TYPE: 0x030F,
    /**
     * The operation failed because the current client is already using too
     * many resources.
     */
    CLIENT_TOO_MANY: 0x031D
  }>;

  declare module Status {
    export type Code = StatusCode[keyof StatusCode];
  }

  export class Status {
    readonly static Code: typeof StatusCode;
    constructor(public code: Status.Code, public message?: string);
  }

  export class Display {
    getElement(): HTMLElement;
    cursorHotspotX: number;
    cursorHotspotY: number;
    // width: number;
    // height: number;
    getScale(): number;
    getWidth(): number;
    getHeight(): number;
    getDefaultLayer(): VisibleLayer;
  }

  class State {
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
    onack: null | (() => void);
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

    // TODO: fix any
    onclipboard: null | ((e: any) => void);
    onerror: null | ((e: Error) => void);
    onstatechange: null | ((state: number) => void);
    onfilesystem: null | ((object: Object, name: string) => void);
  }

  export class Keyboard {
    constructor(element: HTMLDocument | HTMLElement);

    onkeydown: null | ((keysym: number) => boolean | void);
    onkeyup: null | ((keysym: number) => void);
    pressed: { [keysym: number]: true };
    release(keysym: number): void;
    reset(): void;
  }


  declare module Mouse {
    export type State = State;
  }

  export class Mouse {
    readonly static State: typeof State;
    constructor(element: HTMLDocument | HTMLElement);

    onmouseup: null | ((state: Guacamole.Mouse.State) => void);
    onmousedown: null | ((state: Guacamole.Mouse.State) => void);
    onmousemove: null | ((state: Guacamole.Mouse.State) => void);
  }
}
