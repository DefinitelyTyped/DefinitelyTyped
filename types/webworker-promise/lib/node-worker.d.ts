/**
 * You can use webworker-promise with nodejs using shim
 *
 * @example
 *
 * ```
 * const WebworkerPromise = require('webworker-promise');
 * const Worker = require('webworker-promise/lib/node-worker.js');
 * const path = require('path');
 *
 * const workerPath = path.join(__dirname, './worker.js');
 * const worker = new WebworkerPromise(new Worker(workerPath));
 * ```
 *
 */
// tslint:disable-next-line:no-unnecessary-class
export default class NodeWorker {
    constructor(filePath: string);
}
