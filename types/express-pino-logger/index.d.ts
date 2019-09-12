// Type definitions for express-pino-logger 4.0
// Project: https://github.com/pinojs/express-pino-logger#readme
// Definitions by: Oleg Repin <https://github.com/iamolegga>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { Handler } from 'express';
import { DestinationStream, LoggerOptions, Logger } from 'pino';

declare function expressPinoLogger(optionsOrStream?: LoggerOptions | DestinationStream | { logger: Logger }): Handler;

declare function expressPinoLogger(options: LoggerOptions, stream: DestinationStream): Handler;

export = expressPinoLogger;

declare global {
    namespace Express {
        interface Request {
            log: Logger;
        }
    }
}
