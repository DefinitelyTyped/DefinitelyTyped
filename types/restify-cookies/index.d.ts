import * as restify from "restify";

declare module "restify" {
    interface CookieOptions {
        encode?: ((input: string) => string) | undefined;
        maxAge?: number | undefined;
        domain?: string | undefined;
        path?: string | undefined;
        expires?: Date | undefined;
        httpOnly?: boolean | undefined;
        secure?: boolean | undefined;
        sameSite?: boolean | "lax" | "strict" | "none" | undefined;
    }

    interface Request {
        cookies: any;
    }

    interface Response {
        setCookie(key: string, val: string, options?: CookieOptions): void;
    }
}

export function parse(req: restify.Request, res: restify.Response, next: restify.Next): any;
