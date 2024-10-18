export = Socket;
declare function Socket(remoteHost: string, remotePort: number): void;
declare class Socket {
    constructor(remoteHost: string, remotePort: number);
    open(): void;
    close(): void;
    read(length: number, timeout?: number): string;
    readln(timeout?: number): string;
    peek(length: number, timeout?: number): string;
    write(content: string | ArrayBuffer, timeout?: number): void;
    readonly remoteAddress: string;
    readonly remoteHost: string;
    readonly remotePort: number;
    readonly localAddress: string;
    localHost: string;
    localPort: number;
    connected: boolean;
}
