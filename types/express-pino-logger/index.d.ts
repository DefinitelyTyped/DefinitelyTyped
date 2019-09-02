// Type definitions for express-pino-logger 4.0
// Project: https://github.com/pinojs/express-pino-logger#readme
// Definitions by: Oleg Repin <https://github.com/iamolegga>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { Handler } from 'express';
import { LoggerOptions, Logger } from 'pino';

declare function expressPinoLogger(options?: LoggerOptions | { logger?: Logger }): Handler;

export = expressPinoLogger;

declare global {
    namespace Express {
        interface Request {
            log: Logger;
        }
    }
}
