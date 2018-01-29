// Type definitions for express-session 1.15
// Project: https://www.npmjs.org/package/express-session
// Definitions by: Hiroki Horiuchi <https://github.com/horiuchi>
//                 Jacob Bogers <https://github.com/jacobbogers>
//                 Ryan Cannon <https://github.com/ry7n>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import express = require('express');
import node = require('events');

declare global {
  namespace Express {
    interface Request {
      session?: Session;
      sessionID?: string;
    }

    interface SessionData {
      [key: string]: any;
      cookie: SessionCookieData;
    }

    interface SessionCookieData {
      originalMaxAge: number;
      path: string;
      maxAge: number | null;
      secure?: boolean;
      httpOnly: boolean;
      domain?: string;
      expires: Date | boolean;
    }

    interface SessionCookie extends SessionCookieData {
      serialize(name: string, value: string): string;
    }

    interface Session extends SessionData {
      id: string;
      regenerate(callback: (err: any) => void): void;
      destroy(callback: (err: any) => void): void;
      reload(callback: (err: any) => void): void;
      save(callback: (err: any) => void): void;
      touch(callback: (err: any) => void): void;
      cookie: SessionCookie;
    }
  }
}

declare function session(options?: session.SessionOptions): express.RequestHandler;

declare namespace session {
  interface SessionOptions {
    secret: string | string[];
    name?: string;
    store?: Store | MemoryStore;
    cookie?: express.CookieOptions;
    genid?(req: express.Request): string;
    rolling?: boolean;
    resave?: boolean;
    proxy?: boolean;
    saveUninitialized?: boolean;
    unset?: string;
  }

  interface BaseMemoryStore {
    get: (sid: string, callback: (err: any, session: Express.Session) => void) => void;
    set: (sid: string, session: Express.Session, callback: (err: any) => void) => void;
    destroy: (sid: string, callback: (err: any) => void) => void;
    length?: (callback: (err: any, length: number) => void) => void;
    clear?: (callback: (err: any) => void) => void;
  }

  abstract class Store extends node.EventEmitter {
    constructor(config?: any);

    regenerate: (req: express.Request, fn: (err: any) => any) => void;
    load: (sid: string, fn: (err: any, session: Express.Session) => any) => void;
    createSession: (req: express.Request, sess: Express.SessionData) => void;

    get: (sid: string, callback: (err: any, session: Express.Session) => void) => void;
    set: (sid: string, session: Express.Session, callback: (err: any) => void) => void;
    destroy: (sid: string, callback: (err: any) => void) => void;
    all: (callback: (err: any, obj: { [sid: string]: Express.SessionData; }) => void) => void;
    length: (callback: (err: any, length: number) => void) => void;
    clear: (callback: (err: any) => void) => void;
  }

  class MemoryStore implements BaseMemoryStore {
    get: (sid: string, callback: (err: any, session: Express.Session) => void) => void;
    set: (sid: string, session: Express.Session, callback: (err: any) => void) => void;
    destroy: (sid: string, callback: (err: any) => void) => void;
    all: (callback: (err: any, obj: { [sid: string]: Express.Session; }) => void) => void;
    length: (callback: (err: any, length: number) => void) => void;
    clear: (callback: (err: any) => void) => void;
  }
}

export = session;
