import * as sockjs from 'sockjs';
import * as http from 'http';
import * as stream from 'stream';

let server: sockjs.Server;
let serverOptions: sockjs.ServerOptions = {};

// createServer method
server = sockjs.createServer();
server = sockjs.createServer(serverOptions);

// installHandlers method
let httpServer: http.Server = http.createServer();
server.installHandlers(httpServer);
server.installHandlers(httpServer, serverOptions);

// serverOptions
serverOptions.sockjs_url = 'http://cdn.sockjs.org/sockjs-0.3.min.js';
serverOptions.prefix = '/prefix';
serverOptions.response_limit = 128000;
serverOptions.websocket = true;

serverOptions.jsessionid = true;
serverOptions.jsessionid = () => true;

serverOptions.log = (severity: string, message: string) => { };
serverOptions.heartbeat_delay = 25000;
serverOptions.disconnect_delay = 5000;

// Connection
let connection: sockjs.Connection;

// on('connection') passes a sockJS connection
server.on('connection', (conn: sockjs.Connection) => {
    connection = conn;
    conn = connection;
});

// connection is a ReadWriteStream
let connectionAsReadWrite: NodeJS.ReadWriteStream = connection;

connection.on('data', (message: string) => { });
connection.on('close', () => { });
