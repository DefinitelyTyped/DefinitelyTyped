import * as ShareDB from 'sharedb';
import * as http from 'http';
import * as WebSocket from 'ws';
import { Duplex } from 'stream';
import * as ShareDBClient from 'sharedb/lib/client';
import Agent = require('sharedb/lib/agent');

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

class MyMilestoneDB extends ShareDB.MilestoneDB {}

const backend = new ShareDB({
    extraDbs: {myDb: new CustomExtraDb()},
    milestoneDb: new MyMilestoneDB(),
    suppressPublish: false,
    maxSubmitRetries: 3,
    errorHandler: (error, context) => {
        console.log(error, context.agent.custom);
    },
});
console.log(backend.db);
backend.on('error', (error) => console.error(error));
backend.on('send', (agent, context) => console.log(agent, context));
backend.addListener('timing', (type, time, request) => console.log(type, new Date(time), request));
backend.on('someCustomEvent', (arg0: string, arg1: number) => {});

// getOps allows for `from` and `to` to both be `null`:
// https://github.com/share/sharedb/blob/960f5d152f6a8051ed2dcb00a57681a3ebbd7dc2/README.md#getops
backend.db.getOps('someCollection', 'someId', null, null, {}, () => {});
backend.db.getSnapshotBulk('someCollection', ['id1', 'id2'], null, null, () => {});

console.log(backend.pubsub);
console.log(backend.extraDbs);

backend.addProjection('notes_minimal', 'notes', {title: true, creator: true, lastUpdateTime: true});
const readonlyProjection = backend.projections['notes_minimal'];
console.log(readonlyProjection.target, readonlyProjection.fields);
// backend.projections is used by sharedb internally, so they shouldn't be messed with.
// Test that marking as readonly in API prevents external modification.
// @ts-expect-error
delete backend.projections;
// @ts-expect-error
delete backend.projections.notes_minimal;
// @ts-expect-error
backend.projections['notes_minimal'].target = 'notes2';
// @ts-expect-error
backend.projections['notes_minimal'].fields = {};
// @ts-expect-error
backend.projections['notes_minimal'].fields['title'] = true;

// Exercise middleware (backend.use)
type SubmitRelatedActions = 'afterWrite' | 'apply' | 'commit' | 'submit';
const submitRelatedActions: SubmitRelatedActions[] = ['afterWrite', 'apply', 'commit', 'submit'];
for (const action of submitRelatedActions) {
    backend.use(action, (request, callback) => {
        const agent = request.agent as Agent<{
            user: {
                id: string
            }
        }>;

        if (agent.custom.user) {
            console.log(agent.custom.user.id);
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
            request.extra.source,
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

backend.use('receivePresence', (context, callback) => {
    console.log(
        context.presence.ch,
        context.presence.id,
    );
});

backend.use('sendPresence', (context, callback) => {
    console.log(
        context.presence.ch,
        context.presence.id,
    );
    callback();
});

backend.on('submitRequestEnd', (error, request) => {
    console.log(request.op);
});

const connection = backend.connect();
const agent = connection.agent;
const netRequest = {};  // Passed through to 'connect' middleware, not used by sharedb itself
const connectionWithReq = backend.connect(null, netRequest);
const reboundConnection = backend.connect(backend.connect(), netRequest);

const connectionHasPending: boolean = connection.hasPending();
connection.whenNothingPending(() => console.log('whenNothingPending resolved'));
connection.send({ a: 'nonExistentAction', some: 'data' });

connection.on('doc', (doc) => {
    console.log(doc.data);
});
connection.on('connected', (reason) => {
    if (reason === 'foo') console.log(reason);
});

connection.on('pong', () => {});
if (connection.canSend) connection.ping();

const doc = connection.get('examples', 'counter');

doc.fetch((err) => {
    if (err) { throw err; }
    if (doc.type === null) {
        doc.create({ numClicks: 0 }, startServer);
    } else {
        startServer();
    }
});

doc.create({foo: true}, 'http://sharejs.org/types/JSONv0');

function startServer() {
    const server = http.createServer();

    // Connect any incoming WebSocket connection to ShareDB
    const wss = new WebSocket.Server({ server });
    wss.on('connection', (ws, req) => {
      const stream = new WebSocketJSONStream(ws);
      backend.listen(stream);
      // Test type definition for 2-argument version
      backend.listen(stream, req);
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

ShareDB.logger.setMethods({
    warn: (...args: any[]) => console.log(...args),
});

ShareDBClient.logger.setMethods({
    info: () => {},
    error: (message: string) => console.error(message),
});

ShareDBClient.logger.info('foo', 'bar');
ShareDBClient.logger.warn('foo', 'bar');
ShareDBClient.logger.error('foo', 'bar');

function startClient(callback) {
    const socket = new WebSocket('ws://localhost:8080');
    const connection = new ShareDBClient.Connection(socket);
    const doc = connection.get('examples', 'counter');
    doc.preventCompose = true;
    if (doc.subscribed) return;
    if (doc.paused) doc.resume();
    doc.subscribe(() => {
        doc.submitOp([{p: ['numClicks'], na: 1}]);
        doc.unsubscribe((error) => {
            if (error) console.error(error);
            doc.pause();
            doc.flush();
            doc.destroy((error) => {
                if (error) console.error(error);
                callback();
            });
        });
    });

    interface MyDoc {
        foo: number;
        bar: string;
    }
    const typedDoc: ShareDBClient.Doc<MyDoc> = connection.get('example', 'my-doc');
    typedDoc.create({
        foo: 123,
        bar: 'abc',
    });

    typedDoc.ingestSnapshot({
        v: 10,
        type: 'json0',
        data: {
            foo: 456,
            bar: 'xyz',
        },
    });

    // sharedb-mongo query object
    connection.createSubscribeQuery('examples', {numClicks: {$gte: 5}}, null, (err, results) => {
        console.log(err, results);
    });
    // SQL-ish query adapter that takes a string query condition
    const query = connection.createSubscribeQuery<MyDoc>('examples', 'numClicks >= 5', null, (err, results) => {
        results.forEach((result) => result.data.foo > 0);
    });

    query.on('ready', () => {});
    query.on('error', (error) => console.log(error));
    query.on('insert', async (inserted) => {
        inserted.forEach((i) => i.data.foo);
        await new Promise<void>((resolve) => resolve());
    });
    query.on('remove', (removed) => {
        removed.forEach((r) => r.data.bar);
    });
    query.on('move', (moved, from, to) => {
        moved.forEach(() => console.log(from - to));
    });
    query.on('changed', (results) => {
        results.forEach((result) => result.data.foo);
    });
    query.on('extra', (extra) => console.log(extra));

    const anotherDoc = doc.connection.get('examples', 'another-counter');
    console.log(anotherDoc.collection);
    if (anotherDoc.type !== null) {
      console.log(anotherDoc.type.name);
    }
    if (anotherDoc.version !== null) {
      Math.round(anotherDoc.version);
    }

    doc.whenNothingPending(() => {
        if (doc.hasPending()) throw new Error();
        if (doc.hasWritePending()) throw new Error();
    });

    doc.submitOp([{insert: 'foo', attributes: {bold: true}}], {source: {deep: true}});

    doc.on('load', () => {});
    doc.on('no write pending', () => {});
    doc.on('nothing pending', () => {});
    doc.on('create', (source: any) => {});
    doc.on('op', (ops: [any], source: any, clientId: string) => {});
    doc.on('op batch', (ops: any[], source: any) => {});
    doc.on('before op', (ops: [any], source: any, clientId: string) => {});
    doc.on('before op batch', (ops: any[], source: any) => {});
    doc.on('del', (data: MyDoc, source: any) => {});
    doc.on('error', (error: ShareDB.Error) => {});
    doc.on('destroy', () => {});

    connection.fetchSnapshot('examples', 'foo', 123, (error, snapshot: ShareDBClient.Snapshot) => {
        if (error) throw error;
        console.log(snapshot.data);
    });

    connection.fetchSnapshotByTimestamp('examples', 'bar', Date.now(), (error, snapshot) => {
        if (error) throw error;
        console.log(snapshot.data);
    });

    console.log(connection.id + connection.seq);

    interface PresenceValue {
        foo: number;
    }
    const presence: ShareDBClient.Presence<PresenceValue> = connection.getDocPresence('foo', 'bar');
    presence.subscribe((error) => console.log(error));
    presence.on('receive', (id, value) => console.log(id, value.foo.toLocaleString()));
    const localPresence = presence.create('123');
    localPresence.submit({foo: 123});

    connection.close();
}

backend.getOps(agent, 'collection', 'id', 0, 5, {opsOptions: {metadata: true}}, (error, ops) => {
    ops.forEach(console.log);
});

backend.getOpsBulk(agent, 'collection', 'id', {abc: 0}, {abc: 5}, {opsOptions: {metadata: true}}, (error, ops) => {
    ops.forEach(console.log);
});

class SocketLike {
    readyState = 1;

    close(reason?: number): void {}
    send(data: any): void {}

    onmessage: (event: any) => void;
    onclose: (event: any) => void;
    onerror: (event: any) => void;
    onopen: (event: any) => void;
}

const socketLike = new SocketLike();
new ShareDBClient.Connection(socketLike);
