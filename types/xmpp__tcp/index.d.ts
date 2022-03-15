// Type definitions for @xmpp/tcp 0.13
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/tcp
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Connection = require('@xmpp/connection');

export = tcp;

declare function tcp({ entity }: { entity: tcp.Entity }): void;

declare namespace tcp {
    interface Entity {
        transports: Array<typeof Connection>;
    }
}
