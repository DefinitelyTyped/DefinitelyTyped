export = NodeWorker;

/**
 * You can use webworker-promise with nodejs using shim
 *
 * @example
 *
 * ```
 * const WebworkerPromise = require('webworker-promise');
 * const Worker = require('webworker-promise/lib/node-worker');
 * const path = require('path');
 *
 * const workerPath = path.join(__dirname, './worker');
 * const worker = new WebworkerPromise(new Worker(workerPath));
 * ```
 *
 */
// tslint:disable-next-line:no-unnecessary-class
declare class NodeWorker {
    constructor(filePath: string);
}
