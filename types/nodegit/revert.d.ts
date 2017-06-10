import { MergeOptions } from './merge-options';
import { CheckoutOptions } from './checkout-options';
import { Repository } from './repository';
import { Commit } from './commit';
import { Index } from './index';

export interface RevertOptions {
    version: number;
    mainline: number;
    mergeOpts: MergeOptions;
    checkoutOpts: CheckoutOptions;
}

export class Revert {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {Commit} commit
     * @param {RevertOptions} givenOpts
     * @returns {Promise<number>}
     *
     * @memberof Revert
     */
    static revert(repo: Repository, commit: Commit, givenOpts: RevertOptions): Promise<number>;
    /**
     * Reverts the given commit against the given "our" commit, producing an index that reflects the result of the revert.
     *
     * @static
     * @param {Repository} repo
     * @param {Commit} revertCommit
     * @param {Commit} ourCommit
     * @param {number} mainline
     * @param {MergeOptions} mergeOptions
     * @returns {Promise<Index>}
     *
     * @memberof Revert
     */
    static commit(repo: Repository, revertCommit: Commit, ourCommit: Commit, mainline: number, mergeOptions: MergeOptions): Promise<Index>;
}
