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

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    alert(options: MessageOptions, callback?: ProducerCallback): string | void;

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    crit(options: MessageOptions, callback?: ProducerCallback): string | void;

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    debug(options: MessageOptions, callback?: ProducerCallback): string | void;

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    emergency(options: MessageOptions, callback?: ProducerCallback): string | void;

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    info(options: MessageOptions, callback?: ProducerCallback): string | void;

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    notice(options: MessageOptions, callback?: ProducerCallback): string | void;

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    produce(options: MessageOptions, callback?: ProducerCallback): string | void;

    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
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
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    function parse(rawMessage: string | Buffer, callback?: ParserCallback): SyslogMessage | void;
}
