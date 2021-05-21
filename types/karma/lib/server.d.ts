import { EventEmitter } from 'events';

import { ConfigFile, ConfigOptions, ServerCallback, TestResults } from '../';
import { Config } from './config';

declare class Server extends EventEmitter {
    constructor(options?: Config, callback?: ServerCallback);
    /** @deprecated */
    // tslint:disable-next-line:unified-signatures to correctly show deprecated overload
    constructor(options?: ConfigOptions | ConfigFile, callback?: ServerCallback);
    /**
     * Start the server
     */
    start(): Promise<void>;

    /**
     * Stop the server
     */
    stop(): Promise<void>;

    /**
     * Get properties from the injector
     * @param token
     */
    get(token: string): any;

    /**
     * Force a refresh of the file list
     */
    refreshFiles(): Promise<any>;

    on(event: string, listener: (...args: any[]) => void): this;

    /**
     * Listen to the 'run_complete' event.
     */
    on(event: 'run_complete', listener: (browsers: any, results: TestResults) => void): this;
}

export = Server;
