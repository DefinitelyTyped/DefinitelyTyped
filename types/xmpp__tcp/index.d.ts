import Connection = require("@xmpp/connection");

export = tcp;

declare function tcp({ entity }: { entity: tcp.Entity }): void;

declare namespace tcp {
    interface Entity {
        transports: Array<typeof Connection>;
    }
}
