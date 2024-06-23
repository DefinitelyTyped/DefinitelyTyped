import { Application, RequestHandler } from "express";

export interface ConfigOptions {
    port?: string | undefined;
    mockDirectory?: string | undefined;
    allowedDomains?: string[] | undefined;
    allowedHeaders?: string[] | undefined;
    logRequestHeaders?: boolean | undefined;
    allowAvoidPreFlight?: boolean | undefined;
    useUploadFieldname?: boolean | undefined;
    webServices?: any;
    quiet?: boolean | undefined;
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
