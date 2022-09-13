// Type definitions for @xmpp/session-establishment 0.13
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/session-establishment
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { IQCaller } from '@xmpp/iq/caller';
import { Entity } from '@xmpp/middleware';
import { StreamFeatures } from '@xmpp/stream-features';

export = sessionEstablishment;

declare function sessionEstablishment<TEntity extends Entity>({
    iqCaller,
    streamFeatures,
}: {
    iqCaller: IQCaller<TEntity>;
    streamFeatures: StreamFeatures<TEntity>;
}): void;
