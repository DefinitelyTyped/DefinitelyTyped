import { Entity, IncomingContext } from "@xmpp/middleware";
import { StreamFeatures } from "@xmpp/stream-features";
import { Middleware } from "koa-compose";

export default starttls;

/**
 * STARTTLS negotiation for `@xmpp/client`.
 *
 * Included and enabled in `@xmpp/client` for Node.js
 *
 * STARTTLS will automatically upgrade the TCP connection to TLS upon connection if the server supports it.
 */
declare function starttls<TEntity extends Entity>({
    streamFeatures,
}: {
    streamFeatures: StreamFeatures<TEntity>;
}): Middleware<IncomingContext<TEntity>>;
