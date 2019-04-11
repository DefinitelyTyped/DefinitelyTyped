// Type definitions for logat 1.0
// Project: https://github.com/krvikash35/logat
// Definitions by: Vikash <https://github.com/krvikash35>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface LogOptionsI {
  logLevel?: number;
  logMethod?: number;
  logFileName?: string;
}

interface Logger extends NodeJS.EventEmitter {
  error(...args: any[]): void;
  warn(...args: any[]): void;
  info(...args: any[]): void;
  debug(...args: any[]): void;
  getOptions(): LogOptionsI;
  setOptions(options: LogOptionsI): void;
}

declare const logger: Logger;
export = logger;
