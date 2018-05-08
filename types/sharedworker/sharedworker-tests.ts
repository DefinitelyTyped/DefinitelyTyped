var worker_with_name = new SharedWorker('worker.js', "worker");

var worker = new SharedWorker('worker.js');

worker.port.onmessage = function(e) {
    console.log(e);
};
