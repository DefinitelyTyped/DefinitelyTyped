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

class CustomExtraDb {
    query(collection: string, query: any, fields: unknown, options: {customDbOption: boolean}, callback: ShareDB.DBQueryCallback) {
        callback(null, [], {});
    }
    close() {}
}

const backend = new ShareDB({
    extraDbs: {myDb: new CustomExtraDb()}
});
console.log(backend.db);

// getOps allows for `from` and `to` to both be `null`:
// https://github.com/share/sharedb/blob/960f5d152f6a8051ed2dcb00a57681a3ebbd7dc2/README.md#getops
backend.db.getOps('someCollection', 'someId', null, null, {}, () => {});
backend.db.getSnapshotBulk('someCollection', ['id1', 'id2'], null, null, () => {});

console.log(backend.pubsub);
console.log(backend.extraDbs);

backend.addProjection('notes_minimal', 'notes', {title: true, creator: true, lastUpdateTime: true});

// Test module augmentation to attach custom typed properties to `agent.custom`.
import _ShareDbAgent = require('sharedb/lib/agent');
declare module 'sharedb/lib/agent' {
    interface Custom {
        user?: {id: string};
    }
}
// Exercise middleware (backend.use)
type SubmitRelatedActions = 'afterSubmit' | 'apply' | 'commit' | 'submit';
const submitRelatedActions: SubmitRelatedActions[] = ['afterSubmit', 'apply', 'commit', 'submit'];
for (const action of submitRelatedActions) {
    backend.use(action, (request, callback) => {
        if (request.agent.custom.user) {
            console.log(request.agent.custom.user.id);
        }
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
            request.op.op,
            request.op.create,
            request.op.del,
        );
        callback();
    });
}
backend.use('connect', (context, callback) => {
    // `context.req` is the HTTP / websocket request.
    // This assumes that some request middleware has handled auth and popuplated `req.userId`.
    if (context.req.userId) {
        context.agent.custom.user = {id: context.req.userId};
    }
    console.log(
        context.action,
        context.agent,
        context.agent.backend === context.backend,
        context.agent.stream.isServer,
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
    // Usage note: It's only necessary to write `context.reply['data']` in
    // TypeScript <= 2.1.
    //
    // In TypeScript 2.2+, `context.reply.data` is OK, as 2.2 added support for
    // dotted property access for types with string index signatures.
    console.log(context.reply && context.reply['data'] &&
        context.reply['data'].someProperty);
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

const richTextType = {
  name: 'rich-text',
  uri: 'http://sharejs.org/types/rich-text/v1',
  create() {},
  apply() {},
  transform() {},
  compose() {},
};

ShareDBClient.types.register(richTextType);

console.log(ShareDBClient.types.map);
console.log(ShareDBClient.types.map['rich-text'].name);
console.log(ShareDBClient.types.map['rich-text'].uri);

const op1 = [{ insert: 'Hello' }];
const op2 = [{ retain: 5 }, { insert: ' world!' }];
const op3 = ShareDBClient.types.map['rich-text'].compose(op1, op2);

function startClient(callback) {
    const socket = new WebSocket('ws://localhost:8080');
    const connection = new ShareDBClient.Connection(socket);
    const doc = connection.get('examples', 'counter');
    doc.subscribe(() => {
        doc.submitOp([{p: ['numClicks'], na: 1}]);
        callback();
    });
    // sharedb-mongo query object
    connection.createSubscribeQuery('examples', {numClicks: {$gte: 5}}, null, (err, results) => {
        console.log(err, results);
    });
    // SQL-ish query adapter that takes a string query condition
    connection.createSubscribeQuery('examples', 'numClicks >= 5', null, (err, results) => {
        console.log(err, results);
    });

    const anotherDoc = doc.connection.get('examples', 'another-counter');
    console.log(anotherDoc.collection);
    if (anotherDoc.type !== null) {
      console.log(anotherDoc.type.name);
    }
    if (anotherDoc.version !== null) {
      Math.round(anotherDoc.version);
    }
}
