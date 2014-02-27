/// <reference path='../../../node/node.d.ts' />
/// <reference path='../runner.ts' />

/// <reference path='host/exec.ts' />

module DT {
    var fs = require('fs');

    export interface TscExecOptions {
        tscVersion?:string;
        useTscParams?:boolean;
        checkNoImplicitAny?:boolean;
    }

    export class Tsc {
        public static run(tsfile: string, options: TscExecOptions, callback: (result: ExecResult) => void) {
            options = options || {};
            options.tscVersion = options.tscVersion || DEFAULT_TSC_VERSION;
            if (typeof options.checkNoImplicitAny === "undefined") {
                options.checkNoImplicitAny = true;
            }
            if (typeof options.useTscParams === "undefined") {
                options.useTscParams = true;
            }

            if (!fs.existsSync(tsfile)) {
                throw new Error(tsfile + " not exists");
            }

            var tscPath = './_infrastructure/tests/typescript/' + options.tscVersion + '/tsc.js';
            if (!fs.existsSync(tscPath)) {
                throw new Error(tscPath + ' is not exists');
            }
            var command = 'node ' + tscPath + ' --module commonjs ';
            if (options.useTscParams && fs.existsSync(tsfile + '.tscparams')) {
                command += '@' + tsfile + '.tscparams';
            } else if (options.checkNoImplicitAny) {
                command += '--noImplicitAny';
            }
            Exec.exec(command, [tsfile], (execResult) => {
                callback(execResult);
            });
        }
    }
}
