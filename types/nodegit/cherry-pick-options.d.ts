import { CheckoutOptions } from "./checkout-options";
import { MergeOptions } from "./merge-options";

export interface CherrypickOptions {
    version?: number | undefined;
    mainline?: number | undefined;
    mergeOpts?: MergeOptions | undefined;
    checkoutOpts?: CheckoutOptions | undefined;
}
