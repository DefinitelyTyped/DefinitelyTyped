import { Repository } from './repository';
import { Signature } from './signature';
import { Oid } from './oid';
import { CheckoutOptions } from './checkout-options';

export namespace Stash {
    const enum APPLY_FLAGS {
        APPLY_DEFAULT = 0,
        APPLY_REINSTATE_INDEX = 1
    }

    const enum APPLY_PROGRESS {
        NONE = 0,
        LOADING_STASH = 1,
        ANALYZE_INDEX = 2,
        ANALYZE_MODIFIED = 3,
        ANALYZE_UNTRACKED = 4,
        CHECKOUT_UNTRACKED = 5,
        CHECKOUT_MODIFIED = 6,
        DONE = 7
    }

    const enum FLAGS {
        DEFAULT = 0,
        KEEP_INDEX = 1,
        INCLUDE_UNTRACKED = 2,
        INCLUDE_IGNORED = 4
    }
}

export interface StashApplyOptions {
    /**
     *
     *
     * @type {number}
     * @memberof StashApplyOptions
     */
    version?: number;
    /**
     *
     *
     * @type {number}
     * @memberof StashApplyOptions
     */
    flags?: number;
    /**
     *
     *
     * @type {CheckoutOptions}
     * @memberof StashApplyOptions
     */
    checkoutOptions?: CheckoutOptions;
    /**
     *
     *
     * @type {Function}
     * @memberof StashApplyOptions
     */
    progressCb?: Function;
    /**
     *
     *
     * @type {*}
     * @memberof StashApplyOptions
     */
    progressPayload?: any;
}

export class Stash {
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {number} index
     * @param {StashApplyOptions} options
     * @returns {Promise<number>}
     *
     * @memberof Stash
     */
    static apply(repo: Repository, index: number, options: StashApplyOptions): Promise<number>;
    /**
     *
     *
     * @static
     * @param {StashApplyOptions} opts
     * @param {number} version
     * @returns {number}
     *
     * @memberof Stash
     */
    static applyInitOptions(opts: StashApplyOptions, version: number): number;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {number} index
     * @returns {Promise<number>}
     *
     * @memberof Stash
     */
    static drop(repo: Repository, index: number): Promise<number>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {Function} callback
     * @param {*} payload
     * @returns {Promise<number>}
     *
     * @memberof Stash
     */
    static foreach(repo: Repository, callback: Function, payload: any): Promise<number>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {number} index
     * @param {StashApplyOptions} options
     * @returns {Promise<number>}
     *
     * @memberof Stash
     */
    static pop(repo: Repository, index: number, options: StashApplyOptions): Promise<number>;
    /**
     *
     *
     * @static
     * @param {Repository} repo
     * @param {Signature} stasher
     * @param {string} message
     * @param {number} flags
     * @returns {Promise<Oid>}
     *
     * @memberof Stash
     */
    static save(repo: Repository, stasher: Signature, message: string, flags: number): Promise<Oid>;
}
