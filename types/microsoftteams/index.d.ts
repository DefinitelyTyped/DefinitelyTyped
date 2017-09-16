// Type definitions for microsoftteams 1.0
// Project: https://github.com/OfficeDev/microsoft-teams-library-js
// Definitions by: OfficeDev <https://github.com/OfficeDev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/types/microsoftteams
// TypeScript Version: 2.1
// tslint:disable:prefer-method-signature

interface MessageEvent {
    originalEvent: MessageEvent;
}
/**
 * This is the root namespace for the JavaScript SDK.
 */
declare namespace microsoftTeams {
    /**
     * Initializes the library. This must be called before any other SDK calls.
     * The caller should only call this once the frame is loaded successfully.
     */
    function initialize(): void;
    /**
     * Retrieves the current context the frame is running in.
     * @param callback The callback to invoke when the {@link Context} object is retrieved.
     */
    function getContext(callback: (context: Context) => void): void;
    /**
     * Registers a handler for when the user changes their theme.
     * Only one handler may be registered at a time. Subsequent registrations will override the first.
     * @param handler The handler to invoke when the user changes their theme.
     */
    function registerOnThemeChangeHandler(handler: (theme: string) => void): void;
    /**
     * Navigates the frame to a new cross-domain URL. The domain of this URL must match at least one of the
     * valid domains specified in the tab manifest; otherwise, an exception will be thrown. This function only
     * needs to be used when navigating the frame to a URL in a different domain than the current one in
     * a way that keeps the app informed of the change and allows the SDK to continue working.
     * @param url The url to navigate the frame to.
     */
    function navigateCrossDomain(url: string): void;
    /**
     * Shares a deep link a user can use to navigate back to a specific state in this page.
     */
    function shareDeepLink(deepLinkParameters: DeepLinkParameters): void;
    /**
     * Namespace to interact with the settings-specific part of the SDK.
     * This object is only usable on the settings frame.
     */
    namespace settings {
        /**
         * Sets the validity state for the settings.
         * The inital value is false so the user will not be able to save the settings until this is called with true.
         * @param validityState A value indicating whether the save or remove button is enabled for the user.
         */
        function setValidityState(validityState: boolean): void;
        /**
         * Gets the settings for the current instance.
         * @param callback The callback to invoke when the {@link Settings} object is retrieved.
         */
        function getSettings(callback: (settings: Settings) => void): void;
        /**
         * Sets the settings for the current instance.
         * Note that this is an asynchronous operation so there are no guarentees as to when calls
         * to getSettings will reflect the changed state.
         * @param settings The desired settings for this current instance.
         */
        function setSettings(settings: Settings): void;
        /**
         * Registers a handler for when the user attempts to save the settings. This handler should be used
         * to create or update the underlying resource powering the content.
         * The object passed to the handler must be used to notify whether to proceed with the save.
         * Only one handler may be registered at a time. Subsequent registrations will override the first.
         * @param handler The handler to invoke when the user selects the save button.
         */
        function registerOnSaveHandler(handler: (evt: SaveEvent) => void): void;
        /**
         * Registers a handler for when the user attempts to remove the content. This handler should be used
         * to remove the underlying resource powering the content.
         * The object passed to the handler must be used to notify whether to proceed with the remove
         * Only one handler may be registered at a time. Subsequent registrations will override the first.
         * @param handler The handler to invoke when the user selects the remove button.
         */
        function registerOnRemoveHandler(handler: (evt: RemoveEvent) => void): void;
        interface Settings {
            /**
             * A suggested display name for the new content.
             * In the settings for an existing instance being updated, this call has no effect.
             */
            suggestedDisplayName?: string;
            /**
             * Sets the url to use for the content of this instance.
             */
            contentUrl: string;
            /**
             * Sets the remove URL for the remove config experience
             */
            removeUrl?: string;
            /**
             * Sets the url to use for the external link to view the underlying resource in a browser.
             */
            websiteUrl?: string;
            /**
             * The developer-defined unique id for the entity this content points to.
             */
            entityId: string;
        }
        interface SaveEvent {
            /**
             * Notifies that the underlying resource has been created and the settings may be saved.
             */
            notifySuccess(): void;
            /**
             * Notifies that the underlying resource creation failed and that the settings may not be saved.
             * @param reason Specifies a reason for the failure. If provided, this string is displayed to the user. Otherwise a generic error is displayed.
             */
            notifyFailure(reason?: string): void;
        }
        interface RemoveEvent {
            /**
             * Notifies that the underlying resource has been removed and the content may be removed.
             */
            notifySuccess(): void;
            /**
             * Notifies that the underlying resource removal failed and that the content may not be removed.
             * @param reason Specifies a reason for the failure. If provided, this string is displayed to the user. Otherwise a generic error is displayed.
             */
            notifyFailure(reason?: string): void;
        }
    }
    /**
     * Namespace to interact with the authentication-specific part of the SDK.
     * This object is used for starting or completing authentication flows.
     */
    namespace authentication {
        /**
         * Initiates an authentication request which pops up a new windows with the specified settings.
         * @param authenticateParameters A set of values that configure the authentication popup.
         */
        function authenticate(authenticateParameters: AuthenticateParameters): void;
        /**
         * Requests an AAD token to be issued on behalf of the app. The token is acquired from the cache
         * if it is not expired. Otherwise a request will be sent to AAD to obtain a new token.
         * @param authTokenRequest A set of values that configure the token request.
         */
        function getAuthToken(authTokenRequest: AuthTokenRequest): void;
        /**
         * Requests the decoded AAD user identity on behalf of the app.
         */
        function getUser(userRequest: UserRequest): void;
        /**
         * Notifies the frame that initiated this authentication request that the request was successful.
         * This function is only usable on the authentication window.
         * This call causes the authentication window to be closed.
         * @param result Specifies a result for the authentication. If specified, the frame which initiated the authentication popup will recieve this value in their callback.
         */
        function notifySuccess(result?: string): void;
        /**
         * Notifies the frame that initiated this authentication request that the request failed.
         * This function is only usable on the authentication window.
         * This call causes the authentication window to be closed.
         * @param reason Specifies a reason for the authentication failure. If specified, the frame which initiated the authentication popup will recieve this value in their callback.
         */
        function notifyFailure(reason?: string): void;
        interface AuthenticateParameters {
            /**
             * The url for the authentication popup
             */
            url: string;
            /**
             * The preferred width for the popup. Note that this value may be ignored if outside the acceptable bounds.
             */
            width?: number;
            /**
             * The preferred height for the popup. Note that this value may be ignored if outside the acceptable bounds.
             */
            height?: number;
            /**
             * A function which is called if the authentication succeeds with the result returned from the authentication popup.
             */
            successCallback?: (result?: string) => void;
            /**
             * A function which is called if the authentication fails with the reason for the failure returned from the authentication popup.
             */
            failureCallback?: (reason?: string) => void;
        }
        interface AuthTokenRequest {
            /**
             * An array of resource URIs identifying the target resources for which the token should be requested.
             */
            resources: string[];
            /**
             * A function which is called if the token request succeeds with the resulting token.
             */
            successCallback?: (token: string) => void;
            /**
             * A function which is called if the token request fails with the reason for the failure.
             */
            failureCallback?: (reason: string) => void;
        }
        interface UserRequest {
            /**
             * A function which is called if the token request succeeds with the resulting token.
             */
            successCallback?: (user: UserProfile) => void;
            /**
             * A function which is called if the token request fails with the reason for the failure.
             */
            failureCallback?: (reason: string) => void;
        }
        interface UserProfile {
            /**
             * The intended recipient of the token. The application that receives the token must verify that the audience
             * value is correct and reject any tokens intended for a different audience.
             */
            aud: string;
            /**
             * Identifies how the subject of the token was authenticated.
             */
            amr: string[];
            /**
             * Stores the time at which the token was issued. It is often used to measure token freshness.
             */
            iat: number;
            /**
             * Identifies the security token service (STS) that constructs and returns the token. In the tokens that Azure AD
             * returns, the issuer is sts.windows.net. The GUID in the Issuer claim value is the tenant ID of the Azure AD
             * directory. The tenant ID is an immutable and reliable identifier of the directory.
             */
            iss: string;
            /**
             * Provides the last name, surname, or family name of the user as defined in the Azure AD user object.
             */
            family_name: string;
            /**
             * Provides the first or "given" name of the user, as set on the Azure AD user object.
             */
            given_name: string;
            /**
             * Provides a human readable value that identifies the subject of the token. This value is not guaranteed to
             * be unique within a tenant and is designed to be used only for display purposes.
             */
            unique_name: string;
            /**
             * Contains a unique identifier of an object in Azure AD. This value is immutable and cannot be reassigned or
             * reused. Use the object ID to identify an object in queries to Azure AD.
             */
            oid: string;
            /**
             * Identifies the principal about which the token asserts information, such as the user of an application.
             * This value is immutable and cannot be reassigned or reused, so it can be used to perform authorization
             * checks safely. Because the subject is always present in the tokens the Azure AD issues, we recommended
             * using this value in a general purpose authorization system.
             */
            sub: string;
            /**
             * An immutable, non-reusable identifier that identifies the directory tenant that issued the token. You can
             * use this value to access tenant-specific directory resources in a multi-tenant application. For example,
             * you can use this value to identify the tenant in a call to the Graph API.
             */
            tid: string;
            /**
             * Defines the time interval within which a token is valid. The service that validates the token should verify
             * that the current date is within the token lifetime, else it should reject the token. The service might allow
             * for up to five minutes beyond the token lifetime range to account for any differences in clock time ("time
             * skew") between Azure AD and the service.
             */
            exp: number;
            nbf: number;
            /**
             * Stores the user name of the user principal.
             */
            upn: string;
            /**
             * Stores the version number of the token.
             */
            ver: string;
        }
    }
    interface Context {
        /**
         * The O365 group id for the team with which the content is associated.
         * This field is only available when the identity permission is requested in the manifest.
         */
        groupId?: string;
        /**
         * The Microsoft Teams id for the team with which the content is associated.
         */
        teamId?: string;
        /**
         * The Microsoft Teams id for the channel with which the content is associated.
         */
        channelId?: string;
        /**
         * The developer-defined unique id for the entity this content points to.
         */
        entityId: string;
        /**
         * The developer-defined unique id for the sub-entity this content points to.
         * This field should be used to restore to a specific state within an entity, for example scrolling to or activating a specific piece of content.
         */
        subEntityId?: string;
        /**
         * The current locale that the user has configured for the app formatted as
         * languageId-countryId (e.g. en-us).
         */
        locale: string;
        /**
         * The current user's upn.
         * As a malicious party can host content in a malicious browser, this value should only
         * be used as a hint as to who the user is and never as proof of identity.
         * This field is only available when the identity permission is requested in the manifest.
         */
        upn?: string;
        /**
         * The current user's AAD tenant id.
         * As a malicious party can host content in a malicious browser, this value should only
         * be used as a hint as to who the user is and never as proof of identity.
         * This field is only available when the identity permission is requested in the manifest.
         */
        tid?: string;
        /**
         * The current UI theme the user is using.
         */
        theme?: string;
    }
    interface DeepLinkParameters {
        /**
         * The developer-defined unique id for the sub-entity this deep link points to within the current entity.
         * This field should be used to restore to a specific state within an entity, for example scrolling to or activating a specific piece of content.
         */
        subEntityId: string;
        /**
         * The label for the sub-entity which should be displayed when the deep link is rendered in a client.
         */
        subEntityLabel: string;
        /**
         * The fallback url to navigate the user to if there is no support for rendering the page inside the client.
         * This url should lead directly to the sub-entity.
         */
        subEntityWebUrl?: string;
    }
}
