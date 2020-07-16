// Type definitions for pino-http 5.0
// Project: https://github.com/pinojs/pino-http#readme
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
//                 Jeremy Forsythe <https://github.com/jdforsythe>
//                 Griffin Yourick <https://github.com/tough-griff>
//                 Jorge Barnaby <https://github.com/yorch>
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
        autoLogging?: boolean | AutoLoggingOptions;
        customLogLevel?: (res: ServerResponse, error: Error) => Level;
        customSuccessMessage?: (res: ServerResponse) => string;
        customErrorMessage?: (error: Error, res: ServerResponse) => string;
        customAttributeKeys?: CustomAttributeKeys;
        reqCustomProps?: (req: IncomingMessage) => object;
    }

    interface GenReqId {
        (req: IncomingMessage): ReqId;
    }

    interface AutoLoggingOptions {
        ignorePaths?: string[];
        getPath?: (req: IncomingMessage) => string | undefined;
    }

    interface CustomAttributeKeys {
        req?: string;
        res?: string;
        err?: string;
        responseTime?: string;
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
