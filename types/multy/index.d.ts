import { BusboyConfig } from "busboy";
import * as Koa from "koa";

declare module "koa" {
    interface Request {
        body: any;
    }
}

declare function multy(opts?: BusboyConfig): Koa.Middleware;

export = multy;
