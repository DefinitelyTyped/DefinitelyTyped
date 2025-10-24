import { Entity, IncomingContext, Middleware } from "@xmpp/middleware";
import { Element } from "@xmpp/xml";
import Koa = require("koa");
import koaCompose = require("koa-compose");

export = streamFeatures;

declare function streamFeatures<TEntity extends Entity>({
    middleware,
}: {
    middleware: Middleware<TEntity>;
}): streamFeatures.StreamFeatures<TEntity>;

declare namespace streamFeatures {
    interface StreamFeatures<TEntity extends Entity> {
        use(
            name: string,
            xmlns: string | undefined,
            handler: (ctx: IncomingContext<TEntity>, next: Koa.Next, feature: Element) => Promise<any>,
        ): koaCompose.Middleware<IncomingContext<TEntity>>;
    }
}
