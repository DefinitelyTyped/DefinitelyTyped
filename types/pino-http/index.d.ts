// Type definitions for pino-http 5.4
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
    interface HttpLogger {
        (req: IncomingMessage, res: ServerResponse, next?: () => void): void;
        logger: Logger;
    }
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
        wrapSerializers?: boolean;
        reqCustomProps?: (req: IncomingMessage, res: ServerResponse) => object;
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

    const startTime: unique symbol;
}

declare module 'http' {
    interface IncomingMessage {
        id: PinoHttp.ReqId;
        log: Logger;
    }

    interface ServerResponse {
        err?: Error;
    }

    interface OutgoingMessage {
        [PinoHttp.startTime]: number;
    }
}
