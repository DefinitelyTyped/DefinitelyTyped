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

export interface LoggerConfig {
    level?: string | undefined;
    color?: boolean | undefined;
    readable?: boolean | undefined;
    prefix?: string | undefined;
}

export class Logger {
    trace(message: string, data?: object): void;
    debug(message: string, data?: object): void;
    info(message: string, data?: object): void;
    warn(message: string, data?: object): void;
    error(message: string, data?: object): void;
    fatal(message: string, data?: object): void;
    constructor(config: LoggerConfig);
}
