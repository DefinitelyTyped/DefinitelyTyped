import { Plugin, RenderedChunk } from "rollup";

interface OffMainThreadOptions {
    /**
     * A string containing the EJS template for the amd loader.
     * If `undefined`, OMT will use `loader.ejs`.
     */
    loader?: string;
    /**
     * Use `fetch()` + `eval()` to load dependencies instead of `<script>` tags
     * and `importScripts()`. _This is not CSP compliant, but is required if you
     * want to use dynamic imports in ServiceWorker_.
     * @default false
     */
    useEval?: boolean;
    /**
     * Function name to use instead of AMD’s `define`.
     * @default 'define'
     */
    amdFunctionName?: string;
    /**
     * A function that determines whether the loader code should be prepended to a
     * certain chunk. Should return true if the load is supposed to be prepended.
     */
    prependLoader?: (chunk: RenderedChunk, workerFiles: string[]) => boolean;
    /**
     * The scheme used when importing workers as a URL.
     * @default 'omt'
     */
    urlLoaderScheme?: string;
    /**
     * Silence the warning about ESM being badly supported in workers.
     * @default false
     */
    silenceESMWorkerWarning?: boolean;
}

/**
 * Use Rollup with workers and ES6 modules _today_.
 */
declare function OMT(opts?: OffMainThreadOptions): Plugin;

export = OMT;
