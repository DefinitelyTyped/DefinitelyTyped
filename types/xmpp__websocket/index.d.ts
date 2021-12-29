// Type definitions for @xmpp/websocket 0.13
// Project: https://github.com/xmppjs/xmpp.js/tree/main/packages/websocket
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Connection = require('@xmpp/connection');

export = websocket;

/**
 * WebSocket transport for `@xmpp/client`.
 *
 * Included and enabled in `@xmpp/client`.
 */
declare function websocket({ entity }: { entity: websocket.Entity }): void;

declare namespace websocket {
    interface Entity {
        transports: Array<typeof Connection>;
    }
}
