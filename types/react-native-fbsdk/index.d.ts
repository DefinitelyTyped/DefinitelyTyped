// Type definitions for react-native-fbsdk 0.6
// Project: https://github.com/facebook/react-native-fbsdk
// Definitions by: Ifiok Jr. <https://github.com/ifiokjr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ComponentClass, Component } from 'react';
import { StyleSheet } from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
declare namespace FBSDK {
    /**
     * Specifies the privacy of a group.
     */
    type AppGroupPrivacy =
        // Anyone can see the group, who's in in and what members post.
        'Open' |
        // Anyone can see the group and who's in it, but only members can see posts.
        'Closed';

    /**
     * A model for app invites.
     */
    interface AppGroupCreationContent {
        /**
         * The description of the group.
         */
        description: string;

        /**
         * The name of the group.
         */
        name: string;

        /**
         * The privacy for the group.
         */
        privacy: AppGroupPrivacy;
    }

    /**
     * A model for app invites.
     */
    interface AppInviteContent {
        /**
         * A URL to a preview image that will be displayed with the app invite.
         * This is optional. If you don't include it, a fallback image will be used.
         */
        previewImageUrl?: string;

        /**
         * An app link target that will be used as a target when the user accepts the invite.
         */
        applinkUrl: string;

        /**
         * Promotional code to be displayed while sending and receiving the invite.
         * This is optional. This can be between 0 and 10 characters long and can contain
         * alphanumeric characters only. To set a promo code, you need to set promo text.
         */
        promotionCode?: string;

        /**
         * Promotional text to be displayed while sending and receiving the invite.
         * This is optional. This can be between 0 and 80 characters long and can contain
         * alphanumeric and spaces only.
         */
        promotionText?: string;
    }

    type GameRequestActionType =
        // The user is sending an object to their friends.
        'send' |
        // The user is asking for an object from friends.
        'askfor' |
        // It is the turn of the friends to play against the user in a match.
        'turn';

    type GameRequestFilters =
        // Friends using the app can be displayed.
        'app_users' |
        // Friends not using the app can be displayed.
        'app_non_users';

    /**
     * A model for a game request.
     */
    interface GameRequestContent {
        /**
         * A plain-text message to be sent as part of the request.  Required.
         */
        message: string;

        /**
         * Used when defining additional context about the nature of the request.
         * The parameter 'objectID' is required if the action type is either 'send' or 'ask-for'.
         */
        actionType?: GameRequestActionType;

        /**
         * Additional freeform data you may pass for tracking. The maximum length is 255 characters.
         */
        data?: string;

        /**
         * Controls the set of friends someone sees if a multi-friend selector is shown.
         */
        filters?: GameRequestFilters;

        /**
         * The Open Graph object ID of the object being sent/asked for. This cannot be null for ActionType SEND and
         * ASKFOR.
         */
        objectId?: string;

        /**
         * An array of user IDs, usernames or invite tokens of people to send requests to.
         */
        recipients?: string[];

        /**
         * An array of user IDs that will be included in the dialog as the first suggested friends.
         * Can't be used together with filters.
         */
        suggestions?: string[];

        /**
         * The title for the dialog.
         */
        title?: string;
    }

    type ObjectIdActionType = 'unknown' | 'open_graph' | 'page';

    /**
     * A base interface for content to be shared.
     */
    interface ObjectIdAndType {
        /**
         * The object ID, this can be a URL or a Facebook ID.
         */
        objectId: string;

        /**
         * Encapsulates the valid values for the facebook:object_type
         * attribute for a LikeView
         */
        objectType: ObjectIdActionType;
    }

    type ShareContent = ShareLinkContent | SharePhotoContent | ShareVideoContent | ShareOpenGraphContent;
    /**
     * A base interface for content to be shared.
     */
    interface ShareContentCommonParameters {
        /**
         * List of IDs for taggable people to tag with this content.
         */
        peopleIds?: string[];

        /**
         * The ID for a place to tag with this content.
         */
        placeId?: string;

        /**
         * A value to be added to the referrer URL when a person follows a link from
         * this shared content on feed.
         */
        ref?: string;

        /**
         * A hashtag to be added to the share interface. The hashtag must be 32 characters or less.
         */
        hashtag?: string;
    }

    /**
     * A model for status and link content to be shared.
     */
    interface ShareLinkContent {
        /**
         * The type of content to be shared is link.
         */
        contentType: 'link';

        /**
         * Common parameters for share content;
         */
        commonParameters?: ShareContentCommonParameters;

        /**
         * URL for the content being shared.
         */
        contentUrl: string;

        /**
         * The Description of the link.
         * If not specified, this field is automatically populated by information scraped
         * from the contentURL,  typically the title of the page.
         * @deprecated `contentDescription` is deprecated from Graph API 2.9.
         * For more information, see https://developers.facebook.com/docs/apps/changelog#v2_9_deprecations.
         */
        contentDescription?: string;

        /**
         * The title to display for this link.
         * @deprecated `contentTitle` is deprecated from Graph API 2.9.
         * For more information, see https://developers.facebook.com/docs/apps/changelog#v2_9_deprecations.
         */
        contentTitle?: string;

        /**
         * The URL of a picture to attach to this comment.
         * @deprecated `imageUrl` is deprecated from Graph API 2.9.
         * For more information, see https://developers.facebook.com/docs/apps/changelog#v2_9_deprecations.
         */
        imageUrl?: string;

        /**
         * The predefined quote to attach to this comment.
         * If specified, the quote text will render with custom styling on top of the link.
         */
        quote?: string;
    }

    interface OpenGraphProperties {
        [key: string]: OpenGraphValue;
    }

    interface OpenGraphValue {
        type: OpenGraphValueType;

        value: any;
    }

    type OpenGraphValueType =
        'number' |
        'open-graph-object' |
        'photo' |
        'string';

    interface ShareOpenGraphValueContainer {
        /**
         * Sets a number for the specified key.
         */
        // tslint:disable-next-line:variable-name
        putNumber(key: string, number: number): void;

        /**
         * Sets an open graph object for the specified key.
         */
        putObject(key: string, object: ShareOpenGraphValueContainer): void;

        /**
         * Sets a photo for the specified key.
         */
        putPhoto(key: string, photo: SharePhoto): void;

        /**
         * Sets a string for the specified key.
         */
        // tslint:disable-next-line:variable-name
        putString(key: string, string: string): void;

        /**
         * Gets an entry for the given key.
         */
        getEntry(key: string): OpenGraphValue;
    }

    /**
     * Represents an interface for adding and retrieving values to open graph objects and actions.
     */
    class ShareOpenGraphValueContainer {
        private _properties: OpenGraphProperties;

        constructor(properties: OpenGraphProperties);
    }

    /**
     * Represents an open graph action.
     */
    class ShareOpenGraphAction extends ShareOpenGraphValueContainer {
        /**
         * The action type.
         */
        actionType: string;

        constructor(actionType: string);
    }

    /**
     * Represents a content object containing information about an Open Graph Action.
     */
    interface ShareOpenGraphContent {
        /**
         * The type of content to be shared is open graph content.
         */
        contentType: 'open-graph';

        /**
         * Common parameters for share content;
         */
        commonParameters?: ShareContentCommonParameters;

        /**
         * URL for the content being shared.
         */
        contentUrl?: string;

        /**
         * Open Graph Action to be shared.
         */
        action: ShareOpenGraphAction;

        /**
         * Property name that points to the primary Open Graph Object in the action.
         */
        previewPropertyName: string;
    }

    /**
     * Represents an open graph object.
     */
    class ShareOpenGraphObject extends ShareOpenGraphValueContainer {}

    /**
     * A photo for sharing.
     */
    interface SharePhoto {
        /**
         * The URL to the photo.
         * Note that when sharing SharePhotoContent with Share Button, the imageUrl
         * of a SharePhoto cannot be the Uri of an image on the web.
         */
        imageUrl: string;

        /**
         * Specifies whether the photo was generated by the user or the application.
         */
        userGenerated?: boolean;

        /**
         * The user generated caption for the photo.  Note that the 'caption' must
         * come from the user, as pre-filled content is forbidden by the platform
         * Policies (2.3).
         */
        caption?: string;
    }

    /**
     * A model for photo content to be shared.
     */
    interface SharePhotoContent {
        /**
         * The type of content to be shared is photo.
         */
        contentType: 'photo';

        /**
         * Common parameters for share content;
         */
        commonParameters?: ShareContentCommonParameters;

        /**
         * URL for the content being shared.
         */
        contentUrl?: string;

        /**
         * Photos to be shared.
         */
        photos: SharePhoto[];
    }

    /**
     * A video for sharing.
     */
    interface ShareVideo {
        /**
         * The URL to the video. Must point to the location of the video on disk.
         */
        localUrl: string;
    }

    /**
     * A model for video content to be shared.
     */
    interface ShareVideoContent {
        /**
         * The type of content to be shared is photo.
         */
        contentType: 'video';

        /**
         * Common parameters for share content;
         */
        commonParameters?: ShareContentCommonParameters;

        /**
         * URL for the content being shared.
         */
        contentUrl?: string;

        /**
         * Video to be shared.
         */
        video: ShareVideo;

        /**
         *  Description of the video.
         */
        contentDescription?: string;

        /**
         * Title of the video.
         */
        contentTitle?: string;

        /**
         * The photo that represents the video.
         */
        previewPhoto?: SharePhoto;
    }

    interface AccessTokenMap {
        accessToken: string;
        applicationID: string;
        userID: string;
        permissions: string[];
        declinedPermissions: string[];
        accessTokenSource?: string;
        expirationTime: number;
        lastRefreshTime: number;
    }

    /**
     * Represents an immutable access token for using Facebook services.
     */
    class AccessToken {
        /**
         * The access token string.
         */
        accessToken: string;

        /**
         * The app ID.
         */
        applicationID: string;

        /**
         * The user ID.
         */
        userID: string;

        /**
         * The known granted permissions.
         */
        permissions: string[];

        /**
         * The known declined permissions.
         */
        declinedPermissions: string[];

        /**
         * The source of access token.
         * @platform android
         */
        accessTokenSource?: string;

        /**
         * The expiration time of the access token.
         * The value is the number of milliseconds since Jan. 1, 1970, midnight GMT.
         */
        expirationTime: number;

        /**
         * The last refresh time of the access token.
         * The value is the number of milliseconds since Jan. 1, 1970, midnight GMT.
         */
        lastRefreshTime: number;
        /**
         * Getter for the access token that is current for the application.
         */
        static getCurrentAccessToken(): Promise<AccessToken | null>;

        /**
         * Setter for the access token that is current for the application.
         */
        static setCurrentAccessToken(accessToken: AccessTokenMap): void;

        /**
         * Updates the current access token with up to date permissions,
         * and extends the expiration date, if extension is possible.
         */

        static refreshCurrentAccessTokenAsync(): Promise<any>;

        constructor(tokenMap: AccessTokenMap);

        /**
         * Gets the date at which the access token expires. The value is the number of
         * milliseconds since Jan. 1, 1970, midnight GMT.
         */
        getExpires(): number;

        /**
         * Get the list of permissions associated with this access token. Note that the most up-to-date
         * list of permissions is maintained by Facebook, so this list may be outdated if permissions
         * have been added or removed since the time the AccessToken object was created. See
         * https://developers.facebook.com/docs/reference/login/#permissions for details.
         */
        getPermissions(): string[];

        /**
         * Gets the list of permissions declined by the user with this access token. It represents the
         * entire set of permissions that have been requested and declined. Note that the most
         * up-to-date list of permissions is maintained by Facebook, so this list may be outdated if
         * permissions have been granted or declined since the last time an AccessToken object was
         * created. See https://developers.facebook.com/docs/reference/login/#permissions for details.
         */
        getDeclinedPermissions(): string[];

        /**
         * Gets the date at which the token was last refreshed. Since tokens expire, the Facebook SDK
         * will attempt to renew them periodically. The value is the number of milliseconds since
         * Jan. 1, 1970, midnight GMT.
         */
        getLastRefresh(): number;

        /**
         * Gets the ID of the Facebook Application associated with this access token.
         */
        getApplicationId(): string;

        /**
         * Gets user ID associated with this access token.
         */
        getUserId(): string;
    }

    /**
     * Controls when an AppEventsLogger sends log events to the server
     */
    type AppEventsFlushBehavior =
        /**
         * Flush automatically: periodically (every 15 seconds or after every 100 events), and
         * always at app reactivation. This is the default value.
         */
        'auto' |
        /**
         * Only flush when AppEventsLogger.flush() is explicitly invoked.
         */
        'explicity-only';

    interface Params {
        [key: string]: string | number;
    }

    interface AppEventsLogger {
        /**
         * Sets the current event flushing behavior specifying when events
         * are sent back to Facebook servers.
         */
        setFlushBehavior(flushBehavior: AppEventsFlushBehavior): void;

        /**
         * Logs an event with eventName and optional arguments.
         * This function supports the following usage:
         * logEvent(eventName: string);
         * logEvent(eventName: string, valueToSum: number);
         * logEvent(eventName: string, parameters: {[key:string]:string|number});
         * logEvent(eventName: string, valueToSum: number, parameters: {[key:string]:string|number});
         * See https://developers.facebook.com/docs/app-events/android for detail.
         */
        logEvent(eventName: string, ...args: Array<number | Params>): void;

        /**
         * Logs a purchase. See http://en.wikipedia.org/wiki/ISO_4217 for currencyCode.
         */
        logPurchase(purchaseAmount: number, currencyCode: string, parameters?: object): void;

        /**
         * Logs an app event that tracks that the application was open via Push Notification.
         */
        logPushNotificationOpen(payload?: object): void;

        /**
         * Explicitly kicks off flushing of events to Facebook.
         */
        flush(): void;

        /**
         * For iOS only, sets and sends device token to register the current application for push notifications.
         * @platform ios
         */
        setPushNotificationsDeviceToken(deviceToken: string): void;

        /**
         * For Android only, sets and sends registration id to register the current app for push notifications.
         * @platform Android
         */
        setPushNotificationsRegistrationId(registrationId: string): void;
    }

    const AppEventsLogger: AppEventsLogger;

    interface AppInviteDialog {
        /**
         * Check if the dialog can be shown.
         */
        canShow(): Promise<any>;

        /**
         * Shows the dialog using the specified content.
         */
        show(appInviteContent: AppInviteContent): Promise<any>;
    }

    const AppInviteDialog: AppInviteDialog;

    interface GameRequestDialog {
        /**
         * Check if the dialog can be shown.
         */
        canShow(): Promise<any>;

        /**
         * Shows the dialog using the specified content.
         */
        show(gameRequestContent: GameRequestContent): Promise<any>;
    }

    const GameRequestDialog: GameRequestDialog;

    type GraphRequestCallback = (error?: object, result?: object) => void;
    interface GraphRequestConfig {
        /**
         * The httpMethod to use for the request, for example "GET" or "POST".
         */
        httpMethod?: string;
        /**
         * The Graph API version to use (e.g., "v2.0")
         */
        version?: string;
        /**
         * The request parameters.
         */
        parameters?: GraphRequestParameters;
        /**
         * The access token used by the request.
         */
        accessToken?: string;
    }

    interface GraphRequestParameters {
        [key: string]: object;
    }

    /**
     * Represents a Graph API request and provides batch request supports.
     */
    class GraphRequest {
        /**
         * The Graph API endpoint to use for the request, for example "me".
         */
        graphPath: string;

        /**
         * The optional config for the request.
         */
        config?: GraphRequestConfig;

        /**
         * Called upon completion or failure of the request.
         */
        callback?: GraphRequestCallback;

        /**
         * Constructs a new Graph API request.
         */
        constructor(graphPath: string, config?: GraphRequestConfig | null, callback?: GraphRequestCallback);

        /**
         * Adds a string parameter to the request.
         */
        addStringParameter(paramString: string, key: string): void;
    }

    class GraphRequestManager {
        requestBatch: GraphRequest[];
        requestCallbacks: Array<GraphRequestCallback | null>;
        batchCallback: GraphRequestCallback;
        constructor();

        /**
         * Add a graph request.
         */
        addRequest(request: GraphRequest): GraphRequestManager;

        /**
         * Add call back to the GraphRequestManager. Only one callback can be added.
         * Note that invocation of the batch callback does not indicate success of every
         * graph request made, only that the entire batch has finished executing.
         */
        addBatchCallback(callback: GraphRequestCallback): GraphRequestManager;

        /**
         * Executes requests in a batch.
         * Note that when there's an issue with network connection the batch callback
         * behavior differs in Android and iOS.
         * On iOS, the batch callback returns an error if the batch fails with a network error.
         * On Android, the batch callback always returns {"result": "batch finished executing"}
         * after the batch time out. This is because detecting network status requires
         * extra permission and it's unncessary for the sdk. Instead, you can use the NetInfo module
         * in react-native to get the network status.
         */
        start(timeout?: number): void;
    }

    type AuxiliaryViewPosition = 'top' | 'bottom' | 'inline';
    type HorizontalAlignment = 'center' | 'left' | 'right';
    type LikeViewStyle = 'button'|  // Note 'button' is only available on Android.
                        'standard' |
                        'box_count';

    interface LikeViewProps {
        /**
         * The objectId and type for the object to like.
         */
        objectIdAndType: ObjectIdAndType;

        /**
         * The style to use for the receiver.  Distinct from React styling.
         */
        likeViewStyle?: LikeViewStyle;

        /**
         * The position for the auxiliary view for the receiver.
         */
        auxiliaryViewPosition?: AuxiliaryViewPosition;

        /**
         * The text alignment of the social sentence.
         */
        horizontalAlignment?: HorizontalAlignment;

        /**
         * The foreground color to use for the content of the receiver.
         */
        foregroundColor?: number;

        /**
         * If true, a sound is played when the receiver is toggled.
         */
        soundEnabled?: boolean;

        /**
         * View style, if any.
         */
        style?: StyleSheet.Style;
    }

    class LikeView extends Component<LikeViewProps, any> {}

    type TooltipBehaviorIOS = 'auto' | 'force_display' | 'disable';

    interface LoginButtonProps {
        /**
         * Represents the read permissions to request when the login button
         * is pressed.
         */
        readPermissions?: string[];

        /**
         * Represents the publish permissions to request when the login
         * button is pressed.
         */
        publishPermissions?: string[];

        /**
         * The callback invoked upon error/completion of a login request.
         */
        onLoginFinished?(error: object, result: LoginResult): void;

        /**
         * The callback invoked upon completion of a logout request.
         */
        onLogoutFinished?(): void;

        /**
         * The behavior to use when attempting a login.
         * @platform android
         */
        loginBehaviorAndroid?: LoginBehaviorAndroid;

        /**
         * The behavior to use when attempting a login.
         * @platform ios
         */
        loginBehaviorIOS?: LoginBehaviorIOS;

        /**
         * The default audience to target when attempting a login.
         */
        defaultAudience?: DefaultAudience;

        /**
         * For iOS only, the desired tooltip behavior.
         * @platform ios
         */
        tooltipBehaviorIOS?: TooltipBehaviorIOS;

        /**
         * View style, if any.
         */
        style?: StyleSheet.Style;
    }

    class LoginButton extends Component<LoginButtonProps, any> {
        private _eventHandler(event: object): void;
    }

    /**
     * Indicates which default audience to use for sessions that post data to Facebook.
     */
    type DefaultAudience =
        // Indicates that the user's friends are able to see posts made by the application.
        'friends' |
        // Indicates that all Facebook users are able to see posts made by the application.
        'everyone' |
        // Indicates that only the user is able to see posts made by the application.
        'only_me';

    type LoginBehavior = LoginBehaviorIOS | LoginBehaviorAndroid;

    /**
     * Indicate how Facebook Login should be attempted on Android.
     */
    type LoginBehaviorAndroid =
        // Attempt login in using the Facebook App, and if that does not work fall back to web dialog auth.
        'native_with_fallback'|
        // Only attempt to login using the Facebook App.
        'native_only'|
        // Only the web dialog auth should be used.
        'web_only';

    /**
     * Indicate how Facebook Login should be attempted on iOS.
     */
    type LoginBehaviorIOS =
        // Attempts log in through the native Facebook app.
        // The SDK may still use Safari instead.
        // See details in https://developers.facebook.com/blog/post/2015/10/29/Facebook-Login-iOS9/
        'native' |
        // Attempts log in through the Safari browser.
        'browser' |
        // Attempts log in through the Facebook account currently signed in through Settings.
        'system_account' |
        // Attempts log in through a modal UIWebView pop-up.
        'web';

    /**
     * Shows the results of a login operation.
     */
    interface LoginResult {
        isCancelled: boolean;
        grantedPermissions?: string[];
        declinedPermissions?: string[];
    }

    interface LoginManager {
        /**
         * Logs the user in with the requested read permissions.
         */
        logInWithReadPermissions(permissions: string[]): Promise<LoginResult>;

        /**
         * Logs the user in with the requested publish permissions.
         */
        logInWithPublishPermissions(permissions: string[]): Promise<LoginResult>;

        /**
         * Getter for the login behavior.
         */
        getLoginBehavior(): Promise<LoginBehavior>;

        /**
         * Setter for the login behavior.
         */
        setLoginBehavior(loginBehavior: LoginBehavior): void;

        /**
         * Getter for the default audience.
         */
        getDefaultAudience(): Promise<DefaultAudience>;

        /**
         * Setter for the default audience.
         */
        setDefaultAudience(defaultAudience: DefaultAudience): void;

        /**
         * Logs out the user.
         */
        logOut(): void;
    }

    const LoginManager: LoginManager;

    interface MessageDialog {
        /**
         * Check if the dialog can be shown.
         */
        canShow(shareContent: ShareContent): Promise<boolean>;

        /**
         * Shows the dialog using the specified content.
         */
        show(shareContent: ShareContent): Promise<any>;

        /**
         * Sets whether or not the native message dialog should fail when it encounters a data error.
         */
        setShouldFailOnDataError(shouldFailOnDataError: boolean): void;
    }

    const MessageDialog: MessageDialog;

    interface SendButtonProps {
        /**
         * Content to be shared.
         */
        shareContent: ShareContent;

        /**
         * View style, if any.
         */
        style?: StyleSheet.Style;
    }

    class SendButton extends Component<SendButtonProps, any> {}

    interface ShareApi {
        /**
         * Check if the content can be shared via share api.
         */
        canShare(shareContent: ShareContent): Promise<boolean>;

        /**
         * For iOS only, creates a User Owned Open Graph object without an action.
         * NOTE: Only one share action can be performed at a time.
         * @platform ios
         */
        createOpenGraphObject(openGraphObject: ShareOpenGraphObject): Promise<any>;

        /**
         * Shares the specified content with a message.
         * NOTE: Only one share action can be performed at a time.
         */
        share(shareContent: ShareContent, graphNode: string, message: string): Promise<any>;
    }

    const ShareApi: ShareApi;

    interface ShareButtonProps {
        /**
         * Content to be shared.
         */
        shareContent: ShareContent;

        /**
         * View style, if any.
         */
        style?: StyleSheet.Style;
    }

    class ShareButton extends Component<ShareButtonProps, any> {}

    type ShareDialogMode = ShareDialogModeIOS | ShareDialogModeAndroid;
    type ShareDialogModeAndroid =
        /**
         * The mode is determined automatically.
         */
        'automatic'|
        /**
         * The native dialog is used.
         */
        'native'|
        /**
         * The web dialog is used.
         */
        'web'|
        /**
         * The feed dialog is used.
         */
        'feed';
    type ShareDialogModeIOS =
        /*
        * Acts with the most appropriate mode that is available.
        */
        'automatic'|
        /*
        * Displays the dialog in Safari.
        */
        'browser'|
        /*
        * Displays the dialog in a UIWebView within the app.
        */
        'webview';

    interface ShareDialog {
        /**
         * Check if the dialog can be shown.
         */
        canShow(shareContent: ShareContent): Promise<boolean>;

        /**
         * Shows the dialog using the specified content.
         */
        show(shareContent: ShareContent): Promise<any>;

        /**
         * Sets the mode for the share dialog.
         */
        setMode(mode: ShareDialogMode): void;

        /**
         * Sets whether or not the native share dialog should fail when it encounters a data error.
         */
        setShouldFailOnDataError(shouldFailOnDataError: boolean): void;
    }

    const ShareDialog: ShareDialog;
}
export as namespace FBSDK;
// tslint:disable-next-line:export-just-namespace
export = FBSDK;
