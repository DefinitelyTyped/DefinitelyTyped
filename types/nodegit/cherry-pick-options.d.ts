import { MergeOptions } from './merge-options';
import { CheckoutOptions } from './checkout-options';

export interface CherrypickOptions {
    version?: number | undefined;
    mainline?: number | undefined;
    mergeOpts?: MergeOptions | undefined;
    checkoutOpts?: CheckoutOptions | undefined;
}
