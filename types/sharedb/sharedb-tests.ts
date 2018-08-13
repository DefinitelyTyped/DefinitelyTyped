/// <reference types="qunit/v1" />
import * as ShareDB from 'sharedb';
import * as http from 'http';
import * as WebSocket from 'ws';
import { WebSocketJSONStream } from './websocketJSONStream';

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