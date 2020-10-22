// Type definitions for shelljs-exec-proxy 0.1
// Project: https://github.com/nfischer/shelljs-exec-proxy#readme
// Definitions by: Nikita Volodin <https://github.com/qlonik>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as shelljs from 'shelljs';

interface Exec {
    (...command: string[]): shelljs.ExecOutputReturnValue;
    [k: string]: Exec;
}

type ShelljsExecProxy = { [k: string]: Exec } & typeof shelljs;

declare const shelljsExecProxy: ShelljsExecProxy;
export = shelljsExecProxy;
