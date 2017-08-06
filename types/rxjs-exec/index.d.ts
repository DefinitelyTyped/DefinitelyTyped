// Type definitions for rxjs-exec 0.4
// Project: https://github.com/kssfilo/rxjs-exec
// Definitions by: Meno Abels <https://github.com/mabels>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as Rx from 'rxjs';

export class Options {
    binary?: boolean;
    input?: string|Buffer;
    stdin?: boolean;
}

export function exec(commandLine: string, options?: Options): Rx.Observable<Buffer>;
export function execFilter(commandLine: string, options?: Options): Rx.Observable<Buffer>;
export function mapExec(commandLine: string, options?: Options): Rx.Observable<Buffer>;
export function mapExecFilter(commandLine: string, options?: Options): Rx.Observable<Buffer>;
// declare export patch(rx: Rx.Observer);
