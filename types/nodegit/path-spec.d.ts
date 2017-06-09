import { DiffDelta } from './diff-delta';
import { Tree } from './tree';
import { Diff } from './diff';
import { Repository } from './repository';
import { Index } from './index';
import { Strarray } from './str-array';

export namespace Pathspec {
    const enum FLAG {
        DEFAULT = 0,
        IGNORE_CASE = 1,
        USE_CASE = 2,
        NO_GLOB = 4,
        NO_MATCH_ERROR = 8,
        FIND_FAILURES = 16,
        FAILURES_ONLY = 32
    }
}

export class Pathspec {
    /**
     *
     *
     * @static
     * @param {*} m
     * @param {number} pos
     * @returns {DiffDelta}
     *
     * @memberof Pathspec
     */
    static matchListDiffEntry(m: any, pos: number): DiffDelta;
    /**
     *
     *
     * @static
     * @param {*} m
     * @param {number} pos
     * @returns {string}
     *
     * @memberof Pathspec
     */
    static matchListEntry(m: any, pos: number): string;
    /**
     *
     *
     * @static
     * @param {*} m
     * @returns {number}
     *
     * @memberof Pathspec
     */
    static matchListEntrycount(m: any): number;
    /**
     *
     *
     * @static
     * @param {*} m
     * @param {number} pos
     * @returns {string}
     *
     * @memberof Pathspec
     */
    static matchListFailedEntry(m: any, pos: number): string;
    /**
     *
     *
     * @static
     * @param {*} m
     * @returns {number}
     *
     * @memberof Pathspec
     */
    static matchListFailedEntrycount(m: any): number;
    /**
     *
     *
     * @static
     * @param {Strarray} pathspec
     * @returns {Pathspec}
     *
     * @memberof Pathspec
     */
    static create(pathspec: Strarray): Pathspec;

    /**
     *
     *
     *
     * @memberof Pathspec
     */
    free(): void;
    /**
     *
     *
     * @param {Diff} diff
     * @param {number} flags
     * @returns {Promise<any>}
     *
     * @memberof Pathspec
     */
    matchDiff(diff: Diff, flags: number): Promise<any>;
    /**
     *
     *
     * @param {Index} index
     * @param {number} flags
     * @returns {Promise<any>}
     *
     * @memberof Pathspec
     */
    matchIndex(index: Index, flags: number): Promise<any>;
    /**
     *
     *
     * @param {Tree} tree
     * @param {number} flags
     * @returns {Promise<any>}
     *
     * @memberof Pathspec
     */
    matchTree(tree: Tree, flags: number): Promise<any>;
    /**
     *
     *
     * @param {Repository} repo
     * @param {number} flags
     * @returns {Promise<any>}
     *
     * @memberof Pathspec
     */
    matchWorkdir(repo: Repository, flags: number): Promise<any>;
    /**
     *
     *
     * @param {number} flags
     * @param {string} path
     * @returns {number}
     *
     * @memberof Pathspec
     */
    matchesPath(flags: number, path: string): number;
}
