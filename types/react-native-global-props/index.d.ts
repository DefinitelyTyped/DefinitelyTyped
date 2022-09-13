// Type definitions for react-native-global-props 1.1
// Project: https://github.com/Ajackster/react-native-global-props#readme
// Definitions by: Liam Jones <https://github.com/liamjones/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {
    ActivityIndicatorProps,
    ImageProps,
    KeyboardAvoidingViewProps,
    ListViewProps,
    ModalProps,
    PickerProps,
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
} from 'react-native';

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

export function setCustomPicker(customPickerProps: PickerProps): void;

export function setCustomRefreshControl(customRefreshControlProps: RefreshControlProps): void;

export function setCustomScrollView(customScrollViewProps: ScrollViewProps): void;

export function setCustomSlider(customSliderProps: SliderProps): void;

export function setCustomStatusBar(customStatusBarProps: StatusBarProps): void;

export function setCustomSwitch(customSwitchProps: SwitchProps): void;

/**
 * @deprecated ListView is a deprecated React Native component - https://reactnative.dev/docs/listview
 */
export function setCustomListView(customListViewProps: ListViewProps): void;

/**
 * @deprecated WebView is a deprecated React Native component - https://reactnative.dev/docs/webview
 */
export function setCustomWebView(customWebViewProps: any): void;
