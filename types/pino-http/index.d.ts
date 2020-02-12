// Type definitions for pino-http 4.3
// Project: https://github.com/pinojs/pino-http#readme
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
//                 Jeremy Forsythe <https://github.com/jdforsythe>
//                 Griffin Yourick <https://github.com/tough-griff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { IncomingMessage, ServerResponse } from 'http';
import { DestinationStream, Level, Logger, LoggerOptions } from 'pino';

export = PinoHttp;

declare function PinoHttp(opts?: PinoHttp.Options, stream?: DestinationStream): PinoHttp.HttpLogger;
declare function PinoHttp(stream?: DestinationStream): PinoHttp.HttpLogger;

declare namespace PinoHttp {
    type HttpLogger = (req: IncomingMessage, res: ServerResponse) => void;
    type ReqId = number | string | object;

    /**
     * Options for pino-http
     *
     * See https://github.com/pinojs/pino-http#pinohttpopts-stream
     */
    interface Options extends LoggerOptions {
        logger?: Logger;
        genReqId?: GenReqId;
        useLevel?: Level;
        stream?: DestinationStream;
        autoLogging?: boolean;
        customLogLevel?: (res: ServerResponse, error: Error) => Level;
    }

    interface GenReqId {
        (req: IncomingMessage): ReqId;
    }
}

declare module 'http' {
    interface IncomingMessage {
        id: PinoHttp.ReqId;
        log: Logger;
    }
    interface ServerResponse {
        err?: Error;
    }
}
