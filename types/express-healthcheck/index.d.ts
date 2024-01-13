import { RequestHandler } from "express";

declare function expressHealthcheck(options?: {
    test?: ((err: Error) => void) | (() => Error);
    healthy?: () => any;
}): RequestHandler;

export = expressHealthcheck;
