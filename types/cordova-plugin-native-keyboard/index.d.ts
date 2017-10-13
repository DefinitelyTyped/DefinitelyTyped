// Type definitions for cordova-plugin-native-keyboard 1.3
// Project: https://github.com/EddyVerbruggen/cordova-plugin-native-keyboard#readme
// Definitions by: Daniel Brolli <https://github.com/lobo87>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
interface NativeKeyboard {
    /**
     * Show the messenger, the bare minimum which has to be passed to the function is
     * the onSubmit callback
     * @param options
     */
    showMessenger(
        options: NativeKeyboardShowOptions
    ): void;

    /**
     * It's likely your app only has 1 one page where you want to show the messenger,
     * so you want to hide it when the user navigates away. You can choose to do this
     * either animated (a quick slide down animation) or not.
     *
     * @param options
     * @param onSuccess
     * @param onError
     */
    hideMessenger(
        options?: NativeKeyboardHideOptions,
        onSuccess?: () => void,
        onError?: (err: any) => void
    ): void;

    /**
     * Show a previously hidden keyboard
     *
     * @param onSuccess
     * @param onError
     */
    showMessengerKeyboard(
        onSuccess?: () => void,
        onError?: (err: any) => void,
    ): void;

    /**
     * Hide the keyboard, but not the messenger bar
     *
     * @param onSuccess
     * @param onError
     */
    hideMessengerKeyboard(
        onSuccess?: () => void,
        onError?: (err: any) => void,
    ): void;

    /**
     * Manipulate the messenger while it's open. For instance if you want to
     * update the text programmatically based on what the user typed (by responding to
     * onTextChanged events).
     *
     * @param options
     * @param onSuccess
     * @param onError
     */
    updateMessenger(
        options: NativeKeyboardUpdateOptions,
        onSuccess?: () => void,
        onError?: (err: any) => void
    ): void;
}

interface NativeKeyboardUpdateOptions {
    /**
     * Replace the messenger's text by this. The current text remains if omitted.
     */
    text?: string;

    /**
     * Position the cursor anywhere in the text range. Defaults to the end of the text.
     */
    caretIndex?: number;

    /**
     * If false or omitted no changes to the keyboard state are made.
     */
    showKeyboard?: boolean;
}

interface NativeKeyboardHideOptions {
    /**
     * A boolean flag inidicating if the keyboard should be shown/hidden with an animation
     */
    animated?: boolean;
}

interface NativeKeyboardShowOptions {
    /**
     * Callback function, which is being called as soon as the user submits
     * @param text
     */
    onSubmit(text: string): void;

    /**
     * Callback function which is being executed as soon as the keyboard will show
     */
    onKeyboardWillShow?(): void;

    /**
     * Callback function which is being executed as soon as the keyboard did show
     */
    onKeyboardDidShow?(): void;

    /**
     * Callback function which is being executed as soon as the keyboard will hide
     */
    onKeyboardWillHide?(): void;

    /**
     * Callback function which is being executed as soon as the keyboard did hide
     */
    onKeyboardDidHide?(): void;

    /**
     * Callback function which is being executed as soon as the entered text changes. Will
     * return the new text
     *
     * @param text
     */
    onTextChanged?(text: string): void;

    /**
     * DOM element, which should be scrolled automatically
     */
    autoscrollElement?: any;

    /**
     * Boolean value indicating if the content should be scrolled to the end after the messenger is
     * shown
     */
    scrollToBottomAfterMessengerShows?: boolean;

    /**
     * Boolean value indicating if the keyboard should be kept open after submitting the entered
     * text
     *
     * Default: false
     */
    keepOpenAfterSubmit?: boolean;

    /**
     * Makes the messenger bar slide in from the bottom.
     *
     * Default: false
     */
    animated?: boolean;

    /**
     * Open the keyboard when showing the messenger.
     *
     * Default: false
     */
    showKeyboard?: boolean;

    /**
     * A text which will be in the messenger bar, when opening
     */
    text?: string;

    /**
     * The color of the typed text in HEX.
     *
     * Default: #444
     */
    textColor?: string;

    /**
     * A placeholder which will be in the messenger bar, when opening and the input field is
     * empty
     */
    placeholder?: string;

    /**
     * The color of the placeholder.
     *
     * Default: #ccc
     */
    placeholderColor?: string;

    /**
     * The background color of the messenger bar.
     *
     * Default: #F6F6F6
     */
    backgroundColor?: string;

    /**
     * The background color of the textview. Looks nicest on Android
     * if it's the same color as the backgroundColor property.
     *
     * Default: #F6F6F6
     */
    textViewBackgroundColor?: string;

    /**
     * The border color of the textview.
     *
     * Default: #666666
     */
    textViewBorderColor?: string;

    /**
     * Maximum amount of chars that can be entered
     */
    maxChars?: number;

    /**
     * Options are: "none", "split", "countdown", "countdownreversed".
     * Note that if maxChars is set, "none" will still show a counter.
     *
     * Default: "none"
     */
    counterStyle?: string;

    /**
     * Options are: "default", "decimalpad", "phonepad", "numberpad", "namephonepad",
     * "number", "email", "twitter", "url", "alphabet", "search", "ascii"
     *
     * Default: "default"
     */
    type?: string;

    /**
     * Options are: "light", "dark".
     *
     * Default: "default"
     */
    appearance?: string;

    /**
     * Disables things like the Emoji keyboard and the Predicive text entry bar
     *
     * Default: false
     */
    secure?: boolean;

    /**
     * The left button of the messenger bar
     */
    leftButton?: LeftButtonOptions;

    /**
     * The right button of the messenger bar
     */
    rightButton?: ButtonOptions;
}

interface ButtonOptions {
    /**
     * The type of the button.
     * Either "text", "fontawesome" or "ionicon".
     *
     * Default: "text"
     */
    type?: string;

    /**
     * The value of the button. On "text" the string is used as label
     * On fonatawesome or ionicon the icon name is used (e.g. fa-rocket)
     *
     * Default: "Send"
     */
    value?: string;

    /**
     * If type is "text" you can set this to either "normal", "bold" or "italic".
     *
     * Default: "normal"
     */
    textStyle?: string;

    /**
     * The color of the button in HEX
     *
     * Default: #000
     */
    color: string;

    /**
     * A callback being executed as soon as the button is clicked
     */
    onPress(): void;
}

interface LeftButtonOptions extends ButtonOptions {
    /**
     * Set to true to disable the button once text has been entered.
     *
     * Default: false
     */
    disabledWhenTextEntered?: boolean;
}

/** NativeKeyboard instance */
declare var NativeKeyboard: NativeKeyboard;
interface Window {
    NativeKeyboard: NativeKeyboard;
}
