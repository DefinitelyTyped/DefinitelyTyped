import { callback } from './core';

/**
 * This object is returned by {@link Client#getConfiguration|getConfiguration}. This information is used extensively by other Braintree modules to properly configure themselves.
 */
export interface ClientAnalyticsMetadata {
    sessionId: string;
    sdkVersion: string;
    merchantAppId: string;
}

export interface Configuration {
    client: Client;
    gatewayConfiguration: any;
    analyticsMetadata: ClientAnalyticsMetadata;
}

export interface CreditCardInfo {
    number: string;
    cvv: string;
    expirationDate: string;
    billingAddress: {
        postalCode?: string;
    };
}

export interface Client {
    authorization: string;

    /**
     * @description This function is the entry point for the <code>braintree.client</code> module.
     * It is used for creating {@link Client} instances that service communication to Braintree servers.
     *
     * @example
     * var createClient = require('braintree-web/client').create;
     *
     * createClient({
     *   authorization: CLIENT_AUTHORIZATION
     * }, function (createErr, clientInstance) {
     *   ...
     * });
     */
    create(options: { authorization: string }): Promise<Client>;
    create(options: { authorization: string }, callback: callback): void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     */
    VERSION: string;

    /**
     * Returns a copy of the configuration values.
     */
    getConfiguration(): Configuration;

    /**
     * Used by other modules to formulate all network requests to the Braintree gateway.
     * It is also capable of being used directly from your own form to tokenize credit card information.
     * However, be sure to satisfy PCI compliance if you use direct card tokenization.
     *     * @example
     *
     * <caption>Direct Credit Card Tokenization</caption>
     * var createClient = require('braintree-web/client').create;
     *
     * createClient({
     *   authorization: CLIENT_AUTHORIZATION
     * }, function (createErr, clientInstance) {
     *   var form = document.getElementById('my-form-id');
     *   var data = {
     *     creditCard: {
     *       number: form['cc-number'].value,
     *       cvv: form['cc-cvv'].value,
     *       expirationDate: form['cc-date'].value,
     *       billingAddress: {
     *         postalCode: form['cc-postal'].value
     *       },
     *       options: {
     *         validate: false
     *       }
     *     }
     *   };
     *
     *   // Warning: For a merchant to be eligible for the easiest level of PCI compliance (SAQ A),
     *   // payment fields cannot be hosted on your checkout page.
     *   // For an alternative to the following, use Hosted Fields.
     *   clientInstance.request({
     *     endpoint: 'payment_methods/credit_cards',
     *     method: 'post',
     *     data: data
     *   }, function (requestErr, response) {
     *  // More detailed example of handling API errors: https://codepen.io/braintree/pen/MbwjdM
     *     if (requestErr) { throw new Error(requestErr); }
     *
     *     console.log('Got nonce:', response.creditCards[0].nonce);
     *   });
     * });
     */
    request(options: { method: string; endpoint: string; data: any; timeout?: number }, callback: callback): void;
}
