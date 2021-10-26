// Type definitions for glossy 0.1
// Project: https://github.com/squeeks/glossy
// Definitions by: bmaupin <https://github.com/bmaupin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface ProduceOptions {
    facility?: string;
    severity?: string;
    host?: string;
    appName?: string;
    pid?: string | number;
    msgID?: string;
    type?: string;
}

export interface MessageOptions {
    facility?: string;
    severity?: string;
    prival?: number;
    host?: string;
    appName?: string;
    pid?: string | number;
    date?: Date;
    time?: Date;
    msgID?: string;
    structuredData?: unknown;
    message?: string;
}

export interface ProducerCallback {
    (compiledMessage: string): void;
}

export class Produce {
    constructor(options: ProduceOptions | string);

    alert(options: MessageOptions, callback?: ProducerCallback): string | void;

    crit(options: MessageOptions, callback?: ProducerCallback): string | void;

    debug(options: MessageOptions, callback?: ProducerCallback): string | void;

    emergency(options: MessageOptions, callback?: ProducerCallback): string | void;

    info(options: MessageOptions, callback?: ProducerCallback): string | void;

    notice(options: MessageOptions, callback?: ProducerCallback): string | void;

    produce(options: MessageOptions, callback?: ProducerCallback): string | void;

    warn(options: MessageOptions, callback?: ProducerCallback): string | void;
}

export interface ParserCallback {
    (parsedMessage: SyslogMessage): void;
}

export interface SyslogMessage {
    originalMessage: string;
    type: string;
    time: Date;
    message: string;
    host?: string | null;
    appName?: string | null;
    pid?: string | null;
    msgID?: string | null;
    structuredData?: unknown;
}

export namespace Parse {
    function parse(rawMessage: string | Buffer, callback?: ParserCallback): SyslogMessage | void;
}
