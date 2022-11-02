// Type definitions for non-npm package ChannelIO SDK 0.0
// Project: https://developers.channel.io/docs/js-sdk-reference
// Definitions by: Ryota Kameoka <https://github.com/ryota-ka>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace ChannelIO {
    interface APIError {
        errors: ErrorReason[];
        language: string;
        status: number;
        type: string;
    }

    /**
     * An object that contains information for ChannelIO boot
     *
     * @see https://developers.channel.io/docs/web-boot-option
     */
    interface BootOption {
        /**
         * Channel plugin's key
         *
         * @see https://developers.channel.io/docs/web-boot-option#pluginkey-require
         */
        pluginKey: string;
        /**
         * member (user) identification id used by your company
         *
         * @see https://developers.channel.io/docs/web-boot-option#memberid-optional
         */
        memberId?: string | undefined;
        /**
         * Css selector for custom button. Use it with `hideChannelButtonOnBoot` set to `true`
         *
         * @see https://developers.channel.io/docs/web-boot-option#customlauncherselector-optional
         */
        customLauncherSelector?: string | undefined;
        /**
         * Flag to decide whether to hide the default button.
         *
         * @see https://developers.channel.io/docs/web-boot-option#hidechannelbuttononboot-optional
         */
        hideChannelButtonOnBoot?: boolean | undefined;
        /**
         * Custom plugin button's z-index
         *
         * @see https://developers.channel.io/docs/web-boot-option#zindex-optional
         */
        zIndex?: number | undefined;
        /**
         * Set default language. Only (en, ko, ja) available.
         * It does not change for users who have already been created.
         *
         * @see https://developers.channel.io/docs/web-boot-option#language-optional
         */
        language?: string | undefined;
        /**
         * Whether to send default events (usually PageView).
         * Default value is `true`
         *
         * @see https://developers.channel.io/docs/web-boot-option#trackdefaultevent-optional
         */
        trackDefaultEvent?: boolean | undefined;
        /**
         * Flag to decide whether to track UTM source and referrer or not.
         * Default value is `true`
         *
         * @see https://developers.channel.io/docs/web-boot-option#trackutmsource-optional
         */
        trackUtmSource?: boolean | undefined;
        /**
         * Profile object contains user information.
         * If this property is present, it will be used when boot is get called
         *
         * @see https://developers.channel.io/docs/web-boot-option#profile-optional
         */
        profile?: Profile;
        /**
         * Set chat ux. Only (newTab, iframe) available.
         *
         * @see https://developers.channel.io/docs/web-boot-option#mobilemessengermode-optional
         */
        mobileMessengerMode?: string | undefined;
        /**
         * a value of whether or not to accept marketing
         *
         * @deprecated Recommend to use unsubscribeEmail and unsubscribeTexting instead.
         * @see https://developers.channel.io/docs/web-boot-option#unsubscribed-optional
         */
        unsubscribed?: boolean | undefined;
        /**
         * a value of whether or not to accept marketing email
         *
         * @see https://developers.channel.io/docs/web-boot-option#unsubscribeemail
         */
        unsubscribeEmail?: boolean | undefined;
        /**
         * a value of whether or not to accept marketing SMS
         *
         * @see https://developers.channel.io/docs/web-boot-option#unsubscribetexting
         */
        unsubscribeTexting?: boolean | undefined;
        /**
         * the hashed value of `memberId` using SHA256
         *
         * @see https://developers.channel.io/docs/web-boot-option#memberhash-optional
         */
        memberHash?: string | undefined;
        /**
         * Set whether to hide marketing and message notification pop-up
         *
         * @see https://developers.channel.io/docs/web-boot-option#hidepopup-optional
         */
        hidePopup?: boolean | undefined;
    }

    type CallbackParams<T> = [error: null, data: T] | [error: APIError, data: null];

    interface ErrorReason {
        message: string;
    }

    /**
     * @see https://developers.channel.io/docs/web-channel-io#onfollowupchanged
     */
    interface FollowUpProfile {
        name: string;
        email: string;
        mobileNumber: string;
    }

    type Profile = Partial<Record<string, boolean | number | string>>;

    type Commands = keyof CommandSignature;

    interface CommandSignature {
        /**
         * Boot up channel plugin(button) to make it ready to use
         *
         * @param option - a Boot Option object contains informations to initialize Channel IO plugin
         * @param callback - a callback function which will be called after boot.
         * @see https://developers.channel.io/docs/web-channel-io#boot
         */
        boot: (option: BootOption, callback?: (...params: CallbackParams<User>) => void) => void;
        /**
         * Shutdown channel plugin
         *
         * @see https://developers.channel.io/docs/web-channel-io#shutdown
         */
        shutdown: () => void;
        /**
         * Show plugin messenger
         *
         * @see https://developers.channel.io/docs/web-channel-io#showmessenger
         */
        showMessenger: () => void;
        /**
         * Show plugin messenger
         *
         * @deprecated Recommend to use showMessenger instead.
         * @see https://developers.channel.io/docs/web-channel-io#showmessenger
         */
        show: () => void;
        /**
         * Hide plugin messenger
         *
         * @see https://developers.channel.io/docs/web-channel-io#hidemessenger
         */
        hideMessenger: () => void;
        /**
         * Hide plugin messenger
         *
         * @deprecated Recommend to use hideMessenger instead.
         * @see https://developers.channel.io/docs/web-channel-io#hide
         */
        hide: () => void;
        /**
         * Go to the lounge view.
         *
         * @deprecated lounge API won't work in all mobile environments.
         * @see https://developers.channel.io/docs/web-channel-io#lounge
         */
        lounge: () => void;
        /**
         * Open a chat with the given chat id and message.
         * If the given chat id exists, appropriate chat will be opened.
         * If not, lounge will be opened.
         * In this case, the message will be ignored.
         * If chat id is empty and message is given, new chat will be opened and the given message will be put in the input box.
         * In this case, if the support bot is enable, support bot will run.
         * if chat id and message is both empty, new chat will be opened.
         *
         * @param chatId - The id of the chat
         * @param message - The message which will be put in the input box on messenger when new chat is opened
         * @see https://developers.channel.io/docs/web-channel-io#openchat
         */
        openChat: (chatId?: string | number, message?: string) => void;
        /**
         * Track an event
         *
         * @param eventName - name of event, its length should be less than 30
         * @param eventProperty - an object contains key/value information
         * @see https://developers.channel.io/docs/web-channel-io#track
         */
        track: (eventName: string, eventProperty?: string | Profile) => void;
        /**
         * Register a callback function when boot was completed.
         * Returns a user if `boot` was succeeded.
         * `user` is `undefined` when `boot` failed.
         *
         * @deprecated Recommend to use boot callback instead.
         * @see https://developers.channel.io/docs/web-channel-io#onboot
         */
        onBoot: (callback: (user: User | undefined) => void) => void;
        /**
         * Register a callback function when the chat list is shown.
         *
         * @see https://developers.channel.io/docs/web-channel-io#onshowmessenger
         */
        onShowMessenger: (callback: () => void) => void;

        /**
         * Register a callback function when the chat list is shown.
         *
         * @deprecated Recommend to use onShowMessenger instead.
         * @see https://developers.channel.io/docs/web-channel-io#onshow
         */
        onShow: (callback: () => void) => void;
        /**
         * Register a callback function when the chat list is hidden.
         *
         * @see https://developers.channel.io/docs/web-channel-io#onhidemessenger
         */
        onHideMessenger: (callback: () => void) => void;
        /**
         * Register a callback function when the chat list is hidden.
         *
         * @deprecated Recommend to use onHideMessenger instead.
         * @see https://developers.channel.io/docs/web-channel-io#onhide
         */
        onHide: (callback: () => void) => void;
        /**
         * Register a callback when `unreadCount` is changed.
         *
         * @see https://developers.channel.io/docs/web-channel-io#onbadgechanged
         */
        onBadgeChanged: (callback: (unreadCount: number) => void) => void;
        /**
         * Register a callback when `unreadCount` is changed.
         *
         * @see https://developers.channel.io/docs/web-channel-io#onchangebadge
         */
        onChangeBadge: (callback: (unreadCount: number) => void) => void;
        /**
         * Register a callback when a user success to create a chat.
         *
         * @see https://developers.channel.io/docs/web-channel-io#onchatcreated
         */
        onChatCreated: (callback: () => void) => void;
        /**
         * Register a callback when a user success to change their profile in the settings page or the follow-up form.
         * `profile` is an object of the user's profile includes following fields:
         * - `name`
         * - `email`
         * - `mobileNumber`
         *
         * @see https://developers.channel.io/docs/web-channel-io#onfollowupchanged
         */
        onFollowUpChanged: (callback: (profile: FollowUpProfile) => void) => void;
        /**
         * @deprecated Recommend to use onChatCreated instead.
         */
        onCreateChat: (callback: () => void) => void;
        /**
         * Register a callback when a user success to change their profile in the settings page and chats.
         * `profile` is an object of the user's profile.
         *
         * @see https://developers.channel.io/docs/web-channel-io#onchangeprofile
         */
        onProfileChanged: (callback: (profile: Profile) => void) => void;
        /**
         * Register a callback when a user success to change their profile in the settings page and chats.
         * `profile` is an object of the user's profile.
         *
         * @deprecated Recommend to use onProfileChanged instead.
         * @see https://developers.channel.io/docs/web-channel-io#onchangeprofile
         */
        onChangeProfile: (callback: (profile: Profile) => void) => void;
        /**
         * Register a callback when a user clicks redirect images or buttons.
         * We pass the redirect url to a function.
         *
         * @see https://developers.channel.io/docs/web-channel-io#onurlclicked
         */
        onUrlClicked: (callback: (url: string) => void) => void;
        /**
         * Register a callback when a user clicks redirect images or buttons.
         * We pass the redirect url to a function.
         *
         * @deprecated Recommend to use onUrlClicked instead.
         * @see https://developers.channel.io/docs/web-channel-io#onclickredirect
         */
        onClickRedirect: (callback: (url: string) => void) => void;
        /**
         * Clear all callbacks registered.
         *
         * @see https://developers.channel.io/docs/web-channel-io#clearcallbacks
         */
        clearCallbacks: (callback?: () => void) => void;
        /**
         * Update user information.
         *
         * @see https://developers.channel.io/docs/web-channel-io#updateuser
         */
        updateUser: (profile: Partial<UpdateUserOption>, callback?: (...params: CallbackParams<User>) => void) => void;
        /**
         * Add tags.
         *
         * @param tags - Tags to be added. Duplicate values are maintained. Combined tag list cannot exceed 10. Null or empty list is not allowed. Always lower case.
         * @see https://developers.channel.io/docs/web-channel-io#addtags
         */
        addTags: (tags: Tags, callback?: (...params: CallbackParams<User>) => void) => void;
        /**
         * Remove tags.
         *
         * @param tags Tags to be erased. If there is no match tag value, it is ignored. Null or empty list is not allowed.
         * @see https://developers.channel.io/docs/web-channel-io#removetags
         */
        removeTags: (tags: Tags, callback?: (...params: CallbackParams<User>) => void) => void;
        /**
         * Set page to be used instead of canonical url .
         * setPage with null or undefined is different from resetPage. (that will send page data with null)
         *
         * @param page - Page data to replace default page value
         * @see https://developers.channel.io/docs/web-channel-io#setpage
         */
        setPage: (page: string | null | undefined) => void;
        /**
         * Reset page data customized by developer.
         * If you call resetPage, page data will fill with canonical url .
         *
         * @see https://developers.channel.io/docs/web-channel-io#resetpage
         */
        resetPage: () => void;
        /**
         * Show channel button.
         *
         * @see https://developers.channel.io/docs/web-channel-io#showchannelbutton
         */
        showChannelButton: () => void;
        /**
         * Hide channel button.
         *
         * @see https://developers.channel.io/docs/web-channel-io#hidechannelbutton
         */
        hideChannelButton: () => void;
    }

    interface Singleton {
        <Command extends Commands>(command: Command, ...params: Parameters<CommandSignature[Command]>): ReturnType<
            CommandSignature[Command]
        >;
    }

    type Tags = [string, ...string[]];

    /**
     * @see https://developers.channel.io/docs/web-channel-io#updateuser
     */
    interface UpdateUserOption {
        /**
         * Set user's language.
         * When language is 'ko' or 'ja', interface is change to these languages.
         * Else case, interface language is set to english.
         * When set invalid language, user's language field is set to null
         */
        language: string;
        /**
         * Tags to overwrite.
         * Max 10 tags are allowed.
         * Set null to reset.
         * Empty list is not allowed.
         */
        tags: Tags | null;
        /**
         * Profile map to overwrite.
         * Set null to reset.
         * Set null for profile value to reset profile value.
         * Empty map is not allowed.
         * Always lower case.
         */
        profile: Profile | null;
        /**
         * Map of profile to be added if there is no each profile values.
         */
        profileOnce: Profile | null;
        /**
         * Terminates the user's marketing email subscription.
         */
        unsubscribeEmail: boolean;
        /**
         * Terminates the user's marketing SMS subscription.
         */
        unsubscribeTexting: boolean;
    }

    /**
     * An object that contains information about user
     *
     * @see https://developers.channel.io/docs/web-user-object
     */
    interface User {
        /**
         * a user id used inside channel
         *
         * @see https://developers.channel.io/docs/web-user-object#id
         */
        id: string;
        /**
         * member (user) identification id used by your company
         *
         * @see https://developers.channel.io/docs/web-user-object#memberid
         */
        memberId: string;
        /**
         * a user name
         *
         * @see https://developers.channel.io/docs/web-user-object#name
         */
        name: string;
        /**
         * user's avatar url if exist
         *
         * @see https://developers.channel.io/docs/web-user-object#avatarurl
         */
        avatarUrl: string;
        /**
         * user's alert count
         *
         * @see https://developers.channel.io/docs/web-user-object#alert
         */
        alert: number;
        /**
         * an object contains user's key/value profile information
         *
         * @see https://developers.channel.io/docs/web-user-object#profile
         */
        profile: Record<string, string>;
        /**
         * a value of whether or not to accept marketing email
         *
         * @see https://developers.channel.io/docs/web-user-object#unsubscribeemail
         */
        unsubscribeEmail: boolean;
        /**
         * a value of whether or not to accept marketing SMS
         *
         * @see https://developers.channel.io/docs/web-user-object#unsubscribetexting
         */
        unsubscribeTexting: boolean;
        /**
         * user tags
         *
         * @see https://developers.channel.io/docs/web-user-object#tags
         */
        tags: string[];
        /**
         * user's language
         *
         * @see https://developers.channel.io/docs/web-user-object#language
         */
        language: string;
    }
}

declare var ChannelIO: ChannelIO.Singleton;
