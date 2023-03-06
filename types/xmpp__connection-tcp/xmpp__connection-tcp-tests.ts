import Connection = require('@xmpp/connection');
import ConnectionTCP = require('@xmpp/connection-tcp');
import { Element } from '@xmpp/xml';
import { URL } from 'url';

// test type exports
type SocketParams = ConnectionTCP.SocketParameters;
type SocketCtor = ConnectionTCP.SocketConstructor;

const cTcp = new ConnectionTCP({ domain: 'foo', service: 'bar' });
const c: Connection = cTcp;
cTcp.sendMany([new Element('foo')]); // $ExpectType Promise<void>
cTcp.sendMany(new Set([new Element('foo')])); // $ExpectType Promise<void>
cTcp.socketParameters('foo'); // $ExpectType SocketParameters | undefined
cTcp.socketParameters(new URL('foo')); // $ExpectType SocketParameters | undefined
cTcp.headerElement(); // $ExpectType Element
