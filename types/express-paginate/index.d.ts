import express = require("express");

declare global {
    namespace Express {
        interface Request {
            skip?: number | undefined;
            offset?: number | undefined;
        }
    }
}

export interface PageElement {
    number: number;
    url: typeof href;
}

export function middleware(
    limit?: number,
    maxLimit?: number,
): (req: express.Request, res: express.Response, next: express.NextFunction) => void;
export function hasNextPages(req: express.Request): (pageCount: number) => boolean;
export function href(req: express.Request): (prev: object | boolean, params: object) => string;
export function getArrayPages(
    req: express.Request,
): (limit: number, pageCount: number, currentPage: number) => PageElement[];
