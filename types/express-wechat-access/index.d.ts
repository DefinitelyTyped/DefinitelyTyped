// Type definitions for express-wechat-access 1.1
// Project: https://github.com/simmons8616/express-wechat-access
// Definitions by: Simmons Zhang <https://github.com/simmons8616>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { Response, NextFunction } from 'express';
import * as http from 'http';
import { EventEmitter } from 'events';

type WeMiddleware = (req: any, res: Response | http.ServerResponse, next: NextFunction) => any;

declare function weAccessMiddleware(
    options: {
        accessTokenUrl?: string;
        ticketUrl?: string;
        appId: string;
        appSecret: string;
        https?: boolean;
    },
    errorHandler?: (e: any) => any
): WeMiddleware;

declare namespace weAccessMiddleware {
    interface WeAccessMidOption {
        accessTokenUrl?: string;
        ticketUrl?: string;
        appId: string;
        appSecret: string;
        https?: boolean;
    }

    interface WeAccessMiddleware extends WeMiddleware, EventEmitter, Function {}
}

export = weAccessMiddleware;
