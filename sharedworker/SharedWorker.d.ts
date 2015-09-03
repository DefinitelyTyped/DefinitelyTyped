// Type definitions for SharedWorker
// Project: http://www.w3.org/TR/workers/
// Definitions by: Toshiya Nakakura <https://github.com/nakakura>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module SharedWorker {
    interface AbstractWorker extends EventTarget {
        onerror: (ev: ErrorEvent) => any;
    }

    export interface SharedWorker extends AbstractWorker {
        /**
         * the value it was assigned by the object's constructor.
         * It represents the MessagePort for communicating with the shared worker.
         * @type {MessagePort}
         */
        port: MessagePort;
    }
}

declare var SharedWorker: {
    prototype: SharedWorker.SharedWorker;
    /***
     *
     * @param {string} stringUrl    Pathname to JavaScript file
     * @param {string} name         Name of the worker to execute
     */
    new (stringUrl: string, name?: string): SharedWorker.SharedWorker;
};
