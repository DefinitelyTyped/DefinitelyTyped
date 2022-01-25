// Type definitions for @xmpp/resource-binding 0.13
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/resource-binding
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { IQCaller } from '@xmpp/iq/caller';
import { Entity } from '@xmpp/middleware';
import { StreamFeatures } from '@xmpp/stream-features';
import { Node } from '@xmpp/xml';

export = resourceBinding;

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
    resource?: resourceBinding.Resource,
): void;

declare namespace resourceBinding {
    type Resource = ResourceFn | Node;
    type ResourceFn = (bind: (resource: Node) => Promise<string>) => Promise<void>;
}
