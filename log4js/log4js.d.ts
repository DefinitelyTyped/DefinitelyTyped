// Type definitions for log4js
// Project: https://github.com/nomiddlename/log4js-node
// Definitions by: Kentaro Okuno <http://github.com/armorik83>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "log4js" {
  /**
   * Get a logger instance. Instance is cached on categoryName level.
   *
   * @param   {String} [categoryName] name of category to log to.
   * @returns {Logger} instance of logger for the category
   * @static
   */
  export function getLogger(categoryName?: string): Logger;

  /**
   * Get the default logger instance.
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
   * Shutdown all log appenders. This will first disable all writing to appenders
   * and then call the shutdown function each appender.
   *
   * @params  {Function} cb - The callback to be invoked once all appenders have
   *  shutdown. If an error occurs, the callback will be given the error object
   *  as the first argument.
   * @returns {void}
   */
  export function shutdown(cb: Function): void;

  export function configure(config: any, options?: any): void;

  export var appenders: any;

  export interface Logger {
    setLevel(level: string): void;

    trace(message: string): void;
    debug(message: string): void;
    info(message: string): void;
    warn(message: string): void;
    error(message: string): void;
    fatal(message: string): void;
  }
}
