import { BusboyConfig } from "busboy";
import Koa = require("koa");

declare module "koa" {
    interface Request {
        body: any;
    }
}

declare function multy(opts?: BusboyConfig): Koa.Middleware;

export = multy;
