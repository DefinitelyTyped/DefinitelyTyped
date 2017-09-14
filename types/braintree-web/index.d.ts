// Type definitions for Braintree-web v3.6.1
// Project: https://github.com/braintree/braintree-web
// Definitions by: Guy Shahine <https://github.com/chlela>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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
    create: (options: { authorization: string }, callback: callback) => void;

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
    create: (options: { client: Client, kount: boolean, paypal: boolean }, callback: callback) => void;

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
   */
  interface HostedFieldsField {
    selector: string;
    placeholder?: string;
    type?: string;
    formatInput?: boolean;
    select?: boolean | { options: string[] };
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
  interface HostedFieldsFieldDataFields {
    number: HostedFieldsHostedFieldsFieldData;
    cvv: HostedFieldsHostedFieldsFieldData;
    expirationDate: HostedFieldsHostedFieldsFieldData;
    expirationMonth: HostedFieldsHostedFieldsFieldData;
    expirationYear: HostedFieldsHostedFieldsFieldData;
    postalCode: HostedFieldsHostedFieldsFieldData;
  }

  interface HostedFieldsStateObject {
    cards: HostedFieldsHostedFieldsCard[];
    emittedBy: string;
    fields: HostedFieldsFieldDataFields;
  }

  /**
   * @property {string} nonce The payment method nonce.
   * @property {object} details Additional account details.
   * @property {string} details.cardType Type of card, ex: Visa, MasterCard.
   * @property {string} details.lastTwo Last two digits of card number.
   * @property {string} description A human-readable description.
   * @property {string} type The payment method type, always `CreditCard`.
   */
  interface HostedFieldsAccountDetails {
    cardType: string;
    lastTwo: string;
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
    create: (options: { client: Client, fields: HostedFieldFieldOptions, styles: any }, callback: callback) => void;


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
    on(event: string, handler: ((event: any) => any)): void;

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
    tokenize(options?: { vault: boolean }, callback?: callback): void;

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
    create: (options: { client: Client }, callback: callback) => void;

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
     * @param {Client} options.client A {@link Client} instance.
     * @param {callback} callback The second argument, `data`, is the {@link ThreeDSecure} instance.
     * @returns {void}
     * @example
     * braintree.threeDSecure.create({
     *   client: client
     * }, callback);
     */
    create: (options: { client: Client }, callback: callback) => void;

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

  /**
   * @description The current version of the SDK, i.e. `3.0.2`.
   * @type {string}
   */
  export var VERSION: string;
}

export = braintree;
export as namespace braintree;
