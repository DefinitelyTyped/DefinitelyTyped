import {
    TextProps,
    TextPropsIOS,
    TextPropsAndroid,
    AccessibilityProps,
    AccessibilityPropsIOS,
    AccessibilityPropsAndroid,
    TextInputProps,
    TextInputIOSProps,
    TextInputAndroidProps,
    ViewProps,
    ViewPropsIOS,
    ViewPropsAndroid,
    ToolbarAndroidProps,
    ViewPagerAndroidProps,
    SegmentedControlIOSProps,
    ScrollViewProps,
    ScrollViewPropsIOS,
    ScrollViewPropsAndroid,
    InputAccessoryViewProps,
    NavigatorIOSProps,
    ActivityIndicatorProps,
    ActivityIndicatorIOSProps,
    DatePickerIOSProps,
    DrawerLayoutAndroidProps,
    PickerItemProps,
    PickerIOSItemProps,
    PickerProps,
    PickerPropsIOS,
    PickerPropsAndroid,
    PickerIOSProps,
    ProgressBarAndroidProps,
    ProgressViewIOSProps,
    RefreshControlProps,
    RefreshControlPropsIOS,
    RefreshControlPropsAndroid,
    RecyclerViewBackedScrollViewProps,
    SliderProps,
    SliderPropsIOS,
    SliderPropsAndroid,
    SwitchIOSProps,
    ImageSourcePropType,
    ImageProps,
    ImagePropsIOS,
    ImagePropsAndroid,
    ImageBackgroundProps,
    FlatListProps,
    VirtualizedListProps,
    SectionListProps,
    ListViewProps,
    MaskedViewIOSProps,
    ModalProps,
    TouchableWithoutFeedbackProps,
    TouchableHighlightProps,
    TouchableOpacityProps,
    TouchableNativeFeedbackProps,
    TabBarIOSItemProps,
    TabBarIOSProps,
    SnapshotViewIOSProps,
    ButtonProps,
    StatusBarProps,
    StatusBarPropsIOS,
    StatusBarPropsAndroid,
    SwitchProps,
    SwitchPropsIOS,
} from 'react-native';

declare module 'react-native' {
    /*
     * Previously, props interfaces where named *Properties
     * They have been renamed to *Props to match React Native documentation
     * The following lines ensure compatibility with *Properties and should be removed in the future
     */

    /** @deprecated Use TextProps */
    export type TextProperties = TextProps;

    /** @deprecated Use TextPropsIOS */
    export type TextPropertiesIOS = TextPropsIOS;

    /** @deprecated Use TextPropsAndroid */
    export type TextPropertiesAndroid = TextPropsAndroid;

    /** @deprecated Use AccessibilityProps */
    export type AccessibilityProperties = AccessibilityProps;

    /** @deprecated Use AccessibilityPropsIOS */
    export type AccessibilityPropertiesIOS = AccessibilityPropsIOS;

    /** @deprecated Use AccessibilityPropsAndroid */
    export type AccessibilityPropertiesAndroid = AccessibilityPropsAndroid;

    /** @deprecated Use TextInputProps */
    export type TextInputProperties = TextInputProps;

    /** @deprecated Use TextInputIOSProps */
    export type TextInputIOSProperties = TextInputIOSProps;

    /** @deprecated Use TextInputAndroidProps */
    export type TextInputAndroidProperties = TextInputAndroidProps;

    /** @deprecated Use ViewProps */
    export type ViewProperties = ViewProps;

    /** @deprecated Use ViewPropsIOS */
    export type ViewPropertiesIOS = ViewPropsIOS;

    /** @deprecated Use ViewPropsAndroid */
    export type ViewPropertiesAndroid = ViewPropsAndroid;

    /** @deprecated Use ToolbarAndroidProps */
    export type ToolbarAndroidProperties = ToolbarAndroidProps;

    /** @deprecated Use ViewPagerAndroidProps */
    export type ViewPagerAndroidProperties = ViewPagerAndroidProps;

    /** @deprecated Use SegmentedControlIOSProps */
    export type SegmentedControlIOSProperties = SegmentedControlIOSProps;

    /** @deprecated Use ScrollViewProps */
    export type ScrollViewProperties = ScrollViewProps;

    /** @deprecated Use ScrollViewPropsIOS */
    export type ScrollViewPropertiesIOS = ScrollViewPropsIOS;

    /** @deprecated Use ScrollViewPropsAndroid */
    export type ScrollViewPropertiesAndroid = ScrollViewPropsAndroid;

    /** @deprecated Use InputAccessoryViewProps */
    export type InputAccessoryViewProperties = InputAccessoryViewProps;

    /** @deprecated Use NavigatorIOSProps */
    export type NavigatorIOSProperties = NavigatorIOSProps;

    /** @deprecated Use ActivityIndicatorProps */
    export type ActivityIndicatorProperties = ActivityIndicatorProps;

    /** @deprecated Use ActivityIndicatorIOSProps */
    export type ActivityIndicatorIOSProperties = ActivityIndicatorIOSProps;

    /** @deprecated Use DatePickerIOSProps */
    export type DatePickerIOSProperties = DatePickerIOSProps;

    /** @deprecated Use DrawerLayoutAndroidProps */
    export type DrawerLayoutAndroidProperties = DrawerLayoutAndroidProps;

    /** @deprecated Use PickerItemProps */
    export type PickerItemProperties = PickerItemProps;

    /** @deprecated Use PickerIOSItemProps */
    export type PickerIOSItemProperties = PickerIOSItemProps;

    /** @deprecated Use PickerProps */
    export type PickerProperties = PickerProps;

    /** @deprecated Use PickerPropsIOS */
    export type PickerPropertiesIOS = PickerPropsIOS;

    /** @deprecated Use PickerPropsAndroid */
    export type PickerPropertiesAndroid = PickerPropsAndroid;

    /** @deprecated Use PickerIOSProps */
    export type PickerIOSProperties = PickerIOSProps;

    /** @deprecated Use ProgressBarAndroidProps */
    export type ProgressBarAndroidProperties = ProgressBarAndroidProps;

    /** @deprecated Use ProgressViewIOSProps */
    export type ProgressViewIOSProperties = ProgressViewIOSProps;

    /** @deprecated Use RefreshControlProps */
    export type RefreshControlProperties = RefreshControlProps;

    /** @deprecated Use RefreshControlPropsIOS */
    export type RefreshControlPropertiesIOS = RefreshControlPropsIOS;

    /** @deprecated Use RefreshControlPropsAndroid */
    export type RefreshControlPropertiesAndroid = RefreshControlPropsAndroid;

    /** @deprecated Use RecyclerViewBackedScrollViewProps */
    export type RecyclerViewBackedScrollViewProperties = RecyclerViewBackedScrollViewProps;

    /** @deprecated Use SliderProps */
    export type SliderProperties = SliderProps;

    /** @deprecated Use SliderPropsIOS */
    export type SliderPropertiesIOS = SliderPropsIOS;

    /** @deprecated Use SliderPropsAndroid */
    export type SliderPropertiesAndroid = SliderPropsAndroid;

    /** @deprecated Use SwitchIOSProps */
    export type SwitchIOSProperties = SwitchIOSProps;

    /** @deprecated Use ImageSourcePropType */
    export type ImagePropertiesSourceOptions = ImageSourcePropType;

    /** @deprecated Use ImageProps */
    export type ImageProperties = ImageProps;

    /** @deprecated Use ImagePropsIOS */
    export type ImagePropertiesIOS = ImagePropsIOS;

    /** @deprecated Use ImagePropsAndroid */
    export type ImagePropertiesAndroid = ImagePropsAndroid;

    /** @deprecated Use ImageBackgroundProps */
    export type ImageBackgroundProperties = ImageBackgroundProps;

    /** @deprecated Use FlatListProps */
    export type FlatListProperties<ItemT> = FlatListProps<ItemT>;

    /** @deprecated Use VirtualizedListProps */
    export type VirtualizedListProperties<ItemT> = VirtualizedListProps<ItemT>;

    /** @deprecated Use SectionListProps */
    export type SectionListProperties<ItemT> = SectionListProps<ItemT>;

    /** @deprecated Use ListViewProps */
    export type ListViewProperties = ListViewProps;

    /** @deprecated Use MaskedViewIOSProps */
    export type MaskedViewIOSProperties = MaskedViewIOSProps;

    /** @deprecated Use ModalProps */
    export type ModalProperties = ModalProps;

    /** @deprecated Use TouchableWithoutFeedbackProps */
    export type TouchableWithoutFeedbackProperties = TouchableWithoutFeedbackProps;

    /** @deprecated Use TouchableHighlightProps */
    export type TouchableHighlightProperties = TouchableHighlightProps;

    /** @deprecated Use TouchableOpacityProps */
    export type TouchableOpacityProperties = TouchableOpacityProps;

    /** @deprecated Use TouchableNativeFeedbackProps */
    export type TouchableNativeFeedbackProperties = TouchableNativeFeedbackProps;

    /** @deprecated Use TabBarIOSItemProps */
    export type TabBarIOSItemProperties = TabBarIOSItemProps;

    /** @deprecated Use TabBarIOSProps */
    export type TabBarIOSProperties = TabBarIOSProps;

    /** @deprecated Use SnapshotViewIOSProps */
    export type SnapshotViewIOSProperties = SnapshotViewIOSProps;

    /** @deprecated Use ButtonProps */
    export type ButtonProperties = ButtonProps;

    /** @deprecated Use StatusBarProps */
    export type StatusBarProperties = StatusBarProps;

    /** @deprecated Use StatusBarPropsIOS */
    export type StatusBarPropertiesIOS = StatusBarPropsIOS;

    /** @deprecated Use StatusBarPropsAndroid */
    export type StatusBarPropertiesAndroid = StatusBarPropsAndroid;

    /** @deprecated Use SwitchProps */
    export type SwitchProperties = SwitchProps;

    /** @deprecated Use SwitchPropsIOS */
    export type SwitchPropertiesIOS = SwitchPropsIOS;
}
