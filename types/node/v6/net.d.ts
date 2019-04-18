declare module "net" {
    import * as stream from "stream";
    import * as events from "events";

    export interface Socket extends stream.Duplex {
        // Extended base methods
        write(buffer: Buffer): boolean;
        write(buffer: Buffer, cb?: Function): boolean;
        write(str: string, cb?: Function): boolean;
        write(str: string, encoding?: string, cb?: Function): boolean;
        write(str: string, encoding?: string, fd?: string): boolean;

        connect(port: number, host?: string, connectionListener?: Function): void;
        connect(path: string, connectionListener?: Function): void;
        bufferSize: number;
        setEncoding(encoding?: string): void;
        write(data: any, encoding?: string, callback?: Function): void;
        destroy(): void;
        setTimeout(timeout: number, callback?: Function): this;
        setNoDelay(noDelay?: boolean): this;
        setKeepAlive(enable?: boolean, initialDelay?: number): this;
        address(): { port: number; family: string; address: string; };
        unref(): void;
        ref(): void;

        remoteAddress: string;
        remoteFamily: string;
        remotePort: number;
        localAddress: string;
        localPort: number;
        bytesRead: number;
        bytesWritten: number;
        connecting: boolean;
        destroyed: boolean;

        // Extended base methods
        end(): void;
        end(buffer: Buffer, cb?: Function): void;
        end(str: string, cb?: Function): void;
        end(str: string, encoding?: string, cb?: Function): void;
        end(data?: any, encoding?: string): void;

        /**
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
        addListener(event: string, listener: Function): this;
        addListener(event: "close", listener: (had_error: boolean) => void): this;
        addListener(event: "connect", listener: () => void): this;
        addListener(event: "data", listener: (data: Buffer) => void): this;
        addListener(event: "drain", listener: () => void): this;
        addListener(event: "end", listener: () => void): this;
        addListener(event: "error", listener: (err: Error) => void): this;
        addListener(event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void): this;
        addListener(event: "timeout", listener: () => void): this;

        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: "close", had_error: boolean): boolean;
        emit(event: "connect"): boolean;
        emit(event: "data", data: Buffer): boolean;
        emit(event: "drain"): boolean;
        emit(event: "end"): boolean;
        emit(event: "error", err: Error): boolean;
        emit(event: "lookup", err: Error, address: string, family: string | number, host: string): boolean;
        emit(event: "timeout"): boolean;

        on(event: string, listener: Function): this;
        on(event: "close", listener: (had_error: boolean) => void): this;
        on(event: "connect", listener: () => void): this;
        on(event: "data", listener: (data: Buffer) => void): this;
        on(event: "drain", listener: () => void): this;
        on(event: "end", listener: () => void): this;
        on(event: "error", listener: (err: Error) => void): this;
        on(event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void): this;
        on(event: "timeout", listener: () => void): this;

        once(event: string, listener: Function): this;
        once(event: "close", listener: (had_error: boolean) => void): this;
        once(event: "connect", listener: () => void): this;
        once(event: "data", listener: (data: Buffer) => void): this;
        once(event: "drain", listener: () => void): this;
        once(event: "end", listener: () => void): this;
        once(event: "error", listener: (err: Error) => void): this;
        once(event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void): this;
        once(event: "timeout", listener: () => void): this;

        prependListener(event: string, listener: Function): this;
        prependListener(event: "close", listener: (had_error: boolean) => void): this;
        prependListener(event: "connect", listener: () => void): this;
        prependListener(event: "data", listener: (data: Buffer) => void): this;
        prependListener(event: "drain", listener: () => void): this;
        prependListener(event: "end", listener: () => void): this;
        prependListener(event: "error", listener: (err: Error) => void): this;
        prependListener(event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void): this;
        prependListener(event: "timeout", listener: () => void): this;

        prependOnceListener(event: string, listener: Function): this;
        prependOnceListener(event: "close", listener: (had_error: boolean) => void): this;
        prependOnceListener(event: "connect", listener: () => void): this;
        prependOnceListener(event: "data", listener: (data: Buffer) => void): this;
        prependOnceListener(event: "drain", listener: () => void): this;
        prependOnceListener(event: "end", listener: () => void): this;
        prependOnceListener(event: "error", listener: (err: Error) => void): this;
        prependOnceListener(event: "lookup", listener: (err: Error, address: string, family: string | number, host: string) => void): this;
        prependOnceListener(event: "timeout", listener: () => void): this;
    }

    export var Socket: {
        new (options?: { fd?: number; allowHalfOpen?: boolean; readable?: boolean; writable?: boolean; }): Socket;
    };

    export interface ListenOptions {
        port?: number;
        host?: string;
        backlog?: number;
        path?: string;
        exclusive?: boolean;
    }

    export interface Server extends events.EventEmitter {
        listen(port: number, hostname?: string, backlog?: number, listeningListener?: Function): Server;
        listen(port: number, hostname?: string, listeningListener?: Function): Server;
        listen(port: number, backlog?: number, listeningListener?: Function): Server;
        listen(port: number, listeningListener?: Function): Server;
        listen(path: string, backlog?: number, listeningListener?: Function): Server;
        listen(path: string, listeningListener?: Function): Server;
        listen(options: ListenOptions, listeningListener?: Function): Server;
        listen(handle: any, backlog?: number, listeningListener?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;
        close(callback?: Function): Server;
        address(): { port: number; family: string; address: string; };
        getConnections(cb: (error: Error, count: number) => void): void;
        ref(): Server;
        unref(): Server;
        maxConnections: number;
        connections: number;

        /**
         * events.EventEmitter
         *   1. close
         *   2. connection
         *   3. error
         *   4. listening
         */
        addListener(event: string, listener: Function): this;
        addListener(event: "close", listener: () => void): this;
        addListener(event: "connection", listener: (socket: Socket) => void): this;
        addListener(event: "error", listener: (err: Error) => void): this;
        addListener(event: "listening", listener: () => void): this;

        emit(event: string | symbol, ...args: any[]): boolean;
        emit(event: "close"): boolean;
        emit(event: "connection", socket: Socket): boolean;
        emit(event: "error", err: Error): boolean;
        emit(event: "listening"): boolean;

        on(event: string, listener: Function): this;
        on(event: "close", listener: () => void): this;
        on(event: "connection", listener: (socket: Socket) => void): this;
        on(event: "error", listener: (err: Error) => void): this;
        on(event: "listening", listener: () => void): this;

        once(event: string, listener: Function): this;
        once(event: "close", listener: () => void): this;
        once(event: "connection", listener: (socket: Socket) => void): this;
        once(event: "error", listener: (err: Error) => void): this;
        once(event: "listening", listener: () => void): this;

        prependListener(event: string, listener: Function): this;
        prependListener(event: "close", listener: () => void): this;
        prependListener(event: "connection", listener: (socket: Socket) => void): this;
        prependListener(event: "error", listener: (err: Error) => void): this;
        prependListener(event: "listening", listener: () => void): this;

        prependOnceListener(event: string, listener: Function): this;
        prependOnceListener(event: "close", listener: () => void): this;
        prependOnceListener(event: "connection", listener: (socket: Socket) => void): this;
        prependOnceListener(event: "error", listener: (err: Error) => void): this;
        prependOnceListener(event: "listening", listener: () => void): this;
    }
    export function createServer(connectionListener?: (socket: Socket) => void): Server;
    export function createServer(options?: { allowHalfOpen?: boolean; }, connectionListener?: (socket: Socket) => void): Server;
    export function connect(options: { port: number, host?: string, localAddress?: string, localPort?: string, family?: number, allowHalfOpen?: boolean; }, connectionListener?: Function): Socket;
    export function connect(port: number, host?: string, connectionListener?: Function): Socket;
    export function connect(path: string, connectionListener?: Function): Socket;
    export function createConnection(options: { port: number, host?: string, localAddress?: string, localPort?: string, family?: number, allowHalfOpen?: boolean; }, connectionListener?: Function): Socket;
    export function createConnection(port: number, host?: string, connectionListener?: Function): Socket;
    export function createConnection(path: string, connectionListener?: Function): Socket;
    export function isIP(input: string): number;
    export function isIPv4(input: string): boolean;
    export function isIPv6(input: string): boolean;
}
