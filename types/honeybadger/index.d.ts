// Type definitions for honeybadger 1.3
// Project: https://github.com/honeybadger-io/honeybadger-node
// Definitions by: Ryan Skrzypek <https://github.com/rskrz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

declare module "honeybadger" {
  import { RequestHandler, ErrorRequestHandler } from "express";
  interface ConfigureOptions {
    apiKey: string;
    endpoint?: string;
    hostname?: string;
    environment?: string;
    projectRoot?: string;
    logger?: object;
    developmentEnvironment?: string[];
    filters?: string[];
  }
  interface metadata {
    name?: string;
    message?: string;
    context?: object;
    session?: object;
    headers?: object;
    params?: object;
    cgiData?: object;
    url?: string;
    component?: string;
    action?: string;
    fingerprint?: string;
  }
  interface HoneyBadger {
    configure: (options: ConfigureOptions) => void;
    notify: (error: any, options?: object) => void;
    setContext: (context: object) => void;
    resetContext: (context?: object) => void;
    factory: (options?: object) => HoneyBadger;
    errorHandler: ErrorRequestHandler;
    requestHandler: RequestHandler;
    lambdaHandler: (handler: RequestHandler) => () => any;
    onUncaughtException: (func: (error: Error) => void) => void;
    emit: (event: object) => void;
  }
  const honeybadger: HoneyBadger;

  export default honeybadger;
}
