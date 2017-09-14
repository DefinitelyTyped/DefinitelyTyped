import { AnnotatedCommit } from './annotated-commit';
import { Repository } from './repository';
import { Object } from './object';
import { Strarray } from './str-array';
import { CheckoutOptions } from './checkout-options';

export namespace Reset {
    const enum TYPE {
        SOFT = 1,
        MIXED = 2,
        HARD = 3
    }
}

export class Reset {
    /**
     * Look up a refs's commit.
     *
     * @static
     * @param {Repository} repo
     * @param {Object} target
     * @param {number} resetType
     * @param {CheckoutOptions} checkoutOpts
     * @returns {Promise<number>}
     *
     * @memberof Reset
     */
    static reset(repo: Repository, target: Object, resetType: number, checkoutOpts: CheckoutOptions): Promise<number>;
    /**
     * Look up a refs's commit.
     *
     * @static
     * @param {Repository} repo
     * @param {Object} target
     * @param {Strarray} pathspecs
     * @returns {Promise<number>}
     *
     * @memberof Reset
     */
    static default(repo: Repository, target: Object, pathspecs: Strarray): Promise<number>;
    /**
     * Sets the current head to the specified commit oid and optionally resets the index and working tree to match.
     * This behaves like reset but takes an annotated commit, which lets you specify which extended sha syntax string was specified by a user, allowing for more exact reflog messages.
     * See the documentation for reset.
     *
     * @static
     * @param {Repository} repo
     * @param {AnnotatedCommit} commit
     * @param {number} resetType
     * @param {CheckoutOptions} checkoutOpts
     * @returns {number}
     *
     * @memberof Reset
     */
    static fromAnnotated(repo: Repository, commit: AnnotatedCommit, resetType: number, checkoutOpts: CheckoutOptions): number;
}
