import { createSecureContext, SecureContext, ConnectionOptions, connect, getCiphers, DEFAULT_ECDH_CURVE, createServer, TLSSocket } from "tls";
import * as fs from "fs";

{
    const ctx: SecureContext = createSecureContext({
        key: "NOT REALLY A KEY",
        cert: "SOME CERTIFICATE",
    });
    const blah = ctx.context;

    const connOpts: ConnectionOptions = {
        host: "127.0.0.1",
        port: 55
    };
    const tlsSocket = connect(connOpts);

    const ciphers: string[] = getCiphers();
    const curve: string = DEFAULT_ECDH_CURVE;
}

{
    const _server = createServer();

    _server.addContext("example", {
        cert: fs.readFileSync("cert_filepath"),
        key: fs.readFileSync("key_filepath")
    });
}

{
    let _server = createServer({});
    let _boolean: boolean;
    const _func1 = (err: Error, resp: Buffer) => { };
    const _func2 = (err: Error, sessionData: Buffer) => { };
    /**
     * events.EventEmitter
     * 1. tlsClientError
     * 2. newSession
     * 3. OCSPRequest
     * 4. resumeSession
     * 5. secureConnection
     */

    _server = _server.addListener("tlsClientError", (err, tlsSocket) => {
        const _err: Error = err;
        const _tlsSocket: TLSSocket = tlsSocket;
    });
    _server = _server.addListener("newSession", (sessionId, sessionData, callback) => {
        const _sessionId: Buffer = sessionId;
        const _sessionData: Buffer = sessionData;
        const _func1 = callback;
    });
    _server = _server.addListener("OCSPRequest", (certificate, issuer, callback) => {
        const _certificate: Buffer = certificate;
        const _issuer: Buffer = issuer;
        const _callback: Function = callback;
    });
    _server = _server.addListener("resumeSession", (sessionId, callback) => {
        const _sessionId: Buffer = sessionId;
        const _func2 = callback;
    });
    _server = _server.addListener("secureConnection", (tlsSocket) => {
        const _tlsSocket: TLSSocket = tlsSocket;
    });

    const _err: Error = new Error();
    const _tlsSocket: TLSSocket = connect(1);
    const _any: Buffer = Buffer.from('asd');
    const _func: Function = () => {};
    const _buffer: Buffer = Buffer.from('a');
    _boolean = _server.emit("tlsClientError", _err, _tlsSocket);
    _boolean = _server.emit("newSession", _any, _any, _func1);
    _boolean = _server.emit("OCSPRequest", _buffer, _buffer, _func);
    _boolean = _server.emit("resumeSession", _any, _func2);
    _boolean = _server.emit("secureConnection", _tlsSocket);

    _server = _server.on("tlsClientError", (err, tlsSocket) => {
        const _err: Error = err;
        const _tlsSocket: TLSSocket = tlsSocket;
    });
    _server = _server.on("newSession", (sessionId, sessionData, callback) => {
        const _sessionId: Buffer = sessionId;
        const _sessionData: Buffer = sessionData;
        const _func1 = callback;
    });
    _server = _server.on("OCSPRequest", (certificate, issuer, callback) => {
        const _certificate: Buffer = certificate;
        const _issuer: Buffer = issuer;
        const _callback: Function = callback;
    });
    _server = _server.on("resumeSession", (sessionId, callback) => {
        const _sessionId: Buffer = sessionId;
        const _func2 = callback;
    });
    _server = _server.on("secureConnection", (tlsSocket) => {
        const _tlsSocket: TLSSocket = tlsSocket;
    });

    _server = _server.once("tlsClientError", (err, tlsSocket) => {
        const _err: Error = err;
        const _tlsSocket: TLSSocket = tlsSocket;
    });
    _server = _server.once("newSession", (sessionId, sessionData, callback) => {
        const _sessionId: Buffer = sessionId;
        const _sessionData: Buffer = sessionData;
        const _func1 = callback;
    });
    _server = _server.once("OCSPRequest", (certificate, issuer, callback) => {
        const _certificate: Buffer = certificate;
        const _issuer: Buffer = issuer;
        const _callback: Function = callback;
    });
    _server = _server.once("resumeSession", (sessionId, callback) => {
        const _sessionId: Buffer = sessionId;
        const _func2 = callback;
    });
    _server = _server.once("secureConnection", (tlsSocket) => {
        const _tlsSocket: TLSSocket = tlsSocket;
    });

    _server = _server.prependListener("tlsClientError", (err, tlsSocket) => {
        const _err: Error = err;
        const _tlsSocket: TLSSocket = tlsSocket;
    });
    _server = _server.prependListener("newSession", (sessionId, sessionData, callback) => {
        const _sessionId: Buffer = sessionId;
        const _sessionData: Buffer = sessionData;
        const _func1 = callback;
    });
    _server = _server.prependListener("OCSPRequest", (certificate, issuer, callback) => {
        const _certificate: Buffer = certificate;
        const _issuer: Buffer = issuer;
        const _callback: Function = callback;
    });
    _server = _server.prependListener("resumeSession", (sessionId, callback) => {
        const _sessionId: Buffer = sessionId;
        const _func2 = callback;
    });
    _server = _server.prependListener("secureConnection", (tlsSocket) => {
        const _tlsSocket: TLSSocket = tlsSocket;
    });

    _server = _server.prependOnceListener("tlsClientError", (err, tlsSocket) => {
        const _err: Error = err;
        const _tlsSocket: TLSSocket = tlsSocket;
    });
    _server = _server.prependOnceListener("newSession", (sessionId, sessionData, callback) => {
        const _sessionId: Buffer = sessionId;
        const _sessionData: Buffer = sessionData;
        const _func1 = callback;
    });
    _server = _server.prependOnceListener("OCSPRequest", (certificate, issuer, callback) => {
        const _certificate: Buffer = certificate;
        const _issuer: Buffer = issuer;
        const _callback: Function = callback;
    });
    _server = _server.prependOnceListener("resumeSession", (sessionId, callback) => {
        const _sessionId: Buffer = sessionId;
        const _func2 = callback;
    });
    _server = _server.prependOnceListener("secureConnection", (tlsSocket) => {
        const _tlsSocket: TLSSocket = tlsSocket;
    });

    // close callback parameter is optional
    _server = _server.close();

    // close callback parameter doesn't specify any arguments, so any
    // function is acceptable
    _server = _server.close(() => { });
    _server = _server.close((...args: any[]) => { });
}

{
    let socket = connect({
    });
    let _boolean: boolean;
    /**
     * events.EventEmitter
     * 1. close
     * 2. error
     * 3. listening
     * 4. message
     */

    socket = socket.addListener("OCSPResponse", (response) => {
        const _response: Buffer = response;
    });
    socket = socket.addListener("secureConnect", () => { });

    const _buffer: Buffer = Buffer.from("");
    _boolean = socket.emit("OCSPResponse", _buffer);
    _boolean = socket.emit("secureConnect");

    socket = socket.on("OCSPResponse", (response) => {
        const _response: Buffer = response;
    });
    socket = socket.on("secureConnect", () => { });

    socket = socket.once("OCSPResponse", (response) => {
        const _response: Buffer = response;
    });
    socket = socket.once("secureConnect", () => { });

    socket = socket.prependListener("OCSPResponse", (response) => {
        const _response: Buffer = response;
    });
    socket = socket.prependListener("secureConnect", () => { });

    socket = socket.prependOnceListener("OCSPResponse", (response) => {
        const _response: Buffer = response;
    });
    socket = socket.prependOnceListener("secureConnect", () => { });

    socket.once('session', (buff: Buffer) => {});
}
