// TypeScript Version: 3.5

// Declaration sample: https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

import { RequestHandler, Application } from 'express';

export interface configOptions {
    port?: string;
    mockDirectory?: string;
    allowedDomains?: string[];
    allowedHeaders?: string[];
    logRequestHeaders?: boolean;
    allowAvoidPreFlight?: boolean;
    useUploadFieldname?: boolean;
    webServices?: any;
    quiet?: boolean;
}

// export const options: configOptions;
// export const middlewares: RequestHandler[];
// export const corsMiddleware: RequestHandler;

export interface ApiMocker {
    express: Application;
    middlewares: RequestHandler[];
    setConfigFile: (file: string) => ApiMocker;
    loadConfigFile: () => void;
    setRoutes: (webServices: any) => void;
    /**
     * Set the route for express, in case it was not set yet
     */
    setRoute: (options: any) => void;
    /**
     * @TODO inspect Express.Application.start
     */
    start: (serverPort: string | number, callback?: () => void) => ApiMocker;
    /**
     * @TODO inspect Express.Application.close
     */
    stop: (callback?: () => void) => ApiMocker;
}

export function createServer(options?: configOptions): ApiMocker;
