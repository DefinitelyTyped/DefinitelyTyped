import { Request, RequestHandler } from "express";

declare module "express-serve-static-core" {
    interface Request {
        absoluteUrl(): URL;
    }
}

export default function(req: Request): URL;

export function middleware(): RequestHandler;
