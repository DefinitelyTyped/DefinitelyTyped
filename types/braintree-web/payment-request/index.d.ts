/// <reference lib="dom" />

import Client from '../client';
import { callback, BinData } from '../common';

export interface PaymentRequestCreateOptions {
    client?: Client;
    authorization?: string;
    enabledPaymentMethods?: {
        basicCard?: boolean;
        googlePay?: boolean;
    };
    googlePayVersion: number;
}

/**
 * @property {object} configuration.details The payment details. For details on this object, see [Google's PaymentRequest API documentation](https://developers.google.com/web/fundamentals/discovery-and-monetization/payment-request/deep-dive-into-payment-request#defining_payment_details).
 * @property {array} [configuration.supportedPaymentMethods] The supported payment methods. If not passed in, the supported payment methods from the merchant account that generated the authorization for the client will be used. For details on this array, see [Google's PaymentRequest API documentation](https://developers.google.com/web/fundamentals/discovery-and-monetization/payment-request/deep-dive-into-payment-request#defining_supported_payment_methods).
 * @property {object} [configuration.options] Additional payment request options. For details on this object, see [Google's PaymentRequest API documentation](https://developers.google.com/web/fundamentals/discovery-and-monetization/payment-request/deep-dive-into-payment-request#defining_options_optional).
 */
export interface PaymentRequestConfiguration {
    details: PaymentDetailsInit;
    supportedPaymentMethods?: PaymentMethodData[];
    options?: PaymentOptions;
}

/**
 * @typedef {object} PaymentRequestComponent~shippingEventObject
 * @description The event payload sent from {@link PaymentRequestComponent#on|on}.
 * @property {object} target An object which contains data about the event.
 * @property {function} updateWith A method to call with the updated Payment Request details.
 */
export interface PaymentRequestShippingEventObject {
    target: any;
    updateWith: (details: PaymentDetailsInit) => void;
}

export type PaymentRequestEventName =
    | 'shippingAddressChange'
    | 'shippingOptionChange'
    | 'shippingaddresschange'
    | 'shippingoptionchange';

/**
 * @property {string} nonce The payment method nonce.
 * @property {object} details Additional account details.
 * @property {string} details.bin The BIN number of the card..
 * @property {string} details.cardType Type of card, ex: Visa, MasterCard.
 * @property {string} details.lastFour Last four digits of card number.
 * @property {string} details.lastTwo Last two digits of card number.
 * @property {object} details.rawPaymentResponse The raw payment response from the payment request, with sensitive card details removed.
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
export interface PaymentRequestTokenizePayload {
  nonce: string;
  details: {
    bin: string;
    cardType: string;
    lastFour: string;
    lastTwo: string;
    rawPaymentResponse: any;
  }
  description: string;
  type: 'CreditCard' | 'AndroidPayCard';
  binData: BinData;
}

declare class PaymentRequestInstance {
    /**
     * @param {object} options Creation options:
     * @param {Client} [options.client] A {@link Client} instance.
     * @param {string} [options.authorization] A tokenizationKey or clientToken. Can be used in place of `options.client`.
     * @param {object} [options.enabledPaymentMethods] An object representing which payment methods to display.
     * @param {boolean} [options.enabledPaymentMethods.basicCard=true] Whether or not to display credit card as an option in the Payment Request dialog. If left blank or set to true, credit cards will be displayed in the dialog if the merchant account is set up to process credit cards.
     * @param {boolean} [options.enabledPaymentMethods.googlePay=true] Whether or not to display Google Pay as an option in the Payment Request dialog. If left blank or set to true, Google Pay will be displayed in the dialog if the merchant account is set up to process Google Pay.
     * @param {Number} [options.googlePayVersion=1] Ignored if `options.enabledPaymentMethods.googlePay = false`. If `true`, this option specifies the version of Google Pay to use. Choose either 1 (default) or 2.
     * @param {callback} [callback] The second argument, `data`, is the {@link PaymentRequestComponent} instance. If no callback is provided, `create` returns a promise that resolves with the {@link PaymentRequestComponent} instance.
     * @returns {Promise|void} Returns a promise if no callback is provided.
     * @example
     * if (window.PaymentRequest) {
     *   braintree.paymentRequest.create({
     *     client: clientInstance
     *   }, cb);
     * } else {
     *   // fall back to Hosted Fields if browser does not support Payment Request API
     *   braintree.hostedFields.create(hostedFieldsOptions, cb);
     * }
     */
    static create(
        options: PaymentRequestCreateOptions,
        callback: callback<PaymentRequest>
    ): void;
    static create(
        options: PaymentRequestCreateOptions
    ): Promise<PaymentRequest>;

    static VERSION: string;

    /**
     * Check if the customer can make payments.
     * @param {object} configuration A {@link PaymentRequestComponent~paymentRequestConfiguration|paymentRequestConfiguration}.
     * @param {callback} [callback] Called on completion.
     * @example
     * var paymentDetails = {
     * 	 total: {
     *     label: 'Total',
     *     amount: {
     *       currency: 'USD',
     *       value: '10.00',
     *     }
     *   }
     * };
     *
     * paymentRequestInstance.canMakePayment({
     *   details: paymentDetails
     * }).then(function (result) {
     *   if (result) {
     *     // set up payment request button
     *   }
     * });
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    canMakePayment(
        configuration: PaymentRequestConfiguration,
        callback: callback<boolean>
    ): void;
    canMakePayment(
        configuration: PaymentRequestConfiguration
    ): Promise<boolean>;

    /**
     * Create an object to pass into tokenize to specify a custom configuration. If no overrides are provided, the default configuration will be provided.
     * @param {string} type The supported payment method type. Possible values are `basicCard` and `googlePay`.
     * If no type is provided, the function will throw an error. If the type provided is not an enabled payemnt method for the merchant account , the function will throw an error.
     * @param {object} [overrides] The configuration overrides for the [data property on the supported payment methods objects](https://developers.google.com/web/fundamentals/payments/deep-dive-into-payment-request). If not passed in, the default configuration for the specified type will be provided. If a property is not provided, the value from the default configruation will be used.
     * @example <caption>Getting the default configuration for a specified type</caption>
     * var configuration = paymentRequestInstance.createSupportedPaymentMethodsConfiguration('basicCard');
     *
     * configuration.supportedMethods; // 'basic-card'
     * configuration.data.supportedNetworks; // ['visa', 'mastercard', 'amex'] <- whatever the supported card networks for the merchant account are
     * @example <caption>Specifying overrides</caption>
     * var configuration = paymentRequestInstance.createSupportedPaymentMethodsConfiguration('basicCard', {
     *   supportedNetworks: ['visa'],
     *   supportedTypes: ['credit', 'debit']
     * });
     *
     * configuration.supportedMethods; // 'basic-card'
     * configuration.data.supportedNetworks; // ['visa']
     * configuration.data.supportedTypes; // ['credit', 'debit']
     * @returns {object} Returns a configuration object for use in the tokenize function.
     */
    createSupportedPaymentMethodsConfiguration(
        type: 'basicCard' | 'googlePay',
        overrides?: any
    ): PaymentRequestConfiguration;

    /**
     * @param {string} event The name of the event to which you are subscribing.
     * @param {function} handler A callback to handle the event.
     * @description Subscribes a handler function to a named event. `event` should be {@link PaymentRequestComponent#event:shippingAddressChange|shippingAddressChange} or {@link PaymentRequestComponent#event:shippingOptionChange|shippingOptionChange}. For convenience, you can also listen on `shippingaddresschange` or `shippingoptionchange` to match the event listeners in the [Payment Request API documentation](https://developers.google.com/web/fundamentals/payments/deep-dive-into-payment-request#shipping_in_payment_request_api). Events will emit a {@link PaymentRequestComponent~shippingEventObject|shippingEventObject}.
     * @example
     * <caption>Listening to a Payment Request event, in this case 'shippingAddressChange'</caption>
     * braintree.paymentRequest.create({ ... }, function (createErr, paymentRequestInstance) {
     *   paymentRequestInstance.on('shippingAddressChange', function (event) {
     *     console.log(event.target.shippingAddress);
     *   });
     * });
     * @returns {void}
     */
    on(
        string: PaymentRequestEventName,
        handler: (event: PaymentRequestShippingEventObject) => void
    ): void;

    /**
     * Cleanly remove anything set up by {@link module:braintree-web/payment-request.create|create}.
     * @public
     * @param {callback} [callback] Called on completion.
     * @example
     * paymentRequestInstance.teardown();
     * @example <caption>With callback</caption>
     * paymentRequestInstance.teardown(function () {
     *   // teardown is complete
     * });
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    teardown(callback: callback<void>): void;
    teardown(): Promise<void>;

    /**
     * Tokenizes a Payment Request
     * @param {object} configuration A {@link PaymentRequestConfiguration|paymentRequestConfiguration}.
     * @param {callback} [callback] The second argument, <code>data</code>, is a {@link PaymentRequest~paymentPayload|paymentPayload}. If no callback is provided, `tokenize` returns a function that resolves with a {@link PaymentRequestTokenizePayload|tokenizePayload}.
     * @example
     * paymentRequestInstance.tokenize({
     *   details: {
     *     total: {
     *       label: 'Price',
     *       amount: {
     *         currency: 'USD',
     *         value: '100.00'
     *       }
     *     }
     *   }
     * }).then(function (payload) {
     *   // send payload.nonce to server
     *
     *   // examine the raw response (with card details removed for security) from the payment request
     *   console.log(payload.details.rawPaymentResponse);
     * }).catch(function (err) {
     *   if (err.code === 'PAYMENT_REQUEST_CANCELED') {
     *     // payment request was canceled by user
     *   } else {
     *     // an error occurred while processing
     *   }
     * });
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    tokenize(configuration: PaymentRequestConfiguration, callback: callback<PaymentRequestTokenizePayload>): void;
    tokenize(configuration: PaymentRequestConfiguration): Promise<PaymentRequestTokenizePayload>;
}

export default PaymentRequest;
