import { Options } from './index';
import { PassThrough } from 'stream';

/**
 * Fetches package data identified by `spec` and returns the data as a buffer.
 */
declare function tarball(spec: string, opts?: Options): Promise<Buffer>;

declare namespace tarball {
    /**
     * Same as `pacote.tarball`, except it returns a stream instead of a Promise.
     */
    function stream(spec: string, opts?: Options): PassThrough;

    /**
     * Like `pacote.tarball`, but instead of returning data directly, data will
     * be written directly to `dest`, and create any required directories along
     * the way.
     */
    function toFile(spec: string, dest: string, opts?: Options): Promise<void>;
}

export = tarball;
