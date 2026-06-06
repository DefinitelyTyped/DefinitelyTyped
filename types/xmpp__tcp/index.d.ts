import Connection from "@xmpp/connection";

export default tcp;

declare function tcp({ entity }: { entity: Entity }): void;

export interface Entity {
    transports: Array<typeof Connection>;
}
