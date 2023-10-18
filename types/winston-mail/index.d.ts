import * as winston from "winston";

export as namespace winstonMail;

export class Mail extends winston.Transport implements winston.TransportInstance {
    constructor(options: MailTransportOptions);
    name: string;
    to: string;
    from: string;
    level: string;
    unique: boolean;
    silent: boolean;
    filter: (obj: { level: string; message: string; meta: any }) => boolean;
    subject: string;
    html: boolean;
    log(level: any, msg: any, meta: any, callback: any): any;
}

export interface MailTransportOptions {
    name?: string | undefined;
    to: string;
    from?: string | undefined;
    level?: string | undefined;
    silent?: boolean | undefined;
    handleExceptions?: boolean | undefined;
    host?: string | undefined;
    port?: number | undefined;
    username?: string | undefined;
    password?: string | undefined;
    subject?: string | undefined;
    ssl?: boolean | { key: string; ca: string; cert: string } | undefined;
    tls?: boolean | { ciphers: string } | undefined;
    unique?: boolean | undefined;
    filter?: ((obj: { level: string; message: string; meta: any }) => boolean) | undefined;
    html?: boolean | undefined;
    timeout?: number | undefined;
    authentication?: string[] | undefined;
    formatter?:
        | ((
            obj: { level: string; message: string; meta: any },
        ) => string)
        | undefined;
}

declare module "winston" {
    interface Transports {
        Mail: winstonMail.Mail;
    }
}
