import { CheckoutOptions } from "./checkout-options";
import { FetchOptions } from "./fetch-options";

export class CloneOptions {
    version?: number | undefined;
    checkoutOpts?: CheckoutOptions | undefined;
    fetchOpts?: FetchOptions | undefined;
    bare?: number | undefined;
    local?: number | undefined;
    checkoutBranch?: string | undefined;
    repositoryCbPayload?: any;
    remoteCbPayload?: any;
}
