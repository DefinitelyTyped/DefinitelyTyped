import throng = require("throng");

function masterFunction() { }
function workerFunction(id: number, disconnect: () => void) { }

throng((id: number) => {});

// 5.x
throng(workerFunction);
throng({
    worker: workerFunction,
    count: 3
});

throng({
    master: masterFunction,
    worker: workerFunction,
    count: 16,
    lifetime: Infinity,
    grace: 1000,
    signals: ['SIGTERM', 'SIGINT']
});

// 4.x
function startFunction(id: number) { }

throng(startFunction);
throng(3, startFunction);

throng({
    workers: 4,
    master: masterFunction,
    start: startFunction
});

throng({
    workers: 16,
    grace: 1000,
    master: masterFunction,
    start: startFunction
});

throng({
    workers: 4,
    lifetime: 10000,
    grace: 4000,
    master: masterFunction,
    start: startFunction
});
