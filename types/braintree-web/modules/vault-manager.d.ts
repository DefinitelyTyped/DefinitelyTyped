import { callback } from './core';
import { Client } from './client';
import { GooglePaymentDetails } from './google-payment';
import { HostedFieldsAccountDetails } from './hosted-fields';
import { PayPalAccountDetails } from './paypal';
import { ThreeDSecureAccountDetails } from './three-d-secure';
import { UnionPayAccountDetails } from './unionpay';
import { VenmoAccountDetails } from './venmo';

/**
 * Manages customer's payment methods.
 * @see https://braintree.github.io/braintree-web/3.75.0/module-braintree-web_vault-manager.html
 */
export class VaultManager {
    static create(options: { client?: Client; authorization?: string; }): Promise<VaultManager>;
    static create(options: { client?: Client; authorization?: string; }, callback: callback<VaultManager>): void;

    /**
     * Fetches payment methods owned by the customer whose id was used to generate the client token used to create the client.
     * @see https://braintree.github.io/braintree-web/3.75.0/VaultManager.html#fetchPaymentMethods
     */
    fetchPaymentMethods(options?: { defaultFirst: boolean }): Promise<FetchPaymentMethodsPayload[]>;
    fetchPaymentMethods(options: { defaultFirst: boolean }, callback: callback<FetchPaymentMethodsPayload[]>): void;
    fetchPaymentMethods(callback: callback<FetchPaymentMethodsPayload[]>): void;

    /**
     * Cleanly tear down anything set up by create.
     * @see https://braintree.github.io/braintree-web/3.75.0/VaultManager.html#teardown
     */
    teardown(): Promise<void>;
    teardown(callback: callback<void>): void;
}

/**
 * The customer's payment methods.
 * @see https://braintree.github.io/braintree-web/3.75.0/VaultManager.html#~fetchPaymentMethodsPayload
 */
export interface FetchPaymentMethodsPayload {
    nonce: string;
    default: boolean;
    details?: HostedFieldsAccountDetails | ThreeDSecureAccountDetails | GooglePaymentDetails | PayPalAccountDetails | UnionPayAccountDetails | VenmoAccountDetails | Record<string, any>;
    type: string;
    description: string | null;
    binData?: Record<string, any>;
}
