import Connection = require("@xmpp/connection");

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
