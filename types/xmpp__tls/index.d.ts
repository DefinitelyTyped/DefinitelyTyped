import Connection from "@xmpp/connection";

export default tls;

declare function tls({ entity }: { entity: Entity }): void;

export interface Entity {
    transports: Array<typeof Connection>;
}
