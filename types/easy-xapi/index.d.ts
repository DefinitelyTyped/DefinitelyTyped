/// <reference types="easy-jsend" />
/// <reference types="bunyan" />
/// <reference types="express" />
/// <reference types="node" />

declare namespace Express {
    export interface Request {
        log: any;
    }
}

declare module "easy-xapi" {
    import express = require("express");
    import http = require("http");
    import Logger = require("bunyan");

    interface InitConfig {
        jSend?: { partial: boolean } | undefined;
    }

    interface Config {
        root: string;
        port: number;
        name: string;
        xHeaderDefaults?: Object | undefined;
        log: {
            name: string;
            level: string;
        };
        mount: (app: express.Application) => void;
    }

    interface Result {
        express: any;
        app: express.Application;
        server: http.Server;
        log: Logger;
        listen: () => void;
    }

    export function init(conf: InitConfig): void;
    export function create(conf: Config): Result;
}
