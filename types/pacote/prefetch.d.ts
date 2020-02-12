import { Options } from './index';

/**
 * @deprecated * **THIS API IS DEPRECATED. USE pacote.tarball() INSTEAD**
 *
 * Fetches package data identified by `spec`, usually for the purpose of warming
 * up the local package cache (with `opts.cache`). It does not return anything.
 */
declare function prefetch(spec: string, opts?: Options): Promise<void>;
export = prefetch;
