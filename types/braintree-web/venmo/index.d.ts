import Client from '../client';
import { callback, BinData } from '../common';

export interface VenmoCreateOptions {
    client?: Client;
    authorization?: string;
    allowNewBrowserTab?: boolean;
    profileId?: string;
    deepLinkReturnUrl?: string;
}

/**
 * Venmo tokenize payload.
 * @property {string} nonce The payment method nonce.
 * @property {string} type The payment method type, always `VenmoAccount`.
 * @property {object} details Additional Venmo account details.
 * @property {string} details.username Username of the Venmo account.
 */
export interface VenmoTokenizePayload {
    nonce: string;
    type: 'VenmoAccount';
    details: {
        username: string;
    };
}

declare class Venmo {
    /**
     * @static
     * @function create
     * @param {object} options Creation options:
     * @param {Client} [options.client] A {@link Client} instance.
     * @param {string} [options.authorization] A tokenizationKey or clientToken. Can be used in place of `options.client`.
     * @param {boolean} [options.allowNewBrowserTab=true] This should be set to false if your payment flow requires returning to the same tab, e.g. single page applications. Doing so causes {@link Venmo#isBrowserSupported|isBrowserSupported} to return true only for mobile web browsers that support returning from the Venmo app to the same tab.
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
     * @returns {Promise|void} Returns the Venmo instance.
     */
    static create(options: VenmoCreateOptions, callback: callback<Venmo>): void;
    static create(options: VenmoCreateOptions): Promise<Venmo>;

    /**
     * Returns a boolean indicating whether the current browser supports Venmo as a payment method.
     *
     * If `options.allowNewBrowserTab` is false when calling {@link module:braintree-web/venmo.create|venmo.create}, this method will return true only for browsers known to support returning from the Venmo app to the same browser tab. Currently, this is limited to iOS Safari and Android Chrome.
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
     * @param {callback} [callback] The second argument, <code>data</code>, is a {@link Venmo~tokenizePayload|tokenizePayload}. If no callback is provided, the method will return a Promise that resolves with a {@link Venmo~tokenizePayload|tokenizePayload}.
     * @returns {Promise|void} Returns a promise if no callback is provided.
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
    tokenize(callback: callback<VenmoTokenizePayload>): void;
    tokenize(): Promise<VenmoTokenizePayload>;
}

export default Venmo;
