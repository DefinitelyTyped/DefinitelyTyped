import type * as React from "react";
import type { Animated, LayoutChangeEvent, StyleProp, TextStyle, ViewStyle } from "react-native";
import type { EdgeInsets } from "react-native-safe-area-context";
import type {
    Descriptor,
    NavigationHelpers,
    NavigationProp,
    ParamListBase,
    Route,
    RouteProp,
    StackActionHelpers,
    StackNavigationState,
} from "../native";
// tslint:disable:interface-over-type-literal
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackNavigationEventMap = {
    /**
     * Event which fires when a transition animation starts.
     */
    transitionStart: {
        data: {
            closing: boolean;
        };
    };
    /**
     * Event which fires when a transition animation ends.
     */
    transitionEnd: {
        data: {
            closing: boolean;
        };
    };
    /**
     * Event which fires when navigation gesture starts.
     */
    gestureStart: {
        data: undefined;
    };
    /**
     * Event which fires when navigation gesture is completed.
     */
    gestureEnd: {
        data: undefined;
    };
    /**
     * Event which fires when navigation gesture is canceled.
     */
    gestureCancel: {
        data: undefined;
    };
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackNavigationHelpers =
    & NavigationHelpers<ParamListBase, StackNavigationEventMap>
    & StackActionHelpers<ParamListBase>;
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackNavigationProp<ParamList extends ParamListBase, RouteName extends keyof ParamList = string> =
    & NavigationProp<
        ParamList,
        RouteName,
        StackNavigationState<ParamList>,
        StackNavigationOptions,
        StackNavigationEventMap
    >
    & StackActionHelpers<ParamList>;
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackScreenProps<ParamList extends ParamListBase, RouteName extends keyof ParamList = string> = {
    navigation: StackNavigationProp<ParamList, RouteName>;
    route: RouteProp<ParamList, RouteName>;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type Layout = {
    width: number;
    height: number;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type GestureDirection = "horizontal" | "horizontal-inverted" | "vertical" | "vertical-inverted";
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type Scene<T> = {
    /**
     * Current route object,
     */
    route: T;
    /**
     * Descriptor object for the route containing options and navigation object.
     */
    descriptor: StackDescriptor;
    /**
     * Animated nodes representing the progress of the animation.
     */
    progress: {
        /**
         * Progress value of the current screen.
         */
        current: Animated.AnimatedInterpolation;
        /**
         * Progress value for the screen after this one in the stack.
         * This can be `undefined` in case the screen animating is the last one.
         */
        next?: Animated.AnimatedInterpolation | undefined;
        /**
         * Progress value for the screen before this one in the stack.
         * This can be `undefined` in case the screen animating is the first one.
         */
        previous?: Animated.AnimatedInterpolation | undefined;
    };
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackHeaderMode = "float" | "screen" | "none";
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackCardMode = "card" | "modal";
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackHeaderOptions = {
    /**
     * String or a function that returns a React Element to be used by the header.
     * Defaults to scene `title`.
     * It receives `allowFontScaling`, `onLayout`, `style` and `children` in the options object as an argument.
     * The title string is passed in `children`.
     */
    headerTitle?: string | ((props: StackHeaderTitleProps) => React.ReactNode) | undefined;
    /**
     * How to align the the header title.
     * Defaults to `center` on iOS and `left` on Android.
     */
    headerTitleAlign?: "left" | "center" | undefined;
    /**
     * Style object for the title component.
     */
    headerTitleStyle?: Animated.WithAnimatedValue<StyleProp<TextStyle>> | undefined;
    /**
     * Style object for the container of the `headerTitle` component, for example to add padding.
     * By default, `headerTitleContainerStyle` is with an absolute position style and offsets both `left` and `right`.
     * This may lead to white space or overlap between `headerLeft` and `headerTitle` if a customized `headerLeft` is used.
     * It can be solved by adjusting `left` and `right` style in `headerTitleContainerStyle` and `marginHorizontal` in `headerTitleStyle`.
     */
    headerTitleContainerStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>> | undefined;
    /**
     * Tint color for the header.
     */
    headerTintColor?: string | undefined;
    /**
     * Whether header title font should scale to respect Text Size accessibility settings. Defaults to `false`.
     */
    headerTitleAllowFontScaling?: boolean | undefined;
    /**
     * Whether back button title font should scale to respect Text Size accessibility settings. Defaults to `false`.
     */
    headerBackAllowFontScaling?: boolean | undefined;
    /**
     * Accessibility label for the header back button.
     */
    headerBackAccessibilityLabel?: string | undefined;
    /**
     * Title string used by the back button on iOS. Defaults to the previous scene's `headerTitle`.
     * Use `headerBackTitleVisible: false` to hide it.
     */
    headerBackTitle?: string | undefined;
    /**
     * Style object for the back title.
     */
    headerBackTitleStyle?: StyleProp<TextStyle> | undefined;
    /**
     * A reasonable default is supplied for whether the back button title should be visible or not.
     * But if you want to override that you can use `true` or `false` in this option.
     */
    headerBackTitleVisible?: boolean | undefined;
    /**
     * Title string used by the back button when `headerBackTitle` doesn't fit on the screen. `"Back"` by default.
     */
    headerTruncatedBackTitle?: string | undefined;
    /**
     * Function which returns a React Element to display on the left side of the header.
     * It receives a number of arguments when rendered (`onPress`, `label`, `labelStyle` and more.
     */
    headerLeft?: ((props: StackHeaderLeftButtonProps) => React.ReactNode) | undefined;
    /**
     * Style object for the container of the `headerLeft` component, for example to add padding.
     */
    headerLeftContainerStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>> | undefined;
    /**
     * Function which returns a React Element to display on the right side of the header.
     */
    headerRight?:
        | ((props: {
            tintColor?: string | undefined;
        }) => React.ReactNode)
        | undefined;
    /**
     * Style object for the container of the `headerRight` component, for example to add padding.
     */
    headerRightContainerStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>> | undefined;
    /**
     * Function which returns a React Element to display custom image in header's back button.
     * It receives the `tintColor` in in the options object as an argument. object.
     * Defaults to Image component with a the default back icon image for the platform (a chevron on iOS and an arrow on Android).
     */
    headerBackImage?: StackHeaderLeftButtonProps["backImage"] | undefined;
    /**
     * Color for material ripple (Android >= 5.0 only).
     */
    headerPressColorAndroid?: string | undefined;
    /**
     * Function which returns a React Element to render as the background of the header.
     * This is useful for using backgrounds such as an image or a gradient.
     * You can use this with `headerTransparent` to render a blur view, for example, to create a translucent header.
     */
    headerBackground?:
        | ((props: {
            style: StyleProp<ViewStyle>;
        }) => React.ReactNode)
        | undefined;
    /**
     * Style object for the header. You can specify a custom background color here, for example.
     */
    headerStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>> | undefined;
    /**
     * Defaults to `false`. If `true`, the header will not have a background unless you explicitly provide it with `headerBackground`.
     * The header will also float over the screen so that it overlaps the content underneath.
     * This is useful if you want to render a semi-transparent header or a blurred background.
     */
    headerTransparent?: boolean | undefined;
    /**
     * Extra padding to add at the top of header to account for translucent status bar.
     * By default, it uses the top value from the safe area insets of the device.
     * Pass 0 or a custom value to disable the default behaviour, and customize the height.
     */
    headerStatusBarHeight?: number | undefined;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackHeaderProps = {
    /**
     * Mode of the header: `float` renders a single floating header across all screens,
     * `screen` renders separate headers for each screen.
     */
    mode: "float" | "screen";
    /**
     * Layout of the screen.
     */
    layout: Layout;
    /**
     * Safe area insets to use in the header, e.g. to apply extra spacing for statusbar and notch.
     */
    insets: EdgeInsets;
    /**
     * Object representing the current scene, such as the route object and animation progress.
     */
    scene: Scene<Route<string>>;
    /**
     * Object representing the previous scene.
     */
    previous?: Scene<Route<string>> | undefined;
    /**
     * Navigation prop for the header.
     */
    navigation: StackNavigationProp<ParamListBase>;
    /**
     * Interpolated styles for various elements in the header.
     */
    styleInterpolator: StackHeaderStyleInterpolator;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackDescriptor = Descriptor<
    ParamListBase,
    string,
    StackNavigationState<ParamListBase>,
    StackNavigationOptions
>;
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackDescriptorMap = {
    [key: string]: StackDescriptor;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackNavigationOptions = StackHeaderOptions & Partial<TransitionPreset> & {
    /**
     * String that can be displayed in the header as a fallback for `headerTitle`.
     */
    title?: string | undefined;
    /**
     * Function that given `HeaderProps` returns a React Element to display as a header.
     */
    header?: ((props: StackHeaderProps) => React.ReactNode) | undefined;
    /**
     * Whether to show the header. The header is shown by default unless `headerMode` was set to `none`.
     * Setting this to `false` hides the header.
     */
    headerShown?: boolean | undefined;
    /**
     * Whether a shadow is visible for the card during transitions. Defaults to `true`.
     */
    cardShadowEnabled?: boolean | undefined;
    /**
     * Whether to have a semi-transparent dark overlay visible under the card during transitions.
     * Defaults to `true` on Android and `false` on iOS.
     */
    cardOverlayEnabled?: boolean | undefined;
    /**
     * Function that returns a React Element to display as a overlay for the card.
     */
    cardOverlay?:
        | ((props: {
            style: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
        }) => React.ReactNode)
        | undefined;
    /**
     * Style object for the card in stack.
     * You can provide a custom background color to use instead of the default background here.
     *
     * You can also specify `{ backgroundColor: 'transparent' }` to make the previous screen visible underneath.
     * This is useful to implement things like modal dialogs.
     * If you use [`react-native-screens`](https://github.com/kmagiera/react-native-screens), you should also specify `mode: 'modal'`
     * in the stack view config when using a transparent background so previous screens aren't detached.
     */
    cardStyle?: StyleProp<ViewStyle> | undefined;
    /**
     * Whether transition animation should be enabled the screen.
     * If you set it to `false`, the screen won't animate when pushing or popping.
     * Defaults to `true` on Android and iOS, `false` on Web.
     */
    animationEnabled?: boolean | undefined;
    /**
     * The type of animation to use when this screen replaces another screen. Defaults to `push`.
     * When `pop` is used, the `pop` animation is applied to the screen being replaced.
     */
    animationTypeForReplace?: "push" | "pop" | undefined;
    /**
     * Whether you can use gestures to dismiss this screen. Defaults to `true` on iOS, `false` on Android.
     * Not supported on Web.
     */
    gestureEnabled?: boolean | undefined;
    /**
     * Object to override the distance of touch start from the edge of the screen to recognize gestures.
     * Not supported on Web.
     */
    gestureResponseDistance?: {
        /**
         * Distance for vertical direction. Defaults to 135.
         */
        vertical?: number | undefined;
        /**
         * Distance for horizontal direction. Defaults to 25.
         */
        horizontal?: number | undefined;
    } | undefined;
    /**
     * Number which determines the relevance of velocity for the gesture. Defaults to 0.3.
     * Not supported on Web.
     */
    gestureVelocityImpact?: number | undefined;
    /**
     * Safe area insets for the screen. This is used to avoid elements like notch and status bar.
     * By default, the device's safe area insets are automatically detected. You can override the behavior with this option.
     * For example, to remove the extra spacing for status bar, pass `safeAreaInsets: { top: 0 }`.
     */
    safeAreaInsets?: {
        top?: number | undefined;
        right?: number | undefined;
        bottom?: number | undefined;
        left?: number | undefined;
    } | undefined;
    /**
     * Whether to detach the previous screen from the view hierarchy to save memory.
     * Set it to `false` if you need the previous screen to be seen through the active screen.
     * Only applicable if `detachInactiveScreens` isn't set to `false`.
     * Defaults to `false` for the last screen when mode='modal', otherwise `true`.
     */
    detachPreviousScreen?: boolean | undefined;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackNavigationConfig = {
    mode?: StackCardMode | undefined;
    headerMode?: StackHeaderMode | undefined;
    /**
     * If `false`, the keyboard will NOT automatically dismiss when navigating to a new screen.
     * Defaults to `true`.
     */
    keyboardHandlingEnabled?: boolean | undefined;
    /**
     * Whether inactive screens should be detached from the view hierarchy to save memory.
     * Make sure to call `enableScreens` from `react-native-screens` to make it work.
     * Defaults to `true` on Android, depends on the version of `react-native-screens` on iOS.
     */
    detachInactiveScreens?: boolean | undefined;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackHeaderLeftButtonProps = {
    /**
     * Whether the button is disabled.
     */
    disabled?: boolean | undefined;
    /**
     * Callback to call when the button is pressed.
     * By default, this triggers `goBack`.
     */
    onPress?: (() => void) | undefined;
    /**
     * Color for material ripple (Android >= 5.0 only).
     */
    pressColorAndroid?: string | undefined;
    /**
     * Function which returns a React Element to display custom image in header's back button.
     */
    backImage?:
        | ((props: {
            tintColor: string;
        }) => React.ReactNode)
        | undefined;
    /**
     * Tint color for the header.
     */
    tintColor?: string | undefined;
    /**
     * Label text for the button. Usually the title of the previous screen.
     * By default, this is only shown on iOS.
     */
    label?: string | undefined;
    /**
     * Label text to show when there isn't enough space for the full label.
     */
    truncatedLabel?: string | undefined;
    /**
     * Whether the label text is visible.
     * Defaults to `true` on iOS and `false` on Android.
     */
    labelVisible?: boolean | undefined;
    /**
     * Style object for the label.
     */
    labelStyle?: Animated.WithAnimatedValue<StyleProp<TextStyle>> | undefined;
    /**
     * Whether label font should scale to respect Text Size accessibility settings.
     */
    allowFontScaling?: boolean | undefined;
    /**
     * Callback to trigger when the size of the label changes.
     */
    onLabelLayout?: ((e: LayoutChangeEvent) => void) | undefined;
    /**
     * Layout of the screen.
     */
    screenLayout?: Layout | undefined;
    /**
     * Layout of the title element in the header.
     */
    titleLayout?: Layout | undefined;
    /**
     * Whether it's possible to navigate back in stack.
     */
    canGoBack?: boolean | undefined;
    /**
     * Accessibility label for the button for screen readers.
     */
    accessibilityLabel?: string | undefined;
    /**
     * Style object for the button.
     */
    style?: StyleProp<ViewStyle> | undefined;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackHeaderTitleProps = {
    /**
     * Callback to trigger when the size of the title element changes.
     */
    onLayout: (e: LayoutChangeEvent) => void;
    /**
     * Whether title font should scale to respect Text Size accessibility settings.
     */
    allowFontScaling?: boolean | undefined;
    /**
     * Tint color for the header.
     */
    tintColor?: string | undefined;
    /**
     * Content of the title element. Usually the title string.
     */
    children?: string | undefined;
    /**
     * Style object for the title element.
     */
    style?: Animated.WithAnimatedValue<StyleProp<TextStyle>> | undefined;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type TransitionSpec = {
    animation: "spring";
    config: Omit<Animated.SpringAnimationConfig, "toValue" | keyof Animated.AnimationConfig>;
} | {
    animation: "timing";
    config: Omit<Animated.TimingAnimationConfig, "toValue" | keyof Animated.AnimationConfig>;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackCardInterpolationProps = {
    /**
     * Values for the current screen.
     */
    current: {
        /**
         * Animated node representing the progress value of the current screen.
         */
        progress: Animated.AnimatedInterpolation;
    };
    /**
     * Values for the current screen the screen after this one in the stack.
     * This can be `undefined` in case the screen animating is the last one.
     */
    next?: {
        /**
         * Animated node representing the progress value of the next screen.
         */
        progress: Animated.AnimatedInterpolation;
    } | undefined;
    /**
     * The index of the card in the stack.
     */
    index: number;
    /**
     * Animated node representing whether the card is closing (1 - closing, 0 - not closing).
     */
    closing: Animated.AnimatedInterpolation;
    /**
     * Animated node representing whether the card is being swiped (1 - swiping, 0 - not swiping).
     */
    swiping: Animated.AnimatedInterpolation;
    /**
     * Animated node representing multiplier when direction is inverted (-1 - inverted, 1 - normal).
     */
    inverted: Animated.AnimatedInterpolation;
    /**
     * Layout measurements for various items we use for animation.
     */
    layouts: {
        /**
         * Layout of the whole screen.
         */
        screen: Layout;
    };
    /**
     * Safe area insets
     */
    insets: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackCardInterpolatedStyle = {
    /**
     * Interpolated style for the container view wrapping the card.
     */
    containerStyle?: any;
    /**
     * Interpolated style for the view representing the card.
     */
    cardStyle?: any;
    /**
     * Interpolated style for the view representing the semi-transparent overlay below the card.
     */
    overlayStyle?: any;
    /**
     * Interpolated style representing the card shadow.
     */
    shadowStyle?: any;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackCardStyleInterpolator = (props: StackCardInterpolationProps) => StackCardInterpolatedStyle;
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackHeaderInterpolationProps = {
    /**
     * Values for the current screen (the screen which owns this header).
     */
    current: {
        /**
         * Animated node representing the progress value of the current screen.
         */
        progress: Animated.AnimatedInterpolation;
    };
    /**
     * Values for the current screen the screen after this one in the stack.
     * This can be `undefined` in case the screen animating is the last one.
     */
    next?: {
        /**
         * Animated node representing the progress value of the next screen.
         */
        progress: Animated.AnimatedInterpolation;
    } | undefined;
    /**
     * Layout measurements for various items we use for animation.
     */
    layouts: {
        /**
         * Layout of the header
         */
        header: Layout;
        /**
         * Layout of the whole screen.
         */
        screen: Layout;
        /**
         * Layout of the title element.
         */
        title?: Layout | undefined;
        /**
         * Layout of the back button label.
         */
        leftLabel?: Layout | undefined;
    };
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackHeaderInterpolatedStyle = {
    /**
     * Interpolated style for the label of the left button (back button label).
     */
    leftLabelStyle?: any;
    /**
     * Interpolated style for the left button (usually the back button).
     */
    leftButtonStyle?: any;
    /**
     * Interpolated style for the right button.
     */
    rightButtonStyle?: any;
    /**
     * Interpolated style for the header title text.
     */
    titleStyle?: any;
    /**
     * Interpolated style for the header background.
     */
    backgroundStyle?: any;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type StackHeaderStyleInterpolator = (
    props: StackHeaderInterpolationProps,
) => StackHeaderInterpolatedStyle;
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type TransitionPreset = {
    /**
     * The direction of swipe gestures, `horizontal` or `vertical`.
     */
    gestureDirection: GestureDirection;
    /**
     * Object which specifies the animation type (timing or spring) and their options (such as duration for timing).
     */
    transitionSpec: {
        /**
         * Transition configuration when adding a screen.
         */
        open: TransitionSpec;
        /**
         * Transition configuration when removing a screen.
         */
        close: TransitionSpec;
    };
    /**
     * Function which specifies interpolated styles for various parts of the card, e.g. the overlay, shadow etc.
     */
    cardStyleInterpolator: StackCardStyleInterpolator;
    /**
     * Function which specifies interpolated styles for various parts of the header, e.g. the title, left button etc.
     */
    headerStyleInterpolator: StackHeaderStyleInterpolator;
};
