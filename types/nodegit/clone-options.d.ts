import { CheckoutOptions } from './checkout-options';
import { FetchOptions } from './fetch-options';

export class CloneOptions {
    version?: number;
    checkoutOpts?: CheckoutOptions;
    fetchOpts?: FetchOptions;
    bare?: number;
    local?: number;
    checkoutBranch?: string;
    repositoryCbPayload?: any;
    remoteCbPayload?: any;
}
