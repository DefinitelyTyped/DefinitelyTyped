import Rusha = require('rusha');

const hash = Rusha.createHash(); // $ExpectType Hash
hash.update('Hello, World'); // // $ExpectType Hash
hash.digest('hex'); // $ExpectType string
hash.digest(); // $ExpectType ArrayBuffer

const worker = Rusha.createWorker(); // $$ExpectType RushaWorker
worker.onmessage = (res) => {
    res; // $ExpectType MessageEvent<RushaWorkerResponse>
    res.data.id; // $ExpectType string
    res.data.hash; // $ExpectType string
    worker.terminate(); // $ExpectType void
};
worker.postMessage({ id: 'test', data: 'Hello, World' }); // $ExpectType void
