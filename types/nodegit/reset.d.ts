import { AnnotatedCommit } from './annotated-commit';
import { Repository } from './repository';
import { Strarray } from './str-array';
import { CheckoutOptions } from './checkout-options';
import { Commit } from './commit';
import { Tag } from './tag';

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
     */
    static reset(repo: Repository, target: Commit | Tag, resetType: number, checkoutOpts: CheckoutOptions): Promise<number>;
    /**
     * Look up a refs's commit.
     */
    static default(repo: Repository, target: Commit | Tag, pathspecs: Strarray | string | string[]): Promise<number>;
    /**
     * Sets the current head to the specified commit oid and optionally resets the index and working tree to match.
     * This behaves like reset but takes an annotated commit, which lets you specify which extended sha syntax string was specified by a user, allowing for more exact reflog messages.
     * See the documentation for reset.
     */
    static fromAnnotated(repo: Repository, commit: AnnotatedCommit, resetType: number, checkoutOpts: CheckoutOptions): number;
}
