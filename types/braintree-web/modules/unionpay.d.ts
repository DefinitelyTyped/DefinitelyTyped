import { callback } from './core';
import { Client } from './client';
import { HostedFields } from './hosted-fields';

export interface UnionPayAccountDetails {
    cardType: string;
    lastTwo: string;
    description: string;
}

export interface UnionPayTokenizePayload {
    nonce: string;
    type: string;
    details: UnionPayAccountDetails;
}

/**
 * </p><b>true</b> - the user will receive an SMS code that needs to be supplied for tokenization.
 * </p><b>false</b> - the card can be immediately tokenized.
 */
export interface UnionPayEnrollPayload {
    enrollmentId: string;
    smsCodeRequired: boolean;
}

export interface UnionPayProperties {
    supportsTwoStepAuthAndCapture: boolean;
    isSupported: boolean;
}

export interface UnionPayFetchCapabilitiesPayload {
    isUnionPay: boolean;
    isDebit: boolean;
    unionPay: UnionPayProperties;
}

export interface UnionPay {
    /**
     * braintree.unionpay.create({ client: clientInstance }, function (createErr, unionpayInstance) {
     *   if (createErr) {
     *     console.error(createErr);
     *     return;
     *   }
     *   // ...
     * });
     */
    create: (options: { client: Client }, callback: callback) => void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     */
    VERSION: string;

    /**
     * Fetches the capabilities of a card, including whether or not the SMS enrollment process is required.
     * @example <caption>With raw card data</caption>
     * unionpayInstance.fetchCapabilities({
     *   card: {
     *     number: '4111111111111111'
     *   }
     * }, function (fetchErr, cardCapabilities) {
     *   if (fetchErr) {
     *     console.error(fetchErr);
     *     return;
     *   }
     *
     *   if (cardCapabilities.isUnionPay) {
     *     if (cardCapabilities.unionPay && !cardCapabilities.unionPay.isSupported) {
     *       // Braintree cannot process this UnionPay card.
     *       // Ask the user for a different card.
     *       return;
     *     }
     *
     *     if (cardCapabilities.isDebit) {
     *       // CVV and expiration date are not required
     *     } else {
     *       // CVV and expiration date are required
     *     }
     *
     *     // Show mobile phone number field for enrollment
     *   }
     * });
     * @example <caption>With Hosted Fields</caption>
     * // Fetch capabilities on `blur` inside of the Hosted Fields `create` callback
     * hostedFieldsInstance.on('blur', function (event) {
     *   // Only attempt to fetch capabilities when a valid card number has been entered
     *   if (event.emittedBy === 'number' && event.fields.number.isValid) {
     *     unionpayInstance.fetchCapabilities({
     *       hostedFields: hostedFieldsInstance
     *     }, function (fetchErr, cardCapabilities) {
     *       if (fetchErr) {
     *         console.error(fetchErr);
     *         return;
     *       }
     *
     *       if (cardCapabilities.isUnionPay) {
     *         if (cardCapabilities.unionPay && !cardCapabilities.unionPay.isSupported) {
     *           // Braintree cannot process this UnionPay card.
     *           // Ask the user for a different card.
     *           return;
     *         }
     *         if (cardCapabilities.isDebit) {
     *           // CVV and expiration date are not required
     *           // Hide the containers with your `cvv` and `expirationDate` fields
     *         } else {
     *           // CVV and expiration date are required
     *         }
     *       } else {
     *         // Not a UnionPay card
     *         // When form is complete, tokenize using your Hosted Fields instance
     *       }
     *
     *       // Show your own mobile country code and phone number inputs for enrollment
     *     });
     *   });
     * });
     */
    fetchCapabilities(options: { card: any; hostedFields: HostedFields }, callback: callback): void;

    /**
     * Enrolls a UnionPay card. Use {@link UnionPay#fetchCapabilities|fetchCapabilities} to determine if the SMS enrollment
     * process is required.
     * @example <caption>With raw card data</caption>
     * unionpayInstance.enroll({
     *   card: {
     *     number: '4111111111111111',
     *     expirationMonth: '12',
     *     expirationYear: '2038'
     *   },
     *   mobile: {
     *     countryCode: '62',
     *     number: '111111111111'
     *   }
     * }, function (enrollErr, response) {
     *   if (enrollErr) {
     *      console.error(enrollErr);
     *      return;
     *   }
     *
     *   if (response.smsCodeRequired) {
     *     // If smsCodeRequired, wait for SMS auth code from customer
     *     // Then use response.enrollmentId during {@link UnionPay#tokenize}
     *   } else {
     *     // SMS code is not required from the user.
     *     // {@link UnionPay#tokenize} can be called immediately
     * });
     * @example <caption>With Hosted Fields</caption>
     * unionpayInstance.enroll({
     *   hostedFields: hostedFields,
     *   mobile: {
     *     countryCode: '62',
     *     number: '111111111111'
     *   }
     * }, function (enrollErr, response) {
     *   if (enrollErr) {
     *     console.error(enrollErr);
     *     return;
     *   }
     *
     *   if (response.smsCodeRequired) {
     *     // If smsCodeRequired, wait for SMS auth code from customer
     *     // Then use response.enrollmentId during {@link UnionPay#tokenize}
     *   } else {
     *     // SMS code is not required from the user.
     *     // {@link UnionPay#tokenize} can be called immediately
     *   }
     * });
     */
    enroll(options: { card: any; hostedFields: HostedFields; mobile: any }, callback: callback): void;

    /**
     * Tokenizes a UnionPay card and returns a nonce payload.
     * @example <caption>With raw card data</caption>
     * unionpayInstance.tokenize({
     *   card: {
     *     number: '4111111111111111',
     *     expirationMonth: '12',
     *     expirationYear: '2038',
     *     cvv: '123'
     *   },
     *   enrollmentId: enrollResponse.enrollmentId, // Returned from enroll
     *   smsCode: '11111' // Received by customer's phone, if SMS enrollment was required. Otherwise it should be omitted
     * }, function (tokenizeErr, response) {
     *   if (tokenizeErr) {
     *     console.error(tokenizeErr);
     *     return;
     *   }
     *
     *   // Send response.nonce to your server
     * });
     * @example <caption>With Hosted Fields</caption>
     * unionpayInstance.tokenize({
     *   hostedFields: hostedFieldsInstance,
     *   enrollmentId: enrollResponse.enrollmentId, // Returned from enroll
     *   smsCode: '11111' // Received by customer's phone, if SMS enrollment was required. Otherwise it should be omitted
     * }, function (tokenizeErr, response) {
     *   if (tokenizeErr) {
     *     console.error(tokenizeErr);
     *     return;
     *   }
     *
     *   // Send response.nonce to your server
     * });
     */
    tokenize(
        options: { card: any; hostedFields: HostedFields; enrollmentId: string; smsCode: string },
        callback: callback,
    ): void;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/unionpay.create|create}.
     * This only needs to be called when using UnionPay with Hosted Fields.
     * @example
     * unionpayInstance.teardown(function (teardownErr) {
     *   if (teardownErr) {
     *     console.error('Could not tear down UnionPay.');
     *   } else {
     *     console.log('UnionPay has been torn down.');
     *   }
     * });
     */
    teardown(callback?: callback): void;
}
