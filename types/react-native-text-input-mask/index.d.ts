// Type definitions for react-native-text-input-mask 0.7
// Project: https://github.com/react-native-community/react-native-text-input-mask
// Definitions by: Rodrigo Weber <https://github.com/RodrigoAWeber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import * as ReactNative from "react-native";

export type onChangeTextCallback = (formatted: string, extracted: string) => void;

export interface TextInputMaskProps extends ReactNative.ViewProps, ReactNative.TextInputIOSProps, ReactNative.TextInputAndroidProps, ReactNative.AccessibilityProps {
    maskDefaultValue?: boolean;
    mask: string;
    onChangeText: onChangeTextCallback;

    // Export standard TextInputProps from here on.
    // Workaround for not being able to override onChangeText
    // Copied from React-Native types version: 0.55

    /**
     * Specifies whether fonts should scale to respect Text Size accessibility settings.
     * The default is `true`.
     */
    allowFontScaling?: boolean;

    /**
     * Can tell TextInput to automatically capitalize certain characters.
     *      characters: all characters,
     *      words: first letter of each word
     *      sentences: first letter of each sentence (default)
     *      none: don't auto capitalize anything
     *
     * https://facebook.github.io/react-native/docs/textinput.html#autocapitalize
     */
    autoCapitalize?: "none" | "sentences" | "words" | "characters";

    /**
     * If false, disables auto-correct.
     * The default value is true.
     */
    autoCorrect?: boolean;

    /**
     * If true, focuses the input on componentDidMount.
     * The default value is false.
     */
    autoFocus?: boolean;

    /**
     * If true, the text field will blur when submitted.
     * The default value is true.
     */
    blurOnSubmit?: boolean;

    /**
     * If true, caret is hidden. The default value is false.
     */
    caretHidden?: boolean;

    /**
     * Provides an initial value that will change when the user starts typing.
     * Useful for simple use-cases where you don't want to deal with listening to events
     * and updating the value prop to keep the controlled state in sync.
     */
    defaultValue?: string;

    /**
     * If false, text is not editable. The default value is true.
     */
    editable?: boolean;

    /**
     * enum("default", 'numeric', 'email-address', "ascii-capable", 'numbers-and-punctuation', 'url', 'number-pad', 'phone-pad', 'name-phone-pad',
     * 'decimal-pad', 'twitter', 'web-search', 'visible-password')
     * Determines which keyboard to open, e.g.numeric.
     * The following values work across platforms: - default - numeric - email-address - phone-pad
     * The following values work on iOS: - ascii-capable - numbers-and-punctuation - url - number-pad - name-phone-pad - decimal-pad - twitter - web-search
     * The following values work on Android: - visible-password
     */
    keyboardType?: ReactNative.KeyboardTypeOptions;

    /**
     * Limits the maximum number of characters that can be entered.
     * Use this instead of implementing the logic in JS to avoid flicker.
     */
    maxLength?: number;

    /**
     * If true, the text input can be multiple lines. The default value is false.
     */
    multiline?: boolean;

    /**
     * Callback that is called when the text input is blurred
     */
    onBlur?: (e: ReactNative.NativeSyntheticEvent<ReactNative.TextInputFocusEventData>) => void;

    /**
     * Callback that is called when the text input's text changes.
     */
    onChange?: (
        event: {
            nativeEvent: {
                text: string;
                contentSize: { width: number; height: number };
                target: number;
                eventCount: number;
            };
        }
    ) => void;

    /**
     * Callback that is called when the text input's content size changes.
     * This will be called with
     * `{ nativeEvent: { contentSize: { width, height } } }`.
     *
     * Only called for multiline text inputs.
     */
    onContentSizeChange?: (event: { nativeEvent: { contentSize: { width: number; height: number } } }) => void;

    /**
     * Callback that is called when text input ends.
     */
    onEndEditing?: (event: { nativeEvent: { text: string } }) => void;

    /**
     * Callback that is called when the text input is focused
     */
    onFocus?: (e: ReactNative.NativeSyntheticEvent<ReactNative.TextInputFocusEventData>) => void;

    /**
     * Callback that is called when the text input selection is changed.
     */
    onSelectionChange?: (e: ReactNative.NativeSyntheticEvent<ReactNative.TextInputSelectionChangeEventData>) => void;

    /**
     * Callback that is called when the text input's submit button is pressed.
     */
    onSubmitEditing?: (event: { nativeEvent: { text: string } }) => void;

    /**
     * Invoked on content scroll with
     *  `{ nativeEvent: { contentOffset: { x, y } } }`.
     *
     * May also contain other properties from ScrollEvent but on Android contentSize is not provided for performance reasons.
     */
    onScroll?: (e: ReactNative.NativeSyntheticEvent<ReactNative.TextInputScrollEventData>) => void;

    /**
     * Callback that is called when a key is pressed.
     * This will be called with
     *  `{ nativeEvent: { key: keyValue } }`
     * where keyValue is 'Enter' or 'Backspace' for respective keys and the typed-in character otherwise including ' ' for space.
     *
     * Fires before onChange callbacks.
     * Note: on Android only the inputs from soft keyboard are handled, not the hardware keyboard inputs.
     */
    onKeyPress?: (e: ReactNative.NativeSyntheticEvent<ReactNative.TextInputKeyPressEventData>) => void;

    /**
     * The string that will be rendered before text input has been entered
     */
    placeholder?: string;

    /**
     * The text color of the placeholder string
     */
    placeholderTextColor?: string;

    /**
     * enum('default', 'go', 'google', 'join', 'next', 'route', 'search', 'send', 'yahoo', 'done', 'emergency-call')
     * Determines how the return key should look.
     */
    returnKeyType?: ReactNative.ReturnKeyTypeOptions;

    /**
     * If true, the text input obscures the text entered so that sensitive text like passwords stay secure.
     * The default value is false.
     */
    secureTextEntry?: boolean;

    /**
     * If true, all text will automatically be selected on focus
     */
    selectTextOnFocus?: boolean;

    /**
     * The start and end of the text input's selection. Set start and end to
     * the same value to position the cursor.
     */
    selection?: { start: number; end?: number };

    /**
     * The highlight (and cursor on ios) color of the text input
     */
    selectionColor?: string;

    /**
     * Styles
     */
    style?: ReactNative.StyleProp<ReactNative.TextStyle>;

    /**
     * Used to locate this view in end-to-end tests
     */
    testID?: string;

    /**
     * Used to connect to an InputAccessoryView. Not part of react-natives documentation, but present in examples and
     * code.
     * See https://facebook.github.io/react-native/docs/inputaccessoryview.html for more information.
     */
    inputAccessoryViewID?: string;

    /**
     * The value to show for the text input. TextInput is a controlled component,
     * which means the native value will be forced to match this value prop if provided.
     * For most uses this works great, but in some cases this may cause flickering - one common cause is preventing edits by keeping value the same.
     * In addition to simply setting the same value, either set editable={false},
     * or set/update maxLength to prevent unwanted edits without flicker.
     */
    value?: string;
}

export default class TextInputMask extends React.Component<TextInputMaskProps> { }
