import { RequestHandler, Response } from "express";

declare module "express-serve-static-core" {
    interface Response {
        setLink(link: string, rel: string): void;
    }
}

declare const middleware: RequestHandler & { attach(res: Response): void };

export = middleware;
