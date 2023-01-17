export = Pop3;
declare function Pop3(host: string, port: number, useSsl: boolean): void;
declare class Pop3 {
    constructor(host: string, port: number, useSsl: boolean);
    readonly host: string;
    readonly port: number;
    readonly useSsl: boolean;
    timeout: number;
    authCommand: AuthMode;
    fullResult: string;
    resultString: string;
    login(username: string, password: string): boolean;
    logout(): boolean;
    noop(): boolean;
    reset(): boolean;
    status(): ServerStatus;
    list(messageNumber?: number): void;
    retrieve(messageNumber: number): void;
    delete(messageNumber: number): void;
}
declare namespace Pop3 {
    export { AuthMode, ServerStatus };
}
type AuthMode = 'PASS' | 'APOP';
interface ServerStatus {
    messageCount: number;
    messagesSize: number;
}
