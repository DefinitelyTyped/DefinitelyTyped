/** @module braintree-web/paypal */
import Client from '../client';
import { callback } from '../common';

/**
 * @property {Function} close A handle to close the PayPal checkout flow.
 */
export interface PayPalTokenizeReturn {
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
export interface PayPalShippingAddress {
  recipientName: string;
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  countryCode: string;
}

export interface PayPalBillingAddress {
  line1: string;
  line2: string;
  city: string;
  state: string;
  postalCode: string;
  countryCode: string;
}

export interface PayPalAccountDetails {
  email: string;
  payerId: string;
  firstName: string;
  lastName: string;
  countryCode: string;
  phone: string;
  shippingAddress: PayPalShippingAddress;
  billingAddress: PayPalBillingAddress;
}

export interface PayPalTokenizePayload {
  nonce: string;
  type: string;
  details: PayPalAccountDetails;
}

export default interface PayPal {
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