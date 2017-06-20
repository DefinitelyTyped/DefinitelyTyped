import { Repository } from './repository';
import { Oid } from './oid';

export class Graph {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {Oid} local
     * @param {Oid} upstream
     * @returns {Promise<number>}
     *
     * @memberof Graph
     */
    static aheadBehind(repo: Repository, local: Oid, upstream: Oid): Promise<number>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {Oid} commit
     * @param {Oid} ancestor
     * @returns {Promise<number>}
     *
     * @memberof Graph
     */
    static descendantOf(repo: Repository, commit: Oid, ancestor: Oid): Promise<number>;
}
