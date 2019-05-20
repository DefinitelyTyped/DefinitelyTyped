/// <reference types="applepayjs" />

import Client from '../client';
import { callback, BinData } from '../common';

export type ApplePayPaymentRequest = ApplePayJS.ApplePayPaymentRequest;

export enum ApplePayStatusCodes {
    // The requested action succeeded.
    STATUS_SUCCESS = 1,
    // The requested action failed.
    STATUS_FAILURE,
    // The billing address is not valid.
    STATUS_INVALID_BILLING_POSTAL_ADDRESS,
    // The shipping address is not valid.
    STATUS_INVALID_SHIPPING_POSTAL_ADDRESS,
    // The shipping contact information is not valid.
    STATUS_INVALID_SHIPPING_CONTACT,
    // The required PIN information was not provided. Cards on the China Union Pay payment network may require a PIN to authenticate the transaction.
    STATUS_PIN_REQUIRED,
    // The PIN information is not valid.Cards on the China Union Pay network may require a PIN.
    STATUS_PIN_INCORRECT,
    // The maximum number of tries for a PIN has been reached and the user has been locked out. Cards on the China Union Pay network may require a PIN.
    STATUS_PIN_LOCKOUT
}

/**
 * @property {string} nonce The payment method nonce.
 * @property {object} details Additional details.
 * @property {string} details.cardType Type of card, ex: Visa, MasterCard.
 * @property {string} details.cardHolderName The name of the card holder.
 * @property {string} details.dpanLastTwo Last two digits of card number.
 * @property {string} description A human-readable description.
 * @property {string} type The payment method type, always `ApplePayCard`.
 * @property {object} binData Information about the card based on the bin.
 */
export interface ApplePayTokenizePayload {
    nonce: string;
    details: {
        cardType: string;
        cardHolderName: string;
        dpanLastTwo: string;
    };
    description: string;
    type: 'ApplePayCard';
    binData: BinData;
}

export interface ApplePayPayload {
    merchantIdentifier: string;
    domainName: string;
    displayName: string;
}

export interface ApplePayCreateOptions {
    client?: Client;
    authorization?: string;
}

declare class ApplePay {
    /**
     * @param {object} options Creation options:
     * @param {Client} [options.client] A {@link Client} instance.
     * @param {string} [options.authorization] A tokenizationKey or clientToken. Can be used in place of `options.client`.
     * @param {callback} [callback] The second argument, `data`, is the {@link ApplePay} instance. If no callback is provided, `create` returns a promise that resolves with the {@link ApplePay} instance.
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    static create(
        options: ApplePayCreateOptions,
        callback: callback<ApplePay>
    ): void;
    static create(options: ApplePayCreateOptions): Promise<ApplePay>;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    static VERSION: string;

    /**
     * Merges a payment request with Braintree defaults to return an {external:ApplePayPaymentRequest}.
     *
     * The following properties are assigned to `paymentRequest` if not already defined. Their default values come from the Braintree gateway.
     * - `countryCode`
     * - `currencyCode`
     * - `merchantCapabilities`
     * - `supportedNetworks`
     * @param {external:ApplePayPaymentRequest} paymentRequest The payment request details to apply on top of those from Braintree.
     * @returns {external:ApplePayPaymentRequest} The decorated `paymentRequest` object.
     * @example
     * var applePay = require('braintree-web/apple-pay');
     *
     * applePay.create({client: clientInstance}, function (applePayErr, applePayInstance) {
     *   if (applePayErr) {
     *     // Handle error here
     *     return;
     *   }
     *
     *   var paymentRequest = applePayInstance.createPaymentRequest({
     *     total: {
     *       label: 'My Company',
     *       amount: '19.99'
     *     }
     *   });
     *
     *   var session = new ApplePaySession(3, paymentRequest);
     *
     */
    createPaymentRequest(
        paymentRequest: Partial<ApplePayPaymentRequest>
    ): ApplePayPaymentRequest;

    /**
     * Validates your merchant website, as required by `ApplePaySession` before payment can be authorized.
     * @param {object} options Options
     * @param {string} options.validationURL The validationURL fram an `ApplePayValidateMerchantEvent`.
     * @param {string} options.displayName The canonical name for your store. Use a non-localized name. This parameter should be a UTF-8 string that is a maximum of 128 characters. The system may display this name to the user.
     * @param {callback} [callback] The second argument, <code>data</code>, is the Apple Pay merchant session object. If no callback is provided, `performValidation` returns a promise.
     * Pass the merchant session to your Apple Pay session's `completeMerchantValidation` method.
     * @returns {Promise|void} Returns a promise if no callback is provided.
     * @example
     * var applePay = require('braintree-web/apple-pay');
     *
     * applePay.create({client: clientInstance}, function (applePayErr, applePayInstance) {
     *   if (applePayErr) {
     *     // Handle error here
     *     return;
     *   }
     *
     *   var paymentRequest = applePayInstance.createPaymentRequest({
     *     total: {
     *       label: 'My Company',
     *       amount: '19.99'
     *     }
     *   });
     *   var session = new ApplePaySession(3, paymentRequest);
     *
     *   session.onvalidatemerchant = function (event) {
     *     applePayInstance.performValidation({
     *       validationURL: event.validationURL,
     *       displayName: 'My Great Store'
     *     }, function (validationErr, validationData) {
     *       if (validationErr) {
     *         console.error(validationErr);
     *         session.abort();
     *         return;
     *       }
     *
     *       session.completeMerchantValidation(validationData);
     *     });
     *   };
     * });
     */
    performValidation(
        options: {
            validationURL: string;
            displayName?: string;
            merchantIdentifier?: string;
        },
        callback: callback
    ): void;
    performValidation(options: {
        validationURL: string;
        displayName?: string;
        merchantIdentifier?: string;
    }): Promise<any>;

    /**
     * Tokenizes an Apple Pay payment. This will likely be called in your `ApplePaySession`'s `onpaymentauthorized` callback.
     * @param {object} options Options
     * @param {object} options.token The `payment.token` property of an {@link external:ApplePayPaymentAuthorizedEvent}.
     * @param {callback} [callback] The second argument, <code>data</code>, is a {@link ApplePay~tokenizePayload|tokenizePayload}. If no callback is provided, `tokenize` returns a promise that resolves with a {@link ApplePay~tokenizePayload|tokenizePayload}.
     * @returns {Promise|void} Returns a promise if no callback is provided.
     * @example
     * var applePay = require('braintree-web/apple-pay');
     *
     * applePay.create({client: clientInstance}, function (applePayErr, applePayInstance) {
     *   if (applePayErr) {
     *     // Handle error here
     *     return;
     *   }
     *
     *   var paymentRequest = applePayInstance.createPaymentRequest({
     *     total: {
     *       label: 'My Company',
     *       amount: '19.99'
     *     }
     *   });
     *   var session = new ApplePaySession(3, paymentRequest);
     *
     *   session.onpaymentauthorized = function (event) {
     *     applePayInstance.tokenize({
     *       token: event.payment.token
     *     }, function (tokenizeErr, tokenizedPayload) {
     *       if (tokenizeErr) {
     *         session.completePayment(ApplePaySession.STATUS_FAILURE);
     *         return;
     *       }
     *       // Send the tokenizedPayload to your server here!
     *
     *       // Once the transaction is complete, call completePayment
     *       // to close the Apple Pay sheet
     *       session.completePayment(ApplePaySession.STATUS_SUCCESS);
     *     });
     *   };
     *
     *   // ...
     * });
     */
    tokenize(
        options: { token: any },
        callback: callback<ApplePayTokenizePayload>
    ): void;
    tokenize(options: { token: any }): Promise<ApplePayTokenizePayload>;
}

export default ApplePay;
