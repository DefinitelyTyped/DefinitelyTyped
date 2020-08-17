// Type definitions for fake-response 3.2
// Project: https://github.com/R35007/Fake-Response
// Definitions by: r35007 <https://github.com/R35007>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export as namespace FakeResponse;

import * as express from "express";
import { Server } from "http";
import { Config, Db, Globals, Middleware, RouteResult, UserDB, Injectors } from "./model";
import { Middlewares } from "./middlewares";
export class FakeResponse extends Middlewares {
    app: express.Application;
    server: Server;
    availableRoutes: string[];
    fullDbData: object;
    routesResults: RouteResult[];
    private isServerLaunched;
    private isExpressAppCreated;
    private isServerStarted;
    private isResourcesLoaded;
    private isDefaultsCreated;
    constructor(db?: UserDB, config?: Config, globals?: Globals, injectors?: Injectors[]);
    launchServer: () => Promise<{
        app: express.Application;
        server: Server;
        results: RouteResult[];
        db: Db[];
        config: Config;
        globals: Globals;
        fullDbData: object;
    }>;
    createExpressApp: () => express.Application;
    startServer: (port?: number) => Promise<Server>;
    stopServer: () => Promise<boolean>;
    loadResources: () => Promise<RouteResult[]>;
    private generateRoutes;
    private generateRoute;
    createRoute: (data: any, route: string, dataType?: string, middleware?: Middleware, delay?: number) => void;
    private getMiddlewareList;
    createDefaultRoutes: () => void;
    getDb: () => UserDB;
    getConfig: () => Config;
    getGlobals: () => Globals;
    getInjectors: () => Injectors[];
}
