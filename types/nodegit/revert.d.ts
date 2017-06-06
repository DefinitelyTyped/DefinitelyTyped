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
    static revert(repo: Repository, commit: Commit, given_opts: RevertOptions): Promise<number>;
    static commit(repo: Repository, revert_commit: Commit, our_commit: Commit, mainline: number, merge_options: MergeOptions): Promise<Index>;
}
