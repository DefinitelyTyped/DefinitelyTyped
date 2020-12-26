import * as net from 'net';
import { LookupOneOptions } from 'dns';

{
    const connectOpts: net.NetConnectOpts = {
        allowHalfOpen: true,
        family: 4,
        host: "localhost",
        port: 443,
        timeout: 10E3
    };
    const socket: net.Socket = net.createConnection(connectOpts, (): void => {
        // nothing
    });
}

{
    let server = net.createServer();
    // Check methods which return server instances by chaining calls
    server = server.listen(0)
        .close()
        .ref()
        .unref();

    server.listen({
        ipv6Only: true,
    });

    // close callback parameter can be either nothing (undefined) or an error
    server = server.close(() => { });
    server = server.close((err) => {
        if (typeof err !== 'undefined') { const _err: Error = err; }
    });

    // test the types of the address object fields
    const address: net.AddressInfo | string | null = server.address();
}

{
    const constructorOpts: net.SocketConstructorOpts = {
        fd: 1,
        allowHalfOpen: false,
        readable: false,
        writable: false,
    };

    /**
     * net.Socket - events.EventEmitter
     *   1. close
     *   2. connect
     *   3. data
     *   4. drain
     *   5. end
     *   6. error
     *   7. lookup
     *   8. timeout
     */
    let _socket: net.Socket = new net.Socket(constructorOpts);

    let bool = true;
    let buffer = Buffer.from('123');
    let error = new Error('asd');
    let str = '123';
    let num = 123;

    const ipcConnectOpts: net.IpcSocketConnectOpts = {
        path: "/"
    };
    const tcpConnectOpts: net.TcpSocketConnectOpts = {
        family: 4,
        hints: 0,
        host: "localhost",
        localAddress: "10.0.0.1",
        localPort: 1234,
        lookup: (_hostname: string, _options: LookupOneOptions, _callback: (err: NodeJS.ErrnoException | null, address: string, family: number) => void): void => {
            // nothing
        },
        port: 80
    };
    _socket = _socket.connect(ipcConnectOpts);
    _socket = _socket.connect(ipcConnectOpts, (): void => {});
    _socket = _socket.connect(tcpConnectOpts);
    _socket = _socket.connect(tcpConnectOpts, (): void => {});
    _socket = _socket.connect(80, "localhost");
    _socket = _socket.connect(80, "localhost", (): void => {});
    _socket = _socket.connect(80);
    _socket = _socket.connect(80, (): void => {});

    // test the types of the address object fields
    const address: net.AddressInfo | {} = _socket.address();

    /// addListener

    _socket = _socket.addListener("close", had_error => {
        bool = had_error;
    });
    _socket = _socket.addListener("connect", () => { });
    _socket = _socket.addListener("data", data => {
        buffer = data;
    });
    _socket = _socket.addListener("drain", () => { });
    _socket = _socket.addListener("end", () => { });
    _socket = _socket.addListener("error", err => {
        error = err;
    });
    _socket = _socket.addListener("lookup", (err, address, family, host) => {
        error = err;

        if (typeof family === 'string') {
            str = family;
        } else if (typeof family === 'number') {
            num = family;
        }

        str = host;
    });
    _socket = _socket.addListener("timeout", () => { });

    /// emit
    bool = _socket.emit("close", bool);
    bool = _socket.emit("connect");
    bool = _socket.emit("data", buffer);
    bool = _socket.emit("drain");
    bool = _socket.emit("end");
    bool = _socket.emit("error", error);
    bool = _socket.emit("lookup", error, str, str, str);
    bool = _socket.emit("lookup", error, str, num, str);
    bool = _socket.emit("timeout");

    /// on
    _socket = _socket.on("close", had_error => {
        bool = had_error;
    });
    _socket = _socket.on("connect", () => { });
    _socket = _socket.on("data", data => {
        buffer = data;
    });
    _socket = _socket.on("drain", () => { });
    _socket = _socket.on("end", () => { });
    _socket = _socket.on("error", err => {
        error = err;
    });
    _socket = _socket.on("lookup", (err, address, family, host) => {
        error = err;

        if (typeof family === 'string') {
            str = family;
        } else if (typeof family === 'number') {
            num = family;
        }

        str = host;
    });
    _socket = _socket.on("timeout", () => { });

    /// once
    _socket = _socket.once("close", had_error => {
        bool = had_error;
    });
    _socket = _socket.once("connect", () => { });
    _socket = _socket.once("data", data => {
        buffer = data;
    });
    _socket = _socket.once("drain", () => { });
    _socket = _socket.once("end", () => { });
    _socket = _socket.once("error", err => {
        error = err;
    });
    _socket = _socket.once("lookup", (err, address, family, host) => {
        error = err;

        if (typeof family === 'string') {
            str = family;
        } else if (typeof family === 'number') {
            num = family;
        }

        str = host;
    });
    _socket = _socket.once("timeout", () => { });

    /// prependListener
    _socket = _socket.prependListener("close", had_error => {
        bool = had_error;
    });
    _socket = _socket.prependListener("connect", () => { });
    _socket = _socket.prependListener("data", data => {
        buffer = data;
    });
    _socket = _socket.prependListener("drain", () => { });
    _socket = _socket.prependListener("end", () => { });
    _socket = _socket.prependListener("error", err => {
        error = err;
    });
    _socket = _socket.prependListener("lookup", (err, address, family, host) => {
        error = err;

        if (typeof family === 'string') {
            str = family;
        } else if (typeof family === 'number') {
            num = family;
        }

        str = host;
    });
    _socket = _socket.prependListener("timeout", () => { });

    /// prependOnceListener
    _socket = _socket.prependOnceListener("close", had_error => {
        bool = had_error;
    });
    _socket = _socket.prependOnceListener("connect", () => { });
    _socket = _socket.prependOnceListener("data", data => {
        buffer = data;
    });
    _socket = _socket.prependOnceListener("drain", () => { });
    _socket = _socket.prependOnceListener("end", () => { });
    _socket = _socket.prependOnceListener("error", err => {
        error = err;
    });
    _socket = _socket.prependOnceListener("lookup", (err, address, family, host) => {
        error = err;

        if (typeof family === 'string') {
            str = family;
        } else if (typeof family === 'number') {
            num = family;
        }

        str = host;
    });
    _socket = _socket.prependOnceListener("timeout", () => { });

    bool = _socket.connecting;
    bool = _socket.destroyed;
    _socket.destroy();
}

{
    /**
     * net.Server - events.EventEmitter
     *   1. close
     *   2. connection
     *   3. error
     *   4. listening
     */
    let _server = net.createServer();

    let _socket = net.connect('');
    let bool: boolean;
    let error = new Error();

    /// addListener
    _server = _server.addListener("close", () => { });
    _server = _server.addListener("connection", socket => {
        _socket = socket;
    });
    _server = _server.addListener("error", err => {
        error = err;
    });
    _server = _server.addListener("listening", () => { });

    /// emit
    bool = _server.emit("close");
    bool = _server.emit("connection", _socket);
    bool = _server.emit("error", error);
    bool = _server.emit("listening");

    /// once
    _server = _server.once("close", () => { });
    _server = _server.once("connection", socket => {
        _socket = socket;
    });
    _server = _server.once("error", err => {
        error = err;
    });
    _server = _server.once("listening", () => { });

    /// prependListener
    _server = _server.prependListener("close", () => { });
    _server = _server.prependListener("connection", socket => {
        _socket = socket;
    });
    _server = _server.prependListener("error", err => {
        error = err;
    });
    _server = _server.prependListener("listening", () => { });

    /// prependOnceListener
    _server = _server.prependOnceListener("close", () => { });
    _server = _server.prependOnceListener("connection", socket => {
        _socket = socket;
    });
    _server = _server.prependOnceListener("error", err => {
        error = err;
    });
    _server = _server.prependOnceListener("listening", () => { });
}
