/**
 * @module braintree-web/vault-manager
 * @description Manages customer's payment methods.
 */
import Client from '../client';
import { callback, BinData } from '../common';

/**
 * @property {string} nonce A nonce that can be sent to your server to transact on the payment method.
 * @property {boolean} default Whether or not this is the default payment method for the customer.
 * @property {object} details Any additional details about the payment method. Varies depending on the type of payment method.
 * @property {string} type A constant indicating the type of payment method.
 * @property {?string} description Additional description about the payment method.
 * @property {?object} binData Bin data about the payment method.
 */
export interface VaultManagerPaymentMethod {
    nonce: string;
    default: string;
    detauls: any;
    type: string;
    description?: string;
    binData: BinData;
}

declare class VaultManager {
    /**
     * @param {object} options Creation options:
     * @param {Client} [options.client] A {@link Client} instance.
     * @param {string} [options.authorization] A tokenizationKey or clientToken. Can be used in place of `options.client`.
     * @param {callback} callback The second argument, `data`, is the {@link VaultManager} instance.
     * @returns {void}
     */
    static create(
        options: { client?: Client; authorization?: string },
        callback: callback<VaultManager>
    ): void;
    static create(options: {
        client?: Client;
        authorization?: string;
    }): Promise<VaultManager>;

    /**
     * Fetches payment methods owned by the customer whose id was used to generate the client token used to create the {@link module:braintree-web/client|client}.
     * @param {object} [options] Options for fetching payment methods.
     * @param {boolean} [options.defaultFirst = false] If `true`, the payment methods will be returned with the default payment method for the customer first. Otherwise, the payment methods will be returned with the most recently used payment method first.
     * @param {callback} [callback] The second argument is a {@link VaultManager~fetchPaymentMethodsPayload|fetchPaymentMehodsPayload}. This is also what is resolved by the promise if no callback is provided.
     * @returns {Promise|void} Returns a promise if no callback is provided.
     * @example
     * vaultManagerInstance.fetchPaymentMethods(function (err, paymentMethods) {
     *   paymentMethods.forEach(function (paymentMethod) {
     *     // add payment method to UI
     *     // paymentMethod.nonce <- transactable nonce associated with payment method
     *     // paymentMethod.details <- object with additional information about payment method
     *     // paymentMethod.type <- a constant signifying the type
     *   });
     * });
     */
    fetchPaymentMethods(
        options: { defaultFirst?: boolean },
        callback: callback<VaultManagerPaymentMethod[]>
    ): void;
    fetchPaymentMethods(options: {
        defaultFirst?: boolean;
    }): Promise<VaultManagerPaymentMethod[]>;

    /**
     * Deletes a payment method owned by the customer whose id was used to generate the client token used to create the {@link module:braintree-web/client|client}.
     * @public
     * @param {string} paymentMethodNonce The payment method nonce that references a vaulted payment method.
     * @param {callback} [callback] No data is returned if the operation is successful.
     * @returns {Promise|void} Returns a promise if no callback is provided.
     * @example
     * vaultManagerInstance.deletePaymentMethod('nonce-to-delete', function (err) {
     *   // handle err if it exists
     * });
     */
    deletePaymentMethod(
        paymentMethodNonce: string,
        callback: callback<void>
    ): void;
    deletePaymentMethod(paymentMethodNonce: string): Promise<void>;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/vault-manager.create|create}.
     * @public
     * @param {callback} [callback] Called once teardown is complete. No data is returned if teardown completes successfully.
     * @example
     * vaultManagerInstance.teardown();
     * @example <caption>With callback</caption>
     * vaultManagerInstance.teardown(function () {
     *   // teardown is complete
     * });
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    teardown(callback: callback<void>): void;
    teardown(): Promise<void>;
}
