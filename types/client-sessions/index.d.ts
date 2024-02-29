/// <reference types="node" />

import * as cookies from "cookies";

interface CookieOptions extends cookies.IOptions {
    /**
     * a boolean indicating whether the cookie will expire when browser closes or not
     * (false by default).
     */
    ephemeral?: boolean | undefined;
}

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
        cookieName?: string | undefined;

        /**
         * how long the session will stay valid in ms.
         * Default: 24 hours
         */
        duration?: number | undefined;

        /**
         * if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds.
         * Default: 5 minutes
         */
        activeDuration?: number | undefined;

        /**
         * session accessor on the request object.
         * Default: 'session'
         */
        requestKey?: string | undefined;

        cookie?: CookieOptions | undefined;
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
