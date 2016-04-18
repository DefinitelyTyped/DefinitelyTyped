// Type definitions for aurelia-logging-console v1.0.0-beta.1.2.0 
// Project: https://github.com/aurelia/logging-console/
// Definitions by: Behzad abbai <https://github.com/behzad888>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="./aurelia-pal.d.ts" />
/// <reference path="./aurelia-logging.d.ts" />

declare module 'aurelia-logging-console' {
  import {
    PLATFORM
  } from 'aurelia-pal';
  import {
    Logger
  } from 'aurelia-logging';
  
  /*
   * An implementation of the Appender interface.
   */
  export class ConsoleAppender {
    
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
}