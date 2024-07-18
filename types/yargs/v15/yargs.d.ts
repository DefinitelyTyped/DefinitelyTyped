import { Argv } from ".";

export = Yargs;

declare function Yargs(
    processArgs?: readonly string[],
    cwd?: string,
    parentRequire?: NodeRequire,
): Argv;
