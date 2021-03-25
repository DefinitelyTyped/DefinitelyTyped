// Type definitions for smtp-client 0.3
// Project: https://github.com/xpepermint/smtp-client#readme
// Definitions by: TANGUY Antoine <https://github.com/tanguyantoine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export class SMTPClient {
    constructor(options?: SMTPClientOptions);
    connect(options?: ConnectOptions): Promise<void>;
    authPlain(options?: AuthPlainOptions): Promise<void>;
    authLogin(options?: AuthLoginOptions): Promise<void>;
    close(options?: AuthLoginOptions): Promise<void>;
    greet(options?: GreetOptions): Promise<void>;
    mail(options?: MailOptions): Promise<void>;
    rcpt(options?: RcptOptions): Promise<void>;
    data(data: string | Buffer, options?: DataOptions): Promise<void>;
    quit(options?: QuitOptions): Promise<void>;
}

export interface SMTPClientOptions {
    host?: string;
    port?: number;
}
export interface ConnectOptions {
    timeout?: number;
}
export interface AuthPlainOptions {
    username?: string;
    password?: string;
}
export interface AuthLoginOptions {
    username?: string;
    password?: string;
}
export interface CloseOptions {
    timeout?: number;
}
export interface GreetOptions {
    hostname?: string;
    timeout?: number;
}
export interface MailOptions {
    from?: string;
    timeout?: number;
    utf8?: boolean;
}
export interface RcptOptions {
    to?: string;
    timeout?: number;
}
export interface DataOptions {
    sourceSize?: number;
    timeout?: number;
}
export interface QuitOptions {
    timeout?: number;
}
