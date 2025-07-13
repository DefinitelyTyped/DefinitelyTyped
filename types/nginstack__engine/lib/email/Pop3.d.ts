export = Pop3;
declare function Pop3(host: string, port: number, useSsl: boolean): void;
declare class Pop3 {
    constructor(host: string, port: number, useSsl: boolean);
    host: string;
    port: number;
    useSsl: boolean;
    socket_: Socket;
    private timestamp_;
    timeout: number;
    authCommand: string;
    private authCommand_;
    private readResult_;
    private sendCommand_;
    private authLogin_;
    private authApop_;
    login(username: string, password: string): void;
    logout(): void;
    noop(): void;
    reset(): void;
    status(): ServerStatus;
    list(messageNumber?: number): Pop3MessageInfo[];
    retrieve(messageNumber: number): string;
    delete(messageNumber: number): void;
}
declare namespace Pop3 {
    export { ServerStatus, Pop3MessageInfo, Pop3Response };
}
import Socket = require('../net/Socket.js');
interface ServerStatus {
    messageCount: number;
    messagesSize: number;
}
interface Pop3MessageInfo {
    messageNumber: number;
    messageSize: number;
}
interface Pop3Response {
    fullResult: string;
    statusLine: string;
}
