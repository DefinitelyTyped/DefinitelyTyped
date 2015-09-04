/// <reference path="sockjs-node.d.ts" />
import sockjs = require("sockjs");
import http = require("http");
import stream = require("stream");

var server: sockjs.Server,
    serverOptions: sockjs.ServerOptions = {};

// createServer method
server = sockjs.createServer();
server = sockjs.createServer(serverOptions);

// installHandlers method
var httpServer: http.Server = http.createServer();
server.installHandlers(httpServer);
server.installHandlers(httpServer, serverOptions);

// serverOptions
serverOptions.sockjs_url = 'http://cdn.sockjs.org/sockjs-0.3.min.js';
serverOptions.prefix = '/prefix';
serverOptions.response_limit = 128000;
serverOptions.websocket = true;

serverOptions.jsessionid = true;
serverOptions.jsessionid = () => true;

serverOptions.log = (severity, message) => { };
serverOptions.heartbeat_delay = 25000;
serverOptions.disconnect_delay = 5000;

// Connection
var connection: sockjs.Connection;

// on('connection') passes a sockJS connection
server.on('connection', (conn) => {
    connection = conn;
    conn = connection;
});

// connection is a ReadWriteStream
var connectionAsReadWrite: NodeJS.ReadWriteStream = connection;

connection.on('data', (message: string) => { });
connection.on('close', () => { });
