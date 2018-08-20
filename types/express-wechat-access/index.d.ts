// Type definitions for express-wechat-access 1.1
// Project: https://github.com/simmons8616/express-wechat-access
// Definitions by: Simmons Zhang <https://github.com/simmons8616>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />
/// <reference types="express" />

import { Response, NextFunction } from 'express';
import * as http from 'http';
import { EventEmitter } from 'events';

interface IMidOption {
    accessTokenUrl?: string;
    ticketUrl?: string;
    appId: string;
    appSecret: string;
    https?: boolean;
}

type IMiddleware = (req: any, res: Response | http.ServerResponse, next: NextFunction) => any;

declare function weAccessMiddleware(
    options: IMidOption,
    errorHandler?: (e: any) => any
): IMiddleware;

declare namespace weAccessMiddleware {
    interface IWeAccessMidOption extends IMidOption {}

    interface IWeAccessMiddleware extends IMiddleware, EventEmitter, Function {}
}

export = weAccessMiddleware;
