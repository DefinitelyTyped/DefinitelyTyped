// Type definitions for worker-plugin 4.0
// Project: https://github.com/GoogleChromeLabs/worker-plugin
// Definitions by: Artur Androsovych <https://github.com/arturovt>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import * as webpack from 'webpack';

export = WorkerPlugin;

declare class WorkerPlugin extends webpack.Plugin {
  constructor(options?: WorkerPlugin.Options);
}

declare namespace WorkerPlugin {
  interface Options {
    globalObject?: false | string;
    plugins?: Array<string | webpack.Plugin>;
    /**
     * If set to `true`, this option enables the bundling of [SharedWorker](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker)
     */
    sharedWorker?: boolean;
    /**
     * If set to `false`, this option disables the bundling of [Worker].
     * Intended to be used with `{ sharedWorker: true }` to allow bundling of [SharedWorker] only without also bundling [Worker].
     */
    worker?: boolean;
    preserveTypeModule?: boolean;
    /**
     * Normally, WorkerPlugin will transform `new Worker('./a.js', { type: 'module' })`
     * to completely remove the `type` option, outputting something like `new Worker('a.worker.js')`.
     * This allows the plugin to compile Module Workers to Classic Workers, which are supported in all browsers.
     */
    workerType?: string;
  }
}
