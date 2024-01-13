import Connection = require("@xmpp/connection");

export = tls;

declare function tls({ entity }: { entity: tls.Entity }): void;

declare namespace tls {
    interface Entity {
        transports: Array<typeof Connection>;
    }
}
