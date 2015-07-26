declare module 'aurelia-logging-console' {
  export class ConsoleAppender {
    constructor();
    debug(logger: Object, message: string, ...rest: any[]): void;
    info(logger: Object, message: string, ...rest: any[]): void;
    warn(logger: Object, message: string, ...rest: any[]): void;
    error(logger: Object, message: string, ...rest: any[]): void;
  }
}