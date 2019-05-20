/** @module braintree-web/three-d-secure */
import Client from '../client';
import { callback, BraintreeError, BinData } from '../common';

/**
 * @property {string} nonce The new payment method nonce produced by the 3D Secure lookup. The original nonce passed into {@link ThreeDSecure#verifyCard|verifyCard} was consumed. This new nonce should be used to transact on your server.
 * @property {object} details Additional account details.
 * @property {string} details.cardType Type of card, ex: Visa, MasterCard.
 * @property {string} details.lastTwo Last two digits of card number.
 * @property {string} description A human-readable description.
 * @property {boolean} liabilityShiftPossible Indicates whether the card was eligible for 3D Secure.
 * @property {boolean} liabilityShifted Indicates whether the liability for fraud has been shifted away from the merchant.
 */
export interface ThreeDSecureAccountDetails {
    cardType: string;
    lastTwo: string;
}

export interface ThreeDSecureVerifyOptions {
    nonce: string;
    amount: number;
    addFrame: (err?: BraintreeError, iframe?: HTMLIFrameElement) => void;
    removeFrame?: () => void;
}

export interface ThreeDSecureVerifyPayload {
    nonce: string;
    details: ThreeDSecureAccountDetails;
    description: string;
    binData: BinData;
    liabilityShiftPossible: boolean;
    liabilityShifted: boolean;
}

export interface ThreeDSecureCreateOptions {
    client?: Client;
    authorization?: string;
}

declare class ThreeDSecure {
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
    static create(options: ThreeDSecureCreateOptions): Promise<ThreeDSecure>;
    static create(
        options: ThreeDSecureCreateOptions,
        callback: callback<ThreeDSecure>
    ): void;

    /**
     * @description The current version of the SDK, i.e. `3.0.2`.
     * @type {string}
     */
    static VERSION: string;

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
    verifyCard(
        options: ThreeDSecureVerifyOptions
    ): Promise<ThreeDSecureVerifyPayload>;
    verifyCard(options: ThreeDSecureVerifyOptions, callback: callback): void;

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
    cancelVerifyCard(callback: callback<ThreeDSecureVerifyPayload>): void;
    cancelVerifyCard(): Promise<ThreeDSecureVerifyPayload>;

    /**
     * Cleanly tear down anything set up by {@link module:braintree-web/three-d-secure.create|create}
     * @public
     * @param {errback} [callback] Called once teardown is complete. No data is returned if teardown completes successfully.
     * @returns {void}
     */
    teardown(callback?: callback): void;
    teardown(): Promise<void>;
}

export default ThreeDSecure;
