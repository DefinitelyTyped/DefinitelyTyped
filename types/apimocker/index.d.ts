// Type definitions for apimocker 1.1
// Project: https://www.npmjs.com/package/apimocker
// Definitions by: Uchenna <https://github.com/uchilaka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { RequestHandler, Application } from 'express';

export interface ConfigOptions {
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
     * Start a new instance of API Mocker
     */
    start: (serverPort: string | number, callback?: () => void) => ApiMocker;
    /**
     * Stop the referenced instance of API Mocker
     */
    stop: (callback?: () => void) => ApiMocker;
}

export const middlewares: RequestHandler[];

export function createServer(options?: ConfigOptions): ApiMocker;

export function setConfigFile(file: string): ApiMocker;

export function start(serverPort: string | number, callback?: () => void): ApiMocker;

export function stop(callback?: () => void): ApiMocker;
