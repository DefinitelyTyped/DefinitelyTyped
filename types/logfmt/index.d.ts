/// <reference types="node" />

import { IncomingMessage, ServerResponse } from "http";

type HTTPHandler = (req: IncomingMessage, res: ServerResponse, next: (err?: any) => void) => any;

interface WritableStream {
    write(data: string): void;
}

interface RequestLoggerOptions {
    immediate?: boolean | undefined;
    elapsed?: string | undefined;
}
type RequestLoggerFormatter = (req: IncomingMessage, res: ServerResponse) => object;

interface RequestLogger {
    (options?: RequestLoggerOptions, formatter?: RequestLoggerFormatter): HTTPHandler;
    (formatter: RequestLoggerFormatter): HTTPHandler;
    commonFormatter: (req: IncomingMessage, res: ServerResponse) => {
        ip: string;
        time: string;
        method: string;
        path: string;
        "status": number;
        request_id?: string | undefined;
        content_length?: string | undefined;
        content_type?: string | undefined;
    };
}

interface Logfmt {
    stringify(data: object): string;
    parse(line: string): Partial<Record<string, string | boolean | null>>;

    log(data?: object, stream?: WritableStream): void;
    time(label?: string): Logfmt;
    namespace(data: object): Logfmt;
    error(err: Error, id?: string): void;

    streamParser(options?: { end?: boolean | undefined }): NodeJS.ReadWriteStream;
    streamStringify(options?: { delimiter?: string | undefined }): NodeJS.ReadWriteStream;

    bodyParser(options?: { contentType?: string | undefined }): HTTPHandler;
    bodyParserStream(options?: { contentType?: string | undefined }): HTTPHandler;

    requestLogger: RequestLogger;

    stream: WritableStream;
    maxErrorLines: number;
}

interface LogfmtStatic extends Logfmt {
    new(): Logfmt;
}

// logfmt copies its prototype onto the exported class, so you can both use it
// directly as an instance of the class and as a constructor to instantiate new
// instances.
declare const logfmt: LogfmtStatic;

export = logfmt;
