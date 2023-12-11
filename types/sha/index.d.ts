/// <reference types="node" />

import { Transform } from "stream";

export type CheckCallback<R> = (err: Error | null) => R;
export type GetCallback = (err: Error | null, actual: string) => void;

export interface ShaOptions {
    /** defaults to `sha1` and can be any of the algorithms supported by `crypto.createHash` */
    algorithm?: string | undefined;
}

/**
 * Asynchronously check that `fileName` has a "hash" of `expected`. The callback will be called with either `null`
 * or an error (indicating that they did not match).
 */
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export function check<R>(fileName: string, expected: string, cb: CheckCallback<R>): void | R;
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export function check<R>(fileName: string, expected: string, options: ShaOptions, cb: CheckCallback<R>): void | R;
/**
 * Synchronously check that `fileName` has a "hash" of `expected`. Throws if they do not match.
 */
export function checkSync(fileName: string, expected: string, options?: ShaOptions): void;
/**
 * Asynchronously get the "hash" of `fileName`. The callback will be called with an optional `error` object and the
 * (lower cased) hex digest of the hash.
 */
export function get(fileName: string, cb: GetCallback): void;
export function get(fileName: string, options: ShaOptions, cb: GetCallback): void;
/** Synchronously get the "hash" of `fileName`. */
export function getSync(fileName: string, options?: ShaOptions): string;
/**
 * Check the hash of a stream without ever buffering it.  This is a pass through stream so you can do things like:
 *
 *     fs.createReadStream('src')
 *       .pipe(sha.stream('expected'))
 *       .pipe(fs.createWriteStream('dest'))
 *
 * `dest` will be a complete copy of `src` and an error will be emitted if the hash did not match `'expected'`.
 */
export function stream(expected: string, options?: ShaOptions): Transform;
