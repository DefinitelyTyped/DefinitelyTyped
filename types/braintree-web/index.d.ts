// Type definitions for Braintree-web v3.47.0
// Project: https://github.com/braintree/braintree-web
// Definitions by: Guy Shahine <https://github.com/chlela>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

/**
 * @module braintree-web/american-express
 * @description This module is for use with Amex Express Checkout. To accept American Express cards, use Hosted Fields.
 */
declare namespace braintree {
  export interface AmericanExpress {
    /**
     * @static
     * @function create
     * @param {object} options Creation options:
     * @param {Client} options.client A {@link Client} instance.
     * @param {callback} callback The second argument, `data`, is the {@link AmericanExpress} instance.
     * @returns {void}
     */
    create: (options: { client: Client }, callback: callback) => void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * Gets the rewards balance associated with a Braintree nonce.
     * @public
     * @param {object} options Request options
     * @param {string} options.nonce An existing Braintree nonce.
     * @param {callback} callback The second argument, <code>data</code>, is the returned server data.
     * @returns {void}
     * @example
     * var americanExpress = require('braintree-web/american-express');
     *
     * americanExpress.create({client: clientInstance}, function (createErr, americanExpressInstance) {
     *   var options = {nonce: existingBraintreeNonce};
     *   americanExpressInstance.getRewardsBalance(options, function (getErr, payload) {
     *     if (getErr || payload.error) {
     *       // Handle error
     *       return;
     *     }
     *
     *     console.log('Rewards amount: ' + payload.rewardsAmount);
     *   });
     * });
     */
    getRewardsBalance(options: { nonce: string }, callback: callback): void;

    /**
     * Gets the Express Checkout nonce profile given a nonce from American Express.
     * @public
     * @param {object} options Request options
     * @param {string} options.nonce An existing nonce from American Express (note that this is <em>not</em> a nonce from Braintree).
     * @param {callback} callback The second argument, <code>data</code>, is the returned server data.
     * @returns {void}
     * @example
     * var americanExpress = require('braintree-web/american-express');
     *
     * americanExpress.create({client: clientInstance}, function (createErr, americanExpressInstance) {
     *   var options = {nonce: existingAmericanExpressNonce};
     *   americanExpressInstance.getExpressCheckoutProfile(options, function (getErr, payload) {
     *     if (getErr) {
     *       // Handle error
     *       return;
     *     }
     *
     *     console.log('Number of cards: ' + payload.amexExpressCheckoutCards.length);
     *   });
     * });
     */
    getExpressCheckoutProfile(options: { nonce: string }, callback: callback): void;
  }
}


declare namespace braintree {
  // more info https://developer.apple.com/reference/applepayjs/1916082-applepay_js_data_types/paymentrequest

  //  billingContact
  //  Billing contact information for the user.
  //    countryCode
  //Required.The merchant’s two- letter ISO 3166 country code.
  //    currencyCode
  //  Required.The three- letter ISO 4217 currency code for the payment.
  //    lineItems
  //A set of line items that explain recurring payments and additional charges.
  //    merchantCapabilities
  //  Required.The payment capabilities supported by the merchant.The value must be one or more of supports3DS, supportsEMV, supportsCredit, or supportsDebit.
  //    requiredBillingContactFields
  //  The billing information that is required from the user.The value must be one or more of postalAddress, phone, email, or name.
  //    requiredShippingContactFields
  //  The shipping information that is required from the user.The value must be one or more of postalAddress, phone, email, or name.
  //    shippingContact
  //  Shipping contact information for the user.
  //    shippingMethods
  //A set of available shipping methods.Totals for all shipping methods must be non- negative to pass validation.
  //    shippingType
  //  How the items are to be shipped.This property is optional.If specified, it must be one or more of shipping, delivery, storePickup, or servicePickup.The default value is shipping.
  //    supportedNetworks
  //  Required.The payment networks supported by the merchant.The value must be one or more of amex, discover, interac, masterCard, privateLabel, or visa.
  //    total
  //  Required.The total amount for the payment.The total must be greater than zero and have a label to pass validation.
  interface ApplePayPaymentRequest {
    total: {
      label: string;
      amount: string;
    };
    countryCode: string;
    currencyCode: string;
    supportedNetworks: string[];
    merchantCapabilities: string[];

    billingContact?: any;
    shippingContact?: any;
    shippingMethods?: any;
    shippingType?: any;
    requiredBillingContactFields?: any;
    requiredShippingContactFields?: any;
  }

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
    STATUS_PIN_LOCKOUT,
  }

  interface ApplePayPayload {
    merchantIdentifier: string;
    domainName: string;
    displayName: string;
  }

  export class ApplePaySession {
    constructor(version: number, request: ApplePayPaymentRequest);

    canMakePayments(): boolean;

    canMakePaymentsWithActiveCard(merchantIdentifier: string): boolean;

    completeMerchantValidation(merchantSession: any): void;

    abort(): void;

    begin(): void;

    completePayment(status: ApplePayStatusCodes): void;

    completePaymentMethodSelection(newTotal: any, newLineItems: any): void;

    completeShippingContactSelection(status: ApplePayStatusCodes, newShippingMethods: any, newTotal: any, newLineItems: any): void;

    completeShippingMethodSelection(status: ApplePayStatusCodes, newTotal: any, newLineItems: any): void;

    supportsVersion(version: number): boolean;

    oncancel: (event: any) => void;

    onpaymentauthorized: (event: any) => void;

    onpaymentmethodselected: (event: any) => void;

    onshippingcontactselected: (event: any) => void;

    onshippingmethodselected: (event: any) => void;

    onvalidatemerchant: (event: any) => void;
  }
}

/**
 * @module braintree-web/apple-pay
 * @description Accept Apple Pay on the Web. *This component is currently in beta and is subject to change.*
 */
declare namespace braintree {
  export interface ApplePay {
    /**
     * @static
     * @function create
     * @param {object} options Creation options:
     * @param {Client} options.client A {@link Client} instance.
     * @param {callback} callback The second argument, `data`, is the {@link ApplePay} instance.
     * @returns {void}
     */
    create: (options: { client: Client }, callback: callback) => void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * Merges a payment request with Braintree defaults
     * The following properties are assigned to `paymentRequest` if not already defined
     * - countryCode
     * - currencyCode
     * - merchantCapabilities
     * - supportedNetworks
     * @public
     * @param {external:ApplePayPaymentRequest} paymentRequest The payment request details to apply on top of those from Braintree.
     * @returns {external:ApplePayPaymentRequest} The decorated `paymentRequest`.
     * @example
     * var applePay = require('braintree-web/apple-pay');
     *
     * applePay.create({client: clientInstance}, function (createErr, applePayInstance) {
     *   // ...
     *   var paymentRequest = applePay.createPaymentRequest({
     *    total: {
     *      label: 'My Company',
     *      amount: '19.99'
     *   });
     *
     *   console.log(paymentRequest);
     *   // { total: { }, countryCode: 'US', currencyCode: 'USD', merchantCapabilities: [ ], supportedNetworks: [ ] }
     *
     */
    createPaymentRequest(paymentRequest: ApplePayPaymentRequest): ApplePayPaymentRequest

    /**
     * Validates the merchant website, as required by ApplePaySession before payment can be authorized.
     * @public
     * @param {object} options Options
     * @param {string} options.validationURL The validationURL fram an ApplePayValidateMerchantEvent.
     * @param {string} [options.displayName]
     * - The canonical name for your store.
     * - The system may display this name to the user.
     * - Use a 128-character or less, UTF-8 string.
     * - Do not localize the name.
     * @param {string} [options.merchantIdentifier]
     * Your Apple merchant identifier. This is the Apple Merchant ID created on the Apple Developer Portal.
     * Defaults to the merchant identifier specified in the Braintree Control Panel.
     * You can use this field to override the merchant identifier for this transaction.
     * @param {callback} callback The second argument, <code>data</code>, is the Apple Pay merchant session object.
     * Pass the merchant session to your Apple Pay session's completeMerchantValidation method.
     * @returns {void}
     * @example
     * var applePay = require('braintree-web/apple-pay');
     *
     * applePay.create({client: clientInstance}, function (createErr, applePayInstance) {
     *   var session = new ApplePaySession(1, {
     *     // This should be the payment request object that
     *     // contains the information needed to display the payment sheet.
     *   });
     *
     *   session.onvalidatemerchant = function (event) {
     *     applePay.performValidation({
     *       validationURL: event.validationURL
     *     }, function(err, validationData) {
     *       if (err) {
     *         console.error(err);
     *         session.abort();
     *         return;
     *       }
     *       session.completeMerchantValidation(validationData);
     *     });
     *   };
     * });
     */
    performValidation(options: { validationURL: string, displayName?: string, merchantIdentifier?: string }, callback: callback): void;

    /**
     * Tokenizes an Apple Pay payment.
     * @public
     * @param {object} options Options
     * @param {object} options.token The `payment.token` property of an {@link external:ApplePayPaymentAuthorizedEvent}
     * @param {callback} callback The second argument, <code>data</code>, is the tokenized payload.
     * @returns {void}
     * @example
     * var applePay = require('braintree-web/apple-pay');
     *
     * applePay.create({client: clientInstance}, function (createErr, applePayInstance) {
     *   var session = new ApplePaySession(1, { });
     *
     *   session.onpaymentauthorized = function (event) {
     *     applePay.tokenize({
     *       token: event.payment.token
     *     }, function (err, tokenizedPayload) {
     *       if (err) {
     *         session.completePayment(ApplePaySession.STATUS_FAILURE);
     *         return;
     *       }
     *       session.completePayment(ApplePaySession.STATUS_SUCCESS);
     *
     *       // Send the tokenizedPayload to your server.
     *     });
     *  };
     * });
     */
    tokenize(options: { token: any }, callback: callback): void;
  }
}

/** @module braintree-web/client */
declare namespace braintree {
  /**
 * This object is returned by {@link Client#getConfiguration|getConfiguration}. This information is used extensively by other Braintree modules to properly configure themselves.
 * @property {object} client The braintree-web/client parameters.
 * @property {string} client.authorization A tokenizationKey or clientToken.
 * @property {object} gatewayConfiguration Gateway-supplied configuration.
 * @property {object} analyticsMetadata Analytics-specific data.
 * @property {string} analyticsMetadata.sessionId Uniquely identifies a browsing session.
 * @property {string} analyticsMetadata.sdkVersion The braintree.js version.
 * @property {string} analyticsMetadata.merchantAppId Identifies the merchant's web app.
 */
  interface ClientAnalyticsMetadata {
    sessionId: string;
    sdkVersion: string;
    merchantAppId: string;
  }

  interface Configuration {
    client: Client;
    gatewayConfiguration: any;
    analyticsMetadata: ClientAnalyticsMetadata;
  }

  interface CreditCardInfo {
    number: string;
    cvv: string;
    expirationDate: string;
    billingAddress: {
      postalCode?: string;
    }
  }

  export interface Client {
    authorization: string;

    /**
     * @function
     * @description This function is the entry point for the <code>braintree.client</code> module. It is used for creating {@link Client} instances that service communication to Braintree servers.
     * @param {object} options Object containing all {@link Client} options:
     * @param {string} options.authorization A tokenizationKey or clientToken.
     * @param {callback} callback The second argument, <code>data</code>, is the {@link Client} instance.
     * @returns {void}
     * @example
     * var createClient = require('braintree-web/client').create;
     *
     * createClient({
     *   authorization: CLIENT_AUTHORIZATION
     * }, function (createErr, clientInstance) {
     *   ...
     * });
     * @static
     */
    create(options: { authorization: string }): Promise<Client>;
    create(options: { authorization: string }, callback: callback): void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * Returns a copy of the configuration values.
     * @public
     * @returns {Client~configuration} configuration
     */
    getConfiguration(): Configuration;

    /**
     * Used by other modules to formulate all network requests to the Braintree gateway. It is also capable of being used directly from your own form to tokenize credit card information. However, be sure to satisfy PCI compliance if you use direct card tokenization.
     * @public
     * @param {object} options Request options:
     * @param {string} options.method HTTP method, e.g. "get" or "post"
     * @param {string} options.endpoint Endpoint path. e.g. "payment_methods"
     * @param {object} options.data Data to send with the request
     * @param {number} [options.timeout=60000] Set a timeout (in milliseconds) for the request.
     * @param {callback} callback The second argument, <code>data</code>, is the returned server data.
     * @example
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
     * @returns {void}
     */
    request(options: { method: string, endpoint: string, data: any, timeout?: number }, callback: callback): void;
  }
}

/** @module braintree-web/data-collector */
declare namespace braintree {
  export interface DataCollector {
    /**
     * @static
     * @function create
     * @description Creates a DataCollector instance. Requires advanced fraud protection to be enabled in the Braintree gateway. Contact our [support team](mailto:support@braintreepayments.com) to configure your Kount ID.
     * @param {object} options Creation options:
     * @param {Client} options.client A {@link Client} instance.
     * @param {boolean} [options.kount] If true, Kount fraud data collection is enabled.
     * @param {boolean} [options.paypal] If true, PayPal fraud data collection is enabled.
     * @param {callback} callback The second argument, `data`, is the {@link DataCollector} instance.
     * @returns {void}
     */
    create(options: { client: Client, kount: boolean, paypal: boolean }): Promise<DataCollector>;
    create(options: { client: Client, kount: boolean, paypal: boolean }, callback: callback): void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * @memberof DataCollector
     * @name deviceData
     * @type string
     * @description JSON string to pass with server transactions.
     * @instance
     */
    deviceData: string;

    /**
     * @memberof DataCollector
     * @name teardown
     * @function
     * @description Cleanly remove all event handlers and DOM nodes that were added.
     * @param {callback} [callback] Called once teardown is complete. No data is returned if teardown completes successfully.
     * @instance
     * @returns {void}
     */
    teardown(callback?: callback): void;
  }
}

/** @module braintree-web/google-payment */
declare namespace braintree {
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
    create(options: { client?: Client; authorization?: string; useDeferredClient?: boolean; googlePayVersion?: number; googleMerchantId?: string }): Promise<Venmo>;
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
    }): Promise<any>;

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

interface HostedFieldsFieldMaskInput {
    /**
     * The character to use when masking the input.
     * @default '•'
     */
    character?: string;
    /**
     * Only applicable for the credit card field. Whether or not to show the last 4 digits of the card when masking.
     */
    showLastFour?: boolean;
}

/** @module braintree-web/hosted-fields */
declare namespace braintree {
  /**
   * Fields used in {@link module:braintree-web/hosted-fields~fieldOptions fields options}
   * @typedef {object} field
   * @property {string} selector A CSS selector to find the container where the hosted field will be inserted.
   * @property {string} [placeholder] Will be used as the `placeholder` attribute of the input. If `placeholder` is not natively supported by the browser, it will be polyfilled.
   * @property {string} [type] Will be used as the `type` attribute of the input. To mask `cvv` input, for instance, `type: "password"` can be used.
   * @property {boolean} [formatInput=true] - Enable or disable automatic formatting on this field.
   * @property {object|boolean} [select] If truthy, this field becomes a `<select>` dropdown list. This can only be used for `expirationMonth` and `expirationYear` fields.
   * @property {string[]} [select.options] An array of 12 strings, one per month. This can only be used for the `expirationMonth` field. For example, the array can look like `['01 - January', '02 - February', ...]`.
   * @property {boolean | HostedFieldsFieldMaskInput} [maskInput] Enable or disable input masking when input is not focused. If set to `true` instead of an object, the defaults for the `maskInput` parameters will be used.
   */
  interface HostedFieldsField {
    selector: string;
    placeholder?: string;
    type?: string;
    formatInput?: boolean;
    maskInput?: boolean | HostedFieldsFieldMaskInput;
    select?: boolean | { options: string[] };
    maxCardLength?: number;
    maxlength?: number;
    minlength?: number;
    prefill?: string;
    rejectUnsupportedCards?: boolean;
  }

  /**
 * An object that has {@link module:braintree-web/hosted-fields~field field objects} for each field. Used in {@link module:braintree-web/hosted-fields~create create}.
 * @typedef {object} fieldOptions
 * @property {field} [number] A field for card number.
 * @property {field} [expirationDate] A field for expiration date in `MM/YYYY` format. This should not be used with the `expirationMonth` and `expirationYear` properties.
 * @property {field} [expirationMonth] A field for expiration month in `MM` format. This should be used with the `expirationYear` property.
 * @property {field} [expirationYear] A field for expiration year in `YYYY` format. This should be used with the `expirationMonth` property.
 * @property {field} [cvv] A field for 3 or 4 digit CVV or CID.
 * @property {field} [postalCode] A field for postal or region code.
 */
  interface HostedFieldFieldOptions {
    number: HostedFieldsField;
    expirationDate?: HostedFieldsField;
    expirationMonth?: HostedFieldsField;
    expirationYear?: HostedFieldsField;
    cvv: HostedFieldsField;
    postalCode?: HostedFieldsField;
  }

  /**
   * @description Information about the card type, sent in {@link HostedFields~stateObject|stateObjects}.
   * @property {string} type The code-friendly representation of the card type. It will be one of the following strings:
   * - `american-express`
   * - `diners-club`
   * - `discover`
   * - `jcb`
   * - `maestro`
   * - `master-card`
   * - `unionpay`
   * - `visa`
   * @property {string} niceType The pretty-printed card type. It will be one of the following strings:
   * - `American Express`
   * - `Diners Club`
   * - `Discover`
   * - `JCB`
   * - `Maestro`
   * - `MasterCard`
   * - `UnionPay`
   * - `Visa`
   * @property {object} code
   * This object contains data relevant to the security code requirements of the card brand.
   * For example, on a Visa card there will be a <code>CVV</code> of 3 digits, whereas an
   * American Express card requires a 4-digit <code>CID</code>.
   * @property {string} code.name <code>"CVV"</code> <code>"CID"</code> <code>"CVC"</code>
   * @property {number} code.size The expected length of the security code. Typically, this is 3 or 4.
   */

  interface HostedFieldsCardCode {
    name: string;
    size: number;
  }

  interface HostedFieldsHostedFieldsCard {
    type: string;
    niceType: string;
    code: HostedFieldsCardCode;
  }

  /**
   * @description Data about Hosted Fields fields, sent in {@link HostedFields~stateObject|stateObjects}.
   * @property {HTMLElement} container Reference to the container DOM element on your page associated with the current event.
   * @property {boolean} isFocused Whether or not the input is currently focused.
   * @property {boolean} isEmpty Whether or not the user has entered a value in the input.
   * @property {boolean} isPotentiallyValid
   * A determination based on the future validity of the input value.
   * This is helpful when a user is entering a card number and types <code>"41"</code>.
   * While that value is not valid for submission, it is still possible for
   * it to become a fully qualified entry. However, if the user enters <code>"4x"</code>
   * it is clear that the card number can never become valid and isPotentiallyValid will
   * return false.
   * @property {boolean} isValid Whether or not the value of the associated input is <i>fully</i> qualified for submission.
   */
  interface HostedFieldsHostedFieldsFieldData {
    container: HTMLElement;
    isFocused: boolean;
    isEmpty: boolean;
    isPotentiallyValid: boolean;
    isValid: boolean;
  }

  /**
   * @description The event payload sent from {@link HostedFields#on|on} or {@link HostedFields#getState|getState}.
   * @property {HostedFields~hostedFieldsCard[]} cards
   * This will return an array of potential {@link HostedFields~hostedFieldsCard|cards}. If the card type has been determined, the array will contain only one card.
   * Internally, Hosted Fields uses <a href="https://github.com/braintree/credit-card-type">credit-card-type</a>,
   * an open-source card detection library.
   * @property {string} emittedBy
   * The name of the field associated with an event. This will not be included if returned by {@link HostedFields#getState|getState}. It will be one of the following strings:<br>
   * - `"number"`
   * - `"cvv"`
   * - `"expirationDate"`
   * - `"expirationMonth"`
   * - `"expirationYear"`
   * - `"postalCode"`
   * @property {object} fields
   * @property {?HostedFields~hostedFieldsFieldData} fields.number {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the number field, if it is present.
   * @property {?HostedFields~hostedFieldsFieldData} fields.cvv {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the CVV field, if it is present.
   * @property {?HostedFields~hostedFieldsFieldData} fields.expirationDate {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the expiration date field, if it is present.
   * @property {?HostedFields~hostedFieldsFieldData} fields.expirationMonth {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the expiration month field, if it is present.
   * @property {?HostedFields~hostedFieldsFieldData} fields.expirationYear {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the expiration year field, if it is present.
   * @property {?HostedFields~hostedFieldsFieldData} fields.postalCode {@link HostedFields~hostedFieldsFieldData|hostedFieldsFieldData} for the postal code field, if it is present.
   */
  type HostedFieldsHostedFieldsFieldName = 'number' | 'cvv' | 'expirationDate' | 'expirationMonth' | 'expirationYear' | 'postalCode';

  type HostedFieldsFieldDataFields = {
      [key in HostedFieldsHostedFieldsFieldName]: HostedFieldsHostedFieldsFieldData;
  };

  interface HostedFieldsStateObject {
    cards: HostedFieldsHostedFieldsCard[];
    emittedBy: HostedFieldsHostedFieldsFieldName;
    fields: HostedFieldsFieldDataFields;
  }

  /**
   * @property {string} nonce The payment method nonce.
   * @property {object} details Additional account details.
   * @property {string} details.cardType Type of card, ex: Visa, MasterCard.
   * @property {string} details.lastTwo Last two digits of card number.
   * @property {string} details.lastFour Last four digits of card number.
   * @property {string} description A human-readable description.
   * @property {string} type The payment method type, always `CreditCard`.
   */
  interface HostedFieldsAccountDetails {
    bin: string;
    cardType: string;
    expirationMonth: string;
    expirationYear: string;
    lastTwo: string;
    lastFour: string;
  }

  interface HostedFieldsTokenizePayload {
    nonce: string;
    details: HostedFieldsAccountDetails;
    type: string;
    description: string;
  }

  export interface HostedFields {
    /**
     * @static
     * @function create
     * @param {object} options Creation options:
     * @param {Client} options.client A {@link Client} instance.
     * @param {string} options.authorization A tokenizationKey or clientToken. Can be used in place of `options.client`.
     * @param {fieldOptions} options.fields A {@link module:braintree-web/hosted-fields~fieldOptions set of options for each field}.
     * @param {styleOptions} options.styles {@link module:braintree-web/hosted-fields~styleOptions Styles} applied to each field.
     * @param {callback} callback The second argument, `data`, is the {@link HostedFields} instance.
     * @returns {void}
     * @example
     * braintree.hostedFields.create({
     *   client: clientInstance,
     *   styles: {
     *     'input': {
     *       'font-size': '16pt',
     *       'color': '#3A3A3A'
     *     },
     *     '.number': {
     *       'font-family': 'monospace'
     *     },
     *     '.valid': {
     *       'color': 'green'
     *     }
     *   },
     *   fields: {
     *     number: {
     *       selector: '#card-number'
     *     },
     *     cvv: {
     *       selector: '#cvv'
     *     },
     *     expirationDate: {
     *       selector: '#expiration-date'
     *     }
     *   }
     * }, callback);
     */
     create(options: { client?: Client, authorization?: string, fields: HostedFieldFieldOptions, styles?: any }): Promise<HostedFields>;
     create(options: { client?: Client, authorization?: string, fields: HostedFieldFieldOptions, styles?: any }, callback: callback): void;


    /**
     * An object that represents CSS that will be applied in each hosted field. This object looks similar to CSS. Typically, these styles involve fonts (such as `font-family` or `color`).
     *
     * These are the CSS properties that Hosted Fields supports. Any other CSS should be specified on your page and outside of any Braintree configuration. Trying to set unsupported properties will fail and put a warning in the console.
     *
     * Supported CSS properties are:
     * `color`
     * `font-family`
     * `font-size-adjust`
     * `font-size`
     * `font-stretch`
     * `font-style`
     * `font-variant-alternates`
     * `font-variant-caps`
     * `font-variant-east-asian`
     * `font-variant-ligatures`
     * `font-variant-numeric`
     * `font-variant`
     * `font-weight`
     * `font`
     * `letter-spacing`
     * `line-height`
     * `opacity`
     * `outline`
     * `text-shadow`
     * `transition`
     * `-moz-osx-font-smoothing`
     * `-moz-tap-highlight-color`
     * `-moz-transition`
     * `-webkit-font-smoothing`
     * `-webkit-tap-highlight-color`
     * `-webkit-transition`
     * @typedef {object} styleOptions
     */
    styleOptions: any;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * @name HostedFields#on
     * @function
     * @param {string} event The name of the event to which you are subscribing.
     * @param {function} handler A callback to handle the event.
     * @description Subscribes a handler function to a named event. `event` should be {@link HostedFields#event:blur|blur}, {@link HostedFields#event:focus|focus}, {@link HostedFields#event:empty|empty}, {@link HostedFields#event:notEmpty|notEmpty}, {@link HostedFields#event:cardTypeChange|cardTypeChange}, or {@link HostedFields#event:validityChange|validityChange}. Events will emit a {@link HostedFields~stateObject|stateObject}.
     * @example
     * <caption>Listening to a Hosted Field event, in this case 'focus'</caption>
     * hostedFields.create({ ... }, function (createErr, hostedFieldsInstance) {
     *   hostedFieldsInstance.on('focus', function (event) {
     *     console.log(event.emittedBy, 'has been focused');
     *   });
     * });
     * @returns {void}
     */
    on(event: string, handler: ((event: HostedFieldsStateObject) => void)): void;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/hosted-fields.create|create}
     * @public
     * @param {callback} [callback] Callback executed on completion, containing an error if one occurred. No data is returned if teardown completes successfully.
     * @example
     * hostedFieldsInstance.teardown(function (teardownErr) {
     *   if (teardownErr) {
     *     console.error('Could not tear down Hosted Fields!');
     *   } else {
     *     console.info('Hosted Fields has been torn down!');
     *   }
     * });
     * @returns {void}
     */
    teardown(callback?: callback): void;
    teardown(): Promise<void>;

    /**
     * Tokenizes fields and returns a nonce payload.
     * @public
     * @param {object} [options] All tokenization options for the Hosted Fields component.
     * @param {boolean} [options.vault=false] When true, will vault the tokenized card. Cards will only be vaulted when using a client created with a client token that includes a customer ID.
     * @param {callback} callback The second argument, <code>data</code>, is a {@link HostedFields~tokenizePayload|tokenizePayload}
     * @example <caption>Tokenize a card</caption>
     * hostedFieldsInstance.tokenize(function (tokenizeErr, payload) {
     *   if (tokenizeErr) {
     *     switch (tokenizeErr.code) {
     *       case 'HOSTED_FIELDS_FIELDS_EMPTY':
     *         console.error('All fields are empty! Please fill out the form.');
     *         break;
     *       case 'HOSTED_FIELDS_FIELDS_INVALID':
     *         console.error('Some fields are invalid:', tokenizeErr.details.invalidFieldKeys);
     *         break;
     *       case 'HOSTED_FIELDS_FAILED_TOKENIZATION':
     *         console.error('Tokenization failed server side. Is the card valid?');
     *         break;
     *       case 'HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR':
     *         console.error('Network error occurred when tokenizing.');
     *         break;
     *       default:
     *         console.error('Something bad happened!', tokenizeErr);
     *     }
     *   } else {
     *     console.log('Got nonce:', payload.nonce);
     *   }
     * });
     * @example <caption>Tokenize and vault a card</caption>
     * hostedFieldsInstance.tokenize({
     *   vault: true
     * }, function (tokenizeErr, payload) {
     *   if (tokenizeErr) {
     *     console.error(tokenizeErr);
     *   } else {
     *     console.log('Got nonce:', payload.nonce);
     *   }
     * });
     * @returns {void}
     */
      tokenize(options?: { vault?: boolean, cardholderName?: string, billingAddress?: any }): Promise<HostedFieldsTokenizePayload>;
      tokenize(options: { vault?: boolean, cardholderName?: string, billingAddress?: any }, callback: callback): void;
      tokenize(callback: callback): void;

    /**
     * Add a class to a {@link module:braintree-web/hosted-fields~field field}. Useful for updating field styles when events occur elsewhere in your checkout.
     * @public
     * @param {string} field The field you wish to add a class to. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
     * @param {string} classname The class to be added.
     * @param {callback} [callback] Callback executed on completion, containing an error if one occurred. No data is returned if the class is added successfully.
     *
     * @example
     * hostedFieldsInstance.addClass('number', 'custom-class', function (addClassErr) {
     *   if (addClassErr) {
     *     console.error(addClassErr);
     *   }
     * });
     * @returns {void}
     */
    addClass(field: string, classname: string, callback?: callback): void;

    /**
     * Removes a class to a {@link module:braintree-web/hosted-fields~field field}. Useful for updating field styles when events occur elsewhere in your checkout.
     * @public
     * @param {string} field The field you wish to remove a class from. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
     * @param {string} classname The class to be removed.
     * @param {callback} [callback] Callback executed on completion, containing an error if one occurred. No data is returned if the class is removed successfully.
     *
     * @example
     * hostedFieldsInstance.addClass('number', 'custom-class', function (addClassErr) {
     *   if (addClassErr) {
     *     console.error(addClassErr);
     *     return;
     *   }
     *
     *   // some time later...
     *   hostedFieldsInstance.removeClass('number', 'custom-class');
     * });
     * @returns {void}
     */
    removeClass(field: string, classname: string, callback?: callback): void;

    /**
     * Sets the placeholder of a {@link module:braintree-web/hosted-fields~field field}.
     * @public
     * @param {string} field The field whose placeholder you wish to change. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
     * @param {string} placeholder Will be used as the `placeholder` attribute of the input.
     * @param {callback} [callback] Callback executed on completion, containing an error if one occurred. No data is returned if the placeholder updated successfully.
     *
     * @example
     * hostedFieldsInstance.setPlaceholder('number', '4111 1111 1111 1111', function (placeholderErr) {
     *   if (placeholderErr) {
     *     console.error(placeholderErr);
     *   }
     * });
     *
     * @example <caption>Update CVV field on card type change</caption>
     * hostedFieldsInstance.on('cardTypeChange', function (event) {
     *   // Update the placeholder value if there is only one possible card type
     *   if (event.cards.length === 1) {
     *     hostedFields.setPlaceholder('cvv', event.cards[0].code.name, function (placeholderErr) {
     *       if (placeholderErr) {
     *         // Handle errors, such as invalid field name
     *         console.error(placeholderErr);
     *       }
     *     });
     *   }
     * });
     * @returns {void}
     */
    setPlaceholder(field: string, placeholder: string, callback?: callback): void;

    /**
     * Clear the value of a {@link module:braintree-web/hosted-fields~field field}.
     * @public
     * @param {string} field The field whose placeholder you wish to clear. Must be a valid {@link module:braintree-web/hosted-fields~fieldOptions fieldOption}.
     * @param {callback} [callback] Callback executed on completion, containing an error if one occurred. No data is returned if the field cleared successfully.
     * @returns {void}
     * @example
     * hostedFieldsInstance.clear('number', function (clearErr) {
     *   if (clearErr) {
     *     console.error(clearErr);
     *   }
     * });
     *
     * @example <caption>Clear several fields</caption>
     * hostedFieldsInstance.clear('number');
     * hostedFieldsInstance.clear('cvv');
     * hostedFieldsInstance.clear('expirationDate');
     */
    clear(field: string, callback?: callback): void;

    /**
     * Returns an {@link HostedFields~stateObject|object} that includes the state of all fields and possible card types.
     * @public
     * @returns {object} {@link HostedFields~stateObject|stateObject}
     * @example <caption>Check if all fields are valid</caption>
     * var state = hostedFields.getState();
     *
     * var formValid = Object.keys(state.fields).every(function (key) {
     *   return state.fields[key].isValid;
     * });
     */
    getState(): any;
  }
}

/** @module braintree-web/paypal */
declare namespace braintree {
  /**
   * @property {Function} close A handle to close the PayPal checkout flow.
   */
  interface PayPalTokenizeReturn {
    close: (() => any);
  }

  /**
   * @property {string} nonce The payment method nonce.
   * @property {string} type The payment method type, always `PayPalAccount`.
   * @property {object} details Additional PayPal account details.
   * @property {string} details.email User's email address.
   * @property {string} details.payerId User's payer ID, the unique identifier for each PayPal account.
   * @property {string} details.firstName User's given name.
   * @property {string} details.lastName User's surname.
   * @property {?string} details.countryCode User's 2 character country code.
   * @property {?string} details.phone User's phone number (e.g. 555-867-5309).
   * @property {?object} details.shippingAddress User's shipping address details, only available if shipping address is enabled.
   * @property {string} details.shippingAddress.recipientName Recipient of postage.
   * @property {string} details.shippingAddress.line1 Street number and name.
   * @property {string} details.shippingAddress.line2 Extended address.
   * @property {string} details.shippingAddress.city City or locality.
   * @property {string} details.shippingAddress.state State or region.
   * @property {string} details.shippingAddress.postalCode Postal code.
   * @property {string} details.shippingAddress.countryCode 2 character country code (e.g. US).
   * @property {?object} details.billingAddress User's billing address details.
   * Not available to all merchants; [contact PayPal](https://developers.braintreepayments.com/support/guides/paypal/setup-guide#contacting-paypal-support) for details on eligibility and enabling this feature.
   * To enable this feature, [contact PayPal](https://developers.braintreepayments.com/support/guides/paypal/setup-guide#contacting-paypal-support).
   * Alternatively, see `shippingAddress` above as an available client opt
   * To enable this feature, [contact PayPal](https://developers.braintreepayments.com/support/guides/paypal/setup-guide#contacting-paypal-support).
   * @property {string} details.billingAddress.line1 Street number and name.
   * @property {string} details.billingAddress.line2 Extended address.
   * @property {string} details.billingAddress.city City or locality.
   * @property {string} details.billingAddress.state State or region.
   * @property {string} details.billingAddress.postalCode Postal code.
   * @property {string} details.billingAddress.countryCode 2 character country code (e.g. US).
   */
  interface PayPalShippingAddress {
    recipientName: string;
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    countryCode: string;
  }

  interface PayPalBillingAddress {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postalCode: string;
    countryCode: string;
  }

  interface PayPalAccountDetails {
    email: string;
    payerId: string;
    firstName: string;
    lastName: string;
    countryCode: string;
    phone: string;
    shippingAddress: PayPalShippingAddress;
    billingAddress: PayPalBillingAddress;
  }

  interface PayPalTokenizePayload {
    nonce: string;
    type: string;
    details: PayPalAccountDetails;
  }

  export interface PayPal {
    /**
     * @static
     * @function create
     * @param {object} options Creation options:
     * @param {Client} options.client A {@link Client} instance.
     * @param {callback} callback The second argument, `data`, is the {@link PayPal} instance.
     * @example
     * braintree.paypal.create({
     *   client: clientInstance
     * }, function (createErr, paypalInstance) {
     *   if (createErr) {
     *     if (createErr.code === 'PAYPAL_BROWSER_NOT_SUPPORTED') {
     *       console.error('This browser is not supported.');
     *     } else {
     *       console.error('Error!', createErr);
     *     }
     *   }
     * });
     * @returns {void}
     */
    create(options: { client: Client }): Promise<PayPal>;
    create(options: { client: Client }, callback: callback): void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * Launches the PayPal login flow and returns a nonce payload. Only one PayPal login flow should be active at a time. One way to achieve this is to disable your PayPal button while the flow is open.
     * @public
     * @param {object} options All tokenization options for the PayPal component.
     * @param {string} options.flow Set to 'checkout' for one-time payment flow, or 'vault' for Vault flow. If 'vault' is used with a client token generated with a customer id, the PayPal account will be added to that customer as a saved payment method.
     * @param {string} [options.intent=authorize]
     * Checkout flows only.
     * * `authorize` - Submits the transaction for authorization but not settlement.
     * * `sale` - Payment will be immediately submitted for settlement upon creating a transaction.
     * @param {boolean} [options.offerCredit=false] Offers the customer PayPal Credit if they qualify. Checkout flows only.
     * @param {string} [options.useraction]
     * Changes the call-to-action in the PayPal flow. By default the final button will show the localized
     * word for "Continue" and implies that the final amount billed is not yet known.
     *
     * Setting this option to `commit` changes the button text to "Pay Now" and page text will convey to
     * the user that billing will take place immediately.
     * @param {string|number} [options.amount] The amount of the transaction. Required when using the Checkout flow.
     * @param {string} [options.currency] The currency code of the amount, such as 'USD'. Required when using the Checkout flow.
     * @param {string} [options.displayName] The merchant name displayed inside of the PayPal lightbox; defaults to the company name on your Braintree account
     * @param {string} [options.locale=en_US] Use this option to change the language, links, and terminology used in the PayPal flow. This locale will be used unless the buyer has set a preferred locale for their account. If an unsupported locale is supplied, a fallback locale (determined by buyer preference or browser data) will be used and no error will be thrown.
     *
     * Supported locales are:
     * `da_DK`,
     * `de_DE`,
     * `en_AU`,
     * `en_GB`,
     * `en_US`,
     * `es_ES`,
     * `fr_CA`,
     * `fr_FR`,
     * `id_ID`,
     * `it_IT`,
     * `ja_JP`,
     * `ko_KR`,
     * `nl_NL`,
     * `no_NO`,
     * `pl_PL`,
     * `pt_BR`,
     * `pt_PT`,
     * `ru_RU`,
     * `sv_SE`,
     * `th_TH`,
     * `zh_CN`,
     * `zh_HK`,
     * and `zh_TW`.
     *
     * @param {boolean} [options.enableShippingAddress=false] Returns a shipping address object in {@link PayPal#tokenize}.
     * @param {object} [options.shippingAddressOverride] Allows you to pass a shipping address you have already collected into the PayPal payment flow.
     * @param {string} options.shippingAddressOverride.line1 Street address.
     * @param {string} [options.shippingAddressOverride.line2] Street address (extended).
     * @param {string} options.shippingAddressOverride.city City.
     * @param {string} options.shippingAddressOverride.state State.
     * @param {string} options.shippingAddressOverride.postalCode Postal code.
     * @param {string} options.shippingAddressOverride.countryCode Country.
     * @param {string} [options.shippingAddressOverride.phone] Phone number.
     * @param {string} [options.shippingAddressOverride.recipientName] Recipient's name.
     * @param {boolean} [options.shippingAddressEditable=true] Set to false to disable user editing of the shipping address.
     * @param {string} [options.billingAgreementDescription] Use this option to set the description of the preapproved payment agreement visible to customers in their PayPal profile during Vault flows. Max 255 characters.
     * @param {callback} callback The second argument, <code>data</code>, is a {@link PayPal~tokenizePayload|tokenizePayload}.
     * @example
     * button.addEventListener('click', function () {
     *   // Disable the button so that we don't attempt to open multiple popups.
     *   button.setAttribute('disabled', 'disabled');
     *
     *   // Because PayPal tokenization opens a popup, this must be called
     *   // as a result of a user action, such as a button click.
     *   paypalInstance.tokenize({
     *     flow: 'vault' // Required
     *     // Any other tokenization options
     *   }, function (tokenizeErr, payload) {
     *     button.removeAttribute('disabled');
     *
     *     if (tokenizeErr) {
     *       // Handle tokenization errors or premature flow closure
     *
     *       switch (tokenizeErr.code) {
     *         case 'PAYPAL_POPUP_CLOSED':
     *           console.error('Customer closed PayPal popup.');
     *           break;
     *         case 'PAYPAL_ACCOUNT_TOKENIZATION_FAILED':
     *           console.error('PayPal tokenization failed. See details:', tokenizeErr.details);
     *           break;
     *         case 'PAYPAL_FLOW_FAILED':
     *           console.error('Unable to initialize PayPal flow. Are your options correct?', tokenizeErr.details);
     *           break;
     *         default:
     *           console.error('Error!', tokenizeErr);
     *       }
     *     } else {
     *       // Submit payload.nonce to your server
     *     }
     *   });
     * });
     * @returns {PayPal~tokenizeReturn} A handle to close the PayPal checkout frame.
     */
    tokenize(options: { flow: string, intent?: string, offerCredit?: boolean, useraction?: string, amount?: (string | number), currency?: string, displayName?: string, locale?: string, enableShippingAddress?: boolean, shippingAddressOverride?: PayPalShippingAddress, shippingAddressEditable?: boolean, billingAgreementDescription?: string }): Promise<PayPalTokenizeReturn>;
    tokenize(options: { flow: string, intent?: string, offerCredit?: boolean, useraction?: string, amount?: (string | number), currency?: string, displayName?: string, locale?: string, enableShippingAddress?: boolean, shippingAddressOverride?: PayPalShippingAddress, shippingAddressEditable?: boolean, billingAgreementDescription?: string }, callback: callback): PayPalTokenizeReturn;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/paypal.create|create}.
     * @public
     * @param {callback} [callback] Called once teardown is complete. No data is returned if teardown completes successfully.
     * @returns {void}
     */
    teardown(callback?: () => void): void;
  }
}

/** @module braintree-web/paypal-checkout */
declare namespace braintree {
  enum PayPalCheckoutLineItemKind {
    Debit = 'debit',
    Credit = 'credit'
  }

  interface PayPalCheckoutLineItem {
    /**
     * Number of units of the item purchased. This value must be a whole number and can't be negative or zero.
     *
     * @type {string}
     * @memberof PayPalCheckoutLineItem
     */
    quantity: string;

    /**
     * Per-unit price of the item. Can include up to 2 decimal places. This value can't be negative or zero.
     *
     * @type {string}
     * @memberof PayPalCheckoutLineItem
     */
    unitAmount: string;

    /**
     * Item name. Maximum 127 characters.
     *
     * @type {string}
     * @memberof PayPalCheckoutLineItem
     */
    name: string;

    /**
     * Indicates whether the line item is a debit (sale) or credit (refund) to the customer. Accepted values: `debit` and `credit`.
     *
     * @type {PayPalCheckoutLineItemKind}
     * @memberof PayPalCheckoutLineItem
     */
    kind: PayPalCheckoutLineItemKind;

    /**
     * Per-unit tax price of the item. Can include up to 2 decimal places. This value can't be negative or zero.
     *
     * @type {(string | undefined)}
     * @memberof PayPalCheckoutLineItem
     */
    unitTaxAmount: string | undefined;

    /**
     * Item description. Maximum 127 characters.
     *
     * @type {(string | undefined)}
     * @memberof PayPalCheckoutLineItem
     */
    description: string | undefined;

    /**
     * Product or UPC code for the item. Maximum 127 characters.
     *
     * @type {(string | undefined)}
     * @memberof PayPalCheckoutLineItem
     */
    productCode: string | undefined;

    /**
     * The URL to product information.
     *
     * @type {(string | undefined)}
     * @memberof PayPalCheckoutLineItem
     */
    url: string | undefined;
  }

  enum PayPalCheckoutShippingOptionType {
    /**
     * The payer intends to receive the items at a specified address.
     */
    Shipping = 'SHIPPING',

    /**
     * The payer intends to pick up the items at a specified address. For example, a store address.
     */
    Pickup = 'PICKUP'
  }

  interface PayPalCheckoutCurrencyAmount {
    /**
     * The three-character ISO-4217 currency code. PayPal does not support all currencies.
     *
     * @type {string}
     * @memberof PayPalCheckoutShippingOptionAmount
     */
    currency: string;

    /**
     * The amount the shipping option will cost. Includes the specified number of digits after decimal separator for the ISO-4217 currency code.
     *
     * @type {string}
     * @memberof PayPalCheckoutShippingOptionAmount
     */
    value: string;
  }

  interface PayPalCheckoutShippingOption {
    /**
     * A unique ID that identifies a payer-selected shipping option.
     *
     * @type {string}
     * @memberof PayPalCheckoutShippingOption
     */
    id: string;

    /**
     * A description that the payer sees, which helps them choose an appropriate shipping option. For example, `Free Shipping`, `USPS Priority Shipping`, `Expédition prioritaire USPS`, or `USPS yōuxiān fā huò`. Localize this description to the payer's locale.
     *
     * @type {string}
     * @memberof PayPalCheckoutShippingOption
     */
    label: string;

    /**
     * If `selected = true` is specified as part of the API request it represents the shipping option that the payee/merchant expects to be pre-selected for the payer when they first view the shipping options within the PayPal checkout experience. As part of the response if a shipping option has `selected = true` it represents the shipping option that the payer selected during the course of checkout with PayPal. Only 1 `shippingOption` can be set to `selected = true`.
     *
     * @type {boolean}
     * @memberof PayPalCheckoutShippingOption
     */
    selected: boolean;

    /**
     * The method by which the payer wants to get their items.
     *
     * @type {PayPalCheckoutShippingOptionType}
     * @memberof PayPalCheckoutShippingOption
     */
    type: PayPalCheckoutShippingOptionType;

    /**
     * The shipping cost for the selected option.
     *
     * @type {PayPalCheckoutCurrencyAmount}
     * @memberof PayPalCheckoutShippingOption
     */
    amount: PayPalCheckoutCurrencyAmount;
  }

  interface PayPalCheckoutAddress {
    /**
     * Street number and name.
     *
     * @type {string}
     * @memberof PayPalCheckoutAddress
     */
    line1: string;

    /**
     * Extended address.
     *
     * @type {string}
     * @memberof PayPalCheckoutAddress
     */
    line2?: string;

    /**
     * City or locality.
     *
     * @type {string}
     * @memberof PayPalCheckoutAddress
     */
    city: string;

    /**
     * State or region.
     *
     * @type {string}
     * @memberof PayPalCheckoutAddress
     */
    state: string;

    /**
     * Postal code.
     *
     * @type {string}
     * @memberof PayPalCheckoutAddress
     */
    postalCode: string;

    /**
     * 2 character country code (e.g. US).
     *
     * @type {string}
     * @memberof PayPalCheckoutAddress
     */
    countryCode: string;

    /**
     * Phone number.
     *
     * @type {string}
     * @memberof PayPalCheckoutAddress
     */
    phone?: string;

    /**
     * Recipient of postage.
     *
     * @type {string}
     * @memberof PayPalCheckoutAddress
     */
    recipientName?: string;
  }

  interface PayPalCheckoutCreditFinancingOptions {
    /**
     * This is the estimated total payment amount including interest and fees the user will pay during the lifetime of the loan.
     *
     * @type {PayPalCheckoutCurrencyAmount}
     * @memberof PayPalCheckoutCreditFinancingOptions
     */
    totalCost: PayPalCheckoutCurrencyAmount;

    /**
     * Length of financing terms in months.
     *
     * @type {number}
     * @memberof PayPalCheckoutCreditFinancingOptions
     */
    term: number;

    /**
     * This is the estimated amount per month that the customer will need to pay including fees and interest.
     *
     * @type {PayPalCheckoutCurrencyAmount}
     * @memberof PayPalCheckoutCreditFinancingOptions
     */
    monthlyPayment: PayPalCheckoutCurrencyAmount;

    /**
     * Estimated interest or fees amount the payer will have to pay during the lifetime of the loan.
     *
     * @type {PayPalCheckoutCurrencyAmount}
     * @memberof PayPalCheckoutCreditFinancingOptions
     */
    totalInterest: PayPalCheckoutCurrencyAmount;

    /**
     * Status of whether the customer ultimately was approved for and chose to make the payment using the approved installment credit.
     *
     * @type {boolean}
     * @memberof PayPalCheckoutCreditFinancingOptions
     */
    payerAcceptance: boolean;

    /**
     * Indicates whether the cart amount is editable after payer's acceptance on PayPal side.
     *
     * @type {boolean}
     * @memberof PayPalCheckoutCreditFinancingOptions
     */
    cartAmountImmutable: boolean;
  }

  export interface PayPalCheckoutTokenizePayloadDetails {
    email: string;
    payerId: string;
    firstName: string;
    lastName: string;
    countryCode?: string;
    phone?: string;

    /**
     * User's shipping address details, only available if shipping address is enabled.
     *
     * @type {PayPalCheckoutAddress}
     * @memberof PayPalCheckoutTokenizePayload
     */
    shippingAddress?: PayPalCheckoutAddress;

    /**
     * User's billing address details.
     *
     * @type {PayPalCheckoutAddress}
     * @memberof PayPalCheckoutTokenizePayload
     */
    billingAddress?: PayPalCheckoutAddress;

    /**
     * This property will only be present when the customer pays with PayPal Credit.
     *
     * @type {PayPalCheckoutCreditFinancingOptions}
     * @memberof PayPalCheckoutTokenizePayload
     */
    creditFinancingOffered?: PayPalCheckoutCreditFinancingOptions;
  }

  export interface PayPalCheckoutTokenizePayload {
    /**
     * The payment method nonce.
     *
     * @type {string}
     * @memberof PayPalCheckoutTokenizePayload
     */
    nonce: string;

    /**
     * The payment method type, always `PayPalAccount`.
     *
     * @type {string}
     * @memberof PayPalCheckoutTokenizePayload
     */
    type: string;

    /**
     * Additional PayPal account details.
     *
     * @type {PayPalCheckoutTokenizePayloadDetails}
     * @memberof PayPalCheckoutTokenizePayload
     */
    details: PayPalCheckoutTokenizePayloadDetails;
  }

  export enum PayPalCheckoutFlowType {
    /**
     * Used to store the payment method for future use, ie subscriptions
     */
    Vault = 'vault',

    /**
     * Used for one-time checkout
     */
    Checkout = 'checkout'
  }

  export enum PayPalCheckoutIntent {
    /**
     * Submits the transaction for authorization but not settlement.
     */
    Authorize = 'authorize',

    /**
     * Validates the transaction without an authorization (i.e. without holding funds). Useful for authorizing and capturing funds up to 90 days after the order has been placed. Only available for Checkout flow.
     */
    Order = 'order',

    /**
     * Payment will be immediately submitted for settlement upon creating a transaction. `sale` can be used as an alias for this value.
     */
    Capture = 'capture'
  }

  export interface PayPalCheckout {
    /**
     * @static
     * @function create
     * @description There are two ways to integrate the PayPal Checkout component. See the [PayPal Checkout constructor documentation](PayPalCheckout.html#PayPalCheckout) for more information and examples.
     *
     * @param {object} options Creation options:
     * @param {Client} [options.client] A {@link Client} instance.
     * @param {string} [options.authorization] A tokenizationKey or clientToken. Can be used in place of `options.client`.
     * @param {string} [options.merchantAccountId] A non-default merchant account ID to use for tokenization.
     * @param {callback} [callback] The second argument, `data`, is the {@link PayPalCheckout} instance.
     * @example
     * braintree.client.create({
     *   authorization: 'authorization'
     * }).then(function (clientInstance) {
     *   return braintree.paypalCheckout.create({
     *     client: clientInstance
     *   });
     * }).then(function (paypalCheckoutInstance) {
     *   // set up checkout.js
     * }).catch(function (err) {
     *   console.error('Error!', err);
     * });
     * @returns {(Promise|void)} Returns a promise if no callback is provided.
     */
    create(options: { client?: Client; authorization?: string; merchantAccountId?: string }): Promise<PayPalCheckout>;
    create(options: { client?: Client; authorization?: string; merchantAccountId?: string }, callback?: callback): void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * Creates a PayPal payment ID or billing token using the given options. This is meant to be passed to PayPal's checkout.js library.
     * When a {@link callback} is defined, the function returns undefined and invokes the callback with the id to be used with the checkout.js library. Otherwise, it returns a Promise that resolves with the id.
     * @public
     * @param {object} options All options for the PayPalCheckout component.
     * @param {string} options.flow Set to 'checkout' for one-time payment flow, or 'vault' for Vault flow. If 'vault' is used with a client token generated with a customer ID, the PayPal account will be added to that customer as a saved payment method.
     * @param {string} [options.intent=authorize]
     * * `authorize` - Submits the transaction for authorization but not settlement.
     * * `order` - Validates the transaction without an authorization (i.e. without holding funds). Useful for authorizing and capturing funds up to 90 days after the order has been placed. Only available for Checkout flow.
     * * `capture` - Payment will be immediately submitted for settlement upon creating a transaction. `sale` can be used as an alias for this value.
     * @param {boolean} [options.offerCredit=false] Offers PayPal Credit as the default funding instrument for the transaction. If the customer isn't pre-approved for PayPal Credit, they will be prompted to apply for it.
     * @param {(string|number)} [options.amount] The amount of the transaction. Required when using the Checkout flow.
     * @param {string} [options.currency] The currency code of the amount, such as 'USD'. Required when using the Checkout flow.
     * @param {string} [options.displayName] The merchant name displayed inside of the PayPal lightbox; defaults to the company name on your Braintree account
     * @param {string} [options.locale=en_US] Use this option to change the language, links, and terminology used in the PayPal flow. This locale will be used unless the buyer has set a preferred locale for their account. If an unsupported locale is supplied, a fallback locale (determined by buyer preference or browser data) will be used and no error will be thrown.
     * @param {string} [options.vaultInitiatedCheckoutPaymentMethodToken] Use the payment method nonce representing a PayPal account with a Billing Agreement ID to create the payment and redirect the customer to select a new financial instrument. This option is only applicable to the `checkout` flow.
     *
     * Supported locales are:
     * `da_DK`,
     * `de_DE`,
     * `en_AU`,
     * `en_GB`,
     * `en_US`,
     * `es_ES`,
     * `fr_CA`,
     * `fr_FR`,
     * `id_ID`,
     * `it_IT`,
     * `ja_JP`,
     * `ko_KR`,
     * `nl_NL`,
     * `no_NO`,
     * `pl_PL`,
     * `pt_BR`,
     * `pt_PT`,
     * `ru_RU`,
     * `sv_SE`,
     * `th_TH`,
     * `zh_CN`,
     * `zh_HK`,
     * and `zh_TW`.
     *
     * @param {shippingOption[]} [options.shippingOptions] List of shipping options offered by the payee or merchant to the payer to ship or pick up their items.
     * @param {boolean} [options.enableShippingAddress=false] Returns a shipping address object in {@link PayPal#tokenize}.
     * @param {object} [options.shippingAddressOverride] Allows you to pass a shipping address you have already collected into the PayPal payment flow.
     * @param {string} options.shippingAddressOverride.line1 Street address.
     * @param {string} [options.shippingAddressOverride.line2] Street address (extended).
     * @param {string} options.shippingAddressOverride.city City.
     * @param {string} options.shippingAddressOverride.state State.
     * @param {string} options.shippingAddressOverride.postalCode Postal code.
     * @param {string} options.shippingAddressOverride.countryCode Country.
     * @param {string} [options.shippingAddressOverride.phone] Phone number.
     * @param {string} [options.shippingAddressOverride.recipientName] Recipient's name.
     * @param {boolean} [options.shippingAddressEditable=true] Set to false to disable user editing of the shipping address.
     * @param {string} [options.billingAgreementDescription] Use this option to set the description of the preapproved payment agreement visible to customers in their PayPal profile during Vault flows. Max 255 characters.
     * @param {string} [options.landingPageType] Use this option to specify the PayPal page to display when a user lands on the PayPal site to complete the payment.
     * * `login` - A PayPal account login page is used.
     * * `billing` - A non-PayPal account landing page is used.
    * @property {lineItem[]} [options.lineItems] The line items for this transaction. It can include up to 249 line items.
    * @param {callback} [callback] The second argument is a PayPal `paymentId` or `billingToken` string, depending on whether `options.flow` is `checkout` or `vault`. This is also what is resolved by the promise if no callback is provided.
    * @example
    * // this paypal object is created by checkout.js
    * // see https://github.com/paypal/paypal-checkout
    * paypal.Buttons({
    *   createOrder: function () {
    *     // when createPayment resolves, it is automatically passed to checkout.js
    *     return paypalCheckoutInstance.createPayment({
    *       flow: 'checkout',
    *       amount: '10.00',
    *       currency: 'USD',
    *       intent: 'capture' // this value must either be `capture` or match the intent passed into the PayPal SDK intent query parameter
    *     });
    *   },
    *   // Add other options, e.g. onApproved, onCancel, onError
    * }).render('#paypal-button');
    *
    * @example
    * // shippingOptions are passed to createPayment. You can review the result from onAuthorize to determine which shipping option id was selected.
    * ```javascript
    * braintree.client.create({
    *   authorization: 'authorization'
    * }).then(function (clientInstance) {
    *   return braintree.paypalCheckout.create({
    *     client: clientInstance
    *   });
    * }).then(function (paypalCheckoutInstance) {
    *   return paypal.Button.render({
    *     env: 'production'
    *
    *     payment: function () {
    *       return paypalCheckoutInstance.createPayment({
    *         flow: 'checkout',
    *         amount: '10.00',
    *         currency: 'USD',
    *         shippingOptions: [
    *           {
    *             id: 'UUID-9',
    *             type: 'PICKUP',
    *             label: 'Store Location Five',
    *             selected: true,
    *             amount: {
    *               value: '1.00',
    *               currency: 'USD'
    *             }
    *           },
    *           {
    *             id: 'shipping-speed-fast',
    *             type: 'SHIPPING',
    *             label: 'Fast Shipping',
    *             selected: false,
    *             amount: {
    *               value: '1.00',
    *               currency: 'USD'
    *             }
    *           },
    *           {
    *             id: 'shipping-speed-slow',
    *             type: 'SHIPPING',
    *             label: 'Slow Shipping',
    *             selected: false,
    *             amount: {
    *               value: '1.00',
    *               currency: 'USD'
    *             }
    *           }
    *         ]
    *       });
    *     },
    *
    *     onAuthorize: function (data, actions) {
    *       return paypalCheckoutInstance.tokenizePayment(data).then(function (payload) {
    *         // Submit payload.nonce to your server
    *       });
    *     }
    *   }, '#paypal-button');
    * }).catch(function (err) {
    *  console.error('Error!', err);
    * });
    * ```
    *
    * @returns {(Promise|void)} Returns a promise if no callback is provided.
    */
    createPayment(options: {
      flow: PayPalCheckoutFlowType;
      intent?: PayPalCheckoutIntent;
      offerCredit?: boolean;
      amount?: string | number;
      currency?: string;
      displayName?: string;
      locale?: string;
      vaultInitiatedCheckoutPaymentMethodToken?: string;
      shippingOptions?: PayPalCheckoutShippingOption[];
      enableShippingAddress?: boolean;
      shippingAddressOverride?: PayPalCheckoutAddress;
      shippingAddressEditable?: boolean;
      billingAgreementDescription?: string;
      landingPageType?: string;
      lineItems?: PayPalCheckoutLineItem[];
    }): Promise<void>;

    /**
     * Tokenizes the authorize data from PayPal's checkout.js library when completing a buyer approval flow.
     * When a {@link callback} is defined, invokes the callback with {@link PayPalCheckout~tokenizePayload|tokenizePayload} and returns undefined. Otherwise, returns a Promise that resolves with a {@link PayPalCheckout~tokenizePayload|tokenizePayload}.
     * @public
     * @param {object} tokenizeOptions Tokens and IDs required to tokenize the payment.
     * @param {string} tokenizeOptions.payerId Payer ID returned by PayPal `onApproved` callback.
     * @param {string} [tokenizeOptions.paymentId] Payment ID returned by PayPal `onApproved` callback.
     * @param {string} [tokenizeOptions.billingToken] Billing Token returned by PayPal `onApproved` callback.
     * @param {boolean} [tokenizeOptions.vault=true] Whether or not to vault the resulting PayPal account (if using a client token generated with a customer id and the vault flow).
     * @param {callback} [callback] The second argument, <code>payload</code>, is a {@link PayPalCheckout~tokenizePayload|tokenizePayload}. If no callback is provided, the promise resolves with a {@link PayPalCheckout~tokenizePayload|tokenizePayload}.
     * @example <caption>Opt out of auto-vaulting behavior</caption>
     * // create the paypalCheckoutInstance with a client token generated with a customer id
     * paypal.Buttons({
     *   createBillingAgreement: function () {
     *     return paypalCheckoutInstance.createPayment({
     *       flow: 'vault'
     *       // your other createPayment options here
     *     });
     *   },
     *   onApproved: function (data) {
     *     data.vault = false;
     *
     *     return paypalCheckoutInstance.tokenizePayment(data);
     *   },
     *   // Add other options, e.g. onCancel, onError
     * }).render('#paypal-button');
     *
     * @returns {(Promise|void)} Returns a promise if no callback is provided.
     */
    tokenizePayment(tokenizeOptions: {
      payerId: string;
      paymentId?: string;
      billingToken?: string;
      vault?: boolean;
    }): Promise<PayPalCheckoutTokenizePayload>;
    tokenizePayment(tokenizeOptions: {
      payerId: string;
      paymentId?: string;
      billingToken?: string;
      vault?: boolean;
    }, callback?: callback): void;

    /**
     * Resolves with the PayPal client id to be used when loading the PayPal SDK.
     * @public
     * @param {callback} [callback] The second argument, <code>payload</code>, is a {@link PayPalCheckout~tokenizePayload|tokenizePayload}. If no callback is provided, the promise resolves with a {@link PayPalCheckout~tokenizePayload|tokenizePayload}.
     * @returns {(Promise|void)} Returns a promise if no callback is provided.
     * @example
     * paypalCheckoutInstance.getClientId().then(function (id) {
     *  var script = document.createElement('script');
     *
     *  script.src = 'https://www.paypal.com/sdk/js?client-id=' + id;
     *  script.onload = function () {
     *    // setup the PayPal SDK
     *  };
     *
     *  document.body.appendChild(script);
     * });
     */
    getClientId(): Promise<string>;
    getClientId(callback: (id: string) => void): void;

    /**
     * Initializes the PayPal checkout flow with a payment method nonce that represents a vaulted PayPal account.
     * When a {@link callback} is defined, the function returns undefined and invokes the callback with the id to be used with the checkout.js library. Otherwise, it returns a Promise that resolves with the id.
     * @public
     * @ignore
     * @param {object} options These options are identical to the {@link PayPalCheckout#createPayment|options for creating a payment resource}, except for the following:
     * * `flow` cannot be set (will always be `'checkout'`)
     * * `amount`, `currency`, and `vaultInitiatedCheckoutPaymentMethodToken` are required instead of optional
     * * Additional configuration is available (listed below)
     * @param {boolean} [options.optOutOfModalBackdrop=false] By default, the webpage will darken and become unusable while the PayPal window is open. For full control of the UI, pass `true` for this option.
     * @param {callback} [callback] The second argument, <code>payload</code>, is a {@link PayPalCheckout~tokenizePayload|tokenizePayload}. If no callback is provided, the promise resolves with a {@link PayPalCheckout~tokenizePayload|tokenizePayload}.
     * @example
     * paypalCheckoutInstance.startVaultInitiatedCheckout({
     *   vaultInitiatedCheckoutPaymentMethodToken: 'nonce-that-represents-a-vaulted-paypal-account',
     *   amount: '10.00',
     *   currency: 'USD'
     * }).then(function (payload) {
     *   // send payload.nonce to your server
     * }).catch(function (err) {
     *   if (err.code === 'PAYPAL_POPUP_CLOSED') {
     *     // indicates that customer canceled by
     *     // manually closing the PayPal popup
     *   }
     *
     *   // handle other errors
     * });
     *
     * @returns {(Promise|void)} Returns a promise if no callback is provided.
     */
    startVaultInitiatedCheckout(options: { optOutOfModalBackdrop: boolean }): Promise<void>;
    startVaultInitiatedCheckout(options: { optOutOfModalBackdrop: boolean }, callback: callback): void;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/paypal-checkout.create|create}.
     * @public
     * @param {callback} [callback] Called once teardown is complete. No data is returned if teardown completes successfully.
     * @example
     * paypalCheckoutInstance.teardown();
     * @example <caption>With callback</caption>
     * paypalCheckoutInstance.teardown(function () {
     *   // teardown is complete
     * });
     * @returns {(Promise|void)} Returns a promise if no callback is provided.
     */
    teardown(callback: () => void): void;
    teardown(): Promise<void>;
  }
}

/** @module braintree-web/three-d-secure */
declare namespace braintree {
  /**
   * @property {string} nonce The new payment method nonce produced by the 3D Secure lookup. The original nonce passed into {@link ThreeDSecure#verifyCard|verifyCard} was consumed. This new nonce should be used to transact on your server.
   * @property {object} details Additional account details.
   * @property {string} details.cardType Type of card, ex: Visa, MasterCard.
   * @property {string} details.lastTwo Last two digits of card number.
   * @property {string} description A human-readable description.
   * @property {boolean} liabilityShiftPossible Indicates whether the card was eligible for 3D Secure.
   * @property {boolean} liabilityShifted Indicates whether the liability for fraud has been shifted away from the merchant.
   */
  interface ThreeDSecureAccountDetails {
    cardType: string;
    lastTwo: string;
  }

  interface ThreeDSecureVerifyPayload {
    nonce: string;
    details: ThreeDSecureAccountDetails;
    description: string;
    liabilityShiftPossible: boolean;
    liabilityShifted: boolean;
  }

  export interface ThreeDSecure {
    /**
     * @static
     * @function create
     * @param {object} options Creation options:
     * @param {string} [options.authorization] A tokenizationKey or clientToken. Can be used in place of `options.client`.
     * @param {Version} options.version=1 The version of 3DS to use. Pass in 2 to use 3DS 2.0.
     * @param {Client} options.client A {@link Client} instance.
     * @param {callback} callback The second argument, `data`, is the {@link ThreeDSecure} instance.
     * @returns {void}
     * @example
     * braintree.threeDSecure.create({
     *   client: client
     * }, callback);
     */
    create(options: { client: Client }): Promise<ThreeDSecure>;
    create(options: { client: Client }, callback: callback): void;
    create(options: { authorization?: string, version?: 1 | '1' | 2 | '2' | '2-bootstrap3-modal' | '2-inline-iframe', client?: Client }): Promise<ThreeDSecure>;
    create(options: { authorization?: string, version?: 1 | '1' | 2 | '2' | '2-bootstrap3-modal' | '2-inline-iframe', client?: Client }, callback: callback): void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * @callback ThreeDSecure~addFrameCallback
     * @param {?BraintreeError} [err] `null` or `undefined` if there was no error.
     * @param {HTMLIFrameElement} iframe An iframe element containing the bank's authentication page that you must put on your page.
     * @description The callback used for options.addFrame in {@link ThreeDSecure#verifyCard|verifyCard}.
     * @returns {void}
     */
    addFrameCallback: (err?: BraintreeError, iframe?: HTMLIFrameElement) => void;

    /**
     * @callback ThreeDSecure~removeFrameCallback
     * @description The callback used for options.removeFrame in {@link ThreeDSecure#verifyCard|verifyCard}.
     * @returns {void}
     */
    removeFrameCallback: () => void;

    /**
     * Launch the 3D Secure login flow, returning a nonce payload.
     * @public
     * @param {object} options Options for card verification.
     * @param {string} options.nonce A nonce referencing the card to be verified. For example, this can be a nonce that was returned by Hosted Fields.
     * @param {number} options.amount The amount of the transaction in the current merchant account's currency. For example, if you are running a transaction of $123.45 US dollars, `amount` would be 123.45.
     * @param {errback} options.addFrame This {@link ThreeDSecure~addFrameCallback|addFrameCallback} will be called when the bank frame needs to be added to your page.
     * @param {callback} options.removeFrame This {@link ThreeDSecure~removeFrameCallback|removeFrameCallback} will be called when the bank frame needs to be removed from your page.
     * @param {errback} callback The second argument, <code>data</code>, is a {@link ThreeDSecure~verifyPayload|verifyPayload}
     * @returns {void}
     * @example
     * <caption>Verifying an existing nonce with 3DS</caption>
     * var my3DSContainer;
     *
     * threeDSecure.verifyCard({
     *   nonce: existingNonce,
     *   amount: 123.45,
     *   addFrame: function (err, iframe) {
     *     // Set up your UI and add the iframe.
     *     my3DSContainer = document.createElement('div');
     *     my3DSContainer.appendChild(iframe);
     *     document.body.appendChild(my3DSContainer);
     *   },
     *   removeFrame: function () {
     *     // Remove UI that you added in addFrame.
     *     document.body.removeChild(my3DSContainer);
     *   }
     * }, function (err, payload) {
     *   if (err) {
     *     console.error(err);
     *     return;
     *   }
     *
     *   if (payload.liabilityShifted) {
     *     // Liablity has shifted
     *     submitNonceToServer(payload.nonce);
     *   } else if (payload.liabilityShiftPossible) {
     *     // Liablity may still be shifted
     *     // Decide if you want to submit the nonce
     *   } else {
     *     // Liablity has not shifted and will not shift
     *     // Decide if you want to submit the nonce
     *   }
     * });
     */
    verifyCard(options: { nonce: string, amount: number, addFrame: (err?: BraintreeError, iframe?: HTMLIFrameElement) => void, removeFrame?: () => void }): Promise<ThreeDSecureVerifyPayload>;
    verifyCard(options: { nonce: string, amount: number, addFrame: (err?: BraintreeError, iframe?: HTMLIFrameElement) => void, removeFrame: () => void }, callback: callback): void;

    /**
     * Cancel the 3DS flow and return the verification payload if available.
     * @public
     * @param {errback} callback The second argument is a {@link ThreeDSecure~verifyPayload|verifyPayload}. If there is no verifyPayload (the initial lookup did not complete), an error will be returned.
     * @returns {void}
     * @example
     * threeDSecure.cancelVerifyCard(function (err, verifyPayload) {
     *   if (err) {
     *     // Handle error
     *     console.log(err.message); // No verification payload available
     *     return;
     *   }
     *
     *   verifyPayload.nonce; // The nonce returned from the 3ds lookup call
     *   verifyPayload.liabilityShifted; // boolean
     *   verifyPayload.liabilityShiftPossible; // boolean
     * });
     */
    cancelVerifyCard(callback: callback): void;

    /**
     * Gather the data needed for a 3D Secure lookup call.
     *
     * @public
     * @param {object} options Options for 3D Secure lookup.
     * @param {string} options.nonce The nonce representing the card from a tokenization payload. For example, this can be a {@link HostedFields~tokenizePayload|tokenizePayload} returned by Hosted Fields under `payload.nonce`.
     * @param {string} [options.bin] The numeric Bank Identification Number (bin) of the card from a tokenization payload. For example, this can be a {@link HostedFields~tokenizePayload|tokenizePayload} returned by Hosted Fields under `payload.details.bin`. Though not required to start the verification, it is required to receive a 3DS 2.0 lookup response.
     * @param {callback} [callback] The second argument, <code>data</code>, is a {@link ThreeDSecure~prepareLookupPayload|prepareLookupPayload}. If no callback is provided, it will return a promise that resolves {@link ThreeDSecure~prepareLookupPayload|prepareLookupPayload}.
     * @returns {Promise|void} Returns a promise if no callback is provided.
     * @example
     * <caption>Preparing data for a 3D Secure lookup</caption>
     * threeDSecure.prepareLookup({
     *   nonce: hostedFieldsTokenizationPayload.nonce,
     *   bin: hostedFieldsTokenizationPayload.details.bin
     * }, function (err, payload) {
     *   if (err) {
     *     console.error(err);
     *     return;
     *   }
     *
     *   // send payload to server to do server side lookup
     * });
     */
     prepareLookup(options: {nonce: string, bin: string}): Promise<string>;
     prepareLookup(options: {nonce: string, bin: string}, callback: callback): void;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/three-d-secure.create|create}
     * @public
     * @param {errback} [callback] Called once teardown is complete. No data is returned if teardown completes successfully.
     * @returns {void}
     */
    teardown(callback?: callback): void;
  }
}

/**
 * @module braintree-web/unionpay
 * @description This module allows you to accept UnionPay payments. *It is currently in beta and is subject to change.*
 */
declare namespace braintree {
  /**
   * @property {string} nonce The payment method nonce.
   * @property {string} type Always <code>CreditCard</code>.
   * @property {object} details Additional account details:
   * @property {string} details.cardType Type of card, ex: Visa, MasterCard.
   * @property {string} details.lastTwo Last two digits of card number.
   * @property {string} description A human-readable description.
   */
  interface UnionPayAccountDetails {
    cardType: string;
    lastTwo: string;
    description: string;
  }

  interface UnionPayTokenizePayload {
    nonce: string;
    type: string;
    details: UnionPayAccountDetails;
  }

  /**
 * @property {string} enrollmentId UnionPay enrollment ID. This value should be passed to `tokenize`.
 * @property {boolean} smsCodeRequired UnionPay `smsCodeRequired` flag.
 * </p><b>true</b> - the user will receive an SMS code that needs to be supplied for tokenization.
 * </p><b>false</b> - the card can be immediately tokenized.
 */
  interface UnionPayEnrollPayload {
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

  interface UnionPayProperties {
    supportsTwoStepAuthAndCapture: boolean;
    isSupported: boolean;
  }

  interface UnionPayFetchCapabilitiesPayload {
    isUnionPay: boolean;
    isDebit: boolean;
    unionPay: UnionPayProperties;
  }

  export interface UnionPay {
    /**
     * @static
     * @function create
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
    create: (options: { client: Client }, callback: callback) => void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * Fetches the capabilities of a card, including whether or not the SMS enrollment process is required.
     * @public
     * @param {object} options UnionPay {@link UnionPay#fetchCapabilities fetchCapabilities} options
     * @param {object} [options.card] The card from which to fetch capabilities. Note that this will only have one property, `number`. Required if you are not using the `hostedFields` option.
     * @param {string} options.card.number Card number.
     * @param {HostedFields} [options.hostedFields] The Hosted Fields instance used to collect card data. Required if you are not using the `card` option.
     * @param {callback} callback The second argument, <code>data</code>, is a {@link UnionPay#fetchCapabilitiesPayload fetchCapabilitiesPayload}.
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
     * @returns {void}
     */
    fetchCapabilities(options: { card: any, hostedFields: HostedFields }, callback: callback): void;

    /**
     * Enrolls a UnionPay card. Use {@link UnionPay#fetchCapabilities|fetchCapabilities} to determine if the SMS enrollment process is required.
     * @public
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
     * @param {callback} callback The second argument, <code>data</code>, is a {@link UnionPay~enrollPayload|enrollPayload}.
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
     * @returns {void}
     */
    enroll(options: { card: any, hostedFields: HostedFields, mobile: any }, callback: callback): void;

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
     * @param {callback} callback The second argument, <code>data</code>, is a {@link UnionPay~tokenizePayload|tokenizePayload}.
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
     * @returns {void}
     */
    tokenize(options: { card: any, hostedFields: HostedFields, enrollmentId: string, smsCode: string }, callback: callback): void;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/unionpay.create|create}. This only needs to be called when using UnionPay with Hosted Fields.
     * @public
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
    teardown(callback?: callback): void;
  }

  /**
 * @module braintree-web/us-bank-account
 * @description This module is for accepting payments of US bank accounts.
 */
  export interface USBankAccount {
    /**
     * @static
     * @function create
     * @param {object} options Creation options:
     * @param {Client} options.client A {@link Client} instance.
     * @param {callback} callback The second argument, `data`, is the {@link USBankAccount} instance.
     * @returns {void}
     */
    create: (options: { client: Client }, callback: callback) => void;

    /**
     * @description The current version of the SDK, i.e. `{@pkg version}`.
     * @type {string}
     */
    VERSION: string;

    /**
     * Tokenizes bank information to return a payment method nonce. You can tokenize bank details by providing information like account and routing numbers. You can also tokenize with a bank login UI that prompts the customer to log into their bank account.
     * @public
     * @param {object} options All tokenization options for the US Bank Account component.
     * @param {string} options.mandateText A string for proof of customer authorization. For example, `'I authorize Braintree to debit my bank account on behalf of My Online Store.'`.
     * @param {object} [options.bankDetails] Bank detail information (such as account and routing numbers). `bankDetails` or `bankLogin` option must be provided.
     * @param {string} options.bankDetails.routingNumber The customer's bank routing number, such as `'307075259'`.
     * @param {string} options.bankDetails.accountNumber The customer's bank account number, such as `'999999999'`.
     * @param {string} options.bankDetails.accountType The customer's bank account type. Must be `'checking'` or `'savings'`.
     * @param {string} options.bankDetails.accountHolderName The customer's bank account holder name, such as `'Rosetta Fox'`.
     * @param {object} options.bankDetails.billingAddress The customer's billing address.
     * @param {string} options.bankDetails.billingAddress.streetAddress The street address for the customer's billing address, such as `'123 Fake St'`.
     * @param {string} [options.bankDetails.billingAddress.extendedAddress] The extended street address for the customer's billing address, such as `'Apartment B'`.
     * @param {string} options.bankDetails.billingAddress.locality The locality for the customer's billing address. This is typically a city, such as `'San Francisco'`.
     * @param {string} options.bankDetails.billingAddress.region The region for the customer's billing address. This is typically a state, such as `'CA'`.
     * @param {string} options.bankDetails.billingAddress.postalCode The postal code for the customer's billing address. This is typically a ZIP code, such as `'94119'`.
     * @param {object} [options.bankLogin] Bank login information. `bankLogin` or `bankDetails` option must be provided.
     * @param {string} options.bankLogin.displayName Display name for the bank login UI, such as `'My Store'`.
     * @param {callback} callback The second argument, <code>data</code>, is a {@link USBankAccount~tokenizePayload|tokenizePayload}.
     * @returns {void}
     * @example
     * <caption>Tokenizing raw bank details</caption>
     * submitButton.addEventListener('click', function (event) {
     *   var routingNumberInput = document.querySelector('input#routing-number');
     *   var accountNumberInput = document.querySelector('input#account-number');
     *   var accountHolderNameInput = document.querySelector('input#account-holder-name');
     *   var accountTypeInput = document.querySelector('input[name="account-type"]:checked');
     *   var billingAddressStreetInput = document.querySelector('input#street-address');
     *   var billingAddressExtendedInput = document.querySelector('input#extended-address');
     *   var billingAddressLocalityInput = document.querySelector('input#locality');
     *   var billingAddressRegionSelect = document.querySelector('select#region');
     *   var billingAddressPostalInput = document.querySelector('input#postal-code');
     *
     *   event.preventDefault();
     *
     *   usBankAccountInstance.tokenize({
     *     bankDetails: {
     *       routingNumber: routingNumberInput.value,
     *       accountNumber: accountNumberInput.value,
     *       accountHolderName: accountHolderNameInput.value,
     *       accountType: accountTypeInput.value,
     *       billingAddress: {
     *         streetAddress: billingAddressStreetInput.value,
     *         extendedAddress: billingAddressExtendedInput.value,
     *         locality: billingAddressLocalityInput.value,
     *         region: billingAddressRegionSelect.value,
     *         postalCode: billingAddressPostalInput.value
     *       }
     *     },
     *     mandateText: 'I authorize Braintree to debit my bank account on behalf of My Online Store.'
     *   }, function (tokenizeErr, tokenizedPayload) {
     *     if (tokenizeErr) {
     *       console.error('There was an error tokenizing the bank details.');
     *       return;
     *     }
     *
     *     // Send tokenizePayload.nonce to your server here!
     *   });
     * });
     * @example
     * <caption>Tokenizing with bank login UI</caption>
     * bankLoginButton.addEventListener('click', function (event) {
     *   event.preventDefault();
     *
     *   usBankAccountInstance.tokenize({
     *     bankLogin: {
     *       displayName: 'My Online Store'
     *     },
     *     mandateText: 'I authorize Braintree to debit my bank account on behalf of My Online Store.'
     *   }, function (tokenizeErr, tokenizedPayload) {
     *     if (tokenizeErr) {
     *       console.error('There was an error tokenizing the bank details.');
     *       return;
     *     }
     *
     *     // Send tokenizePayload.nonce to your server here!
     *   });
     * });
     */
    tokenize(options: { mandateText: string, bankDetails: any, bankLogin: any }, callback: callback): void;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/us-bank-account.create|create}.
     * @public
     * @param {callback} [callback] Called once teardown is complete. No data is returned if teardown completes successfully.
     * @returns {void}
     */
    teardown(callback?: callback): void;
  }
}

/** @module braintree-web/venmo */
declare namespace braintree {
  interface VenmoTokenizePayload {
    nonce: string;
    type: string;
    details: { username: string };
  }

  export interface Venmo {
    /**
     * @static
     * @function create
     * @param {object} options Creation options:
     * @param {Client} [options.client] A {@link Client} instance.
     * @param {string} [options.authorization] A tokenizationKey or clientToken. Can be used in place of `options.client`.
     * @param {boolean} [options.allowNewBrowserTab=true] This should be set to false if your payment flow requires returning to the same tab, e.g. single page applications. Doing so causes {@link Venmo#isBrowserSupported|isBrowserSupported} to return true only for mobile web browsers that support returning from the Venmo app to the same tab.
     * @param {boolean} [options.ignoreHistoryChanges=false] When the Venmo app returns to the website, it will modify the hash of the url to include data about the tokenization. By default, the SDK will put the state of the hash back to where it was before the change was made. Pass `true` to handle the hash change instead of the SDK.
     * @param {string} [options.profileId] The Venmo profile ID to be used during payment authorization. Customers will see the business name and logo associated with this Venmo profile, and it will show up in the Venmo app as a "Connected Merchant". Venmo profile IDs can be found in the Braintree Control Panel. Omitting this value will use the default Venmo profile.
     * @param {string} [options.deepLinkReturnUrl] An override for the URL that the Venmo iOS app opens to return from an app switch.
     * @param {callback} [callback] The second argument, `data`, is the {@link Venmo} instance. If no callback is provided, `create` returns a promise that resolves with the {@link Venmo} instance.
     * @example
     * braintree.venmo.create({
     *   client: clientInstance
     * }).then(function (venmoInstance) {
     *   // venmoInstance is ready to be used.
     * }).catch(function (createErr) {
     *   console.error('Error creating Venmo instance', createErr);
     * });
     * @returns {(Promise|void)} Returns the Venmo instance.
     */
    create(options: { client?: Client; authorization?: string; allowNewBrowserTab?: boolean; ignoreHistoryChanges?: boolean; profileId?: string; deepLinkReturnUrl?: string }): Promise<Venmo>;
    create(options: { client?: Client; authorization?: string; allowNewBrowserTab?: boolean; ignoreHistoryChanges?: boolean; profileId?: string; deepLinkReturnUrl?: string }, callback?: callback): void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    VERSION: string;

    /**
     * Returns a boolean indicating whether the current browser supports Venmo as a payment method.
     *
     * If `options.allowNewBrowserTab` is false when calling {@link module:braintree-web/venmo.create|venmo.create}, this method will return true only for browsers known to support returning from the Venmo app to the same browser tab. Currently, this is limited to iOS Safari and Android Chrome.
     * @public
     * @returns {boolean} True if the current browser is supported, false if not.
     */
    isBrowserSupported(): boolean;

    /**
     * Returns a boolean indicating whether a Venmo tokenization result is ready to be processed immediately.
     *
     * This method should be called after initialization to see if the result of Venmo authorization is available. If it returns true, call {@link Venmo#tokenize|tokenize} immediately to process the results.
     *
     * @public
     * @returns {boolean} True if the results of Venmo payment authorization are available and ready to process.
     */
    hasTokenizationResult(): boolean;

    /**
     * Launches the Venmo flow and returns a nonce payload.
     *
     * If {@link Venmo#hasTokenizationResult|hasTokenizationResult} returns true, calling tokenize will immediately process and return the results without initiating the Venmo payment authorization flow.
     *
     * Only one Venmo flow can be active at a time. One way to achieve this is to disable your Venmo button while the flow is open.
     * @public
     * @param {object} [options] Options for tokenization.
     * @param {number} [options.processResultsDelay=500] The amount of time in milliseeconds to delay processing the results. In most cases, this value should be left as the default.
     * @param {callback} [callback] The second argument, <code>data</code>, is a {@link Venmo~tokenizePayload|tokenizePayload}. If no callback is provided, the method will return a Promise that resolves with a {@link Venmo~tokenizePayload|tokenizePayload}.
     * @returns {(Promise|void)} Returns a promise if no callback is provided.
     * @example
     * button.addEventListener('click', function () {
     *   // Disable the button so that we don't attempt to open multiple popups.
     *   button.setAttribute('disabled', 'disabled');
     *
     *   // Because tokenize opens a new window, this must be called
     *   // as a result of a user action, such as a button click.
     *   venmoInstance.tokenize().then(function (payload) {
     *     // Submit payload.nonce to your server
     *     // Use payload.username to get the Venmo username and display any UI
     *   }).catch(function (tokenizeError) {
     *     // Handle flow errors or premature flow closure
     *     switch (tokenizeErr.code) {
     *       case 'VENMO_APP_CANCELED':
     *         console.log('User canceled Venmo flow.');
     *         break;
     *       case 'VENMO_CANCELED':
     *         console.log('User canceled Venmo, or Venmo app is not available.');
     *         break;
     *       default:
     *         console.error('Error!', tokenizeErr);
     *     }
     *   }).then(function () {
     *     button.removeAttribute('disabled');
     *   });
     * });
     */
    tokenize(options?: { processResultsDelay?: number }): Promise<VenmoTokenizePayload>;
    tokenize(options?: { processResultsDelay?: number }, callback?: (error?: BraintreeError, payload?: VenmoTokenizePayload) => void): void;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/venmo.create|create}.
     * @public
     * @param {callback} [callback] Called once teardown is complete. No data is returned if teardown completes successfully.
     * @example
     * venmoInstance.teardown();
     * @example <caption>With callback</caption>
     * venmoInstance.teardown(function () {
     *   // teardown is complete
     * });
     * @returns {(Promise|void)} Returns a promise if no callback is provided.
     */
    teardown(callback?: () => void): void;
    teardown(): Promise<void>;
  }
}

declare namespace braintree {
  export namespace BraintreeError {
    /**
     * Enum for {@link BraintreeError} types.
     * @name BraintreeError.types
     * @enum
     * @readonly
     * @memberof BraintreeError
     * @property {string} CUSTOMER An error caused by the customer.
     * @property {string} MERCHANT An error that is actionable by the merchant.
     * @property {string} NETWORK An error due to a network problem.
     * @property {string} INTERNAL An error caused by Braintree code.
     * @property {string} UNKNOWN An error where the origin is unknown.
     */
    export type Types = "CUSTOMER" | "MERCHANT" | "NETWORK" | "INTERNAL" | "UNKNOWN";
  }

  export interface BraintreeError {
    /**
     * @type {string}
     * @description A code that corresponds to specific errors.
     */
    code: string;

    /**
     * @type {string}
     * @description A short description of the error.
     */
    message: string;

    /**
     * @type {BraintreeError.types}
     * @description The type of error.
     */
    type: BraintreeError.Types;

    /**
     * @type {object=}
     * @description Additional information about the error, such as an underlying network error response.
     */
    details: any;
  }

  /**
   * @global
   * @callback callback
   * @param {?BraintreeError} [err] `null` or `undefined` if there was no error.
   * @param {?any} [data] The successful result of the asynchronous function call (if data exists).
   * @description The Node.js-style callback pattern used throughout the SDK.
   * @returns {void}
   */
  type callback = (err?: BraintreeError, data?: any) => void;
}

/**
 * @module braintree-web
 * @description This is the top-level module exported by the Braintree JavaScript SDK. In a browser environment, this will be the global <code>braintree</code> object. In a CommonJS environment (like Browserify or Webpack), it will be the default export of the <code>braintree-web</code> package. In AMD environments (like RequireJS), it can be `require`d like other modules.
 * @example
 * <caption>CommonJS</caption>
 * var braintree = require('braintree-web');
 *
 * braintree.client.create(...);
 * @example
 * <caption>In the browser</caption>
 * <script src="https://js.braintreegateway.com/web/3.0.2/js/client.min.js"></script>
 * <script>
 *   window.braintree.client.create(...);
 * </script>
 * @example
 * <caption>AMD</caption>
 * // main.js
 * require.config({
 *   paths: {
 *     braintreeClient: 'https://js.braintreegateway.com/web/3.0.2/js/client.min'
 *   }
 * });
 *
 * require(['braintreeClient'], function (braintreeClient) {
 *   braintreeClient.create(...);
 * });
 */
declare namespace braintree {
  /** @type {module:braintree-web/client} */
  export var client: braintree.Client;

  /** @type {module:braintree-web/paypal} */
  export var paypal: braintree.PayPal;

  /** @type {module:braintree-web/hosted-fields} */
  export var hostedFields: braintree.HostedFields;

  /** @type {module:braintree-web/three-d-secure} */
  export var threeDSecure: braintree.ThreeDSecure;

  /** @type {module:braintree-web/data-collector} */
  export var dataCollector: braintree.DataCollector;

  /** @type {module:braintree-web/american-express} */
  export var americanExpress: braintree.AmericanExpress;

  /** @type {module:braintree-web/unionpay} */
  export var unionpay: braintree.UnionPay;

  /** @type {module:braintree-web/apple-pay} */
  export var applePay: braintree.ApplePay;

  /** @type {module:braintree-web/us-bank-account} */
  export var usBankAccount: braintree.USBankAccount;

  /** @type {module:braintree-web/venmo} */
  export var venmo: braintree.Venmo;

  /** @type {module:braintree-web/google-payment} */
  export var googlePayment: braintree.GooglePayment;

  /** @type {module:braintree-web/paypal-checkout} */
  export var paypalCheckout: braintree.PayPalCheckout;

  /**
   * @description The current version of the SDK, i.e. `3.0.2`.
   * @type {string}
   */
  export var VERSION: string;
}

export = braintree;
export as namespace braintree;
