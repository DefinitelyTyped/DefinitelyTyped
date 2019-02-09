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
