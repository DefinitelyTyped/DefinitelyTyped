import * as dgram from 'dgram';
import * as net from 'net';
import * as dns from 'dns';

{
    let ds: dgram.Socket = dgram.createSocket("udp4", (msg: Buffer, rinfo: dgram.RemoteInfo): void => {
    });
    ds.bind();
    ds.bind(41234);
    ds.bind(4123, 'localhost');
    ds.bind(4123, 'localhost', () => { });
    ds.bind(4123, () => { });
    ds.bind(() => { });
    const addr: net.AddressInfo | string = ds.address();
    ds.send(new Buffer("hello"), 0, 5, 5000, "127.0.0.1", (error: Error | null, bytes: number): void => {
    });
    ds.send(new Buffer("hello"), 5000, "127.0.0.1");
    ds.setMulticastInterface("127.0.0.1");
    ds = dgram.createSocket({ type: "udp4", reuseAddr: true, recvBufferSize: 1000, sendBufferSize: 1000, lookup: dns.lookup });
}

{
    let _socket = new dgram.Socket();
    let _boolean: boolean;
    const _err: Error = new Error();
    const _str = '';
    const _rinfo: net.AddressInfo = {
        address: 'asd',
        family: 'asd',
        port: 1,
    };
    /**
     * events.EventEmitter
     * 1. close
     * 2. error
     * 3. listening
     * 4. message
     */

    _socket = _socket.addListener("close", () => { });
    _socket = _socket.addListener("error", (err) => {
        const _err: Error = err;
    });
    _socket = _socket.addListener("listening", () => { });
    _socket = _socket.addListener("message", (msg, rinfo) => {
        const _msg: Buffer = msg;
        const _rinfo: net.AddressInfo = rinfo;
    });

    _boolean = _socket.emit("close");
    _boolean = _socket.emit("error", _err);
    _boolean = _socket.emit("listening");
    _boolean = _socket.emit("message", _str, _rinfo);

    _socket = _socket.on("close", () => { });
    _socket = _socket.on("error", (err) => {
        const _err: Error = err;
    });
    _socket = _socket.on("listening", () => { });
    _socket = _socket.on("message", (msg, rinfo) => {
        const _msg: Buffer = msg;
        const _rinfo: net.AddressInfo = rinfo;
    });

    _socket = _socket.once("close", () => { });
    _socket = _socket.once("error", (err) => {
        const _err: Error = err;
    });
    _socket = _socket.once("listening", () => { });
    _socket = _socket.once("message", (msg, rinfo) => {
        const _msg: Buffer = msg;
        const _rinfo: net.AddressInfo = rinfo;
    });

    _socket = _socket.prependListener("close", () => { });
    _socket = _socket.prependListener("error", (err) => {
        const _err: Error = err;
    });
    _socket = _socket.prependListener("listening", () => { });
    _socket = _socket.prependListener("message", (msg, rinfo) => {
        const _msg: Buffer = msg;
        const _rinfo: net.AddressInfo = rinfo;
    });

    _socket = _socket.prependOnceListener("close", () => { });
    _socket = _socket.prependOnceListener("error", (err) => {
        const _err: Error = err;
    });
    _socket = _socket.prependOnceListener("listening", () => { });
    _socket = _socket.prependOnceListener("message", (msg, rinfo) => {
        const _msg: Buffer = msg;
        const _rinfo: net.AddressInfo = rinfo;
    });
}

{
    const ds: dgram.Socket = dgram.createSocket({
        type: 'udp4',
        recvBufferSize: 10000,
        sendBufferSize: 15000
    });

    let size: number;
    size = ds.getRecvBufferSize();
    ds.setRecvBufferSize(size);
    size = ds.getSendBufferSize();
    ds.setSendBufferSize(size);
}

{
    const ds: dgram.Socket = dgram.createSocket({
        type: 'udp4',
    });
    ds.addSourceSpecificMembership('127.0.0.1', '127.0.0.1', 'test');
    ds.dropSourceSpecificMembership('127.0.0.1', '127.0.0.1', 'test');
}

let sock: dgram.Socket = dgram.createSocket("udp4");
sock = dgram.createSocket({ type: "udp4" });
sock = dgram.createSocket({
    type: "udp4",
    reuseAddr: true,
    ipv6Only: false,
    recvBufferSize: 4096,
    sendBufferSize: 4096,
    lookup: dns.lookup,
});
sock = dgram.createSocket("udp6", (msg, rinfo) => {
    msg; // $ExpectType Buffer
    rinfo; // $ExpectType RemoteInfo
});
sock.addMembership("233.252.0.0");
sock.addMembership("233.252.0.0", "192.0.2.1");
sock.address().address; // $ExpectType string
sock.address().family; // $ExpectType string
sock.address().port; // $ExpectType number
sock.bind();
sock.bind(() => undefined);
sock.bind(8000);
sock.bind(8000, () => undefined);
sock.bind(8000, "192.0.2.1");
sock.bind(8000, "192.0.2.1", () => undefined);
sock.bind({}, () => undefined);
sock.bind({ port: 8000, address: "192.0.2.1", exclusive: true });
sock.bind({ fd: 7, exclusive: true });
sock.close();
sock.close(() => undefined);
sock.connect(8000);
sock.connect(8000, "192.0.2.1");
sock.connect(8000, () => undefined);
sock.connect(8000, "192.0.2.1", () => undefined);
sock.disconnect();
sock.dropMembership("233.252.0.0");
sock.dropMembership("233.252.0.0", "192.0.2.1");
sock.getRecvBufferSize(); // $ExpectType number
sock.getSendBufferSize(); // $ExpectType number
sock = sock.ref();
sock.remoteAddress().address; // $ExpectType string
sock.remoteAddress().family; // $ExpectType string
sock.remoteAddress().port; // $ExpectType number
sock.send("datagram");
sock.send(new Uint8Array(256), 8000, (err) => {
    err; // $ExpectType Error | null
});
sock.send(Buffer.alloc(256), 8000, "192.0.2.1");
sock.send(new Uint8Array(256), 128, 64);
sock.send("datagram", 128, 64, (err) => undefined);
sock.send(new Uint8Array(256), 128, 64, 8000);
sock.send(new Uint8Array(256), 128, 64, 8000, (err) => undefined);
sock.send(Buffer.alloc(256), 128, 64, 8000, "192.0.2.1");
sock.send("datagram", 128, 64, 8000, "192.0.2.1", (err) => undefined);
sock.setBroadcast(true);
sock.setMulticastInterface("192.0.2.1");
sock.setMulticastLoopback(false);
sock.setMulticastTTL(128);
sock.setRecvBufferSize(4096);
sock.setSendBufferSize(4096);
sock.setTTL(128);
sock = sock.unref();

sock.on("close", () => undefined);
sock.on("connect", () => undefined);
sock.on("error", (exception) => {
    exception; // $ExpectType Error
});
sock.on("listening", () => undefined);
sock.on("message", (msg, rinfo) => {
    msg; // $ExpectType Buffer
    rinfo.address; // $ExpectType string
    rinfo.family; // $ExpectType "IPv4" | "IPv6"
    rinfo.port; // $ExpectType number
    rinfo.size; // $ExpectType number
});
