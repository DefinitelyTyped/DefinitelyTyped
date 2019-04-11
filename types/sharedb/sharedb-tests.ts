/// <reference types="qunit/v1" />
import * as ShareDB from 'sharedb';
import * as http from 'http';
import * as WebSocket from 'ws';
import { Duplex } from 'stream';
import * as ShareDBClient from 'sharedb/lib/client';

// Adapted from https://github.com/avital/websocket-json-stream
class WebSocketJSONStream extends Duplex {
    constructor(private readonly ws: WebSocket) {
        super({ objectMode: true });
        this.ws.on('message', (msg: string) => {
            this.push(JSON.parse(msg));
        });
        this.ws.on('close', () => {
            this.push(null); // end readable stream
            this.end(); // end writable stream

            this.emit('close');
            this.emit('end');
        });
	this.on('error', () => { ws.close(); });
	this.on('end',   () => { ws.close(); });
    }
    _read(): void {}
    _write(msg: any, encoding: string, next: () => void): void {
        this.ws.send(JSON.stringify(msg));
        next();
    }
}

const backend = new ShareDB();

backend.addProjection('notes_minimal', 'notes', {title: true, creator: true, lastUpdateTime: true});

// Exercise middleware (backend.use)
type SubmitRelatedActions = 'afterSubmit' | 'apply' | 'commit' | 'submit';
const submitRelatedActions: SubmitRelatedActions[] = ['afterSubmit', 'apply', 'commit', 'submit'];
for (const action of submitRelatedActions) {
    backend.use(action, (request, callback) => {
        console.log(
            request.action,
            request.agent,
            request.backend,
            request.index,
            request.collection,
            request.projection,
            request.id,
            request.op,
            request.options,
            request.snapshot,
            request.ops,
            request.channels,
        );
        callback();
    });
}
backend.use('connect', (context, callback) => {
    console.log(
        context.action,
        context.agent,
        context.backend,
        context.stream,
        context.req,
    );
    callback();
});
backend.use('op', (context, callback) => {
    console.log(
        context.action,
        context.agent,
        context.backend,
        context.collection,
        context.id,
        context.op,
    );
    callback();
});
backend.use('query', (context, callback) => {
    console.log(
        context.action,
        context.agent,
        context.backend,
        context.index,
        context.collection,
        context.projection,
        context.fields,
        context.channel,
        context.query,
        context.options,
        context.snapshotProjection,
    );
    callback();
});
backend.use('receive', (context, callback) => {
    console.log(
        context.action,
        context.agent,
        context.backend,
        context.data,
    );
    callback();
});
backend.use('reply', (context, callback) => {
    console.log(
        context.action,
        context.agent,
        context.backend,
        context.request,
        context.reply,
    );
    callback();
});
backend.use('readSnapshots', (context, callback) => {
    console.log(
        context.action,
        context.agent,
        context.backend,
        context.collection,
        context.snapshots,
        context.snapshotType,
    );
    callback();
});

const connection = backend.connect();
const netRequest = {};  // Passed through to 'connect' middleware, not used by sharedb itself
const connectionWithReq = backend.connect(null, netRequest);
const reboundConnection = backend.connect(backend.connect(), netRequest);

const doc = connection.get('examples', 'counter');

doc.fetch((err) => {
    if (err) { throw err; }
    if (doc.type === null) {
        doc.create({ numClicks: 0 }, startServer);
    } else {
        startServer();
    }
});

function startServer() {
    const server = http.createServer();

    // Connect any incoming WebSocket connection to ShareDB
    const wss = new WebSocket.Server({ server });
    wss.on('connection', (ws, req) => {
      const stream = new WebSocketJSONStream(ws);
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
    const socket = new WebSocket('ws://localhost:8080');
    const connection = new ShareDBClient.Connection(socket);
    const doc = connection.get('examples', 'counter');
    doc.subscribe(() => {
        doc.submitOp([{p: ['numClicks'], na: 1}]);
        callback();
    });
}
