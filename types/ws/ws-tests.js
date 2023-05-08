"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var WebSocket = require("ws");
var http = require("http");
var https = require("https");
var url = require("url");
var wslib = require("ws");
{
    var ws_1 = new WebSocket("ws://www.host.com/path");
    ws_1.on("open", function () { return ws_1.send("something"); });
    ws_1.on("message", function (data) { });
    // @ts-expect-error
    ws_1.send({ hello: 'world' });
    ws_1.send(new Uint8Array([]));
    var Any = null;
    ws_1.send(Any);
    ws_1.send(Any);
    ws_1.send(Any);
    ws_1.send(Any);
    ws_1.send(Any);
    ws_1.send(Any);
}
{
    var addr = new url.URL("ws://www.host.com/path");
    var ws_2 = new WebSocket(addr);
    ws_2.on("open", function () {
        var array = new Float32Array(5);
        for (var i = 0; i < array.length; ++i)
            array[i] = i / 2;
        ws_2.send(array, { binary: true, mask: true });
    });
}
{
    var ws = new wslib.WebSocket("ws://www.host.com/path");
}
{
    var wss = new wslib.WebSocketServer({ port: 8081 });
}
{
    var wss = new WebSocket.Server({ port: 8081 });
    wss.on("connection", function (ws, req) {
        ws.on("message", function (message) { return console.log("received: %s", message); });
        ws.send("something");
        ws.send("something", function (error) { });
        ws.send("something", {}, function (error) { });
    });
    wss.once("connection", function (ws, req) {
        ws.send("something");
    });
    wss.off("connection", function (ws, req) {
        ws.send("something");
    });
}
{
    var wss_1 = new WebSocket.Server({ port: 8082 });
    var broadcast = function (data) {
        wss_1.clients.forEach(function (ws) { return ws.send(data); });
    };
}
{
    var wsc_1 = new WebSocket("ws://echo.websocket.org/");
    wsc_1.on("open", function () { return wsc_1.send(Date.now().toString(), { mask: true }); });
    wsc_1.on("close", function () { return console.log("disconnected"); });
    wsc_1.on("error", function (error) {
        console.log("unexpected response: ".concat(error));
    });
    wsc_1.on("message", function (data) {
        console.log("Roundtrip time: ".concat(Date.now() - parseInt(data.toString(), 10), " ms"));
        setTimeout(function () {
            wsc_1.send(Date.now().toString(), { mask: true });
        }, 500);
    });
}
{
    new WebSocket.Server({ server: https.createServer({}) });
    new WebSocket.Server({ server: http.createServer() });
}
{
    var verifyClient = function (info, callback) {
        callback(true);
    };
    var wsv = new WebSocket.Server({
        server: http.createServer(),
        clientTracking: true,
        perMessageDeflate: true
    });
    wsv.on("connection", function connection(ws) {
        console.log(ws.protocol);
    });
}
{
    var wss = new WebSocket.Server();
    wss.addListener("connection", function (client, request) {
        request.socket.remoteAddress;
        // @ts-expect-error
        request.aborted === 10;
        client.terminate();
        request.destroy();
    });
    wss.close();
}
{
    new WebSocket.Server({ noServer: true, perMessageDeflate: false });
    new WebSocket.Server({ noServer: true, perMessageDeflate: {} });
    new WebSocket.Server({
        noServer: true,
        perMessageDeflate: {
            serverNoContextTakeover: true,
            clientNoContextTakeover: true,
            serverMaxWindowBits: 0,
            clientMaxWindowBits: 0,
            zlibDeflateOptions: {
                flush: 0,
                finishFlush: 0,
                chunkSize: 0,
                windowBits: 0,
                level: 0,
                memLevel: 0,
                strategy: 0,
                dictionary: new Buffer("test"),
                info: false
            },
            zlibInflateOptions: {
                chunkSize: 0
            }
        },
        verifyClient: function (info, cb) {
            cb(true, 123, "message", { Upgrade: "websocket" });
        }
    });
}
{
    var ws_3 = new WebSocket("ws://www.host.com/path", {
        timeout: 5000,
        maxPayload: 10 * 1024 * 1024
    });
    ws_3.on("open", function () { return ws_3.send("something assume to be really long"); });
}
{
    var ws = new WebSocket("ws://www.host.com/path");
    ws.onopen = function (event) {
        console.log(event.target, event.type);
    };
    ws.onerror = function (event) {
        console.log(event.error, event.message, event.target, event.type);
    };
    ws.onclose = function (event) {
        console.log(event.code, event.reason, event.target, event.wasClean, event.type);
    };
    ws.onmessage = function (event) {
        console.log(event.data, event.target, event.type);
    };
}
{
    var ws = new WebSocket("ws://www.host.com/path");
    var duplex = WebSocket.createWebSocketStream(ws, {
        allowHalfOpen: true
    });
    duplex.pipe(process.stdout);
    process.stdin.pipe(duplex);
}
{
    var ws = new WebSocket("ws://www.host.com/path");
    var duplex = WebSocket.createWebSocketStream(ws);
    duplex.pipe(process.stdout);
    process.stdin.pipe(duplex);
}
{
    var ws = new WebSocket("ws://www.host.com/path");
    // @ts-expect-error
    ws.addEventListener("other", function () { });
}
{
    var ws = new WebSocket("ws://www.host.com/path");
    ws.addEventListener("message", function (event) {
        console.log(event.data, event.target, event.type);
    }, { once: true });
}
{
    var ws_4 = new WebSocket("ws://www.host.com/path");
    var eventHandler_1 = function () { };
    var event_1 = "";
    var errorHandler = function (err) {
        ws_4.off(event_1, eventHandler_1);
    };
    ws_4.once("error", errorHandler);
}
function f() {
    var ws = new WebSocket("ws://www.host.com/path");
    // @ts-expect-error
    var a = ws.readyState;
    // @ts-expect-error
    ws.readyState = ws.OPEN;
    // @ts-expect-error
    ws.readyState = !ws.OPEN;
    if (ws.readyState === ws.OPEN) {
        // @ts-expect-error
        var a_1 = ws.readyState;
        var x_1 = ws.readyState;
        return;
    }
    if (ws.readyState === ws.CONNECTING) {
        var x_2 = ws.readyState;
        return;
    }
    if (ws.readyState === ws.CLOSING) {
        var x_3 = ws.readyState;
        return;
    }
    if (ws.readyState === ws.CLOSED) {
        var x_4 = ws.readyState;
        return;
    }
    // $ExpectType never
    var x = ws.readyState;
}
{
    var ws = new WebSocket("ws://www.host.com/path");
    // @ts-expect-error
    ws.CONNECTING = 123;
    // @ts-expect-error
    ws.OPEN = 123;
    // @ts-expect-error
    ws.CLOSING = 123;
    // @ts-expect-error
    ws.CLOSED = 123;
}
{
    var ws = new WebSocket("ws://www.host.com/path");
    ws.binaryType = "arraybuffer";
    ws.binaryType = "fragments";
    ws.binaryType = "nodebuffer";
    // @ts-expect-error
    ws.binaryType = "";
    // @ts-expect-error
    ws.binaryType = true;
    // @ts-expect-error
    ws.binaryType = "invalid-value";
}
{
    var ws = new WebSocket("ws://www.host.com/path");
    // $ExpectType number
    ws.bufferedAmount;
    // $ExpectType string
    ws.extensions;
    // $ExpectType string
    ws.protocol;
    // @ts-expect-error
    ws.bufferedAmount = 1;
    // @ts-expect-error
    ws.bufferedAmount = true;
    // @ts-expect-error
    ws.extensions = "a-value";
    // @ts-expect-error
    ws.extensions = true;
    // @ts-expect-error
    ws.protocol = "a-value";
    // @ts-expect-error
    ws.protocol = true;
}
{
    var webSocketServer_1 = new WebSocket.WebSocketServer();
    var server = new http.Server();
    server.on('upgrade', function (request, socket, head) {
        if (request.url === '/path') {
            webSocketServer_1.handleUpgrade(request, socket, head, function (ws) {
                webSocketServer_1.emit('connection', ws, request);
            });
        }
    });
}
{
    var server_1 = new wslib.WebSocketServer();
    server_1.on('connection', function (ws) {
        // $ExpectType string | undefined
        ws.id;
        ws.id = server_1.getWebSocketId();
    });
}
{
    var ws = new WebSocket("ws://www.host.com/path", {
        generateMask: function (mask) { },
        skipUTF8Validation: true
    });
}
{
    var CustomWebSocket = /** @class */ (function (_super) {
        __extends(CustomWebSocket, _super);
        function CustomWebSocket() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CustomWebSocket.prototype.foo = function () {
            return 'foo';
        };
        return CustomWebSocket;
    }(WebSocket.WebSocket));
    var server = new http.Server();
    var webSocketServer_2 = new WebSocket.WebSocketServer({
        WebSocket: CustomWebSocket,
        noServer: true
    });
    webSocketServer_2.on('connection', function (ws) {
        // $ExpectType CustomWebSocket
        ws;
        // $ExpectType "foo"
        ws.foo();
    });
    Array.from(webSocketServer_2.clients).forEach(function (ws) {
        // $ExpectType CustomWebSocket
        ws;
        // $ExpectType "foo"
        ws.foo();
    });
    server.on('upgrade', function (request, socket, head) {
        if (request.url === '/path') {
            webSocketServer_2.handleUpgrade(request, socket, head, function (ws) {
                // $ExpectType CustomWebSocket
                ws;
                // $ExpectType "foo"
                ws.foo();
            });
        }
    });
}
{
    var ws = new WebSocket('ws://www.host.com/path');
    if (ws.isPaused) {
        ws.resume();
    }
    else {
        ws.pause();
    }
    // @ts-expect-error
    ws.isPaused = true;
    ws.onopen = null;
    ws.onerror = null;
    ws.onclose = null;
    ws.onmessage = null;
}
