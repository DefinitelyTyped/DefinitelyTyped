// Type definitions for non-npm package telegram-web-app 1.0
// Project: https://telegram.org/js/telegram-web-app.js
// Definitions by: KnorpelSenf <https://github.com/KnorpelSenf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var Telegram: Telegram;

type Color = string | false;

interface Telegram {
    WebApp: WebApp;
}

interface WebApp {
    /**
     * A string with raw data transferred to the Web App, convenient for
     * validating data. WARNING: Validate data from this field before using it on
     * the bot's server.
     */
    initData: string;
    /**
     * An object with input data transferred to the Web App. WARNING: Data from
     * this field should not be trusted. You should only use data from initData on
     * the bot's server and only after it has been validated.
     */
    initDataUnsafe: WebAppInitData;
    /**
     * The color scheme currently used in the Telegram app. Either “light” or
     * “dark”. Also available as the CSS variable var(--tg-color-scheme).
     */
    colorScheme: 'light' | 'dark';
    /**
     * An object containing the current theme settings used in the Telegram app.
     */
    themeParams: ThemeParams;
    /**
     *  True if the Web App is expanded to the maximum available height. False, if
     *  the Web App occupies part of the screen and can be expanded to the full
     *  height using the expand() method.
     */
    isExpanded: boolean;
    /**
     * The current height of the visible area of the Web App. Also available in
     * CSS as the variable var(--tg-viewport-height).
     *
     * The application can display just the top part of the Web App, with its
     * lower part remaining outside the screen area. From this position, the user
     * can “pull” the Web App to its maximum height, while the bot can do the same
     * by calling the expand() method. As the position of the Web App changes, the
     * current height value of the visible area will be updated in real time.
     *
     * Please note that the refresh rate of this value is not sufficient to
     * smoothly follow the lower border of the window. It should not be used to
     * pin interface elements to the bottom of the visible area. It's more
     * appropriate to use the value of the viewportStableHeight field for this
     * purpose.
     */
    viewportHeight: number;
    /**
     * The height of the visible area of the Web App in its last stable state.
     * Also available in CSS as a variable var(--tg-viewport-stable-height).
     *
     * The application can display just the top part of the Web App, with its
     * lower part remaining outside the screen area. From this position, the user
     * can “pull” the Web App to its maximum height, while the bot can do the same
     * by calling the expand() method. Unlike the value of viewportHeight, the
     * value of viewportStableHeight does not change as the position of the Web
     * App changes with user gestures or during animations. The value of
     * viewportStableHeight will be updated after all gestures and animations are
     * completed and the Web App reaches its final size.
     *
     * Note the event viewportChanged with the passed parameter
     * isStateStable=true, which will allow you to track when the stable state of
     * the height of the visible area changes.
     */
    viewportStableHeight: number;
    /**
     * An object for controlling the main button, which is displayed at the bottom
     * of the Web App in the Telegram interface.
     */
    MainButton: MainButton;
    /**
     * A method that sets the app event handler. Check the list of available
     * events.
     */
    onEvent(eventType: 'themeChanged' | 'mainButtonClicked', eventHandler: () => void): void;
    onEvent(eventType: 'viewPortChanged', eventHandler: (eventData: { isStateStable: boolean }) => void): void;
    /** A method that deletes a previously set event handler. */
    offEvent(eventType: 'themeChanged' | 'mainButtonClicked', eventHandler: () => void): void;
    offEvent(eventType: 'viewPortChanged', eventHandler: (eventData: { isStateStable: boolean }) => void): void;
    /**
     * A method used to send data to the bot. When this method is called, a
     * service message is sent to the bot containing the data data of the length
     * up to 4096 bytes, and the Web App is closed. See the field web_app_data in
     * the class Message.
     *
     * This method is only available for Web Apps launched via a Keyboard button.
     */
    sendData(data: string): void;
    /**
     * A method that informs the Telegram app that the Web App is ready to be
     * displayed. It is recommended to call this method as early as possible, as
     * soon as all essential interface elements are loaded. Once this method is
     * called, the loading placeholder is hidden and the Web App is shown. If the
     * method is not called, the placeholder will be hidden only when the page is
     * fully loaded.
     */
    ready(): void;
    /**
     * A method that expands the Web App to the maximum available height. To find
     * out if the Web App is expanded to the maximum height, refer to the value of
     * the Telegram.WebApp.isExpanded parameter
     */
    expand(): void;
    /** A method that closes the Web App. */
    close(): void;
}

/**
 * Web Apps can adjust the appearance of the interface to match the Telegram
 * user's app in real time. This object contains the user's current theme
 * settings:
 */
interface ThemeParams {
    /**
     * Background color in the #RRGGBB format. Also available as the CSS variable
     * var(--tg-theme-bg-color).
     */
    bg_color: string;
    /**
     * Main text color in the #RRGGBB format. Also available as the CSS variable
     * var(--tg-theme-text-color).
     */
    text_color: string;
    /**
     * Hint text color in the #RRGGBB format. Also available as the CSS variable
     * var(--tg-theme-hint-color).
     */
    hint_color: string;
    /**
     * Link color in the #RRGGBB format. Also available as the CSS variable
     * var(--tg-theme-link-color).
     */
    link_color: string;
    /**
     * Button color in the #RRGGBB format. Also available as the CSS variable
     * var(--tg-theme-button-color).
     */
    button_color: string;
    /**
     * Button text color in the #RRGGBB format. Also available as the CSS variable
     * var(--tg-theme-button-text-color).
     */
    button_text_color: string;
}

/**
 * This object controls the main button, which is displayed at the bottom of the
 * Web App in the Telegram interface.
 */
interface MainButton {
    /** Current button text. Set to CONTINUE by default. */
    text: string;
    /** Current button color. Set to themeParams.button_color by default. */
    color: string;
    /**
     * Current button text color. Set to themeParams.button_text_color by default.
     */
    textColor: string;
    /** Shows whether the button is visible. Set to false by default. */
    isVisible: boolean;
    /** Shows whether the button is active. Set to true by default. */
    isActive: boolean;
    /** Readonly. Shows whether the button is displaying a loading indicator. */
    isProgressVisible: boolean;
    /** A method to set the button text. */
    setText(text: string): MainButton;
    /**
     * A method that sets the button press event handler. An alias for
     * Telegram.WebApp.onEvent('mainButtonClicked', callback)
     */
    onClick(callback: () => void): MainButton;
    /** A method that deletes a previously set handler */
    offClick(callback: () => void): MainButton;
    /**
     * A method to make the button visible. Note that opening the Web App from the
     * attachment menu hides the main button until the user interacts with the
     * Web App interface.
     */
    show(): MainButton;
    /** A method to hide the button. */
    hide(): MainButton;
    /** A method to enable the button. */
    enable(): MainButton;
    /** A method to disable the button. */
    disable(): MainButton;
    /**
     * A method to show a loading indicator on the button. It is recommended to
     * display loading progress if the action tied to the button may take a long
     * time. By default, the button is disabled while the action is in progress.
     * If the parameter leaveActive=true is passed, the button remains enabled.
     */
    showProgress(leaveActive?: boolean): MainButton;
    /** A method to hide the loading indicator. */
    hideProgress(): MainButton;
    /**
     * A method to set the button parameters. The params parameter is an object
     * containing one or several fields that need to be changed:
     * - text - button text;
     * - color - button color;
     * - text_color - button text color;
     * - is_active - enable the button;
     * - is_visible - show the button.
     */
    setParams(params: MainButtonParams): MainButton;
}

interface MainButtonParams {
    /** button text */
    text?: string;
    /** button color */
    color?: Color;
    /** button text color */
    text_color?: Color;
    /** enable the button */
    is_active?: boolean;
    /** show the button */
    is_visible?: boolean;
}

/**
 * This object contains data that is transferred to the Web App when it is
 * opened. It is empty if the Web App was launched from a keyboard button.
 */
interface WebAppInitData {
    /**
     * A unique identifier for the Web App session, required for sending messages
     * via the answerWebAppQuery method.
     */
    query_id?: string;
    /** An object containing data about the current user. */
    user?: WebAppUser;
    /**
     * An object containing data about the chat partner of the current user in the
     * chat where the bot was launched via the attachment menu. Returned only for
     * Web Apps launched via the attachment menu.
     */
    receiver?: WebAppUser;
    /**
     * The value of the startattach parameter, passed via link. Only returned for
     * Web Apps when launched from the attachment menu via link. The value of the
     * start_param parameter will also be passed in the GET-parameter
     * tgWebAppStartParam, so the Web App can load the correct interface right
     * away.
     */
    start_param?: string;
    /** Unix time when the form was opened. */
    auth_date: number;
    /**
     * A hash of all passed parameters, which the bot server can use to check
     * their validity.
     */
    hash: string;
}

/** This object contains the data of the Web App user. */
interface WebAppUser {
    /**
     * A unique identifier for the user or bot. This number may have more than 32
     * significant bits and some programming languages may have difficulty/silent
     * defects in interpreting it. It has at most 52 significant bits, so a 64-bit
     * integer or a double-precision float type is safe for storing this
     * identifier.
     */
    id: number;
    /** True, if this user is a bot. Returns in the receiver field only. */
    is_bot?: boolean;
    /** First name of the user or bot. */
    first_name: string;
    /** Last name of the user or bot. */
    last_name?: string;
    /** Username of the user or bot. */
    username?: string;
    /** IETF language tag of the user's language. Returns in user field only. */
    language_code?: string;
    /**
     * URL of the user’s profile photo. The photo can be in .jpeg or .svg formats.
     * Only returned for Web Apps launched from the attachment menu.
     */
    photo_url?: string;
}
