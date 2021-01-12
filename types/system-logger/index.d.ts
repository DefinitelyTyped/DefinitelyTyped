// Type definitions for system-logger 2.1
// Project: https://github.com/leocwlam/system-logger
// Definitions by: Leo Lam <https://github.com/leocwlam>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.1

export enum level {
  error = 0,
  warn = 1,
  info = 2,
  verbose = 3,
  debug = 4,
  silly = 5,
}

export enum fileRotateType {
  monthly = 0,
  weekly = 1,
  daily = 2,
  hourly = 3,
  minutely = 4,
}

export interface LoggerConfiguration {
  level: level;
  silent?: boolean;
  externalDisplayFormat?: any;
}

export interface FileConfiguration {
  saveToFileName?: string;
  isFileRotate?: boolean;
  fileRotateType?: fileRotateType;
  fileRotateMaxSize?: number;
}

export interface SourcesConfiguration {
  levels: level[];
  connector: any;
  callback: any;
}

export class Logger {
  constructor(
    configuration?: LoggerConfiguration,
    fileConfig?: FileConfiguration,
    sourceConfig?: SourcesConfiguration,
  );

  log(level: level | string, message: string, optional?: any): void;
}
