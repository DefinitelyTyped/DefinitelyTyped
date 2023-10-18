import * as shelljs from "shelljs";

interface Exec {
    (...command: string[]): shelljs.ExecOutputReturnValue;
    [k: string]: Exec;
}

type ShelljsExecProxy = { [k: string]: Exec } & typeof shelljs;

declare const shelljsExecProxy: ShelljsExecProxy;
export = shelljsExecProxy;
