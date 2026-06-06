import Connection from "@xmpp/connection";
import ConnectionConnTCP from "@xmpp/connection-tcp";
import tcp from "@xmpp/tcp";
import ConnectionTCP from "@xmpp/tcp/lib/Connection.js";

const conn = new ConnectionTCP({ domain: "foo", service: "bar" });
const connTcp: ConnectionConnTCP = conn;

const entity = {
    transports: [] as Array<typeof Connection>,
};
tcp({ entity }); // $ExpectType void
