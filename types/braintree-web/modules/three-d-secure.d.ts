/** @module braintree-web/three-d-secure */
declare namespace braintree {
  export var threeDSecure: ThreeDSecure;

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
