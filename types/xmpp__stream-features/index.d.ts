import { Entity, IncomingContext, Middleware } from "@xmpp/middleware";
import { Element } from "@xmpp/xml";
import Koa = require("koa");
import koaCompose = require("koa-compose");

export default streamFeatures;

declare function streamFeatures<TEntity extends Entity>({
    middleware,
}: {
    middleware: Middleware<TEntity>;
}): StreamFeatures<TEntity>;

export interface StreamFeatures<TEntity extends Entity> {
    use(
        name: string,
        xmlns: string | undefined,
        handler: (ctx: IncomingContext<TEntity>, next: Koa.Next, feature: Element) => Promise<any>,
    ): koaCompose.Middleware<IncomingContext<TEntity>>;
}
