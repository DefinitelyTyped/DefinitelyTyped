import { Middleware } from "koa";
import { IMiddleware } from "koa-router";

declare namespace Subdomain {}

interface MatchResult {
    middleware: IMiddleware;
    wildcardSubdomains: string[];
}

declare class Subdomain {
    constructor();
    use(domain: string, router: IMiddleware): Subdomain;
    routes(): Middleware;
    match(subdomains: string[]): MatchResult | null;
}

export = Subdomain;
