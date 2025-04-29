export = Socket;
declare function Socket(
    remoteHost: string,
    remotePort: number,
    options?: {
        useTls?: boolean;
    }
): void;
declare class Socket {
    constructor(
        remoteHost: string,
        remotePort: number,
        options?: {
            useTls?: boolean;
        }
    );
    readonly remoteAddress: string;
    readonly remoteHost: string;
    readonly remotePort: number;
    readonly localAddress: string;
    localHost: string;
    localPort: number;
    connected: boolean;
    open(): void;
    close(): void;
    read(length: number, timeout?: number): string;
    readln(timeout?: number): string;
    peek(length: number, timeout?: number): string;
    write(content: string | Uint8Array | ArrayBuffer, timeout?: number): void;
}
