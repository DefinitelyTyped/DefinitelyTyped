import * as workerThreads from "worker_threads";
import assert = require("assert");
import { worker } from "cluster";
import { createContext } from "vm";

{
    if (workerThreads.isMainThread) {
        module.exports = async function parseJSAsync(script: string) {
            return new Promise((resolve, reject) => {
                const worker = new workerThreads.Worker(__filename, {
                    workerData: script
                });
                worker.on('message', resolve);
                worker.on('error', reject);
                worker.on('exit', (code) => {
                    if (code !== 0)
                        reject(new Error(`Worker stopped with exit code ${code}`));
                });
            });
        };
    } else {
        const script = workerThreads.workerData;
        workerThreads.parentPort!.postMessage(script);
    }
}

{
    const { port1, port2 } = new workerThreads.MessageChannel();
    port1.on('message', (message) => console.log('received', message));
    port2.postMessage({ foo: 'bar' });
}

{
    if (workerThreads.isMainThread) {
        const worker = new workerThreads.Worker(__filename);
        const subChannel = new workerThreads.MessageChannel();
        worker.postMessage({ hereIsYourPort: subChannel.port1 }, [subChannel.port1]);
        subChannel.port2.on('message', (value) => {
            console.log('received:', value);
        });
        worker.moveMessagePortToContext(new workerThreads.MessagePort(), createContext());
    } else {
        workerThreads.parentPort!.once('message', (value) => {
            assert(value.hereIsYourPort instanceof workerThreads.MessagePort);
            value.hereIsYourPort.postMessage('the worker is sending this');
            value.hereIsYourPort.close();
        });
    }
}
