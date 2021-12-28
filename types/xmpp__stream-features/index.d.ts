// Type definitions for @xmpp/stream-features 0.13
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/stream-features
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Entity, Middleware, IncomingContext } from '@xmpp/middleware';
import { Element } from '@xmpp/xml';
import * as Koa from 'koa';
import * as koaCompose from 'koa-compose';

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
