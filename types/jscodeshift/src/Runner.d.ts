import { Options } from './core';

export function run(
    transformFile: string,
    paths: string[],
    options?: Options,
): Promise<{
    stats: string;
    timeElapsed: string;
    error: number;
    ok: number;
    nochange: number;
    skip: number;
}>;
