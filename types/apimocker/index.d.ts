// Definitions by: Uchenna <https://github.com/uchilaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { RequestHandler, Application } from 'express';

export const middlewares: RequestHandler[];

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

export function setConfigFile(file: string): ApiMocker;

export function start(serverPort: string | number, callback?: () => void): ApiMocker;

export function stop(callback?: () => void): ApiMocker;
