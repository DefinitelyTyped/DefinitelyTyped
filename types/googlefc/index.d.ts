/**
 * [The Funding Choices API](https://developers.google.com/funding-choices/fc-api-docs) provides a library to interact with the Funding Choices tool.
 * The API has general functionality, but also functionality specific to consent gathering. It can:
 *
 * - suppress the Funding Choices message for any given user
 * - query the ad blocking status of a user
 * - allow a user to revoke consent (if applicable)
 *
 * You can also use Funding Choices to gather user consent using some industry standard protocols:
 *
 * - GDPR consent using the IAB TCF v2 spec
 * - CCPA opt-out using the IAB CCPA spec
 *
 * In these cases, the consent status is communicated by way of those APIs.
 *
 * The Funding Choices tag is smart and dynamic, and loads the appropriate consent framework as needed.
 * This means that you won't need to re-tag every time a new regulation or spec is released.
 *
 * `googlefc` is the global namespace that the Funding Choices tag uses for its API.
 */
declare namespace googlefc {
    /**
     * A function that determines whether to proceed with Funding Choices messaging. This functionality is supported for all message types.
     */
    let controlledMessagingFunction: undefined | ((message: { proceed(shouldProceed: boolean): void }) => any);

    type CallbackQueueType = "CONSENT_DATA_READY" | "AD_BLOCK_DATA_READY" | "INITIAL_CCPA_DATA_READY";

    type CallbackQueueArray = Array<(() => any) | Partial<Record<CallbackQueueType, () => any>>>;

    /**
     * Reference to the callback queue for asynchronous execution of consent and ad blocking related queries.
     */
    const callbackQueue: CallbackQueueArray;

    /**
     * An enum to represent the user's ad blocker state.
     */
    const AdBlockerStatusEnum: {
        /** Something failed, in an unknown state. */
        UNKNOWN: 0;
        /** The user was running an extension level ad blocker. */
        EXTENSION_LEVEL_AD_BLOCKER: 1;
        /** The user was running a network level ad blocker. */
        NETWORK_LEVEL_AD_BLOCKER: 2;
        /** The user was not blocking ads. */
        NO_AD_BLOCKER: 3;
    };

    /**
     * An enum to represent the user's allow-ads state.
     */
    const AllowAdsStatusEnum: {
        /** Something failed, in an unknown state. */
        UNKNOWN: 0;
        /**
         * User is currently using an ad blocker, was never using an ad blocker, or
         * allowed ads, but not because they saw the Funding Choices messaging.
         */
        ADS_NOT_ALLOWED: 1;
        /** User is no longer using an ad blocker after seeing the ad blocking message. */
        ADS_ALLOWED: 2;
    };

    /**
     * Clears the consent record and reloads the googlefc script to show the consent message applicable to the user.
     */
    function showRevocationMessage(): void;

    /**
     * Returns a value in the AdBlockerStatusEnum depending on the ad blocking status of the user. The key that should be specified for this function is AD_BLOCK_DATA_READY.
     */
    function getAdBlockerStatus(): number;

    /**
     * Returns a value in the AllowAdsStatusEnum depending on the allow-ads status of the user. The key that should be specified for this function is AD_BLOCK_DATA_READY.
     */
    function getAllowAdsStatus(): number;

    namespace ccpa {
        /**
         * An enum to represent the user initial CCPA status.
         */
        const InitialCcpaStatusEnum: {
            /** Something failed, in an unknown state. */
            UNKNOWN: 0;
            /** CCPA does not apply to this user. */
            CCPA_DOES_NOT_APPLY: 1;
            /** CPPA applies to this user, and the user has not opted out yet. */
            NOT_OPTED_OUT: 2;
            /** CPPA applies to this user, and the user has opted out. */
            OPTED_OUT: 3;
        };

        /**
         * A boolean which can be set to true to use a custom Do Not Sell link.
         */
        let overrideDnsLink: boolean;

        /**
         * Returns a value in the InitialCcpaStatusEnum depending on the CCPA status of the user.
         * The key that should be specified for this function is INITIAL_CCPA_DATA_READY.
         * Note that any subsequent request for CCPA data should be obtained by directly calling the US Privacy API (__uspapi).
         */
        function getInitialCcpaStatus(): number;

        /**
         * Opens the CCPA confirmation dialog if the default Do Not Sell link is overridden.
         * Once the user interacts with the confirmation dialog, the provided callback function
         * will be called with true if the user decides to opt-out, and false otherwise.
         */
        function openConfirmationDialog(callback: (userOptedOut: boolean) => any): void;
    }
}
