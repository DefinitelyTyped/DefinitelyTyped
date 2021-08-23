import * as React from 'react';
import {
    ActivityIndicatorProps,
    ImageProps,
    KeyboardAvoidingViewProps,
    ListView,
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
    View,
    ViewProps,
} from 'react-native';
import {
    setCustomActivityIndicator,
    setCustomImage,
    setCustomKeyboardAvoidingView,
    setCustomListView,
    setCustomModal,
    setCustomPicker,
    setCustomRefreshControl,
    setCustomScrollView,
    setCustomSlider,
    setCustomStatusBar,
    setCustomSwitch,
    setCustomText,
    setCustomTextInput,
    setCustomTouchableHighlight,
    setCustomTouchableNativeFeedback,
    setCustomTouchableOpacity,
    setCustomTouchableWithoutFeedback,
    setCustomView,
    setCustomWebView,
} from 'react-native-global-props';

const customViewProps: ViewProps = {};
// $ExpectType void
setCustomView(customViewProps);

const customTextInputProps: TextInputProps = {};
// $ExpectType void
setCustomTextInput(customTextInputProps);

const customTextProps: TextProps = {};
// $ExpectType void
setCustomText(customTextProps);

const customImageProps: ImageProps = {
    source: {
        uri: 'https://example.org/image.png',
    },
};
// $ExpectType void
setCustomImage(customImageProps);

const customTouchableHighlightProps: TouchableHighlightProps = {};
// $ExpectType void
setCustomTouchableHighlight(customTouchableHighlightProps);

const customTouchableNativeFeedbackProps: TouchableNativeFeedbackProps = {};
// $ExpectType void
setCustomTouchableNativeFeedback(customTouchableNativeFeedbackProps);

const customTouchableWithoutFeedbackProps: TouchableWithoutFeedbackProps = {};
// $ExpectType void
setCustomTouchableWithoutFeedback(customTouchableWithoutFeedbackProps);

const customTouchableOpacityProps: TouchableOpacityProps = {};
// $ExpectType void
setCustomTouchableOpacity(customTouchableOpacityProps);

const customActivityIndicatorProps: ActivityIndicatorProps = {};
// $ExpectType void
setCustomActivityIndicator(customActivityIndicatorProps);

const customKeyboardAvoidingViewProps: KeyboardAvoidingViewProps = {};
// $ExpectType void
setCustomKeyboardAvoidingView(customKeyboardAvoidingViewProps);

const customModalProps: ModalProps = {};
// $ExpectType void
setCustomModal(customModalProps);

const customPickerProps: PickerProps = {};
// $ExpectType void
setCustomPicker(customPickerProps);

const customRefreshControlProps: RefreshControlProps = {
    refreshing: false,
};
// $ExpectType void
setCustomRefreshControl(customRefreshControlProps);

const customScrollViewProps: ScrollViewProps = {};
// $ExpectType void
setCustomScrollView(customScrollViewProps);

const customSliderProps: SliderProps = {};
// $ExpectType void
setCustomSlider(customSliderProps);

const customStatusBarProps: StatusBarProps = {};
// $ExpectType void
setCustomStatusBar(customStatusBarProps);

const customSwitchProps: SwitchProps = {};
// $ExpectType void
setCustomSwitch(customSwitchProps);

const customListViewProps: ListViewProps = {
    dataSource: new ListView.DataSource({}),
    renderRow(rowData: any, sectionID: string | number, rowID: string | number, highlightRow: boolean | undefined): React.ReactElement {
        return <View />;
    },
};
// $ExpectType void
setCustomListView(customListViewProps);

const customWebViewProps = {};
// $ExpectType void
setCustomWebView(customWebViewProps);
