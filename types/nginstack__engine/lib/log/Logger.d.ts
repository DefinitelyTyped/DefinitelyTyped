export = Logger;
declare function Logger(): void;
declare class Logger {
    debug(log: string, formatArgs?: any[]): void;
    info(log: string, formatArgs?: any[]): void;
    warn(log: string, formatArgs?: any[]): void;
    error(log: string, formatArgs?: any[]): void;
    fatal(log: string, formatArgs?: any[]): void;
}
declare namespace Logger {
    function getLogger(category: string): Logger;
    function propertyConfig(config: string): void;
}
