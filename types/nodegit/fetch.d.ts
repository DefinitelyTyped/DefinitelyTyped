import { FetchOptions } from './fetch-options';

export namespace Fetch {
    const enum PRUNE {
        GIT_FETCH_PRUNE_UNSPECIFIED = 0,
        GIT_FETCH_PRUNE = 1,
        GIT_FETCH_NO_PRUNE = 2
    }
}

export class Fetch {
    /**
     *
     *
     * @static
     * @param {FetchOptions} opts
     * @param {number} version
     * @returns {number}
     *
     * @memberof Fetch
     */
    static initOptions(opts: FetchOptions, version: number): number;
}
