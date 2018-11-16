import { Argv } from '.';

export = Yargs;

declare function Yargs(
    processArgs?: string[],
    cwd?: string,
    parentRequire?: NodeRequireFunction,
): Argv;
