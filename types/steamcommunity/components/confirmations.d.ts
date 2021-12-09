import { Callback, CallbackError } from '../index';
import CConfirmation = require('../classes/CConfirmation');

export interface Confirmations {
    /**
     * Get a list of your account's currently outstanding confirmations.
     * @param time - The unix timestamp with which the following key was generated
     * @param key - The confirmation key that was generated using the preceeding time and the tag "conf" (this key can be reused)
     * @param callback - Called when the list of confirmations is received
     */
    getConfirmations(time: number, key: string, callback: (
        err: CallbackError,
        confirmations: CConfirmation[],
    ) => any): void;

    /**
     * Get the trade offer ID associated with a particular confirmation
     * @param confID - The ID of the confirmation in question
     * @param time - The unix timestamp with which the following key was generated
     * @param key - The confirmation key that was generated using the preceeding time and the tag "details" (this key can be reused)
     * @param callback
     */
    getConfirmationOfferID(confID: number, time: number, key: string, callback: Callback): void;

    /**
     * Confirm or cancel a given confirmation.
     * @param confID - The ID of the confirmation in question, or an array of confirmation IDs
     * @param confKey - The confirmation key associated with the confirmation in question (or an array of them) (not a TOTP key, the `key` property of CConfirmation)
     * @param time - The unix timestamp with which the following key was generated
     * @param key - The confirmation key that was generated using the preceding time and the tag "allow" (if accepting) or "cancel" (if not accepting)
     * @param accept - true if you want to accept the confirmation, false if you want to cancel it
     * @param callback - Called when the request is complete
     */
    respondToConfirmation(confID: number | number[], confKey: string | string[], time: number, key: string, accept: boolean, callback: Callback): void;

    /**
     * Accept a confirmation for a given object (trade offer or market listing) automatically.
     * @param identitySecret
     * @param objectID
     * @param callback
     */
    acceptConfirmationForObject(identitySecret: Buffer | string | null, objectID: any, callback: Callback): any;

    /**
     * Send a single request to Steam to accept all outstanding confirmations (after loading the list). If one fails, the
     * entire request will fail and there will be no way to know which failed without loading the list again.
     * @param time
     * @param confKey
     * @param allowKey
     * @param callback
     */
    acceptAllConfirmations(time: number, confKey: string, allowKey: string, callback: Callback): any;

    /**
     * Start automatically polling our confirmations for new ones. The `confKeyNeeded` event will be emitted when we need a confirmation key, or `newConfirmation` when we get a new confirmation
     * @param pollInterval - The interval, in milliseconds, at which we will poll for confirmations. This should probably be at least 10,000 to avoid rate-limits.
     * @param [identitySecret=null] - Your identity_secret. If passed, all confirmations will be automatically accepted and nothing will be emitted.
     */
    startConfirmationChecker(pollInterval: number, identitySecret?: Buffer | string | null): void;

    /**
     * Stop automatic polling. If you set your `identitySecret` previously, this will delete it.
     */
    stopConfirmationChecker(): void;

    /**
     * Run the confirmation checker right now instead of waiting for the next poll.
     * Useful to call right after you send/accept an offer that needs confirmation.
     */
    checkConfirmations(): any;
}
