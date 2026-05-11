import koaCompose = require("koa-compose");
import Connection from "@xmpp/connection";
import { Element } from "@xmpp/xml";
import IncomingCtx from "./lib/IncomingContext.js";
import OutgoingCtx from "./lib/OutgoingContext.js";

export default middleware;

declare function middleware<TEntity extends Entity>({
    entity,
}: {
    entity: TEntity;
}): Middleware<TEntity>;

export type IncomingContext<TEntity extends Entity> = IncomingCtx<TEntity>;
export type OutgoingContext<TEntity extends Entity> = OutgoingCtx<TEntity>;

export interface Entity extends Connection {
    domain?: string;
    hookOutgoing?: (stanza: Element) => Promise<void>;
}

export interface Middleware<TEntity extends Entity> {
    use<TMiddleware extends koaCompose.Middleware<IncomingContext<TEntity>>>(middleware: TMiddleware): TMiddleware;
    filter<TMiddleware extends koaCompose.Middleware<OutgoingContext<TEntity>>>(
        middleware: TMiddleware,
    ): TMiddleware;
}
