import { Repository } from './repository';
import { DiffPerfdata } from './diff-perf-data';
import { StatusOptions } from './status-options';

export class StatusList {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {StatusOptions} opts
     * @returns {Promise<StatusList>}
     *
     * @memberof StatusList
     */
    static create(repo: Repository, opts: StatusOptions): Promise<StatusList>;

    /**
     *
     *
     * @returns {number}
     *
     * @memberof StatusList
     */
    entrycount(): number;
    /**
     *
     *
     *
     * @memberof StatusList
     */
    free(): void;
    /**
     *
     *
     * @returns {Promise<DiffPerfdata>}
     *
     * @memberof StatusList
     */
    getPerfdata(): Promise<DiffPerfdata>;
}
