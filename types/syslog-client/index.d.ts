// Type definitions for node-syslog-client 1.1
// Project: https://github.com/paulgrove/node-syslog-client
// Definitions by: Romain CONNESSON <https://github.com/helorem>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';

export enum Transport {
    Tcp = 1,
    Udp = 2
}

export enum Facility {
    Kernel =  0,
    User   =  1,
    System =  3,
    Audit  = 13,
    Alert  = 14,
    Local0 = 16,
    Local1 = 17,
    Local2 = 18,
    Local3 = 19,
    Local4 = 20,
    Local5 = 21,
    Local6 = 22,
    Local7 = 23
}

export enum Severity {
    Emergency     = 0,
    Alert         = 1,
    Critical      = 2,
    Error         = 3,
    Warning       = 4,
    Notice        = 5,
    Informational = 6,
    Debug         = 7
}

export interface ClientOptions {
    syslogHostname?: string;
    port?: number;
    tcpTimeout?: number;
    facility?: Facility;
    severity?: Severity;
    rfc3164?: boolean;
    appName?: string;
    dateFormatter?: (() => string);
    transport?: Transport;
    timestamp?: Date;
    msgid?: string;
}

export interface MessageOptions {
    syslogHostname?: string;
    facility?: Facility;
    severity?: Severity;
    rfc3164?: boolean;
    appName?: string;
    timestamp?: Date;
    msgid?: string;
}

export class Client extends EventEmitter {
    constructor(target?: string, options?: ClientOptions);
    buildFormattedMessage(message: string, options: MessageOptions): Buffer;
    close(): Client;
    log(message: string, options?: MessageOptions, cb?: ((error: Error | null) => void)): Client;
    getTransport(cb: ((error: Error | null, transport: Transport) => void)): void;
    onClose(): Client;
    onError(error: Error): Client;
}

export function createClient(target: string, options: ClientOptions): Client;
