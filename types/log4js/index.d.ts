// Type definitions for log4js
// Project: https://github.com/nomiddlename/log4js-node 2.x
// Definitions by: Kentaro Okuno <https://github.com/armorik83>
//                 xialeistudio <https://github.com/xialeistudio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export function getLogger(category?: string): Logger;

export function configure(configuration: Configuration): void;

export interface Configuration {
  appenders: { [index: string]: any };
  categories: { [index: string]: { appenders: string[], level: string } };
}

export interface Logger {
  new(dispatch: Function, name: string): Logger;

  level: string;

  log(...args: any[]): void;

  isLevelEnabled(level: string): boolean;

  _log(level: string, data: any): void;

  addContext(key: string, value: any): void;

  removeContext(key: string): void;

  clearContext(): void;

  trace(...args: any[]): void;

  debug(...args: any[]): void;

  info(...args: any[]): void;

  warn(...args: any[]): void;

  error(...args: any[]): void;

  fatal(...args: any[]): void;
}