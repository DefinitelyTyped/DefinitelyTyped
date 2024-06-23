import { CheckoutOptions } from "./checkout-options";
import { FetchOptions } from "./fetch-options";

export interface SubmoduleUpdateOptions {
    version?: number | undefined;
    checkoutOpts?: CheckoutOptions | undefined;
    fetchOpts?: FetchOptions | undefined;
    cloneCheckoutStrategy?: number | undefined;
    [key: string]: any;
}
