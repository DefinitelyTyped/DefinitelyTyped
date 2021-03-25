// Type definitions for smtp-client 0.3
// Project: https://github.com/xpepermint/smtp-client#readme
// Definitions by: TANGUY Antoine <https://github.com/tanguyantoine>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export class SMTPClient {
    constructor(options?: SMTPClientOptions);
    authLogin(options?: AuthLoginOptions): Promise<void>;
    authPlain(options?: AuthPlainOptions): Promise<void>;
    close(options?: TimeoutOptions): Promise<void>;
    connect(options?: TimeoutOptions): Promise<void>;
    data(data: string | Buffer, options?: DataOptions): Promise<void>;
    mail(options?: MailOptions): Promise<void>;
    quit(options?: TimeoutOptions): Promise<void>;
    rcpt(options?: RcptOptions): Promise<void>;
    greet(options?: GreetOptions): Promise<void>;
    helo(options?: HeloOptions): Promise<void>;
    ehlo(options?: EhloOptions): Promise<void>;
    hasExtension(extensions: string[]): boolean;
    getDataSizeLimit(): number;
    getAuthMechanisms(): string[];
    parseEnhancedReplyCode(line: string): string | null;
    parseReplyText(line: string): string;
    noop(options?: TimeoutOptions): Promise<void>;
    secure(options?: TimeoutOptions): Promise<void>;
}

export interface TimeoutOptions {
    timeout?: number;
}

export interface HeloOptions extends TimeoutOptions {
    hostname?: string;
}

export interface EhloOptions extends TimeoutOptions {
    hostname?: string;
}

export interface SMTPClientOptions {
    host?: string;
    port?: number;
}

export interface AuthPlainOptions extends TimeoutOptions {
    username?: string;
    password?: string;
}

export interface AuthLoginOptions extends TimeoutOptions {
    username?: string;
    password?: string;
}

export interface GreetOptions extends TimeoutOptions {
    hostname?: string;
}

export interface MailOptions extends TimeoutOptions {
    from?: string;
    utf8?: boolean;
}

export interface RcptOptions extends TimeoutOptions {
    to?: string;
}

export interface DataOptions extends TimeoutOptions {
    sourceSize?: number;
}
