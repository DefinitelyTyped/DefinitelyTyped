// Type definitions for pino-http 4.0
// Project: https://github.com/pinojs/pino-http#readme
// Definitions by: Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { IncomingMessage, ServerResponse } from 'http';
import { Level, Logger, LoggerOptions } from 'pino';

export = PinoHttp;

declare function PinoHttp(opts?: PinoHttp.Options): PinoHttp.HttpLogger;

declare namespace PinoHttp {
    type HttpLogger = (req: IncomingMessage, res: ServerResponse) => void;

    interface Options extends LoggerOptions {
        logger?: Logger;
        genReqId?: (req: IncomingMessage) => number;
        useLevel?: Level;
    }
}

declare module 'http' {
    interface IncomingMessage {
        log: Logger;
    }
}
