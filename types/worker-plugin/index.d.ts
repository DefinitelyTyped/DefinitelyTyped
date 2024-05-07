import * as webpack from "webpack";

export = WorkerPlugin;

declare class WorkerPlugin extends webpack.Plugin {
    constructor(options?: WorkerPlugin.Options);
}

declare namespace WorkerPlugin {
    interface Options {
        filename?: string | undefined;
        chunkFilename?: string | undefined;
        globalObject?: false | string | undefined;
        plugins?: Array<string | webpack.Plugin> | undefined;
        /**
         * If set to `true`, this option enables the bundling of [SharedWorker](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker)
         */
        sharedWorker?: boolean | undefined;
        /**
         * If set to `false`, this option disables the bundling of [Worker].
         * Intended to be used with `{ sharedWorker: true }` to allow bundling of [SharedWorker] only without also bundling [Worker].
         */
        worker?: boolean | undefined;
        preserveTypeModule?: boolean | undefined;
        /**
         * Normally, WorkerPlugin will transform `new Worker('./a.js', { type: 'module' })`
         * to completely remove the `type` option, outputting something like `new Worker('a.worker.js')`.
         * This allows the plugin to compile Module Workers to Classic Workers, which are supported in all browsers.
         */
        workerType?: string | undefined;
    }
}
