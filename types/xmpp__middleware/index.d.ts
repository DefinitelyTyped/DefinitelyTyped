import * as koaCompose from "koa-compose";
import Connection = require("@xmpp/connection");
import { Element } from "@xmpp/xml";
import IncomingCtx = require("./lib/IncomingContext");
import OutgoingCtx = require("./lib/OutgoingContext");

export = middleware;

declare function middleware<TEntity extends middleware.Entity>({
    entity,
}: {
    entity: TEntity;
}): middleware.Middleware<TEntity>;

declare namespace middleware {
    type IncomingContext<TEntity extends Entity> = IncomingCtx<TEntity>;
    type OutgoingContext<TEntity extends Entity> = OutgoingCtx<TEntity>;

    interface Entity extends Connection {
        domain?: string;
        hookOutgoing?: (stanza: Element) => Promise<void>;
    }

    interface Middleware<TEntity extends Entity> {
        use<TMiddleware extends koaCompose.Middleware<IncomingContext<TEntity>>>(middleware: TMiddleware): TMiddleware;
        filter<TMiddleware extends koaCompose.Middleware<OutgoingContext<TEntity>>>(
            middleware: TMiddleware,
        ): TMiddleware;
    }
}
