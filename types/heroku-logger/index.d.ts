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
