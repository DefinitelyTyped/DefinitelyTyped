// Type definitions for logat 1.x.x
// Project: https://github.com/krvikash35/logat
// Definitions by: Vikash <https://github.com/krvikash35/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'logat'{
  import events = require('events');
  interface LogOptionsI {
    logLevel?: number,
    logMethod?: number,
    logFileName?: string
  }

  class Logger extends events.EventEmitter {
    error(...args: any[]): void;
    warn(...args: any[]): void;
    debug(...args: any[]): void;
    getOptions(): LogOptionsI;
    setOptions(options: LogOptionsI);
  }

  export = new Logger();
}
