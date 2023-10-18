import { Request, RequestHandler } from "express";

declare module "express-serve-static-core" {
    interface Request {
        absoluteUrl(): string;
    }
}

interface AbsoluteUrl {
    (): RequestHandler;
    attach(req: Request): void;
}

declare const middleware: AbsoluteUrl;

export = middleware;
