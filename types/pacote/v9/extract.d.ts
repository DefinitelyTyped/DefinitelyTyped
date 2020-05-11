import { Options } from './index';

/**
 * Extracts package data identified by `spec` into a directory named
 * `destination`, which will be created if it does not already exist.
 *
 * If `opts.digest` is provided and the data it identifies is present in the
 * cache, `extract` will bypass most of its operations and go straight to
 * extracting the tarball.
 */
declare function extract(spec: string, destination?: string, opts?: Options): Promise<void>;
export = extract;
