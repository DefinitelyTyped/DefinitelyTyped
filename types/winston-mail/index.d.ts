// Type definitions for winston-mail 1.5
// Project: https://github.com/wavded/winston-mail#readme
// Definitions by: Sorin Sandru <https://github.com/idono87>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as winston from "winston";

export as namespace winstonMail;

export class Mail extends winston.Transport
    implements winston.TransportInstance {
    constructor(options: MailTransportOptions);
    name: string;
    to: string;
    from: string;
    level: string;
    unique: boolean;
    silent: boolean;
    filter: ((obj: { level: string; message: string; meta: any }) => boolean);
    subject: string;
    html: boolean;
    log(level: any, msg: any, meta: any, callback: any): any;
}

export interface MailTransportOptions {
    name?: string;
    to: string;
    from?: string;
    level?: string;
    silent?: boolean;
    handleExceptions?: boolean;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    subject?: string;
    ssl?: boolean | { key: string; ca: string; cert: string };
    tls?: boolean | { ciphers: string };
    unique?: boolean;
    filter?: ((obj: { level: string; message: string; meta: any }) => boolean);
    html?: boolean;
    timeout?: number;
    authentication?: string[];
    formatter?: ((
        obj: { level: string; message: string; meta: any }
    ) => string);
}

declare module "winston" {
    interface Transports {
        Mail: winstonMail.Mail;
    }
}
