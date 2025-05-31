type WebsockEventType = "message" | "open" | "close" | "error";

export interface WebsockOptions {
    protocols?: string | string[];
}

export default class WebSock {
    constructor();

    readonly readyState: "unused" | "connecting" | "open" | "closing" | "closed" | "unknown";
    readonly sQlen: number;

    open(uri: string, protocols?: string | string[]): void;
    attach(rawChannel: WebSocket | RTCDataChannel): void;
    close(): void;

    on(evt: WebsockEventType, handler: (e: Event | CloseEvent | MessageEvent) => void): void;
    off(evt: WebsockEventType): void;

    rQpeek8(): number;
    rQskipBytes(bytes: number): void;
    rQshift8(): number;
    rQshift16(): number;
    rQshift32(): number;
    rQshiftStr(len: number): string;
    rQshiftBytes(len: number, copy?: boolean): Uint8Array;
    rQshiftTo(target: Uint8Array, len: number): void;
    rQpeekBytes(len: number, copy?: boolean): Uint8Array;
    rQwait(msg: string, num: number, goback?: number): boolean;

    sQpush8(num: number): void;
    sQpush16(num: number): void;
    sQpush32(num: number): void;
    sQpushString(str: string): void;
    sQpushBytes(bytes: Uint8Array | number[]): void;
    flush(): void;

    recvQ: Uint8Array[];
    sendQ: Uint8Array[];
    send(data: ArrayBuffer | ArrayBufferView | Blob | string): void;
}
export {};
