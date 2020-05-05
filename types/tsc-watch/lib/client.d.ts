/// <reference types="node" />

import { EventEmitter } from 'events';

declare class TscWatchClient extends EventEmitter {
    start(...args: any[]): void;
    kill(): void;

    // tslint:disable:unified-signatures
    /**
     * Emitted upon first successful compilation
     */
    on(event: 'first_success', cb: () => any): this;
    /**
     * Emitted upon first successful compilation
     */
    on(event: 'success', cb: () => any): this;
    /**
     * Emitted upon every failing compilation
     */
    on(event: 'compile_errors', cb: () => any): this;
    // tslint:enable:unified-signatures
}

export = TscWatchClient;
