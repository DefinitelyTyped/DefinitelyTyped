/// <reference types="node" />

export interface ZipOptions {
    level?: number | undefined;
    name?: string | undefined;
    timestamp?: number | undefined;
}
export function zip(data: string | number[] | Buffer | Uint8Array, opts?: ZipOptions): number[];
export function unzip(data: number[] | Buffer | Uint8Array): number[];
export const DEFAULT_LEVEL: number;
