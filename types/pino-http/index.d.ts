// Type definitions for pino-http 4.0
// Project: https://github.com/pinojs/pino-http#readme
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { IncomingMessage, ServerResponse } from 'http';
import { DestinationStream, Level, Logger, LoggerOptions } from 'pino';

export = PinoHttp;

declare function PinoHttp(opts?: PinoHttp.Options, stream?: DestinationStream): PinoHttp.HttpLogger;
declare function PinoHttp(stream?: DestinationStream): PinoHttp.HttpLogger;

declare namespace PinoHttp {
    type HttpLogger = (req: IncomingMessage, res: ServerResponse) => void;

    interface Options extends LoggerOptions {
        logger?: Logger;
        genReqId?: GenReqId;
        useLevel?: Level;
        stream?: DestinationStream;
        customLogLevel?: (res: ServerResponse, error: Error) => Level;
    }

    interface GenReqId {
        (req: IncomingMessage): number | string | object;
    }
}

declare module 'http' {
    interface IncomingMessage {
        log: Logger;
    }
}
