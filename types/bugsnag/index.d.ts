// Type definitions for bugsnag-node v1.9.1
// Project: https://github.com/bugsnag/bugsnag-node
// Definitions by: Iker Pérez Brunelli <https://github.com/DarkerTV>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as express from 'express';
import * as Koa from 'koa';
import * as restify from 'restify';

declare namespace bugsnag {
    interface Bugsnag {
        metaData: { [key: string]: any };
        requestData: { [key: string]: any };
        register(apiKey: string, options?: ConfigurationOptions): Bugsnag;
        configure(options: ConfigurationOptions): void;
        notify(error: string | Error, cb?: (error: Error, response: any) => void): void;
        notify(error: string | Error, options: NotifyOptions, cb?: (error: Error, response: any) => void): void;
        errorHandler: ErrorHandler;
        createErrorHandler(apiKey: string, options?: ConfigurationOptions): ErrorHandler;
        requestHandler: express.RequestHandler;
        createRequestHandler(apiKey: string, options?: ConfigurationOptions): express.RequestHandler;
        restifyHandler(req: restify.Request, res: restify.Response, route: restify.Route, err: Error): void;
        koaHandler(err: Error, ctx: Koa.Context): void;
        intercept<T>(cb?: (...args: any[]) => T): (error: any, ...args: any[]) => T & void; // tslint:disable-line void-return
        autoNotify(cb: () => void): any;
        autoNotify(options: NotifyOptions, cb: () => void): any;
        shouldNotify(): boolean;
        onBeforeNotify(cb: (notification: any) => boolean | void): void;
    }

    interface ConfigurationOptions {
        logger?: any;
        logLevel?: string;
        releaseStage?: string;
        appVersion?: string;
        autoNotify?: boolean;
        useSSL?: boolean;
        filters?: string[];
        notifyReleaseStages?: string[];
        notifyHost?: string;
        notifyPort?: number;
        notifyPath?: string;
        metaData?: { [key: string]: any };
        onUncaughtError?(error: string | Error): void;
        hostname?: string;
        proxy?: string;
        headers?: { [key: string]: string };
        projectRoot?: string;
        packageJSON?: string;
        sendCode?: boolean;
    }

    type ErrorHandler = (err: Error | any, req: express.Request, res: express.Response, next: express.NextFunction) => void;

    interface NotifyOptions {
        errorName?: string;
        userId?: string | number;
        user?: { [key: string]: any };
        context?: string;
        groupingHash?: string;
        severity?: 'error' | 'warning' | 'info';
        req?: { [key: string]: any };
        apiKey?: string;
        [key: string]: any;
    }
}

declare const bugsnag: bugsnag.Bugsnag;
export = bugsnag;
