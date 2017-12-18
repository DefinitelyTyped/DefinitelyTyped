// Type definitions for heroku-logger 0.1
// Project: https://github.com/ianstormtaylor/heroku-logger
// Definitions by: Kyle Vogt <https://github.com/kylevogt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2
/* =================== USAGE ===================

    import * as logger from 'heroku-logger';
    catch (error) {
        logger.warn('Do not clutter your log files!', error);
    }

 =============================================== */

export function trace(message: string, data?: object): void;
export function debug(message: string, data?: object): void;
export function info(message: string, data?: object): void;
export function warn(message: string, data?: object): void;
export function error(message: string, data?: object): void;
export function fatal(message: string, data?: object): void;

export const Logger: Logger;

export interface LoggerConfig {
    level?: string;
    color?: boolean;
    readable?: boolean;
    prefix?: boolean;
}

export interface Logger {
    trace(message: string, data?: object): void;
    debug(message: string, data?: object): void;
    info(message: string, data?: object): void;
    warn(message: string, data?: object): void;
    error(message: string, data?: object): void;
    fatal(message: string, data?: object): void;
    new (config: LoggerConfig): LoggerConfig;
}
