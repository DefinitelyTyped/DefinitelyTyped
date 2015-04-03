// Type definitions for log4js
// Project: https://github.com/nomiddlename/log4js-node
// Definitions by: Kentaro Okuno <http://github.com/armorik83>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "log4js" {
  import express = require('express');

  /**
   * Get a logger instance. Instance is cached on categoryName level.
   *
   * @param   {String} [categoryName] name of category to log to.
   * @returns {Logger} instance of logger for the category
   * @static
   */
  export function getLogger(categoryName?: string): Logger;
  export function getBufferedLogger(categoryName?: string): Logger;

  /**
   * Has a logger instance cached on categoryName.
   *
   * @param   {String} [categoryName] name of category to log to.
   * @returns {boolean} contains logger for the category
   * @static
   */
  export function hasLogger(categoryName: string): boolean;

  /**
   * Get the default logger instance.
   *
   * @returns {Logger} instance of default logger
   * @static
   */
  export function getDefaultLogger(): Logger;

  /**
   * args are appender, then zero or more categories
   *
   * @param   {*[]} appenders
   * @returns {void}
   * @static
   */
  export function addAppender(...appenders: any[]): void;

  /**
   * Claer configured appenders
   *
   * @returns {void}
   * @static
   */
  export function clearAppenders(): void;

  /**
   * Shutdown all log appenders. This will first disable all writing to appenders
   * and then call the shutdown function each appender.
   *
   * @params  {Function} cb - The callback to be invoked once all appenders have
   *  shutdown. If an error occurs, the callback will be given the error object
   *  as the first argument.
   * @returns {void}
   */
  export function shutdown(cb: Function): void;

  export function configure(config: IConfig, options?: any): void;
  export function configure(filename: string, options?: any): void;

  export function setGlobalLogLevel(level: string): void;
  export function setGlobalLogLevel(level: Level): void;


  /**
   * Create logger for connect middleware.
   *
   *
   * @returns {express.Handler} Instance of middleware.
   * @static
   */
  export function connectLogger(logger: Logger, options: { format?: string; level?: string; nolog?: any; }): express.Handler;
  export function connectLogger(logger: Logger, options: { format?: string; level?: Level; nolog?: any; }): express.Handler;


  export var appenders: any;
  export var levels: {
    ALL: Level;
    TRACE: Level;
    DEBUG: Level;
    INFO: Level;
    WARN: Level;
    ERROR: Level;
    FATAL: Level;
    OFF: Level;

    toLevel(level: string, defaultLevel?: Level): Level;
    toLevel(level: Level, defaultLevel?: Level): Level;
  };

  export interface Logger {
    setLevel(level: string): void;
    setLevel(level: Level): void;

    isLevelEnabled(level: Level): boolean;
    isTraceEnabled(): boolean;
    isDebugEnabled(): boolean;
    isInfoEnabled(): boolean;
    isWarnEnabled(): boolean;
    isErrorEnabled(): boolean;
    isFatalEnabled(): boolean;

    trace(message: string, ...args: any[]): void;
    debug(message: string, ...args: any[]): void;
    info(message: string, ...args: any[]): void;
    warn(message: string, ...args: any[]): void;
    error(message: string, ...args: any[]): void;
    fatal(message: string, ...args: any[]): void;
  }

  export interface Level {
    isEqualTo(other: string): boolean;
    isEqualTo(otherLevel: Level): boolean;
    isLessThanOrEqualTo(other: string): boolean;
    isLessThanOrEqualTo(otherLevel: Level): boolean;
    isGreaterThanOrEqualTo(other: string): boolean;
    isGreaterThanOrEqualTo(otherLevel: Level): boolean;
  }

  export interface IConfig {
    appenders: IAppenderConfig[];
    levels?: { [category: string]: string };
    replaceConsole?: boolean;
  }
  export interface IAppenderConfig {
    type: string;
    category?: string[];
    // etc...
  }
}

