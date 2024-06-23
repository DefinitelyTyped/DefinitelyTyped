declare namespace ChannelIO {
    interface APIError {
        errors: ErrorReason[];
        language: string;
        status: number;
        type: string;
    }

    type Appearance = "light" | "dark" | "system";

    /**
     * @see https://developers.channel.io/docs/web-boot-option
     */
    interface BootOption {
        /**
         * Your channel's {@link https://developers.channel.io/docs/sdk#get-a-plugin-key | plugin key}.
         *
         * @see https://developers.channel.io/docs/web-boot-option#pluginkey
         */
        pluginKey: string;

        /**
         * The ID of the {@link https://developers.channel.io/docs/glossary#member-user | member user}.
         *
         * @see https://developers.channel.io/docs/web-boot-option#memberid
         */
        memberId?: string | undefined;

        /**
         * The {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors | CSS Selector} to select a custom launcher.
         * Use this option to {@link https://developers.channel.io/docs/web-customization | customize} the default chat button.
         *
         * @see https://developers.channel.io/docs/web-boot-option#customlauncherselector
         */
        customLauncherSelector?: string | undefined;

        /**
         * Determines whether to hide the default chat button on boot.
         * The default value is `false`.
         *
         * @see https://developers.channel.io/docs/web-boot-option#hidechannelbuttononboot
         */
        hideChannelButtonOnBoot?: boolean | undefined;

        /**
         * Sets the {@link https://developer.mozilla.org/en-US/docs/Web/CSS/z-index | z-index} for SDK elements, such as the chat button, {@link https://developers.channel.io/docs/glossary#messenger | messenger}, and marketing pop-ups.
         * The default value is `10000000`.
         *
         * @see https://developers.channel.io/docs/web-boot-option#zindex
         */
        zIndex?: number | undefined;

        /**
         * Sets the default language.
         * This affects text display and sets the {@link User.language | `language`} for new users. Existing user `language` settings will not change.
         *
         * @see https://developers.channel.io/docs/web-boot-option#language
         */
        language?: string | undefined;

        /**
         * Determines whether to track the default {@link https://developers.channel.io/docs/event | event}(PageView).
         * The default value is `true`.
         *
         * @see https://developers.channel.io/docs/web-boot-option#trackdefaultevent
         */
        trackDefaultEvent?: boolean | undefined;

        /**
         * Determines whether to track the {@link https://support.google.com/analytics/answer/1033863 | UTM source} and {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer | referrer}.
         * The default value is true.
         *
         * @see https://developers.channel.io/docs/web-boot-option#trackutmsource
         */
        trackUtmSource?: boolean | undefined;

        /**
         * Sets the user’s {@link User.profile | profile}.
         *
         * @see https://developers.channel.io/docs/web-boot-option#profile
         */
        profile?: Profile;

        /**
         * Set whether to unsubscribe marketing emails for the user.
         * The default value is `false`.
         *
         * @see https://developers.channel.io/docs/web-boot-option#unsubscribeemail
         */
        unsubscribeEmail?: boolean | undefined;

        /**
         * Set whether to unsubscribe marketing SMS for the user.
         * The default value is `false`.
         *
         * @see https://developers.channel.io/docs/web-boot-option#unsubscribetexting
         */
        unsubscribeTexting?: boolean | undefined;

        /**
         * Set the hashed value of the {@link memberId} using {@link https://en.wikipedia.org/wiki/HMAC | HMAC}-{@link https://en.wikipedia.org/wiki/SHA-2 | SHA256}.
         *
         * @see https://developers.channel.io/docs/web-boot-option#memberhash
         */
        memberHash?: string | undefined;

        /**
         * Determines whether to hide marketing and message alarm pop-ups.
         * The default value is `false`.
         *
         * @see https://developers.channel.io/docs/web-boot-option#hidepopup
         */
        hidePopup?: boolean | undefined;

        /**
         * Set the initial theme appearance.
         * The default value is `null`.
         *
         * `"light"`: Use the light theme.
         * `"dark"`: Use the dark theme.
         * `"system"`: Follow the system theme.
         * `null`: Follow the {@link https://developers.channel.io/docs/glossary#desk | desk}’s theme setting.
         *
         * @see https://developers.channel.io/docs/web-boot-option#appearance
         */
        appearance?: Appearance | null;
    }

    type CallbackParams<T> = [error: null, data: T] | [error: APIError, data: null];

    interface ErrorReason {
        message: string;
    }

    /**
     * @see https://developers.channel.io/docs/web-channel-io#onfollowupchanged
     */
    interface FollowUpProfile {
        /**
         * The name of a user.
         */
        name: string | null;

        /**
         * The email of a user.
         */
        email: string | null;

        /**
         * The mobile number of a user. It follows {@link https://en.wikipedia.org/wiki/E.164 | E.164} format.
         */
        mobileNumber: string | null;
    }

    type Profile = Partial<Record<string, boolean | number | string>>;

    type Commands = keyof CommandSignature;

    interface CommandSignature {
        /**
         * Initialize for the SDK.
         * The {@link https://developers.channel.io/docs/glossary#channel-button | Channel button} appears, and features like the marketing pop-up are ready to use.
         *
         * For more details, see {@link https://developers.channel.io/docs/glossary#boot | boot}.
         *
         * @param bootOption - A {@link BootOption | boot option} to initialize the SDK.
         * @param callback - Callback function executed after boot. If boot fails, the callback receives an error object as the first argument and null as the second argument. If boot succeeds, the callback receives null as the first argument and a {@link User | user object} as the second argument.
         *
         * @example
         * ```javascript
         * ChannelIO('boot', {
         *   pluginKey: 'YOUR_PLUGIN_KEY'
         * }, function onBoot(error, user) {
         *   if (error) {
         *     console.error(error);
         *   } else {
         *     console.log('boot success', user);
         *   }
         * });
         * ```
         *
         * @see https://developers.channel.io/docs/web-channel-io#boot
         */
        boot: (bootOption: BootOption, callback?: (...params: CallbackParams<User>) => void) => void;

        /**
         * Stops all SDK operations and initializes internal data.
         *
         * @see https://developers.channel.io/docs/web-channel-io#shutdown
         */
        shutdown: () => void;

        /**
         * Shows the {@link https://developers.channel.io/docs/glossary#messenger | messenger}.
         *
         * @see https://developers.channel.io/docs/web-channel-io#showmessenger
         */
        showMessenger: () => void;

        /**
         * Hides the {@link https://developers.channel.io/docs/glossary#messenger | messenger}.
         *
         * @see https://developers.channel.io/docs/web-channel-io#hidemessenger
         */
        hideMessenger: () => void;

        /**
         * Opens a chat.
         *
         * - If `chatId` is `undefined`, a new chat is opened. If the `message` argument is provided, it appears in the input field. If the support bot is active, it will be triggered.
         * - If a chat corresponding to `chatId` exists, it is opened and the `message` argument is ignored. If the chat does not exist, an error page is displayed.
         *
         * @param chatId - The chat ID.
         * @param message - The message to be inputted in the input field when a new chat opens.
         *
         * @example
         * ```javascript
         * // Opens a new chat.
         * ChannelIO('openChat');
         *
         * // Opens a new chat with 'Text here' in the message field.
         * // If the support bot is active, it's triggered before the message appears.
         * ChannelIO('openChat', undefined, 'Text here');
         *
         * // Opens a chat with ID '123' or displays an error page if it doesn't exist.
         * ChannelIO('openChat', '123');
         * ````
         *
         * @see https://developers.channel.io/docs/web-channel-io#openchat
         */
        openChat: (chatId?: string | number, message?: string) => void;

        /**
         * Opens a chat and initiates a specific support bot.
         * If a support bot with the provided `supportBotId` exists, it will be triggered. If `supportBotId` is not provided or invalid, an error page is displayed.
         * If a `message` argument is provided, it will be inputted in the chat field after the support bot's operation completes.
         *
         * @param supportBotId - The ID of the support bot.
         * @param message - The message to be inputted in the input field after the support bot's operation.
         *
         * @example
         * ```javascript
         * // Triggers the support bot with ID '123'. Displays an error if it doesn't exist.
         * ChannelIO('openSupportBot', '123');
         *
         * // Triggers the support bot with ID '123' and inputs 'Text here' after completion.
         * // Displays an error if the bot doesn't exist.
         * ChannelIO('openSupportBot', '123', 'Text here');
         * ```
         *
         * @see https://developers.channel.io/docs/web-channelio#opensupportbot
         */
        openSupportBot: (supportBotId: string, message?: string) => void;

        /**
         * Tracks an {@link https://developers.channel.io/docs/event | event}.
         *
         * - If you track a new event that has not been created before, it will be created.
         * - It may take a few minutes to a few hours for the event to be visible at the {@link https://developers.channel.io/docs/glossary#desk | desk}.
         *
         * @param eventName - The name of the event. A maximum of 30 characters is allowed.
         * @param eventProperty - The property of the event.
         *
         * ```javascript
         * // Tracks an event named 'OrderRequest'.
         * ChannelIO('track', 'OrderRequest');
         *
         * // Tracks an event named 'Order' with additional properties.
         * ChannelIO('track', 'Order', {
         *   "price": 100,
         *   "currency": 'USD'
         * });
         * ```
         *
         * @see https://developers.channel.io/docs/web-channel-io#track
         */
        track: (eventName: string, eventProperty?: string | Profile) => void;

        /**
         * Registers a callback that is invoked when the {@link https://developers.channel.io/docs/glossary#messenger | messenger} is shown.
         *
         * @param callback - Callback function invoked when the messenger is shown.
         *
         * @example
         * ```javascript
         * ChannelIO('onShowMessenger', function onShowMessenger() {
         * 	console.log('Messenger is shown.');
         * });
         * ```
         *
         * @see https://developers.channel.io/docs/web-channel-io#onshowmessenger
         */
        onShowMessenger: (callback: () => void) => void;

        /**
         * Registers a callback that is invoked when the {@link https://developers.channel.io/docs/glossary#messenger | messenger} is hidden.
         *
         * @param callback - Callback function invoked when the messenger is hidden.
         *
         * @example
         * ```javascript
         * ChannelIO('onHideMessenger', function onHideMessenger() {
         * 	console.log('Messenger is hidden.');
         * });
         * ```
         *
         * @see https://developers.channel.io/docs/web-channel-io#onhidemessenger
         */
        onHideMessenger: (callback: () => void) => void;

        /**
         * Registers a callback that is invoked when there is a change in the count of messages that the user has not yet read.
         *
         * @param callback - Callback function invoked when there is a change in the count of messages that the user has not yet read. The callback receives two arguments: `unread` (the total number of unread notifications, displayed as a red dot on the {@link https://developers.channel.io/docs/glossary#channel-button | channel button}) and `alert` (the number of important unread notifications, displayed as a number on the {@link https://developers.channel.io/docs/glossary#channel-button | channel button}).
         *
         * @example
         * ```javascript
         * ChannelIO('onBadgeChanged', function onBadgeChanged(unread, alert) {
         * 	console.log(`Unread count: ${unread}, Alert count: ${alert}.`);
         * });
         * ```
         *
         * @see https://developers.channel.io/docs/web-channel-io#onbadgechanged
         */
        onBadgeChanged: (callback: (unread: number, alert: number) => void) => void;

        /**
         * Registers a callback that is invoked when a chat is created.
         *
         * @param callback - Callback function invoked when a new chat is created.
         *
         * @example
         * ```javascript
         * ChannelIO('onChatCreated', function onChatCreated() {
         * 	console.log('New Chat is created.');
         * });
         * ```
         *
         * @see https://developers.channel.io/docs/web-channel-io#onchatcreated
         */
        onChatCreated: (callback: () => void) => void;

        /**
         * Registers a callback that is invoked when there are changes to the user's profile.
         *
         * @param callback - Callback function invoked when the user's profile is updated. The callback receives the updated profile object as an argument.
         *
         * @example
         * ```javascript
         * ChannelIO('onFollowUpChanged', function onFollowUpChanged(profile) {
         * 	console.log('User changed profile', profile);
         * });
         * ```
         *
         * @see https://developers.channel.io/docs/web-channel-io#onfollowupchanged
         */
        onFollowUpChanged: (callback: (profile: FollowUpProfile) => void) => void;

        /**
         * Registers a callback that is invoked when the user clicks a link. This includes following links.
         * - Link button or Link text in marketing pop-ups
         * - Link button or Link text sent by managers in chat
         *
         * @param callback - Callback function invoked when a link is clicked. It receives the URL of the clicked link as an argument.
         *
         * @example
         * ```javascript
         * ChannelIO('onUrlClicked', function onUrlClicked(url) {
         *   console.log(`User clicked URL: ${url}`);
         * });
         * ```
         *
         * @see https://developers.channel.io/docs/web-channel-io#onurlclicked
         */
        onUrlClicked: (callback: (url: string) => void) => void;

        /**
         * Clears all callbacks registered by following APIs.
         * - {@link onShowMessenger}
         * - {@link onHideMessenger}
         * - {@link onBadgeChanged}
         * - {@link onFollowUpChanged}
         * - {@link onChatCreated}
         * - {@link onUrlClicked}
         *
         * @see https://developers.channel.io/docs/web-channel-io#clearcallbacks
         */
        clearCallbacks: (callback?: () => void) => void;

        /**
         * Update a user’s information.
         *
         * @param userObject - An object containing the user’s information to be updated.
         * @param callback - Callback function invoked after the update. If the update fails, the callback receives an error object as the first argument and null as the second argument. If the update succeeds, the callback receives null as the first argument and an updated {@link User | user object} at the second argument.
         *
         * @example
         * ```javascript
         * const userObject = {
         *   language: 'ko',
         *   tags: ['a', 'b'],
         *   profile: {
         *     email: 'test@email.com',
         *     mobileNumber: '+821012345678',
         *     name: 'test name',
         *   },
         *   profileOnce: {
         *     customerType: 'vip',
         *     registeredAt: '2022-11-22'
         *   },
         *   unsubscribeEmail: false,
         *   unsubscribeTexting: true
         * };
         *
         * ChannelIO('updateUser', userObject, function onUpdateUser(error, user) {
         *   if (error) {
         *     console.error(error);
         *   } else {
         *     console.log('updateUser success', user);
         *   }
         * });
         * ```
         *
         * @see https://developers.channel.io/docs/web-channel-io#updateuser
         */
        updateUser: (
            userObject: Partial<UpdateUserOption>,
            callback?: (...params: CallbackParams<User>) => void,
        ) => void;

        /**
         * Adds a user’s tags.
         *
         * @param tags - An array of tags to add. A maximum of 10 tags is allowed. Tags are always in lowercase.
         * @param callback - Callback function invoked after adding tags. If the addition fails, the callback receives an error object as the first argument and null as the second argument. If the addition succeeds, the callback receives null as the first argument and an updated {@link User | user object} as the second argument.
         *
         * @example
         * ```javascript
         * ChannelIO('addTags', ['tag1', 'tag2'], function onAddTags(error, user) {
         *   if (error) {
         *     console.error(error);
         *   } else {
         *     console.log('addTags success', user);
         *   }
         * });
         * ```
         *
         * @see https://developers.channel.io/docs/web-channel-io#addtags
         */
        addTags: (tags: Tags, callback?: (...params: CallbackParams<User>) => void) => void;

        /**
         * Removes a user’s tags.
         *
         * @param tags - An array of tags to remove. If the corresponding tag does not exist, it will be ignored. Passing `null` or an empty array is not allowed.
         * @param callback - Callback function invoked after removing tags. If the removal fails, the callback receives an error object as the first argument and null as the second argument. If the removal succeeds, the callback receives null as the first argument and an updated {@link User | user object} as the second argument.
         *
         * @example
         * ```
         * ChannelIO('removeTags', ['tag1', 'tag2'], function onRemoveTags(error, user) {
         *   if (error) {
         *     console.error(error);
         *   } else {
         *     console.log('removeTags success', user);
         *   }
         * });
         * ```
         *
         * @see https://developers.channel.io/docs/web-channel-io#removetags
         */
        removeTags: (tags: Tags, callback?: (...params: CallbackParams<User>) => void) => void;

        /**
         * Set the {@link https://developers.channel.io/docs/page | page}.
         * Page can be used instead of {@link https://developers.channel.io/docs/canonical-url | canonical URL}.
         *
         * @param page - The value of the page to set.
         *
         * @example
         * ```
         * ChannelIO('setPage', 'https://example.com/product');
         * ```
         *
         * @see https://developers.channel.io/docs/web-channel-io#setpage
         */
        setPage: (page: string | null | undefined) => void;

        /**
         * Reset the `page` value set by {@link setPage}.
         * When `resetPage` is used, the {@link https://developers.channel.io/docs/canonical-url | canonical URL} will be used as the page value.
         *
         * @see https://developers.channel.io/docs/web-channel-io#resetpage
         */
        resetPage: () => void;

        /**
         * Show the {@link https://developers.channel.io/docs/glossary#channel-button | channel button}.
         *
         * @see https://developers.channel.io/docs/web-channel-io#showchannelbutton
         */
        showChannelButton: () => void;

        /**
         * Hides the {@link https://developers.channel.io/docs/glossary#channel-button | channel button}.
         *
         * @see https://developers.channel.io/docs/web-channel-io#hidechannelbutton
         */
        hideChannelButton: () => void;

        /**
         * Set the appearance of the theme.
         *
         * - `‘light’`: Uses the light theme.
         * - `‘dark’`: Uses the dark theme.
         * - `‘system’`: Follows the system theme.
         * - `null`: Follows the theme setting from the {@link https://developers.channel.io/docs/glossary#desk | desk}.
         *
         * @param appearance - The appearance setting for the theme.
         *
         * @example
         * ```javascript
         * ChannelIO('setAppearance', 'dark');
         * ```
         *
         * @see https://developers.channel.io/docs/web-channelio#setappearance
         */
        setAppearance: (appearance: Appearance | null) => void;
    }

    interface Singleton {
        <Command extends Commands>(command: Command, ...params: Parameters<CommandSignature[Command]>): ReturnType<
            CommandSignature[Command]
        >;
    }

    type Tags = readonly [string, ...string[]];

    /**
     * @see https://developers.channel.io/docs/web-channel-io#updateuser
     */
    interface UpdateUserOption {
        /**
         * Sets the user’s language. UI text changes to the specified language if `language` is `‘ko’` or `‘ja’`. Otherwise, UI text defaults to English.
         */
        language: string;

        /**
         * Sets the user’s tags. A maximum of 10 tags are allowed. Passing `null` resets all tags. Empty arrays are not allowed.
         */
        tags: Tags | null;

        /**
         * Sets the user’s profile. Passing null resets the entire profile. To reset a specific field in the profile object, pass null for that field. Empty objects are not allowed, and field names should follow {@link https://en.wikipedia.org/wiki/Camel_case | Camel Case}. For mobileNumber, follow {@link https://en.wikipedia.org/wiki/E.164 | e.164} format.
         */
        profile: Profile | null;

        /**
         * Sets the user’s profile with fields that have no existing values.
         */
        profileOnce: Profile | null;

        /**
         * Sets whether the user is subscribed to marketing emails. Subscription is terminated if set to `true`.
         */
        unsubscribeEmail: boolean;

        /**
         * Sets whether the user is subscribed to marketing SMS. Subscription is terminated if set to `true`.
         */
        unsubscribeTexting: boolean;
    }

    /**
     * @example
     * ```javascript
     * {
     *     "id": "USER_ID",
     *     "memberId": "MEMBER_ID",
     *     "name": "USER_NAME",
     *     "avatarUrl": "AVATAR_URL",
     *     "unread": 5,
     *     "alert": 3,
     *     "profile": {
     *       "name": "USER_NAME",
     *       "email": "USER_EMAIL",
     *       "mobileNumber": "+821012345678",
     *       "CUSTOM_VALUE_1": "VALUE_1",
     *       "CUSTOM_VALUE_2": "VALUE_2"
     *     },
     *     "unsubscribeEmail": true,
     *     "unsubscribeTexting": true,
     *     "tags": ["tag1", "tag2"],
     *     "language": "ko"
     * }
     * ```
     *
     * @see https://developers.channel.io/docs/web-user-object
     */
    interface User {
        /**
         * The user's ID.
         *
         * @see https://developers.channel.io/docs/web-user-object#id
         */
        id: string;

        /**
         * The ID used for recognizing a {@link https://developers.channel.io/docs/glossary#member-user | member user}.
         * If {@link BootOption.memberId | memberId} is specified in the boot option, the user is considered a member user.
         *
         * @see https://developers.channel.io/docs/web-user-object#memberid
         */
        memberId: string;

        /**
         * The name of a user.
         * Set via {@link CommandSignature.updateUser | updateUser}.
         *
         * @see https://developers.channel.io/docs/web-user-object#name
         */
        name: string;

        /**
         * The URL of the user's avatar image.
         *
         * @see https://developers.channel.io/docs/web-user-object#avatarurl
         */
        avatarUrl: string;

        /**
         * The total count of unread notifications for the user.
         * It includes the number of `alert`. It is displayed as a red dot on the {@link https://developers.channel.io/docs/glossary#channel-button | channel button}.
         *
         * @see https://developers.channel.io/docs/web-user-object#unread
         */
        unread: number;

        /**
         * The count of important unread notifications for the user.
         * It is displayed as a number on the {@link https://developers.channel.io/docs/glossary#channel-button | channel button}.
         *
         * @see https://developers.channel.io/docs/web-user-object#alert
         */
        alert: number;

        /**
         * A user’s profile information.
         * Set via {@link CommandSignature.updateUser | updateUser} or the {@link BootOption.profile | profile} of boot option.
         *
         * @see https://developers.channel.io/docs/web-user-object#profile
         */
        profile: Record<string, string>;

        /**
         * Indicates whether the user has opted out of marketing emails.
         * Set via {@link CommandSignature.updateUser | updateUser} or {@link BootOption.unsubscribeEmail | unsubscribeEmail} of boot option.
         *
         * @see https://developers.channel.io/docs/web-user-object#unsubscribeemail
         */
        unsubscribeEmail: boolean;

        /**
         * Indicates whether the user has opted out of marketing SMS.
         * Set via {@link CommandSignature.updateUser | updateUser} or {@link BootOption.unsubscribeTexting | unsubscribeTexting} of boot option.
         *
         * @see https://developers.channel.io/docs/web-user-object#unsubscribetexting
         */
        unsubscribeTexting: boolean;

        /**
         * A list of tags associated with the user.
         * All tags are in lowercase.
         * Set via {@link CommandSignature.updateUser | updateUser}, {@link CommandSignature.addTags | addTags}, and {@link CommandSignature.removeTags | removeTags}.
         *
         * @see https://developers.channel.io/docs/web-user-object#tags
         */
        tags: readonly string[];

        /**
         * The user's language setting.
         * Used for translation purposes.
         * Set via {@link CommandSignature.updateUser | updateUser} and {@link BootOption.language | language} of boot option.
         *
         * Following 32 languages supported.
         * : 'de'(German), 'hi'(Hindi), 'no'(Norwegian), 'ru'(Russian), 'fi'(Finnish), 'pt'(Portuguese), 'hr'(Croatian), 'fr'(French), 'hu'(Hungarian), 'uk'(Ukrainian), 'sk'(Slovak), 'ca'(Catalan), 'sv'(Swedish), 'ko'(Korean), 'id'(Indonesian), 'ms'(Malay), 'el'(Greek), 'en'(English), 'it'(Italian), 'es'(Spanish), 'he'(Hebrew), 'zh'(Chinese), 'cs'(Czech), 'ar'(Arabic), 'vi'(Vietnamese),'th'(Thai), 'ja'(Japanese), 'pl'(Polish), 'ro'(Romanian), 'da'(Danish), 'nl'(Dutch), 'tr'(Turkish)
         *
         * @see https://developers.channel.io/docs/web-user-object#language
         */
        language: string;
    }
}

declare var ChannelIO: ChannelIO.Singleton;
