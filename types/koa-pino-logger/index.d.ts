import { Middleware as BaseMiddleware } from "koa";
import { DestinationStream, Logger } from "pino";
import { Options } from "pino-http";

export = logger;

interface Middleware extends BaseMiddleware {
    logger: Logger;
}

declare function logger(
    opts?: Options,
    stream?: DestinationStream,
): Middleware;
declare function logger(stream?: DestinationStream): Middleware;

declare module "koa" {
    interface ExtendableContext {
        log: Logger;
    }
}
