import { Request, RequestHandler } from "express";

declare module "express-serve-static-core" {
    interface Request {
        absoluteUrl(): string;
    }
}

export default function(req: Request): string;

export function middleware(): RequestHandler;
