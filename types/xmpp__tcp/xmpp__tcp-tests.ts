import Connection = require('@xmpp/connection');
import ConnectionConnTCP = require('@xmpp/connection-tcp');
import tcp = require('@xmpp/tcp');
import ConnectionTCP = require('@xmpp/tcp/lib/Connection');

// test type exports
type Entity = tcp.Entity;
type Conn = ConnectionTCP;

const conn = new ConnectionTCP({ domain: 'foo', service: 'bar' });
const connTcp: ConnectionConnTCP = conn;

const entity = {
    transports: [] as Array<typeof Connection>,
};
tcp({ entity }); // $ExpectType void
