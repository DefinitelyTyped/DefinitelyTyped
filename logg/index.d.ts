// Type definitions for logg
// Project: https://github.com/dpup/node-logg
// Definitions by: Bret Little <https://github.com/blittle/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Logger {
    setLogLevel: (level: number)=> void;
    getLogLevel: ()=> number;
    setParent: (logger: Logger)=> void;
    getParent: ()=> Logger;
    registerWatcher: (watcher: (logRecord: string)=> void)=> void;
    getWatchers: ()=> Function[];
    log: (level: number, ...var_args: any[])=> void;
    fine: (...var_args: any[])=> void;
    info: (...var_args: any[])=> void;
    warn: (...var_args: any[])=> void;
    error: (...var_args: any[])=> void;
    isLoggable: (level: number)=> boolean;
}

interface loggingLevels {
    SEVERE: number;
    WARN: number;
    INFO: number;
    FINE: number;
    FINER: number;
    FINEST: number;
    toString: (level: number) => string;
}

declare module "logg" {
    export function getLogger(name: string): Logger;
    export function getTransientLogger(name: string): Logger;
    export var Level : loggingLevels;
    export var rootLogger: Logger;
    export var registerWatcher: (watcher: (logRecord: string)=> void)=> void;
}
