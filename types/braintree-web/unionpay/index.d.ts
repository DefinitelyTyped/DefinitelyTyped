/**
 * @module braintree-web/unionpay
 * @description This module allows you to accept UnionPay payments. *It is currently in beta and is subject to change.*
 */
import Client from '../client';
import HostedFields from '../hosted-fields';
import { callback } from '../common';

/**
 * @property {string} nonce The payment method nonce.
 * @property {string} type Always <code>CreditCard</code>.
 * @property {object} details Additional account details:
 * @property {string} details.cardType Type of card, ex: Visa, MasterCard.
 * @property {string} details.lastTwo Last two digits of card number.
 * @property {string} description A human-readable description.
 */
export interface UnionPayAccountDetails {
    cardType: string;
    lastTwo: string;
    description: string;
}

export interface UnionPayTokenizePayload {
    nonce: string;
    type: 'CreditCard';
    details: UnionPayAccountDetails;
    description: string;
}

/**
 * @property {string} enrollmentId UnionPay enrollment ID. This value should be passed to `tokenize`.
 * @property {boolean} smsCodeRequired UnionPay `smsCodeRequired` flag.
 * </p><b>true</b> - the user will receive an SMS code that needs to be supplied for tokenization.
 * </p><b>false</b> - the card can be immediately tokenized.
 */
export interface UnionPayEnrollPayload {
    enrollmentId: string;
    smsCodeRequired: boolean;
}

/**
 * @property {boolean} isUnionPay Determines if this card is a UnionPay card.
 * @property {boolean} isDebit Determines if this card is a debit card. This property is only present if `isUnionPay` is `true`.
 * @property {object} unionPay UnionPay specific properties. This property is only present if `isUnionPay` is `true`.
 * @property {boolean} unionPay.supportsTwoStepAuthAndCapture Determines if the card allows for an authorization, but settling the transaction later.
 * @property {boolean} unionPay.isSupported Determines if Braintree can process this UnionPay card. When false, Braintree cannot process this card and the user should use a different card.
 */

export interface UnionPayProperties {
    supportsTwoStepAuthAndCapture: boolean;
    isSupported: boolean;
}

export interface UnionPayFetchCapabilitiesPayload {
    isUnionPay: boolean;
    isDebit: boolean;
    unionPay: UnionPayProperties;
}

export type UnionPayEnrollOptions =
    | {
          card: {
              number: string;
              expirationDate?: string;
              expirationMonth?: string;
              expirationYear?: string;
          };
          mobile: {
              countryCode: string;
              number: string;
          };
      }
    | {
          hostedFields: HostedFields;
          mobile: {
              countryCode: string;
              number: string;
          };
      };

export type UnionPayTokenizeOptions =
    | {
          card: {
              number: string;
              expirationDate?: string;
              expirationMonth?: string;
              expirationYear?: string;
              cvv?: string;
          };
          enrollmentId: string;
          smsCode?: string;
      }
    | {
          hostedFields: HostedFields;
          enrollmentId: string;
          smsCode?: string;
      };

declare class UnionPay {
    /**
     * @param {object} options Creation options:
     * @param {Client} options.client A {@link Client} instance.
     * @param {callback} callback The second argument, `data`, is the {@link UnionPay} instance.
     * @returns {void}
     * @example
     * braintree.unionpay.create({ client: clientInstance }, function (createErr, unionpayInstance) {
     *   if (createErr) {
     *     console.error(createErr);
     *     return;
     *   }
     *   // ...
     * });
     */
    static create(
        options: { client?: Client; authorization?: string },
        callback: callback<UnionPay>
    ): void;
    static create(options: {
        client?: Client;
        authorization?: string;
    }): Promise<UnionPay>;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    static VERSION: string;

    /**
     * Fetches the capabilities of a card, including whether or not the SMS enrollment process is required.
     * @param {object} options UnionPay {@link UnionPay#fetchCapabilities fetchCapabilities} options
     * @param {object} [options.card] The card from which to fetch capabilities. Note that this will only have one property, `number`. Required if you are not using the `hostedFields` option.
     * @param {string} options.card.number Card number.
     * @param {HostedFields} [options.hostedFields] The Hosted Fields instance used to collect card data. Required if you are not using the `card` option.
     * @param {callback} [callback] The second argument, <code>data</code>, is a {@link UnionPay#fetchCapabilitiesPayload fetchCapabilitiesPayload}. If no callback is provided, `fetchCapabilities` returns a promise that resolves with a {@link UnionPay#fetchCapabilitiesPayload fetchCapabilitiesPayload}.
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    fetchCapabilities(
        options: { card: { number: string } } | { hostedFields: HostedFields },
        callback: callback<UnionPayFetchCapabilitiesPayload>
    ): void;
    fetchCapabilities(
        options: { card: { number: string } } | { hostedFields: HostedFields }
    ): Promise<UnionPayFetchCapabilitiesPayload>;

    /**
     * Enrolls a UnionPay card. Use {@link UnionPay#fetchCapabilities|fetchCapabilities} to determine if the SMS enrollment process is required.
     * @param {object} options UnionPay enrollment options:
     * @param {object} [options.card] The card to enroll. Required if you are not using the `hostedFields` option.
     * @param {string} options.card.number The card number.
     * @param {string} [options.card.expirationDate] The card's expiration date. May be in the form `MM/YY` or `MM/YYYY`. When defined `expirationMonth` and `expirationYear` are ignored.
     * @param {string} [options.card.expirationMonth] The card's expiration month. This should be used with the `expirationYear` parameter. When `expirationDate` is defined this parameter is ignored.
     * @param {string} [options.card.expirationYear] The card's expiration year. This should be used with the `expirationMonth` parameter. When `expirationDate` is defined this parameter is ignored.
     * @param {HostedFields} [options.hostedFields] The Hosted Fields instance used to collect card data. Required if you are not using the `card` option.
     * @param {object} options.mobile The mobile information collected from the customer.
     * @param {string} options.mobile.countryCode The country code of the customer's mobile phone number.
     * @param {string} options.mobile.number The customer's mobile phone number.
     * @param {callback} [callback] The second argument, <code>data</code>, is a {@link UnionPay~enrollPayload|enrollPayload}. If no callback is provided, `enroll` returns a promise that resolves with {@link UnionPay~enrollPayload|enrollPayload}.
     * @returns {void}
     */
    enroll(
        options: UnionPayEnrollOptions,
        callback: callback<UnionPayEnrollPayload>
    ): void;
    enroll(options: UnionPayEnrollOptions): Promise<UnionPayEnrollPayload>;

    /**
     * Tokenizes a UnionPay card and returns a nonce payload.
     * @public
     * @param {object} options UnionPay tokenization options:
     * @param {object} [options.card] The card to enroll. Required if you are not using the `hostedFields` option.
     * @param {string} options.card.number The card number.
     * @param {string} [options.card.expirationDate] The card's expiration date. May be in the form `MM/YY` or `MM/YYYY`. When defined `expirationMonth` and `expirationYear` are ignored.
     * @param {string} [options.card.expirationMonth] The card's expiration month. This should be used with the `expirationYear` parameter. When `expirationDate` is defined this parameter is ignored.
     * @param {string} [options.card.expirationYear] The card's expiration year. This should be used with the `expirationMonth` parameter. When `expirationDate` is defined this parameter is ignored.
     * @param {string} [options.card.cvv] The card's security number.
     * @param {HostedFields} [options.hostedFields] The Hosted Fields instance used to collect card data. Required if you are not using the `card` option.
     * @param {string} options.enrollmentId The enrollment ID from {@link UnionPay#enroll}.
     * @param {string} [options.smsCode] The SMS code received from the user if {@link UnionPay#enroll} payload have `smsCodeRequired`. if `smsCodeRequired` is false, smsCode should not be passed.
     * @param {callback} [callback] The second argument, <code>data</code>, is a {@link UnionPay~tokenizePayload|tokenizePayload}. If no callback is provided, `tokenize` returns a promise that resolves with a {@link UnionPay~tokenizePayload|tokenizePayload}.
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    tokenize(
        options: UnionPayTokenizeOptions,
        callback: callback<UnionPayTokenizePayload>
    ): void;
    tokenize(
        options: UnionPayTokenizeOptions
    ): Promise<UnionPayTokenizePayload>;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/unionpay.create|create}. This only needs to be called when using UnionPay with Hosted Fields.
     * @param {callback} [callback] Called once teardown is complete. No data is returned if teardown completes successfully.
     * @example
     * unionpayInstance.teardown(function (teardownErr) {
     *   if (teardownErr) {
     *     console.error('Could not tear down UnionPay.');
     *   } else {
     *     console.log('UnionPay has been torn down.');
     *   }
     * });
     * @returns {void}
     */
    teardown(callback: callback<void>): void;
    teardown(): Promise<void>;
}

export default UnionPay;
