var worker_with_name = new SharedWorker('worker.js', 'worker');
var worker_with_opts = new SharedWorker('worker.js', {
    name: 'worker',
    type: 'module',
    credentials: 'same-origin'
});

/* Caller */
let worker = new SharedWorker('worker.js');
worker.port.start();

worker.port.onmessage = function(e) {
    console.log('Caller Received:', e.data);
};

worker.port.postMessage('Message');

/* Worker */
const _self: SharedWorker.SharedWorkerGlobalScope = self as any;

_self.onconnect = function(e) {
    var port = e.ports[0];

    port.addEventListener('message', function(e) {
        console.log('Worker Received', e.data);
        port.postMessage('Result');
    });

    port.start();
};
