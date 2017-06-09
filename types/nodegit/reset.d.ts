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
     * @param {number} reset_type
     * @param {CheckoutOptions} checkout_opts
     * @returns {Promise<number>}
     *
     * @memberof Reset
     */
    static reset(repo: Repository, target: Object, reset_type: number, checkout_opts: CheckoutOptions): Promise<number>;
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
     * @param {number} reset_type
     * @param {CheckoutOptions} checkout_opts
     * @returns {number}
     *
     * @memberof Reset
     */
    static fromAnnotated(repo: Repository, commit: AnnotatedCommit, reset_type: number, checkout_opts: CheckoutOptions): number;
}
