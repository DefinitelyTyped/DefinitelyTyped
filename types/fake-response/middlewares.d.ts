import * as express from 'express';
import { Validators } from './Validators';
import { Config, Globals, Middleware, UserDB, Injectors } from './model';
export class DefaultMiddlewares extends Validators {
    constructor(db?: UserDB, config?: Config, globals?: Globals, injectors?: Injectors[]);
    protected logResponseTime: (req: any, res: any, next: any) => void;
    protected getStatusCodeColor: (statusCode: number) => string;
    protected errorHandler: (err: any, req: any, res: any, next: any) => any;
}
export class Middlewares extends DefaultMiddlewares {
    constructor(db?: UserDB, config?: Config, globals?: Globals, injectors?: Injectors[]);
    protected initialMiddlewareWrapper: (
        data: any,
        dataType: string,
        specificMiddleware: Middleware,
        commonMiddleware: Config['middleware'],
        delay: number,
    ) => (req: express.Request, res: express.Response, next: express.NextFunction) => Promise<void>;
    protected specificMiddlewareWrapper: (
        globals: Globals,
    ) => (req: express.Request, res: express.Response, next: express.NextFunction) => void;
    protected commonMiddlewareWrapper: (globals: Globals) => (req: any, res: any, next: any) => void;
    protected defaultMiddleware: (req: express.Request, res: express.Response, next: any) => void;
}
export {};
