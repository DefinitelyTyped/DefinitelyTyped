// Type definitions for ldclient-js v1.1.2
// Project: https://github.com/launchdarkly/js-client
// Definitions by: Isaac Sukin <https://isaacsukin.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * The LaunchDarkly JavaScript client interfaces.
 *
 * Documentation: http://docs.launchdarkly.com/docs/js-sdk-reference
 */
declare namespace LaunchDarkly {
    /**
     * The names of events to which users of the client can subscribe.
     */
    export type LDEventName = 'ready' | 'change';

    /**
     * The types of values a feature flag can have.
     *
     * Flags can have any JSON-serializable value.
     */
    export type LDFlagValue = any;

    /**
     * A map of feature flags from their keys to their values.
     */
    export type LDFlagSet = {
        [key: string]: LDFlagValue,
    };

    /**
     * A map of feature flag keys to objects holding changes in their values.
     */
    export type LDFlagChangeset = {
        [key: string]: {
            current: LDFlagValue,
            previous: LDFlagValue,
        },
    };

    /**
     * The parameters required to (un)subscribe to/from LaunchDarkly events.
     *
     * See LDClient#on and LDClient#off.
     */
    type LDEventSignature = (
            key: LDEventName,
            callback: (current?: LDFlagValue | LDFlagChangeset, previous?: LDFlagValue) => void,
            context?: any
        ) => void;

    /**
     * LaunchDarkly initialization options.
     */
    export interface LDOptions {
        /**
         * The signed user key for Secure Mode.
         *
         * @see http://docs.launchdarkly.com/docs/js-sdk-reference#secure-mode
         */
        hash: string;

        /**
         * The initial set of flags to use until the remote set is retrieved.
         *
         * If "localStorage" is specified, the flags will be saved locally and
         * retrieved from storage. Alternatively an LDFlagSet can be specified
         * which will be used as the initial source of flag values.
         */
        bootstrap?: 'localStorage' | LDFlagSet;
    }

    /**
     * A LaunchDarkly user object.
     */
    export interface LDUser {
        /**
         * A unique string identifying a user.
         */
        key: string;

        /**
         * The user's name.
         *
         * You can search for users on the User page by name.
         */
        name?: string;

        /**
         * The user's first name.
         */
        firstName?: string;

        /**
         * The user's last name.
         */
        lastName?: string;

        /**
         * The user's email address.
         *
         * If an `avatar` URL is not provided, LaunchDarkly will use Gravatar
         * to try to display an avatar for the user on the Users page.
         */
        email?: string;

        /**
         * An absolute URL to an avatar image for the user.
         */
        avatar?: string;

        /**
         * The user's IP address.
         *
         * If you provide an IP, LaunchDarkly will use a geolocation service to
         * automatically infer a `country` for the user, unless you've already
         * specified one.
         */
        ip?: string;

        /**
         * The country associated with the user.
         */
        country?: string;

        /**
         * Whether to show the user on the Users page in LaunchDarkly.
         */
        anonymous?: boolean;

        /**
         * Any additional attributes associated with the user.
         */
        custom?: {
            [key: string]: string | boolean | number | Array<string | boolean | number>,
        };
    }

    /**
     * The LaunchDarkly client's instance interface.
     *
     * @see http://docs.launchdarkly.com/docs/js-sdk-reference
     */
    export interface LDClient {
        /**
         * Identifies a user to LaunchDarkly.
         *
         * This only needs to be called if the user changes identities because
         * normally the user's identity is set during client initialization.
         *
         * @param user
         *   A map of user options. Must contain at least the `key` property
         *   which identifies the user.
         * @param hash
         *   The signed user key for Secure Mode; see
         *   http://docs.launchdarkly.com/docs/js-sdk-reference#secure-mode
         * @param onDone
         *   A callback to invoke after the user is identified.
         */
        identify: (user: LDUser, hash?: string, onDone?: () => void) => void;

        /**
         * Retrieves a flag's value.
         *
         * @param key
         *   The key of the flag for which to retrieve the corresponding value.
         * @param defaultValue
         *   The value to use if the flag is not available (for example, if the
         *   user is offline or a flag is requested that does not exist).
         *
         * @returns
         *   The flag's value.
         */
        variation: (key: string, defaultValue?: LDFlagValue) => LDFlagValue;

        /**
         * Registers an event listener.
         *
         * @param key
         *   The name of the event for which to listen. This can be "ready",
         *   "change", or "change:FLAG-KEY".
         * @param callback
         *   The function to execute when the event fires. For the "change"
         *   event, the callback receives one parameter: an LDFlagChangeset
         *   describing the changes. For "change:FLAG-KEY" events, the callback
         *   receives two parameters: the current (new) value and the previous
         *   value of the relevant flag.
         * @param context
         *   The "this" context to use for the callback.
         */
        on: LDEventSignature;

        /**
         * Deregisters an event listener.
         *
         * @param key
         *   The name of the event for which to stop listening. This can be
         *   "ready", "change", or "change:FLAG-KEY".
         * @param callback
         *   The function to deregister.
         * @param context
         *   The "this" context for the callback.
         */
        off: LDEventSignature;

        /**
         * Track page events to use in goals or A/B tests.
         *
         * LaunchDarkly automatically tracks pageviews and clicks that are
         * specified in the Goals section of their dashboard. This can be used
         * to track custom goals or other events that do not currently have
         * goals.
         *
         * @param key
         *   The event to record.
         * @param data
         *   Additional information to associate with the event.
         */
        track: (key: string, data?: any) => void;

        /**
         * Returns a map of all available flags to the current user's values.
         */
        allFlags: () => LDFlagSet;
    }

}

/**
 * The LaunchDarkly static global.
 */
declare var LDClient: {
    initialize: (
            key: string,
            user: LaunchDarkly.LDUser,
            options?: LaunchDarkly.LDOptions
        ) => LaunchDarkly.LDClient;
};
