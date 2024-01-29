declare namespace FancyLog {
    interface Logger {
        (...args: any[]): Logger;
        dir(...args: any[]): Logger;
        error(...args: any[]): Logger;
        info(...args: any[]): Logger;
        warn(...args: any[]): Logger;
    }
}

declare var logger: FancyLog.Logger;
export = logger;
