// Type definitions for express-session 1.17
// Project: https://github.com/expressjs/session
// Definitions by: HoldYourWaffle <https://github.com/HoldYourWaffle>
//                 Hiroki Horiuchi <https://github.com/horiuchi>
//                 Jacob Bogers <https://github.com/jacobbogers>
//                 Naoto Yokoyama <https://github.com/builtinnya>
//                 Ryan Cannon <https://github.com/ry7n>
//                 Tom Spencer <https://github.com/fiznool>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import express = require('express');
import { EventEmitter } from 'events';

declare global {
    namespace Express {
        interface Request { // inject additional properties on express.Request
            /** Even though this property isn't optional, it won't exist until you use the express-session middleware */
            session: Session;

            /** Even though this property isn't optional, it won't exist until you use the express-session middleware */
            sessionID: string;
        }
    }

    /** This interface allows you to add application-specific properties to your session using [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) */
    // tslint:disable-next-line no-empty-interface
    interface SessionData {
    }
}

export default function session(options?: SessionOptions): express.RequestHandler;

export interface CookieOptions {
    maxAge?: number;
    signed?: boolean;
    expires?: Date;
    httpOnly?: boolean;
    path?: string;
    domain?: string;
    secure?: boolean | 'auto';
    sameSite?: boolean | string;
}

export class Cookie implements CookieOptions {
    originalMaxAge: number;

    maxAge?: number;
    signed?: boolean;
    expires?: Date;
    httpOnly?: boolean;
    path?: string;
    domain?: string;
    secure?: boolean | 'auto';
    sameSite?: boolean | string;
}

export interface SessionOptions {
    secret: string | string[];

    genid?(req: express.Request): string;
    name?: string;
    store?: Store;
    cookie?: CookieOptions;
    rolling?: boolean;
    resave?: boolean;
    proxy?: boolean;
    saveUninitialized?: boolean;
    unset?: string;
}

export interface Session extends SessionData {
    id: string;
    cookie: Cookie;

    regenerate(callback: (err: any) => void): Session;
    destroy(callback: (err: any) => void): Session;
    reload(callback: (err: any) => void): Session;
    save(callback?: (err: any) => void): Session;
    touch(): Session;
}

export abstract class Store extends EventEmitter {
    regenerate(req: express.Request, callback: (err?: any) => any): void;
    load(sid: string, callback: (err: any, session?: SessionData) => any): void;
    createSession(req: express.Request, session: SessionData): void;

    abstract get(sid: string, callback: (err: any, session?: SessionData | null) => void): void;
    abstract set(sid: string, session: SessionData, callback?: (err?: any) => void): void;
    abstract destroy(sid: string, callback?: (err?: any) => void): void;

    all?(callback: (err: any, obj?: { [sid: string]: SessionData; } | null) => void): void;
    length?(callback: (err: any, length: number) => void): void;
    clear?(callback?: (err?: any) => void): void;
    touch?(sid: string, session: SessionData, callback?: () => void): void;
}

export class MemoryStore extends Store {
    get(sid: string, callback: (err: any, session?: SessionData | null) => void): void;
    set(sid: string, session: SessionData, callback?: (err?: any) => void): void;
    destroy(sid: string, callback?: (err?: any) => void): void;

    all(callback: (err: any, obj?: { [sid: string]: SessionData; } | null) => void): void;
    length(callback: (err: any, length: number) => void): void;
    clear(callback?: (err?: any) => void): void;
    touch(sid: string, session: SessionData, callback?: () => void): void;
}
