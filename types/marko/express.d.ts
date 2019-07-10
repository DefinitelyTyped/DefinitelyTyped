import * as express from 'express';
import Template from './src/runtime/html/Template';
import { IRouterMatcher as ExpressRouterMatcher, NextFunction, PathParams } from 'express-serve-static-core';

declare function m(): m.Application;

declare namespace m {
    interface Response extends express.Response {
        marko(template: Template, data?: any): void;
    }

    interface Application extends express.Application {
        get: ((name: string) => any) & ExpressRouterMatcher<this> & MarkoRouterMatcher;
    }

    type MarkoRouterMatcher = (path: PathParams, ...handlers: RequestHandler[]) => Application;
    type RequestHandler = (req: express.Request, res: Response, next?: NextFunction) => any;
}

export = m;
