import { IQCaller } from "@xmpp/iq/caller.js";
import { Entity } from "@xmpp/middleware";
import { StreamFeatures } from "@xmpp/stream-features";
import { Node } from "@xmpp/xml";

export default resourceBinding;

/**
 * Resource binding for `@xmpp/client`.
 *
 * Included and enabled in `@xmpp/client`.
 */
declare function resourceBinding<TEntity extends Entity>(
    {
        streamFeatures,
        iqCaller,
    }: {
        streamFeatures: StreamFeatures<TEntity>;
        iqCaller: IQCaller<TEntity>;
    },
    resource?: Resource,
): void;

export type Resource = ResourceFn | Node;
export type ResourceFn = (bind: (resource: Node) => Promise<string>) => Promise<void>;
