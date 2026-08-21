import Connection from "@xmpp/connection";
import websocket from "@xmpp/websocket";
import ConnectionWebSocket from "@xmpp/websocket/lib/Connection.js";
import FramedParser from "@xmpp/websocket/lib/FramedParser.js";
import Socket from "@xmpp/websocket/lib/Socket.js";
import { Element, Parser } from "@xmpp/xml";
import { URL } from "url";

// test type exports
type Conn = ConnectionWebSocket;
type Sock = Socket;
type SockEvents = Socket.Events;
type Err = Socket.WebSocketError;

const sock = new Socket();
sock.url; // $ExpectType string | URL | null
sock.socket; // $ExpectType WebSocket | null
sock.connect("foo"); // $ExpectType void
sock.connect(new URL("foo")); // $ExpectType void
sock.end(); // $ExpectType void
sock.write(new Uint8Array(10), err => {
    err; // $ExpectType Error | undefined
});
sock.write("foo", err => {
    err; // $ExpectType Error | undefined
});

sock.addListener("connect", () => {});
sock.addListener("data", data => {
    data; // $ExpectType unknown
});
sock.addListener("close", () => {});
sock.addListener("error", err => {
    err; // $ExpectType WebSocketError
    err.url; // $ExpectType string | URL
    err.event; // $ExpectType Event
    err.code; // $ExpectType "ECONNERROR" | undefined
    err.errno; // $ExpectType "ECONNERROR" | undefined
});

sock.on("connect", () => {});
sock.on("data", data => {
    data; // $ExpectType unknown
});
sock.on("close", () => {});
sock.on("error", err => {
    err; // $ExpectType WebSocketError
});

sock.once("connect", () => {});
sock.once("data", data => {
    data; // $ExpectType unknown
});
sock.once("close", () => {});
sock.once("error", err => {
    err; // $ExpectType WebSocketError
});

sock.prependListener("connect", () => {});
sock.prependListener("data", data => {
    data; // $ExpectType unknown
});
sock.prependListener("close", () => {});
sock.prependListener("error", err => {
    err; // $ExpectType WebSocketError
});

sock.prependOnceListener("connect", () => {});
sock.prependOnceListener("data", data => {
    data; // $ExpectType unknown
});
sock.prependOnceListener("close", () => {});
sock.prependOnceListener("error", err => {
    err; // $ExpectType WebSocketError
});

sock.emit<"connect">("connect");
sock.emit<"data">("data", Buffer.from("foo"));
sock.emit<"close">("close", true, null as any as CloseEvent);
sock.emit<"error">("error", null as any as Socket.WebSocketError);

const fprsr = new FramedParser();
const prsr: Parser = fprsr;

const connWs = new ConnectionWebSocket({ domain: "foo", service: "bar" });
const conn: Connection = connWs;
connWs.Socket; // $ExpectType typeof Socket
connWs.Parser; // $ExpectType typeof FramedParser
connWs.sendMany([new Element("foo")]); // $ExpectType Promise<void>
connWs.sendMany(new Set([new Element("foo")])); // $ExpectType Promise<void>
connWs.socketParameters("foo"); // $ExpectType string | undefined

const entity = {
    transports: [] as Array<typeof Connection>,
};
websocket({ entity }); // $ExpectType void
