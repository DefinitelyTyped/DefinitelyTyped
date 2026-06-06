interface NativeKeyboard {
    /**
     * Show the messenger, the bare minimum which has to be passed to the function is
     * the onSubmit callback
     */
    showMessenger(
        options: NativeKeyboardShowOptions,
    ): void;

    /**
     * It's likely your app only has 1 one page where you want to show the messenger,
     * so you want to hide it when the user navigates away. You can choose to do this
     * either animated (a quick slide down animation) or not.
     */
    hideMessenger(
        options?: NativeKeyboardHideOptions,
        onSuccess?: () => void,
        onError?: (err: any) => void,
    ): void;

    /**
     * Show a previously hidden keyboard
     */
    showMessengerKeyboard(
        onSuccess?: () => void,
        onError?: (err: any) => void,
    ): void;

    /**
     * Hide the keyboard, but not the messenger bar
     */
    hideMessengerKeyboard(
        onSuccess?: () => void,
        onError?: (err: any) => void,
    ): void;

    /**
     * Manipulate the messenger while it's open. For instance if you want to
     * update the text programmatically based on what the user typed (by responding to
     * onTextChanged events).
     */
    updateMessenger(
        options: NativeKeyboardUpdateOptions,
        onSuccess?: () => void,
        onError?: (err: any) => void,
    ): void;
}

interface NativeKeyboardUpdateOptions {
    /**
     * Replace the messenger's text by this. The current text remains if omitted.
     */
    text?: string | undefined;

    /**
     * Position the cursor anywhere in the text range. Defaults to the end of the text.
     */
    caretIndex?: number | undefined;

    /**
     * If false or omitted no changes to the keyboard state are made.
     */
    showKeyboard?: boolean | undefined;
}

interface NativeKeyboardHideOptions {
    /**
     * A boolean flag inidicating if the keyboard should be shown/hidden with an animation
     */
    animated?: boolean | undefined;
}

interface NativeKeyboardShowOptions {
    /**
     * Callback function, which is being called as soon as the user submits
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
    scrollToBottomAfterMessengerShows?: boolean | undefined;

    /**
     * Boolean value indicating if the keyboard should be kept open after submitting the entered
     * text
     *
     * Default: false
     */
    keepOpenAfterSubmit?: boolean | undefined;

    /**
     * Makes the messenger bar slide in from the bottom.
     *
     * Default: false
     */
    animated?: boolean | undefined;

    /**
     * Open the keyboard when showing the messenger.
     *
     * Default: false
     */
    showKeyboard?: boolean | undefined;

    /**
     * A text which will be in the messenger bar, when opening
     */
    text?: string | undefined;

    /**
     * The color of the typed text in HEX.
     *
     * Default: #444
     */
    textColor?: string | undefined;

    /**
     * A placeholder which will be in the messenger bar, when opening and the input field is
     * empty
     */
    placeholder?: string | undefined;

    /**
     * The color of the placeholder.
     *
     * Default: #ccc
     */
    placeholderColor?: string | undefined;

    /**
     * The background color of the messenger bar.
     *
     * Default: #F6F6F6
     */
    backgroundColor?: string | undefined;

    /**
     * The background color of the textview. Looks nicest on Android
     * if it's the same color as the backgroundColor property.
     *
     * Default: #F6F6F6
     */
    textViewBackgroundColor?: string | undefined;

    /**
     * The border color of the textview.
     *
     * Default: #666666
     */
    textViewBorderColor?: string | undefined;

    /**
     * Maximum amount of chars that can be entered
     */
    maxChars?: number | undefined;

    /**
     * Options are: "none", "split", "countdown", "countdownreversed".
     * Note that if maxChars is set, "none" will still show a counter.
     *
     * Default: "none"
     */
    counterStyle?: string | undefined;

    /**
     * Options are: "default", "decimalpad", "phonepad", "numberpad", "namephonepad",
     * "number", "email", "twitter", "url", "alphabet", "search", "ascii"
     *
     * Default: "default"
     */
    type?: string | undefined;

    /**
     * Options are: "light", "dark".
     *
     * Default: "default"
     */
    appearance?: string | undefined;

    /**
     * Disables things like the Emoji keyboard and the Predicive text entry bar
     *
     * Default: false
     */
    secure?: boolean | undefined;

    /**
     * The left button of the messenger bar
     */
    leftButton?: LeftButtonOptions | undefined;

    /**
     * The right button of the messenger bar
     */
    rightButton?: ButtonOptions | undefined;
}

interface ButtonOptions {
    /**
     * The type of the button.
     * Either "text", "fontawesome" or "ionicon".
     *
     * Default: "text"
     */
    type?: string | undefined;

    /**
     * The value of the button. On "text" the string is used as label
     * On fonatawesome or ionicon the icon name is used (e.g. fa-rocket)
     *
     * Default: "Send"
     */
    value?: string | undefined;

    /**
     * If type is "text" you can set this to either "normal", "bold" or "italic".
     *
     * Default: "normal"
     */
    textStyle?: string | undefined;

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
    disabledWhenTextEntered?: boolean | undefined;
}

/** NativeKeyboard instance */
declare var NativeKeyboard: NativeKeyboard;
interface Window {
    NativeKeyboard: NativeKeyboard;
}
