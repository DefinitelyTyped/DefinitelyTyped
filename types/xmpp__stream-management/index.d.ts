// Type definitions for @xmpp/stream-management 0.13
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/stream-management
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { StreamFeatures } from '@xmpp/stream-features';
import { Entity, Middleware } from '@xmpp/middleware';

export = streamManagement;

/**
 * [Stream Management](https://xmpp.org/extensions/xep-0198.html) for `@xmpp/client`.
 *
 * Included and enabled in `@xmpp/client`.
 *
 * Supports Node.js and browsers.
 *
 * When the session is resumed the `online` event is not emitted as session resumption is transparent. However
 * `entity.status` is set to `online`. If the session fails to resume, entity will fallback to regular session
 * establishment in which case `online` event will be emitted.
 *
 * Automatically responds to acks but does not support requesting acks yet.
 */
declare function streamManagement<TEntity extends Entity>({
    streamFeatures,
    entity,
    middleware,
}: {
    streamFeatures: StreamFeatures<TEntity>;
    entity: TEntity;
    middleware: Middleware<TEntity>;
}): streamManagement.StreamManagement;

declare namespace streamManagement {
    interface StreamManagement {
        allowResume: boolean;
        preferredMaximum: number | null;
        enabled: boolean;
        id: string;
        outbound: number;
        inbound: number;
        max: number | null;
    }
}
