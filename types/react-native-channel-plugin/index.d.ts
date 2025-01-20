/**
 * @see https://developers.channel.io/docs/react-native-models#bootconfig
 */
export interface BootConfig {
    /**
     * Plugin Key of Channel.
     */
    pluginKey: string;

    /**
     * An identifier to distinguish each member user.
     */
    memberId?: string;

    /**
     * A HMAC-SHA256 value of memberId.
     */
    memberHash?: string;

    /**
     * A user’s Profile.
     *
     * @see https://developers.channel.io/docs/react-native-models#profile
     */
    profile?: Profile;

    /**
     * A user’s language.
     * It is valid when creating a new user. The language of the user that already exists will not change.
     *
     * @see https://developers.channel.io/docs/react-native-models#language
     */
    language?: Language;

    /**
     * Sets whether to receive marketing messages via email.
     */
    unsubscribeEmail?: boolean;

    /**
     * Sets whether to receive marketing messages via texting (SMS, LMS)
     */
    unsubscribeTexting?: boolean;

    /**
     * Sets whether to track the default event such as PageView.
     */
    trackDefaultEvent?: boolean;

    /**
     * Sets whether hide popups such as marketing popup and in-app notifications.
     */
    hidePopup?: boolean;

    /**
     * An option for Channel button.
     * You can set the position and margin of the Channel button. The unit of margin is pt (point).
     *
     * @see https://developers.channel.io/docs/react-native-models#channelbuttonoption
     */
    channelButtonOption?: ChannelButtonOption;

    /**
     * An option for popups for bubble type of marketing messages, and in-app notifications. The unit of margin is pt (point.)
     *
     * @see https://developers.channel.io/docs/react-native-models#bubbleoption
     */
    bubbleOption?: BubbleOption;
}

/**
 * Languages that the SDK supports.
 *
 * @see https://developers.channel.io/docs/react-native-models#language
 */
export type Language = "ko" | "jp" | "en";

/**
 * @see https://developers.channel.io/docs/react-native-models#channelbuttonoption
 */
export interface ChannelButtonOption {
    /**
     * @default 20
     */
    xMargin?: number;

    /**
     * @default 20
     */
    yMargin?: number;

    /**
     * @default 'right'
     */
    position?: "right" | "left";
}

/**
 * @see https://developers.channel.io/docs/react-native-models#bubbleoption
 */
export interface BubbleOption {
    /**
     * @default 'top'
     */
    position?: "top" | "bottom";

    /**
     * @default 20
     */
    yMargin?: number;
}

/**
 * A user’s profile.
 * @see https://developers.channel.io/docs/react-native-models#profile
 */
export interface Profile {
    /**
     * A name of a user.
     */
    name?: string;

    /**
     * A email of a user.
     */
    email?: string;

    /**
     * A mobile number of a user
     */
    mobileNumber?: string;

    /**
     * An avatar URL of a user.
     */
    avatarUrl?: string;
    [key: string]: string | number | boolean | null | undefined;
}

export interface User {
    /**
     * An identifier that Channel uses.
     */
    id: string;

    /**
     * An identifier to distinguish member users. Anonymous user is null.
     */
    memberId?: string;

    /**
     * A name of the user.
     */
    name?: string;

    /**
     * An avatar URL of the user.
     */
    avatarUrl?: string;

    /**
     * An object that contains the user’s profile.
     *
     * @see https://developers.channel.io/docs/react-native-models#profile
     */
    profile?: Profile;

    /**
     * An unread message count of the user.
     */
    alert: number;

    /**
     * A tag list of the user.
     */
    tags?: string[];

    /**
     * A language of the user.
     *
     * @see https://developers.channel.io/docs/react-native-models#language
     */
    language: Language;

    /**
     * Whether to receive marketing messages via email.
     */
    unsubscribeTexting?: boolean;

    /**
     * Whether to receive marketing messages via texting (SMS, LMS)
     */
    unsubscribeEmail?: boolean;
}

export interface PopupData {
    /**
     * A chat Id of the popup.
     */
    chatId: string;

    /**
     * A avatar URL of the popup.
     */
    avatarUrl: string;

    /**
     * A name which displayed on the popup.
     */
    name: string;

    /**
     * A message which displayed on the popup.
     */
    message: string;
}

export interface UserData {
    /**
     * A user’s language.
     *
     * @see https://developers.channel.io/docs/react-native-models#language
     */
    language: Language;

    /**
     * A user’s tag list.
     *
     * Overwrite with tag data you add.
     * The maximum number is ten and is not case-sensitive.
     */
    tags?: string[];

    /**
     * A user’s profile.
     *
     * Overwrite with profile data you add. Initialize if you set the profile value to nil.
     * @see https://developers.channel.io/docs/react-native-models#profile
     */
    profile?: Profile | null;

    /**
     * A profile to add to the user.
     *
     * Add a new profile value it it does not exist.
     */
    profileOnce?: Profile;

    /**
     * Whether to receive marketing messages via email.
     */
    unsubscribeEmail?: boolean;

    /**
     * Whether to receive marketing messages via email.
     */
    unsubscribeTexting?: boolean;
}

/**
 * An enum object for the boot result.
 * | field | description |
 * | --- | --- |
 * | SUCCESS | The boot was successful. |
 * | NOT_INITIALIZED | `ChannelIO.initialize` was not called. |
 * | NETWORK_TIMEOUT | The boot failed because of a network issue. |
 * | NOT_AVAILABLE_VERSION | Not a supported SDK version. |
 * | SERVICE_UNDER_CONSTRUCTION | Channel.io server is under construction. |
 * | REQUIRE_PAYMENT | The channel is blocked or you need to check the subscription plan. |
 * | ACCESS_DENIED | The server responded with 4xx status code. |
 * | UNKNOWN_ERROR | An unknown error. |
 * @see https://developers.channel.io/docs/react-native-models#bootstatus
 */
export type BootStatus =
    | "SUCCESS"
    | "NOT_INITIALIZED"
    | "NETWORK_TIMEOUT"
    | "NOT_AVAILABLE_VERSION"
    | "SERVICE_UNDER_CONSTRUCTION"
    | "REQUIRE_PAYMENT"
    | "ACCESS_DENIED"
    | "UNKNOWN_ERROR";

export interface BootSuccess {
    /**
     * The boot was successful.
     */
    status: "SUCCESS";
    user: User;
}

export interface BootError {
    status:
        | "NOT_INITIALIZED"
        | "NETWORK_TIMEOUT"
        | "NOT_AVAILABLE_VERSION"
        | "SERVICE_UNDER_CONSTRUCTION"
        | "REQUIRE_PAYMENT"
        | "ACCESS_DENIED"
        | "UNKNOWN_ERROR";
    user: undefined;
}

export interface UpdateUserSuccess {
    user: User;
    error: undefined;
}

export interface UpdateUserError {
    user: undefined;
    error: string;
}

export type UpdateUserResult = UpdateUserSuccess | UpdateUserError;

export interface RNChannelIO {
    /**
     * Loads the information needed to use the SDK. After a successful boot, you are ready to use the features of SDK.
     *
     * @see https://developers.channel.io/docs/react-native-channelio#boot
     */
    boot(options: BootConfig): Promise<BootSuccess | BootError>;

    /**
     * Disable all functions except receiving system push notifications and track.
     *
     * @see https://developers.channel.io/docs/react-native-channelio#sleep
     */
    sleep(): void;

    /**
     * Terminate connection between SDK and Channel. `shutdown` will discontinue features of the SDK will be discontinued.
     *
     * @see https://developers.channel.io/docs/react-native-channelio#shutdown
     */
    shutdown(): void;

    /**
     * Displays Channel button on the global screen.
     *
     * @see https://developers.channel.io/docs/react-native-channelio#showchannelbutton
     */
    showChannelButton(): void;

    /**
     * Hide Channel button on the global screen.
     *
     * @see https://developers.channel.io/docs/react-native-channelio#hidechannelbutton
     */
    hideChannelButton(): void;

    /**
     * Shows the messenger.
     *
     * @see https://developers.channel.io/docs/react-native-channelio#showmessenger
     */
    showMessenger(): void;

    /**
     * Hides the messenger.
     *
     * @see https://developers.channel.io/docs/react-native-channelio#hidemessenger
     */
    hideMessenger(): void;

    /**
     * Opens a Chat. You can open a new one or open an existing chat.
     *
     * @param chatId The id of chat. If chatId is invalid or nil, it will open a newly created chat.
     * @param message A filled message on the message input box. It will be valid when chatId is nil.
     *
     * @see https://developers.channel.io/docs/react-native-channelio#openchat
     */
    openChat(chatId?: string | null, message?: string | null): void;

    /**
     * Track the user’s event. See event tracking for more details.
     *
     * @param eventName Event name. max length is 30
     * @param eventProperty  Event properties.
     *
     * @see https://developers.channel.io/docs/react-native-channelio#track
     */
    track(eventName: string, eventProperty?: Record<string, any>): void;

    /**
     * Updates user information.
     *
     * @param data Information of the user to be updated.
     *
     * @see https://developers.channel.io/docs/react-native-channelio#updateuser
     */
    updateUser(data: UserData): Promise<UpdateUserResult>;

    /**
     * Add tags to the user.
     *
     * @param tags Tags to add.
     *     - The maximum length is 10.
     *     - Tag cannot be duplicated.
     *     - Tag is case-insensitive (Tags are renamed to the lower-case.)
     *     - nil, list including nil, empty list, and an empty string is not allowed.
     *
     * @see https://developers.channel.io/docs/react-native-channelio#addtags
     */
    addTags(tags: string[]): Promise<UpdateUserResult>;

    /**
     * Remove tags from the user. It Ignores if tags do not exist.
     *
     * @param tags Tags to be deleted. nil or empty strings or lists containing them are not allowed.
     * @see https://developers.channel.io/docs/react-native-channelio#removetags
     */
    removeTags(tags: string[]): Promise<UpdateUserResult>;

    /**
     * Sets the name of the screen when `track` is calling.
     * If you call track before setPage, it will not be reflected in the event.
     *
     * @param page The screen name when the track is called. A setPage(nil) call will literally set the page name as nil.
     *
     * @see https://developers.channel.io/docs/react-native-channelio#setpage
     */
    setPage(page?: string | null): void;

    /**
     * Resets the name of the screen when `track` is called.
     * The default value is the name of the ViewController or Activity calling the track.
     *
     * @see https://developers.channel.io/docs/react-native-channelio#resetpage
     */
    resetPage(): void;

    /**
     * Notifies the change of the device token to Channel.
     *
     * @param token Push token
     *
     * @see https://developers.channel.io/docs/react-native-channelio#initpushtoken
     */
    initPushToken(token: string): void;

    /**
     * Checks if the push payload is targeting on Channel SDK.
     *
     * @see https://developers.channel.io/docs/react-native-channelio#ischannelpushnotification
     */
    isChannelPushNotification(payload: Record<string, any>): Promise<boolean>;

    /**
     * **Android only**
     *
     * Show push notification
     * Notifies an event that the user has received the push notification.
     *
     * @param payload
     *
     * @see https://developers.channel.io/docs/react-native-channelio#receivepushnotification
     */
    receivePushNotification(payload: object): Promise<boolean>;

    /**
     * **Android only**
     *
     * Checks if the plugin has unhandled push notification. See push notifications for details.
     *
     * @see https://developers.channel.io/docs/react-native-channelio#hasstoredpushnotification
     */
    hasStoredPushNotification(): Promise<boolean>;

    /**
     * **Android only**
     *
     * Open chat according to the push data stored by receivePushNotification .
     *
     * @see https://developers.channel.io/docs/react-native-channelio#openstoredpushnotification
     */
    openStoredPushNotification(): void;

    /**
     * Checks that the SDK is in the `boot` status.
     *
     * @see https://developers.channel.io/docs/react-native-channelio#isbooted
     */
    isBooted(): Promise<boolean>;

    /**
     * Sets SDK’s debug mode. If it sets true, SDK prints log messages in the console.
     *
     * @param flag Debug mode flag
     *
     * @see https://developers.channel.io/docs/react-native-channelio#setdebugmode
     */
    setDebugMode(flag: boolean): void;

    /**
     * Invoked when the messenger is shown. Examples are the following:
     * - calls `showMessenger`
     * - calls `openChat`
     * - When the user opens messenger through Channel button
     *
     * @see https://developers.channel.io/docs/react-native-callbacks#onshowmessenger
     */
    onShowMessenger(callback?: () => void): void;

    /**
     * Invoked when the messenger is hidden. Examples are the following:
     * - calls `hideMessenger`
     * - calls `sleep`
     * - calls `shutdown`
     * - When the user closes messenger explicitly, such as by clicking the X button.
     *
     * @see https://developers.channel.io/docs/react-native-callbacks#onhidemessenger
     */
    onHideMessenger(callback?: () => void): void;

    /**
     * Invoked when SDK completes creating a new chat. Examples are the following:
     * - Explicit creating chat by the user such as by click a [new Chat button]
     * - calls `openChat` with `chatId = nil`
     *
     * @see https://developers.channel.io/docs/react-native-callbacks#onchatcreated
     */
    onChatCreated(callback?: (chatId: string) => void): void;

    /**
     * Invoked when the count of the user’s badge is changed. Examples are the following:
     * - `boot`
     * - When the user received the messages or marketing message
     *
     * @see  https://developers.channel.io/docs/react-native-callbacks#onbadgechanged
     */
    onBadgeChanged(callback?: (count: number) => void): void;

    /**
     * Invoked when Followup information is changed by the user.
     * It is not called by `ChannelIO.updateUser`. Values in dictionaries are nullable.
     *
     * @see  https://developers.channel.io/docs/react-native-callbacks#onfollowupchanged
     */
    onFollowUpChanged(callback?: (data: Record<string, any>) => void): void;

    /**
     * Invoked when the user clicks a link in the chat or clicks the link button.
     *
     * @see https://developers.channel.io/docs/react-native-callbacks#onurlclicked
     */
    onUrlClicked(callback?: (url: string, next: () => void) => void): void;

    /**
     * Invoked when receiving In-app message popup. Examples are the following:
     * - receive the message from the manager
     * - receive marketing message
     *
     * @see  https://developers.channel.io/docs/react-native-callbacks#onpopupdatareceived
     */
    onPopupDataReceived(callback?: (popupData: PopupData) => void): void;

    /**
     * Invoked when a system push notification is clicked. Call next function to use default behavior.
     * The onPushNotificationClicked callback only works for Android. A call to this function on iOS will be silently ignored.
     *
     * @see  https://developers.channel.io/docs/react-native-callbacks#onpushnotificationclicked
     */
    onPushNotificationClicked(callback?: (chatId: string, next: () => void) => void): void;
}

/**
 * @see https://developers.channel.io/docs/react-native-quickstart
 */
export const ChannelIO: RNChannelIO;
