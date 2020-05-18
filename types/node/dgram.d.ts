declare module "dgram" {
    import { AddressInfo } from "net";
    import * as dns from "dns";
    import * as events from "events";

    interface RemoteInfo {
        address: string;
        family: 'IPv4' | 'IPv6';
        port: number;
        size: number;
    }

    interface BindOptions {
        port?: number;
        address?: string;
        exclusive?: boolean;
        fd?: number;
    }

    type SocketType = "udp4" | "udp6";

    interface SocketOptions {
        type: SocketType;
        reuseAddr?: boolean;
        /**
         * @default false
         */
        ipv6Only?: boolean;
        recvBufferSize?: number;
        sendBufferSize?: number;
        lookup?: (hostname: string, options: dns.LookupOneOptions, callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void) => void;
    }

    function createSocket(type: SocketType, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket;
    function createSocket(options: SocketOptions, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket;

    interface SocketEventMap {
        "close": () => void;
        "connect": () => void;
        "error": (err: Error) => void;
        "listening": () => void;
        "message": (msg: Buffer, rinfo: RemoteInfo) => void;
    }

    class Socket extends events.EventEmitter {
        addMembership(multicastAddress: string, multicastInterface?: string): void;
        address(): AddressInfo;
        bind(port?: number, address?: string, callback?: () => void): void;
        bind(port?: number, callback?: () => void): void;
        bind(callback?: () => void): void;
        bind(options: BindOptions, callback?: () => void): void;
        close(callback?: () => void): void;
        connect(port: number, address?: string, callback?: () => void): void;
        connect(port: number, callback: () => void): void;
        disconnect(): void;
        dropMembership(multicastAddress: string, multicastInterface?: string): void;
        getRecvBufferSize(): number;
        getSendBufferSize(): number;
        ref(): this;
        remoteAddress(): AddressInfo;
        send(msg: string | Uint8Array | ReadonlyArray<any>, port?: number, address?: string, callback?: (error: Error | null, bytes: number) => void): void;
        send(msg: string | Uint8Array | ReadonlyArray<any>, port?: number, callback?: (error: Error | null, bytes: number) => void): void;
        send(msg: string | Uint8Array | ReadonlyArray<any>, callback?: (error: Error | null, bytes: number) => void): void;
        send(msg: string | Uint8Array, offset: number, length: number, port?: number, address?: string, callback?: (error: Error | null, bytes: number) => void): void;
        send(msg: string | Uint8Array, offset: number, length: number, port?: number, callback?: (error: Error | null, bytes: number) => void): void;
        send(msg: string | Uint8Array, offset: number, length: number, callback?: (error: Error | null, bytes: number) => void): void;
        setBroadcast(flag: boolean): void;
        setMulticastInterface(multicastInterface: string): void;
        setMulticastLoopback(flag: boolean): void;
        setMulticastTTL(ttl: number): void;
        setRecvBufferSize(size: number): void;
        setSendBufferSize(size: number): void;
        setTTL(ttl: number): void;
        unref(): this;
        /**
         * Tells the kernel to join a source-specific multicast channel at the given
         * `sourceAddress` and `groupAddress`, using the `multicastInterface` with the
         * `IP_ADD_SOURCE_MEMBERSHIP` socket option.
         * If the `multicastInterface` argument
         * is not specified, the operating system will choose one interface and will add
         * membership to it.
         * To add membership to every available interface, call
         * `socket.addSourceSpecificMembership()` multiple times, once per interface.
         */
        addSourceSpecificMembership(sourceAddress: string, groupAddress: string, multicastInterface?: string): void;

        /**
         * Instructs the kernel to leave a source-specific multicast channel at the given
         * `sourceAddress` and `groupAddress` using the `IP_DROP_SOURCE_MEMBERSHIP`
         * socket option. This method is automatically called by the kernel when the
         * socket is closed or the process terminates, so most apps will never have
         * reason to call this.
         *
         * If `multicastInterface` is not specified, the operating system will attempt to
         * drop membership on all valid interfaces.
         */
        dropSourceSpecificMembership(sourceAddress: string, groupAddress: string, multicastInterface?: string): void;

        /*
         * events.EventEmitter
         * 1. close
         * 2. connect
         * 3. error
         * 4. listening
         * 5. message
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
}
