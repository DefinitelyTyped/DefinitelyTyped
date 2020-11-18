// Type definitions for tuya-panel-kit 2.0
// Project: https://github.com/TuyaInc/tuya-panel-kit#readme
// Definitions by: youngjuning <https://github.com/youngjuning>
//                 ShinyLeee <https://github.com/ShinyLeee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8

import * as React from 'react';
import {
    StyleProp,
    ViewStyle,
    TextStyle,
    TextProps,
    TouchableOpacityProps,
    ScrollViewProps,
    FlatListProps,
    ViewPagerAndroidProps,
    NativeSyntheticEvent,
    NativeScrollEvent,
    ViewProps,
    TextInputProps,
    ImageStyle,
    ImageSourcePropType,
    GestureResponderEvent,
    PickerIOSProps,
    PickerProps,
    ModalProps as ModalNativeProps,
    SectionListProps,
    ListRenderItem,
} from 'react-native';
import { ParamListBase, RouteProp } from './@react-navigation/native';
import { StackNavigationOptions } from './@react-navigation/stack';
import { GlobalTheme, StopsProps, LinearGradientBackground, RadialGradientBackground, BackgroundProps } from './theme';

export { GlobalTheme } from './theme';

type AnyFunction = (...args: any[]) => void;
interface ButtonProps extends TouchableOpacityProps {
    stretch?: boolean;
    disabled?: boolean;
    size?: 'large' | 'normal' | 'small' | 'noSet' | number;
    type?: 'primary' | 'normal';
    background?: BackgroundProps;
    text?: string;
    textSingleLine?: boolean;
    textDirection?: 'left' | 'top' | 'right' | 'bottom' | 'center';
    icon?: string;
    iconPath?: string;
    iconSize?: number;
    iconColor?: string;
    image?: string;
    imageColor?: string;
    imageStyle?: StyleProp<ImageStyle>;
    badgeText?: string;
    disabledOpacity?: number;
    style?: StyleProp<ViewStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
    border?: string | boolean | number;
    textStyle?: StyleProp<TextStyle>;
    badgeStyle?: StyleProp<ViewStyle>;
    badgeTextStyle?: StyleProp<TextStyle>;
    useART?: boolean;
    textAccessibilityLabel?: string;
    badgeAccessibilityLabel?: string;
    badgeTextAccessibilityLabel?: string;
    theme?: {
        fontSize?: number;
        fontColor?: string;
        iconSize?: number;
        bgWidth?: number;
        bgHeight?: number;
        bgColor?: string;
        margin?: number[];
        iconColor?: string;
        bgRadius?: number;
    };
}
class Button extends React.Component<ButtonProps> {}

// BrickButton
interface BrickButtonProps {
    style?: StyleProp<ViewStyle>;
    onPress?: (event: GestureResponderEvent) => void;
    onChange?: (eventName: string, ...args: any) => void;
    loading?: boolean;
    text?: string;
    textStyle?: StyleProp<TextStyle>;
    type?: 'primary' | 'primaryGradient' | 'primaryBorder' | 'normal' | 'small';
    wrapperStyle?: StyleProp<ViewStyle>;
    backgroundColorTouched?: string;
    disabled?: boolean;
    underlayColor?: string;
    activeOpacity?: number;
    showUnderlay?: boolean;
    loadingColor?: string;
    loadingBackground?: string;
    loadingSize?: ('small' | 'large') | number;
    loadingStyle?: StyleProp<ViewStyle>;
    loadingStrokeWidth?: number;
    background?: BackgroundProps;
    theme?: {
        fontSize?: number;
        fontColor?: string;
        bgRadius?: number;
        bgHeight?: number;
        bgWidth?: number;
        margin?: number[];
        padding?: number[];
        bgColor?: string;
        bgBorder?: string;
        bgBorderWidth?: number;
        loadingColor?: string;
        loadingBackground?: string;
    };
}
class BrickButton extends React.Component<BrickButtonProps> {}

// Carousel
interface CarouselProps extends ViewPagerAndroidProps {
    accessibilityLabel?: string;
    bounces?: boolean;
    hasDots?: boolean;
    autoplay?: boolean;
    autoplayInterval?: number;
    selectedIndex?: number;
    dots?:
        | React.ElementType
        | ((params: {
                dotStyle: StyleProp<ViewStyle>;
                dotWrapperStyle: StyleProp<ViewStyle>;
                dotActiveStyle: StyleProp<ViewStyle>;
                currentIndex: number;
                count: number;
            }) => React.ReactNode);
    dotStyle?: StyleProp<ViewStyle>;
    dotActiveStyle?: StyleProp<ViewStyle>;
    pageStyle?: StyleProp<ViewStyle>;
    useViewPagerOnAndroid?: boolean;
    loop?: boolean;
    dotWrapperStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    carouselChange?: (index: number) => void;
    onScrollEndDrag?: (event: NativeSyntheticEvent<NativeScrollEvent>, state: any) => void;
    onMomentumScrollEnd?: (event: NativeSyntheticEvent<NativeScrollEvent>, state: any) => void;
    onScrollBeginDrag?: (event: NativeSyntheticEvent<NativeScrollEvent>, state: any) => void;
}
class Carousel extends React.Component<CarouselProps> {}

// Checkbox
interface CheckboxProps {
    accessibilityLabel?: string;
    style?: StyleProp<ViewStyle>;
    size?: number;
    disabled?: boolean;
    disabledColor?: string;
    checked?: boolean;
    checkedIcon?: string;
    unCheckedIcon?: string;
    reverse?: boolean;
    hideOnUnselect?: boolean;
    color?: string;
    onChange?: (checked: boolean) => void;
    children?: React.ReactNode;
}
class Checkbox extends React.Component<CheckboxProps> {}

// CircleView
interface CircleViewProps extends ViewProps {
    style?: StyleProp<ViewStyle>;
    color?: string;
    borderColor?: string;
    borderWidth?: number;
    radius: number;
    children?: React.ReactNode;
}
class CircleView extends React.Component<CircleViewProps> {}

// Collapsible
interface CollapsibleProps {
    align?: 'top' | 'center' | 'bottom';
    collapsed?: boolean;
    collapsedHeight?: number;
    duration?: number;
    easing?: string | (() => void);
    style?: StyleProp<ViewStyle>;
    onChange?: () => void;
    children?: React.ReactNode;
}
class Collapsible extends React.Component<CollapsibleProps> {}

// ControllerBar
interface ControllerBarProps extends ViewProps {
    type?: 'primary' | 'normal';
    size?: ('large' | 'normal' | 'small') | number;
    stretch?: boolean;
    backgroundType?: 'alpha' | 'pure';
    backgroundColor?: string;
    hasBottomBorder?: boolean;
    style?: StyleProp<ViewStyle>;
    button: ButtonProps[];
    wrapperStyle?: StyleProp<ViewStyle>;
}
interface BarGroupProps {
    type?: 'warp' | 'swiper' | 'divide';
    size?: 'large' | 'normal' | 'small' | number;
    swiperConfig?: CarouselProps;
    wrapperStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
}
class ControllerBar extends React.Component<ControllerBarProps> {
    static Group: React.ElementType<BarGroupProps>;
}

// DatePicker
interface DatePickerProps extends Omit<PickerViewProps, 'mode'> {
    accessibilityLabel?: string;
    locale?:
        | string
        | {
                year?: string;
                month?: string;
                day?: string;
                hour?: string;
                minute?: string;
                am?: string;
                pm?: string;
            };
    mode?: 'datetime' | 'date' | 'time' | 'month' | 'year';
    loop?: boolean;
    use12Hours?: boolean;
    isPlusZero?: boolean;
    minDate?: Date;
    maxDate?: Date;
    onDateChange?: (value?: Date) => void;
    onValueChange?: (value?: React.ReactText, index?: number) => void;
    isAmpmFirst?: boolean;
    isTimeFirst?: boolean;
    date?: Date;
    defaultDate?: Date;
    style?: StyleProp<ViewStyle>;
    pickerFontColor?: string;
    dateSortKeys?: string[];
}
class DatePicker extends React.Component<DatePickerProps> {}

// Dialog
interface DialogProps {
    style?: StyleProp<ViewStyle>;
    contentStyle?: StyleProp<ViewStyle>;
    titleNumberOfLines?: number;
    title: string;
    titleStyle?: StyleProp<ViewStyle>;
    subTitle?: string;
    subTitleStyle?: StyleProp<ViewStyle>;
    motionType?: 'none' | 'ScaleFadeIn' | 'Fade' | 'PullUp' | 'ScalePullDown' | 'PushDown';
    motionConfig?:
        | MotionFadeProps
        | MotionPullUpProps
        | MotionScaleFadeInProps
        | MotionScalePullDownProps
        | MotionPushDownProps;
}

interface DialogElse extends ModalProps {
    onShow?: () => void;
    onHide?: () => void;
    onDismiss?: () => void;
}

interface DialogAlertProps extends DialogProps {
    footerWrapperStyle?: StyleProp<ViewStyle>;
    confirmText: string;
    confirmTextStyle?: StyleProp<TextStyle>;
    confirmAccessibilityLabel?: string;
    onConfirm?: (data: any, args: { close: () => void }) => void;
}

interface DialogCheckboxProps extends DialogProps, Omit<TYFlatListProps<{}>, 'data' | 'renderItem'> {
    footerWrapperStyle?: StyleProp<ViewStyle>;
    confirmText: string;
    confirmTextStyle?: StyleProp<TextStyle>;
    confirmAccessibilityLabel?: string;

    type?: 'radio' | 'switch';
    value: string | number | string[];
    maxItemNum?: number;
    dataSource: DialogCheckbox[];
    onChange?: (value: string | number) => void;
    headerStyle?: StyleProp<ViewStyle>;
    cancelText: string;
    cancelTextStyle?: StyleProp<TextStyle>;
    cancelAccessibilityLabel?: string;
    onCancel?: () => void;
    onConfirm?: (data: any, args: { close: () => void }) => void;
}
interface DialogCheckbox extends TYFlatListData {
    value?: string | number;
    title?: string;
    iconSize?: number;
    reverse?: boolean;
    Icon?: string;
    hideOnUnselect?: boolean;
}

interface DialogConfirmProps extends DialogProps {
    footerWrapperStyle?: StyleProp<ViewStyle>;
    confirmText: string;
    confirmTextStyle?: StyleProp<TextStyle>;
    confirmAccessibilityLabel?: string;

    cancelText: string;
    cancelTextStyle?: StyleProp<TextStyle>;
    cancelAccessibilityLabel?: string;
    onCancel?: () => void;
    onConfirm?: (data: any, args: { close: () => void }) => void;
}

interface DialogListProps
    extends Omit<DialogProps, 'motionType' | 'motionConfig'>,
        Omit<TYFlatListProps<{}>, 'data' | 'renderItem'> {
    maxItemNum?: number;
    dataSource: DialogList[];
    listStyle?: StyleProp<ViewStyle>;
    cancelText?: string;
    confirmText: string;
    onCancel?: () => void;
}

interface DialogList extends TYFlatListData {
    title: string;
}

interface DialogPromptProps extends Omit<TextInputProps, 'style'>, DialogProps {
    showHelp?: boolean;
    onHelpPress?: () => void;
    inputWrapperStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<ViewStyle>;
    footerWrapperStyle?: StyleProp<ViewStyle>;
    cancelText: string;
    cancelTextStyle?: StyleProp<TextStyle>;
    cancelAccessibilityLabel?: string;
    confirmText: string;
    confirmTextStyle?: StyleProp<TextStyle>;
    confirmAccessibilityLabel?: string;
    onCancel?: () => void;
    onConfirm?: (data: any, args: { close: () => void }) => void;
}

interface DialogCustomProps extends DialogProps {
    content?: any;
    header?: React.ElementType | (() => React.ReactNode);
    footer?: React.ElementType | (() => React.ReactNode);
    headerStyle?: StyleProp<ViewStyle>;
    footerWrapperStyle?: StyleProp<ViewStyle>;
    cancelText: string;
    cancelTextStyle?: StyleProp<TextStyle>;
    cancelAccessibilityLabel?: string;
    onCancel?: () => void;
    onConfirm?: (data: any, args: { close: () => void }) => void;
    confirmText: string;
    confirmTextStyle?: StyleProp<TextStyle>;
    confirmAccessibilityLabel?: string;
}

// tslint:disable-next-line no-unnecessary-class
class Dialog {
    static alert: (option: DialogAlertProps, option2?: DialogElse) => void;
    static checkbox: (option: DialogCheckboxProps, option2?: DialogElse) => void;
    static confirm: (option: DialogConfirmProps, option2?: DialogElse) => void;
    static list: (option: DialogListProps, option2?: DialogElse) => void;
    static prompt: (option: DialogPromptProps, option2?: DialogElse) => void;
    static custom: (option: DialogCustomProps, option2?: DialogElse) => void;
    static close: () => void;
}

// Divider
interface DividerProps {
    style?: StyleProp<ViewStyle>;
    flexDirection?: 'row' | 'column';
    visible?: boolean;
    color?: string;
    width?: number;
    height?: number;
}
class Divider extends React.Component<DividerProps> {}

// GlobalToast
interface GlobalToastProps extends ToastProps, IconFontProps {
    text?: string;
    size?: number;
    textStyle?: StyleProp<TextStyle>;
    iconfontStyle?: StyleProp<ViewStyle>;
    contentStyle?: StyleProp<ViewStyle>;
    showIcon?: boolean;
}
class GlobalToast {
    show: (option: GlobalToastProps) => void;
    hide: () => void;
}

// LinearGradient
type LinearGradientProps = {
    gradientId?: string;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
} & LinearGradientBackground;
class LinearGradient extends React.Component<LinearGradientProps> {}

// RadialGradient
type RadialGradientProps = {
    style?: StyleProp<ViewStyle>;
    gradientId?: string;
} & RadialGradientBackground;
class RadialGradient extends React.Component<RadialGradientProps> {}

// i18n
class I18N {
    constructor(...args: any[]);
    getDpLang: (code: string, value?: string | boolean) => string;
    getLang: (key: string, defaultString?: string) => string;
    getRangeStrings: (dpCode: string) => Record<string, string>;
    getFaultStrings: (faultCode: string, faultValue: string, onlyPrior: boolean) => string;
}

// IconFont
interface IconFontProps {
    viewBox?: string;
    useART?: true;
    ascent?: number;
    descent?: number;
    unitsPerEm?: number;
    x?: number;
    y?: number;
    scaleX?: number;
    scaleY?: number;
    scale?: number;
    spaceOffset?: number;
    style?: StyleProp<ViewStyle>;
    color?: any;
    size?: number;
    hFlip?: boolean;
    vFlip?: boolean;
    name?: string;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    strokeJoin?: 'round' | 'miter' | 'bevel';
    strokeCap?: 'round' | 'butt' | 'square';
    strokeDash?: number[];
    d?: string;
    opacity?: string | number;
}

class IconFont extends React.Component<IconFontProps> {}

// layout/TopBar

interface TopBarContainerProps {
    style?: StyleProp<ViewStyle>;
    contentStyle?: StyleProp<ViewStyle>;
    background?: BackgroundProps;
}
interface TopBarContentProps {
    style?: StyleProp<ViewStyle>;
    color?: string;
    title?: string;
    titleStyle?: StyleProp<TextStyle>;
    subTitle?: string;
    subTitleStyle?: StyleProp<TextStyle>;
    position?: 'left' | 'center' | 'right';
    onPress?: (event: GestureResponderEvent) => void;
    children?: React.ReactNode;
}
interface TopBarActionProps extends TopBarProps, IconFontProps {
    style?: StyleProp<ViewStyle>;
    contentStyle?: StyleProp<ViewStyle>;
    size?: number;
    spacing?: number;
    color?: string;
    source?: ImageSourcePropType;
    disabled?: boolean;
    children?: React.ReactNode;
    onPress?: (event: GestureResponderEvent) => void;
}
interface TopBarProps extends TopBarContentProps {
    theme?: {
        background?: string;
        color?: string;
    };
    leftActions?: TopBarActionProps[];
    actions?: TopBarActionProps[];
    contentStyle?: StyleProp<ViewStyle>;
    background?: BackgroundProps;
    onBack?: (...args: any[]) => void;
}

class TopBar extends React.Component<TopBarProps> {
    static Container: React.ElementType<TopBarContainerProps>;
    static Content: React.ElementType<TopBarContentProps>;
    static Action: React.ElementType<TopBarActionProps>;
    static height: number;
}

// Modal
interface ModalProps extends ModalNativeProps {
    animationType?: 'fade' | 'none';
    alignContainer?: 'top' | 'center' | 'bottom';
    onMaskPress?: () => void;
    modalChildStyle?: StyleProp<ViewStyle>;
    mask?: boolean;
    maskStyle?: StyleProp<ViewStyle>;
    onlyLastModalVisible?: boolean;
    useKeyboardView?: boolean;
    visible?: boolean;
    activeIdx?: number;
    onDismiss?: () => void;
}

interface ListDate extends TYFlatListData {
    styles?: StyleProp<ViewStyle>;
    title?: string;
    Icon?: React.ElementType;
    value: any;
}

class Modal extends React.Component<ModalProps> {
    static Countdown: React.ElementType<PopUpCountdownProps>;
    static DatePicker: React.ElementType<PopupDatePickerProps>;
    static List: React.ElementType<PopUpListProps>;
    static Picker: React.ElementType<PopupPickerProps>;
    static render: (option: React.ReactNode, props: ModalProps) => void;
    static close: () => void;
}

// Motion
interface MotionProps {
    style?: StyleProp<ViewStyle>;
    show?: boolean;
    children?: React.ReactNode;
    showDuration?: number;
    hideDuration?: number;
    onShow?: () => void;
    onHide?: () => void;
    animationConfig?: {
        duration?: number;
        delay?: number;
        isInteraction?: boolean;
        useNativeDriver?: boolean;
    };
}

interface MotionFadeProps extends MotionProps {
    fadeOpacity?: number;
}

interface MotionPullUpProps extends MotionProps {
    dropHeight?: number;
}

interface MotionPushDownProps extends MotionProps {
    dropHeight?: number;
    isAlign?: boolean;
}

interface MotionScaleFadeInProps extends MotionProps {
    initScale?: number;
    finalScale?: number;
    isAlign?: boolean;
    width?: number;
    height?: number;
}

interface MotionScalePullDownProps extends MotionProps {
    initScale?: number;
    isAlign?: boolean;
}

interface MotionToastProps extends Omit<MotionProps, 'onHide'> {
    initScale?: number;
    onFinish?: () => void;
}

class Motion extends React.Component<MotionProps> {
    static Fade: React.ElementType<MotionFadeProps>;
    static PullUp: React.ElementType<MotionPullUpProps>;
    static ScaleFadeIn: React.ElementType<MotionScaleFadeInProps>;
    static ScalePullDown: React.ElementType<MotionScalePullDownProps>;
    static PushDown: React.ElementType<MotionPushDownProps>;
    static Toast: React.ElementType<MotionToastProps>;
}

// Notification
interface NotificationProps extends TouchableOpacityProps {
    accessibilityLabel?: string;
    style?: StyleProp<ViewStyle>;
    theme?: {
        background?: string;
        text?: string;
        iconColor?: string;
        successIcon?: string;
        warningIcon?: string;
        errorIcon?: string;
        closeIcon?: string;
        radius?: number;
    };
    show?: boolean;
    icon?: string;
    backIcon?: string;
    variant?: 'success' | 'warning' | 'error';
    enableClose?: boolean;
    autoCloseTime?: number;
    message: string;
    onClose?: () => void;
    motionConfig?: MotionProps;
    motionStyle?: StyleProp<ViewStyle>;
    imageSource?: ImageSourcePropType;
    imageStyle?: StyleProp<ImageStyle>;
    backIconSize?: number;
    backIconCenter?: boolean;
}
class Notification {
    show: (option: NotificationProps) => void;
    hide: () => void;
}

// NotificationLegacy
interface NotificationLegacyProps extends TouchableOpacityProps {
    accessibilityLabel?: string;
    style?: StyleProp<ViewStyle>;
    theme?: {
        background?: string;
        text?: string;
        iconColor?: string;
        successIcon?: string;
        warningIcon?: string;
        errorIcon?: string;
        closeIcon?: string;
        radius?: number;
    };
    icon?: string;
    variant?: 'success' | 'warning' | 'error';
    enableClose?: string;
    autoCloseTime?: number;
    message?: string;
    children?: React.ReactNode;
    onClose?: () => void;
}

class NotificationLegacy extends React.Component<NotificationLegacyProps> {}

// PickerView
interface PickerViewProps extends Omit<PickerIOSProps, 'onValueChange' | 'selectedValue'>, PickerProps {
    loop?: boolean;
    selectedValue?: string | number | boolean;
    onValueChange?: (value: string | number, index: number) => void;
    accessibilityLabel?: string;
    itemTextColor?: string;
    selectedItemTextColor?: string;
    dividerColor?: string;
    visibleItemCount?: number;
    textSize?: number;
    itemAlign?: 'flex-end' | 'center' | 'flex-start' | 'baseline' | 'stretch';
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
    theme?: {
        fontSize?: number;
        fontColor?: string;
        dividerColor?: string;
        unitFontSize?: number;
        unitFontColor?: string;
    };
}

class Picker extends React.Component<PickerViewProps> {
    static Item: React.ElementType;
}

// Popup
interface PopupProps extends Omit<ModalProps, 'onMaskPress'> {
    wrapperStyle?: StyleProp<TextStyle>;
    title?: string | string[] | React.ReactNode;
    subTitle?: string;
    titleTextStyle?: StyleProp<TextStyle>;
    titleWrapperStyle?: StyleProp<ViewStyle>;
    switchValue?: boolean;
    onSwitchValueChange?: (value: boolean) => void;
    onCancel?: () => void;
    onConfirm?: (data: any, args: { close: () => void }) => void;
    cancelText?: string;
    confirmText?: string;
    cancelTextStyle?: StyleProp<TextStyle>;
    confirmTextStyle?: StyleProp<TextStyle>;
    footer?: React.ReactNode;
    footerWrapperStyle?: StyleProp<ViewStyle>;
    footerType?: 'both' | 'singleConfirm' | 'singleCancel';
    motionType?: 'none' | 'ScaleFadeIn' | 'Fade' | 'PullUp' | 'ScalePullDown';
    motionConfig?: MotionScaleFadeInProps | MotionFadeProps | MotionPullUpProps | MotionScalePullDownProps;
    isAlign?: boolean;
    backIconColor?: string;
    onBack?: (args: { close: () => void }) => void;
    backText?: string;
    showBack?: boolean;
    onMaskPress?: (args: { close: () => void }) => void;
    theme?: {
        cellHeight?: number;
        cellBg?: string;
        cellFontColor?: string;
        cellFontSize?: number;
        subTitleFontColor?: string;
        titleRadius?: number;
        titleBg?: string;
        titleHeight?: number;
        footerRadius?: number;
        bottomBg?: string;
        lineColor?: string;
        titleFontSize?: number;
        checkboxColor?: string;
        titleFontColor?: string;
        cancelFontSize?: number;
        cancelFontColor?: string;
        confirmFontSize?: number;
        confirmFontColor?: string;
        backIconColor?: string;
        tintColor?: string;
        numberSelector?: {
            cellPlusColor?: string;
            maximumTrackTintColor?: string;
        };
        list?: {
            cellFontColor?: string;
        };
    };
}

interface PopUpListProps extends PopupProps, Omit<TYFlatListProps<{}>, 'renderItem' | 'data'> {
    listWrapperStyle?: StyleProp<ViewStyle>;
    dataSource?: ListDate[];
    type?: 'radio' | 'switch';
    maxItemNum?: number;
    selectedIcon?: React.ReactNode;
    iconTintColor?: string;
    contentCenter?: boolean;
    subTitle?: string;
    value?: string | number | string[] | number[];
    listItemStyle?: StyleProp<ViewStyle>;
    onSelect?: (value: string | number, sValue?: boolean) => void;
    _onDataChange?: (value?: string | string[]) => void;
    styles?: {
        container?: StyleProp<ViewStyle>;
        content?: StyleProp<ViewStyle>;
        title?: StyleProp<ViewStyle>;
        contentRight?: StyleProp<ViewStyle>;
    };
}

interface valueChangeProps {
    hour: number;
    minute: number;
    value: number;
}
interface PopUpCountdownProps extends PopupProps {
    countdownWrapperStyle?: StyleProp<ViewStyle>;
    onlyone?: boolean;
    min?: number;
    max?: number;
    step?: number;
    value: number;
    pickerFontColor?: string;
    pickerUnitColor?: string;
    hourText?: string;
    minuteText?: string;
    onValueChange?: (data?: valueChangeProps) => void;
    _onDataChange?: (date: Date) => void;
    hourPickerStyle?: StyleProp<ViewStyle>;
    hourUnitStyle?: StyleProp<TextStyle>;
    minutePickerStyle?: StyleProp<ViewStyle>;
    minuteUnitStyle?: StyleProp<TextStyle>;
}

interface PopupDatePickerProps extends PopupProps, Omit<DatePickerProps, 'theme'> {
    _onDataChange?: (date: Date) => void;
}

interface PopupNumberSelectorProps
    extends Omit<PopupProps, 'onLayout' | 'animationType'>,
        Omit<SliderProps, 'theme'> {
    numberSelectorWrapperStyle?: StyleProp<ViewStyle>;
    type?: 'basic' | 'slider';
    min?: number;
    max?: number;
    step?: number;
    scale?: number;
    value: number;
    onValueChange?: (value: number) => void;
    _onDataChange?: (value: number) => void;
    valueChangeTime?: number;
    isValueChangeUniform?: boolean;
}

interface PickerDataProps {
    label: string;
    value: string;
}
interface PopupPickerProps extends Omit<PopupProps, 'onConfirm'>, Omit<PickerViewProps, 'theme' | 'children'> {
    label?: string | string[];
    spacing?: number;
    labelOffset?: number;
    pickerWrapperStyle?: StyleProp<ViewStyle>;
    pickerStyle?: StyleProp<ViewStyle>;
    value?: string | number | boolean | string[];
    dataSource?: PickerDataProps[][] | PickerDataProps[];
    singlePicker?: boolean;
    pickerFontColor?: string;
    pickerUnitColor?: string;
    onValueChange?: (newValue: string | number, idx: number) => void;
    _onDataChange?: (newValue: string | number, idx: number) => void;
    onConfirm?: (data: any, idx: number, args: { close: () => void }) => void;
}

interface PopupTimerPickerProps extends PopupProps, Omit<TimerPickerProps, 'theme'> {}

interface PopupCustomProps extends PopupProps {
    content: React.ReactNode;
}

interface PopupTipsProps extends TipsProps, ModalProps {
    modalChildStyle?: StyleProp<ViewStyle>;
}

interface PopupToastProps extends ModalProps {
    message?: string;
}

interface PopupDropdownProps {
    data: Array<{
        key?: string;
        title?: string;
        value?: string;
    }>;
    onSelect?: (value?: number | string) => void;
    cornerSize?: string;
    customCornerSize?: string;
    cornerDirection?: string;
    cornerDirectionValue?: string;
    cornerColor?: string;
    corner?: boolean;
    listStyle?: StyleProp<ViewStyle>;
    cornerStyle?: StyleProp<ViewStyle>;
    touchViewStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

class Popup extends React.Component<PopupProps> {
    static list: (option: PopUpListProps, option2?: DialogElse) => void;
    static countdown: (option: PopUpCountdownProps, option2?: DialogElse) => void;
    static numberSelector: (option: PopupNumberSelectorProps, option2?: DialogElse) => void;
    static close: () => void;
    static datePicker: (option: PopupDatePickerProps, option2?: DialogElse) => void;
    static timerPicker: (option: PopupTimerPickerProps, option2?: DialogElse) => void;
    static picker: (option: PopupPickerProps, option2?: DialogElse) => void;
    static custom: (option: PopupCustomProps, option2?: DialogElse) => void;
    static tips: (option: PopupTipsProps) => void;
    static toast: (option: PopupToastProps) => void;
    static dropdown: (option: PopupDropdownProps) => void;
}

// Progress
interface GestureProps extends ViewProps {
    pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
    disabled?: boolean;
    children?: React.ReactNode;
}
interface ProgressProps extends GestureProps {
    gradientId?: string;
    style?: StyleProp<ViewStyle>;
    startDegree?: number;
    andDegree?: number;
    min?: number;
    max?: number;
    stepValue?: number;
    backStrokeOpacity?: number;
    foreStrokeOpacity?: number;
    scaleHeight?: number;
    disabled?: boolean;
    backColor?: string;
    foreColor?:
        | string
        | StopsProps[]
        | {
                [key: string]: string;
            };
    x1?: string;
    x2?: string;
    y1?: string;
    y2?: string;
    renderCenterView?: React.ReactNode;
}

interface ProgressBasicProps extends ProgressProps {
    pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
    thumbFill?: string;
    thumbStrokeWidth?: number;
    thumbStroke?: string;
    thumbRadius?: number;
    needMaxCircle?: boolean;
    needMinCircle?: boolean;
    startColor?: string;
    endColor?: string;
    value?: number;
    onValueChange?: (value: number) => void;
    onSlidingComplete?: (value: number) => void;
}

interface SpaceProps extends ProgressProps {
    scaleNumber?: number;
    value?: number;
    strokeWidth?: number;
    onValueChange?: (value: number) => void;
    onSlidingComplete?: (value: number) => void;
}

interface DoubleProps extends ProgressProps {
    maxValue?: number;
    minValue?: number;
    onValueChange?: (argus: { minValue: number; maxValue: number }) => void;
    onSlidingComplete?: (argus: { minValue: number; maxValue: number }) => void;
    minThumbFill?: string;
    minThumbStroke?: string;
    thumbFill?: string;
    thumbStrokeWidth?: number;
    thumbStroke?: string;
    thumbRadius?: number;
    startColor?: string;
    endColor?: string;
}

interface ComposeProps extends GestureProps {
    style?: StyleProp<ViewStyle>;
    value1?: number;
    value2?: number;
    startDegree1?: number;
    andDegree1?: number;
    min1?: number;
    max1?: number;
    stepValue?: number;
    backStrokeOpacity?: number;
    foreStrokeOpacity?: number;
    scaleHeight1?: number;
    scaleHeight2?: number;
    disabled?: boolean;
    backColor?: string;
    foreColor?:
        | string
        | StopsProps[]
        | {
                [key: string]: string;
            };
    thumbFill?: string;
    thumbStrokeWidth?: number;
    thumbStroke?: string;
    startDegree2?: number;
    reduceDegree2?: number;
    min2?: number;
    max2?: number;
    startColor?: string;
    endColor?: string;
    onValueChange?: (argus: { value1: number; value2: number }) => void;
    onSlidingComplete?: (argus: { value1: number; value2x: number }) => void;
    thumbRadius1?: number;
    thumbRadius2?: number;
    needCircle1?: boolean;
    needCircle2?: boolean;
    thumbStroke2?: string;
    thumbStrokeWidth2?: number;
    thumbFill2?: string;
}

class Progress extends React.Component<ProgressBasicProps> {
    static Space: React.ElementType<SpaceProps>;
    static Double: React.ElementType<DoubleProps>;
    static Compose: React.ElementType<ComposeProps>;
}

// RotationView
interface RotationViewProps {
    accessibilityLabel?: string;
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    active?: boolean;
    duration?: number;
    useNativeDriver?: boolean;
}

class RotationView extends React.Component<RotationViewProps> {}

// Slider
interface SliderProps {
    theme?: {
        width?: number;
        trackRadius?: number;
        trackHeight?: number;
        minimumTrackTintColor?: string;
        maximumTrackTintColor?: string;
        thumbSize?: number;
        thumbRadius?: number;
        thumbTintColor?: string;
    };
    accessibilityLabel?: string;
    onLayout?: (x: number) => void;
    value?: number;
    disabled?: boolean;
    minimumValue?: number;
    maximumValue?: number;
    stepValue?: number;
    reverseValue?: boolean;
    minimumTrackTintColor?: string;
    maximumTrackTintColor?: string;
    thumbTintColor?: string;
    thumbTouchSize?: {
        width: number;
        height: number;
    };
    onValueChange?: (newValue: number) => void;
    onSlidingStart?: (newValue: number) => void;
    onSlidingComplete?: (newValue: number) => void;
    onScrollEvent?: (value: number) => void;
    style?: StyleProp<ViewStyle>;
    trackStyle?: StyleProp<ViewStyle>;
    thumbStyle?: StyleProp<ViewStyle>;
    debugTouchArea?: boolean;
    onlyMaximumTrack?: boolean;
    canTouchTrack?: boolean;
    animateTransitions?: boolean;
    animationType?: 'spring' | 'timing';
    animationConfig?: {
        friction?: number;
        tension?: number;
        duration?: number;
        easing?: () => void;
        delay?: number;
    };
    renderMinimumTrack?: () => React.ReactNode;
    renderMaximumTrack?: () => React.ReactNode;
    renderThumb?: () => React.ReactNode;
    horizontal?: boolean;
    styles?: {
        container?: StyleProp<ViewStyle>;
        track?: StyleProp<ViewStyle>;
        thumb?: StyleProp<ViewStyle>;
        touchArea?: StyleProp<ViewStyle>;
        debugThumbTouchArea?: StyleProp<ViewStyle>;
    };
}

class Slider extends React.Component<SliderProps> {
    static Horizontal: React.ElementType<SliderProps>;
    static Vertical: React.ElementType<SliderProps>;
}

// Stepper
interface StepperProps extends Omit<TextInputProps, 'value'> {
    style?: StyleProp<ViewStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<ViewStyle>;
    buttonType?: 'ellipse' | 'triangle';
    min?: number;
    max?: number;
    value?: number;
    stepValue?: number;
    editable?: boolean;
    ellipseIconColor?: string;
    triangleIconColor?: string;
    selectionColor?: string;
    iconMinusPath?: string;
    iconPlusPath?: string;
    onValueChange?: (value: number) => void;
    disabled?: boolean;
    getTextInputRef?: (TextInputRef: {}) => void;
}

class Stepper extends React.Component<StepperProps> {}

// Swipeout
interface SwipeoutAction {
    backgroundColor?: string;
    color?: string;
    disabled?: boolean;
    key?: string;
    content?: React.ReactNode;
    text?: string;
    type?: string;
    fontSize?: number;
    textStyle?: StyleProp<TextStyle>;
    onPress?: (e: GestureResponderEvent) => void;
}

interface SwipeoutProps {
    accessibilityLabel?: string;
    backgroundColor?: string;
    autoClose?: boolean;
    disabled?: boolean;
    left?: SwipeoutAction[];
    right?: SwipeoutAction[];
    buttonWidth?: number;
    onOpen?: (sectionID?: number, rowID?: number) => void;
    onClose?: (sectionID?: number, rowID?: number) => void;
    sensitivity?: number;
    scroll?: (value?: boolean) => void;
    style?: StyleProp<ViewStyle>;
    close?: boolean;
    sectionID?: number;
    rowID?: number;
}

class Swipeout extends React.Component<SwipeoutProps> {}

// SwitchButton
interface SwitchButtonProps {
    theme?: {
        width?: number;
        height?: number;
        thumbSize?: number;
        margin?: number | number[];
        tintColor?:
            | string
            | {
                    [key: string]: string;
                };
        onTintColor?: string;
        thumbTintColor?: string;
        onThumbTintColor?: string;
    };
    style?: StyleProp<ViewStyle>;
    accessibilityLabel?: string;
    disabled?: boolean;
    value?: boolean;
    defaultValue?: boolean;
    size?: { width?: number; height?: number; activeSize?: number; margin?: number };
    onValueChange: (value: boolean) => void;
    tintColor?:
        | string
        | {
                [key: string]: string;
            };
    onTintColor?:
        | string
        | {
                [key: string]: string;
            };
    thumbTintColor?: string;
    onThumbTintColor?: string;
    borderColor?: string;
    thumbStyle?: StyleProp<ViewStyle>;
    useNativeDriver?: boolean;
    onText?: string;
    offText?: string;
    onTextStyle?: StyleProp<TextStyle>;
    offTextStyle?: StyleProp<TextStyle>;
}

class SwitchButton extends React.Component<SwitchButtonProps> {}

// Tab
interface TabProps {
    swipeable?: boolean;
    animated?: boolean;
    activeKey?: string | number;
    defaultActiveKey?: string | number;
    onChange?: (activeKey?: number | string) => void;
    children?: React.ReactNode;
    tabContentStyle?: StyleProp<ViewStyle>;
    tabDefaultColor?: string;
    tabBarBackgroundColor?: string;
    tabBarUnderlineStyle?: StyleProp<ViewStyle>;
    tabBarStyle?: StyleProp<ViewStyle>;
    tabTextStyle?: StyleProp<TextStyle>;
    tabActiveTextStyle?: StyleProp<TextStyle>;
    tabsContainerStyle?: StyleProp<ViewStyle>;
    tabStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    tabBarPosition?: 'top' | 'bottom';
    tabNavAccessibilityLabel?: string;
    useViewPagerOnAndroid?: boolean;
    distanceToChangeTab?: number;
}

interface TabPaneProps extends TabProps {
    tabWidth?: number;
    tab?: React.ReactNode;
}

class Tab extends React.Component<TabProps> {
    static TabPane: React.ElementType<TabPaneProps>;
}

// TabBar
interface TabBarArr {
    [index: number]: {
        style?: StyleProp<ViewStyle>;
        activeStyle?: StyleProp<ViewStyle>;
        textStyle?: StyleProp<TextStyle>;
        activeTextStyle?: StyleProp<TextStyle>;
        key: string;
        title: string;
        accessibilityLabel?: string;
        textAccessibilityLabel?: string;
        onPress?: (index: string) => void;
        onItemPress?: () => void;
    };
}

interface TabBarProps {
    type?: string;
    underlineStyle?: StyleProp<ViewStyle>;
    tabStyle?: StyleProp<ViewStyle>;
    tabActiveStyle?: StyleProp<ViewStyle>;
    tabTextStyle?: StyleProp<TextStyle>;
    tabActiveTextStyle?: StyleProp<TextStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    activeKey?: string | number;
    defaultActiveKey?: string | number;
    tabs: TabBarArr[];
    isUnderlineCenter?: boolean;
    activeColor?: string;
    activeIndex?: number;
    defaultActiveIndex?: number;
    gutter?: number;
    onChange?: (index: string) => void;
}
class TabBar extends React.Component<TabBarProps> {}

// Tabs
interface TabDataSource extends ViewProps {
    value: string;
    label?: string;
    disabled?: boolean;
    renderTab?: (isActive: boolean, state: {}, props: {}) => React.ReactNode;
}

interface TabsProps {
    accessibilityLabel?: string;
    style?: StyleProp<ViewStyle>;
    wrapperStyle?: StyleProp<ViewStyle>;
    tabStyle?: StyleProp<ViewStyle>;
    tabActiveStyle?: StyleProp<ViewStyle>;
    tabTextStyle?: StyleProp<TextStyle>;
    tabActiveTextStyle?: StyleProp<TextStyle>;
    tabContentStyle?: StyleProp<ViewStyle>;
    underlineStyle?: StyleProp<ViewStyle>;
    underlineWidth?: number;
    defaultActiveKey?: number | string;
    activeKey?: number | string;
    dataSource: TabDataSource[];
    disabled?: boolean;
    maxItem?: number;
    tabPosition?: 'top' | 'bottom';
    swipeable?: boolean;
    activeColor?: string;
    background?: string;
    preload?: boolean;
    preloadTimeout?: number;
    velocityThreshold?: number;
    renderPlaceholder?: (activeIndex: number, child: React.ReactNode) => React.ReactNode;
    onChange?: (tab: TabDataSource, idx: number) => void;
    children?: React.ReactNode;
    extraSpace?: number;
    animationConfig?: {
        duration?: number;
        easing?: () => void;
        delay?: number;
        isInteraction?: boolean;
        useNativeDriver?: boolean;
    };
}

interface TabContentProps {
    accessibilityLabel?: string;
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
    activeIndex: number;
    preload?: boolean;
    preloadTimeout?: number;
    velocityThreshold?: number;
    onMove?: (gestureState: {}, index: number, percent: number) => void;
    onRelease?: (gestureState: {}, index: number, percent: number) => void;
    renderPlaceholder?: (activeIndex: number, child: React.ReactNode) => React.ReactNode;
    animationConfig?: {
        duration?: number;
        easing?: () => void;
        delay?: number;
        isInteraction?: boolean;
        useNativeDriver?: boolean;
    };
}

interface TabPanelProps extends ViewProps {
    style?: StyleProp<ViewStyle>;
    background?: string;
}

class Tabs extends React.Component<TabsProps> {
    static TabContent: React.ElementType<TabContentProps>;
    static TabPanel: React.ElementType<TabPanelProps>;
    static TabScrollView: React.ElementType<ScrollViewProps>;
}

// TimerPicker
interface TimerPickerProps extends Omit<PickerViewProps, 'children'> {
    accessibilityLabel?: string;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
    startTime?: number;
    endTime?: number;
    onTimerChange?: (startTime: number, endTime: number) => void;
    is12Hours?: boolean;
    singlePicker?: boolean;
    prefixPosition?: string[] | ('left' | 'right');
    pickerFontColor?: string;
    symbol?: string;
}

class TimerPicker extends React.Component<TimerPickerProps> {}

// Tips
interface TipsProps {
    contentStyle?: StyleProp<ViewStyle>;
    tipStyle?: StyleProp<ViewStyle>;
    bgColor?: string;
    show?: boolean;
    children?: React.ReactNode;
    showCorner?: boolean;
    motionType?: 'Fade' | 'PullUp' | 'ScaleFadeIn' | 'ScalePullDown' | 'PushDown';
    cornerPosition?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
    motionConfig?:
        | MotionScaleFadeInProps
        | MotionFadeProps
        | MotionPullUpProps
        | MotionScalePullDownProps
        | MotionPushDownProps;
    withModal?: boolean;
}

class Tips extends React.Component<TipsProps> {}

// Toast
interface ToastProps {
    style?: StyleProp<ViewStyle>;
    contentStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    text?: string;
    show: boolean;
    onFinish: () => void;
    showPosition?: 'top' | 'bottom' | 'center';
    image?: number;
    children?: React.ReactNode;
}

interface ToastSuccessProps extends ToastProps {
    size?: number;
    d?: string | any[];
    iconfontStyle?: StyleProp<ViewStyle>;
    color?: string;
}

interface ToastWarningProps extends ToastProps {
    size?: number;
    d?: string;
    iconfontStyle?: StyleProp<ViewStyle>;
    color?: string;
}

interface ToastErrorProps extends ToastProps {
    size?: number;
    d?: string;
    iconfontStyle?: StyleProp<ViewStyle>;
    color?: string;
}

interface ToastLoadingProps extends ToastProps {
    size?: number;
    color?: string;
    loading?: boolean;
    strokeWidth?: number;
    loadingBackgroundColor?: string;
    loadingStyle?: StyleProp<ViewStyle>;
}

class Toast extends React.Component<ToastProps> {
    static Success: React.ElementType<ToastSuccessProps>;
    static Warning: React.ElementType<ToastWarningProps>;
    static Error: React.ElementType<ToastErrorProps>;
    static Loading: React.ElementType<ToastLoadingProps>;
}

// TYFlatList
interface TYSectionInputProps extends Omit<TYListItemProps, 'onBlur' | 'onFocus'>, Omit<TextInputProps, 'style'> {
    title: string;
    titleStyle?: StyleProp<TextStyle>;
    inputStyle?: StyleProp<ViewStyle>;
}

interface TYFlatListData {
    [prop: string]: any;
    key?: string | number;
    Action?: any;
    title?: string;
    subTitle?: string;
    checked?: boolean;
    onChange?: () => void;
}

interface TYFlatListProps<ItemT extends TYFlatListData> extends Omit<FlatListProps<ItemT>, 'renderItem'> {
    style?: StyleProp<ViewStyle>;
    data: ItemT[];
    separatorStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    flatListRef?: () => void;
    useART?: boolean;
    scrollEnabled?: boolean;
    renderItem?: ListRenderItem<ItemT> | null;
}

interface TYFlatListCheckbox<ItemT extends TYFlatListData> extends TYFlatListProps<ItemT>, CheckboxProps {}

class TYFlatList<ItemT extends TYFlatListData> extends React.Component<TYFlatListProps<ItemT>> {
    static CheckboxItem: React.ElementType<TYFlatListCheckbox<TYFlatListData>>;
    static Item: React.ElementType<TYListItemProps>;
    static InputItem: React.ElementType<TYSectionInputProps>;
    static SliderItem: React.ElementType<TYSectionSliderProps>;
    static SwitchItem: React.ElementType<TYSectionListProps>;
}

// TYListItem
interface TYListItemProps extends TouchableOpacityProps {
    styles?: {
        container?: StyleProp<ViewStyle>;
        content?: StyleProp<ViewStyle>;
        contentLeft?: StyleProp<ViewStyle>;
        contentCenter?: StyleProp<ViewStyle>;
        contentRight?: StyleProp<ViewStyle>;
        title?: StyleProp<TextStyle>;
        subTitle?: StyleProp<TextStyle>;
    };
    theme?: {
        boardBg?: string;
        fontColor?: string;
        subFontColor?: string;
        descFontColor?: string;
        cellLine?: string;
        cellBg?: string;
        cellRadius?: number;
        margin?: number[] | number;
        padding?: number[] | number;
    };
    arrow?: boolean;
    arrowColor?: string;
    arrowUseIcon?: boolean;
    disabled?: boolean;
    actionDisabled?: boolean;
    title?: string;
    subTitle?: string;
    children?: React.ReactNode;
    imageFollowIconColor?: boolean;
    iconType?: 'auto' | 'image' | 'iconfont' | 'text';
    actionType?: 'auto' | 'image' | 'iconfont' | 'text';
    iconSize?: number;
    iconColor?: string;
    Icon?: any;
    Action?: any;
    needUpdate?: boolean;
    useART?: boolean;
    onActionPress?: () => void;
}

class TYListItem extends React.Component<TYListItemProps> {}

// TYSectionList
interface SectionDataProps {
    key?: string;
    title?: string;
    value?: string | number | boolean;
    disabled?: boolean;
    footer?: any;
    theme?: {
        boardBg?: string;
        iconColor?: string;
        fontColor?: string;
        subFontColor?: string;
        descFontColor?: string;
        cellLine?: string;
        cellBg?: string;
        cellRadius?: number;
        margin?: number[] | number;
        padding?: number[] | number;
    };
    data?: Array<{
        key?: string | number;
        value?: string | number | boolean;
        Action?: any;
        title?: string | number;
        subTitle?: string;
        arrow?: boolean;
        checked?: boolean;
        disabled?: boolean;
        onPress?: (idx: number) => void;
        onValueChange?: (value: string) => void;
    }>;
}

interface TYSectionListProps extends SectionListProps<SectionDataProps> {
    scrollEnabled?: boolean;
    style?: StyleProp<ViewStyle>;
    headerStyle?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    contentContainStyle?: StyleProp<ViewStyle>;
    separatorStyle?: StyleProp<ViewStyle>;
    sectionListRef?: () => void;
    useART?: boolean;
}

interface TYSectionSliderProps extends Omit<SliderProps, 'theme'> {
    theme: {
        iconColor?: string;
        descFontColor?: string;
        cellBg?: string;
        cellRadius?: number;
        margin?: number[] | number;
        padding?: number[] | number;
        width?: number;
        trackRadius?: number;
        trackHeight?: number;
        minimumTrackTintColor?: string;
        maximumTrackTintColor?: string;
        thumbSize?: number;
        thumbRadius?: number;
        thumbTintColor?: string;
    };
    iconType?: 'auto' | 'image' | 'iconfont' | 'text';
    actionType?: 'auto' | 'image' | 'iconfont' | 'text';
    iconSize?: number;
    iconColor?: string;
    Icon?: any;
    Action?: any;
    style?: StyleProp<ViewStyle>;
    contentStyle?: StyleProp<ViewStyle>;
    sliderStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    imageFollowIconColor?: boolean;
    useART?: boolean;
}

interface TYSectionCheckboxProps extends TYListItemProps, CheckboxProps {}

interface TYSectionSwitchProps extends Omit<TYListItemProps, 'theme'>, SwitchButtonProps {}

class TYSectionList extends React.Component<TYSectionListProps> {
    static CheckboxItem: React.ElementType<TYSectionCheckboxProps>;
    static Item: React.ElementType<TYListItemProps>;
    static InputItem: React.ElementType<TYSectionInputProps>;
    static SliderItem: React.ElementType<TYSectionSliderProps>;
    static SwitchItem: React.ElementType<TYSectionSwitchProps>;
}

// TYText
interface TYTextProps extends TextProps {
    type?: 'heading' | 'title' | 'paragraph';
    size?: ('large' | 'normal' | 'small') | number;
    align?: 'left' | 'center' | 'right';
    weight?: number | string;
    color?: string;
    text?: string;
}

class TYText extends React.Component<TYTextProps> {}

// UnitText
interface UnitTextProps {
    useART?: boolean;
    style?: StyleProp<ViewStyle>;
    size?: number;
    valueSize?: number;
    valueColors?: string[];
    valueColor?: string;
    unit?: string;
    unitSize?: number;
    unitColor?: string;
    unitPaddingLeft?: number;
    unitPaddingTop?: number;
    unitType?: 'icon' | 'text';
    value: string | number;
    letterWidth?: number;
    symbolWidth?: number;
    symbols?: string[];
    svgMap?: {};
}

class UnitText extends React.Component<UnitTextProps, ViewProps> {}

class WebView extends React.Component {
    title?: string;
    source?: string;
}

interface ThemeProps {
    theme: {};
    children: React.ReactNode;
}

class Theme extends React.Component<ThemeProps> {}

interface ThemeProviderProps {
    children: React.ReactNode;
    theme: any;
}

interface ThemeConsumerProps {
    children?: React.ReactNode;
    theme?: GlobalTheme;
}

let Utils: {
    CoreUtils: {
        get(object: object, pathString: string, defaultValue?: any): any;
        toFixed(str: string | number, count: number): string;
        toFilled(str: string | number, count: number): string;
        partition(str: string, chunk: number): string[];
        isObject(obj: any): boolean;
        isArray(obj: any): boolean;
        isDate(obj: any): boolean;
        isRegExp(obj: any): boolean;
        isBoolean(obj: any): boolean;
        isNumerical(obj: any): boolean;
        isUndefined(obj: any): boolean;
        isNil(obj: any): boolean;
        pick(object: object, keys: string): object;
        omit(object: object, keys: string): object;
        chunk(arr: [], chunkSize: number, cache: []): [];
        compareVersion(v1: string, v2: string): number;
    };
    RatioUtils: {
        isIphoneX: boolean;
        width: number;
        height: number;
        isIos: boolean;
        isWeb: boolean;
        statusBarHeight: number;
        convert(d: number): number;
        convertX(d: number): number;
        convertY(d: number): number;
        winWidth: number;
        winHeight: number;
        viewWidth: number;
        viewHeight: number;
        HRatio: number;
        VRatio: number;
        topBarHeight: number;
        isSmallW: boolean;
        isSmallH: boolean;
    };
    ColorUtils: {
        color: {
            hex2hsb(hex: string): number[];
            hex2hsv(hex: string): number[];
            hex2hsl(hex: string): number[];
            hex2yuv(hex: string): number[];
            rgb2hex(r: number, g: number, b: number): string;
            yuv2rgb(y: number, u: number, v: number, a: number): number[];
            hsv2rgb(h: number, s: number, v: number, a: number): number[];
            hsb2rgb(h: number, s: number, v: number, a: number): number[];
            hex2RgbString(hex: string, alpha?: number): string;
            hsb2hex(h: number, s: number, b: number): string;
            hsv2hex(h: number, s: number, v: number): string;
            kelvin2rgb(kelvin: number): number[];
            rgb2hsv(...args: number[]): number[];
            rgb2hsl(r: number, g: number, b: number): number[];
            hsl2rgb(h: number, s: number, l: number, a: number): number[];
            temp2rgb(kelvin: number, option?: { temperatureMin?: number; temperatureMax?: number }): string;
            brightKelvin2rgb(
                bright: number,
                kelvin?: number,
                option?: { temperatureMin?: number; temperatureMax?: number },
            ): string;
            rgb2hsb(...rgb: number[]): number[];
            bright2Opacity(bright: number, option: { min?: number; max?: number }): number;
            hsv2rgba(h: number, s: number, v: number): string;
            brightKelvin2rgba(bright: number, kelvin: number): string;
            hsl2hex(h: number, s: number, l: number): string;
            randomRgb(min: number, max: number): number[];
            randomHsb(): number[];
            complement(color: string): string;
            reversed(color: string): string;
            hsv2RgbString(h: number, s: number, v: number, a: number): string;
            hsl2RgbString(h: number, s: number, l: number, a: number): string;
            yuv2RgbString(y: number, u: number, v: number, a: number): string;
            encodeColorData(rgbhsv: string): string;
            decodeColorData(data: string): number[];
            decodeColorDataWithPosition(data: string): number[];
            decodeColorDataWithPosition(rgbxyve: string): number[];
        };
        hsvToRgb(h: number, s: number, v: number): { r: number; g: number; b: number };
        rgbToHsv(r: number, g: number, b: number): { h: number; s: number; v: number };
        hslToRgb(h: number, s: number, l: number): { r: number; g: number; b: number };
        rgbToHsl(rr: number, gg: number, bb: number): { h: number; s: number; v: number };
    };
    ThemeUtils: {
        ThemeProvider: React.ElementType<ThemeProviderProps>;
        ThemeConsumer: React.ElementType<ThemeConsumerProps>;
        deepMerge(target: object, ...args: object[]): object;
        // tslint:disable-next-line no-unnecessary-generics
        withTheme<P extends { theme?: T }, T>(component: React.ComponentType<P>): React.ComponentType<P>;
        parseToCss: (values: number[], key: string) => { [styleKey: string]: number };
        parseToStyle: (values: number[], key: string) => { [styleKey: string]: number };
        getTheme: (props: object, type: string, defaultValue: any) => any;
    };
    NumberUtils: {
        toFixedString(num: number, count: number): string;
        toFilledString(num: number, count: number): string;
        getBitValue(num: number, count: number): number;
        changeBitValue(num: number, count: number): number;
        setBitValueWithOne(num: number, count: number): number;
        setBitValueWithZero(num: number, count: number): number;
        bytesToHexString(arr: []): string;
        numToHexString(num: number, padding: number): string;
        numToByteNumbers(num: number, bytes: number): [];
        highLowToInt(high: number, low: number): number;
        intToHighLow(num: number): [];
        inMaxMin(min: number, max: number, value: number): number;
        scaleNumber(scale: number, value: number): number;
        range(start: number, end: number, step: number): number[];
        calcPosition(value: number, min: number, max: number, newMin: number, newMax: number): number;
        calcPercent(min: number, max: number, value: number, offset: number): number;
        add(value1: number, value2: number): number;
        subtract(value1: number, value2: number): number;
    };
    JsonUtils: {
        parseJSON(value: string): object;
    };
    StringUtils: {
        hexStringToNumber(str: string): number[];
        hexStringToBinString(str: string): string;
        strToHexString(str: string): string;
        camelize(str: string): string;
    };
    TemperatureUtils: {
        c2f(vale: number): number;
        f2c(value: number): number;
    };
    TimeUtils: {
        parseSecond(time: number, n: number): string[];
        parseTimer(second: number): string;
        parseTimers(second: number): string;
        parseHour12(second: number): string;
        stringToSecond(timeStr: string): number;
        dateToTimer(timeStr: string): number;
        dateFormat(fmt: string, date: Date): number;
        timezone(): string;
    };
};

let defaultTheme: GlobalTheme;

// tslint:disable-next-line interface-name
interface I18NLanMap {
    en: Record<string, string>;
    zh: Record<string, string>;
    [lanKey: string]: Record<string, string>;
}

type DpType = 'bool' | 'value' | 'enum' | 'raw' | 'string' | 'bitmap';

interface DpSchema {
    code: string;
    dptype: string;
    iconname: string;
    id: string;
    /**
     * type: 'bitmap' only
     */
    label?: string[];
    /**
     * type: 'bitmap' only
     */
    maxlen?: number;
    /**
     * type: 'value' only
     */
    max?: number;
    /**
     * type: 'value' only
     */
    min?: number;
    mode: 'rw' | 'ro' | 'rw';
    name: string;
    /**
     * type: 'enum' only
     */
    range?: any[];
    /**
     * type: 'value' only
     */
    scale?: number;
    /**
     * type: 'value' only
     */
    step?: number;
    type: DpType;
    /**
     * type: 'value' only
     */
    unit?: string;
}

type NetworkType = 'WIFI' | 'GPRS' | 'BLE' | 'NONE';

type DpValue = boolean | number | string;

interface DevInfo<S = Record<string, DpType>> {
    ability: number;
    activeTime: number;
    /**
     * @deprecated
     */
    appId: number;
    appKey: string;
    /**
     * @desc 网络是否在线
     */
    appOnline: boolean;
    attribute: number;
    baseAttribute: number;
    bv: number;
    capability: number;
    category: string;
    categoryCode: string;
    cloudOnline: boolean;
    codeIds: Record<string, string>;
    communication: Record<string, any>;
    devAttribute: number;
    /**
     * @desc 设备是否在线
     */
    deviceOnline: boolean;
    deviceType: number;
    devId: string;
    displayDps: any[];
    displayMsgs: Record<string, any>;
    displayOrder: number;
    dpMaxTime: number;
    dpName: Record<string | number, string>;
    dps: Record<number, string>;
    errorCode: number;
    faultDps: any[];
    gatewayVerCAD: string;
    gwType: string;
    homeDisplayOrder: number;
    homeId: number;
    i18nTime: number;
    iconUrl: string;
    idCodes: Record<number, string>;
    ip: string;
    isAdmin: boolean;
    isCloudOnline: boolean;
    /**
     * @desc 局域网是否在线
     */
    isLocalOnline: boolean;
    isMeshBleOnline: boolean;
    isNewFirmware: boolean;
    isShare: boolean;
    isUniversalPanel: boolean;
    isVDevice: boolean;
    latitude: string;
    localKey: string;
    longitude: string;
    lpv: number;
    meshId: string;
    name: string;
    networkType: NetworkType;
    originJson: Record<string, any>;
    panelConfig: {
        bic: Array<{ code: string; selected: boolean; value?: string }>;
        fun?: Record<string, any>;
    };
    pcc: string;
    productId: string;
    protocolAttribute: number;
    pv: number;
    quickOpDps: any[];
    rnFind: boolean;
    roomId: number;
    runtimeEnv: string;
    schema: {
        [K in keyof S]: DpSchema;
    };
    schemaExt: string;
    sharedTime: number;
    sigmeshId: string;
    standard: boolean;
    standSchemaModel: Record<string, any>;
    state: S;
    supportGroup: boolean;
    supportSGroup: boolean;
    timezoneId: string;
    ui: string;
    uiId: string;
    uiPhase: string;
    uiType: string;
    uiVersion: string;
    upgrading: boolean;
    uuid: string;
    vendorInfo: string;
    verSw: string;
    virtual: boolean;
}

type MobileService = 'AY' | 'AZ' | 'EU' | 'WE' | 'UE' | 'IN';

interface MobileInfo {
    appRnVersion: string;
    appVersion: string;
    celsius: number;
    countryCode: string;
    ele: string;
    iconfontNameMap: string;
    lang: string;
    lat: string;
    lon: string;
    os: string;
    osSystem: string;
    phoneCode: string;
    platform: string;
    service: MobileService;
    t: number;
    timezoneId: string;
    ttid: string;
}

interface DeprecatedNavigatorRoute {
    id: string;
    [routeProp: string]: any;
}

interface DeprecatedNavigator {
    getCurrentRoutes(): DeprecatedNavigatorRoute[];
    immediatelyResetRouteStack(nextRouteStack: DeprecatedNavigatorRoute[]): void;
    jumpBack(): void;
    jumpForward(): void;
    jumpTo(route: DeprecatedNavigatorRoute): void;
    pop(): void;
    popN(n: number): void;
    popToRoute(route: DeprecatedNavigatorRoute): void;
    popToTop(): void;
    push(route: DeprecatedNavigatorRoute): void;
    replace(route: DeprecatedNavigatorRoute): void;
    replaceAtIndex(route: DeprecatedNavigatorRoute, index: number): void;
    replacePrevious(route: DeprecatedNavigatorRoute): void;
}

interface LinearGradientBackgroundOffset {
    [offset: string]: string;
}

interface NavigationOptions {
    /**
     * @desc 自定义面板背景
     * number: 渲染本地图片
     * string: 渲染颜色
     * { uri: string }: 渲染网络图片
     * RadialGradientBackground: 渲染径向渐变
     * LinearGradientBackground: 渲染线性渐变
     *
     */
    background?:
        | number
        | string
        | { uri: string }
        | RadialGradientBackground
        | (LinearGradientBackground & LinearGradientBackgroundOffset);
    /**
     * @desc 自定义头部栏样式
     */
    topbarStyle?: StyleProp<ViewStyle>;
    /**
     * @desc 自定义头部栏文字样式
     */
    topbarTextStyle?: StyleProp<TextStyle>;
    /**
     * @desc 自定义面板背景样式
     */
    backgroundStyle?: StyleProp<ViewStyle>;
    /**
     * @desc 自定义头部栏标题
     */
    title?: string;
    hideTopbar?: boolean;
    /**
     * @desc 控制是否显示离线遮罩
     * @default true
     */
    showOfflineView?: boolean;
    gesture?: boolean;
    /**
     * @desc 是否启用首页手势返回 app 列表页面
     * @default true
     */
    enablePopGesture?: boolean;
    /**
     * @desc 蓝牙离线提示是否覆盖整个面板(除头部栏外)
     * @default true
     */
    isBleOfflineOverlay?: boolean;
    /**
     * @desc 自定义渲染头部栏
     */
    renderTopBar?: () => JSX.Element;
    /**
     * @desc 自定义渲染状态栏
     */
    renderStatusBar?: () => JSX.Element;
}

class NavigatorLayout<P = {}, S = {}> extends React.Component<P, { modalVisible: boolean } & S> {
    hookRoute(route: DeprecatedNavigatorRoute): NavigationOptions;
    renderScene(route: DeprecatedNavigatorRoute, navigator: DeprecatedNavigator): JSX.Element | undefined;
}

interface NavigationRoute {
    id: string;
    Scene: React.ComponentType;
    screenOptions?:
        | StackNavigationOptions
        | ((props: { route: RouteProp<ParamListBase, string>; navigation: any }) => StackNavigationOptions);
}

type ScreenOptions =
    | StackNavigationOptions
    | ((props: { route: RouteProp<ParamListBase, string>; navigation: any }) => StackNavigationOptions);

interface NavigationParam {
    router: NavigationRoute[];
    screenOptions?: ScreenOptions;
}

interface NavigationComponentClass<P = {}, S = {}> {
    new (props: P, context?: any): NavigatorLayout<P, S>;
}

// tslint:disable-next-line no-unnecessary-generics
function createNavigator<P = {}, S = {}>(createNavigatorParam: NavigationParam): NavigationComponentClass<P, S>;

type GotoDpAlarmData = Array<{
    dpId: string;
    dpName: string;
    selected: number;
    rangeKeys: DpValue[];
    rangeValues: string[];
}>;

let TYSdk: {
    DeviceEventEmitter: {
        addListener: (eventType: string, cb: AnyFunction) => void;
        emit: (eventType: string) => void;
        removeListener: (eventType: string, cb: AnyFunction) => void;
        removeAllListeners: (eventType?: string) => void;
    };

    Navigator: DeprecatedNavigator;

    /**
     * @param a api name
     * @param postData api params
     * @param version - api version, default 1.0
     */
    // tslint:disable-next-line no-unnecessary-generics
    apiRequest<T>(a: string, postData: Record<string, any>, version?: string): Promise<T>;

    applyNavigator(navigator: DeprecatedNavigator): void;

    devInfo: DevInfo;

    device: {
        checkDpExist(idOrCode: number | string): boolean;
        deleteDeviceInfo(): Promise<void>;
        formatDps(data: Record<number, any>): Record<string, any>;
        getBleManagerState(): Promise<boolean>;
        getBluetoothState(): Promise<number>;
        getDeviceInfo(): Promise<DevInfo>;
        // tslint:disable-next-line no-unnecessary-generics
        getDeviceState<S = Record<string, DpType>>(): Promise<S>;
        getDpCodeById(id: string | number): string;
        getDpCodes(): string[];
        /**
         * @desc 主动从设备获取 dp 点状态
         */
        getDpDataFromDevice(idOrCode: string | number): Promise<void>;
        getDpIdByCode(code: string): string;
        getDpSchema(): DpSchema[];
        getDpSchema(code: string): DpSchema;
        getFunConfig(): Record<string, any>;
        /**
         * @deprecated
         */
        getGState(dp: string): any;
        getState(dp?: string): any;
        getUnpackPanelInfo(): Promise<I18NLanMap>;
        gotoBlePermissions(): void;
        gotoDeviceWifiNetworkMonitor(): void;
        initDevice(): Promise<DevInfo>;
        isBleDevice(): boolean;
        isLocalLAN(): boolean;
        isMeshDevice(): boolean;
        isMeshWifiDevice(): boolean;
        isShareDevice(): boolean;
        isSigMeshDevice(): boolean;
        isWifiDevice(): boolean;
        /**
         * @desc 下发 dp 点
         */
        putDeviceData(cmd: Record<string, any>): Promise<{ success: boolean }>;
        /**
         * @desc 局域网下发 dp 点
         */
        putLocalDpData(cmd: Record<string, any>): Promise<void>;
        setDevState(state: Record<string, DpValue>): DevInfo;
        setDeviceInfo(d: DevInfo): void;
        /**
         * @deprecated
         */
        setGState(dp: string, val: any): any;
        setState(dp: string, val: any): Record<string, any>;
    };

    event: {
        emit(event: string, data: any): void;
        fire(event: string, data: any): void;
        /**
         * 存在 callback 则移除指定 listener，不存在则移除所有 listeners
         */
        off(event: string, callback?: AnyFunction): void;
        on(event: string, callback: AnyFunction): void;
        // tslint:disable-next-line no-unnecessary-generics
        on<T>(event: string, callback: (args: T) => void): void;
        /**
         * @desc
         * type: dpData 设备状态变更通知，payload 为更新的 DP 状态
         * type: devInfo 设备信息变更通知，payload 为 devInfo
         * type: deviceOnline 设备是否在线通知，payload 为 boolean
         */
        on(
            event: 'deviceDataChange',
            callback: (data: {
                type: 'dpData' | 'devInfo' | 'deviceOnline';
                payload: Record<string, DpValue> | DevInfo | boolean;
            }) => void,
        ): void;
        /**
         * @desc app 网络状态变更通知
         */
        on(event: 'networkStateChange', callback: (data: { appOnline: boolean }) => void): void;
        /**
         * @desc 云定时状态变更通知
         */
        on(event: 'linkageTimeUpdate', callback: (data: {}) => void): void;
        /**
         * @desc 设备局域网在线状态变更通知
         */
        on(event: 'deviceLocalStateChange', callback: (data: { state: boolean }) => void): void;
        /**
         * @desc 蓝牙状态变更通知
         */
        on(event: 'bluetoothChange', callback: (value: boolean) => void): void;
        once(event: string, callback: AnyFunction): void;
        remove(event: string, callback: AnyFunction): void;
    };

    mobile: {
        /**
         * 返回到 app 列表页面
         */
        back(): void;
        bottomListDialog(itemList: any, selected: any, onConfirmed: any): void;
        disablePopGesture(): void;
        enablePopGesture(): void;
        getMobileInfo(): Promise<MobileInfo>;
        getNetworkState(): NetworkType;
        /**
         * @platform IOS only
         */
        getWiFiSsid(): string;
        /**
         * 隐藏 app 原生 loading UI 框
         */
        hideLoading(): void;
        is24Hour(): boolean;
        /**
         * @desc 根据 uiId 跳转二级页面
         */
        jumpSubPage(uiIdParams: { uiId: string }, pageParams: any): void;
        /**
         * @desc 跳转到 app 内置路由页面或网页
         * @param routeId app 路由 url 或网页链接
         */
        jumpTo(routeId: string): void;
        mobileInfo: MobileInfo;
        shareMsg(map: any): void;
        showEditDialog(
            title: string,
            editString: string,
            onConfirmed: (value: string) => void,
            onCanceled: () => void,
        ): void;
        /**
         * 显示 app 原生 loading UI 框
         */
        showLoading(): void;
        showPromptDialog(
            confirmText: string,
            cancelText: string,
            title: string,
            message: string,
            defaultValue: string | number,
            onConfirmed: (value: string) => void,
            onCanceled: () => void,
        ): void;
        simpleConfirmDialog(title: string, subTitle: string, confirm: () => void, cancel: () => void): void;
        simpleTipDialog(title: string, callback: () => void): void;
        verSupported(): boolean;
    };

    native: {
        [key: string]: any;
        activeSubDeviceWithGwId: AnyFunction;
        addDeviceToRoom: AnyFunction;
        addListener: AnyFunction;
        aes128DecryptedStringWithPassword: AnyFunction;
        aes128EncryptedStringWithPassword: AnyFunction;
        apiRequest: AnyFunction;
        apiRNRequest: AnyFunction;
        back: AnyFunction;
        battery: AnyFunction;
        bottomListDialog: AnyFunction;
        calculateWhiteModeColor: AnyFunction;
        calculationDistance: AnyFunction;
        checkUpdate: AnyFunction;
        deleteDeviceInfo: AnyFunction;
        deviceIsCharging: AnyFunction;
        disablePopGesture: AnyFunction;
        enablePopGesture: AnyFunction;
        evilTransform: AnyFunction;
        gcj02ToWgs84Location: AnyFunction;
        getBleManagerState: AnyFunction;
        getBleRssi: AnyFunction;
        getCurrentscreenBrightness: AnyFunction;
        getDeviceList: AnyFunction;
        getDevInfo: AnyFunction;
        getDevProperty: AnyFunction;
        getDpDataFromClient: AnyFunction;
        getDpDataFromDevice: AnyFunction;
        getDpDataFromMeshDevice: AnyFunction;
        getDpsWithDevId: AnyFunction;
        getMeshDeviceInfoByNodeId: AnyFunction;
        getMobileInfo: AnyFunction;
        getNetType: AnyFunction;
        getNetworkType: AnyFunction;
        getPanelInfo: AnyFunction;
        getPlayStatus: AnyFunction;
        getRoomsInCurrentHome: AnyFunction;
        getSubDeviceList: AnyFunction;
        getWiFiSsid: AnyFunction;
        goToAlarmListActivity: AnyFunction;
        gotoBlePermissions: AnyFunction;
        gotoDeviceWifiNetworkMonitor: AnyFunction;
        gotoDpAlarm: (param: { category: string; repeat: number; data: GotoDpAlarmData }) => void;
        hideLoading: AnyFunction;
        is24Hour: AnyFunction;
        jumpTo: (routeId: string) => any;
        lang: I18NLanMap;
        mobileInfo: MobileInfo;
        panelInfo: { isVDevice: boolean };
        postBleChannelCommand: AnyFunction;
        pushToNextPageWithDeviceId: AnyFunction;
        putDpData: AnyFunction;
        putLocalDpData: AnyFunction;
        putMqttDpData: AnyFunction;
        receiverMqttData: AnyFunction;
        removeDevice: AnyFunction;
        removeGW: AnyFunction;
        removeListeners: AnyFunction;
        removeSubDevice: AnyFunction;
        renameSubDeviceName: AnyFunction;
        renameTitle: AnyFunction;
        screenAlwaysOn: AnyFunction;
        screenBrightness: AnyFunction;
        sendMqttData: AnyFunction;
        setDevProperty: AnyFunction;
        shareMsg: AnyFunction;
        shareToSystem: AnyFunction;
        showDeviceMenu: AnyFunction;
        showEditDialog: AnyFunction;
        showLoading: AnyFunction;
        simpleConfirmDialog: AnyFunction;
        simpleTipDialog: AnyFunction;
        startBLEListening: AnyFunction;
        startListening: AnyFunction;
        stopActiveSubDeviceWithGwId: AnyFunction;
        stopListening: AnyFunction;
        updateLocation: AnyFunction;
    };

    __unInitializeDps?: Record<number, any>;
};
