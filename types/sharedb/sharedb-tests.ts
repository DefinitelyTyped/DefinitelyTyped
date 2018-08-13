/// <reference types="qunit/v1" />
import * as ShareDB from 'sharedb';
import * as http from 'http';
import * as WebSocket from 'ws';
import {Duplex} from 'stream';

//Adapted from https://github.com/avital/websocket-json-stream
class WebSocketJSONStream extends Duplex {
    constructor(private readonly ws:WebSocket) {
        super({objectMode: true});
        this.ws.on('message', (msg: string) => {
            this.push(JSON.parse(msg))
        });
        this.ws.on('close', () => {
            this.push(null); // end readable stream
            this.end(); // end writable stream

            this.emit('close');
            this.emit('end');
        });
        this.on('error', function() { ws.close(); });
        this.on('end',   function() { ws.close(); });
    };
    public _read():void {};
    public _write(msg:any, encoding:string, next:Function):void {
        this.ws.send(JSON.stringify(msg));
        next();
    };
};

const backend = new ShareDB();
const connection = backend.connect();
const doc = connection.get('examples', 'counter');

doc.fetch((err) => {
    if(err) { throw err; }
    if(doc.type === null) {
        doc.create({numClicks:0}, startServer);
    } else {
        startServer();
    }
});

function startServer() {
    var server = http.createServer();

    // Connect any incoming WebSocket connection to ShareDB
    var wss = new WebSocket.Server({server: server});
    wss.on('connection', function(ws, req) {
      var stream = new WebSocketJSONStream(ws);
      backend.listen(stream);
    });
  
    server.listen(8080);
    // console.log('Listening on http://localhost:8080');
    startClient(() => {
        server.close();
        wss.close();
    });
}

function startClient(callback) {
    var sharedb = require('sharedb/lib/client');
    var socket = new WebSocket('ws://localhost:8080');
    var connection = new sharedb.Connection(socket);
    var doc = connection.get('examples', 'counter');
    doc.subscribe(() => {
        doc.submitOp([{p: ['numClicks'], na: 1}]);
        callback();
    });
}