import { EventEmitter } from "@xmpp/events";
import { JID } from "@xmpp/jid";
import { Element, Parser } from "@xmpp/xml";

export default Connection;

declare abstract class Connection extends EventEmitter {
    jid: JID | null;
    timeout: number;
    options: Partial<Options>;
    /**
     * `online` indicates that `xmpp` is authenticated and addressable. It is emitted every time there is a successful (re)connection.
     *
     * `offline` indicates that `xmpp` disconnected and no automatic attempt to reconnect will happen (after calling `xmpp.stop()`).
     *
     * Additional status:
     *
     * - `connecting`: Socket is connecting
     * - `connect`: Socket is connected
     * - `opening`: Stream is opening
     * - `open`: Stream is open
     * - `closing`: Stream is closing
     * - `close`: Stream is closed
     * - `disconnecting`: Socket is disconnecting
     * - `disconnect`: Socket is disconnected
     */
    status: Status;
    socket: SocketBase | null;
    parser: Parser | null;
    root: Element | null;

    NS: string;
    Socket: SocketConstructor | null;
    Parser: typeof Parser | null;

    constructor(options: Options);

    /**
     * Returns whether the connection is considered secure.
     */
    isSecure(): boolean;

    /**
     * Opens the socket then opens the stream
     */
    start(): Promise<JID>;
    /**
     * Connects the socket
     */
    connect(service: string): Promise<void>;
    /**
     * Disconnects the socket
     * https://xmpp.org/rfcs/rfc6120.html#streams-close
     * https://tools.ietf.org/html/rfc7395#section-3.6
     */
    disconnect(timeout?: number): Promise<void>;
    /**
     * Opens the stream
     */
    open(options: OpenOptions): Promise<Element>;
    /**
     * Closes the stream then closes the socket
     * https://xmpp.org/rfcs/rfc6120.html#streams-close
     * https://tools.ietf.org/html/rfc7395#section-3.6
     */
    stop(): Promise<Element>;
    /**
     * Closes the stream and wait for the server to close it
     * https://xmpp.org/rfcs/rfc6120.html#streams-close
     * https://tools.ietf.org/html/rfc7395#section-3.6
     */
    close(timeout?: number): Promise<Element>;
    /**
     * Restart the stream
     * https://xmpp.org/rfcs/rfc6120.html#streams-negotiation-restart
     */
    restart(): Promise<Element>;
    send(element: Element): Promise<void>;
    sendReceive(element: Element, timeout?: number): Promise<Element>;
    write(str: string): Promise<void>;
    isStanza(element: Element): boolean;
    isNonza(element: Element): boolean;

    header(el: Element): string;
    abstract headerElement(): Element;
    footer(el: Element): string;
    footerElement(): Element;
    abstract socketParameters(service: string): unknown | undefined;

    addListener<TEvent extends keyof ConnectionEvents>(
        event: TEvent,
        listener: ConnectionEvents[TEvent],
    ): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    on<TEvent extends keyof ConnectionEvents>(
        event: TEvent,
        listener: ConnectionEvents[TEvent],
    ): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    once<TEvent extends keyof ConnectionEvents>(
        event: TEvent,
        listener: ConnectionEvents[TEvent],
    ): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;

    prependListener<TEvent extends keyof ConnectionEvents>(
        event: TEvent,
        listener: ConnectionEvents[TEvent],
    ): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

    prependOnceListener<TEvent extends keyof ConnectionEvents>(
        event: TEvent,
        listener: ConnectionEvents[TEvent],
    ): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

    removeListener<TEvent extends keyof ConnectionEvents>(
        event: TEvent,
        listener: ConnectionEvents[TEvent],
    ): this;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

    off<TEvent extends keyof ConnectionEvents>(
        event: TEvent,
        listener: ConnectionEvents[TEvent],
    ): this;
    off(event: string | symbol, listener: (...args: any[]) => void): this;

    emit<TStatus extends keyof StatusEvents>(
        event: "status",
        status: TStatus,
        ...args: Parameters<StatusEvents[TStatus]>
    ): boolean;
    emit<TEvent extends keyof ConnectionEvents>(
        event: TEvent,
        ...args: Parameters<ConnectionEvents[TEvent]>
    ): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;
}

export type Status = keyof StatusEvents;

export interface Options {
    /**
     * The service to connect to, accepts an URI or a domain.
     *
     * - `domain` lookup and connect to the most secure endpoint using `@xmpp/resolve`
     * - `xmpp://hostname:port` plain TCP, may be upgraded to TLS by `@xmpp/starttls`
     * - `xmpps://hostname:port` direct TLS
     * - `ws://hostname:port/path` plain WebSocket
     * - `wss://hostname:port/path` secure WebSocket
     */
    service?: string;
    /**
     * Domain of the service. Useful when the service domain is different than the service hostname.
     */
    domain?: string;
    lang?: string | undefined;

    /**
     * Number of milliseconds to wait before timing out (default is `2000`)
     */
    timeout?: number;
}

export interface OpenOptions {
    domain: string;
    lang?: string | undefined;
}

export interface ConnectionEvents extends StatusEvents {
    input: (input: string) => void;
    send: (el: Element) => void;
    error: (error: Error) => void;
    element: (el: Element) => void;
    stanza: (el: Element) => void;
    nonza: (el: Element) => void;
    status: <TStatus extends keyof StatusEvents>(
        status: TStatus,
        ...args: Parameters<StatusEvents[TStatus]>
    ) => void;
}

export interface StatusEvents {
    online: (jid: JID) => void;
    offline: (el: Element) => void;
    connect: () => void;
    connecting: (service: string) => void;
    disconnect: (result: { clean: boolean; event: unknown }) => void;
    disconnecting: () => void;
    open: (el: Element) => void;
    opening: () => void;
    close: (el: Element) => void;
    closing: () => void;
}

export interface SocketConstructor {
    new(): SocketBase;
}

export interface SocketBase extends EventEmitter {
    connect(parameters: unknown): void;
    write(str: string, cb: (err?: Error) => void): void;
    end(): void;

    addListener<TEvent extends keyof SocketEvents>(event: TEvent, listener: SocketEvents[TEvent]): this;
    addListener(event: string | symbol, listener: (...args: any[]) => void): this;

    on<TEvent extends keyof SocketEvents>(event: TEvent, listener: SocketEvents[TEvent]): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;

    once<TEvent extends keyof SocketEvents>(event: TEvent, listener: SocketEvents[TEvent]): this;
    once(event: string | symbol, listener: (...args: any[]) => void): this;

    prependListener<TEvent extends keyof SocketEvents>(event: TEvent, listener: SocketEvents[TEvent]): this;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

    prependOnceListener<TEvent extends keyof SocketEvents>(event: TEvent, listener: SocketEvents[TEvent]): this;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

    emit<TEvent extends keyof SocketEvents>(event: TEvent, ...args: Parameters<SocketEvents[TEvent]>): boolean;
    emit(event: string | symbol, ...args: any[]): boolean;
}

export interface SocketEvents {
    close: (hadError: boolean) => void;
    connect: () => void;
    data: (data: Buffer) => void;
    error: (err: Error) => void;
}
