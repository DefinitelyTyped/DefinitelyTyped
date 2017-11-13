import { CheckoutOptions } from './checkout-options';
import { FetchOptions } from './fetch-options';

export interface SubmoduleUpdateOptions {
    version?: number;
    checkoutOpts?: CheckoutOptions;
    fetchOpts?: FetchOptions;
    cloneCheckoutStrategy?: number;
    [key: string]: any;
}
