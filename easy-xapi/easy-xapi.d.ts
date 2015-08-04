// Type definitions for easy-xapi
// Project: https://github.com/DeadAlready/easy-xapi
// Definitions by: Karl Düüna <https://github.com/DeadAlready/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />
/// <reference path="../easy-jsend/easy-jsend.d.ts" />
/// <reference path="../bunyan/bunyan.d.ts" />

declare module Express {
    export interface Request {
        log: any;
    }
}

declare module "easy-xapi" {
    import express = require('express');
    import http = require('http');
    import bunyan = require('bunyan');

    interface InitConfig {
        jSend?: {partial: boolean};
    }

    interface Config {
        root: string;
        port: number;
        name: string;
        xHeaderDefaults?: Object;
        log: {
            name: string;
            level: string
        }
        mount: (app: express.Application) => void
    }

    interface Result {
        express: any;
        app: express.Application;
        server: http.Server;
        log: bunyan.Logger;
        listen: () => void;
    }

    export function init(conf: InitConfig): void;
    export function create(conf: Config): Result;
}
