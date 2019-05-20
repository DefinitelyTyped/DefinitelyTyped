import Client from '../client';
import { callback, BinData } from '../common';

/**
 * Masterpass Address object.
 * @typedef {object} Masterpass~Address
 * @property {string} countryCodeAlpha2 The customer's country code.
 * @property {string} extendedAddress The customer's extended address.
 * @property {string} locality The customer's locality.
 * @property {string} postalCode The customer's postal code.
 * @property {string} region The customer's region.
 * @property {string} streetAddress The customer's street address.
 */
interface MasterpassAddress {
  countryCodeAlpha2: string;
  extendedAddress: string;
  locality: string;
  postalCode: string;
  region: string;
  streetAddress: string;
}

/**
 * @property {string} nonce The payment method nonce.
 * @property {string} description The human readable description.
 * @property {string} type The payment method type, always `MasterpassCard`.
 * @property {object} details Additional account details.
 * @property {string} details.cardType Type of card, ex: Visa, MasterCard.
 * @property {string} details.lastFour Last four digits of card number.
 * @property {string} details.lastTwo Last two digits of card number.
 * @property {object} contact The customer's contact information.
 * @property {string} contact.firstName The customer's first name.
 * @property {string} contact.lastName The customer's last name.
 * @property {string} contact.phoneNumber The customer's phone number.
 * @property {string} contact.emailAddress The customer's email address.
 * @property {MasterpassAddress} billingAddress The customer's billing address.
 * @property {MasterpassAddress} shippingAddress The customer's shipping address.
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
interface MasterpassTokenizePayload {
  string: string;
  description: string;
  type: 'MasterpassCard';
  details: {
    cardType: string;
    lastFour: string;
    lastTwo: string;
  }
  contact: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    emailAddress: string;
  }
  billingAddress: MasterpassAddress;
  shippingAddress: MasterpassAddress;
  binData: BinData;
}

/**
* @description All options for initiating the Masterpass payment flow.
* @property {string} currencyCode The currency code to process the payment.
* @property {string} subtotal The amount to authorize for the transaction.
* @property {object} [config] All configuration parameters accepted by Masterpass lightbox, except `function` data type. These options will override the values set by Braintree server. Please see {@link Masterpass Lightbox Parameters|https://developer.mastercard.com/page/masterpass-lightbox-parameters} for more information.
* @property {object} [frameOptions] Used to configure the window that contains the Masterpass login.
* @property {number} [frameOptions.width] Popup width to be used instead of default value (450px).
* @property {number} [frameOptions.height] Popup height to be used instead of default value (660px).
* @property {number} [frameOptions.top] The top position of the popup window to be used instead of default value, that is calculated based on provided height, and parent window size.
* @property {number} [frameOptions.left] The left position to the popup window to be used instead of default value, that is calculated baed on provided width, and parent window size.
*/
export interface MasterpassTokenizeOptions {
  currencyCode: string;
  subtotal: string;
  config?: any;
  frameOptions?: {
    width?: number;
    height?: number;
    top?: number;
    left?: number;
  }
}

declare class Masterpass {
    /**
     * @param {object} options Creation options:
     * @param {Client} [options.client] A {@link Client} instance.
     * @param {string} [options.authorization] A tokenizationKey or clientToken. Can be used in place of `options.client`.
     * @param {callback} [callback] The second argument, `data`, is the {@link Masterpass} instance. If no callback is passed in, the create function returns a promise that resolves the {@link Masterpass} instance.
     * @example
     * braintree.masterpass.create({
     *   client: clientInstance
     * }, function (createErr, masterpassInstance) {
     *   if (createErr) {
     *     if (createErr.code === 'MASTERPASS_BROWSER_NOT_SUPPORTED') {
     *       console.error('This browser is not supported.');
     *     } else {
     *       console.error('Error!', createErr);
     *     }
     *     return;
     *   }
     * });
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    static create(
        options: { client: Client; authorization?: string },
        callback: callback<Masterpass>
    ): void;
    static create(options: {
        client: Client;
        authorization?: string;
    }): Promise<Masterpass>;

    /**
     * @description The current version of the SDK, i.e. `{@pkg version}`.
     */
    static VERSION: string;

    /**
     * @description Returns true if Masterpass supports this browser.
     * @example
     * if (braintree.masterpass.isSupported()) {
     *   // Add Masterpass button to the page
     * } else {
     *   // Hide Masterpass payment option
     * }
     * @returns {Boolean} Returns true if Masterpass supports this browser.
     */
    static isSupported(): boolean;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/masterpass.create|create}.
     * @param {callback} [callback] Called on completion. If no callback is provided, `teardown` returns a promise.
     * @example <caption>With callback</caption>
     * masterpassInstance.teardown(function () {
     *   // teardown is complete
     * });
     * @returns {Promise|void} Returns a promise if no callback is provided.
     */
    teardown(callback: callback<void>): void;
    teardown(): Promise<void>;

    /**
     * Launches the Masterpass flow and returns a nonce payload. Only one Masterpass flow should be active at a time. One way to achieve this is to disable your Masterpass button while the flow is open.
     *
     * Braintree will apply these properties in `options.config`. Merchants should not override these values, except for advanced usage.
     *  - `environment`
     *  - `requestToken`
     *  - `callbackUrl`
     *  - `merchantCheckoutId`
     *  - `allowedCardTypes`
     *  - `version`
     *
     * @param {object} options All options for initiating the Masterpass payment flow.
     * @param {string} options.currencyCode The currency code to process the payment.
     * @param {string} options.subtotal The amount to authorize for the transaction.
     * @param {object} [options.config] All configuration parameters accepted by Masterpass lightbox, except `function` data type. These options will override the values set by Braintree server. Please see {@link Masterpass Lightbox Parameters|https://developer.mastercard.com/page/masterpass-lightbox-parameters} for more information.
     * @param {object} [options.frameOptions] Used to configure the window that contains the Masterpass login.
     * @param {number} [options.frameOptions.width] Popup width to be used instead of default value (450px).
     * @param {number} [options.frameOptions.height] Popup height to be used instead of default value (660px).
     * @param {number} [options.frameOptions.top] The top position of the popup window to be used instead of default value, that is calculated based on provided height, and parent window size.
     * @param {number} [options.frameOptions.left] The left position to the popup window to be used instead of default value, that is calculated baed on provided width, and parent window size.
     * @param {callback} [callback] The second argument, <code>data</code>, is a {@link Masterpass~tokenizePayload|tokenizePayload}. If no callback is provided, the method will return a Promise that resolves with a {@link Masterpass~tokenizePayload|tokenizePayload}.
     * @returns {Promise|void} Returns a promise if no callback is provided.
     * @example
     * button.addEventListener('click', function () {
     *   // Disable the button so that we don't attempt to open multiple popups.
     *   button.setAttribute('disabled', 'disabled');
     *
     *   // Because tokenize opens a new window, this must be called
     *   // as a result of a user action, such as a button click.
     *   masterpassInstance.tokenize({
     *     currencyCode: 'USD',
     *     subtotal: '10.00'
     *   }).then(function (payload) {
     *     button.removeAttribute('disabled');
     *     // Submit payload.nonce to your server
     *   }).catch(function (tokenizeError) {
     *     button.removeAttribute('disabled');
     *     // Handle flow errors or premature flow closure
     *
     *     switch (tokenizeErr.code) {
     *       case 'MASTERPASS_POPUP_CLOSED':
     *         console.error('Customer closed Masterpass popup.');
     *         break;
     *       case 'MASTERPASS_ACCOUNT_TOKENIZATION_FAILED':
     *         console.error('Masterpass tokenization failed. See details:', tokenizeErr.details);
     *         break;
     *       case 'MASTERPASS_FLOW_FAILED':
     *         console.error('Unable to initialize Masterpass flow. Are your options correct?', tokenizeErr.details);
     *         break;
     *       default:
     *         console.error('Error!', tokenizeErr);
     *     }
     *   });
     * });
     */
    tokenize(options: MasterpassTokenizeOptions, callback: callback<MasterpassTokenizePayload>): void;
    tokenize(options: MasterpassTokenizeOptions): Promise<MasterpassTokenizePayload>;
}

export default Masterpass;