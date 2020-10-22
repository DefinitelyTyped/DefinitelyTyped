// Type definitions for client-sessions 0.8
// Project: https://github.com/mozilla/node-client-sessions
// Definitions by: Aditya <https://github.com/netroy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />

import * as cookies from "cookies";

declare namespace client_sessions {
  type NextFunction = (err?: Error) => void;
  type RequestHandler = (req: any, res: any, next: NextFunction) => any;

  interface SessionOptions {
    /**
     * encryption secret for the session.
     * required
     */
    secret: string;

    /**
     * session cookie name.
     * Default: 'session_state'
     */
    cookieName?: string;

    /**
     * how long the session will stay valid in ms.
     * Default: 24 hours
     */
    duration?: number;

    /**
     * if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds.
     * Default: 5 minutes
     */
    activeDuration?: number;

    /**
     * session accessor on the request object.
     * Default: 'session'
     */
    requestKey?: string;

    cookie?: cookies.IOptions;
  }

  interface DecodeResult {
    content: any;
    createdAt: number;
    duration: number;
  }

  interface ComputeHmacOptions {
    signatureAlgorithm: string;
    signatureKey: Buffer;
  }

  interface Util {
    computeHmac(options: any, iv: string, ciphertext: string, duration: number, createdAt: number): Buffer;
    encode(options: SessionOptions, content: any, duration?: number, createdAt?: number): string;
    decode(options: SessionOptions, encoded: string): DecodeResult;
  }

  interface Sessions {
    (options: SessionOptions): RequestHandler;
    util: Util;
  }
}

declare var client_sessions: client_sessions.Sessions;
export = client_sessions;
export as namespace client_sessions;
