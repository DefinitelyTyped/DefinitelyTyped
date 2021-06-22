import Pool = require('worker-threads-pool');

const pool = new Pool({ max: 5 });
new Pool({ maxWaiting: 5 });

// $ExpectType number
pool.size;

pool.acquire('/my/worker.js', (err, worker) => {
    // $ExpectType Error | null
    err;
    // $ExpectType Worker
    worker;
});
pool.acquire('/my/worker.js', { workerData: null }, (err, worker) => {
    // $ExpectType Error | null
    err;
    // $ExpectType Worker
    worker;
});

pool.destroy();
pool.destroy(() => {});
