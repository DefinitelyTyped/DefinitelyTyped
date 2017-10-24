import { Repository } from './repository';
import { Oid } from './oid';
import { Commit } from './commit';

export namespace Revwalk {
    const enum SORT {
        NONE = 0,
        TOPOLOGICAL = 1,
        TIME = 2,
        REVERSE = 4
    }
}

export class Revwalk {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @returns {Revwalk}
     *
     * @memberof Revwalk
     */
    static create(repo: Repository): Revwalk;

    /**
     *
     *
     * @param {Oid} commitId
     * @returns {number}
     *
     * @memberof Revwalk
     */
    hide(commitId: Oid): number;
    /**
     *
     *
     * @param {string} glob
     * @returns {number}
     *
     * @memberof Revwalk
     */
    hideGlob(glob: string): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Revwalk
     */
    hideHead(): number;
    /**
     *
     *
     * @param {string} refname
     * @returns {number}
     *
     * @memberof Revwalk
     */
    hideRef(refname: string): number;
    /**
     *
     *
     * @returns {Promise<Oid>}
     *
     * @memberof Revwalk
     */
    next(): Promise<Oid>;
    /**
     *
     *
     * @param {Oid} id
     * @returns {number}
     *
     * @memberof Revwalk
     */
    push(id: Oid): number;
    /**
     *
     *
     * @param {string} glob
     * @returns {number}
     *
     * @memberof Revwalk
     */
    pushGlob(glob: string): number;
    /**
     *
     *
     * @returns {number}
     *
     * @memberof Revwalk
     */
    pushHead(): number;
    /**
     *
     *
     * @param {string} range
     * @returns {number}
     *
     * @memberof Revwalk
     */
    pushRange(range: string): number;
    /**
     *
     *
     * @param {string} refname
     * @returns {number}
     *
     * @memberof Revwalk
     */
    pushRef(refname: string): number;
    /**
     *
     *
     * @returns {Repository}
     *
     * @memberof Revwalk
     */
    repository(): Repository;
    /**
     *
     *
     *
     * @memberof Revwalk
     */
    reset(): void;
    /**
     *
     *
     *
     * @memberof Revwalk
     */
    simplifyFirstParent(): void;
    /**
     * Set the sort order for the revwalk. This function takes variable arguments like revwalk.sorting(NodeGit.RevWalk.Topological, NodeGit.RevWalk.Reverse).
     *
     * @param {number} sort
     *
     * @memberof Revwalk
     */
    sorting(sort: number): void;
    /**
     *
     *
     * @param {number} maxCount
     * @returns {Promise<any>}
     *
     * @memberof Revwalk
     */
    fastWalk(maxCount: number): Promise<any>;
    /**
     *
     *
     * @param {string} filePath
     * @param {number} maxCount
     * @returns {Promise<any[]>}
     *
     * @memberof Revwalk
     */
    fileHistoryWalk(filePath: string, maxCount: number): Promise<any[]>;
    /**
     * Walk the history from the given oid. The callback is invoked for each commit; When the walk is over, the callback is invoked with (null, null).
     *
     * @param {Oid} oid
     * @param {Function} callback
     * @returns {Commit}
     *
     * @memberof Revwalk
     */
    walk(oid: Oid, callback: Function): Commit;
    /**
     * Walk the history grabbing commits until the checkFn called with the current commit returns false.
     *
     * @param {Function} checkFn
     * @returns {Promise<any[]>}
     *
     * @memberof Revwalk
     */
    getCommitsUntil(checkFn: Function): Promise<any[]>;
    /**
     *
     *
     * @param {number} count
     * @returns {Promise<Commit[]>}
     *
     * @memberof Revwalk
     */
    getCommits(count: number): Promise<Commit[]>;
}
