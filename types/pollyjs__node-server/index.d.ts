// Type definitions for @pollyjs/node-server 2.6
// Project: https://github.com/netflix/pollyjs/tree/master/packages/@pollyjs/node-server
// Definitions by: Offir Golan <https://github.com/offirgolan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as http from 'http';
import * as express from 'express';

export interface Config {
    port: number;
    quiet: boolean;
    recordingSizeLimit: string;
    recordingsDir: string;
    apiNamespace: string;
}

export const Defaults: Config;

export interface APIResponse {
    status: number;
    body?: any;
}

export class API {
    constructor(options: Pick<Config, 'recordingsDir'>);
    getRecordings(recording: string): APIResponse;
    saveRecording(recording: string, data: any): APIResponse;
    deleteRecording(recording: string): APIResponse;
    filenameFor(recording: string): string;
    respond(status: number, data?: any): APIResponse;
}

export class Server {
    config: Config;
    app: express.Express;
    server?: http.Server;

    constructor(options?: Partial<Config>);
    listen(port?: number, host?: string): http.Server;
}

export function registerExpressAPI(app: express.Express, config: Partial<Config>): void;
