// Type definitions for express-wechat-access 1.1
// Project: https://github.com/simmons8616/express-wechat-access
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import { EventEmitter } from "events";
import { NextFunction, Response } from "express";
import * as http from "http";

type WeMiddleware = (req: any, res: Response | http.ServerResponse, next: NextFunction) => any;

declare function weAccessMiddleware(
    options: {
        accessTokenUrl?: string | undefined;
        ticketUrl?: string | undefined;
        appId: string;
        appSecret: string;
        https?: boolean | undefined;
    },
    errorHandler?: (e: any) => any,
): WeMiddleware;

declare namespace weAccessMiddleware {
    interface WeAccessMidOption {
        accessTokenUrl?: string | undefined;
        ticketUrl?: string | undefined;
        appId: string;
        appSecret: string;
        https?: boolean | undefined;
    }

    interface WeAccessMiddleware extends WeMiddleware, EventEmitter, Function {}
}

export = weAccessMiddleware;
