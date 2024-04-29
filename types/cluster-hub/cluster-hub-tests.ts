import cluster from "cluster";
import Hub = require("cluster-hub");

const hub = new Hub();

if (cluster.isPrimary) {
    const worker = cluster.fork();

    hub.on("master-to-master", (data) => {
        console.log("master-to-master received");
    });

    hub.on("worker-to-master", (data) => {
        console.log("worker-to-master received");
    });

    hub.on("sum", (data, sender, callback) => {
        callback(null, data.a + data.b);
    });

    hub.sendToMaster("master-to-master", 1);

    hub.sendToWorker(worker, "master-to-worker");

    hub.sendToRandomWorker("master-to-worker");

    hub.sendToWorkers("master-to-worker");

    hub.requestMaster("sum", { a: 5, b: 7 }, (err, sum) => {
        console.log("Sum in master: " + sum);
    });

    hub.requestWorker(worker, "mult", { a: 5, b: 7 }, (err, sum) => {
        console.log("Mult in master: " + sum);
    });

    hub.requestAllWorkers("mult", { a: 5, b: 7 }, (err, sum) => {
        console.log("Mult in master: " + sum);
    });

    hub.requestRandomWorker("mult", { a: 5, b: 7 }, (err, sum) => {
        console.log("Mult in master: " + sum);
    });

    hub.lock("foo", (unlock) => {
        console.log("foo lock in master");
        setTimeout(unlock, 1000);
    });
} else {
    hub.on("master-to-worker", () => {
        console.log("master-to-worker received");
    });

    hub.on("mult", (data, sender, callback) => {
        callback(null, data.a * data.b);
    });

    hub.sendToMaster("worker-to-master", 2);

    hub.requestMaster("sum", { a: 1, b: 2 }, (err, sum) => {
        console.log("Sum in worker: " + sum);
    });

    hub.lock("foo", (unlock) => {
        console.log("foo lock in worker 1");
        setTimeout(unlock, 500);
    });

    hub.lock("bar", (unlock) => {
        console.log("bar lock in worker");
        unlock();
    });

    hub.lock("foo", (unlock) => {
        console.log("foo lock in worker 2");
        unlock();
    });
}
