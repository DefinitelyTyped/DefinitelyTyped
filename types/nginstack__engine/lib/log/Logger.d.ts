export = Logger;
declare function Logger(): void;
declare class Logger {
    debug(log: string, opt_formatArgs?: any[]): void;
    info(log: string, opt_formatArgs?: any[]): void;
    warn(log: string, opt_formatArgs?: any[]): void;
    error(log: string, opt_formatArgs?: any[]): void;
    fatal(log: string, opt_formatArgs?: any[]): void;
}
declare namespace Logger {
    function getLogger(category: string): Logger;
    function propertyConfig(config: string): void;
}
