import { Repository } from './repository';
import { Signature } from './signature';
import { Oid } from './oid';
import { CheckoutOptions } from './checkout-options';

export namespace Stash {
    const enum APPLY_FLAGS {
        APPLY_DEFAULT = 0,
        APPLY_REINSTATE_INDEX = 1,
    }

    const enum APPLY_PROGRESS {
        NONE = 0,
        LOADING_STASH = 1,
        ANALYZE_INDEX = 2,
        ANALYZE_MODIFIED = 3,
        ANALYZE_UNTRACKED = 4,
        CHECKOUT_UNTRACKED = 5,
        CHECKOUT_MODIFIED = 6,
        DONE = 7,
    }

    const enum FLAGS {
        DEFAULT = 0,
        KEEP_INDEX = 1,
        INCLUDE_UNTRACKED = 2,
        INCLUDE_IGNORED = 4,
    }
}

export interface StashApplyOptions {
    version?: number | undefined;
    flags?: number | undefined;
    checkoutOptions?: CheckoutOptions | undefined;
    progressCb?: Function | undefined;
    progressPayload?: any;
}

export class Stash {
    static apply(repo: Repository, index: number, options?: StashApplyOptions): Promise<number>;
    static applyInitOptions(opts: StashApplyOptions, version: number): number;
    static drop(repo: Repository, index: number): Promise<number>;
    static foreach(repo: Repository, callback?: Function): Promise<number>;
    static pop(repo: Repository, index: number, options?: StashApplyOptions): Promise<number>;
    static save(repo: Repository, stasher: Signature, message: string, flags: number): Promise<Oid>;
}
