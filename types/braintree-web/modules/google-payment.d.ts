/// <reference types="googlepay" />

import { callback } from './core';
import { Client } from './client';

export type GooglePaymentTokenizeValues = 'Yes' | 'No' | 'Unknown';

export interface GooglePaymentDetails {
    cardType: string;
    lastFour: string;
    lastTow: string;
    isNetworkTokenized: boolean;
    bin: string;
}

export interface GooglePaymentTokenizePayload {
    nonce: string;
    details: GooglePaymentDetails;
    description: string;
    type: string;
    binData: {
        commercial: GooglePaymentTokenizeValues;
        countryOfIssuance: string;
        debit: GooglePaymentTokenizeValues;
        durbinRegulated: GooglePaymentTokenizeValues;
        healthcare: GooglePaymentTokenizeValues;
        issuingBank: GooglePaymentTokenizeValues;
        payroll: GooglePaymentTokenizeValues;
        prepaid: GooglePaymentTokenizeValues;
        productId: string;
    };
}

export interface GooglePayment {
    /**
     * // include https://pay.google.com/gp/p/js/pay.js in a script tag
     * // on your page to load the `google.payments.api.PaymentsClient` global object.
     *
     * var paymentButton = document.querySelector('#google-pay-button');
     * var paymentsClient = new google.payments.api.PaymentsClient({
     *   environment: 'TEST' // or 'PRODUCTION'
     * });
     *
     * braintree.client.create({
     *   authorization: 'tokenization-key-or-client-token'
     * }).then(function (clientInstance) {
     *   return braintree.googlePayment.create({
     *     client: clientInstance,
     *      googlePayVersion: 2,
     *      googleMerchantId: 'your-merchant-id-from-google'
     *   });
     * }).then(function (googlePaymentInstance) {
     *   paymentButton.addEventListener('click', function (event) {
     *     var paymentDataRequest;
     *
     *     event.preventDefault();
     *
     *     paymentDataRequest = googlePaymentInstance.createPaymentDataRequest({
     *       transactionInfo: {
     *         currencyCode: 'USD',
     *         totalPriceStatus: 'FINAL',
     *         totalPrice: '100.00'
     *       }
     *     });
     *
     *     paymentsClient.loadPaymentData(paymentDataRequest).then(function (paymentData) {
     *       return googlePaymentInstance.parseResponse(paymentData);
     *     }).then(function (result) {
     *       // send result.nonce to your server
     *     }).catch(function (err) {
     *       // handle err
     *     });
     *   });
     * });
     *
     * @example <caption>Check Browser and Customer Compatibility</caption>
     * var paymentsClient = new google.payments.api.PaymentsClient({
     *   environment: 'TEST' // or 'PRODUCTION'
     * });
     *
     * function setupGooglePayButton(googlePaymentInstance) {
     *   var button = document.createElement('button');
     *
     *   button.id = 'google-pay';
     *   button.appendChild(document.createTextNode('Google Pay'));
     *   button.addEventListener('click', function (event) {
     *     var paymentRequestData;
     *
     *     event.preventDefault();
     *
     *     paymentDataRequest = googlePaymentInstance.createPaymentDataRequest({
     *       transactionInfo: {
     *         currencyCode: 'USD',
     *         totalPriceStatus: 'FINAL',
     *         totalPrice: '100.00' // your amount
     *       }
     *     });
     *
     *     paymentsClient.loadPaymentData(paymentDataRequest).then(function (paymentData) {
     *       return googlePaymentInstance.parseResponse(paymentData);
     *       }).then(function (result) {
     *       // send result.nonce to your server
     *     }).catch(function (err) {
     *       // handle errors
     *     });
     *   });
     *
     *   document.getElementById('container').appendChild(button);
     * }
     *
     * braintree.client.create({
     *   authorization: 'tokenization-key-or-client-token'
     * }).then(function (clientInstance) {
     *   return braintree.googlePayment.create({
     *     client: clientInstance,
     *     googlePayVersion: 2,
     *     googleMerchantId: 'your-merchant-id-from-google'
     *   });
     * }).then(function (googlePaymentInstance) {
     *
     *   return paymentsClient.isReadyToPay({
     *     // see https://developers.google.com/pay/api/web/reference/object#IsReadyToPayRequest for all options
     *     apiVersion: 2,
     *     apiVersionMinor: 0,
     *     allowedPaymentMethods: googlePaymentInstance.createPaymentDataRequest().allowedPaymentMethods,
     *     existingPaymentMethodRequired: true
     *   });
     * }).then(function (response) {
     *   if (response.result) {
     *     setupGooglePayButton(googlePaymentInstance);
     *   }
     * }).catch(function (err) {
     *   // handle setup errors
     * });
     *
     */
    create(options: {
        client?: Client;
        authorization?: string;
        useDeferredClient?: boolean;
        googlePayVersion?: number;
        googleMerchantId?: string;
    }): Promise<GooglePayment>;
    create(
        options: {
            client?: Client;
            authorization?: string;
            useDeferredClient?: boolean;
            googlePayVersion?: number;
            googleMerchantId?: string;
        },
        callback?: callback,
    ): void;

    /**
     * Create a configuration object for use in the `loadPaymentData` method.
     *
     * **Note**: Version 1 of the Google Pay Api is deprecated and will become unsupported in a future version.
     * Until then, version 1 will continue to be used by default, and version 1 schema parameters and overrides will
     * remain functional on existing integrations. However, new integrations and all following examples will be
     * presented in the GooglePay version 2 schema.
     * See [Google Pay's upgrade guide](https://developers.google.com/pay/api/web/guides/resources/update-to-latest-version)
     * to see how to update your integration.
     *
     * If `options.googlePayVersion === 2` was set during the initial {@link module:braintree-web/google-payment.create|create} call,
     * overrides must match the Google Pay v2 schema to be valid.
     * Optionally, any of the parameters in the [PaymentDataRequest](https://developers.google.com/pay/api/web/reference/object#PaymentDataRequest)
     * parameters can be overridden, but note that it is recommended only to override top level parameters to avoid
     * squashing deeply nested configuration objects.
     * An example can be found below showing how to safely edit these deeply nested objects.
     * @example
     * var paymentDataRequest = googlePaymentInstance.createPaymentDataRequest({
     *   merchantInfo: {
     *     merchantId: 'my-merchant-id-from-google'
     *   },
     *   transactionInfo: {
     *     currencyCode: 'USD',
     *     totalPriceStatus: 'FINAL',
     *     totalPrice: '100.00'
     *   }
     * });
     *
     * // Update card payment methods to require billing address
     * var cardPaymentMethod = paymentDataRequest.allowedPaymentMethods;
     * cardPaymentMethod.parameters.billingAddressRequired = true;
     * cardPaymentMethod.parameters.billingAddressParameters = {
     *   format: 'FULL',
     *   phoneNumberRequired: true
     * };
     *
     * var paymentsClient = new google.payments.api.PaymentsClient({
     *   environment: 'TEST' // or 'PRODUCTION'
     * })
     *
     * paymentsClient.loadPaymentData(paymentDataRequest).then(function (response) {
     *   // handle response with googlePaymentInstance.parseResponse
     *   // (see below)
     * });
     * @example <caption>With deferred client</caption>
     * googlePaymentInstance.createPaymentDataRequest({
     *   merchantInfo: {
     *     merchantId: 'my-merchant-id-from-google'
     *   },
     *   transactionInfo: {
     *     currencyCode: 'USD',
     *     totalPriceStatus: 'FINAL',
     *     totalPrice: '100.00'
     *   }
     * }).then(function (paymentDataRequest) {
     *   // Update card payment methods to require billing address
     *   var cardPaymentMethod = paymentDataRequest.allowedPaymentMethods;
     *   cardPaymentMethod.parameters.billingAddressRequired = true;
     *   cardPaymentMethod.parameters.billingAddressParameters = {
     *     format: 'FULL',
     *     phoneNumberRequired: true
     *   };
     *
     *   var paymentsClient = new google.payments.api.PaymentsClient({
     *     environment: 'TEST' // or 'PRODUCTION'
     *   })
     *
     *   return paymentsClient.loadPaymentData(paymentDataRequest);
     * }).then(function (response) {
     *   // handle response with googlePaymentInstance.parseResponse
     *   // (see below)
     * });
     */
    createPaymentDataRequest(overrides?: {
        emailRequired?: boolean;
        merchantInfo?: {
            merchantId: string;
        };
        transactionInfo: {
            currencyCode: string;
            totalPriceStatus: string;
            totalPrice: string;
        };
    }): Promise<google.payments.api.PaymentDataRequest>;

    /**
     * Parse the response from the tokenization.
     * @example with callback
     * var paymentsClient = new google.payments.api.PaymentsClient({
     *   environment: 'TEST' // or 'PRODUCTION'
     * })
     *
     * paymentsClient.loadPaymentData(paymentDataRequestFromCreatePaymentDataRequest).then(function (response) {
     *   googlePaymentInstance.parseResponse(response, function (err, data) {
     *     if (err) {
     *       // handle errors
     *     }
     *     // send parsedResponse.nonce to your server
     *   });
     * });
     * @example with promise
     * var paymentsClient = new google.payments.api.PaymentsClient({
     *   environment: 'TEST' // or 'PRODUCTION'
     * })
     *
     * paymentsClient.loadPaymentData(paymentDataRequestFromCreatePaymentDataRequest).then(function (response) {
     *   return googlePaymentInstance.parseResponse(response);
     * }).then(function (parsedResponse) {
     *   // send parsedResponse.nonce to your server
     * }).catch(function (err) {
     *   // handle errors
     * });
     */
    parseResponse(response: any): Promise<GooglePaymentTokenizePayload>;
    parseResponse(response: any, callback?: callback): void;
}
