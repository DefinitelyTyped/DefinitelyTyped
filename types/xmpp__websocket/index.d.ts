import Connection from "@xmpp/connection";

export default websocket;

/**
 * WebSocket transport for `@xmpp/client`.
 *
 * Included and enabled in `@xmpp/client`.
 */
declare function websocket({ entity }: { entity: Entity }): void;

export interface Entity {
    transports: Array<typeof Connection>;
}
