import WebworkerPromise from 'webworker-promise';
import WorkerPool from 'webworker-promise/lib/pool';
import registerWebworker from 'webworker-promise/lib/register';
import NodeWorker from 'webworker-promise/lib/node-worker';

const worker = new WebworkerPromise(new Worker('worker.js'));
{
    // main.js
    worker
        .postMessage('ping')
        .then(response => {
            // handle response
        })
        .catch(error => {
            // handle error
        });

    // worker.js
    registerWebworker(async (message, emit) => {
        // message - ping
        return 'pong';
    });
}

{
    // You can use webworker-promise with nodejs using shim
    const nodeWorker = new WebworkerPromise(new NodeWorker('./node-process'));
}

{
    // The message you send can be any object, array, string, number, etc.:

    // main.js
    worker
        .postMessage({
            hello: 'world',
        })
        .then(/* ... */);

    // worker.js
    registerWebworker(async (message, emit) => {
        console.log(message); // { hello: 'world'}
    });
}

{
    // Transferable
    // You can use transferable list for performance issue
    const arrayBuffer2 = new ArrayBuffer(10);
    const arrayBuffer = new ArrayBuffer(10);

    // Send just arraybuffer
    worker.postMessage(arrayBuffer, [arrayBuffer]);
    // Or inside objects
    worker.postMessage({ myArr: arrayBuffer, myArr2: arrayBuffer2 }, [arrayBuffer, arrayBuffer2]);
    // And in worker.js
    registerWebworker(async (message, emit) => {
        return new registerWebworker.TransferableResponse(arrayBuffer, [arrayBuffer]);
    });
}

{
    // Events
    // You can send events from worker to main-process

    // main.js
    worker
        .postMessage('ping', [], (eventName, data) => {
            eventName; // hello
            data; // world
        })
        .then(response => {
            // job end
            // pong
        });
    // worker.js
    registerWebworker(async (message, emit) => {
        emit('hello', 'world');
        return 'pong';
    });
}

{
    // EventEmitter
    // You can use it as regular event-emitter, webworker-promise has all event-emitter methods to send events in direction worker => main or main => worker

    // main.js

    worker.on('add:ok', sum => {
        // sum is 33;
    });

    worker.emit('add', 11, 22);
    // worker.js
    const host = registerWebworker()
        .on('add', (n1, n2) => {
            host.emit('add:ok', n1 + n2);
        })
        .once('minus', (n1, n2) => {
            host.emit('minus:answer', n1 - n2);
        })
        // you still can add operations
        .operation('foo', async () => {
            return 'bar';
        });
}

{
    // Operations
    // Also, you can create operations

    // worker.js
    registerWebworker(async message => {
        // handle postMessage
        return 'pong';
    }).operation('hello', async (message, emit) => {
        return 'world';
    });
    // main.js
    worker.exec('hello').then(response => {
        // world
    });
}

{
    // Workers Pool
    // Dynamic pool for workers.

    // Note: It's experimental feature, and api may be changed

    const pool = WorkerPool.create({
        src: './test.worker.js',
        // or
        create: () => new Worker('./test.worker.js'),
        maxThreads: 3, // optional, default is 2, max numbers of workers to create if necessary
        maxConcurrentPerWorker: 1, // optional, default is 1
    });

    pool.postMessage('hello').then(() => {
        console.log('result');
    });
}

{
    // Error handling
    // Any thrown errors or rejections from the worker will be propagated to the main thread as a rejected Promise. For instance:

    // worker.js
    registerWebworker(message => {
        throw new Error('myException!');
    });
    // main.js
    worker.postMessage('hi').catch(err => {
        console.log(err.message); // 'myException!'
        console.log(err.stack); // stack trace string
    });
}
