import { DegitErrorCode } from './index';

export const degitConfigName: string;

export class DegitError extends Error {
    code: DegitErrorCode;
    original?: Error;
    ref?: string;
    url?: string;
}

export function tryRequire(
    file: string,
    opts?: {
        clearCache?: true;
    },
): unknown;

export function exec(command: string): Promise<{ stdout: string; stderr: string }>;

export function mkdirp(dir: string): void;

export function fetch(url: string, dest: string, proxy: string): Promise<void>;

export function stashFiles(dir: string, dest: string): void;

export function unstashFiles(dir: string, dest: string): void;

export const base: string;
