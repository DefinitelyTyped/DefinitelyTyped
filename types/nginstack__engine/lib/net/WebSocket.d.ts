export = WebSocket;
declare function WebSocket(origin: string): void;
declare class WebSocket {
    constructor(origin: string);
    open(url: string, timeout?: number): boolean;
    close(code: number, reason: string): void;
    ping(payload: string | ArrayBuffer, timeout?: number): ArrayBuffer;
    sendTextMessage(msg: string): boolean;
    sendBinaryMessage(msg: string | ArrayBuffer): boolean;
    receiveMessage(timeout: number): string | ArrayBuffer;
    lastError: string;
}
