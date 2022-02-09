// Type definitions for node-json-logger 0.0
// Project: https://github.com/hidori/node-json-logger#readme
// Definitions by: from20020516 <https://github.com/from20020516>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type TLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';
type TLogger = {
    [level in TLevel]: (...args: any[]) => {
        timestamp: string;
        level: level;
        message: string;
    };
};
type Logger = new (
    options?: Partial<{
        level: TLevel | 'none'
        loggerName: string
        timestamp: boolean
        timezone: string
    }>
) => TLogger;

declare const _: Logger;
export = _;
