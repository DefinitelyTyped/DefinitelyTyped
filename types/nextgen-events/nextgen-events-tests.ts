import * as NgEmitter from 'nextgen-events';
import * as WebSocket from 'ws';
const emitter = new NgEmitter();

// Normal listener
emitter.on('message', (message: any) => {});

// One time listener:
emitter.once('close', () => {});

// The error listener: if it is not defined, the error event will throw an exception
emitter.on('error', (error: any) => {});

emitter.emit('message', 'Hello world!');
// ...

emitter.on('connection', {
    context: 'ctx',
    fn: (stream: any) => {},
});

emitter.on('close', {
    context: 'ctx',
    fn: () => {
        // Destroy the context and all listeners tied to it:
        emitter.destroyListenerContext('ctx');
    },
});

emitter.on('erroHr', {
    context: 'ctx',
    fn: () => {
        // some error handling code

        // Destroy the context and all listeners tied to it:
        emitter.destroyListenerContext('ctx');
    },
});

emitter.once('connection', (stream: any) => {});

emitter.on('connection', {
    fn: (stream: any) => {},
    once: true,
});

async () => {
    const remote = await emitter.waitFor('connect');

    emitter.defineStates('connect');
    emitter.emit('connect', remote);

    // ... somewhere else or in another file...
};

// Now we are sure that we are ready!
// We can connect to the DB or whatever your emitter is for...

const callback1 = (stream: any) => {};

emitter.on('connection', callback1);
// ...
emitter.removeListener('connection', callback1);

const callback2 = (stream: any) => {};

emitter.on('connection', { id: 'foo', fn: callback2 });
emitter.on('connection', { id: 'bar', fn: callback2 });

// ...

// Does nothing! we have used custom IDs!
emitter.removeListener('connection', callback2);

// Remove the first listener only, despite the fact they are sharing the same function
emitter.removeListener('connection', 'foo');

emitter.on('connection', (stream: any) => {});

// output:
// [ { id: [Function], fn: [Function], nice: -Infinity, event: 'connection' } ]

emitter.defineStates('ready');
emitter.emit('ready');

// ... later... ... ...

emitter.once('ready', () => {
    // Your listener code fire immediately
});

emitter.on('foo', () => {
    return new Error('Dang!');
});

emitter.on('foo', () => {
    // Never ever called...
});

emitter.on('interrupt', (interruption: any) => {
    // interruption is eql to Error( 'Dang!' )
});

emitter.emit('foo', (interruption: any) => {
    // interruption is eql to Error( 'Dang!' )
});

const performSomeCriticalAsyncStuff = (f: any) =>
    (async () => {
        return f();
    })();

emitter.on('maintenance', {
    context: 'maintenanceHandlers',
    async: true,
    fn: (type: any, done: any) => {
        performSomeCriticalAsyncStuff(() => {
            done();
        });
    },
});
const maintenanceHandlers = 'foo';
emitter.serializeListenerContext(maintenanceHandlers);

// ...

emitter.emit('maintenance', 'doBackup');

// Despite the fact we emit synchronously, the listener will not be called now,
// it will be queued and called later when the previous call will be finished
emitter.emit('maintenance', 'doUpgrade');

const performBackup = (fn: any) => {};
const performUpgrade = (fn: any) => {};

emitter.on('doBackup', {
    context: 'maintenanceHandlers',
    async: true,
    fn: (done: any) => {
        performBackup(() => {
            done();
        });
    },
});

emitter.on('doUpgrade', {
    context: 'maintenanceHandlers',
    async: true,
    fn: (done: any) => {
        performUpgrade(() => {
            done();
        });
    },
});

emitter.on('whatever', () => {
    // Some actions...
});

emitter.serializeListenerContext(maintenanceHandlers);

// ...

emitter.emit('doBackup');

// Despite the fact we emit synchronously, the second listener will not be called now,
// it will be queued and called later when the first listener will have finished its job
emitter.emit('doUpgrade');

// The third listener is not part of the 'maintenanceHandlers' context, so it will be called
// right now, before the first listener finished, and before the second listener ever start
emitter.emit('whatever');

// Create our service/emitter
const heartBeatEmitter = new NgEmitter();

// Create our server
const server = new WebSocket.Server({ port: 12345 });

// On new connection...
emitter.on('connection', function connection(ws: any) {
    // Create a proxy for this client
    const proxy = new NgEmitter.Proxy();

    // Add the local service exposed to this client and grant it all right
    proxy.addLocalService('heartBeatService', heartBeatEmitter, {
        listen: true,
        emit: true,
        ack: true,
    });

    // message received: just hook to proxy.receive()
    ws.on('message', function incoming(message: any) {
        proxy.receive(message);
    });

    // Define the receive method: should call proxy.push()
    // after decoding the raw message
    proxy.receive = function receive(raw: any) {
        try {
            proxy.push(JSON.parse(raw));
        } catch (error) {}
    };

    // Define the send method
    proxy.send = function send(message: any) {
        ws.send(JSON.stringify(message));
    };

    // Clean up after everything is done
    ws.on('close', function close() {
        proxy.destroy();
    });
});

const ws = new WebSocket('ws://127.0.0.1:12345');

// Create a proxy
const proxy = new NgEmitter.Proxy();

// Once the connection is established...
ws.on('open', function open() {
    // Add the remote service we want to access
    proxy.addRemoteService('heartBeatService');

    // Listen to the event 'heartBeat' on this service
    proxy.remoteServices.heartBeatService.on('heartBeat', (beat: any) => {});
});

// message received: just hook to proxy.receive()
ws.on('message', (message: any) => {
    proxy.receive(message);
});

// Define the receive method: should call proxy.push()
// after decoding the raw message
proxy.receive = function receive(raw: any) {
    try {
        proxy.push(JSON.parse(raw));
    } catch (error) {}
};

// Define the send method
proxy.send = function send(message: any) {
    ws.send(JSON.stringify(message));
};

// Clean up after everything is done
ws.on('close', function close() {
    proxy.destroy();
});
