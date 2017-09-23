import { MergeOptions } from './merge-options';
import { CheckoutOptions } from './checkout-options';

export interface CherrypickOptions {
    /**
     *
     *
     * @type {number}
     * @memberof CherrypickOptions
     */
    version?: number;
    /**
     *
     *
     * @type {number}
     * @memberof CherrypickOptions
     */
    mainline?: number;
    /**
     *
     *
     * @type {MergeOptions}
     * @memberof CherrypickOptions
     */
    mergeOpts?: MergeOptions;
    /**
     *
     *
     * @type {CheckoutOptions}
     * @memberof CherrypickOptions
     */
    checkoutOpts?: CheckoutOptions;
}
