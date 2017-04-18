// Type definitions for aurelia-logging v1.0.0-beta.1.2.0 
// Project: https://github.com/aurelia/logging/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'aurelia-logging' {
  
  /**
  * Specifies the available logging levels.
  */
  export interface LogLevel {
    
    /**
      * No logging.
      */
    none: number;
    
    /**
      * Log only error messages.
      */
    error: number;
    
    /**
      * Log warnings messages or above.
      */
    warn: number;
    
    /**
      * Log informational messages or above.
      */
    info: number;
    
    /**
      * Log all messages.
      */
    debug: number;
  }
  
  /**
  * Implemented by classes which wish to append log data to a target data store.
  */
  export interface Appender {
    
    /**
      * Appends a debug log.
      *
      * @param logger The source logger.
      * @param rest The data to log.
      */
    debug(logger: Logger, ...rest: any[]): void;
    
    /**
      * Appends an info log.
      *
      * @param logger The source logger.
      * @param rest The data to log.
      */
    info(logger: Logger, ...rest: any[]): void;
    
    /**
      * Appends a warning log.
      *
      * @param logger The source logger.
      * @param rest The data to log.
      */
    warn(logger: Logger, ...rest: any[]): void;
    
    /**
      * Appends an error log.
      *
      * @param logger The source logger.
      * @param rest The data to log.
      */
    error(logger: Logger, ...rest: any[]): void;
  }
  
  /**
  * Specifies the available logging levels.
  */
  /**
  * Specifies the available logging levels.
  */
  export const logLevel: LogLevel;
  
  /**
  * Gets the instance of a logger associated with a particular id (or creates one if it doesn't already exist).
  *
  * @param id The id of the logger you wish to get an instance of.
  * @return The instance of the logger, or creates a new logger if none exists for that id.
  */
  export function getLogger(id: string): Logger;
  
  /**
  * Adds an appender capable of processing logs and channeling them to an output.
  *
  * @param appender An appender instance to begin processing logs with.
  */
  /**
  * Adds an appender capable of processing logs and channeling them to an output.
  *
  * @param appender An appender instance to begin processing logs with.
  */
  export function addAppender(appender: Appender): void;
  
  /**
  * Sets the level of logging for the application loggers.
  *
  * @param level Matches a value of logLevel specifying the level of logging.
  */
  export function setLevel(level: number): void;
  
  /**
  * A logger logs messages to a set of appenders, depending on the log level that is set.
  */
  export class Logger {
    
    /**
      * The id that the logger was created with.
      */
    id: string;
    
    /**
      * You cannot instantiate the logger directly - you must use the getLogger method instead.
      */
    constructor(id: string, key: Object);
    
    /**
       * Logs a debug message.
       *
       * @param message The message to log.
       */
    debug(message: string): void;
    
    /**
       * Logs info.
       *
       * @param message The message to log.
       */
    info(message: string): void;
    
    /**
       * Logs a warning.
       *
       * @param message The message to log.
       */
    warn(message: string): void;
    
    /**
       * Logs an error.
       *
       * @param message The message to log.
       */
    error(message: string): void;
  }
}