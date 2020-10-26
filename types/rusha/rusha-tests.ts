import rusha from 'rusha';

rusha; // $$ExpectType Rusha

const hash = rusha.createHash(); // $$ExpectType Hash
hash.update('Hello, World'); // // $ExpectType Hash
hash.digest('hex'); // $ExpectType string
hash.digest(); // $ExpectType

const worker = rusha.createWorker(); // $$ExpectType Worker
worker.onmessage = (res) => {
    res; // $ExpectType WorkerResponse
    res.id; // $ExpectType string
    res.hash; // $ExpectType string
    worker.terminate(); // $ExpectType Worker
};
worker.postMessage({ id: 'test', data: 'Hello, World' }); // $ExpectType void
