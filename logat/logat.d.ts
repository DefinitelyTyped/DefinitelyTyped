// Type definitions for logat 1.x.x
// Project: https://github.com/krvikash35/logat
// Definitions by: Vikash <https://github.com/krvikash35/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference path="../node/node.d.ts" />

declare module 'logat'{

  interface LogOptionsI {
    logLevel?: number,
    logMethod?: number,
    logFileName?: string
  }

  class Logger extends NodeJS.EventEmitter {
    error(...args: any[]): void;
    warn(...args: any[]): void;
    info(...args: any[]): void;
    debug(...args: any[]): void;
    getOptions(): LogOptionsI;
    setOptions(options: LogOptionsI): void;
  }

  export = new Logger();
}
