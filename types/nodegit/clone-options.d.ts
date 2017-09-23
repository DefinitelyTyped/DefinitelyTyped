import { CheckoutOptions } from './checkout-options';
import { FetchOptions } from './fetch-options';

export class CloneOptions {
    /**
     *
     *
     * @type {number}
     * @memberof CloneOptions
     */
    version?: number;
    /**
     *
     *
     * @type {CheckoutOptions}
     * @memberof CloneOptions
     */
    checkoutOpts?: CheckoutOptions;
    /**
     *
     *
     * @type {FetchOptions}
     * @memberof CloneOptions
     */
    fetchOpts?: FetchOptions;
    /**
     *
     *
     * @type {number}
     * @memberof CloneOptions
     */
    bare?: number;
    /**
     *
     *
     * @type {number}
     * @memberof CloneOptions
     */
    local?: number;
    /**
     *
     *
     * @type {string}
     * @memberof CloneOptions
     */
    checkoutBranch?: string;
    /**
     *
     *
     * @type {*}
     * @memberof CloneOptions
     */
    repositoryCbPayload?: any;
    /**
     *
     *
     * @type {*}
     * @memberof CloneOptions
     */
    remoteCbPayload?: any;
}
