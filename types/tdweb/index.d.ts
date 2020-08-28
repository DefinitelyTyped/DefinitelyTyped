// Type definitions for tdweb 1.4
// Project: https://github.com/tdlib/example/web/tdweb
// Definitions by: Alexander Krisko <https://github.com/esindger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface TdObject {
    '@type': string;
    '@extra'?: string;
    [key: string]: TdObject | TdObject[] | number | number[] | string | string[] | boolean | boolean[] | undefined;
}

/**
 * An object of this type can be returned on every function call, in case of an error
 */
export interface TdError {
    '@type': 'error';
    '@extra'?: 'string';
    /**
     * Error code; subject to future changes. If the error code is 406, the error message
     * must not be processed in any way and must not be displayed to the user
     */
    code: number;
    /** Error message; subject to future changes */
    message: string;
}

export interface TdOptions {
    /**
     * Callback for all incoming updates.
     */
    onUpdate?: (update: TdObject) => any;
    /**
     * Name of the TDLib instance. Currently only one instance of TdClient with a given name is allowed.
     * All but one instances with the same name will be automatically closed. Usually, the newest non-background instance is kept alive.
     * Files will be stored in an IndexedDb table with the same name.
     */
    instanceName?: string;
    /**
     * Pass true, if the instance is opened from the background.
     */
    isBackground?: boolean;
    /**
     * The initial verbosity level for the TDLib internal logging (0-1023).
     */
    logVerbosityLevel?: number;
    /**
     * The initial verbosity level of the JavaScript part of the code (one of 'error', 'warning', 'info', 'log', 'debug').
     */
    jsLogVerbosityLevel?: 'error' | 'warning' | 'info' | 'log' | 'debug';
    /**
     * Pass false to use TDLib without database and secret chats. It will significantly improve loading time, but some functionality will be unavailable.
     */
    useDatabase?: boolean;
    /**
     * For debug only. PaPass false to use TDLib without database and secret chats.
     * It will significantly improve loading time, but some functionality will be unavailable.ss true
     * to open TDLib database in read-only mode
     */
    readOnly?: boolean;
    /**
     * For debug only. The type of the TDLib build to use. 'asmjs' for asm.js and 'wasm' for WebAssembly.
     * If mode == 'auto' WebAbassembly will be used if supported by browser, asm.js otherwise.
     */
    mode?: 'auto' | 'asmjs' | 'wasm';
}

/**
 * TDLib in a browser
 *
 * TDLib can be compiled to WebAssembly or asm.js using Emscripten compiler and used in a browser from JavaScript.
 * This is a convenient wrapper for TDLib in a browser which controls TDLib instance creation, handles interaction
 * with TDLib and manages a filesystem for persistent TDLib data.
 * TDLib instance is created in a Web Worker to run it in a separate thread.
 * TdClient just sends queries to the Web Worker and receives updates and results from it.
 *
 *
 * Differences from the TDLib JSON API:
 * 1. Added the update `updateFatalError error:string = Update;` which is sent whenever TDLib encounters a fatal error.
 * 2. Added the method `setJsLogVerbosityLevel new_verbosity_level:string = Ok;`,
 * which allows to change the verbosity level of tdweb logging.
 * 3. Added the possibility to use blobs as input files via the constructor `inputFileBlob data:<JavaScript blob> = InputFile;`.
 * 4. The class `filePart` contains data as a JavaScript blob instead of a base64-encoded string.
 * 5. The method `readFilePart` supports only `offset == count == 0`.
 * 6. The methods `getStorageStatistics`, `getStorageStatisticsFast`, `optimizeStorage`, `addProxy` and
 * `getFileDownloadedPrefixSize` are not supported.
 */
declare class TdClient {
    /**
     * Create TdClient.
     */
    constructor(options: TdOptions);

    /**
     * Send a query to TDLib.
     * If the query contains the field '@extra', the same field will be added into the result.
     * @link https://github.com/tdlib/td/blob/master/td/generate/scheme/td_api.tl - td_api.tl scheme
     * @link https://core.telegram.org/tdlib/docs/td__api_8h.html - HTML documentation
     * @link https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1_function.html - a list of all available TDLib methods
     * @link https://core.telegram.org/tdlib/docs/classtd_1_1td__api_1_1_object.html - a list of all available TDLib classes
     */
    send(query: TdObject): Promise<TdError | TdObject>;
}

export default TdClient;

export as namespace tdweb;
