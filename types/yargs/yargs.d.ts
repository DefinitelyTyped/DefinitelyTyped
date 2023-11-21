import { Argv } from ".";

export = Yargs;

declare function Yargs(
    processArgs?: readonly string[] | string,
    cwd?: string,
    parentRequire?: NodeRequire,
): Argv;
