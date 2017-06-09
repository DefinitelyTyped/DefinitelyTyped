import { CheckoutOptions } from './checkout-options';
import { FetchOptions } from './fetch-options';

export interface SubmoduleUpdateOptions {
    /**
     *
     *
     * @type {number}
     * @memberof SubmoduleUpdateOptions
     */
    version?: number;
    /**
     *
     *
     * @type {CheckoutOptions}
     * @memberof SubmoduleUpdateOptions
     */
    checkoutOpts?: CheckoutOptions;
    /**
     *
     *
     * @type {FetchOptions}
     * @memberof SubmoduleUpdateOptions
     */
    fetchOpts?: FetchOptions;
    /**
     *
     *
     * @type {number}
     * @memberof SubmoduleUpdateOptions
     */
    cloneCheckoutStrategy?: number;
}
