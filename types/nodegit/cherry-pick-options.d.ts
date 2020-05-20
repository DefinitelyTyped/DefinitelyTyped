import { MergeOptions } from './merge-options';
import { CheckoutOptions } from './checkout-options';

export interface CherrypickOptions {
    version?: number;
    mainline?: number;
    mergeOpts?: MergeOptions;
    checkoutOpts?: CheckoutOptions;
}
