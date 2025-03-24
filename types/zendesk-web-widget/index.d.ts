/**
 * Associate users with your own user directory by issuing a `JWT` credential during the login flow.
 * @see https://developer.zendesk.com/api-reference/widget-messaging/web/authentication/#login
 */
declare function zE(
    scope: "messenger",
    method: "loginUser",
    jwtCallback: (callback: (newJwtForUser: string) => void) => void,
    loginCallback?: (error: zE.LoginFailedError | null) => void,
): void;
/**
 * Revert the messaging Web Widget to a pre-login state.
 * @see https://developer.zendesk.com/api-reference/widget-messaging/web/authentication/#logout
 */
declare function zE(scope: "messenger", method: "logoutUser"): void;

/**
 * Displays the widget on the host page in the state it was in before it was hidden. The widget is displayed by default on page load. You don't need to call `show` to display the widget unless you use `hide`.
 * @see https://developer.zendesk.com/api-reference/widget-messaging/web/core/#show
 */
declare function zE(scope: "messenger", method: "show"): void;
/**
 * Hides all parts of the widget from the page. You can invoke it before or after page load.
 * @see https://developer.zendesk.com/api-reference/widget-messaging/web/core/#hide
 */
declare function zE(scope: "messenger", method: "hide"): void;
/**
 * Opens the messaging Web Widget.
 * @see https://developer.zendesk.com/api-reference/widget-messaging/web/core/#open
 */
declare function zE(scope: "messenger", method: "open"): void;
/**
 * Closes the messaging Web Widget.
 * @see https://developer.zendesk.com/api-reference/widget-messaging/web/core/#close
 */
declare function zE(scope: "messenger", method: "close"): void;
/**
 * Executes a callback when the messaging Web Widget opens.
 * @see https://developer.zendesk.com/api-reference/widget-messaging/web/core/#on-open
 */
declare function zE(scope: "messenger:on", method: "open", callback: () => void): void;
/**
 * Executes a callback when the messaging Web Widget closes.
 * @see https://developer.zendesk.com/api-reference/widget-messaging/web/core/#on-close
 */
declare function zE(scope: "messenger:on", method: "close", callback: () => void): void;
/**
 * Executes a callback when the number of unread messages changes.
 * @see https://developer.zendesk.com/api-reference/widget-messaging/web/core/#unread-messages
 */
declare function zE(scope: "messenger:on", method: "unreadMessages", callback: (count: number) => void): void;
/**
 * Sets the locale of the messaging Web Widget. It overrides the messaging Web Widget's default behavior of matching the same language an end user has set in their web browser.
 *
 * The command takes a locale string as an argument. For a list of supported locales and associated codes, use the following Zendesk public REST API endpoint: [support.zendesk.com/api/v2/locales/public.json](https://support.zendesk.com/api/v2/locales/public.json).
 * @see https://developer.zendesk.com/api-reference/widget-messaging/web/core/#set-locale
 */
declare function zE(scope: "messenger:set", method: "locale", newLocale: string): void;
/**
 * Sets the CSS property z-index on all the iframes for the messaging Web Widget.
 *
 * By default, all iframes in the messaging Web Widget have a z-index value of `999999`.
 * @see https://developer.zendesk.com/api-reference/widget-messaging/web/core/#set-zindex
 */
declare function zE(scope: "messenger:set", method: "zIndex", newZIndex: number): void;
/**
 * Lets the messaging Web Widget know that it is unable to use cookies, local or session storage.
 * @see https://developer.zendesk.com/api-reference/widget-messaging/web/core/#set-cookies
 */
declare function zE(scope: "messenger:set", method: "cookies", range: "all" | "functional" | "none"): void;
/**
 * @deprecated
 */
declare function zE(scope: "messenger:set", method: "cookies", isEnabled: boolean): void;
/**
 * Allows values for conversation fields to be set in the client to add contextual data about the conversation.
 * @see https://developer.zendesk.com/api-reference/widget-messaging/web/core/#set-conversation-fields
 */
declare function zE(
    scope: "messenger:set",
    method: "conversationFields",
    value: zE.ConversationField[],
    callback?: () => void,
): void;
/**
 * Allows custom conversation tags to be set in the client to add contextual data about the conversation.
 * @see https://developer.zendesk.com/api-reference/widget-messaging/web/core/#set-conversation-tags
 */
declare function zE(scope: "messenger:set", method: "conversationTags", value: string[]): void;

/**
 * @see https://developer.zendesk.com/api-reference/widget-messaging/introduction/
 */
declare namespace zE {
    interface LoginFailedError {
        /** A descriptive message that explains the error */
        message: string;
        /** Provides additional details on the cause of the login failure */
        reason: string;
        /** Indentifies the error type as `LoginFailedError` */
        type: string;
    }
    interface ConversationField {
        id: string;
        value: boolean | number | string;
    }
}
