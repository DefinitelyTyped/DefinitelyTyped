import Connection = require('@xmpp/connection');
import ConnectionTCP = require('@xmpp/connection-tcp');
import tls = require('@xmpp/tls');
import ConnectionTLS = require('@xmpp/tls/lib/Connection');
import Socket = require('@xmpp/tls/lib/Socket');

// test type exports
type Entity = tls.Entity;
type Conn = ConnectionTLS;
type SockParams = ConnectionTLS.SocketParameters;
type SockCtor = ConnectionTLS.SocketConstructor;
type Sock = Socket;
type SockEvents = Socket.Events;

const sock = new Socket();
sock.timeout; // $ExpectType Timeout | null
sock.socket; // $ExpectType TLSSocket | undefined
sock.connect({ host: 'foo' }); // $ExpectType void
sock.end(); // $ExpectType void
sock.write(new Uint8Array(10));
sock.write('foo');
sock.write(new Uint8Array(10), err => {
    err; // $ExpectType Error | undefined
});
sock.write('foo', err => {
    err; // $ExpectType Error | undefined
});

sock.addListener('connect', () => {});
sock.addListener('data', data => {
    data; // $ExpectType Buffer
});
sock.addListener('close', () => {});
sock.addListener('error', err => {
    err; // $ExpectType Error
});

sock.on('connect', () => {});
sock.on('data', data => {
    data; // $ExpectType Buffer
});
sock.on('close', () => {});
sock.on('error', err => {
    err; // $ExpectType Error
});

sock.once('connect', () => {});
sock.once('data', data => {
    data; // $ExpectType Buffer
});
sock.once('close', () => {});
sock.once('error', err => {
    err; // $ExpectType Error
});

sock.prependListener('connect', () => {});
sock.prependListener('data', data => {
    data; // $ExpectType Buffer
});
sock.prependListener('close', () => {});
sock.prependListener('error', err => {
    err; // $ExpectType Error
});

sock.prependOnceListener('connect', () => {});
sock.prependOnceListener('data', data => {
    data; // $ExpectType Buffer
});
sock.prependOnceListener('close', () => {});
sock.prependOnceListener('error', err => {
    err; // $ExpectType Error
});

sock.emit<'connect'>('connect');
sock.emit<'data'>('data', Buffer.from('foo'));
sock.emit<'close'>('close');
sock.emit<'error'>('error', new Error('foo'));

const conn = new ConnectionTLS({ domain: 'foo', service: 'bar' });
const connTcp: ConnectionTCP = conn;
conn.Socket; // $ExpectType SocketConstructor
const sockParams = conn.socketParameters('foo'); // $ExpectType SocketParameters | undefined
sockParams!.host; // $ExpectType string
sockParams!.port; // $ExpectType number

const entity = {
    transports: [] as Array<typeof Connection>,
};
tls({ entity }); // $ExpectType void
