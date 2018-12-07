// Type definitions for microsoftteams 1.2
// Project: https://github.com/OfficeDev/microsoft-teams-library-js
// Definitions by: Bhargav Krishna <https://github.com/WrathOfZombies>
//                 Jay Ongg <https://github.com/jayongg>
//                 Yuri Dogandjiev <https://github.com/ydogandjiev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped/types/microsoftteams
// TypeScript Version: 2.1

interface MessageEvent {
    originalEvent: MessageEvent;
}
/**
 * This is the root namespace for the JavaScript SDK.
 */
declare namespace microsoftTeams {
    interface TabInformation {
        teamTabs: TabInstance[];
    }
    interface TabInstance {
        tabName: string;
        internalTabInstanceId?: string;
        lastViewUnixEpochTime?: string;
        entityId?: string;
        channelId?: string;
        channelName?: string;
        channelIsFavorite?: boolean;
        teamId?: string;
        teamName?: string;
        teamIsFavorite?: boolean;
        groupId?: string;
        url?: string;
        websiteUrl?: string;
    }
    const enum TeamType {
        Standard = 0,
        Edu = 1,
        Class = 2,
        Plc = 3,
        Staff = 4,
    }
    interface TabInstanceParameters {
        /**
         * Flag allowing to select favorite channels only
         */
        favoriteChannelsOnly?: boolean;
        /**
         * Flag allowing to select favorite teams only
         */
        favoriteTeamsOnly?: boolean;
    }
    /**
     * Initializes the library. This must be called before any other SDK calls
     * but after the frame is loaded successfully.
     */
    function initialize(): void;
    /**
     * Retrieves the current context the frame is running in.
     * @param callback The callback to invoke when the {@link Context} object is retrieved.
     */
    function getContext(callback: (context: Context) => void): void;
    /**
     * Registers a handler for theme changes.
     * Only one handler can be registered at a time. A subsequent registration replaces an existing registration.
     * @param handler The handler to invoke when the user changes their theme.
     */
    function registerOnThemeChangeHandler(handler: (theme: string) => void): void;
    /**
     * Registers a handler for changes from or to full-screen view for a tab.
     * Only one handler can be registered at a time. A subsequent registration replaces an existing registration.
     * @param handler The handler to invoke when the user toggles full-screen view for a tab.
     */
    function registerFullScreenHandler(handler: (isFullScreen: boolean) => void): void;
    /**
     * Navigates the frame to a new cross-domain URL. The domain of this URL must match at least one of the
     * valid domains specified in the validDomains block of the manifest; otherwise, an exception will be
     * thrown. This function needs to be used only when navigating the frame to a URL in a different domain
     * than the current one in a way that keeps the app informed of the change and allows the SDK to
     * continue working.
     * @param url The URL to navigate the frame to.
     */
    function navigateCrossDomain(url: string): void;
    /**
     * Allows an app to retrieve for this user tabs that are owned by this app.
     * If no TabInstanceParameters are passed, the app defaults to favorite teams and favorite channels.
     * @param callback The callback to invoke when the {@link TabInstanceParameters} object is retrieved.
     * @param tabInstanceParameters OPTIONAL Flags that specify whether to scope call to favorite teams or channels.
     */
    function getTabInstances(callback: (tabInfo: TabInformation) => void, tabInstanceParameters?: TabInstanceParameters): void;
    /**
     * Allows an app to retrieve the most recently used tabs for this user.
     * @param callback The callback to invoke when the {@link TabInformation} object is retrieved.
     * @param tabInstanceParameters OPTIONAL Ignored, kept for future use
     */
    function getMruTabInstances(callback: (tabInfo: TabInformation) => void, tabInstanceParameters?: TabInstanceParameters): void;
    /**
     * Shares a deep link that a user can use to navigate back to a specific state in this page.
     * @param deepLinkParameters ID and label for the link and fallback URL.
     */
    function shareDeepLink(deepLinkParameters: DeepLinkParameters): void;
    /**
     * Navigates the Microsoft Teams app to the specified tab instance.
     * @param tabInstance The tab instance to navigate to.
     */
    function navigateToTab(tabInstance: TabInstance): void;
    /**
     * Namespace to interact with the settings-specific part of the SDK.
     * This object is usable only on the settings frame.
     */
    namespace settings {
        /**
         * Sets the validity state for the settings.
         * The initial value is false, so the user cannot save the settings until this is called with true.
         * @param validityState Indicates whether the save or remove button is enabled for the user.
         */
        function setValidityState(validityState: boolean): void;
        /**
         * Gets the settings for the current instance.
         * @param callback The callback to invoke when the {@link Settings} object is retrieved.
         */
        function getSettings(callback: (settings: Settings) => void): void;
        /**
         * Sets the settings for the current instance.
         * This is an asynchronous operation; calls to getSettings are not guaranteed to reflect the changed state.
         * @param settings The desired settings for this instance.
         */
        function setSettings(settings: Settings): void;
        /**
         * Registers a handler for when the user attempts to save the settings. This handler should be used
         * to create or update the underlying resource powering the content.
         * The object passed to the handler must be used to notify whether to proceed with the save.
         * Only one handler can be registered at a time. A subsequent registration replaces an existing registration.
         * @param handler The handler to invoke when the user selects the save button.
         */
        function registerOnSaveHandler(handler: (evt: SaveEvent) => void): void;
        /**
         * Registers a handler for user attempts to remove content. This handler should be used
         * to remove the underlying resource powering the content.
         * The object passed to the handler must be used to indicate whether to proceed with the removal.
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
             * Sets the URL to use for the content of this instance.
             */
            contentUrl: string;
            /**
             * Sets the URL for the removal configuration experience.
             */
            removeUrl?: string;
            /**
             * Sets the URL to use for the external link to view the underlying resource in a browser.
             */
            websiteUrl?: string;
            /**
             * The developer-defined unique ID for the entity to which this content points.
             */
            entityId: string;
        }
        interface SaveEvent {
            /**
             * Indicates that the underlying resource has been created and the settings can be saved.
             */
            notifySuccess(): void;
            /**
             * Indicates that creation of the underlying resource failed and that the settings cannot be saved.
             * @param reason Specifies a reason for the failure. If provided, this string is displayed to the user; otherwise a generic error is displayed.
             */
            notifyFailure(reason?: string): void;
        }
        interface RemoveEvent {
            /**
             * Indicates that the underlying resource has been removed and the content can be removed.
             */
            notifySuccess(): void;
            /**
             * Indicates that removal of the underlying resource failed and that the content cannot be removed.
             * @param reason Specifies a reason for the failure. If provided, this string is displayed to the user; otherwise a generic error is displayed.
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
         * Initiates an authentication request, which opens a new window with the specified settings.
         * @param authenticateParameters A set of values that configure the authentication pop-up.
         */
        function authenticate(authenticateParameters: AuthenticateParameters): void;
        /**
         * Requests an Azure AD token to be issued on behalf of the app. The token is acquired from the cache
         * if it is not expired. Otherwise a request is sent to Azure AD to obtain a new token.
         * @param authTokenRequest A set of values that configure the token request.
         */
        function getAuthToken(authTokenRequest: AuthTokenRequest): void;
        /**
         * Requests the decoded Azure AD user identity on behalf of the app.
         */
        function getUser(userRequest: UserRequest): void;
        /**
         * Notifies the frame that initiated this authentication request that the request was successful.
         * This function is usable only on the authentication window.
         * This call causes the authentication window to be closed.
         * @param result Specifies a result for the authentication. If specified, the frame that initiated the authentication pop-up receives this value in its callback.
         */
        function notifySuccess(result?: string): void;
        /**
         * Notifies the frame that initiated this authentication request that the request failed.
         * This function is usable only on the authentication window.
         * This call causes the authentication window to be closed.
         * @param reason Specifies a reason for the authentication failure. If specified, the frame that initiated the authentication pop-up receives this value in its callback.
         */
        function notifyFailure(reason?: string): void;
        interface AuthenticateParameters {
            /**
             * The URL for the authentication pop-up.
             */
            url: string;
            /**
             * The preferred width for the pop-up. This value can be ignored if outside the acceptable bounds.
             */
            width?: number;
            /**
             * The preferred height for the pop-up. This value can be ignored if outside the acceptable bounds.
             */
            height?: number;
            /**
             * A function that is called if the authentication succeeds, with the result returned from the authentication pop-up.
             */
            successCallback?: (result?: string) => void;
            /**
             * A function that is called if the authentication fails, with the reason for the failure returned from the authentication pop-up.
             */
            failureCallback?: (reason?: string) => void;
        }
        interface AuthTokenRequest {
            /**
             * An array of resource URIs identifying the target resources for which the token should be requested.
             */
            resources: string[];
            /**
             * A function that is called if the token request succeeds, with the resulting token.
             */
            successCallback?: (token: string) => void;
            /**
             * A function that is called if the token request fails, with the reason for the failure.
             */
            failureCallback?: (reason: string) => void;
        }
        interface UserRequest {
            /**
             * A function that is called if the token request succeeds, with the resulting token.
             */
            successCallback?: (user: UserProfile) => void;
            /**
             * A function that is called if the token request fails, with the reason for the failure.
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
             * returns, the issuer is sts.windows.net. The GUID in the issuer claim value is the tenant ID of the Azure AD
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
             * Provides a human-readable value that identifies the subject of the token. This value is not guaranteed to
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
             * using this value in a general-purpose authorization system.
             */
            sub: string;
            /**
             * An immutable, non-reusable identifier that identifies the directory tenant that issued the token. You can
             * use this value to access tenant-specific directory resources in a multitenant application. For example,
             * you can use this value to identify the tenant in a call to the Graph API.
             */
            tid: string;
            /**
             * Defines the time interval within which a token is valid. The service that validates the token should verify
             * that the current date is within the token lifetime; otherwise it should reject the token. The service might
             * allow for up to five minutes beyond the token lifetime to account for any differences in clock time ("time
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
         * The Office 365 group ID for the team with which the content is associated.
         * This field is available only when the identity permission is requested in the manifest.
         */
        groupId?: string;
        /**
         * The Microsoft Teams ID for the team with which the content is associated.
         */
        teamId?: string;
        /**
         * The name for the team with which the content is associated.
         */
        teamName?: string;
        /**
         * The Microsoft Teams ID for the channel with which the content is associated.
         */
        channelId?: string;
        /**
         * The name for the channel with which the content is associated.
         */
        channelName?: string;
        /**
         * The developer-defined unique ID for the entity this content points to.
         */
        entityId: string;
        /**
         * The developer-defined unique ID for the sub-entity this content points to.
         * This field should be used to restore to a specific state within an entity, such as scrolling to or activating a specific piece of content.
         */
        subEntityId?: string;
        /**
         * The current locale that the user has configured for the app formatted as
         * languageId-countryId (for example, en-us).
         */
        locale: string;
        /**
         * The UPN of the current user.
         * Because a malicious party can host malicious content in a browser, this value should
         * be used only as a hint as to who the user is and never as proof of identity.
         * This field is available only when the identity permission is requested in the manifest.
         */
        upn?: string;
        /**
         * The Azure AD tenant ID of the current user.
         * Because a malicious party can host malicious content in a browser, this value should
         * be used only as a hint as to who the user is and never as proof of identity.
         * This field is available only when the identity permission is requested in the manifest.
         */
        tid?: string;
        /**
         * The current UI theme.
         */
        theme?: string;
        /**
         * Indication whether the tab is in full-screen mode.
         */
        isFullScreen?: boolean;
        /**
         * The type of the team.
         */
        teamType?: TeamType;
    }
    interface DeepLinkParameters {
        /**
         * The developer-defined unique ID for the sub-entity to which this deep link points in the current entity.
         * This field should be used to restore to a specific state within an entity, such as scrolling to or activating a specific piece of content.
         */
        subEntityId: string;
        /**
         * The label for the sub-entity that should be displayed when the deep link is rendered in a client.
         */
        subEntityLabel: string;
        /**
         * The fallback URL to which to navigate the user if the client cannot render the page.
         * This URL should lead directly to the sub-entity.
         */
        subEntityWebUrl?: string;
    }
}
