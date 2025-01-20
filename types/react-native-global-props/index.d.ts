import {
    ActivityIndicatorProps,
    ImageProps,
    KeyboardAvoidingViewProps,
    ListViewProps,
    ModalProps,
    RefreshControlProps,
    ScrollViewProps,
    SliderProps,
    StatusBarProps,
    SwitchProps,
    TextInputProps,
    TextProps,
    TouchableHighlightProps,
    TouchableNativeFeedbackProps,
    TouchableOpacityProps,
    TouchableWithoutFeedbackProps,
    ViewProps,
} from "react-native";

export function setCustomView(customViewProps: ViewProps): void;

export function setCustomTextInput(customTextInputProps: TextInputProps): void;

export function setCustomText(customTextProps: TextProps): void;

export function setCustomImage(customImageProps: ImageProps): void;

export function setCustomTouchableHighlight(customTouchableHighlightProps: TouchableHighlightProps): void;

export function setCustomTouchableNativeFeedback(
    customTouchableNativeFeedbackProps: TouchableNativeFeedbackProps,
): void;

export function setCustomTouchableWithoutFeedback(
    customTouchableWithoutFeedbackProps: TouchableWithoutFeedbackProps,
): void;

export function setCustomTouchableOpacity(customTouchableOpacityProps: TouchableOpacityProps): void;

export function setCustomActivityIndicator(customActivityIndicatorProps: ActivityIndicatorProps): void;

export function setCustomKeyboardAvoidingView(customKeyboardAvoidingViewProps: KeyboardAvoidingViewProps): void;

export function setCustomModal(customModalProps: ModalProps): void;

export function setCustomRefreshControl(customRefreshControlProps: RefreshControlProps): void;

export function setCustomScrollView(customScrollViewProps: ScrollViewProps): void;

export function setCustomSlider(customSliderProps: SliderProps): void;

export function setCustomStatusBar(customStatusBarProps: StatusBarProps): void;

export function setCustomSwitch(customSwitchProps: SwitchProps): void;

/**
 * @deprecated Picker was a deprecated React Native component removed in RN 0.66 - https://reactnative.dev/docs/0.65/picker.
 *             Use one of the community packages instead - https://reactnative.directory/?search=picker
 */
export function setCustomPicker(customPickerProps: any): void;

/**
 * @deprecated ListView is a deprecated React Native component - https://reactnative.dev/docs/listview
 */
export function setCustomListView(customListViewProps: ListViewProps): void;

/**
 * @deprecated WebView is a deprecated React Native component - https://reactnative.dev/docs/webview
 */
export function setCustomWebView(customWebViewProps: any): void;
