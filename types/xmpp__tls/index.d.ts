// Type definitions for @xmpp/tls 0.13
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/tls
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Connection = require('@xmpp/connection');

export = tls;

declare function tls({ entity }: { entity: tls.Entity }): void;

declare namespace tls {
    interface Entity {
        transports: Array<typeof Connection>;
    }
}
