declare global {
    interface Window {
        Telegram: Telegram;
    }
}

export interface Telegram {
    WebApp: WebApp;
}

export type CallbackReturnValue = void | Promise<void>;
export type ClickHandler = () => CallbackReturnValue;
export type SuccessCallback = (success: boolean) => CallbackReturnValue;

export interface WebApp {
    /**
  A string with raw data transferred to the Mini App, convenient for validating data.
  WARNING: Validate data from this field before using it on the bot's server.
    */
    initData: string;
    /**
  An object with input data transferred to the Mini App.
  WARNING: Data from this field should not be trusted. You should only use data from initData on the bot's server and only after it has been validated.
    */
    initDataUnsafe: WebAppInitData;
    /**
  The version of the Bot API available in the user's Telegram app.
    */
    version: string;
    /**
  The name of the platform of the user's Telegram app.
    */
    platform: "ios" | "android" | "windows" | "linux" | "macos" | "web" | "unknown";
    /**
  The color scheme currently used in the Telegram app. Either “light” or “dark”.
  Also available as the CSS variable var(--tg-color-scheme).
    */
    colorScheme: "light" | "dark";
    /**
  An object containing the current theme settings used in the Telegram app.
    */
    themeParams: ThemeParams;
    /**
  Bot API 8.0+ True, if the Mini App is currently active. False, if the Mini App is minimized.
    */
    isActive: boolean;
    /**
  True, if the Mini App is expanded to the maximum available height. False, if the Mini App occupies part of the screen and can be expanded to the full height using the expand() method.
    */
    isExpanded: boolean;
    /**
  The current height of the visible area of the Mini App. Also available in CSS as the variable var(--tg-viewport-height).

  The application can display just the top part of the Mini App, with its lower part remaining outside the screen area. From this position, the user can “pull” the Mini App to its maximum height, while the bot can do the same by calling the expand() method. As the position of the Mini App changes, the current height value of the visible area will be updated in real time.

  Please note that the refresh rate of this value is not sufficient to smoothly follow the lower border of the window. It should not be used to pin interface elements to the bottom of the visible area. It's more appropriate to use the value of the viewportStableHeight field for this purpose.
    */
    viewportHeight: number;
    /**
  The height of the visible area of the Mini App in its last stable state. Also available in CSS as a variable var(--tg-viewport-stable-height).

  The application can display just the top part of the Mini App, with its lower part remaining outside the screen area. From this position, the user can “pull” the Mini App to its maximum height, while the bot can do the same by calling the expand() method. Unlike the value of viewportHeight, the value of viewportStableHeight does not change as the position of the Mini App changes with user gestures or during animations. The value of viewportStableHeight will be updated after all gestures and animations are completed and the Mini App reaches its final size.

  Note the event viewportChanged with the passed parameter isStateStable=true, which will allow you to track when the stable state of the height of the visible area changes.
    */
    viewportStableHeight: number;
    /**
  Current header color in the #RRGGBB format.
    */
    headerColor: string;
    /**
  Current background color in the #RRGGBB format.
    */
    backgroundColor: string;
    /**
  Current bottom bar color in the #RRGGBB format.
    */
    bottomBarColor: string;
    /**
  True, if the confirmation dialog is enabled while the user is trying to close the Mini App. False, if the confirmation dialog is disabled.
    */
    isClosingConfirmationEnabled: boolean;
    /**
  True, if vertical swipes to close or minimize the Mini App are enabled. False, if vertical swipes to close or minimize the Mini App are disabled. In any case, the user will still be able to minimize and close the Mini App by swiping the Mini App's header.
    */
    isVerticalSwipesEnabled: boolean;
    /**
  True, if the Mini App is currently being displayed in fullscreen mode.
    */
    isFullscreen: boolean;
    /**
  True, if the Mini App’s orientation is currently locked. False, if orientation changes freely based on the device’s rotation.
    */
    isOrientationLocked: boolean;
    /**
  An object representing the device's safe area insets, accounting for system UI elements like notches or navigation bars.
    */
    safeAreaInset: SafeAreaInset;
    /**
  An object representing the safe area for displaying content within the app, free from overlapping Telegram UI elements.
    */
    contentSafeAreaInset: ContentSafeAreaInset;
    /**
  An object for controlling the back button which can be displayed in the header of the Mini App in the Telegram interface.
    */
    BackButton: BackButton;
    /**
  An object for controlling the main button, which is displayed at the bottom of the Mini App in the Telegram interface.
    */
    MainButton: BottomButton;
    /**
  An object for controlling the secondary button, which is displayed at the bottom of the Mini App in the Telegram  nterface.
    */
    SecondaryButton: BottomButton;
    /**
  An object for controlling the Settings item in the context menu of the Mini App in the Telegram interface.
    */
    SettingsButton: SettingsButton;
    /**
  An object for controlling haptic feedback.
    */
    HapticFeedback: HapticFeedback;
    /**
  This object controls the cloud storage. Each bot can store up to 1024 items per user in the cloud storage.
    */
    CloudStorage: CloudStorage;
    /**
  An object for controlling biometrics on the device.
    */
    BiometricManager: BiometricManager;
    /**
  An object for accessing accelerometer data on the device.
    */
    Accelerometer: Accelerometer;
    /**
  An object for accessing device orientation data on the device.
    */
    DeviceOrientation: DeviceOrientation;
    /**
  An object for accessing gyroscope data on the device.
    */
    Gyroscope: Gyroscope;
    /**
  This object controls location access on the device. Before the first use of this object, it needs to be initialized using the init method.
    */
    LocationManager: LocationManager;

    /**
 This object provides access to persistent local storage on the user’s device. It is conceptually similar to the browser's localStorage API, but integrated within the Telegram client. All data is stored locally and is available only to the bot that created it. Each bot can store up to 5 MB per user using this storage.
 */
    DeviceStorage: DeviceStorage;
    /**
This object provides access to a secure storage on the user’s device for sensitive data. On iOS, it uses the system Keychain; on Android, it uses the Keystore. This ensures that all stored values are encrypted at rest and inaccessible to unauthorized applications.

Secure storage is suitable for storing tokens, secrets, authentication state, and other sensitive user-specific information. Each bot can store up to 10 items per user.
 */
    SecureStorage: SecureStorage;
    /**
Returns true if the user's app supports a version of the Bot API that is equal to or higher than the version passed as the parameter.
    */
    isVersionAtLeast: (version: string) => boolean;
    /**
  Bot API 6.1+ A method that sets the app header color in the #RRGGBB format. You can also use keywords bg_color and secondary_bg_color.

  Up to Bot API 6.9 You can only pass Telegram.WebApp.themeParams.bg_color or Telegram.WebApp.themeParams.secondary_bg_color as a color or bg_color, secondary_bg_color keywords.
    */
    setHeaderColor: (color: "bg_color" | "secondary_bg_color" | (string & {})) => void;
    /**
  Bot API 6.1+ A method that sets the app background color in the #RRGGBB format. You can also use keywords bg_color and secondary_bg_color.
    */
    setBackgroundColor: (color: "bg_color" | "secondary_bg_color" | (string & {})) => void;
    /**
  Bot API 7.10+ A method that sets the app's bottom bar color in the #RRGGBB format. You can also use the keywords bg_color, secondary_bg_color, and bottom_bar_bg_color. This color is also applied to the navigation bar on Android.
    */
    setBottomBarColor: (color: "bg_color" | "secondary_bg_color" | "bottom_bar_bg_color" | (string & {})) => void;
    /**
  Bot API 6.2+ A method that enables a confirmation dialog while the user is trying to close the Mini App.
    */
    enableClosingConfirmation: () => void;
    /**
  Bot API 6.2+ A method that disables the confirmation dialog while the user is trying to close the Mini App.
    */
    disableClosingConfirmation: () => void;
    /**
  Bot API 7.7+ A method that enables vertical swipes to close or minimize the Mini App. For user convenience, it is recommended to always enable swipes unless they conflict with the Mini App's own gestures.
    */
    enableVerticalSwipes: () => void;
    /**
  Bot API 7.7+ A method that disables vertical swipes to close or minimize the Mini App. This method is useful if your Mini App uses swipe gestures that may conflict with the gestures for minimizing and closing the app.
    */
    disableVerticalSwipes: () => void;
    /**
  Bot API 8.0+ A method that requests opening the Mini App in fullscreen mode. Although the header is transparent in fullscreen mode, it is recommended that the Mini App sets the header color using the setHeaderColor method. This color helps determine a contrasting color for the status bar and other UI controls.
    */
    requestFullscreen: () => void;
    /**
  Bot API 8.0+ A method that requests exiting fullscreen mode.
    */
    exitFullscreen: () => void;
    /**
  Bot API 8.0+ A method that locks the Mini App’s orientation to its current mode (either portrait or landscape). Once locked, the orientation remains fixed, regardless of device rotation. This is useful if a stable orientation is needed during specific interactions.
    */
    lockOrientation: () => void;
    /**
  Bot API 8.0+ A method that unlocks the Mini App’s orientation, allowing it to follow the device's rotation freely. Use this to restore automatic orientation adjustments based on the device orientation.
    */
    unlockOrientation: () => void;
    /**
  Bot API 8.0+ A method that prompts the user to add the Mini App to the home screen. After successfully adding the icon, the homeScreenAdded event will be triggered if supported by the device. Note that if the device cannot determine the installation status, the event may not be received even if the icon has been added.
    */
    addToHomeScreen: () => void;
    /**
  Bot API 8.0+ A method that checks if adding to the home screen is supported and if the Mini App has already been added. If an optional callback parameter is provided, the callback function will be called with a single argument status, which is a string indicating the home screen status. Possible values for status are:
  - unsupported – the feature is not supported, and it is not possible to add the icon to the home screen,
  - unknown – the feature is supported, and the icon can be added, but it is not possible to determine if the icon has already been added,
  - added – the icon has already been added to the home screen,
  - missed – the icon has not been added to the home screen.
    */
    checkHomeScreenStatus: (callback?: (status: HomeScreenStatus) => CallbackReturnValue) => void;
    /**
  A method that sets the app event handler. Check the list of available events.
    */

    onEvent: <T extends keyof EventMap>(
        eventType: T,
        eventHandler: (data: EventMap[T] extends (infer R)[] ? R : never) => CallbackReturnValue,
    ) => void;
    /**
  A method that deletes a previously set event handler.
    */

    offEvent: <T extends keyof EventMap>(
        eventType: T,
        eventHandler: (data: EventMap[T] extends (infer R)[] ? R : never) => CallbackReturnValue,
    ) => void;
    /**
  A method used to send data to the bot. When this method is called, a service message is sent to the bot containing the data data of the length up to 4096 bytes, and the Mini App is closed. See the field web_app_data in the class Message.

  This method is only available for Mini Apps launched via a Keyboard button.
    */
    sendData: (data: string) => void;
    /**
  Bot API 6.7+ A method that inserts the bot's username and the specified inline query in the current chat's input field. Query may be empty, in which case only the bot's username will be inserted. If an optional choose_chat_types parameter was passed, the client prompts the user to choose a specific chat, then opens that chat and inserts the bot's username and the specified inline query in the input field. You can specify which types of chats the user will be able to choose from. It can be one or more of the following types: users, bots, groups, channels.
    */

    switchInlineQuery: (
        query: (string & {}) | "",
        choose_chat_types?: ("users" | "bots" | "groups" | "channels")[],
    ) => void;
    /**
  A method that opens a link in an external browser. The Mini App will not be closed.
  Bot API 6.4+ If the optional options parameter is passed with the field try_instant_view=true, the link will be opened in Instant View mode if possible.

  Note that this method can be called only in response to user interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button)
    */
    openLink: (url: string, options?: { try_instant_view: boolean }) => void;
    /**
  A method that opens a telegram link inside the Telegram app. The Mini App will not be closed after this method is called.

  Up to Bot API 7.0 The Mini App will be closed after this method is called.
    */
    openTelegramLink: (url: string) => void;
    /**
  Bot API 6.1+ A method that opens an invoice using the link url. The Mini App will receive the event invoiceClosed when the invoice is closed. If an optional callback parameter was passed, the callback function will be called and the invoice status will be passed as the first argument.
    */
    openInvoice: (url: string, callback?: (status: InvoiceStatus) => CallbackReturnValue) => void;
    /**
  Bot API 7.8+ A method that opens the native story editor with the media specified in the media_url parameter as an HTTPS URL. An optional params argument of the type StoryShareParams describes additional sharing settings.
    */
    shareToStory: (media_url: string, params?: StoryShareParams) => void;
    /**
  Bot API 8.0+ A method that opens a dialog allowing the user to share a message provided by the bot. If an optional callback parameter is provided, the callback function will be called with a boolean as the first argument, indicating whether the message was successfully sent. The message id passed to this method must belong to a PreparedInlineMessage previously obtained via the Bot API method savePreparedInlineMessage.
    */
    shareMessage: (msg_id: number, callback?: SuccessCallback) => void;
    /**
  Bot API 8.0+ A method that opens a dialog allowing the user to set the specified custom emoji as their status. An optional params argument of type EmojiStatusParams specifies additional settings, such as duration. If an optional callback parameter is provided, the callback function will be called with a boolean as the first argument, indicating whether the status was set.

  Note: this method opens a native dialog and cannot be used to set the emoji status without manual user interaction. For fully programmatic changes, you should instead use the Bot API method setUserEmojiStatus after obtaining authorization to do so via the Mini App method requestEmojiStatusAccess.
    */
    setEmojiStatus: (custom_emoji_id: string, params?: EmojiStatusParams, callback?: SuccessCallback) => void;
    /**
  Bot API 8.0+ A method that shows a native popup requesting permission for the bot to manage user's emoji status. If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user granted this access.
    */
    requestEmojiStatusAccess: (callback?: SuccessCallback) => void;
    /**
  Bot API 8.0+ A method that displays a native popup prompting the user to download a file specified by the params argument of type DownloadFileParams. If an optional callback parameter is provided, the callback function will be called when the popup is closed, with the first argument as a boolean indicating whether the user accepted the download request.
    */
    downloadFile: (params: DownloadFileParams, callback?: SuccessCallback) => void;
    /**
  Bot API 6.2+ A method that shows a native popup described by the params argument of the type PopupParams. The Mini App will receive the event popupClosed when the popup is closed. If an optional callback parameter was passed, the callback function will be called and the field id of the pressed button will be passed as the first argument.
    */
    showPopup: (params: PopupParams, callback?: (id: string) => CallbackReturnValue) => void;
    /**
  Bot API 6.2+ A method that shows message in a simple alert with a 'Close' button. If an optional callback parameter was passed, the callback function will be called when the popup is closed.
    */
    showAlert: (message: string, callback?: () => CallbackReturnValue) => void;
    /**
  Bot API 6.2+ A method that shows message in a simple confirmation window with 'OK' and 'Cancel' buttons. If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user pressed the 'OK' button.
    */
    showConfirm: (message: string, callback?: SuccessCallback) => void;
    /**
  Bot API 6.4+ A method that shows a native popup for scanning a QR code described by the params argument of the type ScanQrPopupParams. The Mini App will receive the event qrTextReceived every time the scanner catches a code with text data. If an optional callback parameter was passed, the callback function will be called and the text from the QR code will be passed as the first argument. Returning true inside this callback function causes the popup to be closed. Starting from Bot API 7.7, the Mini App will receive the scanQrPopupClosed event if the user closes the native popup for scanning a QR code.
    */
    showScanQrPopup: (params: ScanQrPopupParams, callback?: (text: string) => boolean | Promise<boolean>) => void;
    /**
  Bot API 6.4+ A method that closes the native popup for scanning a QR code opened with the showScanQrPopup method. Run it if you received valid data in the event qrTextReceived.
    */
    closeScanQrPopup: () => void;
    /**
  Bot API 6.4+ A method that requests text from the clipboard. The Mini App will receive the event clipboardTextReceived. If an optional callback parameter was passed, the callback function will be called and the text from the clipboard will be passed as the first argument.
  readTextFromClipboard
  Note: this method can be called only for Mini Apps launched from the attachment menu and only in response to a user interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button).
    */
    readTextFromClipboard: (callback?: (text: string) => CallbackReturnValue) => void;
    /**
  Bot API 6.9+ A method that shows a native popup requesting permission for the bot to send messages to the user. If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user granted this access.
    */
    requestWriteAccess: (callback?: SuccessCallback) => void;
    /**
  Bot API 6.9+ A method that shows a native popup prompting the user for their phone number. If an optional callback parameter was passed, the callback function will be called when the popup is closed and the first argument will be a boolean indicating whether the user shared its phone number.
    */
    requestContact: (callback?: (success: boolean, data: RequestContactData) => CallbackReturnValue) => void;
    /**
  A method that informs the Telegram app that the Mini App is ready to be displayed.
  It is recommended to call this method as early as possible, as soon as all essential interface elements are loaded. Once this method is called, the loading placeholder is hidden and the Mini App is shown.
  If the method is not called, the placeholder will be hidden only when the page is fully loaded.
    */
    ready: () => void;
    /**
  A method that expands the Mini App to the maximum available height. To find out if the Mini App is expanded to the maximum height, refer to the value of the Telegram.WebApp.isExpanded parameter
    */
    expand: () => void;
    /**
  A method that closes the Mini App.
    */

    close: () => void;
}

export interface WebAppInitData {
    /**
  Optional. A unique identifier for the Mini App session, required for sending messages via the answerWebAppQuery method.
    */
    query_id?: string;
    /**
  Optional. An object containing data about the current user.
    */
    user?: WebAppUser;
    /**
  Optional. An object containing data about the chat partner of the current user in the chat where the bot was launched via the attachment menu. Returned only for private chats and only for Mini Apps launched via the attachment menu.
    */
    receiver?: WebAppUser;
    /**
  Optional. An object containing data about the chat where the bot was launched via the attachment menu. Returned for supergroups, channels and group chats – only for Mini Apps launched via the attachment menu.
    */
    chat?: WebAppChat;
    /**
  Optional. Type of the chat from which the Mini App was opened. Can be either “sender” for a private chat with the user opening the link, “private”, “group”, “supergroup”, or “channel”. Returned only for Mini Apps launched from direct links.
    */
    chat_type?: "sender" | "private" | "group" | "supergroup" | "channel";
    /**
  Optional. Global identifier, uniquely corresponding to the chat from which the Mini App was opened. Returned only for Mini Apps launched from a direct link.
    */
    chat_instance?: string;
    /**
  Optional. The value of the startattach parameter, passed via link. Only returned for Mini Apps when launched from the attachment menu via link.

  The value of the start_param parameter will also be passed in the GET-parameter tgWebAppStartParam, so the Mini App can load the correct interface right away.
    */
    start_param?: string;
    /**
  Optional. Time in seconds, after which a message can be sent via the answerWebAppQuery method.
    */
    can_send_after?: number;
    /**
  Unix time when the form was opened.
    */
    auth_date: number;
    /**
  A hash of all passed parameters, which the bot server can use to check their validity.
    */
    hash: string;
    /**
  A signature of all passed parameters (except hash), which the third party can use to check their validity.
    */
    signature: string;
}

export interface WebAppUser {
    /**
  A unique identifier for the user or bot. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. It has at most 52 significant bits, so a 64-bit integer or a double-precision float type is safe for storing this identifier.
    */
    id: number;
    /**
  Optional. True, if this user is a bot. Returns in the receiver field only.
    */
    is_bot?: boolean;
    /**
  First name of the user or bot.
    */
    first_name: string;
    /**
  Optional. Last name of the user or bot.
    */
    last_name?: string;
    /**
  Optional. Username of the user or bot.
    */
    username?: string;
    /**
  Optional. IETF language tag of the user's language. Returns in user field only.
    */
    language_code?: string;
    /**
  Optional. True, if this user is a Telegram Premium user.
    */
    is_premium?: true;
    /**
  Optional. True, if this user added the bot to the attachment menu.
    */
    added_to_attachment_menu?: true;
    /**
  Optional. True, if this user allowed the bot to message them.
    */
    allows_write_to_pm?: true;
    /**
  Optional. URL of the user’s profile photo. The photo can be in .jpeg or .svg formats.
    */
    photo_url?: string;
}

export interface WebAppChat {
    /**
  Unique identifier for this chat. This number may have more than 32 significant bits and some programming languages may have difficulty/silent defects in interpreting it. But it has at most 52 significant bits, so a signed 64-bit integer or double-precision float type are safe for storing this identifier.
    */
    id: number;
    /**
  Type of chat, can be either “group”, “supergroup” or “channel”
    */
    type: "group" | "supergroup" | "channel";
    /**
  Title of the chat
    */
    title: string;
    /**
  Optional. Username of the chat
    */
    username?: string;
    /**
  Optional. URL of the chat’s photo. The photo can be in .jpeg or .svg formats. Only returned for Mini Apps launched from the attachment menu.
    */
    photo_url?: string;
}

export interface ThemeParams {
    /**
  Optional. Background color in the #RRGGBB format.
  Also available as the CSS variable var(--tg-theme-bg-color).
    */
    bg_color?: string;
    /**
  Optional. Main text color in the #RRGGBB format.
  Also available as the CSS variable var(--tg-theme-text-color).
    */
    text_color?: string;
    /**
  Optional. Hint text color in the #RRGGBB format.
  Also available as the CSS variable var(--tg-theme-hint-color).
    */
    hint_color?: string;
    /**
  Optional. Link color in the #RRGGBB format.
  Also available as the CSS variable var(--tg-theme-link-color).
    */
    link_color?: string;
    /**
  Optional. Button color in the #RRGGBB format.
  Also available as the CSS variable var(--tg-theme-button-color).
    */
    button_color?: string;
    /**
  Optional. Button text color in the #RRGGBB format.
  Also available as the CSS variable var(--tg-theme-button-text-color).
    */
    button_text_color?: string;
    /**
  Optional. Bot API 6.1+ Secondary background color in the #RRGGBB format.
  Also available as the CSS variable var(--tg-theme-secondary-bg-color).
    */
    secondary_bg_color?: string;
    /**
  Optional. Bot API 7.0+ Header background color in the #RRGGBB format.
  Also available as the CSS variable var(--tg-theme-header-bg-color).
    */
    header_bg_color?: string;
    /**
  Optional. Bot API 7.10+ Bottom background color in the #RRGGBB format.
  Also available as the CSS variable var(--tg-theme-bottom-bar-bg-color).
    */
    bottom_bar_bg_color?: string;
    /**
  Optional. Bot API 7.0+ Accent text color in the #RRGGBB format.
  Also available as the CSS variable var(--tg-theme-accent-text-color).
    */
    accent_text_color?: string;
    /**
  Optional. Bot API 7.0+ Background color for the section in the #RRGGBB format. It is recommended to use this in conjunction with secondary_bg_color.
  Also available as the CSS variable var(--tg-theme-section-bg-color).
    */
    section_bg_color?: string;
    /**
  Optional. Bot API 7.0+ Header text color for the section in the #RRGGBB format.
  Also available as the CSS variable var(--tg-theme-section-header-text-color).
    */
    section_header_text_color?: string;
    /**
  Optional. Bot API 7.6+ Section separator color in the #RRGGBB format.
  Also available as the CSS variable var(--tg-theme-section-separator-color).
    */
    section_separator_color?: string;
    /**
  Optional. Bot API 7.0+ Subtitle text color in the #RRGGBB format.
  Also available as the CSS variable var(--tg-theme-subtitle-text-color).
    */
    subtitle_text_color?: string;
    /**
  Optional. Bot API 7.0+ Text color for destructive actions in the #RRGGBB format.
  Also available as the CSS variable var(--tg-theme-destructive-text-color).
    */
    destructive_text_color?: string;
}

export interface SafeAreaInset {
    /**
  The top inset in pixels, representing the space to avoid at the top of the screen. Also available as the CSS variable var(--tg-safe-area-inset-top).
    */
    top: number;
    /**
  The bottom inset in pixels, representing the space to avoid at the bottom of the screen. Also available as the CSS variable var(--tg-safe-area-inset-bottom).
    */
    bottom: number;
    /**
  The left inset in pixels, representing the space to avoid on the left side of the screen. Also available as the CSS variable var(--tg-safe-area-inset-left).
    */
    left: number;
    /**
  The right inset in pixels, representing the space to avoid on the right side of the screen. Also available as the CSS variable var(--tg-safe-area-inset-right).
    */
    right: number;
}

export interface ContentSafeAreaInset {
    /**
  The top inset in pixels, representing the space to avoid at the top of the content area. Also available as the CSS variable var(--tg-content-safe-area-inset-top).
    */
    top: number;
    /**
  The bottom inset in pixels, representing the space to avoid at the bottom of the content area. Also available as the CSS variable var(--tg-content-safe-area-inset-bottom).
    */
    bottom: number;
    /**
  The left inset in pixels, representing the space to avoid on the left side of the content area. Also available as the CSS variable var(--tg-content-safe-area-inset-left).
    */
    left: number;
    /**
  The right inset in pixels, representing the space to avoid on the right side of the content area. Also available as the CSS variable var(--tg-content-safe-area-inset-right).
    */
    right: number;
}

export interface BackButton {
    /**
  Shows whether the button is visible. Set to false by default.
    */
    isVisible: boolean;
    /**
  Bot API 6.1+ A method that sets the button press event handler. An alias for Telegram.WebApp.onEvent('backButtonClicked', callback)
    */
    onClick: (callback: ClickHandler) => BackButton;
    /**
  Bot API 6.1+ A method that removes the button press event handler. An alias for Telegram.WebApp.offEvent('backButtonClicked', callback)
    */
    offClick: (callback: ClickHandler) => BackButton;
    /**
  Bot API 6.1+ A method to make the button active and visible.
    */
    show: () => BackButton;
    /**
  Bot API 6.1+ A method to hide the button.
    */
    hide: () => BackButton;
}

export interface BottomButton {
    /**
  Readonly. Type of the button. It can be either main for the main button or secondary for the secondary button.
    */
    type: "main" | "secondary";
    /**
  Current button text. Set to Continue for the main button and Cancel for the secondary button by default.
    */
    text: string;
    /**
  Current button color. Set to themeParams.button_color for the main button and themeParams.bottom_bar_bg_color for the secondary button by default.
    */
    color: string;
    /**
  Current button text color. Set to themeParams.button_text_color for the main button and themeParams.button_color for the secondary button by default.
    */
    textColor: string;
    /**
  Shows whether the button is visible. Set to false by default.
    */
    isVisible: boolean;
    /**
  Shows whether the button is active. Set to true by default.
    */
    isActive: boolean;
    /**
  Bot API 7.10+ Shows whether the button has a shine effect. Set to false by default.
    */
    hasShineEffect: boolean;
    /**
  Bot API 7.10+ Position of the secondary button. Not defined for the main button. It applies only if both the main and secondary buttons are visible. Set to left by default.
  Supported values:
  - left, displayed to the left of the main button,
  - right, displayed to the right of the main button,
  - top, displayed above the main button,
  - bottom, displayed below the main button.
    */
    position: BottomButtonPosition;
    /**
  Readonly. Shows whether the button is displaying a loading indicator.
    */
    isProgressVisible: boolean;
    /**
  A method to set the button text.
    */
    setText: (text: string) => BottomButton;
    /**
  A method that sets the button's press event handler. An alias for Telegram.WebApp.onEvent('mainButtonClicked', callback)
    */
    onClick: (callback: ClickHandler) => BottomButton;
    /**
  A method that removes the button's press event handler. An alias for Telegram.WebApp.offEvent('mainButtonClicked', callback)
    */
    offClick: (callback: ClickHandler) => BottomButton;
    /**
  A method to make the button visible.
  Note that opening the Mini App from the attachment menu hides the main button until the user interacts with the Mini App interface.
    */
    show: () => BottomButton;
    /**
  A method to hide the button.
    */
    hide: () => BottomButton;
    /**
  A method to enable the button.
    */
    enable: () => BottomButton;
    /**
  A method to disable the button.
    */
    disable: () => BottomButton;
    /**
  A method to show a loading indicator on the button.
  It is recommended to display loading progress if the action tied to the button may take a long time. By default, the button is disabled while the action is in progress. If the parameter leaveActive=true is passed, the button remains enabled.
    */
    showProgress: (leaveActive: boolean) => BottomButton;
    /**
  A method to hide the loading indicator.
    */
    hideProgress: () => BottomButton;
    /**
  A method to set the button parameters. The params parameter is an object containing one or several fields that need to be changed:
  text - button text;
  color - button color;
  text_color - button text color;
  has_shine_effect - Bot API 7.10+ enable shine effect;
  position - position of the secondary button;
  is_active - enable the button;
  is_visible - show the button.
    */
    setParams: (params: BottomButtonParams) => BottomButton;
}

/**
  Bot API 7.10+ Position of the secondary button. Not defined for the main button. It applies only if both the main and secondary buttons are visible. Set to left by default.
  Supported values:
  - left, displayed to the left of the main button,
  - right, displayed to the right of the main button,
  - top, displayed above the main button,
  - bottom, displayed below the main button.
*/
export type BottomButtonPosition = "left" | "right" | "top" | "bottom";

export interface BottomButtonParams {
    /**
  button text
    */
    text?: string;
    /**
  button color
    */
    color?: string;
    /**
  button text color;
    */
    text_color?: string;
    /**
  Bot API 7.10+ enable shine effect
    */
    has_shine_effect?: boolean;
    /**
  position of the secondary button
    */
    position?: BottomButtonPosition;
    /**
  enable the button
    */
    is_active?: boolean;
    /**
  show the button
    */
    is_visible?: boolean;
}

export interface SettingsButton {
    /**
  Shows whether the context menu item is visible. Set to false by default.
    */
    isVisible: boolean;
    /**
  Bot API 7.0+ A method that sets the press event handler for the Settings item in the context menu. An alias for Telegram.WebApp.onEvent('settingsButtonClicked', callback)
    */
    onClick: (callback: ClickHandler) => BackButton;
    /**
  Bot API 7.0+ A method that removes the press event handler from the Settings item in the context menu. An alias for Telegram.WebApp.offEvent('settingsButtonClicked', callback)
    */
    offClick: (callback: ClickHandler) => BackButton;
    /**
  Bot API 7.0+ A method to make the Settings item in the context menu visible.
    */
    show: () => BackButton;
    /**
  Bot API 7.0+ A method to hide the Settings item in the context menu.
    */
    hide: () => BackButton;
}

export interface HapticFeedback {
    /**
  Bot API 6.1+ A method tells that an impact occurred. The Telegram app may play the appropriate haptics based on style value passed. Style can be one of these values:
  - light, indicates a collision between small or lightweight UI objects,
  - medium, indicates a collision between medium-sized or medium-weight UI objects,
  - heavy, indicates a collision between large or heavyweight UI objects,
  - rigid, indicates a collision between hard or inflexible UI objects,
  - soft, indicates a collision between soft or flexible UI objects.
    */
    impactOccurred: (style: "light" | "medium" | "heavy" | "rigid" | "soft") => HapticFeedback;
    /**
  Bot API 6.1+ A method tells that a task or action has succeeded, failed, or produced a warning. The Telegram app may play the appropriate haptics based on type value passed. Type can be one of these values:
  - error, indicates that a task or action has failed,
  - success, indicates that a task or action has completed successfully,
  - warning, indicates that a task or action produced a warning.
    */
    notificationOccurred: (type: "error" | "success" | "warning") => HapticFeedback;
    /**
  Bot API 6.1+ A method tells that the user has changed a selection. The Telegram app may play the appropriate haptics.

  Do not use this feedback when the user makes or confirms a selection; use it only when the selection changes.
    */
    selectionChanged: () => HapticFeedback;
}

export interface CloudStorage {
    /**
  Bot API 6.9+ A method that stores a value in the cloud storage using the specified key. The key should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed. The value should contain 0-4096 characters. You can store up to 1024 keys in the cloud storage. If an optional callback parameter was passed, the callback function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be null and the second argument will be a boolean indicating whether the value was stored.
    */
    setItem: (key: string, value: string, callback?: SuccessCloudStorageCallback) => CloudStorage;
    /**
  Bot API 6.9+ A method that receives a value from the cloud storage using the specified key. The key should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed. In case of an error, the callback function will be called and the first argument will contain the error. In case of success, the first argument will be null and the value will be passed as the second argument.
    */
    getItem: (
        key: string,
        callback: (error: CloudStorageCallbackError, value?: string) => CallbackReturnValue,
    ) => CloudStorage;
    /**
  Bot API 6.9+ A method that receives values from the cloud storage using the specified keys. The keys should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed. In case of an error, the callback function will be called and the first argument will contain the error. In case of success, the first argument will be null and the values will be passed as the second argument.

  When you create keys list, make it "as const": ["key1", "key2", "key3"] as const. Then throw that list into function.
  */
    getItems: <TKeys extends readonly string[]>(
        keys: TKeys,
        callback: (error: CloudStorageCallbackError, values: Record<TKeys[number], string>) => CallbackReturnValue,
    ) => CloudStorage;
    /**
  Bot API 6.9+ A method that removes a value from the cloud storage using the specified key. The key should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed. If an optional callback parameter was passed, the callback function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be null and the second argument will be a boolean indicating whether the value was removed.
    */
    removeItem: (key: string, callback?: SuccessCloudStorageCallback) => CloudStorage;
    /**
  Bot API 6.9+ A method that removes values from the cloud storage using the specified keys. The keys should contain 1-128 characters, only A-Z, a-z, 0-9, _ and - are allowed. If an optional callback parameter was passed, the callback function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be null and the second argument will be a boolean indicating whether the values were removed.
    */
    removeItems: (keys: string[], callback?: SuccessCloudStorageCallback) => CloudStorage;
    /**
  Bot API 6.9+ A method that receives the list of all keys stored in the cloud storage. In case of an error, the callback function will be called and the first argument will contain the error. In case of success, the first argument will be null and the list of keys will be passed as the second argument.
/**/
    getKeys: (callback: (error: CloudStorageCallbackError, keys?: string[]) => CallbackReturnValue) => CloudStorage;
}

export type CloudStorageCallbackError = string | null;
export type SuccessCloudStorageCallback = (
    error: CloudStorageCallbackError,
    success: boolean | null,
) => CallbackReturnValue;

export interface BiometricManager {
    /**
  Shows whether biometrics object is initialized.
    */
    isInited: boolean;
    /**
  Shows whether biometrics is available on the current device.
    */
    isBiometricAvailable: boolean;
    /**
  The type of biometrics currently available on the device. Can be one of these values:
  - finger, fingerprint-based biometrics,
  - face, face-based biometrics,
  - unknown, biometrics of an unknown type.
    */
    biometricType: "finger" | "face" | "unknown";
    /**
  Shows whether permission to use biometrics has been requested.
    */
    isAccessRequested: boolean;
    /**
  Shows whether permission to use biometrics has been granted.
    */
    isAccessGranted: boolean;
    /**
  Shows whether the token is saved in secure storage on the device.
    */
    isBiometricTokenSaved: boolean;
    /**
  A unique device identifier that can be used to match the token to the device.
    */
    deviceId: string;
    /**
  Bot API 7.2+ A method that initializes the BiometricManager object. It should be called before the object's first use. If an optional callback parameter was passed, the callback function will be called when the object is initialized.
    */
    init: (callback?: () => CallbackReturnValue) => BiometricManager;
    /**
  Bot API 7.2+ A method that requests permission to use biometrics according to the params argument of type BiometricRequestAccessParams. If an optional callback parameter was passed, the callback function will be called and the first argument will be a boolean indicating whether the user granted access.
    */
    requestAccess: (params: BiometricRequestAccessParams, callback?: SuccessCallback) => BiometricManager;
    /**
  Bot API 7.2+ A method that authenticates the user using biometrics according to the params argument of type BiometricAuthenticateParams. If an optional callback parameter was passed, the callback function will be called and the first argument will be a boolean indicating whether the user authenticated successfully. If so, the second argument will be a biometric token.
    */
    authenticate: (
        params: BiometricAuthenticateParams,
        callback?: (success: boolean, token?: string) => CallbackReturnValue,
    ) => BiometricManager;
    /**
  Bot API 7.2+ A method that updates the biometric token in secure storage on the device. To remove the token, pass an empty string. If an optional callback parameter was passed, the callback function will be called and the first argument will be a boolean indicating whether the token was updated.
    */
    updateBiometricToken: (token: string, callback?: SuccessCallback) => BiometricManager;
    /**
  Bot API 7.2+ A method that opens the biometric access settings for bots. Useful when you need to request biometrics access to users who haven't granted it yet.

  Note that this method can be called only in response to user interaction with the Mini App interface (e.g. a click inside the Mini App or on the main button)
    */
    openSettings: () => BiometricManager;
}

export interface BiometricRequestAccessParams {
    /**
  Optional. The text to be displayed to a user in the popup describing why the bot needs access to biometrics, 0-128 characters.
    */
    reason?: string;
}

export interface BiometricAuthenticateParams {
    /**
  Optional. The text to be displayed to a user in the popup describing why you are asking them to authenticate and what action you will be taking based on that authentication, 0-128 characters.
    */
    reason?: string;
}

export interface Accelerometer {
    /**
  Indicates whether accelerometer tracking is currently active.
    */
    isStarted: boolean;
    /**
  The current acceleration in the X-axis, measured in m/s².
    */
    x: number;
    /**
  The current acceleration in the Y-axis, measured in m/s².
    */
    y: number;
    /**
  The current acceleration in the Z-axis, measured in m/s².
    */
    z: number;
    /**
  Bot API 8.0+ Starts tracking accelerometer data using params of type AccelerometerStartParams. If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully started.
    */
    start: (params: AccelerometerStartParams, callback?: SuccessCallback) => Accelerometer;
    /**
  Bot API 8.0+ Stops tracking accelerometer data. If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully stopped.
    */
    stop: (callback?: SuccessCallback) => Accelerometer;
}

export interface AccelerometerStartParams {
    /**
  Optional. The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000. Set to 1000 by default. Note that refresh_rate may not be supported on all platforms, so the actual tracking frequency may differ from the specified value.
    */
    refresh_rate?: number;
}

export interface DeviceOrientation {
    /**
  Indicates whether device orientation tracking is currently active.
    */
    isStarted: boolean;
    /**
  A boolean that indicates whether or not the device is providing orientation data in absolute values.
    */
    absolute: boolean;
    /**
  The rotation around the Z-axis, measured in radians.
    */
    alpha: number;
    /**
  The rotation around the X-axis, measured in radians.
    */
    beta: number;
    /**
  The rotation around the Y-axis, measured in radians.
    */
    gamma: number;
    /**
  Bot API 8.0+ Starts tracking device orientation data using params of type DeviceOrientationStartParams. If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully started.
    */
    start: (params: DeviceOrientationStartParams, callback?: SuccessCallback) => DeviceOrientation;
    /**
  Bot API 8.0+ Stops tracking device orientation data. If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully stopped.
    */
    stop: (callback?: SuccessCallback) => DeviceOrientation;
}

export interface DeviceOrientationStartParams {
    /**
  Optional. The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000. Set to 1000 by default. Note that refresh_rate may not be supported on all platforms, so the actual tracking frequency may differ from the specified value.
    */
    refresh_rate?: number;
    /**
  Optional. Pass true to receive absolute orientation data, allowing you to determine the device's attitude relative to magnetic north. Use this option if implementing features like a compass in your app. If relative data is sufficient, pass false. Set to false by default.

  Note: Keep in mind that some devices may not support absolute orientation data. In such cases, you will receive relative data even if need_absolute=true is passed. Check the DeviceOrientation.absolute parameter to determine whether the data provided is absolute or relative.
    */
    need_absolute?: boolean;
}

export interface Gyroscope {
    /**
  Indicates whether gyroscope tracking is currently active.
    */
    isStarted: boolean;
    /**
  The current rotation rate around the X-axis, measured in rad/s.
    */
    x: number;
    /**
  The current rotation rate around the Y-axis, measured in rad/s.
    */
    y: number;
    /**
  The current rotation rate around the Z-axis, measured in rad/s.
    */
    z: number;
    /**
  Bot API 8.0+ Starts tracking gyroscope data using params of type GyroscopeStartParams. If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully started.
    */
    start: (params: GyroscopeStartParams, callback?: SuccessCallback) => Gyroscope;
    /**
  Bot API 8.0+ Stops tracking gyroscope data. If an optional callback parameter is provided, the callback function will be called with a boolean indicating whether tracking was successfully stopped.
    */
    stop: (callback?: SuccessCallback) => Gyroscope;
}

export interface GyroscopeStartParams {
    /**
  Optional. The refresh rate in milliseconds, with acceptable values ranging from 20 to 1000. Set to 1000 by default. Note that refresh_rate may not be supported on all platforms, so the actual tracking frequency may differ from the specified value.
    */
    refresh_rate?: number;
}

export interface LocationManager {
    /**
  Shows whether the LocationManager object has been initialized.
    */
    isInited: boolean;
    /**
  Shows whether location services are available on the current device.
    */
    isLocationAvailable: boolean;
    /**
  Shows whether permission to use location has been requested.
    */
    isAccessRequested: boolean;
    /**
  Shows whether permission to use location has been granted.
    */
    isAccessGranted: boolean;
    /**
  Bot API 8.0+ A method that initializes the LocationManager object. It should be called before the object's first use. If an optional callback parameter is provided, the callback function will be called when the object is initialized.
    */
    init: (callback?: () => CallbackReturnValue) => LocationManager;
    /**
  Bot API 8.0+ A method that requests location data. The callback function will be called with null as the first argument if access to location was not granted, or an object of type LocationData as the first argument if access was successful.
    */
    getLocation: (callback: (locationData: LocationData | null) => CallbackReturnValue) => LocationManager;
    /**
  Bot API 8.0+ A method that opens the location access settings for bots. Useful when you need to request location access from users who haven't granted it yet.

  Note that this method can be called only in response to user interaction with the Mini App interface (e.g., a click inside the Mini App or on the main button).
    */
    openSettings: () => LocationManager;
}

export interface LocationData {
    /**
  Latitude in degrees.
    */
    latitude: number;
    /**
  Longitude in degrees.
    */
    longitude: number;
    /**
  Altitude above sea level in meters. null if altitude data is not available on the device.
    */
    altitude: number | null;
    /**
  The direction the device is moving in degrees (0 = North, 90 = East, 180 = South, 270 = West). null if course data is not available on the device.
    */
    course: number | null;
    /**
  The speed of the device in m/s. null if speed data is not available on the device.
    */
    speed: number | null;
    /**
  Accuracy of the latitude and longitude values in meters. null if horizontal accuracy data is not available on the device.
    */
    horizontal_accuracy: number | null;
    /**
  Accuracy of the altitude value in meters. null if vertical accuracy data is not available on the device.
    */
    vertical_accuracy: number | null;
    /**
  Accuracy of the course value in degrees. null if course accuracy data is not available on the device.
    */
    course_accuracy: number | null;
    /**
  Accuracy of the speed value in m/s. null if speed accuracy data is not available on the device.
    */
    speed_accuracy: number | null;
}

export interface EventMap {
    /**
  Bot API 8.0+ Occurs when the Mini App becomes active (e.g., opened from minimized state or selected among tabs).
  eventHandler receives no parameters.
    */
    activated: [];
    /**
  Bot API 8.0+ Occurs when the Mini App becomes inactive (e.g., minimized or moved to an inactive tab).
  eventHandler receives no parameters.
    */
    deactivated: [];
    /**
  Occurs whenever theme settings are changed in the user's Telegram app (including switching to night mode).
  eventHandler receives no parameters, new theme settings and color scheme can be received via this.themeParams and this.colorScheme respectively.
    */
    themeChanged: [];
    /**
  Occurs when the visible section of the Mini App is changed.
  eventHandler receives an object with the single field isStateStable. If isStateStable is true, the resizing of the Mini App is finished. If it is false, the resizing is ongoing (the user is expanding or collapsing the Mini App or an animated object is playing). The current value of the visible section’s height is available in this.viewportHeight.
    */
    viewportChanged: { isStateStable: boolean }[];
    /**
  Bot API 8.0+ Occurs when the device's safe area insets change (e.g., due to orientation change or screen adjustments).
  eventHandler receives no parameters. The current inset values can be accessed via this.safeAreaInset.
    */
    safeAreaChanged: [];
    /**
  Bot API 8.0+ Occurs when the safe area for content changes (e.g., due to orientation change or screen adjustments).
  eventHandler receives no parameters. The current inset values can be accessed via this.contentSafeAreaInset.
    */
    contentSafeAreaChanged: [];
    /**
  Occurs when the main button is pressed.
  eventHandler receives no parameters.
    */
    mainButtonClicked: [];
    /**
  Bot API 7.10+ Occurs when the secondary button is pressed.
  eventHandler receives no parameters.
    */
    secondaryButtonClicked: [];
    /**
  Bot API 6.1+ Occurrs when the back button is pressed.
  eventHandler receives no parameters.
    */
    backButtonClicked: [];
    /**
  Bot API 6.1+ Occurrs when the Settings item in context menu is pressed.
  eventHandler receives no parameters.
    */
    settingsButtonClicked: [];
    /**
  Bot API 6.1+ Occurrs when the opened invoice is closed.
  eventHandler receives an object with the two fields: url – invoice link provided and status – one of the invoice statuses:
  - paid – invoice was paid successfully,
  - cancelled – user closed this invoice without paying,
  - failed – user tried to pay, but the payment was failed,
  - pending – the payment is still processing. The bot will receive a service message about a successful payment when the payment is successfully paid.
    */
    invoiceClosed: { url: string; status: InvoiceStatus }[];
    /**
  Bot API 6.2+ Occurrs when the opened popup is closed.
  eventHandler receives an object with the single field button_id – the value of the field id of the pressed button. If no buttons were pressed, the field button_id will be null.
    */
    popupClosed: { button_id: (string & {}) | "" | null }[];
    /**
  Bot API 6.4+ Occurs when the QR code scanner catches a code with text data.
  eventHandler receives an object with the single field data containing text data from the QR code.
    */
    qrTextReceived: { data: string }[];
    /**
  Bot API 7.7+ Occurs when the QR code scanner popup is closed by the user.
  eventHandler receives no parameters.
    */
    scanQrPopupClosed: [];
    /**
  Bot API 6.4+ Occurrs when the readTextFromClipboard method is called.
  eventHandler receives an object with the single field data containing text data from the clipboard. If the clipboard contains non-text data, the field data will be an empty string. If the Mini App has no access to the clipboard, the field data will be null.
    */
    clipboardTextReceived: { data: (string & {}) | "" | null }[];
    /**
  Bot API 6.9+ Occurs when the write permission was requested.
  eventHandler receives an object with the single field status containing one of the statuses:
  - allowed – user granted write permission to the bot,
  - cancelled – user declined this request.
    */
    writeAccessRequested: { status: "allowed" | "cancelled" }[];
    /**
  Bot API 6.9+ Occurrs when the user's phone number was requested.
  eventHandler receives an object with the single field status containing one of the statuses:
  - sent – user shared their phone number with the bot,
  - cancelled – user declined this request.
    */
    contactRequested: RequestContactData[];
    /**
  Bot API 7.2+ Occurs whenever BiometricManager object is changed.
  eventHandler receives no parameters.
    */
    biometricManagerUpdated: [];
    /**
  Bot API 7.2+ Occurs whenever biometric authentication was requested.
  eventHandler receives an object with the field isAuthenticated containing a boolean indicating whether the user was authenticated successfully. If isAuthenticated is true, the field biometricToken will contain the biometric token stored in secure storage on the device.
    */
    biometricAuthRequested: { isAuthenticated: boolean; biometricToken?: string }[];
    /**
  Bot API 7.2+ Occurs whenever the biometric token was updated.
  eventHandler receives an object with the single field isUpdated, containing a boolean indicating whether the token was updated.
    */
    biometricTokenUpdated: { isUpdated: boolean }[];
    /**
  Bot API 8.0+ Occurs whenever the Mini App enters or exits fullscreen mode.
  eventHandler receives no parameters. The current fullscreen state can be checked via this.isFullscreen.
    */
    fullscreenChanged: [];
    /**
  Bot API 8.0+ Occurs if a request to enter fullscreen mode fails.
  eventHandler receives an object with the single field error, describing the reason for the failure. Possible values for error are:
  UNSUPPORTED – Fullscreen mode is not supported on this device or platform.
  ALREADY_FULLSCREEN – The Mini App is already in fullscreen mode.
    */
    fullscreenFailed: { error: "UNSUPPORTED" | "ALREADY_FULLSCREEN" }[];
    /**
  Bot API 8.0+ Occurs when the Mini App is successfully added to the home screen.
  eventHandler receives no parameters.
    */
    homeScreenAdded: [];
    /**
  Bot API 8.0+ Occurs after checking the home screen status.
  eventHandler receives an object with the field status, which is a string indicating the current home screen status. Possible values for status are:
  - unsupported – the feature is not supported, and it is not possible to add the icon to the home screen,
  - unknown – the feature is supported, and the icon can be added, but it is not possible to determine if the icon has already been added,
  - added – the icon has already been added to the home screen,
  - missed – the icon has not been added to the home screen.
    */
    homeScreenChecked: { status: HomeScreenStatus }[];
    /**
  Bot API 8.0+ Occurs when accelerometer tracking has started successfully.
  eventHandler receives no parameters.
    */
    accelerometerStarted: [];
    /**
  Bot API 8.0+ Occurs when accelerometer tracking has stopped.
  eventHandler receives no parameters.
    */
    accelerometerStopped: [];
    /**
  Bot API 8.0+ Occurs with the specified frequency after calling the start method, sending the current accelerometer data.
  eventHandler receives no parameters, the current acceleration values can be received via this.x, this.y and this.z respectively.
    */
    accelerometerChanged: [];
    /**
  Bot API 8.0+ Occurs if a request to start accelerometer tracking fails.
  eventHandler receives an object with the single field error, describing the reason for the failure. Possible values for error are:
  UNSUPPORTED – Accelerometer tracking is not supported on this device or platform.
    */
    accelerometerFailed: { error: "UNSUPPORTED" }[];
    /**
  Bot API 8.0+ Occurs when device orientation tracking has started successfully.
  eventHandler receives no parameters.
    */
    deviceOrientationStarted: [];
    /**
  Bot API 8.0+ Occurs when device orientation tracking has stopped.
  eventHandler receives no parameters.
    */
    deviceOrientationStopped: [];
    /**
  Bot API 8.0+ Occurs with the specified frequency after calling the start method, sending the current orientation data.
  eventHandler receives no parameters, the current device orientation values can be received via this.alpha, this.beta and this.gamma respectively.
    */
    deviceOrientationChanged: [];
    /**
  Bot API 8.0+ Occurs if a request to start device orientation tracking fails.
  eventHandler receives an object with the single field error, describing the reason for the failure. Possible values for error are:
  UNSUPPORTED – Device orientation tracking is not supported on this device or platform.
    */
    deviceOrientationFailed: { error: "UNSUPPORTED" }[];
    /**
  Bot API 8.0+ Occurs when gyroscope tracking has started successfully.
  eventHandler receives no parameters.
    */
    gyroscopeStarted: [];
    /**
  Bot API 8.0+ Occurs when gyroscope tracking has stopped.
  eventHandler receives no parameters.
    */
    gyroscopeStopped: [];
    /**
  Bot API 8.0+ Occurs with the specified frequency after calling the start method, sending the current gyroscope data.
  eventHandler receives no parameters, the current rotation rates can be received via this.x, this.y and this.z respectively.
    */
    gyroscopeChanged: [];
    /**
  Bot API 8.0+ Occurs if a request to start gyroscope tracking fails.
  eventHandler receives an object with the single field error, describing the reason for the failure. Possible values for error are:
  UNSUPPORTED – Gyroscope tracking is not supported on this device or platform.
    */
    gyroscopeFailed: { error: "UNSUPPORTED" }[];
    /**
  Bot API 8.0+ Occurs whenever LocationManager object is changed.
  eventHandler receives no parameters.
    */
    locationManagerUpdated: [];
    /**
  Bot API 8.0+ Occurs when location data is requested.
  eventHandler receives an object with the single field locationData of type LocationData, containing the current location information.
    */
    locationRequested: { locationData: LocationData }[];
    /**
  Bot API 8.0+ Occurs when the message is successfully shared by the user.
  eventHandler receives no parameters.
    */
    shareMessageSent: [];
    /**
  Bot API 8.0+ Occurs if sharing the message fails.
  eventHandler receives an object with the single field error, describing the reason for the failure. Possible values for error are:
  UNSUPPORTED – The feature is not supported by the client.
  MESSAGE_EXPIRED – The message could not be retrieved because it has expired.
  MESSAGE_SEND_FAILED – An error occurred while attempting to send the message.
  USER_DECLINED – The user closed the dialog without sharing the message.
  UNKNOWN_ERROR – An unknown error occurred.
    */
    shareMessageFailed: {
        error: "UNSUPPORTED" | "MESSAGE_EXPIRED" | "MESSAGE_SEND_FAILED" | "USER_DECLINED" | "UNKNOWN_ERROR";
    }[];
    /**
  Bot API 8.0+ Occurs when the emoji status is successfully set.
  eventHandler receives no parameters.
    */
    emojiStatusSet: [];
    /**
  Bot API 8.0+ Occurs if setting the emoji status fails.
  eventHandler receives an object with the single field error, describing the reason for the failure. Possible values for error are:
  UNSUPPORTED – The feature is not supported by the client.
  SUGGESTED_EMOJI_INVALID – One or more emoji identifiers are invalid.
  DURATION_INVALID – The specified duration is invalid.
  USER_DECLINED – The user closed the dialog without setting a status.
  SERVER_ERROR – A server error occurred when attempting to set the status.
  UNKNOWN_ERROR – An unknown error occurred.
    */
    emojiStatusFailed: {
        error:
            | "UNSUPPORTED"
            | "SUGGESTED_EMOJI_INVALID"
            | "DURATION_INVALID"
            | "USER_DECLINED"
            | "SERVER_ERROR"
            | "UNKNOWN_ERROR";
    }[];
    /**
  Bot API 8.0+ Occurs when the write permission was requested.
  eventHandler receives an object with the single field status containing one of the statuses:
  - allowed – user granted emoji status permission to the bot,
  - cancelled – user declined this request.
    */
    emojiStatusAccessRequested: { status: "allowed" | "cancelled" }[];
    /**
  Bot API 8.0+ Occurs when the user responds to the file download request.
  eventHandler receives an object with the single field status containing one of the statuses:
  - downloading – the file download has started,
  - cancelled – user declined this request.
    */
    fileDownloadRequested: { status: "downloading" | "cancelled" }[];
}

export type HomeScreenStatus = "unsupported" | "unknown" | "added" | "missed";

export type InvoiceStatus = "paid" | "cancelled" | "failed" | "pending";

export interface StoryShareParams {
    /**
  Optional. The caption to be added to the media, 0-200 characters for regular users and 0-2048 characters for premium subscribers.
    */
    text?: string;
    /**
  Optional. An object that describes a widget link to be included in the story. Note that only premium subscribers can post stories with links.
    */
    widget_link?: StoryWidgetLink;
}

export interface StoryWidgetLink {
    /**
  The URL to be included in the story.
    */
    url: string;
    /**
Optional. The name to be displayed for the widget link, 0-48 characters.
    */
    name?: string;
}

export interface EmojiStatusParams {
    /**
  Optional. The duration for which the status will remain set, in seconds.
    */
    duration?: number;
}

export interface DownloadFileParams {
    /**
  The HTTPS URL of the file to be downloaded.
    */
    url: string;
    /**
  The suggested name for the downloaded file.
    */
    file_name: string;
}

export interface PopupParams {
    /**
  Optional. The text to be displayed in the popup title, 0-64 characters.
    */
    title?: string;
    /**
  The message to be displayed in the body of the popup, 1-256 characters.
    */
    message: string;
    /**
  Optional. List of buttons to be displayed in the popup, 1-3 buttons. Set to [{“type”:“close”}] by default.
    */
    buttons?: PopupButton[] & { length: 1 | 2 | 3 };
}

export type PopupButton =
    & {
        /**
  Optional. Identifier of the button, 0-64 characters. Set to empty string by default.
  If the button is pressed, its id is returned in the callback and the popupClosed event.
        */
        id?: (string & {}) | "";
        /**
    Optional. Type of the button. Set to default by default.
  Can be one of these values:
  - default, a button with the default style,
  - ok, a button with the localized text “OK”,
  - close, a button with the localized text “Close”,
  - cancel, a button with the localized text “Cancel”,
  - destructive, a button with a style that indicates a destructive action (e.g. “Remove”, “Delete”, etc.).
  */
        type?: "ok" | "close" | "cancel" | "default" | "destructive";
        /**
  Optional. The text to be displayed on the button, 0-64 characters. Required if type is default or destructive. Irrelevant for other types.
        */
        text?: string;
    }
    & (
        | {
            type: "ok" | "close" | "cancel";
        }
        | { type: "default" | "destructive"; text: string }
    );

export interface ScanQrPopupParams {
    /**
  Optional. The text to be displayed under the 'Scan QR' heading, 0-64 characters.
    */
    text?: string;
}

export type RequestContactData =
    & {
        status: "sent" | "cancelled";
        response?: string;
        responseUnsafe?: {
            auth_data: string;
            hash: string;
            contact: {
                first_name: string;
                last_name: string;
                phone_number: string;
                user_id: number;
            };
        };
    }
    & (
        | {
            status: "sent";
            response: string;
            responseUnsafe: {
                auth_data: string;
                hash: string;
                contact: {
                    first_name: string;
                    last_name: string;
                    phone_number: string;
                    user_id: number;
                };
            };
        }
        | { status: "cancelled" }
    );

export interface DeviceStorage {
    /**
 Bot API 9.0+ A method that stores a value in the device's local storage using the specified key. If an optional callback parameter was passed, the callback function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be null and the second argument will be a boolean indicating whether the value was stored.
 */
    setItem: (key: string, value: string, callback?: (error: string | null, success?: boolean) => void) => void;
    /**
 Bot API 9.0+ A method that receives a value from the device's local storage using the specified key. In case of an error, the callback function will be called and the first argument will contain the error. In case of success, the first argument will be null and the value will be passed as the second argument.
 */
    getItem: (key: string, callback: (error: string | null, value?: string) => void) => void;
    /**
 Bot API 9.0+ A method that removes a value from the device's local storage using the specified key. If an optional callback parameter was passed, the callback function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be null and the second argument will be a boolean indicating whether the value was removed.
 */
    removeItem: (key: string, callback?: (error: string | null, success?: boolean) => void) => void;
    /**
  Bot API 9.0+ A method that clears all keys previously stored by the bot in the device's local storage. If an optional callback parameter was passed, the callback function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be null and the second argument will be a boolean indicating whether all values were removed.
 */
    clear: (callback?: (error: string | null, success?: boolean) => void) => void;
}

export interface SecureStorage {
    /**
 Bot API 9.0+ A method that stores a value in the device's secure storage using the specified key. If an optional callback parameter was passed, the callback function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be null and the second argument will be a boolean indicating whether the value was stored.
 */
    setItem: (key: string, value: string, callback?: (error: string | null, success?: boolean) => void) => void;
    /**
  Bot API 9.0+ A method that receives a value from the device's secure storage using the specified key. In case of an error, the callback function will be called and the first argument will contain the error. In case of success, the first argument will be null and the value will be passed as the second argument. If the key was not found, the second argument will be null, and the third argument will be a boolean indicating whether the key can be restored from the current device.
 */
    getItem: (
        key: string,
        callback: (error: string | null, value?: string | null, canBeRestored?: boolean) => void,
    ) => void;
    /**
 Bot API 9.0+ Attempts to restore a key that previously existed on the current device. When called, the user will be asked for permission to restore the value. If the user declines or an error occurs, the first argument in the callback will contain the error. If restored successfully, the first argument will be null and the second argument will contain the restored value.
 */
    restoreItem: (key: string, callback?: (error: string | null, value?: string) => void) => void;
    /**
  Bot API 9.0+ A method that removes a value from the device's secure storage using the specified key. If an optional callback parameter was passed, the callback function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be null and the second argument will be a boolean indicating whether the value was removed.
 */
    removeItem: (key: string, callback?: (error: string | null, success?: boolean) => void) => void;
    /**
 Bot API 9.0+ A method that clears all keys previously stored by the bot in the device's secure storage. If an optional callback parameter was passed, the callback function will be called. In case of an error, the first argument will contain the error. In case of success, the first argument will be null and the second argument will be a boolean indicating whether all values were removed.
 */
    clear: (callback?: (error: string | null, success?: boolean) => void) => void;
}
