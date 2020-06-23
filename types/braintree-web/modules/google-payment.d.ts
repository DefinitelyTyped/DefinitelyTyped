/// <reference types="googlepay" />

/** @module braintree-web/google-payment */
declare namespace braintree {
  export var googlePayment: GooglePayment;

  export type GooglePaymentTokenizeValues = 'Yes' | 'No' | 'Unknown';

  /**
   * @typedef {object} GooglePayment~tokenizePayload
   * @property {string} nonce The payment method nonce.
   * @property {object} details Additional account details.
   * @property {string} details.cardType Type of card, ex: Visa, MasterCard.
   * @property {string} details.lastFour Last four digits of card number.
   * @property {string} details.lastTwo Last two digits of card number.
   * @property {boolean} details.isNetworkTokenized True if the card is network tokenized.
   * @property {string} details.bin First six digits of card number.
   * @property {string} description A human-readable description.
   * @property {string} type The payment method type, `CreditCard` or `AndroidPayCard`.
   * @property {object} binData Information about the card based on the bin.
   * @property {string} binData.commercial Possible values: 'Yes', 'No', 'Unknown'.
   * @property {string} binData.countryOfIssuance The country of issuance.
   * @property {string} binData.debit Possible values: 'Yes', 'No', 'Unknown'.
   * @property {string} binData.durbinRegulated Possible values: 'Yes', 'No', 'Unknown'.
   * @property {string} binData.healthcare Possible values: 'Yes', 'No', 'Unknown'.
   * @property {string} binData.issuingBank The issuing bank.
   * @property {string} binData.payroll Possible values: 'Yes', 'No', 'Unknown'.
   * @property {string} binData.prepaid Possible values: 'Yes', 'No', 'Unknown'.
   * @property {string} binData.productId The product id.
   */
  export interface GooglePaymentTokenizePayload {
    nonce: string;
    details: {
      cardType: string;
      lastFour: string;
      lastTow: string;
      isNetworkTokenized: boolean;
      bin: string;
    };
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
     * @static
     * @function create
     * @param {object} options Creation options:
     * @param {Client} [options.client] A {@link Client} instance.
     * @param {string} [options.authorization] A tokenizationKey or clientToken. Can be used in place of `options.client`.
     * @param {boolean} [options.useDeferredClient] Used in conjunction with `authorization`, allows the Google Payment instance to be available right away by fetching the client configuration in the background. When this option is used, {@link GooglePayment#createPaymentDataRequest} will return a promise that resolves with the configuration instead of returning synchronously.
     * @param {number} [options.googlePayVersion] The version of the Google Pay API to use. Value of 2 is required to accept parameters documented [by Google](https://developers.google.com/pay/api/web/reference/object). Omit this parameter to use the deprecated Google Pay Version 1.
     * @param {string} [options.googleMerchantId] A Google merchant identifier issued after your website is approved by Google. Required when PaymentsClient is initialized with an environment property of PRODUCTION, but may be omitted in TEST environment.
     * @param {callback} [callback] The second argument, `data`, is the {@link GooglePayment} instance. If no callback is provided, `create` returns a promise that resolves with the {@link GooglePayment} instance.
     * @example <caption>Simple Example</caption>
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
    * @returns {(Promise|void)} Returns a promise if no callback is provided.
    */
    create(options: { client?: Client; authorization?: string; useDeferredClient?: boolean; googlePayVersion?: number; googleMerchantId?: string }): Promise<GooglePayment>;
    create(options: { client?: Client; authorization?: string; useDeferredClient?: boolean; googlePayVersion?: number; googleMerchantId?: string }, callback?: callback): void;

    /**
     * Create a configuration object for use in the `loadPaymentData` method.
     *
     * **Note**: Version 1 of the Google Pay Api is deprecated and will become unsupported in a future version. Until then, version 1 will continue to be used by default, and version 1 schema parameters and overrides will remain functional on existing integrations. However, new integrations and all following examples will be presented in the GooglePay version 2 schema. See [Google Pay's upgrade guide](https://developers.google.com/pay/api/web/guides/resources/update-to-latest-version) to see how to update your integration.
     *
     * If `options.googlePayVersion === 2` was set during the initial {@link module:braintree-web/google-payment.create|create} call, overrides must match the Google Pay v2 schema to be valid.
     *
     * @public
     * @param {object} overrides The supplied parameters for creating the PaymentDataRequest object. Required parameters are:
     *  @param {object} overrides.transactionInfo Object according to the [Google Pay Transaction Info](https://developers.google.com/pay/api/web/reference/object#TransactionInfo) spec.
     *  Optionally, any of the parameters in the [PaymentDataRequest](https://developers.google.com/pay/api/web/reference/object#PaymentDataRequest) parameters can be overridden, but note that it is recommended only to override top level parameters to avoid squashing deeply nested configuration objects. An example can be found below showing how to safely edit these deeply nested objects.
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
     * @returns {object|Promise} Returns a configuration object for Google PaymentDataRequest. If instantiated with `useDeferredClient` and an `authorization` it will return a promise that resolves with the configuration.
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
     * @public
     * @param {object} response The response back from the Google Pay tokenization.
     * @param {callback} [callback] The second argument, <code>data</code>, is a {@link GooglePay~tokenizePayload|tokenizePayload}. If no callback is provided, `parseResponse` returns a promise that resolves with a {@link GooglePayment~tokenizePayload|tokenizePayload}.
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
     * @returns {(Promise|void)} Returns a promise that resolves the parsed response if no callback is provided.
     */
    parseResponse(response: any): Promise<GooglePaymentTokenizePayload>;
    parseResponse(response: any, callback?: callback): void;
  }
}
