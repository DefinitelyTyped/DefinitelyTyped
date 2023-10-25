/// <reference types="node"/>

import { Middleware } from "koa";
import { Logger } from "winston";

export = logger;

declare function logger(logger: Logger): Middleware;

declare namespace logger {
}
