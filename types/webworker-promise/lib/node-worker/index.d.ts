// Type definitions for webworker-promise 0.4
// Project: https://github.com/kwolfy/webworker-promise#readme
// Definitions by: Idicious <https://github.com/idicious>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * You can use webworker-promise with nodejs using shim
 *
 * @example
 *
 * ```
 * import WebworkerPromise from 'webworker-promise';
 * import Worker from 'webworker-promise/lib/node-worker';
 *
 * const worker = new WebworkerPromise(new Worker('./node-process'));
 * ```
 *
 */
export default class NodeWorker {
    constructor(uri: string);
}
