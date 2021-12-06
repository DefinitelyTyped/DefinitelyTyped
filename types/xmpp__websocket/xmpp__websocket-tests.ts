import Connection = require('@xmpp/connection');
import websocket = require('@xmpp/websocket');
import ConnectionWebSocket = require('@xmpp/websocket/lib/Connection');
import FramedParser = require('@xmpp/websocket/lib/FramedParser');
import Socket = require('@xmpp/websocket/lib/Socket');
import { Element, Parser } from '@xmpp/xml';
import { URL } from 'url';
import { CloseEvent } from 'ws';

// test type exports
type Entity = websocket.Entity;
type Conn = ConnectionWebSocket;
type Sock = Socket;
type SockEvents = Socket.Events;
type Err = Socket.WebSocketError;

const sock = new Socket();
sock.url; // $ExpectType string | URL | undefined
sock.socket; // $ExpectType WebSocket | undefined
sock.connect('foo'); // $ExpectType void
sock.connect(new URL('foo')); // $ExpectType void
sock.end(); // $ExpectType void
sock.write(new Uint8Array(10), err => {
    err; // $ExpectType Error | undefined
});
sock.write('foo', err => {
    err; // $ExpectType Error | undefined
});

sock.addListener('connect', () => {});
sock.addListener('data', data => {
    data; // $ExpectType Data
});
sock.addListener('close', () => {});
sock.addListener('error', err => {
    err; // $ExpectType WebSocketError
    err.url; // $ExpectType string | URL
    err.event; // $ExpectType ErrorEvent
    err.code; // $ExpectType "ECONNERROR" | undefined
    err.errno; // $ExpectType "ECONNERROR" | undefined
});

sock.on('connect', () => {});
sock.on('data', data => {
    data; // $ExpectType Data
});
sock.on('close', () => {});
sock.on('error', err => {
    err; // $ExpectType WebSocketError
});

sock.once('connect', () => {});
sock.once('data', data => {
    data; // $ExpectType Data
});
sock.once('close', () => {});
sock.once('error', err => {
    err; // $ExpectType WebSocketError
});

sock.prependListener('connect', () => {});
sock.prependListener('data', data => {
    data; // $ExpectType Data
});
sock.prependListener('close', () => {});
sock.prependListener('error', err => {
    err; // $ExpectType WebSocketError
});

sock.prependOnceListener('connect', () => {});
sock.prependOnceListener('data', data => {
    data; // $ExpectType Data
});
sock.prependOnceListener('close', () => {});
sock.prependOnceListener('error', err => {
    err; // $ExpectType WebSocketError
});

sock.emit<'connect'>('connect');
sock.emit<'data'>('data', Buffer.from('foo'));
sock.emit<'close'>('close', true, null as any as CloseEvent);
sock.emit<'error'>('error', null as any as Socket.WebSocketError);

const fprsr = new FramedParser();
const prsr: Parser = fprsr;

const connWs = new ConnectionWebSocket({ domain: 'foo', service: 'bar' });
const conn: Connection = connWs;
connWs.Socket; // $ExpectType typeof Socket
connWs.Parser; // $ExpectType typeof FramedParser
connWs.sendMany([new Element('foo')]); // $ExpectType Promise<void>
connWs.sendMany(new Set([new Element('foo')])); // $ExpectType Promise<void>
connWs.socketParameters('foo'); // $ExpectType string | undefined

const entity = {
    transports: [] as Array<typeof Connection>,
};
websocket({ entity }); // $ExpectType void
