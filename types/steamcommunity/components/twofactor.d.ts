import { Callback, CallbackError } from '../index';

export interface TwoFactor {
    /**
     * Starts the process to turn on TOTP for your account. You must have a phone number already linked with and verified on your account.
     *
     * @param callback Called when the request completes.
     */
    enableTwoFactor(callback: (
        err: CallbackError,
        /** The entire response from Steam. */
        response: {
            /** A value from EResult. If this is not OK (1), then the request failed. */
            status: any,
            /** This is your secret that's used for two-factor authentication. */
            shared_secret: any,
            /** This is your secret that's used for confirming trades. */
            identity_secret: any,
            /** You will need this in the future to disable two-factor authentication. */
            revocation_code: any,
        },
    ) => any): void;

    /**
     * Finishes the process of enabling TOTP two-factor authentication for your account. You can use steam-totp in the future when logging on to get a code.
     *
     * @param secret
     * @param activationCode
     * @param callback
     */
    finalizeTwoFactor(secret: Buffer | string, activationCode: any, callback: Callback): void;

    /**
     * Disables two-factor authentication on your account given a revocation code.
     * Unlike the revocation procedure on the support site, this will not invalidate all your account's outstanding Steam Guard authorizations.
     *
     * @param revocationCode Your two-factor revocation code, which has the format Rxxxxx, where x is a number.
     * @param callback Called when the request completes.
     */
    disableTwoFactor(revocationCode: string, callback: Callback): void;
}
