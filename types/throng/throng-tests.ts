import throng = require("throng");

function masterFunction() { }
function startFunction(id: number) { }

throng((id: number) => {});

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
