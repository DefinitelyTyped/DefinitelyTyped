import * as https from 'node:https';
import * as net from 'node:net';
import * as stream from 'node:stream';

// https server events
{
    let server = new https.Server();
    let _socket = new stream.Duplex();
    let _req =  new https.IncomingMessage(new net.Socket());
    let _res = new https.ServerResponse(_req);
    let _err = new Error();
    let _head = Buffer.from("");
    let _bool = true;

    server = server.addListener("checkContinue", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.addListener("checkExpectation", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.addListener("clientError", (err, socket) => {
      _err = err;
      _socket = socket;
    });
    server = server.addListener("connect", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });
    server = server.addListener("request", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.addListener("upgrade", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });

    _bool = server.emit("checkContinue", _req, _res);
    _bool = server.emit("checkExpectation", _req, _res);
    _bool = server.emit("clientError", _err, _socket);
    _bool = server.emit("connect", _req, _socket, _head);
    _bool = server.emit("request", _req, _res);
    _bool = server.emit("upgrade", _req, _socket, _head);

    server = server.on("checkContinue", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.on("checkExpectation", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.on("clientError", (err, socket) => {
      _err = err;
      _socket = socket;
    });
    server = server.on("connect", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });
    server = server.on("request", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.on("upgrade", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });

    server = server.once("checkContinue", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.once("checkExpectation", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.once("clientError", (err, socket) => {
      _err = err;
      _socket = socket;
    });
    server = server.once("connect", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });
    server = server.once("request", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.once("upgrade", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });

    server = server.prependListener("checkContinue", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.prependListener("checkExpectation", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.prependListener("clientError", (err, socket) => {
      _err = err;
      _socket = socket;
    });
    server = server.prependListener("connect", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });
    server = server.prependListener("request", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.prependListener("upgrade", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });

    server = server.prependOnceListener("checkContinue", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.prependOnceListener("checkExpectation", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.prependOnceListener("clientError", (err, socket) => {
      _err = err;
      _socket = socket;
    });
    server = server.prependOnceListener("connect", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });
    server = server.prependOnceListener("request", (req, res) => {
      _req = req;
      _res = res;
    });
    server = server.prependOnceListener("upgrade", (req, socket, head) => {
      _req = req;
      _socket = socket;
      _head = head;
    });
}
