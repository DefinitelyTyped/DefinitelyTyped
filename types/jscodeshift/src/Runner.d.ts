import { Options } from './core';

interface IRunnerResult {
    stats: string;
    timeElapsed: string;
    error: number;
    ok: number;
    nochange: number;
    skip: number;
}

export const run: (
    transformFile: string,
    paths: string[],
    options?: Options,
) => Promise<IRunnerResult>;
