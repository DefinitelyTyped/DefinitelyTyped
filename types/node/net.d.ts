declare module "net" {
    import * as stream from "stream";
    import * as events from "events";
    import * as dns from "dns";

    type LookupFunction = (hostname: string, options: dns.LookupOneOptions, callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void) => void;

    interface AddressInfo {
        address: string;
        family: string;
        port: number;
    }

    interface SocketConstructorOpts {
        fd?: number;
        allowHalfOpen?: boolean;
        readable?: boolean;
        writable?: boolean;
    }

    interface OnReadOpts {
        buffer: Uint8Array | (() => Uint8Array);
        /**
         * This function is called for every chunk of incoming data.
         * Two arguments are passed to it: the number of bytes written to buffer and a reference to buffer.
         * Return false from this function to implicitly pause() the socket.
         */
        callback(bytesWritten: number, buf: Uint8Array): boolean;
    }

    interface ConnectOpts {
        /**
         * If specified, incoming data is stored in a single buffer and passed to the supplied callback when data arrives on the socket.
         * Note: this will cause the streaming functionality to not provide any data, however events like 'error', 'end', and 'close' will
         * still be emitted as normal and methods like pause() and resume() will also behave as expected.
         */
        onread?: OnReadOpts;
    }

    interface TcpSocketConnectOpts extends ConnectOpts {
        port: number;
        host?: string;
        localAddress?: string;
        localPort?: number;
        hints?: number;
        family?: number;
        lookup?: LookupFunction;
    }

    interface IpcSocketConnectOpts extends ConnectOpts {
        path: string;
    }

    type SocketConnectOpts = TcpSocketConnectOpts | IpcSocketConnectOpts;

    interface SocketEventMap extends Pick<stream.DuplexEventMap, Exclude<keyof stream.DuplexEventMap, "close">> {
        "close": (had_error: boolean) => void;
        "connect": () => void;
        "data": (data: Buffer) => void;
        "lookup": (err: Error, address: string, family: string | number, host: string) => void;
        "timeout": () => void;
    }

    class Socket extends stream.Duplex {
        constructor(options?: SocketConstructorOpts);

        // Extended base methods
        write(buffer: Uint8Array | string, cb?: (err?: Error) => void): boolean;
        write(str: Uint8Array | string, encoding?: BufferEncoding, cb?: (err?: Error) => void): boolean;

        connect(options: SocketConnectOpts, connectionListener?: () => void): this;
        connect(port: number, host: string, connectionListener?: () => void): this;
        connect(port: number, connectionListener?: () => void): this;
        connect(path: string, connectionListener?: () => void): this;

        setEncoding(encoding?: BufferEncoding): this;
        pause(): this;
        resume(): this;
        setTimeout(timeout: number, callback?: () => void): this;
        setNoDelay(noDelay?: boolean): this;
        setKeepAlive(enable?: boolean, initialDelay?: number): this;
        address(): AddressInfo | {};
        unref(): this;
        ref(): this;

        readonly bufferSize: number;
        readonly bytesRead: number;
        readonly bytesWritten: number;
        readonly connecting: boolean;
        readonly destroyed: boolean;
        readonly localAddress: string;
        readonly localPort: number;
        readonly remoteAddress?: string;
        readonly remoteFamily?: string;
        readonly remotePort?: number;

        // Extended base methods
        end(cb?: () => void): void;
        end(buffer: Uint8Array | string, cb?: () => void): void;
        end(str: Uint8Array | string, encoding?: BufferEncoding, cb?: () => void): void;

        /*
         * events.EventEmitter
         *   1. close
         *   2. connect
         *   3. data
         *   4. drain
         *   5. end
         *   6. error
         *   7. lookup
         *   8. timeout
         */
        addListener<K extends keyof SocketEventMap>(event: K, listener: SocketEventMap[K]): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit<K extends keyof SocketEventMap>(event: K, ...args: SocketEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on<K extends keyof SocketEventMap>(event: K, listener: SocketEventMap[K]): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once<K extends keyof SocketEventMap>(event: K, listener: SocketEventMap[K]): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener<K extends keyof SocketEventMap>(event: K, listener: SocketEventMap[K]): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener<K extends keyof SocketEventMap>(event: K, listener: SocketEventMap[K]): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener<K extends keyof SocketEventMap>(event: K, listener: SocketEventMap[K]): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off<K extends keyof SocketEventMap>(event: K, listener: SocketEventMap[K]): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;

        listeners<K extends keyof SocketEventMap>(event: K): Array<SocketEventMap[K]>;
        listeners(event: string | symbol): Function[];
    }

    interface ListenOptions {
        port?: number;
        host?: string;
        backlog?: number;
        path?: string;
        exclusive?: boolean;
        readableAll?: boolean;
        writableAll?: boolean;
        /**
         * @default false
         */
        ipv6Only?: boolean;
    }

    interface ServerEventMap {
        "close": () => void;
        "connection": (socket: Socket) => void;
        "error": (err: Error) => void;
        "listening": () => void;
    }

    // https://github.com/nodejs/node/blob/master/lib/net.js
    class Server extends events.EventEmitter {
        constructor(connectionListener?: (socket: Socket) => void);
        constructor(options?: { allowHalfOpen?: boolean, pauseOnConnect?: boolean }, connectionListener?: (socket: Socket) => void);

        listen(port?: number, hostname?: string, backlog?: number, listeningListener?: () => void): this;
        listen(port?: number, hostname?: string, listeningListener?: () => void): this;
        listen(port?: number, backlog?: number, listeningListener?: () => void): this;
        listen(port?: number, listeningListener?: () => void): this;
        listen(path: string, backlog?: number, listeningListener?: () => void): this;
        listen(path: string, listeningListener?: () => void): this;
        listen(options: ListenOptions, listeningListener?: () => void): this;
        listen(handle: any, backlog?: number, listeningListener?: () => void): this;
        listen(handle: any, listeningListener?: () => void): this;
        close(callback?: (err?: Error) => void): this;
        address(): AddressInfo | string | null;
        getConnections(cb: (error: Error | null, count: number) => void): void;
        ref(): this;
        unref(): this;
        maxConnections: number;
        connections: number;
        listening: boolean;

        /*
         * events.EventEmitter
         *   1. close
         *   2. connection
         *   3. error
         *   4. listening
         */
        addListener<K extends keyof ServerEventMap>(event: K, listener: ServerEventMap[K]): this;
        addListener(event: string | symbol, listener: (...args: any[]) => void): this;

        emit<K extends keyof ServerEventMap>(event: K, ...args: ServerEventMap[K] extends (...args: infer P) => any ? P : never): boolean;
        emit(event: string | symbol, ...args: any[]): boolean;

        on<K extends keyof ServerEventMap>(event: K, listener: ServerEventMap[K]): this;
        on(event: string | symbol, listener: (...args: any[]) => void): this;

        once<K extends keyof ServerEventMap>(event: K, listener: ServerEventMap[K]): this;
        once(event: string | symbol, listener: (...args: any[]) => void): this;

        prependListener<K extends keyof ServerEventMap>(event: K, listener: ServerEventMap[K]): this;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;

        prependOnceListener<K extends keyof ServerEventMap>(event: K, listener: ServerEventMap[K]): this;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;

        removeListener<K extends keyof ServerEventMap>(event: K, listener: ServerEventMap[K]): this;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;

        off<K extends keyof ServerEventMap>(event: K, listener: ServerEventMap[K]): this;
        off(event: string | symbol, listener: (...args: any[]) => void): this;

        listeners<K extends keyof ServerEventMap>(event: K): Array<ServerEventMap[K]>;
        listeners(event: string | symbol): Function[];
    }

    interface TcpNetConnectOpts extends TcpSocketConnectOpts, SocketConstructorOpts {
        timeout?: number;
    }

    interface IpcNetConnectOpts extends IpcSocketConnectOpts, SocketConstructorOpts {
        timeout?: number;
    }

    type NetConnectOpts = TcpNetConnectOpts | IpcNetConnectOpts;

    function createServer(connectionListener?: (socket: Socket) => void): Server;
    function createServer(options?: { allowHalfOpen?: boolean, pauseOnConnect?: boolean }, connectionListener?: (socket: Socket) => void): Server;
    function connect(options: NetConnectOpts, connectionListener?: () => void): Socket;
    function connect(port: number, host?: string, connectionListener?: () => void): Socket;
    function connect(path: string, connectionListener?: () => void): Socket;
    function createConnection(options: NetConnectOpts, connectionListener?: () => void): Socket;
    function createConnection(port: number, host?: string, connectionListener?: () => void): Socket;
    function createConnection(path: string, connectionListener?: () => void): Socket;
    function isIP(input: string): number;
    function isIPv4(input: string): boolean;
    function isIPv6(input: string): boolean;
}
