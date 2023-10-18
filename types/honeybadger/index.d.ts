import { EventEmitter } from "events";
import { ErrorRequestHandler, RequestHandler } from "express";

declare namespace honeybadger {
    interface ConfigureOptions {
        apiKey: string;
        endpoint?: string | undefined;
        hostname?: string | undefined;
        environment?: string | undefined;
        projectRoot?: string | undefined;
        logger?: Console | undefined;
        developmentEnvironments?: ReadonlyArray<string> | undefined;
        filters?: ReadonlyArray<string> | undefined;
    }
    interface metadata {
        name?: string | undefined;
        message?: string | undefined;
        context?: object | undefined;
        session?: object | undefined;
        headers?: object | undefined;
        params?: object | undefined;
        cgiData?: object | undefined;
        url?: string | undefined;
        component?: string | undefined;
        action?: string | undefined;
        fingerprint?: string | undefined;
    }
    type CallbackFunction = (err: Error | null, notice: object | null) => void;
    type LambdaHandler = (event: object, context: object) => void;
    interface HoneyBadgerInstance extends EventEmitter {
        context: any;
        configure: (options: ConfigureOptions) => void;
        notify: (err?: any, name?: any, extra?: CallbackFunction | metadata, callback?: CallbackFunction) => void;
        setContext: (context: object) => void;
        resetContext: (context?: object) => void;
        factory: (options?: ConfigureOptions) => HoneyBadgerInstance;
        errorHandler: ErrorRequestHandler;
        requestHandler: RequestHandler;
        lambdaHandler: (handler: LambdaHandler) => LambdaHandler;
        onUncaughtException: (func: (error: Error) => void) => void;
    }
}
declare const honeybadger: honeybadger.HoneyBadgerInstance;
export = honeybadger;
