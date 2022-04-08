// Type definitions for tuya-panel-kit 4.0
// Project: https://github.com/TuyaInc/tuya-panel-kit#readme
// Definitions by: youngjuning <https://github.com/youngjuning>
//                 ShinyLeee <https://github.com/ShinyLeee>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.8
// tslint:disable:max-line-length
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
import { TransitionPreset } from './@react-navigation/stack/types';
import { GlobalTheme, StopsProps, LinearGradientBackground, RadialGradientBackground, BackgroundProps } from './theme';

export { GlobalTheme } from './theme';

export type AnyFunction = (...args: any[]) => void;

// Battery
export interface BatteryProps {
    /**
     * @language zh-CN
     * @description 电池尺寸
     * @types number
     * @defaultValue cx(10)
     */
    /**
     * @language en-US
     * @description the size of battery
     * @types number
     * @defaultValue cx(10)
     */
    size?: number;
    /**
     * @language zh-CN
     * @description 电池颜色
     * @types string
     * @defaultValue 'rgba(0,0,0,.5)'
     */
    /**
     * @language en-US
     * @description the color of battery
     * @types string
     * @defaultValue 'rgba(0,0,0,.5)'
     */
    batteryColor?: string;
    /**
     * @language zh-CN
     * @description 电量
     * @types number
     * @defaultValue 'rgba(0,0,0,.5)'
     */
    /**
     * @language en-US
     * @description the value of battery power
     * @types number
     * @defaultValue 'rgba(0,0,0,.5)'
     */
    value?: number;
    /**
     * @language zh-CN
     * @description 高电量颜色
     * @types number
     * @defaultValue 'rgba(0,0,0,.5)'
     */
    /**
     * @language en-US
     * @description the color of high power
     * @types number
     * @defaultValue 'rgba(0,0,0,.5)'
     */
    highColor?: string;
    /**
     * @language zh-CN
     * @description 中电量颜色
     * @types number
     * @defaultValue 'rgba(0,0,0,.5)'
     */
    /**
     * @language en-US
     * @description the color of middle power
     * @types number
     * @defaultValue 'rgba(0,0,0,.5)'
     */
    middleColor?: string;
    /**
     * @language zh-CN
     * @description 低电量颜色
     * @types number
     * @defaultValue 'rgba(0,0,0,.5)'
     */
    /**
     * @language en-US
     * @description the color of low power
     * @types number
     * @defaultValue 'rgba(0,0,0,.5)'
     */
    lowColor?: string;
    /**
     * @language zh-CN
     * @description 自定义电量的颜色分配规则
     * @types number
     * @defaultValue 'rgba(0,0,0,.5)'
     */
    /**
     * @language en-US
     * @description Customize the color distribution rules of the battery
     * @types number
     * @defaultValue 'rgba(0,0,0,.5)'
     */
    onCalcColor?: (...args: any[]) => void;
    /**
     * @language zh-CN
     * @description 主题配置
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Theme configuration
     * @defaultValue {}
     */
    theme?: {
        batteryColor: string;
    };
}
export class Battery extends React.Component<BatteryProps> {}

// BrickButton
export interface BrickButtonProps {
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 点击事件
     * @types (event: <a target='_blank' href='https://reactnative.dev/docs/pressevent'>GestureResponderEvent</a>) => void
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Click event
     * @types (event: <a target='_blank' href='https://reactnative.dev/docs/pressevent'>GestureResponderEvent</a>) => void
     * @defaultValue () => {}
     */
    onPress?: (event: GestureResponderEvent) => void;
    /**
     * @language zh-CN
     * @description 事件监听
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Event listeners
     * @defaultValue () => {}
     */
    onChange?: (eventName: string, ...args: any) => void;
    /**
     * @language zh-CN
     * @description 加载状态
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Loading status
     * @defaultValue false
     */
    loading?: boolean;
    /**
     * @language zh-CN
     * @description 按钮文字
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description Button text
     * @defaultValue ''
     */
    text?: string;
    /**
     * @language zh-CN
     * @description 按钮文字样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description The text style of the button
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue {}
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 按钮类型
     * @defaultValue 'primary'
     */
    /**
     * @language en-US
     * @description Type of button
     * @defaultValue 'primary'
     */
    type?: 'primary' | 'primaryGradient' | 'primaryBorder' | 'normal' | 'small';
    /**
     * @language zh-CN
     * @description 按钮内部包裹内容样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description The content style of the package inside the button
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    wrapperStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 按钮按下时的背景色
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The background color when the button is pressed
     * @defaultValue null
     */
    backgroundColorTouched?: string;
    /**
     * @language zh-CN
     * @description 是否禁用点击
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Disable click?
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 按钮按下时的按钮颜色
     * @defaultValue 'transparent'
     */
    /**
     * @language en-US
     * @description The color of the button when it is pressed
     * @defaultValue 'transparent'
     */
    underlayColor?: string;
    /**
     * @language zh-CN
     * @description 按钮按下时的按钮透明度
     * @defaultValue 1
     */
    /**
     * @language en-US
     * @description Button transparency when the button is pressed
     * @defaultValue 1
     */
    activeOpacity?: number;
    /**
     * @language zh-CN
     * @description 是否显示按钮点击时的颜色
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to display the color button when clicking
     * @defaultValue false
     */
    showUnderlay?: boolean;
    /**
     * @language zh-CN
     * @description 加载组件主颜色
     * @defaultValue '#fff'
     */
    /**
     * @language en-US
     * @description Loading main component colors
     * @defaultValue '#fff'
     */
    loadingColor?: string;
    /**
     * @language zh-CN
     * @description 加载组件的背景主颜色
     * @defaultValue 'rgba(0,0,0,.1)'
     */
    /**
     * @language en-US
     * @description The main background color of the loading component
     * @defaultValue 'rgba(0,0,0,.1)'
     */
    loadingBackground?: string;
    /**
     * @language zh-CN
     * @description 加载组件的大小
     * @defaultValue 'small'
     */
    /**
     * @language en-US
     * @description The size of the loading component
     * @defaultValue 'small'
     */
    loadingSize?: ('small' | 'large') | number;
    /**
     * @language zh-CN
     * @description 加载组件的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description The style of the loading component
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    loadingStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 加载组件的外边框粗细
     * @defaultValue cx(2)
     */
    /**
     * @language en-US
     * @description The outer border thickness of the loading component
     * @defaultValue cx(2)
     */
    loadingStrokeWidth?: number;
    /**
     * @language zh-CN
     * @description 渐变背景
     * @types string | <a target="_blank" href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/theme.d.ts#L6">LinearGradientBackground</a> | <a target="_blank" href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/theme.d.ts#L14">RadialGradientBackground</a>
     * @defaultValue { x1: '0%', y1: '0%', x2: '0%', y2: '100%', stops: { '0%': 'red', '30%': 'blue', '100%': 'yellow' }}
     */
    /**
     * @language en-US
     * @description Gradient background
     * @types string | <a target="_blank" href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/theme.d.ts#L6">LinearGradientBackground</a> | <a target="_blank" href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/theme.d.ts#L14">RadialGradientBackground</a>
     * @defaultValue { x1: '0%', y1: '0%', x2: '0%', y2: '100%', stops: { '0%': 'red', '30%': 'blue', '100%': 'yellow' }}
     */
    background?: BackgroundProps;
    /**
     * @language zh-CN
     * @description 主题配置
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Theme configuration
     * @defaultValue {}
     */
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
export class BrickButton extends React.Component<BrickButtonProps> {}

// Button
export interface ButtonProps extends TouchableOpacityProps {
    /**
     * @language zh-CN
     * @description 按钮是否跟随父容器拉伸
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Does the button follow the parent container stretch?
     * @defaultValue false
     */
    stretch?: boolean;
    /**
     * @language zh-CN
     * @description 按钮是否禁用
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Is the button disabled?
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 按钮背景尺寸，默认为 noSet。large: 48, normal: 40, small: 32。
     * @defaultValue 'noSet'
     */
    /**
     * @language en-US
     * @description Button background size, the default is `noset`. large: 48, normal: 40, small: 32.
     * @defaultValue 'noSet'
     */
    size?: 'large' | 'normal' | 'small' | 'noSet' | number;
    /**
     * @language zh-CN
     * @description 按钮背景类型。normal：背景色为transparent；若为primary：则跟随主色
     * @defaultValue 'normal'
     */
    /**
     * @language en-US
     * @description Button background type. normal: the background color is transparent; primary: it follows the main color
     * @defaultValue 'normal'
     */
    type?: 'primary' | 'normal';
    /**
     * @language zh-CN
     * @description 按钮背景，可为颜色值或渐变值
     * @types string | <a target="_blank" href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/theme.d.ts#L6">LinearGradientBackground</a> | <a target="_blank" href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/theme.d.ts#L14">RadialGradientBackground</a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Button background, can be color value or gradient value
     * @types string | <a target="_blank" href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/theme.d.ts#L6">LinearGradientBackground</a> | <a target="_blank" href="https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/theme.d.ts#L14">RadialGradientBackground</a>
     * @defaultValue null
     */
    background?: BackgroundProps;
    /**
     * @language zh-CN
     * @description 按钮内的文字内容
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description Text content in the button
     * @defaultValue ''
     */
    text?: string;
    /**
     * @language zh-CN
     * @description 按钮内的文字是否只显示一行，即超出显示省略号
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Does the text in the button display only one line, that is, beyond the ellipsis
     * @defaultValue true
     */
    textSingleLine?: boolean;
    /**
     * @language zh-CN
     * @description 按钮内的文字排列方向，默认放置文字位于按钮底部
     * @defaultValue 'bottom'
     */
    /**
     * @language en-US
     * @description The text arrangement direction within the button. The default placement text is at the bottom of the button
     * @defaultValue 'bottom'
     */
    textDirection?: 'left' | 'top' | 'right' | 'bottom' | 'center';
    /**
     * @language zh-CN
     * @description 按钮内的图标名称
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Icon name inside the button
     * @defaultValue undefined
     */
    icon?: string;
    /**
     * @language zh-CN
     * @description 按钮内的图标路径
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Icon path within the button
     * @defaultValue null
     */
    iconPath?: string;
    /**
     * @language zh-CN
     * @description 按钮内的图标尺寸
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Icon size in button
     * @defaultValue null
     */
    iconSize?: number;
    /**
     * @language zh-CN
     * @description 按钮内的图标颜色
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The color of the icon within the button
     * @defaultValue null
     */
    iconColor?: string;
    /**
     * @language zh-CN
     * @description 按钮内的图片资源路径
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The path of image resources in the button
     * @defaultValue null
     */
    image?: string;
    /**
     * @language zh-CN
     * @description 按钮内的图片颜色
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The color of the image inside the button
     * @defaultValue null
     */
    imageColor?: string;
    /**
     * @language zh-CN
     * @description 按钮内的图片样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/image-style-props">StyleProp<ImageStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The image style inside the button
     * @types <a target="_blank" href="https://reactnative.dev/docs/image-style-props">StyleProp<ImageStyle></a>
     * @defaultValue null
     */
    imageStyle?: StyleProp<ImageStyle>;
    /**
     * @language zh-CN
     * @description 徽标字体内容，即按钮右上角徽标
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description Logo font content, that is, the logo in the upper right corner of the button
     * @defaultValue ''
     */
    badgeText?: string;
    /**
     * @language zh-CN
     * @description 按钮内容的禁用透明度比例
     * @defaultValue 0.2
     */
    /**
     * @language en-US
     * @description Disable transparency scale for button content
     * @defaultValue 0.2
     */
    disabledOpacity?: number;
    /**
     * @language zh-CN
     * @description 按钮的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description The style of the button
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 最外层容器的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description The style of the outermost container
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    wrapperStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 按钮背景的边框值，安卓有瑕疵，暂时不用
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description The border value of the button background is defective on Android. It is not used for the time being
     * @defaultValue true
     */
    border?: string | boolean | number;
    /**
     * @language zh-CN
     * @description 按钮内字体样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Font style in button
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue {}
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 按钮内徽标容器的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description The style of the logo container inside the button
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    badgeStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 按钮内徽标字体的样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description The style of the logo font within the button
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue {}
     */
    badgeTextStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description
     * @defaultValue false
     */
    useART?: boolean;
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue 'Button_Text'
     */
    /**
     * @language en-US
     * @description Test identification
     * @defaultValue 'Button_Text'
     */
    textAccessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue 'Button_Badge'
     */
    /**
     * @language en-US
     * @description Test identification
     * @defaultValue 'Button_Badge'
     */
    badgeAccessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue 'Button_Badge_Text'
     */
    /**
     * @language en-US
     * @description Test identification
     * @defaultValue 'Button_Badge_Text'
     */
    badgeTextAccessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 主题配置
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Theme configuration
     * @defaultValue {}
     */
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
export class Button extends React.Component<ButtonProps> {}

// Carousel
export interface CarouselProps extends ViewPagerAndroidProps {
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue 'Carousel'
     */
    /**
     * @language en-US
     * @description Test identification
     * @defaultValue 'Carousel'
     */
    accessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 当内容范围比滚动视图本身大时，是否弹性拉动一截
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description When the content range is larger than the scrolling view itself, is it elastic to pull a section
     * @defaultValue true
     */
    bounces?: boolean;
    /**
     * @language zh-CN
     * @description 是否有指示点
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Is there an indication point
     * @defaultValue true
     */
    hasDots?: boolean;
    /**
     * @language zh-CN
     * @description 是否自动播放
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Auto play
     * @defaultValue false
     */
    autoplay?: boolean;
    /**
     * @language zh-CN
     * @description 自动播放间隔时间(ms)
     * @defaultValue 2000
     */
    /**
     * @language en-US
     * @description Auto play interval (ms)
     * @defaultValue 2000
     */
    autoplayInterval?: number;
    /**
     * @language zh-CN
     * @description 当前激活的索引
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description current selected index
     * @defaultValue 0
     */
    selectedIndex?: number;
    /**
     * @language zh-CN
     * @description 自定义指示点
     * @types React.ElementType | ((params: { dotStyle: <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>; dotWrapperStyle: <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>; dotActiveStyle: <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>; currentIndex: number; count: number;}) => React.ReactNode)
     * @defaultValue <a target="_blank" href="https://github.com/tuya/tuya-panel-kit/blob/master/src/components/carousel/dot.js#L33">defaultDot</a>
     */
    /**
     * @language en-US
     * @description Custom indicator point
     * @types React.ElementType | ((params: { dotStyle: <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>;dotWrapperStyle: <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>;dotActiveStyle: <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>; currentIndex: number; count: number;}) => React.ReactNode)
     * @defaultValue <a target="_blank" href="https://github.com/tuya/tuya-panel-kit/blob/master/src/components/carousel/dot.js#L33">defaultDot</a>
     */
    dots?:
        | React.ElementType
        | ((params: {
              dotStyle: StyleProp<ViewStyle>;
              dotWrapperStyle: StyleProp<ViewStyle>;
              dotActiveStyle: StyleProp<ViewStyle>;
              currentIndex: number;
              count: number;
          }) => React.ReactNode);
    /**
     * @language zh-CN
     * @description 指示点样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Indicator point style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    dotStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 当前激活的指示点样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description The currently active indicator style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    dotActiveStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 轮播页样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description The style of the carousel page
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    pageStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 是否使用 viewPager（安卓的实现机制）
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether to use viewpager (Android implementation mechanism)
     * @defaultValue true
     */
    useViewPagerOnAndroid?: boolean;
    /**
     * @language zh-CN
     * @description 是否循环播放
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Do you want to loop?
     * @defaultValue false
     */
    loop?: boolean;
    /**
     * @language zh-CN
     * @description 指示点的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Indicates the style of the point
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    dotWrapperStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 轮播图内容样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Content style of carousel
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 轮播图切换事件
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Carousel chart switching event
     * @defaultValue () => {}
     */
    carouselChange?: (index: number) => void;
    /**
     * @language zh-CN
     * @description 用户停止拖动滚动视图时调用
     * @types (event: <a target="_blank" href="https://reactnative.dev/docs/0.60/scrollview#onscroll">NativeSyntheticEvent<NativeScrollEvent></a>, state: any) => void
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Called when the user stops dragging the scroll view and it either stops or begins to glide
     * @types (event: <a target="_blank" href="https://reactnative.dev/docs/0.60/scrollview#onscroll">NativeSyntheticEvent<NativeScrollEvent></a>, state: any) => void
     * @defaultValue () => {}
     */
    onScrollEndDrag?: (event: NativeSyntheticEvent<NativeScrollEvent>, state: any) => void;
    /**
     * @language zh-CN
     * @description 当滚动结束时调用
     * @types (event: <a target="_blank" href="https://reactnative.dev/docs/0.60/scrollview#onscroll">NativeSyntheticEvent<NativeScrollEvent></a>, state: any) => void
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Called when the momentum scroll ends ( scroll which occurs as the ScrollView glides to a stop )
     * @types (event: <a target="_blank" href="https://reactnative.dev/docs/0.60/scrollview#onscroll">NativeSyntheticEvent<NativeScrollEvent></a>, state: any) => void
     * @defaultValue () => {}
     */
    onMomentumScrollEnd?: (event: NativeSyntheticEvent<NativeScrollEvent>, state: any) => void;
    /**
     * @language zh-CN
     * @description 用户开始拖动滚动视图时调用
     * @types (event: <a target="_blank" href="https://reactnative.dev/docs/0.60/scrollview#onscroll">NativeSyntheticEvent<NativeScrollEvent></a>, state: any) => void
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Called when the user begins to drag the scroll view
     * @types (event: <a target="_blank" href="https://reactnative.dev/docs/0.60/scrollview#onscroll">NativeSyntheticEvent<NativeScrollEvent></a>, state: any) => void
     * @defaultValue () => {}
     */
    onScrollBeginDrag?: (event: NativeSyntheticEvent<NativeScrollEvent>, state: any) => void;
}
export class Carousel extends React.Component<CarouselProps> {}

// Checkbox
export interface CheckboxProps {
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue 'Checkbox'
     */
    /**
     * @language en-US
     * @description Test identification
     * @defaultValue 'Checkbox'
     */
    accessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 图标大小
     * @defaultValue 17
     */
    /**
     * @language en-US
     * @description The size of icon
     * @defaultValue 17
     */
    size?: number;
    /**
     * @language zh-CN
     * @description 是否禁用按钮
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Disable button
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 未选中时的图标颜色
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Icon color when not selected
     * @defaultValue null
     */
    disabledColor?: string;
    /**
     * @language zh-CN
     * @description 是否选中状态
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Is it selected
     * @defaultValue false
     */
    checked?: boolean;
    /**
     * @language zh-CN
     * @description 选中状态图标路径
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Select status icon path
     * @defaultValue null
     */
    checkedIcon?: string;
    /**
     * @language zh-CN
     * @description 未选中状态图标路径
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The status icon path is not selected
     * @defaultValue null
     */
    unCheckedIcon?: string;
    /**
     * @language zh-CN
     * @description 是否翻转图标和子元素位置
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Do you want to flip the positions of icons and child elements
     * @defaultValue false
     */
    reverse?: boolean;
    /**
     * @language zh-CN
     * @description 是否在非选中状态下隐藏图标
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Hide icon when not selected
     * @defaultValue false
     */
    hideOnUnselect?: boolean;
    /**
     * @language zh-CN
     * @description 图标的颜色
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The color of the icon
     * @defaultValue null
     */
    color?: string;
    /**
     * @language zh-CN
     * @description 变更事件回调
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Callback of change events
     * @defaultValue null
     */
    onChange?: (checked: boolean) => void;
    /**
     * @language zh-CN
     * @description 子元素，一般为 Text
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Child element, usually text
     * @defaultValue null
     */
    children?: React.ReactNode;
}
export class Checkbox extends React.Component<CheckboxProps> {}

// CircleView
export interface CircleViewProps extends ViewProps {
    /**
     * @language zh-CN
     * @description 圆形视图的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Styles for circular views
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 圆形视图的背景色
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description The background color of the circular view
     * @defaultValue undefined
     */
    color?: string;
    /**
     * @language zh-CN
     * @description 圆形视图边框的背景色
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description The background color of the circular view border
     * @defaultValue undefined
     */
    borderColor?: string;
    /**
     * @language zh-CN
     * @description The size of the circular view border
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description The size of the circular view border
     * @defaultValue undefined
     */
    borderWidth?: number;
    /**
     * @language zh-CN
     * @description 圆形视图的半径
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Radius of circular view
     * @defaultValue undefined
     */
    radius: number;
    /**
     * @language zh-CN
     * @description 嵌套子元素
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description nested child elemtns
     * @defaultValue undefined
     */
    children?: React.ReactNode;
}
export class CircleView extends React.Component<CircleViewProps> {}

// Collapsible
export interface CollapsibleProps {
    /**
     * @language zh-CN
     * @description 子元素对齐方式
     * @defaultValue 'top'
     */
    /**
     * @language en-US
     * @description Alignment of child elements
     * @defaultValue 'top'
     */
    align?: 'top' | 'center' | 'bottom';
    /**
     * @language zh-CN
     * @description 是否折叠
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Is it folded
     * @defaultValue true
     */
    collapsed?: boolean;
    /**
     * @language zh-CN
     * @description 需要折叠的高度
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description Height to be folded
     * @defaultValue 0
     */
    collapsedHeight?: number;
    /**
     * @language zh-CN
     * @description 折叠动画时长
     * @defaultValue 300
     */
    /**
     * @language en-US
     * @description How long does the animation take to collapse
     * @defaultValue 300
     */
    duration?: number;
    /**
     * @language zh-CN
     * @description 动画缓动函数
     * @defaultValue 'EaseOutCubic'
     */
    /**
     * @language en-US
     * @description Animation function
     * @defaultValue 'EaseOutCubic'
     */
    easing?: string | (() => void);
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 变更回调函数
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Change callback function
     * @defaultValue () => {}
     */
    onChange?: () => void;
    /**
     * @language zh-CN
     * @description 嵌套子元素
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Nested sub elements
     * @defaultValue null
     */
    children?: React.ReactNode;
}
export class Collapsible extends React.Component<CollapsibleProps> {}

// ControllerBar
export interface ControllerBarProps extends ViewProps {
    /**
     * @language zh-CN
     * @description 按钮背景类型
     * @defaultValue 'normal'
     */
    /**
     * @language en-US
     * @description The background type of the button
     * @defaultValue 'normal'
     */
    type?: 'primary' | 'normal';
    /**
     * @language zh-CN
     * @description 按钮大小
     * @defaultValue 'normal'
     */
    /**
     * @language en-US
     * @description The size of the button
     * @defaultValue 'normal'
     */
    size?: ('large' | 'normal' | 'small') | number;
    /**
     * @language zh-CN
     * @description 按钮是否跟随父容器拉伸
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Does the size of the button follow the stretch of the parent container
     * @defaultValue true
     */
    stretch?: boolean;
    /**
     * @language zh-CN
     * @description 背景的透明类型
     * @defaultValue 'pure'
     */
    /**
     * @language en-US
     * @description Transparent type of background
     * @defaultValue 'pure'
     */
    backgroundType?: 'alpha' | 'pure';
    /**
     * @language zh-CN
     * @description 背景颜色
     * @defaultValue '#fff'
     */
    /**
     * @language en-US
     * @description Background color
     * @defaultValue '#fff'
     */
    backgroundColor?: string;
    /**
     * @language zh-CN
     * @description 底部是否有边框
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether there is a border at the bottom
     * @defaultValue false
     */
    hasBottomBorder?: boolean;
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 底部栏内的按钮
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Buttons in the controllerBar
     * @defaultValue undefined
     */
    button: ButtonProps[];
    /**
     * @language zh-CN
     * @description 包裹按钮的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description The style of the parcel button
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    wrapperStyle?: StyleProp<ViewStyle>;
}
export interface BarGroupProps {
    /**
     * @language zh-CN
     * @description 组合底部栏的类型
     * @defaultValue 'warp'
     */
    /**
     * @language en-US
     * @description Type of the bottom column of the group
     * @defaultValue 'warp'
     */
    type?: 'warp' | 'swiper' | 'divide';
    /**
     * @language zh-CN
     * @description 按钮的大小
     * @defaultValue  'normal'
     */
    /**
     * @language en-US
     * @description The size of the button
     * @defaultValue  'normal'
     */
    size?: 'large' | 'normal' | 'small' | number;
    /**
     * @language zh-CN
     * @description 当 type 为 'swiper' 时的配置参数
     * @types <a target='_blank' href='https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/index.d.ts#L119'>CarouselProps</a>
     * @defaultValue { selectIndex: 0 }
     */
    /**
     * @language en-US
     * @description When type is swiper, this is the configuration of swiper.
     * @types <a target='_blank' href='https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/index.d.ts#L119'>CarouselProps</a>
     * @defaultValue { selectIndex: 0 }
     */
    swiperConfig?: CarouselProps;
    /**
     * @language zh-CN
     * @description 组合底部栏的容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Container styles for combining bottom columns
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 子元素
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Sub element
     * @defaultValue undefined
     */
    children: React.ReactNode;
}
export class ControllerBar extends React.Component<ControllerBarProps> {
    static Group: React.ElementType<BarGroupProps>;
}

// DatePicker
export interface DatePickerProps extends Omit<PickerViewProps, 'mode'> {
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue 'DatePicker'
     */
    /**
     * @language en-US
     * @description Test identification
     * @defaultValue 'DatePicker'
     */
    accessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 多语言设置
     * @defaultValue 'en'
     */
    /**
     * @language en-US
     * @description Multilingual Settings
     * @defaultValue 'en'
     */
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
    /**
     * @language zh-CN
     * @description The selection type of the selector
     * @defaultValue 'date'
     */
    /**
     * @language en-US
     * @description The selection type of the selector
     * @defaultValue 'date'
     */
    mode?: 'datetime' | 'date' | 'time' | 'month' | 'year';
    /**
     * @language zh-CN
     * @description 选择 picker 是否可循环
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Select whether picker loops.
     * @defaultValue false
     */
    loop?: boolean;
    /**
     * @language zh-CN
     * @description 是否为12小时制
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Specify whether it is 12-hour system.
     * @defaultValue false
     */
    use12Hours?: boolean;
    /**
     * @language zh-CN
     * @description 月、日、时、分，是否补0显示
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Month, day, hour, minute, whether to add 0 display
     * @defaultValue true
     */
    isPlusZero?: boolean;
    /**
     * @language zh-CN
     * @description 设置最小可选择的值
     * @defaultValue new Date(2000, 0, 1, 0, 0, 0)
     */
    /**
     * @language en-US
     * @description Set the minimum selectable value
     * @defaultValue new Date(2000, 0, 1, 0, 0, 0)
     */
    minDate?: Date;
    /**
     * @language zh-CN
     * @description 设置最大可选择的值
     * @defaultValue new Date(2030, 11, 31, 23, 59, 59)
     */
    /**
     * @language en-US
     * @description Set the maximum selectable value
     * @defaultValue new Date(2030, 11, 31, 23, 59, 59)
     */
    maxDate?: Date;
    /**
     * @language zh-CN
     * @description 某一项被选中时执行此回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Perform this callback when an item is selected. It is called with the following parameters.
     * @defaultValue () => {}
     */
    onDateChange?: (value?: Date) => void;
    /**
     * @language zh-CN
     * @description 某一项被选中时执行此回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Perform this callback when an item is selected. It is called with the following parameters.
     * @defaultValue () => {}
     */
    onValueChange?: (value?: string | number, index?: number) => void;
    /**
     * @language zh-CN
     * @description AM / PM 是否位于小时及分钟之前
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Am / PM before hours and minutes
     * @defaultValue false
     */
    isAmpmFirst?: boolean;
    /**
     * @language zh-CN
     * @description 小时及分钟项是否位于年月日之前
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Specify whether the hour and minute options are before year, month, and day.
     * @defaultValue false
     */
    isTimeFirst?: boolean;
    /**
     * @language zh-CN
     * @description 当前选中的值，设置了该属性即为受控组件
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description The currently selected value determines that this attribute is the controlled component
     * @defaultValue undefined
     */
    date?: Date;
    /**
     * @language zh-CN
     * @description 默认选中的值
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description The value selected by default
     * @defaultValue undefined
     */
    defaultDate?: Date;
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description picker 里字体颜色
     * @defaultValue '#333'
     */
    /**
     * @language en-US
     * @description Font color in picker
     * @defaultValue '#333'
     */
    pickerFontColor?: string;
    /**
     * @language zh-CN
     * @description 年 月 日 排序规则，若不提供则默认为年月日
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The sorting rule of year, month and day options. It is year/month/day by default
     * @defaultValue null
     */
    dateSortKeys?: string[];
}
export class DatePicker extends React.Component<DatePickerProps> {}

// Dialog
export interface DialogProps {
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 头部样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Header style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    headerStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 标题
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Title
     * @defaultValue undefined
     */
    title: string;
    /**
     * @language zh-CN
     * @description 标题样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Title style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    titleStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 标题超过多少行显示省略号
     * @defaultValue 2
     */
    /**
     * @language en-US
     * @description An ellipsis is shown if the title exceeds the specified number of lines
     * @defaultValue 2
     */
    titleNumberOfLines?: number;
    /**
     * @language zh-CN
     * @description 副标题
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Subtitle
     * @defaultValue undefined
     */
    subTitle?: string;
    /**
     * @language zh-CN
     * @description 副标题样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Subtitle style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    subTitleStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description content 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description  Content container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description Footer 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Footer container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    footerWrapperStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 确认文字
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description Confirmation text
     * @defaultValue ''
     */
    confirmText?: string;
    /**
     * @language zh-CN
     * @description 确认文字样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description Confirmation text style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue ''
     */
    confirmTextStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 测试标志
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description Test flag
     * @defaultValue ''
     */
    confirmAccessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 确认点击回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of clicking the confirm button
     * @defaultValue () => {}
     */
    onConfirm?: (data: any, args: { close: () => void }) => void;
    /**
     * @language zh-CN
     * @description 动画类型
     * @defaultValue 'ScaleFadeIn'
     */
    /**
     * @language en-US
     * @description Animation type
     * @defaultValue 'ScaleFadeIn'
     */
    motionType?: 'none' | 'ScaleFadeIn' | 'Fade' | 'PullUp' | 'ScalePullDown' | 'PushDown';
    /**
     * @language zh-CN
     * @description 动画配置
     * @types <a target='_blank' href='https://github.com/tuya/DefinitelyTyped/blob/9c5d06d5adde673df002d70c2c51a6f63213a282/types/tuya-panel-kit/index.d.ts#L2227'>MotionFadeProps</a> | <a target='_blank' href='https://github.com/tuya/DefinitelyTyped/blob/9c5d06d5adde673df002d70c2c51a6f63213a282/types/tuya-panel-kit/index.d.ts#L2231'>MotionPullUpProps</a> | <a target='_blank' href='https://github.com/tuya/DefinitelyTyped/blob/9c5d06d5adde673df002d70c2c51a6f63213a282/types/tuya-panel-kit/index.d.ts#L2235'>MotionScaleFadeInProps</a> | <a target='_blank' href='https://github.com/tuya/DefinitelyTyped/blob/9c5d06d5adde673df002d70c2c51a6f63213a282/types/tuya-panel-kit/index.d.ts#L2243'>MotionScalePullDownProps</a> | <a target='_blank' href='https://github.com/tuya/DefinitelyTyped/blob/9c5d06d5adde673df002d70c2c51a6f63213a282/types/tuya-panel-kit/index.d.ts#L2248'>MotionPushDownProps</a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Animation configuration
     * @types <a target='_blank' href='https://github.com/tuya/DefinitelyTyped/blob/9c5d06d5adde673df002d70c2c51a6f63213a282/types/tuya-panel-kit/index.d.ts#L2227'>MotionFadeProps</a> | <a target='_blank' href='https://github.com/tuya/DefinitelyTyped/blob/9c5d06d5adde673df002d70c2c51a6f63213a282/types/tuya-panel-kit/index.d.ts#L2231'>MotionPullUpProps</a> | <a target='_blank' href='https://github.com/tuya/DefinitelyTyped/blob/9c5d06d5adde673df002d70c2c51a6f63213a282/types/tuya-panel-kit/index.d.ts#L2235'>MotionScaleFadeInProps</a> | <a target='_blank' href='https://github.com/tuya/DefinitelyTyped/blob/9c5d06d5adde673df002d70c2c51a6f63213a282/types/tuya-panel-kit/index.d.ts#L2243'>MotionScalePullDownProps</a> | <a target='_blank' href='https://github.com/tuya/DefinitelyTyped/blob/9c5d06d5adde673df002d70c2c51a6f63213a282/types/tuya-panel-kit/index.d.ts#L2248'>MotionPushDownProps</a>
     * @defaultValue null
     */
    motionConfig?:
        | MotionFadeProps
        | MotionPullUpProps
        | MotionScaleFadeInProps
        | MotionScalePullDownProps
        | MotionPushDownProps;
}
export interface DialogCancelProps {
    /**
     * @language zh-CN
     * @description 取消文字
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Cancellation text
     * @defaultValue null
     */
    cancelText?: string;
    /**
     * @language zh-CN
     * @description 取消文字样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Cancellation text style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    cancelTextStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 测试标志
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description Test flag
     * @defaultValue ''
     */
    cancelAccessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 取消点击回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of clicking the cancel button
     * @defaultValue () => {}
     */
    onCancel?: () => void;
}
// tslint:disable-next-line no-empty-interface
export interface DialogAlertProps extends DialogProps {}
export interface DialogCheckbox extends TYFlatListData {
    value?: string | number;
    title?: string;
    iconSize?: number;
    reverse?: boolean;
    Icon?: string;
    hideOnUnselect?: boolean;
}

export interface DialogCheckboxProps
    extends DialogProps,
        DialogCancelProps,
        Omit<TYFlatListProps<{}>, 'data' | 'renderItem'> {
    /**
     * @language zh-CN
     * @description CheckBox 类型
     * @defaultValue 'radio'
     */
    /**
     * @language en-US
     * @description CheckBox type
     * @defaultValue 'radio'
     */
    type?: 'radio' | 'switch';
    /**
     * @language zh-CN
     * @description 选中的值
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description selected value
     * @defaultValue undefined
     */
    value: string | number | string[];
    /**
     * @language zh-CN
     * @description 最大列表项
     * @defaultValue 5
     */
    /**
     * @language en-US
     * @description Largest list item
     * @defaultValue 5
     */
    maxItemNum?: number;
    /**
     * @language zh-CN
     * @description Checkbox 数据源
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/9c5d06d5adde673df002d70c2c51a6f63213a282/types/tuya-panel-kit/index.d.ts#L1610">DialogCheckbox</a>[]
     * @defaultValue 5
     */
    /**
     * @language en-US
     * @description Checkbox data source
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/9c5d06d5adde673df002d70c2c51a6f63213a282/types/tuya-panel-kit/index.d.ts#L1610">DialogCheckbox</a>[]
     * @defaultValue 5
     */
    dataSource: DialogCheckbox[];
    /**
     * @language zh-CN
     * @description Checkbox 变更回调事件
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback for Checkbox value change
     * @defaultValue () => {}
     */
    onChange?: (value: string | number) => void;
}
export interface DialogConfirmProps extends DialogProps, DialogCancelProps {
    /**
     * @language zh-CN
     * @description 图片资源
     * @addVersion 4.3.0
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description image source
     * @addVersion 4.3.0
     * @defaultValue undefined
     */
    imageSource?: object | number;
    /**
     * @language zh-CN
     * @description 图片样式
     * @addVersion 4.3.0
     * @defaultValue undefined
     * @types <a target="_blank" href="https://reactnative.dev/docs/image-style-props">StyleProp<ImageStyle></a>
     */
    /**
     * @language en-US
     * @description image style
     * @addVersion 4.3.0
     * @defaultValue undefined
     * @types <a target="_blank" href="https://reactnative.dev/docs/image-style-props">StyleProp<ImageStyle></a>
     */
    imageStyle?: StyleProp<ImageStyle>;
    /**
     * @language zh-CN
     * @description 图标路径
     * @addVersion 4.3.0
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description icon path
     * @addVersion 4.3.0
     * @defaultValue undefined
     */
    iconPath?: string;
    /**
     * @language zh-CN
     * @description 图标尺寸
     * @addVersion 4.3.0
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description icon size
     * @addVersion 4.3.0
     * @defaultValue undefined
     */
    iconSize?: number;
}

export interface DialogList extends TYFlatListData {
    title: string;
}
export interface DialogListProps
    extends Omit<DialogProps, 'motionType' | 'motionConfig'>,
        DialogCancelProps,
        Omit<TYFlatListProps<{}>, 'data' | 'renderItem'> {
    /**
     * @language zh-CN
     * @description 最大列表项
     * @defaultValue 5
     */
    /**
     * @language en-US
     * @description Largest list item
     * @defaultValue 5
     */
    maxItemNum?: number;
    /**
     * @language zh-CN
     * @description Checkbox 数据源
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/9c5d06d5adde673df002d70c2c51a6f63213a282/types/tuya-panel-kit/index.d.ts#L1610">DialogCheckbox[]</a>
     * @defaultValue 5
     */
    /**
     * @language en-US
     * @description Checkbox data source
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/9c5d06d5adde673df002d70c2c51a6f63213a282/types/tuya-panel-kit/index.d.ts#L1610">DialogCheckbox[]</a>
     * @defaultValue 5
     */
    dataSource: DialogList[];
    /**
     * @language zh-CN
     * @description 列表样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description List container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    listStyle?: StyleProp<ViewStyle>;
}

export interface DialogPromptProps extends TextInputProps, Omit<DialogProps, 'style'>, DialogCancelProps {
    /**
     * @language zh-CN
     * @description 是否显示帮助图标
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to show the help icon
     * @defaultValue false
     */
    showHelp?: boolean;
    /**
     * @language zh-CN
     * @description 帮助图标点击回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Help icon click callback
     * @defaultValue () => {}
     */
    onHelpPress?: () => void;
    /**
     * @language zh-CN
     * @description 输入框的容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The container style of the input box
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    inputWrapperStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 输入框样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The style of the input box
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    inputStyle?: StyleProp<ViewStyle>;
}

export interface DialogCustomProps extends DialogProps, DialogCancelProps {
    /**
     * @language zh-CN
     * @description 自定义 Dialog Content
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Custom Dialog Content
     * @defaultValue null
     */
    content?: any;
    /**
     * @language zh-CN
     * @description 自定义 Dialog Header
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Custom Dialog Header
     * @defaultValue null
     */
    header?: React.ElementType | (() => React.ReactNode);
    /**
     * @language zh-CN
     * @description 自定义 Dialog Footer
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Custom Dialog Footer
     * @defaultValue null
     */
    footer?: React.ElementType | (() => React.ReactNode);
}

export interface DialogElse extends ModalProps {
    onShow?: () => void;
    onHide?: () => void;
    onDismiss?: () => void;
}
// tslint:disable-next-line no-unnecessary-class
export class Dialog {
    static alert: (option: DialogAlertProps, option2?: DialogElse) => void;
    static checkbox: (option: DialogCheckboxProps, option2?: DialogElse) => void;
    static confirm: (option: DialogConfirmProps, option2?: DialogElse) => void;
    static list: (option: DialogListProps, option2?: DialogElse) => void;
    static prompt: (option: DialogPromptProps, option2?: DialogElse) => void;
    static custom: (option: DialogCustomProps, option2?: DialogElse) => void;
    static close: () => void;
}

// Divider
export interface DividerProps {
    /**
     * @language zh-CN
     * @description 分割线样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Split line style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 主轴方向
     * @defaultValue 'row'
     */
    /**
     * @language en-US
     * @description The direction of main axis
     * @defaultValue 'row'
     */
    flexDirection?: 'row' | 'column';
    /**
     * @language zh-CN
     * @description 是否显示
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether it is visible or not
     * @defaultValue true
     */
    visible?: boolean;
    /**
     * @language zh-CN
     * @description 分隔线颜色
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Divider color
     * @defaultValue null
     */
    color?: string;
    /**
     * @language zh-CN
     * @description 分隔线宽
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Divider width
     * @defaultValue null
     */
    width?: number;
    /**
     * @language zh-CN
     * @description 分隔线高
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Divider height
     * @defaultValue null
     */
    height?: number;
}
export class Divider extends React.Component<DividerProps> {}

// GlobalToast
export interface GlobalToastProps extends ToastProps, IconFontProps {
    /**
     * @language zh-CN
     * @description 提示文字
     * @defaultValue '成功文案'
     */
    /**
     * @language en-US
     * @description Prompt text
     * @defaultValue '成功文案'
     */
    text?: string;
    /**
     * @language zh-CN
     * @description 图标大小
     * @defaultValue cx(40)
     */
    /**
     * @language en-US
     * @description The size of the icon
     * @defaultValue cx(40)
     */
    size?: number;
    /**
     * @language zh-CN
     * @description 文字样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Style of text
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 图标样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Icon style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    iconfontStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 内容样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Content style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 是否显示图标
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Is the icon displayed
     * @defaultValue true
     */
    showIcon?: boolean;
}
export const GlobalToast: {
    show: (option: Omit<GlobalToastProps, 'show' | 'onFinish'>) => void;
    hide: () => void;
};

// IconFont
type IconFontName =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 'power'
    | 'arrow'
    | '+'
    | '-'
    | '.'
    | ':'
    | ','
    | 'celsius'
    | 'fahrenheit'
    | '%'
    | 'edit'
    | 'minus'
    | 'plus'
    | 'error'
    | 'warning'
    | 'correct'
    | 'backIos'
    | 'backAndroid'
    | 'moreV'
    | 'moreH'
    | 'close'
    | 'selected'
    | 'unselected'
    | 'selectedUnBordered'
    | 'volumeMute'
    | 'volumeMax'
    | 'volumeMuteBorder'
    | 'volumeMaxBorder'
    | 'help'
    | 'pen'
    | 'notice-sharp'
    | 'selected-sharp'
    | 'unselected-sharp'
    | 'volume-sharp-off'
    | 'volume-sharp-max'
    | 'volume-border-2'
    | 'volume-border-1'
    | 'volume-border-off'
    | 'help-sharp';

export interface IconFontProps {
    /**
     * @language zh-CN
     * @description Svg 视窗
     * @defaultValue '0 0 1024 1024'
     */
    /**
     * @language en-US
     * @description Svg viewport
     * @defaultValue '0 0 1024 1024'
     */
    viewBox?: string;
    /**
     * @language zh-CN
     * @description 是否使用 ART 形式
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Are art forms used
     * @defaultValue false
     */
    useART?: boolean;
    /**
     * @language zh-CN
     * @description 上升
     * @defaultValue 896
     */
    /**
     * @language en-US
     * @description ascent
     * @defaultValue 896
     */
    ascent?: number;
    /**
     * @language zh-CN
     * @description 下降
     * @defaultValue -128
     */
    /**
     * @language en-US
     * @description descent
     * @defaultValue -128
     */
    descent?: number;
    /**
     * @language zh-CN
     * @description 单位制
     * @defaultValue 1024
     */
    /**
     * @language en-US
     * @description unitsPerEm
     * @defaultValue 1024
     */
    unitsPerEm?: number;
    /**
     * @language zh-CN
     * @description 图标起始横坐标
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description Starting abscissa of Icon
     * @defaultValue 0
     */
    x?: number;
    /**
     * @language zh-CN
     * @description 图标起始纵坐标
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description Icon starting ordinate
     * @defaultValue 0
     */
    y?: number;
    /**
     * @language zh-CN
     * @description 图标宽度放大倍数
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Magnification of icon width
     * @defaultValue null
     */
    scaleX?: number;
    /**
     * @language zh-CN
     * @description 图标高度放大倍数
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Multiple of icon height
     * @defaultValue null
     */
    scaleY?: number;
    /**
     * @language zh-CN
     * @description 图标的放大倍数
     * @defaultValue 1.0
     */
    /**
     * @language en-US
     * @description Magnification of Icon
     * @defaultValue 1.0
     */
    scale?: number;
    /**
     * @language zh-CN
     * @description 多个实体渲染时, 空白间隔偏移量, 可以让渲染更紧凑些
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description When rendering multiple entities, the space offset can make the rendering more compact
     * @defaultValue 0
     */
    spaceOffset?: number;
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 图标颜色，fill 和 stroke 的缩写
     * @defaultValue "#000"
     */
    /**
     * @language en-US
     * @description Icon color. Its semantics is equivalent to the combination of fill and stroke
     * @defaultValue "#000"
     */
    color?: any;
    /**
     * @language zh-CN
     * @description Icon 尺寸，width / height 的缩写
     * @defaultValue 12
     */
    /**
     * @language en-US
     * @description Icon size. Its semantics is equivalent to the combination of width and height.
     * @defaultValue 12
     */
    size?: number;
    /**
     * @language zh-CN
     * @description 水平翻转
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Horizontal flip
     * @defaultValue false
     */
    hFlip?: boolean;
    /**
     * @language zh-CN
     * @description 垂直翻转
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Vertical flip
     * @defaultValue false
     */
    vFlip?: boolean;
    /**
     * @language zh-CN
     * @description 图标id，会从组件库默认图标里取，优先级小于 d
     * @defaultValue undefined
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>IconFontName</a>
     */
    /**
     * @language en-US
     * @description The name of the built-in icon of the component library, which can be obtained from the default icons of the component library. The priority is greater than d.
     * @defaultValue undefined
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>IconFontName</a>
     */
    name?: IconFontName;
    /**
     * @language zh-CN
     * @description 图标宽度，默认为 size 的值
     * @defaultValue 12
     */
    /**
     * @language en-US
     * @description Icon width. It is the value of size by default
     * @defaultValue 12
     */
    width?: number;
    /**
     * @language zh-CN
     * @description 图标高度，默认为 size 的值
     * @defaultValue 12
     */
    /**
     * @language en-US
     * @description Icon height. It is the value of size by default
     * @defaultValue 12
     */
    height?: number;
    /**
     * @language zh-CN
     * @description 填充色，若传递该值 color 会被忽略
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Fill color. If this value is passed, color will be ignored.
     * @defaultValue null
     */
    fill?: string;
    /**
     * @language zh-CN
     * @description 描边色
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Stroke color
     * @defaultValue null
     */
    stroke?: string;
    /**
     * @language zh-CN
     * @description 描边宽度
     * @defaultValue 1
     */
    /**
     * @language en-US
     * @description Stroke width
     * @defaultValue 1
     */
    strokeWidth?: number;
    /**
     * @language zh-CN
     * @description 连接处形状
     * @defaultValue "round"
     */
    /**
     * @language en-US
     * @description Shape of the stroke join
     * @defaultValue "round"
     */
    strokeJoin?: 'round' | 'miter' | 'bevel';
    /**
     * @language zh-CN
     * @description 首尾端形状
     * @defaultValue "round"
     */
    /**
     * @language en-US
     * @description Shape of the stroke cap
     * @defaultValue "round"
     */
    strokeCap?: 'round' | 'butt' | 'square';
    /**
     * @language zh-CN
     * @description 实虚线，数组内第一个元素为一段虚线的长度，第二个为间距
     * @defaultValue [0, 0]
     */
    /**
     * @language en-US
     * @description Stroke dash. The first element in the array is the length of a dashed line, and the second parameter is the spacing
     * @defaultValue [0, 0]
     */
    strokeDash?: number[];
    /**
     * @language zh-CN
     * @description 图标 path，svg 的 path
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description Icon path and svg path
     * @defaultValue ''
     */
    d?: string;
    /**
     * @language zh-CN
     * @description 路径透明度
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Path transparency
     * @defaultValue null
     */
    opacity?: string | number;
}
export class IconFont extends React.Component<IconFontProps> {}

// LinearGradient
export interface LinearGradientProps extends LinearGradientBackground {
    /**
     * @language zh-CN
     * @description 渐变 id
     * @defaultValue "linear-gradient"
     */
    /**
     * @language en-US
     * @description Gradient ID
     * @defaultValue "linear-gradient"
     */
    gradientId?: string;
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 该子节点会被添加渐变效果，一般为 Rect
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The child node is added with a gradient effect, usually rect
     * @defaultValue null
     */
    children?: React.ReactNode;
}
export class LinearGradient extends React.Component<LinearGradientProps> {}

// Modal
export interface ModalProps extends ModalNativeProps {
    /**
     * @language zh-CN
     * @description modal出现的动画效果
     * @defaultValue 'fade
     */
    /**
     * @language en-US
     * @description The animation effect of the mask
     * @defaultValue 'fade'
     */
    animationType?: 'fade' | 'none';
    /**
     * @language zh-CN
     * @description modal默认出现的位置
     * @defaultValue 'bottom'
     */
    /**
     * @language en-US
     * @description The default position of the mask
     * @defaultValue 'bottom'
     */
    alignContainer?: 'top' | 'center' | 'bottom';
    /**
     * @language zh-CN
     * @description 点击遮罩回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of clicking mask
     * @defaultValue () => {}
     */
    onMaskPress?: () => void;
    /**
     * @language zh-CN
     * @description modal 弹出内容的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Content style of modal pop-up
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    modalChildStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 是否有遮罩层
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether there is a mask layer
     * @defaultValue true
     */
    mask?: boolean;
    /**
     * @language zh-CN
     * @description 遮罩层样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Style of the mask layer
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    maskStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 是否只显示最后一个弹出的 modal
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether to show only the last pop-up modal
     * @defaultValue true
     */
    onlyLastModalVisible?: boolean;
    /**
     * @language zh-CN
     * @description 是否弹出键盘自适应
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to pop up the keyboard adaptive
     * @defaultValue false
     */
    useKeyboardView?: boolean;
    /**
     * @language zh-CN
     * @description 是否显示
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether it is visible or not
     * @defaultValue true
     */
    visible?: boolean;
    /**
     * @language zh-CN
     * @description 当前的 idx
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description current idx
     * @defaultValue undefined
     */
    activeIdx?: number;
    /**
     * @language zh-CN
     * @description Modal 组件销毁回调事件，一般用于在弹窗销毁后跳转新的 native 页面。platform: iOS
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Modal component destruction callback event is generally used to jump to a new native page after the pop-up window is destroyed. platform: iOS
     * @defaultValue undefined
     */
    onDismiss?: () => void;
}
export class Modal extends React.Component<ModalProps> {
    static Countdown: React.ElementType<PopUpCountdownProps>;
    static DatePicker: React.ElementType<PopupDatePickerProps>;
    static List: React.ElementType<PopUpListProps>;
    static Picker: React.ElementType<PopupPickerProps>;
    static render: (option: React.ReactNode, props: ModalProps) => void;
    static close: () => void;
}

// Motion
export interface MotionProps {
    /**
     * @language zh-CN
     * @description 内容样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 是否显示内容
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Display content?
     * @defaultValue undefined
     */
    show?: boolean;
    /**
     * @language zh-CN
     * @description 自定义内容
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Custom content
     * @defaultValue undefined
     */
    children?: React.ReactNode;
    /**
     * @language zh-CN
     * @description 动画显示时长
     * @defaultValue 300
     */
    /**
     * @language en-US
     * @description Animation display duration
     * @defaultValue 300
     */
    showDuration?: number;
    /**
     * @language zh-CN
     * @description 动画隐藏时长
     * @defaultValue 300
     */
    /**
     * @language en-US
     * @description Animation hide duration
     * @defaultValue 300
     */
    hideDuration?: number;
    /**
     * @language zh-CN
     * @description 动画显示回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Animation display callback
     * @defaultValue () => {}
     */
    onShow?: () => void;
    /**
     * @language zh-CN
     * @description 动画隐藏回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Animation hide callback
     * @defaultValue () => {}
     */
    onHide?: () => void;
    /**
     * @language zh-CN
     * @description 动画配置参数
     * @defaultValue { duration: 300, delay: 0, isInteraction: true, useNativeDriver: true }
     */
    /**
     * @language en-US
     * @description Animation configuration parameters
     * @defaultValue { duration: 300, delay: 0, isInteraction: true, useNativeDriver: true }
     */
    animationConfig?: {
        duration?: number;
        delay?: number;
        isInteraction?: boolean;
        useNativeDriver?: boolean;
    };
}
export interface MotionFadeProps extends MotionProps {
    /**
     * @language zh-CN
     * @description 动画不透明度
     * @defaultValue 1
     */
    /**
     * @language en-US
     * @description Animation opacity
     * @defaultValue 1
     */
    fadeOpacity?: number;
}
export interface MotionPullUpProps extends MotionProps {
    /**
     * @language zh-CN
     * @description 下拉的高度
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Height of pull down
     * @defaultValue undefined
     */
    dropHeight?: number;
}
export interface MotionScaleFadeInProps extends MotionProps {
    /**
     * @language zh-CN
     * @description 初始缩放倍数
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description Initial zoom factor
     * @defaultValue 0
     */
    initScale?: number;
    /**
     * @language zh-CN
     * @description 动画结束缩放倍数
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description Animation end zoom multiple
     * @defaultValue 0
     */
    finalScale?: number;
    /**
     * @language zh-CN
     * @description 是否竖直居中
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Is it vertically centered
     * @defaultValue true
     */
    isAlign?: boolean;
    /**
     * @language zh-CN
     * @description 向左平移的距离，tips 气泡模拟 transform-origin 属性
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The distance to the left, the tips bubble simulates the transform origin attribute
     * @defaultValue null
     */
    width?: number;
    /**
     * @language zh-CN
     * @description 向上平移的距离，tips气泡模拟transform-origin属性
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Up translation distance, tips bubble simulates transform origin attribute
     * @defaultValue null
     */
    height?: number;
}
export interface MotionScalePullDownProps extends MotionProps {
    /**
     * @language zh-CN
     * @description 初始缩放倍数
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description Initial zoom factor
     * @defaultValue 0
     */
    initScale?: number;
    /**
     * @language zh-CN
     * @description 是否竖直居中
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Is it vertically centered
     * @defaultValue true
     */
    isAlign?: boolean;
}
export interface MotionPushDownProps extends MotionProps {
    /**
     * @language zh-CN
     * @description 下拉的高度
     * @defaultValue 200
     */
    /**
     * @language en-US
     * @description Height of pull down
     * @defaultValue 200
     */
    dropHeight?: number;
    /**
     * @language zh-CN
     * @description 是否竖直居中
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Is it vertically centered
     * @defaultValue true
     */
    isAlign?: boolean;
}
export interface MotionToastProps extends Omit<MotionProps, 'onHide'> {
    /**
     * @language zh-CN
     * @description 初始缩放倍数
     * @defaultValue 0.5
     */
    /**
     * @language en-US
     * @description Initial zoom factor
     * @defaultValue 0.5
     */
    initScale?: number;
    /**
     * @language zh-CN
     * @description 动画结束回调
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Animation end callback
     * @defaultValue undefined
     */
    onFinish?: () => void;
}
export class Motion extends React.Component<MotionProps> {
    static Fade: React.ElementType<MotionFadeProps>;
    static PullUp: React.ElementType<MotionPullUpProps>;
    static ScaleFadeIn: React.ElementType<MotionScaleFadeInProps>;
    static ScalePullDown: React.ElementType<MotionScalePullDownProps>;
    static PushDown: React.ElementType<MotionPushDownProps>;
    static Toast: React.ElementType<MotionToastProps>;
}

// Notification
export interface NotificationProps extends TouchableOpacityProps {
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue 'Notification'
     */
    /**
     * @language en-US
     * @description Test identification
     * @defaultValue 'Notification'
     */
    accessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 主题配置
     * @defaultValue { background: '#fff', text: '#495054', iconColor: undefined, successIcon: undefined, warningIcon: undefined, errorIcon: undefined, closeIcon: '#81828B' }
     */
    /**
     * @language en-US
     * @description Theme configuration
     * @defaultValue { background: '#fff', text: '#495054', iconColor: undefined, successIcon: undefined, warningIcon: undefined, errorIcon: undefined, closeIcon: '#81828B' }
     */
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
    /**
     * @language zh-CN
     * @description Show notification bar
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Show notification bar
     * @defaultValue false
     */
    show?: boolean;
    /**
     * @language zh-CN
     * @description 通知栏自定义的图标路径
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Custom icon path for notification bar
     * @defaultValue undefined
     */
    icon?: string;
    /**
     * @language zh-CN
     * @description 通知栏文案后面的图标路径
     * @defaultValue 'M329.557333 281.9072a32.8704 32.8704 0 0 1 0.887467 0.853333l177.527467 178.449067 161.6896-171.281067a33.1776 33.1776 0 0 1 47.581866-0.682666l0.682667 0.682666a34.133333 34.133333 0 0 1 0.682667 47.581867l-162.474667 172.100267 162.269867 163.157333a34.133333 34.133333 0 0 1 0.750933 47.377067l-0.853333 0.9216a32.8704 32.8704 0 0 1-46.455467 1.604266l-0.887467-0.853333-161.6896-162.577067-155.7504 165.034667a33.1776 33.1776 0 0 1-46.865066 1.365333l-1.365334-1.365333a34.133333 34.133333 0 0 1-0.682666-47.581867l156.501333-165.853866L282.999467 331.776a34.133333 34.133333 0 0 1-0.750934-47.342933l0.853334-0.9216a32.8704 32.8704 0 0 1 46.455466-1.604267z'
     */
    /**
     * @language en-US
     * @description Path notification icon behind the copybar
     * @defaultValue 'M329.557333 281.9072a32.8704 32.8704 0 0 1 0.887467 0.853333l177.527467 178.449067 161.6896-171.281067a33.1776 33.1776 0 0 1 47.581866-0.682666l0.682667 0.682666a34.133333 34.133333 0 0 1 0.682667 47.581867l-162.474667 172.100267 162.269867 163.157333a34.133333 34.133333 0 0 1 0.750933 47.377067l-0.853333 0.9216a32.8704 32.8704 0 0 1-46.455467 1.604266l-0.887467-0.853333-161.6896-162.577067-155.7504 165.034667a33.1776 33.1776 0 0 1-46.865066 1.365333l-1.365334-1.365333a34.133333 34.133333 0 0 1-0.682666-47.581867l156.501333-165.853866L282.999467 331.776a34.133333 34.133333 0 0 1-0.750934-47.342933l0.853334-0.9216a32.8704 32.8704 0 0 1 46.455466-1.604267z'
     */
    backIcon?: string;
    /**
     * @language zh-CN
     * @description 通知栏类型
     * @defaultValue 'warning'
     */
    /**
     * @language en-US
     * @description Type of notification bar
     * @defaultValue 'warning'
     */
    variant?: 'success' | 'warning' | 'error';
    /**
     * @language zh-CN
     * @description 是否显示关闭按钮。若为false，则会在 autoCloseTime 后自动触发 onClose 回调
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether the close button is displayed. If false, the onclose callback is automatically triggered after autoCloseTime
     * @defaultValue true
     */
    enableClose?: boolean;
    /**
     * @language zh-CN
     * @description 自动关闭时间。需配合 enableClose: false 使用
     * @defaultValue 1500
     */
    /**
     * @language en-US
     * @description Auto off time. It should be used with enableclose: false
     * @defaultValue 1500
     */
    autoCloseTime?: number;
    /**
     * @language zh-CN
     * @description 通知栏文案
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description Notice board copy
     * @defaultValue ''
     */
    message: string;
    /**
     * @language zh-CN
     * @description 关闭回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Close callback
     * @defaultValue () => {}
     */
    onClose?: () => void;
    /**
     * @language zh-CN
     * @description Notification 动画配置，参考 PushDown 属性
     * @types <a target='_blank' href='https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/index.d.ts#L563'>MotionProps<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description For notification animation configuration, refer to pushdown property
     * @types <a target='_blank' href='https://github.com/DefinitelyTyped/DefinitelyTyped/blob/15d697b0e21723a4c284a837cddc9c35e86a85a3/types/tuya-panel-kit/index.d.ts#L563'>MotionProps<ViewStyle></a>
     * @defaultValue {}
     */
    motionConfig?: MotionProps;
    /**
     * @language zh-CN
     * @description 动画样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Motion style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    motionStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 图片资源
     * @types <a target="_blank" href="https://reactnative.dev/docs/image#source">ImageSourcePropType</a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Image source
     * @types <a target="_blank" href="https://reactnative.dev/docs/image#source">ImageSourcePropType</a>
     * @defaultValue null
     */
    imageSource?: ImageSourcePropType;
    /**
     * @language zh-CN
     * @description 图片样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/image-style-props">StyleProp<ImageStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Image style
     * @types <a target="_blank" href="https://reactnative.dev/docs/image-style-props">StyleProp<ImageStyle></a>
     * @defaultValue null
     */
    imageStyle?: StyleProp<ImageStyle>;
    /**
     * @language zh-CN
     * @description 文案后面图标大小
     * @defaultValue 24
     */
    /**
     * @language en-US
     * @description Size icon behind copy
     * @defaultValue 24
     */
    backIconSize?: number;
    /**
     * @language zh-CN
     * @description 文案后面图标是否垂直居中
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Is the icon behind the copy centered vertically
     * @defaultValue false
     */
    backIconCenter?: boolean;
}
// tslint:disable-next-line no-unnecessary-class
export class Notification {
    static show: (option: NotificationProps) => void;
    static hide: () => void;
}

// NotificationLegacy
export interface NotificationLegacyProps extends TouchableOpacityProps {
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue 'NotificationLegacy'
     */
    /**
     * @language en-US
     * @description Test identification
     * @defaultValue 'NotificationLegacy'
     */
    accessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 主题配置
     * @defaultValue { background: '#fff', text: '#495054', iconColor: undefined, successIcon: undefined, warningIcon: undefined, errorIcon: undefined, closeIcon: '#81828B' }
     */
    /**
     * @language en-US
     * @description Theme configuration
     * @defaultValue { background: '#fff', text: '#495054', iconColor: undefined, successIcon: undefined, warningIcon: undefined, errorIcon: undefined, closeIcon: '#81828B' }
     */
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
    /**
     * @language zh-CN
     * @description 通知栏自定义的图标路径
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Custom icon path for notification bar
     * @defaultValue undefined
     */
    icon?: string;
    /**
     * @language zh-CN
     * @description 通知栏类型
     * @defaultValue 'warning'
     */
    /**
     * @language en-US
     * @description Type of notification bar
     * @defaultValue 'warning'
     */
    variant?: 'success' | 'warning' | 'error';
    /**
     * @language zh-CN
     * @description 是否显示关闭按钮。若为false，则会在 autoCloseTime 后自动触发 onClose 回调
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether the close button is displayed. If false, the onclose callback is automatically triggered after autoCloseTime
     * @defaultValue true
     */
    enableClose?: string;
    /**
     * @language zh-CN
     * @description 自动关闭时间。需配合 enableClose: false 使用
     * @defaultValue 1500
     */
    /**
     * @language en-US
     * @description Auto off time. It should be used with enableClose: false
     * @defaultValue 1500
     */
    autoCloseTime?: number;
    /**
     * @language zh-CN
     * @description 通知栏文案
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description Notice board copy
     * @defaultValue ''
     */
    message?: string;
    /**
     * @language zh-CN
     * @description 子元素
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Sub element
     * @defaultValue null
     */
    children?: React.ReactNode;
    /**
     * @language zh-CN
     * @description 关闭回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Close callback
     * @defaultValue () => {}
     */
    onClose?: () => void;
}
export class NotificationLegacy extends React.Component<NotificationLegacyProps> {}

// PickerView
export interface PickerViewIOSProps extends PickerIOSProps {
    /**
     * @language zh-CN
     * @description Picker是否循环滚动
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to simulate an endless loop
     * @defaultValue false
     */
    loop?: boolean;
    /**
     * @language zh-CN
     * @description 自定义内容
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description customized contend
     * @defaultValue undefined
     */
    children: React.ReactNode;
    /**
     * @language zh-CN
     * @description 主题配置
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Theme configuration
     * @defaultValue {}
     */
    theme?: {
        fontSize?: number;
        fontColor?: string;
        dividerColor?: string;
        unitFontSize?: number;
        unitFontColor?: string;
    };
}
export interface PickerViewProps extends Omit<PickerIOSProps, 'onValueChange' | 'selectedValue'>, PickerProps {
    /**
     * @language zh-CN
     * @description Picker是否循环滚动
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to simulate an endless loop
     * @defaultValue false
     */
    loop?: boolean;
    /**
     * @language zh-CN
     * @description 选中的数值
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Value matching value of one of the items
     * @defaultValue undefined
     */
    selectedValue?: string;
    /**
     * @language zh-CN
     * @description 数值改变回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback for when an item is selected.
     * @defaultValue () => {}
     */
    onValueChange?: (value: string | number, index: number) => void;
    /**
     * @language zh-CN
     * @description 测试标示
     * @defaultValue 'PickerView'
     */
    /**
     * @language en-US
     * @description Test Flag
     * @defaultValue 'PickerView'
     */
    accessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 选项的文字颜色
     * @defaultValue '#cccccc'
     */
    /**
     * @language en-US
     * @description Text color for Item
     * @defaultValue '#cccccc'
     */
    itemTextColor?: string;
    /**
     * @language zh-CN
     * @description 选项选中的文字颜色
     * @defaultValue 'black'
     */
    /**
     * @language en-US
     * @description The color of the text selected
     * @defaultValue 'black'
     */
    selectedItemTextColor?: string;
    /**
     * @language zh-CN
     * @description 分割线颜色
     * @defaultValue '#cccccc'
     */
    /**
     * @language en-US
     * @description Divider color of the Picker option
     * @defaultValue '#cccccc'
     */
    dividerColor?: string;
    /**
     * @language zh-CN
     * @description 可视区域项目个数
     * @defaultValue 8
     */
    /**
     * @language en-US
     * @description The number of items in the visible area
     * @defaultValue 8
     */
    visibleItemCount?: number;
    /**
     * @language zh-CN
     * @description 项目文字大小
     * @defaultValue 20
     */
    /**
     * @language en-US
     * @description Text size of items
     * @defaultValue 20
     */
    textSize?: number;
    /**
     * @language zh-CN
     * @description 项目对齐方式
     * @defaultValue 'center'
     */
    /**
     * @language en-US
     * @description Alignment method of items
     * @defaultValue 'center'
     */
    itemAlign?: 'flex-end' | 'center' | 'flex-start' | 'baseline' | 'stretch';
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 自定义内容
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description customized contend
     * @defaultValue undefined
     */
    children: React.ReactNode;
    /**
     * @language zh-CN
     * @description 主题配置
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Theme configuration
     * @defaultValue {}
     */
    theme?: {
        fontSize?: number;
        fontColor?: string;
        dividerColor?: string;
        unitFontSize?: number;
        unitFontColor?: string;
    };
}
export class Picker extends React.Component<PickerViewProps> {
    static Item: React.ElementType;
}

// Popup
export interface PopupProps extends Omit<ModalProps, 'onMaskPress'> {
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    wrapperStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description Popup 头部标题
     * @defaultValue "Modal"
     */
    /**
     * @language en-US
     * @description Popup header title
     * @defaultValue "Modal"
     */
    title?: string | string[] | React.ReactNode;
    /**
     * @language zh-CN
     * @description 副标题
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description SubTitle
     * @defaultValue ''
     */
    subTitle?: string;
    /**
     * @language zh-CN
     * @description Popup 头部标题样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Popup header title style
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    titleTextStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description Popup 头部样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Popup header style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    titleWrapperStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 头部栏开关状态，若该值存在则头部栏将会显示 Switch 按钮
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description The status of the header bar button. If the value exists, the header bar will display the Switch button.
     * @defaultValue undefined
     */
    switchValue?: boolean;
    /**
     * @language zh-CN
     * @description 头部栏开关切换回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of switching the header bar button
     * @defaultValue () => {}
     */
    onSwitchValueChange?: (value: boolean) => void;
    /**
     * @language zh-CN
     * @description 取消点击回调
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Callback of clicking the cancel button
     * @defaultValue null
     */
    onCancel?: () => void;
    /**
     * @language zh-CN
     * @description 确认点击回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of clicking the confirm button
     * @defaultValue () => {}
     */
    onConfirm?: (data: any, args: { close: () => void }) => void;
    /**
     * @language zh-CN
     * @description 取消文案
     * @defaultValue "Cancel"
     */
    /**
     * @language en-US
     * @description Cancel Text
     * @defaultValue "Cancel"
     */
    cancelText?: string;
    /**
     * @language zh-CN
     * @description 确认文案
     * @defaultValue "Confirm"
     */
    /**
     * @language en-US
     * @description Confirm Text
     * @defaultValue "Confirm"
     */
    confirmText?: string;
    /**
     * @language zh-CN
     * @description 取消文案样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Cancellation text style
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    cancelTextStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 确认文案样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Confirmation text style
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    confirmTextStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 自定义底部
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Custom footer
     * @defaultValue null
     */
    footer?: React.ReactNode;
    /**
     * @language zh-CN
     * @description 底部样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Footer container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    footerWrapperStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description footer 容器显示状态，显示全部、只显示确认、只显示取消
     * @defaultValue 'both'
     */
    /**
     * @language en-US
     * @description footer container display status.
     * @defaultValue 'both'
     */
    footerType?: 'both' | 'singleConfirm' | 'singleCancel';
    /**
     * @language zh-CN
     * @description 动画类型
     * @defaultValue "PullUp"
     */
    /**
     * @language en-US
     * @description Animation type
     * @defaultValue "PullUp"
     */
    motionType?: 'none' | 'ScaleFadeIn' | 'Fade' | 'PullUp' | 'ScalePullDown';
    /**
     * @language zh-CN
     * @description 动画配置
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2438">MotionScaleFadeInProps</a> | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2430">MotionFadeProps</a> | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2434">MotionPullUpProps</a> | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2446">MotionScalePullDownProps</a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Painting configuration
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2438">MotionScaleFadeInProps</a> | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2430">MotionFadeProps</a> | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2434">MotionPullUpProps</a> | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2446">MotionScalePullDownProps</a>
     * @defaultValue {}
     */
    motionConfig?: MotionScaleFadeInProps | MotionFadeProps | MotionPullUpProps | MotionScalePullDownProps;
    /**
     * @language zh-CN
     * @description 是否垂直居中
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Is it vertically centered
     * @defaultValue false
     */
    isAlign?: boolean;
    /**
     * @language zh-CN
     * @description 返回 Icon 颜色
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Back icon color
     * @defaultValue null
     */
    backIconColor?: string;
    /**
     * @language zh-CN
     * @description 返回回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of back
     * @defaultValue () => {}
     */
    onBack?: (args: { close: () => void }) => void;
    /**
     * @language zh-CN
     * @description 返回按钮
     * @defaultValue 'Back'
     */
    /**
     * @language en-US
     * @description Back Text
     * @defaultValue 'Back'
     */
    backText?: string;
    /**
     * @language zh-CN
     * @description 是否显示返回按钮
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Is the return button displayed
     * @defaultValue false
     */
    showBack?: boolean;
    /**
     * @language zh-CN
     * @description 遮罩层点击
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Mask layer Click
     * @defaultValue () => {}
     */
    onMaskPress?: (args: { close: () => void }) => void;
    /**
     * @language zh-CN
     * @description 样式配置
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2925">theme</a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Style configuration
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2925">theme</a>
     * @defaultValue {}
     */
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

export interface ListDate extends TYFlatListData {
    /**
     * @language zh-CN
     * @description 列表项各部分样式
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description List item style
     * @defaultValue {}
     */
    styles?: {
        container?: StyleProp<ViewStyle>;
        content?: StyleProp<ViewStyle>;
        contentLeft?: StyleProp<ViewStyle>;
        contentCenter?: StyleProp<ViewStyle>;
        contentRight?: StyleProp<ViewStyle>;
        title?: StyleProp<TextStyle>;
        subTitle?: StyleProp<TextStyle>;
    };
    /**
     * @language zh-CN
     * @description 列表标题文案
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description List title
     * @defaultValue undefined
     */
    title?: string;
    /**
     * @language zh-CN
     * @description 列表项图标
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description List item icon
     * @defaultValue undefined
     */
    Icon?: React.ElementType;
    /**
     * @language zh-CN
     * @description 列表项类型值
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description List item type value
     * @defaultValue undefined
     */
    value: any;
}
export interface PopUpListProps extends PopupProps, Omit<TYFlatListProps<{}>, 'renderItem' | 'data'> {
    /**
     * @language zh-CN
     * @description 列表弹窗样式
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description List pop up style
     * @defaultValue null
     */
    listWrapperStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 数据源
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2770">ListDate[]</a>
     * @defaultValue []
     */
    /**
     * @language en-US
     * @description DataSource
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2770">ListDate[]</a>
     * @defaultValue []
     */
    dataSource?: ListDate[];
    /**
     * @language zh-CN
     * @description 列表选择弹出层的类型
     * @defaultValue 'radio'
     */
    /**
     * @language en-US
     * @description List selection popup type
     * @defaultValue 'radio'
     */
    type?: 'radio' | 'switch' | 'arrow';
    /**
     * @language zh-CN
     * @description 最大列表数量
     * @defaultValue 5
     */
    /**
     * @language en-US
     * @description Maximum number of lists
     * @defaultValue 5
     */
    maxItemNum?: number;
    /**
     * @language zh-CN
     * @description 设置type为radio时选中的图标
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The icon selected when type is set to radio
     * @defaultValue null
     */
    selectedIcon?: React.ReactNode;
    /**
     * @language zh-CN
     * @description 设置 type 为 radio 时选中图标的颜色
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description Color of the icon selected when type is set to radio
     * @defaultValue ''
     */
    iconTintColor?: string;
    /**
     * @language zh-CN
     * @description 内容是否居中
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Whether the content is centered
     * @defaultValue null
     */
    contentCenter?: boolean;
    /**
     * @language zh-CN
     * @description 副标题
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description SubTitle
     * @defaultValue ''
     */
    subTitle?: string;
    /**
     * @language zh-CN
     * @description 选中的值
     * @defaultValue -1
     */
    /**
     * @language en-US
     * @description The selected value. Multiple selection type is array, and single selection is string or number
     * @defaultValue -1
     */
    value?: string | number | string[] | number[];
    /**
     * @language zh-CN
     * @description 列表弹窗样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description List pop up style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    listItemStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 选中的回调函数
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of selecting the event
     * @defaultValue () => {}
     */
    onSelect?: (value: string | number, params?: { close: () => void }) => void;
    /**
     * @language zh-CN
     * @description 值改变的回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of value change
     * @defaultValue () => {}
     */
    _onDataChange?: (value?: string | string[]) => void;
    /**
     * @language zh-CN
     * @description 各部分的样式
     * @types <a href="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2969">styles</a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Style of each part
     * @types <a href="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2969">styles</a>
     * @defaultValue {}
     */
    styles?: {
        container?: StyleProp<ViewStyle>;
        content?: StyleProp<ViewStyle>;
        title?: StyleProp<TextStyle>;
        contentRight?: StyleProp<ViewStyle>;
    };
}
export interface PopUpCountdownProps extends PopupProps {
    /**
     * @language zh-CN
     * @description 倒计时弹框样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Countdown pop-up style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    countdownWrapperStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 是否只显示分钟
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to show only minutes
     * @defaultValue false
     */
    onlyone?: boolean;
    /**
     * @language zh-CN
     * @description 最小值
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description The minimum value of the countdown, in minutes
     * @defaultValue 0
     */
    min?: number;
    /**
     * @language zh-CN
     * @description 最大值
     * @defaultValue 1440
     */
    /**
     * @language en-US
     * @description The maximum value of the countdown, in minutes
     * @defaultValue 1440
     */
    max?: number;
    /**
     * @language zh-CN
     * @description 步长
     * @defaultValue 1
     */
    /**
     * @language en-US
     * @description Step length of the countdown
     * @defaultValue 1
     */
    step?: number;
    /**
     * @language zh-CN
     * @description 倒计时具体值
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Value
     * @defaultValue undefined
     */
    value: number;
    /**
     * @language zh-CN
     * @description picker字体颜色
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description picker font color
     * @defaultValue null
     */
    pickerFontColor?: string;
    /**
     * @language zh-CN
     * @description picker单位颜色
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Picker unit color
     * @defaultValue null
     */
    pickerUnitColor?: string;
    /**
     * @language zh-CN
     * @description 小时文本
     * @defaultValue 'Hour'
     */
    /**
     * @language en-US
     * @description Hour text
     * @defaultValue 'Hour'
     */
    hourText?: string;
    /**
     * @language zh-CN
     * @description 分钟文本
     * @defaultValue 'Minute'
     */
    /**
     * @language en-US
     * @description Minute text
     * @defaultValue 'Minute'
     */
    minuteText?: string;
    /**
     * @language zh-CN
     * @description 值更改回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Value change callback
     * @defaultValue () => {}
     */
    onValueChange?: (data?: { hour?: number; minute?: number; value?: number }) => void;
    /**
     * @language zh-CN
     * @description 值更改回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Value change callback
     * @defaultValue () => {}
     */
    _onDataChange?: (date: Date) => void;
    /**
     * @language zh-CN
     * @description 小时picker样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Hour picker style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    hourPickerStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 小时单位样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Hour unit style
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    hourUnitStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 分钟 picker 样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Minute picker style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    minutePickerStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 分钟单位样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Minute unit style
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    minuteUnitStyle?: StyleProp<TextStyle>;
}
export interface PopupDatePickerProps extends PopupProps, Omit<DatePickerProps, 'theme' | 'children'> {
    /**
     * @language zh-CN
     * @description 日期更改回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Value change callback
     * @defaultValue () => {}
     */
    _onDataChange?: (date: Date) => void;
    /**
     * @language zh-CN
     * @description 子组件
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Sub elements
     * @defaultValue null
     */
    children?: React.ReactNode;
}
export interface PopupNumberSelectorProps
    extends Omit<PopupProps, 'onLayout' | 'animationType'>,
        Omit<SliderProps, 'theme' | 'type'> {
    /**
     * @language zh-CN
     * @description numberSelector弹框样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Numberselector pop-up style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    numberSelectorWrapperStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 数值选择弹出层类型
     * @defaultValue 'basic'
     */
    /**
     * @language en-US
     * @description alue selection popup type
     * @defaultValue 'basic'
     */
    type?: 'basic' | 'slider';
    /**
     * @language zh-CN
     * @description 最小值
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description The minimum available value
     * @defaultValue 0
     */
    min?: number;
    /**
     * @language zh-CN
     * @description 最大值
     * @defaultValue 100
     */
    /**
     * @language en-US
     * @description The maximum available value
     * @defaultValue 100
     */
    max?: number;
    /**
     * @language zh-CN
     * @description 步长
     * @defaultValue 1
     */
    /**
     * @language en-US
     * @description Step length
     * @defaultValue 1
     */
    step?: number;
    /**
     * @language zh-CN
     * @description 倍数
     * @defaultValue
     */
    /**
     * @language en-US
     * @description Multiple
     * @defaultValue 0
     */
    scale?: number;
    /**
     * @language zh-CN
     * @description 具体值
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Value
     * @defaultValue undefined
     */
    value: number;
    /**
     * @language zh-CN
     * @description 值更改回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Value change callback
     * @defaultValue () => {}
     */
    onValueChange?: (value: number) => void;
    /**
     * @language zh-CN
     * @description 值更改回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Value change callback
     * @defaultValue () => {}
     */
    _onDataChange?: (value: number) => void;
    /**
     * @language zh-CN
     * @description 长按 + - 时每隔多久改变一次值（单位 ms）
     * @defaultValue 250
     */
    /**
     * @language en-US
     * @description How often does the value change (in MS) when pressing + - for a long time
     * @defaultValue 250
     */
    valueChangeTime?: number;
    /**
     * @language zh-CN
     * @description 是否匀速加减值
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to add impairment at a constant speed
     * @defaultValue false
     */
    isValueChangeUniform?: boolean;
}
export interface PickerDataProps {
    /**
     * @language zh-CN
     * @description 标签
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Label
     * @defaultValue null
     */
    label: string;
    /**
     * @language zh-CN
     * @description 具体值
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Value
     * @defaultValue null
     */
    value: string;
}
export interface PopupPickerProps extends Omit<PopupProps, 'onConfirm'>, Omit<PickerViewProps, 'theme' | 'children'> {
    /**
     * @language zh-CN
     * @description 单位标志
     * @defaultValue []
     */
    /**
     * @language en-US
     * @description Picker label
     * @defaultValue []
     */
    label?: string | string[];
    /**
     * @language zh-CN
     * @description picker 弹框边距
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description The spacing on both sides of the picker
     * @defaultValue 0
     */
    spacing?: number;
    /**
     * @language zh-CN
     * @description 单位标志相对位置
     * @defaultValue 22
     */
    /**
     * @language en-US
     * @description The offset of the label from picker
     * @defaultValue 22
     */
    labelOffset?: number;
    /**
     * @language zh-CN
     * @description picker 弹框样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Picker wrapper style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    pickerWrapperStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description picker 内容样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Picker style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    pickerStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 具体值
     * @defaultValue []
     */
    /**
     * @language en-US
     * @description Value
     * @defaultValue []
     */
    value?: string | number | boolean | string[];
    /**
     * @language zh-CN
     * @description 数据源
     * @types <a targe="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L3022">PickerDataProps[][] | PickerDataProps[]</a>
     * @defaultValue []
     */
    /**
     * @language en-US
     * @description DataSource
     * @types <a targe="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L3022">PickerDataProps[][] | PickerDataProps[]</a>
     * @defaultValue []
     */
    dataSource?: PickerDataProps[][] | PickerDataProps[];
    /**
     * @language zh-CN
     * @description 是否只需要一个 picker
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Is only one picker needed
     * @defaultValue true
     */
    singlePicker?: boolean;
    /**
     * @language zh-CN
     * @description picker字体颜色
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Picker font color
     * @defaultValue null
     */
    pickerFontColor?: string;
    /**
     * @language zh-CN
     * @description picker 单位颜色
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Picker unit color
     * @defaultValue null
     */
    pickerUnitColor?: string;
    /**
     * @language zh-CN
     * @description 值更改回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Value change callback
     * @defaultValue () => {}
     */
    onValueChange?: (newValue: string | number, idx: number) => void;
    /**
     * @language zh-CN
     * @description 值更改回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Value change callback
     * @defaultValue () => {}
     */
    _onDataChange?: (newValue: string | number, idx: number) => void;
    /**
     * @language zh-CN
     * @description 确认回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Confirm callback
     * @defaultValue () => {}
     */
    onConfirm?: (data: any, idx: number, args: { close: () => void }) => void;
}
export interface PopupTimerPickerProps extends PopupProps, Omit<TimerPickerProps, 'theme'> {}
export interface PopupCustomProps extends PopupProps {
    /**
     * @language zh-CN
     * @description 自定义内容
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Custom content
     * @defaultValue null
     */
    content: React.ReactNode;
}
export interface PopupTipsProps extends TipsProps, ModalProps {
    /**
     * @language zh-CN
     * @description Modal 弹出内容的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The style of modal pop-up content
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    modalChildStyle?: StyleProp<ViewStyle>;
}
export interface PopupToastProps extends ModalProps {
    /**
     * @language zh-CN
     * @description 文案内容
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description Message
     * @defaultValue ''
     */
    message?: string;
}
export interface PopupDropdownProps {
    /**
     * @language zh-CN
     * @description 数据源
     * @defaultValue []
     */
    /**
     * @language en-US
     * @description DataSource
     * @defaultValue []
     */
    data: Array<{
        key?: string;
        title?: string;
        value?: string;
    }>;
    /**
     * @language zh-CN
     * @description 选中回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Select callback
     * @defaultValue () => {}
     */
    onSelect?: (value?: number | string) => void;
    /**
     * @language zh-CN
     * @description 顶部边框宽度大小
     * @defaultValue 'normal'
     */
    /**
     * @language en-US
     * @description Top border width size
     * @defaultValue 'normal'
     */
    cornerSize?: 'small' | 'large' | 'normal';
    /**
     * @language zh-CN
     * @description 自定义顶部边框宽度大小
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description Custom top border width size
     * @defaultValue ''
     */
    customCornerSize?: string;
    /**
     * @language zh-CN
     * @description 弹框区域的位置
     * @defaultValue 'top'
     */
    /**
     * @language en-US
     * @description Location of the pop-up area
     * @defaultValue 'top'
     */
    cornerDirection?: 'top' | 'bottom' | 'left' | 'right';
    cornerDirectionValue?: string;
    cornerColor?: string;
    corner?: boolean;
    listStyle?: StyleProp<ViewStyle>;
    cornerStyle?: StyleProp<ViewStyle>;
    touchViewStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}
export class Popup extends React.Component<PopupProps> {
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
export interface GestureProps extends ViewProps {
    /**
     * @language zh-CN
     * @description 手势区域
     * @defaultValue 'box-only'
     */
    /**
     * @language en-US
     * @description Gesture area
     * @defaultValue 'box-only'
     */
    pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
    /**
     * @language zh-CN
     * @description 是否禁止滑动
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Is sliding prohibited
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 子元素
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Sub elements
     * @defaultValue null
     */
    children?: React.ReactNode;
}
export interface ProgressProps extends GestureProps {
    /**
     * @language zh-CN
     * @description 渐变 Id
     * @defaultValue "Progress"
     */
    /**
     * @language en-US
     * @description GradientId
     * @defaultValue "Progress"
     */
    gradientId?: string;
    /**
     * @language zh-CN
     * @description 进度条样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Progress bar style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 开始角度
     * @defaultValue 135
     */
    /**
     * @language en-US
     * @description The start degree. The degree of clockwise operation, starting from the three o’clock position.
     * @defaultValue 135
     */
    startDegree?: number;
    /**
     * @language zh-CN
     * @description 在开始的角度上增加的角度
     * @defaultValue 270
     */
    /**
     * @language en-US
     * @description The number of degrees added to the starting degree.
     * @defaultValue 270
     */
    andDegree?: number;
    /**
     * @language zh-CN
     * @description 最小值
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description The minimum value of the progress, in degrees.
     * @defaultValue 0
     */
    min?: number;
    /**
     * @language zh-CN
     * @description 最大值
     * @defaultValue 100
     */
    /**
     * @language en-US
     * @description The maximum value of the progress, in degrees.
     * @defaultValue 100
     */
    max?: number;
    /**
     * @language zh-CN
     * @description 步长
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description Step value
     * @defaultValue 0
     */
    stepValue?: number;
    /**
     * @language zh-CN
     * @description 大于具体值的不透明度
     * @defaultValue 1
     */
    /**
     * @language en-US
     * @description Opacity greater than the specific value.
     * @defaultValue 1
     */
    backStrokeOpacity?: number;
    /**
     * @language zh-CN
     * @description 小于具体值的不透明度
     * @defaultValue 1
     */
    /**
     * @language en-US
     * @description Opacity less than the specific value.
     * @defaultValue 1
     */
    foreStrokeOpacity?: number;
    /**
     * @language zh-CN
     * @description 进度条渲染的高度
     * @defaultValue 9
     */
    /**
     * @language en-US
     * @description The number of rendering lines of the progress bar.
     * @defaultValue 9
     */
    scaleHeight?: number;
    /**
     * @language zh-CN
     * @description 是否禁止滑动
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Is sliding prohibited
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 大于具体值的颜色
     * @defaultValue "#E5E5E5"
     */
    /**
     * @language en-US
     * @description Colors greater than specific values
     * @defaultValue "#E5E5E5"
     */
    backColor?: string;
    /**
     * @language zh-CN
     * @description 进度条小于具体值的颜色
     * @types string | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/bcd9b9272bcbe9e172409f2b0b0b9fa280fdb976/types/tuya-panel-kit/theme.d.ts#L1">StopsProps</a>[] | { [key: string]: string }
     * @defaultValue "#FF4800"
     */
    /**
     * @language en-US
     * @description Color of progress bar less than specific value
     * @types string | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/bcd9b9272bcbe9e172409f2b0b0b9fa280fdb976/types/tuya-panel-kit/theme.d.ts#L1">StopsProps</a>[] | { [key: string]: string }
     * @defaultValue "#FF4800"
     */
    foreColor?:
        | string
        | StopsProps[]
        | {
              [key: string]: string;
          };
    /**
     * @language zh-CN
     * @description 渐变起始点的 x 轴坐标
     * @defaultValue "0%"
     */
    /**
     * @language en-US
     * @description The x-axis coordinate of the starting point of gradient.
     * @defaultValue "0%"
     */
    x1?: string;
    /**
     * @language zh-CN
     * @description 渐变终点的 x 轴坐标
     * @defaultValue "100%"
     */
    /**
     * @language en-US
     * @description The x-axis coordinate of the ending point of gradient.
     * @defaultValue "100%"
     */
    x2?: string;
    /**
     * @language zh-CN
     * @description 渐变起始点的 y 轴坐标
     * @defaultValue "0%"
     */
    /**
     * @language en-US
     * @description The y-axis coordinate of the starting point of gradient.
     * @defaultValue "0%"
     */
    y1?: string;
    /**
     * @language zh-CN
     * @description 渐变终点的 y 轴坐标
     * @defaultValue "0%"
     */
    /**
     * @language en-US
     * @description The y-axis coordinate of the ending point of gradient.
     * @defaultValue "0%"
     */
    y2?: string;
    /**
     * @language zh-CN
     * @description 圆环中心自定义内容
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Custom content in the center of the ring.
     * @defaultValue null
     */
    renderCenterView?: React.ReactNode;
}
export interface ProgressBasicProps extends ProgressProps {
    /**
     * @language zh-CN
     * @description 手势区域
     * @defaultValue 'box-only'
     */
    /**
     * @language en-US
     * @description Gesture area
     * @defaultValue 'box-only'
     */
    pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
    /**
     * @language zh-CN
     * @description thumb 小圆球的填充色
     * @defaultValue "#fff"
     */
    /**
     * @language en-US
     * @description Filling color of thumb ball
     * @defaultValue "#fff"
     */
    thumbFill?: string;
    /**
     * @language zh-CN
     * @description thumb 小圆球边框宽度
     * @defaultValue 2
     */
    /**
     * @language en-US
     * @description Border width of thumb ball
     * @defaultValue 2
     */
    thumbStrokeWidth?: number;
    /**
     * @language zh-CN
     * @description thumb 小圆球的边框色
     * @defaultValue "#fff"
     */
    /**
     * @language en-US
     * @description The border color of thumb ball
     * @defaultValue "#fff"
     */
    thumbStroke?: string;
    /**
     * @language zh-CN
     * @description thumb小圆球的半径
     * @defaultValue 2
     */
    /**
     * @language en-US
     * @description Radius of thumb ball
     * @defaultValue 2
     */
    thumbRadius?: number;
    /**
     * @language zh-CN
     * @description 是否需要最大值的 thumb
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to set the progress thumb of the maximum value.
     * @defaultValue false
     */
    needMaxCircle?: boolean;
    /**
     * @language zh-CN
     * @description 是否需要最小值的 thumb
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to set the progress thumb of the minimum value.
     * @defaultValue false
     */
    needMinCircle?: boolean;
    /**
     * @language zh-CN
     * @description 轨道不满 360 度开始的圆环颜色
     * @defaultValue "#FF4800"
     */
    /**
     * @language en-US
     * @description The color of the ring at the starting point when the track is less than 360 degrees.
     * @defaultValue "#FF4800"
     */
    startColor?: string;
    /**
     * @language zh-CN
     * @description 轨道不满 360 度开始的圆环颜色
     * @defaultValue "#E5E5E5"
     */
    /**
     * @language en-US
     * @description The color of the ring at the ending point when the track is less than 360 degrees.
     * @defaultValue "#E5E5E5"
     */
    endColor?: string;
    /**
     * @language zh-CN
     * @description 具体值
     * @defaultValue 50
     */
    /**
     * @language en-US
     * @description value
     * @defaultValue 50
     */
    value?: number;
    /**
     * @language zh-CN
     * @description 值改变的回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of value change
     * @defaultValue () => {}
     */
    onValueChange?: (value: number) => void;
    /**
     * @language zh-CN
     * @description 滑动结束回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of ending the slide.
     * @defaultValue () => {}
     */
    onSlidingComplete?: (value: number) => void;
}
export interface SpaceProps extends ProgressProps {
    /**
     * @language zh-CN
     * @description 进度条渲染线条的数目
     * @defaultValue 120
     */
    /**
     * @language en-US
     * @description The number of rendering lines of the progress bar.
     * @defaultValue 120
     */
    scaleNumber?: number;
    /**
     * @language zh-CN
     * @description 具体值
     * @defaultValue 50
     */
    /**
     * @language en-US
     * @description Value
     * @defaultValue 50
     */
    value?: number;
    /**
     * @language zh-CN
     * @description 进度条块状的宽度
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description Width of progress bar block
     * @defaultValue 0
     */
    strokeWidth?: number;
    /**
     * @language zh-CN
     * @description 值改变的回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of value change
     * @defaultValue () => {}
     */
    onValueChange?: (value: number) => void;
    /**
     * @language zh-CN
     * @description 滑动结束回调
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Callback of ending the slide.
     * @defaultValue undefined
     */
    onSlidingComplete?: (value: number) => void;
}
export interface DoubleProps extends ProgressProps {
    /**
     * @language zh-CN
     * @description 最大值
     * @defaultValue 25
     */
    /**
     * @language en-US
     * @description Max value
     * @defaultValue 25
     */
    maxValue?: number;
    /**
     * @language zh-CN
     * @description 最小值
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description Min value
     * @defaultValue 0
     */
    minValue?: number;
    /**
     * @language zh-CN
     * @description 值改变的回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of value change
     * @defaultValue () => {}
     */
    onValueChange?: (argus: { minValue: number; maxValue: number }) => void;
    /**
     * @language zh-CN
     * @description 滑动结束回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of ending the slide.
     * @defaultValue () => {}
     */
    onSlidingComplete?: (argus: { minValue: number; maxValue: number }) => void;
    /**
     * @language zh-CN
     * @description 开始端 thumb 小圆球的填充色
     * @defaultValue "#fff"
     */
    /**
     * @language en-US
     * @description Fill color of thumb ball at the beginning of progress bar
     * @defaultValue "#fff"
     */
    minThumbFill?: string;
    /**
     * @language zh-CN
     * @description 开始端thumb小圆球的边框色
     * @defaultValue "#FF4800"
     */
    /**
     * @language en-US
     * @description The border color of the thumb ball at the beginning
     * @defaultValue "#FF4800"
     */
    minThumbStroke?: string;
    /**
     * @language zh-CN
     * @description 结束端thumb小圆球的填充色
     * @defaultValue "#fff"
     */
    /**
     * @language en-US
     * @description Fill color of the thumb ball at the end
     * @defaultValue "#fff"
     */
    thumbFill?: string;
    /**
     * @language zh-CN
     * @description thumb 小圆球边框宽度
     * @defaultValue 2
     */
    /**
     * @language en-US
     * @description Border width of thumb ball
     * @defaultValue 2
     */
    thumbStrokeWidth?: number;
    /**
     * @language zh-CN
     * @description 结束端thumb小圆球的边框色
     * @defaultValue "#FF4800"
     */
    /**
     * @language en-US
     * @description The border color of the thumb ball at the end
     * @defaultValue "#FF4800"
     */
    thumbStroke?: string;
    /**
     * @language zh-CN
     * @description thumb小圆球的半径
     * @defaultValue 3.5
     */
    /**
     * @language en-US
     * @description Radius of thumb ball
     * @defaultValue 3.5
     */
    thumbRadius?: number;
    /**
     * @language zh-CN
     * @description 轨道不满360度开始的圆环颜色
     * @defaultValue "#E5E5E5"
     */
    /**
     * @language en-US
     * @description The color of the ring that begins at less than 360 degrees
     * @defaultValue "#E5E5E5"
     */
    startColor?: string;
    /**
     * @language zh-CN
     * @description 轨道不满360度结束的圆环颜色
     * @defaultValue "#E5E5E5"
     */
    /**
     * @language en-US
     * @description The color of the ring at the end of the track less than 360 degrees
     * @defaultValue "#E5E5E5"
     */
    endColor?: string;
}
export interface ComposeProps extends GestureProps {
    /**
     * @language zh-CN
     * @description 进度条样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Progress bar style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 具体值1
     * @defaultValue 50
     */
    /**
     * @language en-US
     * @description value1
     * @defaultValue 50
     */
    value1?: number;
    /**
     * @language zh-CN
     * @description 具体值2
     * @defaultValue 20
     */
    /**
     * @language en-US
     * @description value2
     * @defaultValue 20
     */
    value2?: number;
    /**
     * @language zh-CN
     * @description 进度条1开始角度
     * @defaultValue 165
     */
    /**
     * @language en-US
     * @description Starting angle of progress bar 1
     * @defaultValue 165
     */
    startDegree1?: number;
    /**
     * @language zh-CN
     * @description 进度条1在开始的角度上增加的角度
     * @defaultValue 215
     */
    /**
     * @language en-US
     * @description The angle that progress bar 1 adds to the starting angle
     * @defaultValue 215
     */
    andDegree1?: number;
    /**
     * @language zh-CN
     * @description 进度条1最小值
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description Progress bar 1 minimum
     * @defaultValue 0
     */
    min1?: number;
    /**
     * @language zh-CN
     * @description 进度条1最大值
     * @defaultValue 100
     */
    /**
     * @language en-US
     * @description Progress bar 1 Maximum
     * @defaultValue 100
     */
    max1?: number;
    /**
     * @language zh-CN
     * @description 步长
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description Step value
     * @defaultValue 0
     */
    stepValue?: number;
    /**
     * @language zh-CN
     * @description 大于具体值的不透明度
     * @defaultValue 1
     */
    /**
     * @language en-US
     * @description Opacity greater than a specific value
     * @defaultValue 1
     */
    backStrokeOpacity?: number;
    /**
     * @language zh-CN
     * @description 小于具体值的不透明度
     * @defaultValue 1
     */
    /**
     * @language en-US
     * @description Opacity less than a specific value
     * @defaultValue 1
     */
    foreStrokeOpacity?: number;
    /**
     * @language zh-CN
     * @description 进度条1渲染的高度
     * @defaultValue 9
     */
    /**
     * @language en-US
     * @description Height of progress bar 1 rendering
     * @defaultValue 9
     */
    scaleHeight1?: number;
    /**
     * @language zh-CN
     * @description 进度条2渲染的高度
     * @defaultValue 4
     */
    /**
     * @language en-US
     * @description Height of progress bar 2 rendering
     * @defaultValue 4
     */
    scaleHeight2?: number;
    /**
     * @language zh-CN
     * @description 是否禁止滑动
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Is sliding prohibited
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 进度条大于具体值的颜色
     * @defaultValue "#E5E5E5"
     */
    /**
     * @language en-US
     * @description Color of progress bar larger than specific value
     * @defaultValue "#E5E5E5"
     */
    backColor?: string;
    /**
     * @language zh-CN
     * @description 进度条小于具体值的颜色
     * @types string | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/bcd9b9272bcbe9e172409f2b0b0b9fa280fdb976/types/tuya-panel-kit/theme.d.ts#L1">StopsProps[]</a> | { [key: string]: string }
     * @defaultValue "#FF4800"
     */
    /**
     * @language en-US
     * @description Color of progress bar less than specific value
     * @types string | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/bcd9b9272bcbe9e172409f2b0b0b9fa280fdb976/types/tuya-panel-kit/theme.d.ts#L1">StopsProps[]</a> | { [key: string]: string }
     * @defaultValue "#FF4800"
     */
    foreColor?:
        | string
        | StopsProps[]
        | {
              [key: string]: string;
          };
    /**
     * @language zh-CN
     * @description 进度条1 Thumb 小圆球的填充色
     * @defaultValue "#fff"
     */
    /**
     * @language en-US
     * @description Filling color of thumb ball in progress bar 1
     * @defaultValue "#fff"
     */
    thumbFill?: string;
    /**
     * @language zh-CN
     * @description 进度条1 Thumb小圆球边框宽度
     * @defaultValue 2
     */
    /**
     * @language en-US
     * @description Border width of thumb ball in progress bar 1
     * @defaultValue 2
     */
    thumbStrokeWidth?: number;
    /**
     * @language zh-CN
     * @description 进度条1 Thumb小圆球的边框色
     * @defaultValue "#fff"
     */
    /**
     * @language en-US
     * @description The border color of thumb ball in progress bar 1
     * @defaultValue "#fff"
     */
    thumbStroke?: string;
    /**
     * @language zh-CN
     * @description 进度条2开始角度
     * @defaultValue 140
     */
    /**
     * @language en-US
     * @description Progress bar 2 start angle
     * @defaultValue 140
     */
    startDegree2?: number;
    /**
     * @language zh-CN
     * @description 进度条2在开始的角度上减少的角度
     * @defaultValue 100
     */
    /**
     * @language en-US
     * @description Progress bar 2 decreases the angle from the starting angle
     * @defaultValue 100
     */
    reduceDegree2?: number;
    /**
     * @language zh-CN
     * @description 进度条2最小值
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description Progress bar 2 min
     * @defaultValue 0
     */
    min2?: number;
    /**
     * @language zh-CN
     * @description 进度条2最大值
     * @defaultValue 50
     */
    /**
     * @language en-US
     * @description Progress bar 2 max
     * @defaultValue 50
     */
    max2?: number;
    /**
     * @language zh-CN
     * @description 轨道开始的圆环颜色
     * @defaultValue "#FF4800"
     */
    /**
     * @language en-US
     * @description The color of the ring at the beginning of the track
     * @defaultValue "#FF4800"
     */
    startColor?: string;
    /**
     * @language zh-CN
     * @description 轨道结束的圆环颜色
     * @defaultValue "#E5E5E5"
     */
    /**
     * @language en-US
     * @description The color of the ring at the end of the track
     * @defaultValue "#E5E5E5"
     */
    endColor?: string;
    /**
     * @language zh-CN
     * @description 值改变的回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of value change
     * @defaultValue () => {}
     */
    onValueChange?: (argus: { value1: number; value2: number }) => void;
    /**
     * @language zh-CN
     * @description 滑动结束的回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Slide end callback
     * @defaultValue () => {}
     */
    onSlidingComplete?: (argus: { value1: number; value2x: number }) => void;
    /**
     * @language zh-CN
     * @description 进度条1 Thumb 小圆球的半径
     * @defaultValue 5
     */
    /**
     * @language en-US
     * @description Radius of progress bar 1 thumb ball
     * @defaultValue 5
     */
    thumbRadius1?: number;
    /**
     * @language zh-CN
     * @description 进度条2 Thumb 小圆球的半径
     * @defaultValue 2
     */
    /**
     * @language en-US
     * @description Radius of progress bar 2 thumb ball
     * @defaultValue 2
     */
    thumbRadius2?: number;
    /**
     * @language zh-CN
     * @description 是否需要最大值的 Touch
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Do you need touch with maximum value
     * @defaultValue true
     */
    needCircle1?: boolean;
    /**
     * @language zh-CN
     * @description 是否需要另一个轨道上的 thumb
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Do you need a thumb on another orbit
     * @defaultValue true
     */
    needCircle2?: boolean;
    /**
     * @language zh-CN
     * @description 进度条2 Thumb 小圆球的边框色
     * @defaultValue '#fff'
     */
    /**
     * @language en-US
     * @description Border color of progress bar 2 thumb ball
     * @defaultValue '#fff'
     */
    thumbStroke2?: string;
    /**
     * @language zh-CN
     * @description 进度条2 Thumb小圆球边框宽度
     * @defaultValue 2
     */
    /**
     * @language en-US
     * @description Thumb small ball border width in Progress bar 2
     * @defaultValue 2
     */
    thumbStrokeWidth2?: number;
    /**
     * @language zh-CN
     * @description 进度条2 Thumb 小圆球的填充色
     * @defaultValue '#fff'
     */
    /**
     * @language en-US
     * @description Progress bar 2 filling color of thumb ball
     * @defaultValue '#fff'
     */
    thumbFill2?: string;
}
export class Progress extends React.Component<ProgressBasicProps> {
    static Space: React.ElementType<SpaceProps>;
    static Double: React.ElementType<DoubleProps>;
    static Compose: React.ElementType<ComposeProps>;
}

// RadialGradient
export interface RadialGradientProps extends RadialGradientBackground {
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 渐变 id
     * @defaultValue "linear-gradient"
     */
    /**
     * @language en-US
     * @description Gradient ID
     * @defaultValue "linear-gradient"
     */
    gradientId?: string;
}
export class RadialGradient extends React.Component<RadialGradientProps> {}

// RotationView
export interface RotationViewProps {
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue "RotationView"
     */
    /**
     * @language en-US
     * @description Test identification
     * @defaultValue "RotationView"
     */
    accessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 内容样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Container Style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 嵌套子元素
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Nested child elements of RotationView
     * @defaultValue undefined
     */
    children?: React.ReactNode;
    /**
     * @language zh-CN
     * @description 是否开启旋转动画
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether to enable the rotation animation.
     * @defaultValue true
     */
    active?: boolean;
    /**
     * @language zh-CN
     * @description 旋转动画一圈的时间， 单位是 ms
     * @defaultValue 5000
     */
    /**
     * @language en-US
     * @description The time to rotate the animation for one circle, in MS
     * @defaultValue 5000
     */
    duration?: number;
    /**
     * @language zh-CN
     * @description 是否使用原生动画驱动, 一般在安卓低端机上会比较有用
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether or not to use native animation driver is more useful on Android low-end computers
     * @defaultValue false
     */
    useNativeDriver?: boolean;
    /**
     * @language zh-CN
     * @description 此动画是否在 “InteractionManager” 上创建 “交互手柄”
     * @version 4.0.1
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether or not this animation creates an "interaction handle" on the `InteractionManager`. Default true.
     * @version 4.0.1
     * @defaultValue true
     */
    isInteraction?: boolean;
}
export class RotationView extends React.Component<RotationViewProps> {}

// Slider
export interface SliderProps {
    /**
     * @language zh-CN
     * @description 主题配置
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Theme configuration
     * @defaultValue {}
     */
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
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue "Slider"
     */
    /**
     * @language en-US
     * @description Test identification
     * @defaultValue "Slider"
     */
    accessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description onLayout 回调
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description onLayout callback
     * @defaultValue undefined
     */
    onLayout?: (x: number) => void;
    /**
     * @language zh-CN
     * @description 当前值
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description value
     * @defaultValue 0
     */
    value?: number;
    /**
     * @language zh-CN
     * @description 是否禁用
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Whether to disable or not.
     * @defaultValue undefined
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 最小值
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description The minimum value.
     * @defaultValue 0
     */
    minimumValue?: number;
    /**
     * @language zh-CN
     * @description 最大值
     * @defaultValue 1
     */
    /**
     * @language en-US
     * @description The maximum value.
     * @defaultValue 1
     */
    maximumValue?: number;
    /**
     * @language zh-CN
     * @description 步长，取值必须大于 0，并且可被 (max - min) 整除
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description Step length. Must be exactly divisible by minimumValue and maximumValue.
     * @defaultValue 0
     */
    stepValue?: number;
    /**
     * @language zh-CN
     * @description 是否翻转数值
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to flip the value
     * @defaultValue false
     */
    reverseValue?: boolean;
    /**
     * @language zh-CN
     * @description 小于当前值的轨道颜色
     * @defaultValue '#3f3f3f'
     */
    /**
     * @language en-US
     * @description Track color that is less than the current value.
     * @defaultValue '#3f3f3f'
     */
    minimumTrackTintColor?: string;
    /**
     * @language zh-CN
     * @description 大于当前值的轨道颜色
     * @defaultValue '#b3b3b3'
     */
    /**
     * @language en-US
     * @description Track color that is greater than the current value.
     * @defaultValue '#b3b3b3'
     */
    maximumTrackTintColor?: string;
    /**
     * @language zh-CN
     * @description 滑块颜色
     * @defaultValue '#343434'
     */
    /**
     * @language en-US
     * @description The color used to tint the default thumb images on iOS, or the color of the foreground switch grip on Android.
     * @defaultValue '#343434'
     */
    thumbTintColor?: string;
    /**
     * @language zh-CN
     * @description 滑块大小
     * @defaultValue { width: 40, height: 40 }
     */
    /**
     * @language en-US
     * @description Thumb size
     * @defaultValue { width: 40, height: 40 }
     */
    thumbTouchSize?: {
        width: number;
        height: number;
    };
    /**
     * @language zh-CN
     * @description 滑动值变更回调
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Callback of changing the sliding value.
     * @defaultValue undefined
     */
    onValueChange?: (newValue: number) => void;
    /**
     * @language zh-CN
     * @description 滑动开始回调
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Callback of starting the slide.
     * @defaultValue undefined
     */
    onSlidingStart?: (newValue: number) => void;
    /**
     * @language zh-CN
     * @description 滑动结束回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of ending the slide.
     * @defaultValue () => {}
     */
    onSlidingComplete?: (newValue: number) => void;
    /**
     * @language zh-CN
     * @description 滑动事件
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Sliding events
     * @defaultValue undefined
     */
    onScrollEvent?: (value: number) => void;
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 通用的轨道样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description General track style.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    trackStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 滑块样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Style of the thumb.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    thumbStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 是否开启调试区域
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Do you want to open the debugging area
     * @defaultValue false
     */
    debugTouchArea?: boolean;
    /**
     * @language zh-CN
     * @description 是否只显示大于当前值的轨道颜色
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to display only track colors that are greater than the current value.
     * @defaultValue false
     */
    onlyMaximumTrack?: boolean;
    /**
     * @language zh-CN
     * @description 触摸轨道是否可以更改值
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether the value can be changed by touching the track.
     * @defaultValue false
     */
    canTouchTrack?: boolean;
    /**
     * @language zh-CN
     * @description 是否添加动画滑动效果
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Add animation slide effect
     * @defaultValue false
     */
    animateTransitions?: boolean;
    /**
     * @language zh-CN
     * @description 动画类型，spring 弹性动画或 timing 线性动画
     * @defaultValue 'timing'
     */
    /**
     * @language en-US
     * @description Animation type, spring elastic animation or timing linear animation
     * @defaultValue 'timing'
     */
    animationType?: 'spring' | 'timing';
    /**
     * @language zh-CN
     * @description 动画配置
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Animation configuration
     * @defaultValue undefined
     */
    animationConfig?: {
        friction?: number;
        tension?: number;
        duration?: number;
        easing?: () => void;
        delay?: number;
    };
    /**
     * @language zh-CN
     * @description 定制渲染小于当前值的轨道
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Custom rendering of the tracks less than the current value.
     * @defaultValue undefined
     */
    renderMinimumTrack?: () => React.ReactNode;
    /**
     * @language zh-CN
     * @description 定制渲染大于当前值的轨道
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Custom rendering of the tracks greater than the current value.
     * @defaultValue undefined
     */
    renderMaximumTrack?: () => React.ReactNode;
    /**
     * @language zh-CN
     * @description 定制渲染滑块
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Custom rendering of the thumb.
     * @defaultValue undefined
     */
    renderThumb?: () => React.ReactNode;
    /**
     * @language zh-CN
     * @description 是否为水平方向
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Is it horizontal
     * @defaultValue true
     */
    horizontal?: boolean;
    /**
     * @language zh-CN
     * @description 滑动条样式集合
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Slide bar styles collection
     * @defaultValue {}
     */
    styles?: {
        container?: StyleProp<ViewStyle>;
        track?: StyleProp<ViewStyle>;
        thumb?: StyleProp<ViewStyle>;
        touchArea?: StyleProp<ViewStyle>;
        debugThumbTouchArea?: StyleProp<ViewStyle>;
    };
    /**
     * @language zh-CN
     * @description 滑块的类型，parcel：包裹类型
     * @addVersion 4.4.0
     * @defaultValue normal
     */
    /**
     * @language en-US
     * @description The type of slider, parcel: package type
     * @addVersion 4.4.0
     * @defaultValue normal
     */
    type?: 'normal' | 'parcel';
}
export class Slider extends React.Component<SliderProps> {
    static Horizontal: React.ElementType<SliderProps>;
    static Vertical: React.ElementType<SliderProps>;
}

// SliderProgress
export interface SliderProgressProps {
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue "SliderProgress"
     */
    /**
     * @language en-US
     * @description Test identification
     * @defaultValue "SliderProgress"
     */
    accessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 最小值
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description min value
     * @defaultValue 0
     */
    min?: number;
    /**
     * @language zh-CN
     * @description 最大值
     * @defaultValue 100
     */
    /**
     * @language en-US
     * @description max value
     * @defaultValue 100
     */
    max?: number;
    /**
     * @language zh-CN
     * @description 值
     * @defaultValue 10
     */
    /**
     * @language en-US
     * @description value
     * @defaultValue 10
     */
    value?: number | number[];
    /**
     * @language zh-CN
     * @description 内容样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Container Style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 值改变的回调函数
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description callback function of value change
     * @defaultValue () => {}
     */
    onValueChange?: (...args: any[]) => any;
    /**
     * @language zh-CN
     * @description 完成的回调函数
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description callback function of complete
     * @defaultValue () => {}
     */
    onComplete?: (...args: any[]) => any;
    /**
     * @language zh-CN
     * @description 禁用
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description disabled
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 滑块宽度
     * @defaultValue 4
     */
    /**
     * @language en-US
     * @description width of thumb
     * @defaultValue 4
     */
    thumbWidth?: number;
    /**
     * @language zh-CN
     * @description 激活状态的颜色
     * @defaultValue '#5E719F'
     */
    /**
     * @language en-US
     * @description color of active state
     * @defaultValue '#5E719F'
     */
    activeColor?: string;
    /**
     * @language zh-CN
     * @description 未激活状态的颜色
     * @defaultValue 'rgba(94,113,159,0.2)'
     */
    /**
     * @language en-US
     * @description color of inactive state
     * @defaultValue 'rgba(94,113,159,0.2)'
     */
    inactiveColor?: string;
    /**
     * @language zh-CN
     * @description 限制可触摸的区域
     * @defaultValue 4
     */
    /**
     * @language en-US
     * @description Restrict the touchable area
     * @defaultValue 4
     */
    activeBase?: number;
    /**
     * @language zh-CN
     * @description 是否允许点击更改值
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether to allow clicking to change the value
     * @defaultValue true
     */
    ifAllowClick?: boolean;
}
export class SliderProgress extends React.Component<SliderProgressProps> {}

// SliderWithLine
export interface SliderWithLineProps {
    /**
     * @language zh-CN
     * @description 内容样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Container Style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 左边和右边的值
     * @defaultValue [0, 50]
     */
    /**
     * @language en-US
     * @description Container Style
     * @defaultValue [0, 50]
     */
    values?: number[];
    /**
     * @language zh-CN
     * @description 激活状态的颜色
     * @defaultValue 'blue'
     */
    /**
     * @language en-US
     * @description color of active state
     * @defaultValue 'blue'
     */
    activeColor?: string;
    /**
     * @language zh-CN
     * @description 激活状态的颜色
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description color of active state
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 最小值
     * @defaultValue 10
     */
    /**
     * @language en-US
     * @description min value
     * @defaultValue 10
     */
    min?: number;
    /**
     * @language zh-CN
     * @description 最大值
     * @defaultValue 1000
     */
    /**
     * @language en-US
     * @description max value
     * @defaultValue 1000
     */
    max?: number;
    /**
     * @language zh-CN
     * @description minValue 的百分比范围
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description percent range of minValue
     * @defaultValue null
     */
    minValuePercentRange?: any;
    /**
     * @language zh-CN
     * @description maxValue 的百分比范围
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description percent range of maxValue
     * @defaultValue null
     */
    maxValuePercentRange?: any;
    /**
     * @language zh-CN
     * @description 禁用 minValue 调节
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Disable minValue adjustment
     * @defaultValue false
     */
    minDisabled?: boolean;
    /**
     * @language zh-CN
     * @description 禁用 minValue 调节
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Disable maxValue adjustment
     * @defaultValue false
     */
    maxDisabled?: boolean;
}
export class SliderWithLine extends React.Component<SliderProps> {}

// Stepper
export interface StepperProps extends Omit<TextInputProps, 'value'> {
    /**
     * @language zh-CN
     * @description 内容样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Container Style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 加减按钮样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Button Style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    buttonStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 输入框样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Input style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    inputStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 按钮类型
     * @defaultValue 'ellipse'
     */
    /**
     * @language en-US
     * @description Button type
     * @defaultValue 'ellipse'
     */
    buttonType?: 'ellipse' | 'triangle';
    /**
     * @language zh-CN
     * @description 最小值
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description Min
     * @defaultValue 0
     */
    min?: number;
    /**
     * @language zh-CN
     * @description 最大值
     * @defaultValue 99
     */
    /**
     * @language en-US
     * @description Max
     * @defaultValue 99
     */
    max?: number;
    /**
     * @language zh-CN
     * @description 具体值
     * @defaultValue 20
     */
    /**
     * @language en-US
     * @description Value
     * @defaultValue 20
     */
    value?: number;
    /**
     * @language zh-CN
     * @description 步长
     * @defaultValue 1
     */
    /**
     * @language en-US
     * @description StepValue
     * @defaultValue 1
     */
    stepValue?: number;
    /**
     * @language zh-CN
     * @description 是否支持手动编辑
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Do you support manual editing
     * @defaultValue true
     */
    editable?: boolean;
    /**
     * @language zh-CN
     * @description 按钮类型为 ellipse 时按钮激活状态下的颜色
     * @defaultValue "#333"
     */
    /**
     * @language en-US
     * @description The color of the button when the button type is ellipse
     * @defaultValue "#333"
     */
    ellipseIconColor?: string;
    /**
     * @language zh-CN
     * @description 按钮类型为 triangle 时激活状态下的颜色
     * @defaultValue "#FF4800"
     */
    /**
     * @language en-US
     * @description The color in the active state when the button type is triangle
     * @defaultValue "#FF4800"
     */
    triangleIconColor?: string;
    /**
     * @language zh-CN
     * @description 文本输入的高亮和光标颜色
     * @defaultValue "#FF4800"
     */
    /**
     * @language en-US
     * @description Highlight and cursor color for text input
     * @defaultValue "#FF4800"
     */
    selectionColor?: string;
    /**
     * @language zh-CN
     * @description 按钮类型为 triangle 时的减法按钮路径
     * @defaultValue <a target="_blank" href="https://github.com/tuya/tuya-panel-kit/blob/master/src/components/stepper/styled.js#L11">dPlus</a>
     */
    /**
     * @language en-US
     * @description Subtraction button path when button type is triangle
     * @defaultValue <a target="_blank" href="https://github.com/tuya/tuya-panel-kit/blob/master/src/components/stepper/styled.js#L11">dPlus</a>
     */
    iconMinusPath?: string;
    /**
     * @language zh-CN
     * @description 按钮类型为 triangle 时的加法按钮路径
     * @defaultValue <a target="_blank" href="https://github.com/tuya/tuya-panel-kit/blob/master/src/components/stepper/styled.js#L8">dPlus</a>
     */
    /**
     * @language en-US
     * @description Add button path when button type is triangle
     * @defaultValue <a target="_blank" href="https://github.com/tuya/tuya-panel-kit/blob/master/src/components/stepper/styled.js#L8">dPlus</a>
     */
    iconPlusPath?: string;
    /**
     * @language zh-CN
     * @description 短按值回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Short press value callback
     * @defaultValue () => {}
     */
    onValueChange?: (value: number) => void;
    /**
     * @language zh-CN
     * @description 是否禁用
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Disable stepper button
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 获取 TextInput 实例
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Gets an instance of textinput
     * @defaultValue () => {}
     */
    getTextInputRef?: (TextInputRef: {}) => void;
}
export class Stepper extends React.Component<StepperProps> {}

// Swipeout
export interface SwipeoutAction {
    /**
     * @language zh-CN
     * @description 设置按钮背景色
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Set the button color.
     * @defaultValue undefined
     */
    backgroundColor?: string;
    /**
     * @language zh-CN
     * @description 按钮的文本颜色
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Set the font color in the button.
     * @defaultValue undefined
     */
    color?: string;
    /**
     * @language zh-CN
     * @description 按钮是否被禁用
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether the button can be clicked.
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 按钮索引值
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Button key.
     * @defaultValue undefined
     */
    key?: string;
    /**
     * @language zh-CN
     * @description 自定义按钮。如果设置了内容，则以下属性无效。
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Custom button. If content is set, the following properties are invalid.
     * @defaultValue undefined
     */
    content?: React.ReactNode;
    /**
     * @language zh-CN
     * @description 按钮上的文本
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Set the text in the button.
     * @defaultValue undefined
     */
    text?: string;
    /**
     * @language zh-CN
     * @description 按钮的类型
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Set the button type
     * @defaultValue undefined
     */
    type?: 'delete' | 'primary' | 'secondary';
    /**
     * @language zh-CN
     * @description 字体大小
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Font size
     * @defaultValue undefined
     */
    fontSize?: number;
    /**
     * @language zh-CN
     * @description 文本样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Text Style
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue undefined
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 点击按钮的回调
     * @types (event: <a target='_blank' href='https://reactnative.dev/docs/pressevent'>GestureResponderEvent</a>) => void
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of clicking the button.
     * @types (event: <a target='_blank' href='https://reactnative.dev/docs/pressevent'>GestureResponderEvent</a>) => void
     * @defaultValue () => {}
     */
    onPress?: (e: GestureResponderEvent) => void;
}
export interface SwipeoutProps {
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue "Swipeout"
     */
    /**
     * @language en-US
     * @description Test identification
     * @defaultValue "Swipeout"
     */
    accessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 背景颜色
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description BackgroundColor
     * @defaultValue undefined
     */
    backgroundColor?: string;
    /**
     * @language zh-CN
     * @description 是否自动关闭
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Auto close
     * @defaultValue undefined
     */
    autoClose?: boolean;
    /**
     * @language zh-CN
     * @description 是否禁用 Swipeout 所提供的侧滑操作
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to disable the swipeout operation.
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 往左滑出现的按钮
     * @types <a href='_target' href='https://github.com/tuya/DefinitelyTyped/blob/master/types/tuya-panel-kit/index.d.ts#L2536'>SwipeoutAction[]</a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Swipeout buttons on the left.
     * @types <a href='_target' href='https://github.com/tuya/DefinitelyTyped/blob/master/types/tuya-panel-kit/index.d.ts#L2536'>SwipeoutAction[]</a>
     * @defaultValue undefined
     */
    left?: SwipeoutAction[];
    /**
     * @language zh-CN
     * @description 往右滑出现的按钮
     * @types <a href='_target' href='https://github.com/tuya/DefinitelyTyped/blob/3a07a00d4e5e3400adeee9c4857b5799d41e53d7/types/tuya-panel-kit/index.d.ts#L6245'>SwipeoutAction[]</a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Swipeout buttons on the right.
     * @types <a href='_target' href='https://github.com/tuya/DefinitelyTyped/blob/3a07a00d4e5e3400adeee9c4857b5799d41e53d7/types/tuya-panel-kit/index.d.ts#L6245'>SwipeoutAction[]</a>
     * @defaultValue undefined
     */
    right?: SwipeoutAction[];
    /**
     * @language zh-CN
     * @description 侧滑之后出现按钮的宽度
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Width of the button that appears after swipeout.
     * @defaultValue undefined
     */
    buttonWidth?: number;
    /**
     * @language zh-CN
     * @description 任意一侧按钮全显示的回调
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Callback for full display of buttons on either side
     * @defaultValue undefined
     */
    onOpen?: (sectionID?: number, rowID?: number) => void;
    /**
     * @language zh-CN
     * @description 任意一侧按钮全隐藏的回调
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Callback for full display of buttons on either side
     * @defaultValue undefined
     */
    onClose?: (sectionID?: number, rowID?: number) => void;
    /**
     * @language zh-CN
     * @description 侧滑的距离
     * @defaultValue 50
     */
    /**
     * @language en-US
     * @description Side slip distance
     * @defaultValue 50
     */
    sensitivity?: number;
    /**
     * @language zh-CN
     * @description 滑动回调函数
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Sliding callback function
     * @defaultValue undefined
     */
    scroll?: (value?: boolean) => void;
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 当 close 从 false 变为 true 时，会隐藏所有侧滑操作按钮。反过来 true 变为 false 无任何变化。
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description When close changes from false to true, all sideslip operation buttons are hidden. Conversely, true changes to false without any change.
     * @defaultValue undefined
     */
    close?: boolean;
    /**
     * @language zh-CN
     * @description 分区 Id
     * @defaultValue -1
     */
    /**
     * @language en-US
     * @description Section ID
     * @defaultValue -1
     */
    sectionID?: number;
    /**
     * @language zh-CN
     * @description 行 ID
     * @defaultValue -1
     */
    /**
     * @language en-US
     * @description Row ID
     * @defaultValue -1
     */
    rowID?: number;
}
export class Swipeout extends React.Component<SwipeoutProps> {}

// SwitchButton
export interface SwitchButtonProps {
    /**
     * @language zh-CN
     * @description 主题配置
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Theme configuration
     * @defaultValue null
     */
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
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Specify the style of the container that wraps the SwitchButton
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue "SwitchButton"
     */
    /**
     * @language en-US
     * @description Test identification
     * @defaultValue "SwitchButton"
     */
    accessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 是否禁用
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to disable the SwitchButton.
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 当前选中的值，设置了该属性即为受控组件
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description The currently selected value. After this property is set, it is a controlled component.
     * @defaultValue undefined
     */
    value?: boolean;
    /**
     * @language zh-CN
     * @description 默认选中的值
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description The value selected by default
     * @defaultValue true
     */
    defaultValue?: boolean;
    /**
     * @language zh-CN
     * @description 设置 SwitchButton 的大小
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Set the size of the development component
     * @defaultValue undefined
     */
    size?: { width?: number; height?: number; activeSize?: number; margin?: number };
    /**
     * @language zh-CN
     * @description 改变 SwitchButton 值时执行此回调
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description This callback is executed when the switch combination value is changed.
     * @defaultValue undefined
     */
    onValueChange: (value: boolean) => void;
    /**
     * @language zh-CN
     * @description 设置当 SwitchButton的 value 为 false 时背景颜色
     * @defaultValue '#e5e5e5'
     */
    /**
     * @language en-US
     * @description Set the background color when the value of the SwitchButton is false.
     * @defaultValue '#e5e5e5'
     */
    tintColor?:
        | string
        | {
              [key: string]: string;
          };
    /**
     * @language zh-CN
     * @description 设置当 SwitchButton的 value 为 true 时颜色
     * @defaultValue '#44DB5E'
     */
    /**
     * @language en-US
     * @description Set the color when the value of the SwitchButton is true.
     * @defaultValue '#44DB5E'
     */
    onTintColor?:
        | string
        | {
              [key: string]: string;
          };
    /**
     * @language zh-CN
     * @description 设置当 SwitchButton 的 value 为 false 时 thumb 颜色
     * @defaultValue "#fff"
     */
    /**
     * @language en-US
     * @description Set the color of the sliding button when the value of the SwitchButton is false.
     * @defaultValue "#fff"
     */
    thumbTintColor?: string;
    /**
     * @language zh-CN
     * @description 设置当 SwitchButton 的 value 为 true 时 thumb 颜色，若没有设置则为 thumbTintColor 的值
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Set the color of the sliding button when the value of the SwitchButton is true. It is the value of thumbTintColor if it is not set.
     * @defaultValue undefined
     */
    onThumbTintColor?: string;
    /**
     * @language zh-CN
     * @description 设置当 SwitchButton 的 value 为 false 时边框颜色 当 SwitchButton 的 value 为 true 时边框颜色等于 onTintColor
     * @defaultValue "#e5e5e5"
     */
    /**
     * @language en-US
     * @description Set the color of the border when the value of the sliding button is false.
     * @defaultValue "#e5e5e5"
     */
    borderColor?: string;
    /**
     * @language zh-CN
     * @description 指定 thumb 的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Specify the style of the icon used for dragging in the switch.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    thumbStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 是否使用 Native Driver
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether to use Native Driver.
     * @defaultValue true
     */
    useNativeDriver?: boolean;
    /**
     * @language zh-CN
     * @description SwitchButton 的 value 值为 false 时左侧显示的字符，超过 3 个字符则显示显示 2 个字符，其余显示…
     * @defaultValue "ON"
     */
    /**
     * @language en-US
     * @description When the value of SwitchButton is false, the characters displayed on the left side are displayed. If the value exceeds 3 characters, 2 characters are displayed, and the rest are displayed ...
     * @defaultValue "ON"
     */
    onText?: string;
    /**
     * @language zh-CN
     * @description SwitchButton 的 value 值为 true 时右侧显示的字符，超过 3 个字符则显示显示 2 个字符，其余显示…
     * @defaultValue "OFF"
     */
    /**
     * @language en-US
     * @description When the value of SwitchButton is true, the characters displayed on the right side are displayed. If the value exceeds 3 characters, 2 characters are displayed, and the rest are displayed ...
     * @defaultValue "OFF"
     */
    offText?: string;
    /**
     * @language zh-CN
     * @description SwitchButton 的 value 值为 false 时左侧显示的字符样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The character style displayed on the left when the value of SwitchButton is false
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    onTextStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description SwitchButton 的 value 值为 true 时右侧显示的字符样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The character style displayed on the right when the value of SwitchButton is true
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    offTextStyle?: StyleProp<TextStyle>;
}
export class SwitchButton extends React.Component<SwitchButtonProps> {}

// Tab
export interface TabProps {
    /**
     * @language zh-CN
     * @description 是否可滑动视图
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether to slide the view.
     * @defaultValue true
     */
    swipeable?: boolean;
    /**
     * @language zh-CN
     * @description 切换视图是否有动画
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether the switching view has animation.
     * @defaultValue true
     */
    animated?: boolean;
    /**
     * @language zh-CN
     * @description 激活值，如果给定了则成为受控组件，需搭配 onChange 使用
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Activation value. If the parameter value is set, it becomes a controlled component. It needs to be used with onChange.
     * @defaultValue undefined
     */
    activeKey?: string | number;
    /**
     * @language zh-CN
     * @description 默认的激活值，想成为非受控组件时使用
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description The default activation value. It is used when it is set to uncontrolled components
     * @defaultValue 0
     */
    defaultActiveKey?: string | number;
    /**
     * @language zh-CN
     * @description 切换视图的回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description The callback of switching the view.
     * @defaultValue () => {}
     */
    onChange?: (activeKey?: number | string) => void;
    /**
     * @language zh-CN
     * @description 嵌套子元素
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Nested sub elements
     * @defaultValue undefined
     */
    children?: React.ReactNode;
    /**
     * @language zh-CN
     * @description 设置 TabContent 的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Set the style of the content area of the TabBar.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    tabContentStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description tab 默认颜色
     * @defaultValue "#333"
     */
    /**
     * @language en-US
     * @description Default color in tab
     * @defaultValue "#333"
     */
    tabDefaultColor?: string;
    /**
     * @language zh-CN
     * @description 设置 TabBar 的背景颜色
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Set the background color of the TabBar
     * @defaultValue undefined
     */
    tabBarBackgroundColor?: string;
    /**
     * @language zh-CN
     * @description 设置 TabBar 的下划线样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Set the underline style of the TabBar.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    tabBarUnderlineStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 设置 TabBar 的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Set the style of the TabBar
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    tabBarStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 未激活的文本样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description he text style of the unselected Tab.
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue undefined
     */
    tabTextStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 激活的文本样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description The selected text style.
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue undefined
     */
    tabActiveTextStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 设置包裹 TabBar 的容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Set the style of the container that wraps the TabBar
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    tabsContainerStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 单个 Tab 的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description The style of a single tab
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    tabStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 包裹 tab 的容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Specify the style of the container that wraps the tab bar.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description tabBar 的位置
     * @defaultValue 'top'
     */
    /**
     * @language en-US
     * @description The position of the tabBar.
     * @defaultValue 'top'
     */
    tabBarPosition?: 'top' | 'bottom';
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue "TabNav"
     */
    /**
     * @language en-US
     * @description Test identification
     * @defaultValue "TabNav"
     */
    tabNavAccessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 是否在安卓上使用 viewPager
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether to use viewPager on Android
     * @defaultValue true
     */
    useViewPagerOnAndroid?: boolean;
    /**
     * @language zh-CN
     * @description 切换 tab 的距离
     * @defaultValue 0.3
     */
    /**
     * @language en-US
     * @description Distance of switching tab
     * @defaultValue 0.3
     */
    distanceToChangeTab?: number;
}
export interface TabPaneProps extends TabProps {
    /**
     * @language zh-CN
     * @description 每个 tab 的宽度
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Width of each tab
     * @defaultValue undefined
     */
    tabWidth?: number;
    /**
     * @language zh-CN
     * @description Tab 上文字或者自定义的元素
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Text or custom elements on tab
     * @defaultValue undefined
     */
    tab?: React.ReactNode;
}
export class Tab extends React.Component<TabProps> {
    static TabPane: React.ElementType<TabPaneProps>;
}

// TabBar
export interface TabBarArr {
    [index: number]: {
        /**
         * @language zh-CN
         * @description Tab 内容样式
         * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
         * @defaultValue undefined
         */
        /**
         * @language en-US
         * @description Tab content style
         * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
         * @defaultValue undefined
         */
        style?: StyleProp<ViewStyle>;
        /**
         * @language zh-CN
         * @description 激活的 Tab 样式
         * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
         * @defaultValue undefined
         */
        /**
         * @language en-US
         * @description Active tab style
         * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
         * @defaultValue undefined
         */
        activeStyle?: StyleProp<ViewStyle>;
        /**
         * @language zh-CN
         * @description 文本样式
         * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
         * @defaultValue undefined
         */
        /**
         * @language en-US
         * @description Text style
         * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
         * @defaultValue undefined
         */
        textStyle?: StyleProp<TextStyle>;
        /**
         * @language zh-CN
         * @description 激活状态下的文本样式
         * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
         * @defaultValue undefined
         */
        /**
         * @language en-US
         * @description Active text style
         * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
         * @defaultValue undefined
         */
        activeTextStyle?: StyleProp<TextStyle>;
        /**
         * @language zh-CN
         * @description 索引值
         * @defaultValue undefined
         */
        /**
         * @language en-US
         * @description Key Value
         * @defaultValue undefined
         */
        key: string;
        /**
         * @language zh-CN
         * @description Tab 里文本
         * @defaultValue undefined
         */
        /**
         * @language en-US
         * @description Text in tab
         * @defaultValue undefined
         */
        title: string;
        /**
         * @language zh-CN
         * @description 触发单个 Tab 点击回调
         * @defaultValue () => {}
         */
        /**
         * @language en-US
         * @description Trigger a single tab click callback
         * @defaultValue () => {}
         */
        onPress?: (index: string) => void;
        /**
         * @language zh-CN
         * @description 当 type: 'radio' 时，触发单个 Tab 点击回调
         * @defaultValue () => {}
         */
        /**
         * @language en-US
         * @description When type: 'radio', a single tab click callback is triggered
         * @defaultValue () => {}
         */
        onItemPress?: () => void;
    };
}
export interface TabBarProps {
    /**
     * @language zh-CN
     * @description 类型
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Tab type
     * @defaultValue undefined
     */
    type?: 'radio' | string;
    /**
     * @language zh-CN
     * @description 下划线的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Style of the underline.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    underlineStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 单个 Tab 的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description The style of a single tab
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    tabStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 单个激活 Tab 的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description The style of a single active tab
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    tabActiveStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 未激活的文本样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description he text style of the unselected Tab.
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue {}
     */
    tabTextStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 激活的文本样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description The selected text style.
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue {}
     */
    tabActiveTextStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description Tab 内层容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Tab inner container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    wrapperStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description Tab 外层容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Outer container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 激活值，如果给定了则成为受控组件，需搭配 onChange 使用
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Activation value. If the parameter value is set, it becomes a controlled component. It needs to be used with onChange.
     * @defaultValue undefined
     */
    activeKey?: string | number;
    /**
     * @language zh-CN
     * @description 默认的激活值，想成为非受控组件时使用
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description The default activation value. It is used when it is set to uncontrolled components
     * @defaultValue 0
     */
    defaultActiveKey?: string | number;
    /**
     * @language zh-CN
     * @description 数据源
     * @types <a target='_blank' href='https://github.com/tuya/DefinitelyTyped/blob/3a07a00d4e5e3400adeee9c4857b5799d41e53d7/types/tuya-panel-kit/index.d.ts#L7047'>TabBarArr[]</a>
     * @defaultValue []
     */
    /**
     * @language en-US
     * @description data Source
     * @types <a target='_blank' href='https://github.com/tuya/DefinitelyTyped/blob/3a07a00d4e5e3400adeee9c4857b5799d41e53d7/types/tuya-panel-kit/index.d.ts#L7047'>TabBarArr[]</a>
     * @defaultValue []
     */
    tabs: TabBarArr[];
    /**
     * @language zh-CN
     * @description 下划线是否居中
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Is the underline centered
     * @defaultValue true
     */
    isUnderlineCenter?: boolean;
    /**
     * @language zh-CN
     * @description 当 type: 'radio' 时，激活 Tab 的背景色
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description When type: 'radio', activate the background color of tab
     * @defaultValue ''
     */
    activeColor?: string;
    /**
     * @language zh-CN
     * @description 当 type: 'radio' 时，激活索引值 （如果给定了则成为受控组件）
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description When type: 'radio', activate the index value (if given, it becomes a controlled component)
     * @defaultValue 0
     */
    activeIndex?: number;
    /**
     * @language zh-CN
     * @description 当 type: 'radio' 时，默认高亮 tab 的索引值
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description When type: 'radio', the index value of the highlighted tab is highlighted by default
     * @defaultValue 0
     */
    defaultActiveIndex?: number;
    /**
     * @language zh-CN
     * @description 制表符间距
     * @defaultValue 2
     */
    /**
     * @language en-US
     * @description The spacing between tab
     * @defaultValue 2
     */
    gutter?: number;
    /**
     * @language zh-CN
     * @description Tab 切换的回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of tab switching.
     * @defaultValue () => {}
     */
    onChange?: (index: string) => void;
}
export class TabBar extends React.Component<TabBarProps> {}

// layout/TopBar
export interface TopBarContainerProps {
    /**
     * @language zh-CN
     * @description TopBar.Container 的容器样式 内部处理了IOS、IPhoneX及安卓端三种StatusBar的情况，如果不需要StatusBar可以自行定义样式。
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The container style of the top toolbar internally handles the three StatusBar situations of iOS versions below and above iPhoneX, and Android. You can also define your own style.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description TopBar.Container容器主体的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The style of the container content of the top toolbar.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description TopBar.Container容器的背景， 可为颜色或者渐变，渐变的格式可参考LinearGradient 或 RadialGradient
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/aa5f210a2f10112b55b3faf9457e312badebce86/types/tuya-panel-kit/theme.d.ts#L145">BackgroundProps</a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The background of the top toolbar container, which can be a solid color or a gradient color.
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/aa5f210a2f10112b55b3faf9457e312badebce86/types/tuya-panel-kit/theme.d.ts#L145">BackgroundProps</a>
     * @defaultValue null
     */
    background?: BackgroundProps;
}
export interface TopBarContentProps {
    /**
     * @language zh-CN
     * @description TopBar.Content 的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The container style of the top toolbar internally handles the three StatusBar situations of iOS versions below and above iPhoneX, and Android. You can also define your own style.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description TopBar.Content 标题及副标题颜色，副标题颜色为该颜色加 0.6 透明度
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description TopBar.Content Title and subtitle color, subtitle color is the color plus 0.6 transparency.
     * @defaultValue null
     */
    color?: string;
    /**
     * @language zh-CN
     * @description TopBar.Content 的标题
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description Title of TopBar.Content
     * @defaultValue ''
     */
    title?: string;
    /**
     * @language zh-CN
     * @description 标题样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Title style
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 副标题
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description SubTitle
     * @defaultValue ''
     */
    subTitle?: string;
    /**
     * @language zh-CN
     * @description 副标题样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description SubTitle style
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    subTitleStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description TopBar.Content 的位置，可为左对齐、居中对齐和右对齐
     * @defaultValue 'center'
     */
    /**
     * @language en-US
     * @description TopBar.Content  Can be left, center, and right
     * @defaultValue 'center'
     */
    position?: 'left' | 'center' | 'right';
    /**
     * @language zh-CN
     * @description 点击事件
     * @types (event: <a target='_blank' href='https://reactnative.dev/docs/pressevent'>GestureResponderEvent</a>) => void
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Click event
     * @types (event: <a target='_blank' href='https://reactnative.dev/docs/pressevent'>GestureResponderEvent</a>) => void
     * @defaultValue () => {}
     */
    onPress?: (event: GestureResponderEvent) => void;
    /**
     * @language zh-CN
     * @description 子元素
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Sub element
     * @defaultValue null
     */
    children?: React.ReactNode;
}
export interface TopBarActionProps extends TopBarProps, IconFontProps {
    /**
     * @language zh-CN
     * @description TopBar.Action 的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description TopBar.Action style.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description TopBar.Action主体的样式，可为图片、文字或IconFont的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description TopBar.Action content style, which can be pictures, text, or IconFont.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description TopBar.Action 的 IconFont 的尺寸
     * @defaultValue 17
     */
    /**
     * @language en-US
     * @description TopBar.Action IconFont size.
     * @defaultValue 17
     */
    size?: number;
    /**
     * @language zh-CN
     * @description TopBar.Action 的左右边距，注若为文字类型 spacing 将会被作为额外宽度添加给 Action
     * @defaultValue 6
     */
    /**
     * @language en-US
     * @description The left and right margins of TopBar.Action.
     * @defaultValue 6
     */
    spacing?: number;
    /**
     * @language zh-CN
     * @description TopBar.Action 主体内容的颜色，可为图片的底色、文字颜色或 IconFont 颜色。
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description TopBar.Action content color, which can be the background color of the picture, text color, or IconFont color.
     * @defaultValue null
     */
    color?: string;
    /**
     * @language zh-CN
     * @description TopBar.Action的主体内容， 若为字符串则渲染文字组件，若为数值或网络图片则渲染图片组件，若不存在则渲染空View。
     * @types <a target="_blank" href="https://reactnative.dev/docs/image#source">ImageSourcePropType</a> | string
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description TopBar.Action content.
     * @types <a target="_blank" href="https://reactnative.dev/docs/image#source">ImageSourcePropType</a> | string
     * @defaultValue null
     */
    source?: ImageSourcePropType | string;
    /**
     * @language zh-CN
     * @description 是否禁用
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to disable or not.
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 子元素
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Sub element
     * @defaultValue null
     */
    children?: React.ReactNode;
    /**
     * @language zh-CN
     * @description 点击事件
     * @types (event: <a target='_blank' href='https://reactnative.dev/docs/pressevent'>GestureResponderEvent</a>) => void
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Click event
     * @types (event: <a target='_blank' href='https://reactnative.dev/docs/pressevent'>GestureResponderEvent</a>) => void
     * @defaultValue () => {}
     */
    onPress?: (event: GestureResponderEvent) => void;
}
export interface TopBarProps extends TopBarContentProps {
    /**
     * @language zh-CN
     * @description 头部栏主题
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description TopBar theme
     * @defaultValue null
     */
    theme?: {
        background?: string;
        color?: string;
    };
    /**
     * @language zh-CN
     * @description TopBar的左工具栏配置。如果它为空，它将呈现iOS和Android的默认返回按钮。
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2740">TopBarActionProps[]</a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The left toolbar configuration of TopBar. If it is null, it will render the default return buttons for iOS and Android.
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2740">TopBarActionProps[]</a>
     * @defaultValue null
     */
    leftActions?: TopBarActionProps[];
    /**
     * @language zh-CN
     * @description TopBar的右工具栏配置
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2740">TopBarActionProps[]</a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The right toolbar configuration of TopBar.
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/299b2dd5a2ac708ca9464aba3685300acb7c865c/types/tuya-panel-kit/index.d.ts#L2740">TopBarActionProps[]</a>
     * @defaultValue null
     */
    actions?: TopBarActionProps[];
    /**
     * @language zh-CN
     * @description 顶部工具栏的容器内容的样式
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The style of the container content of the top toolbar.
     * @defaultValue null
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 顶部工具栏容器的背景，可以是纯色或渐变色。
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/aa5f210a2f10112b55b3faf9457e312badebce86/types/tuya-panel-kit/theme.d.ts#L145">BackgroundProps</a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The background of the top toolbar container, which can be a solid color or a gradient color.
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/aa5f210a2f10112b55b3faf9457e312badebce86/types/tuya-panel-kit/theme.d.ts#L145">BackgroundProps</a>
     * @defaultValue null
     */
    background?: BackgroundProps;
    /**
     * @language zh-CN
     * @description 返回按钮的回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Callback of back
     * @defaultValue () => {}
     */
    onBack?: (...args: any[]) => void;
}
export class TopBar extends React.Component<TopBarProps> {
    static Container: React.ElementType<TopBarContainerProps>;
    static Content: React.ElementType<TopBarContentProps>;
    static Action: React.ElementType<TopBarActionProps>;
    static height: number;
}

// Tabs
export interface TabDataSource extends ViewProps {
    /**
     * @language zh-CN
     * @description 索引值
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Index
     * @defaultValue undefined
     */
    value: string;
    /**
     * @language zh-CN
     * @description Tab 标签里的文本
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Text in tab
     * @defaultValue undefined
     */
    label?: string;
    /**
     * @language zh-CN
     * @description 是否可以点击切换 Tab
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Can I click switch tab
     * @defaultValue undefined
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 自定义 Tab 渲染
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Custom tab rendering
     * @defaultValue undefined
     */
    renderTab?: (isActive: boolean, state: {}, props: {}) => React.ReactNode;
}
export interface TabsProps {
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue "Tabs"
     */
    /**
     * @language en-US
     * @description Test identification
     * @defaultValue "Tabs"
     */
    accessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description Tabs 的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The style of Tabs.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 存在 TabContent 时，包裹着 Tabs 以及 TabContent 的容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The container style that wraps Tabs and TabContent. It only takes effect when TabContent is configured.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    wrapperStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 单个 Tab 的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The style of a single tab
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    tabStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 单个激活 Tab 的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The style of a single active tab
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    tabActiveStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 未激活的文本样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description he text style of the unselected Tab.
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    tabTextStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 激活的文本样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The selected text style.
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    tabActiveTextStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 存在 TabContent 时才有效，TabContent 的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The style of TabContent. It only takes effect when TabContent is configured.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    tabContentStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 下划线的样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Style of the underline.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    underlineStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 下环线的宽度，不设置则默认跟随文字大小
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description The width of the underline. If not set, it will follow the text width by default.
     * @defaultValue undefined
     */
    underlineWidth?: number;
    /**
     * @language zh-CN
     * @description 默认的激活值，想成为非受控组件时使用
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description The default activation value. It is used when it is set to uncontrolled components
     * @defaultValue 0
     */
    defaultActiveKey?: number | string;
    /**
     * @language zh-CN
     * @description 激活值，如果给定了则成为受控组件，需搭配 onChange 使用
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Activation value. If the parameter value is set, it becomes a controlled component. It needs to be used with onChange.
     * @defaultValue undefined
     */
    activeKey?: number | string;
    /**
     * @language zh-CN
     * @description 数据源
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/3a07a00d4e5e3400adeee9c4857b5799d41e53d7/types/tuya-panel-kit/index.d.ts#L7699">TabDataSource</a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Data source
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/3a07a00d4e5e3400adeee9c4857b5799d41e53d7/types/tuya-panel-kit/index.d.ts#L7699">TabDataSource</a>
     * @defaultValue undefined
     */
    dataSource: TabDataSource[];
    /**
     * @language zh-CN
     * @description 是否禁用 Tabs 标签页（注意只针对 Tabs，不针对 TabContent）
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to disable the Tabs page.
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 一屏下最多可存在的 tab 数量
     * @defaultValue 4
     */
    /**
     * @language en-US
     * @description The maximum number of Tab labels supported on a screen.
     * @defaultValue 4
     */
    maxItem?: number;
    /**
     * @language zh-CN
     * @description Tab 与 TabContent 同时存在时，Tab 的排列位置
     * @defaultValue 'top'
     */
    /**
     * @language en-US
     * @description When Tab and TabContent exist at the same time, the arrangement position of Tab
     * @defaultValue 'top'
     */
    tabPosition?: 'top' | 'bottom';
    /**
     * @language zh-CN
     * @description Tab Content 是否可滚动
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Is tab content scrollEnable
     * @defaultValue true
     */
    swipeable?: boolean;
    /**
     * @language zh-CN
     * @description Tabs 和下划线激活时的颜色
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description The color when activated.
     * @defaultValue undefined
     */
    activeColor?: string;
    /**
     * @language zh-CN
     * @description Tabs 的背景色
     * @defaultValue '#fff'
     */
    /**
     * @language en-US
     * @description The background color of Tab page.
     * @defaultValue '#fff'
     */
    background?: string;
    /**
     * @language zh-CN
     * @description TabContent 是否需要预加载
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether TabContent needs to be preloaded.
     * @defaultValue true
     */
    preload?: boolean;
    /**
     * @language zh-CN
     * @description TabContent 预加载延时时间
     * @defaultValue 375
     */
    /**
     * @language en-US
     * @description The preload delay time of TabContent.
     * @defaultValue 375
     */
    preloadTimeout?: number;
    /**
     * @language zh-CN
     * @description 加速度阈值，滑动速率超过该阈值直接判断为下一页
     * @defaultValue 0.5
     */
    /**
     * @language en-US
     * @description The acceleration threshold of TabContent in px. If the sliding rate exceeds the threshold, it is directly judged as the next page.
     * @defaultValue 0.5
     */
    velocityThreshold?: number;
    /**
     * @language zh-CN
     * @description 自定义渲染预加载中的占位容器
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Custom rendering of the placeholder container in the preload.
     * @defaultValue undefined
     */
    renderPlaceholder?: (activeIndex: number, child: React.ReactNode) => React.ReactNode;
    /**
     * @language zh-CN
     * @description Tab 变更回调
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Callback for tab change.
     * @defaultValue undefined
     */
    onChange?: (tab: TabDataSource, idx: number) => void;
    /**
     * @language zh-CN
     * @description Tab 的子元素，一般为 TabContent
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description The child element of Tab, generally TabContent.
     * @defaultValue undefined
     */
    children?: React.ReactNode;
    /**
     * @language zh-CN
     * @description 右边额外的留白距离
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description The extra white space on the right, in px.
     * @defaultValue 0
     */
    extraSpace?: number;
    /**
     * @language zh-CN
     * @description 动画配置
     * @defaultValue { duration: 200, easing: Easing.linear, delay: 0, isInteraction: true, useNativeDriver: true }
     */
    /**
     * @language en-US
     * @description Animation configuration
     * @defaultValue { duration: 200, easing: Easing.linear, delay: 0, isInteraction: true, useNativeDriver: true }
     */
    animationConfig?: {
        duration?: number;
        easing?: () => void;
        delay?: number;
        isInteraction?: boolean;
        useNativeDriver?: boolean;
    };
}
export interface TabContentProps {
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue "TabContent"
     */
    /**
     * @language en-US
     * @description Test identification
     * @defaultValue "TabContent"
     */
    accessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 嵌套子元素
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Nested sub elements
     * @defaultValue undefined
     */
    children: React.ReactNode;
    /**
     * @language zh-CN
     * @description 内容样式
     * <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Container style
     * <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 是否禁用 TabContent
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to disable TabContent.
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 当前激活所处的索引
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Current activation index
     * @defaultValue undefined
     */
    activeIndex: number;
    /**
     * @language zh-CN
     * @description TabContent 是否需要预加载
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether TabContent needs to be preloaded.
     * @defaultValue true
     */
    preload?: boolean;
    /**
     * @language zh-CN
     * @description TabContent 预加载延时时间
     * @defaultValue 375
     */
    /**
     * @language en-US
     * @description The preload delay time of TabContent.
     * @defaultValue 375
     */
    preloadTimeout?: number;
    /**
     * @language zh-CN
     * @description 加速度阈值，滑动速率超过该阈值直接判断为下一页
     * @defaultValue 0.5
     */
    /**
     * @language en-US
     * @description The acceleration threshold of TabContent in px. If the sliding rate exceeds the threshold, it is directly judged as the next page.
     * @defaultValue 0.5
     */
    velocityThreshold?: number;
    /**
     * @language zh-CN
     * @description TabContent 滑动回调
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description TabContent sliding callback.
     * @defaultValue undefined
     */
    onMove?: (gestureState: {}, index: number, percent: number) => void;
    /**
     * @language zh-CN
     * @description TabContent 滑动结束时回调
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Callback of TabContent sliding end.
     * @defaultValue undefined
     */
    onRelease?: (gestureState: {}, index: number, percent: number) => void;
    /**
     * @language zh-CN
     * @description 自定义渲染预加载中的占位容器
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Custom rendering of the placeholder container in the preload.
     * @defaultValue undefined
     */
    renderPlaceholder?: (activeIndex: number, child: React.ReactNode) => React.ReactNode;
    /**
     * @language zh-CN
     * @description 动画配置
     * @defaultValue { duration: 200, easing: Easing.linear, delay: 0, isInteraction: true, useNativeDriver: true }
     */
    /**
     * @language en-US
     * @description Animation configuration
     * @defaultValue { duration: 200, easing: Easing.linear, delay: 0, isInteraction: true, useNativeDriver: true }
     */
    animationConfig?: {
        duration?: number;
        easing?: () => void;
        delay?: number;
        isInteraction?: boolean;
        useNativeDriver?: boolean;
    };
}
export interface TabPanelProps extends ViewProps {
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 背景色
     * @defaultValue 'transparent'
     */
    /**
     * @language en-US
     * @description Background color
     * @defaultValue 'transparent'
     */
    background?: string;
}
export class Tabs extends React.Component<TabsProps> {
    static TabContent: React.ElementType<TabContentProps>;
    static TabPanel: React.ElementType<TabPanelProps>;
    static TabScrollView: React.ElementType<ScrollViewProps>;
}

// TimerPicker
export interface TimerPickerProps extends Omit<PickerViewProps, 'children'> {
    /**
     * @language zh-CN
     * @description 测试标识
     * @defaultValue "TimerPicker"
     */
    /**
     * @language en-US
     * @description  Test identification
     * @defaultValue "TimerPicker"
     */
    accessibilityLabel?: string;
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description picker 是否支持手势
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Does picker support gestures
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 开始时间，minutes(0 - 1440)
     * @defaultValue 480
     */
    /**
     * @language en-US
     * @description Start time, minutes (0 - 1440)
     * @defaultValue 480
     */
    startTime?: number;
    /**
     * @language zh-CN
     * @description 结束时间，minutes(0 - 1440)
     * @defaultValue 840
     */
    /**
     * @language en-US
     * @description End time, minutes (0 - 1440)
     * @defaultValue 840
     */
    endTime?: number;
    /**
     * @language zh-CN
     * @description 时间段更改回调
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Time period change callback
     * @defaultValue null
     */
    onTimerChange?: (startTime: number, endTime: number) => void;
    /**
     * @language zh-CN
     * @description 是否为 12 小时制
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Is it 12 hours
     * @defaultValue true
     */
    is12Hours?: boolean;
    /**
     * @language zh-CN
     * @description 是否只需要一个 picker
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Is only one picker needed
     * @defaultValue false
     */
    singlePicker?: boolean;
    /**
     * @language zh-CN
     * @description 前缀位置（即 AM / PM 位置）
     * @defaultValue 'right'
     */
    /**
     * @language en-US
     * @description Prefix position (i.e. AM / PM position)
     * @defaultValue 'right'
     */
    prefixPosition?: string[] | ('left' | 'right');
    /**
     * @language zh-CN
     * @description picker 字体颜色
     * @defaultValue "#333"
     */
    /**
     * @language en-US
     * @description The color of the picker font.
     * @defaultValue "#333"
     */
    pickerFontColor?: string;
    /**
     * @language zh-CN
     * @description 前缀字符
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Prefix character
     * @defaultValue undefined
     */
    symbol?: string;
}
export class TimerPicker extends React.Component<TimerPickerProps> {}

// Tips
export interface TipsProps {
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 气泡位置信息
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Bubble position information
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    tipStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 气泡背景颜色
     * @defaultValue '#fff'
     */
    /**
     * @language en-US
     * @description Bubble background color
     * @defaultValue '#fff'
     */
    bgColor?: string;
    /**
     * @language zh-CN
     * @description 是否显示气泡
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Is bubble displayed
     * @defaultValue false
     */
    show?: boolean;
    /**
     * @language zh-CN
     * @description 嵌套子元素
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Nested sub elements
     * @defaultValue null
     */
    children?: React.ReactNode;
    /**
     * @language zh-CN
     * @description 是否显示角标
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Is corner marker displayed
     * @defaultValue true
     */
    showCorner?: boolean;
    /**
     * @language zh-CN
     * @description 气泡动画类型
     * @defaultValue 'ScaleFadeIn'
     */
    /**
     * @language en-US
     * @description Bubble animation type
     * @defaultValue 'ScaleFadeIn'
     */
    motionType?: 'Fade' | 'PullUp' | 'ScaleFadeIn' | 'ScalePullDown' | 'PushDown';
    /**
     * @language zh-CN
     * @description 角标位置
     * @defaultValue 'topCenter'
     */
    /**
     * @language en-US
     * @description Corner mark position
     * @defaultValue 'topCenter'
     */
    cornerPosition?: 'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
    /**
     * @language zh-CN
     * @description 动画配置
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/65d54ea9f8a91a28d45805aaa0f78ad7cec25a10/types/tuya-panel-kit/index.d.ts#L2767">MotionScaleFadeInProps</a> | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/65d54ea9f8a91a28d45805aaa0f78ad7cec25a10/types/tuya-panel-kit/index.d.ts#L2741">MotionFadeProps</a> | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/65d54ea9f8a91a28d45805aaa0f78ad7cec25a10/types/tuya-panel-kit/index.d.ts#L2754">MotionPullUpProps</a> | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/65d54ea9f8a91a28d45805aaa0f78ad7cec25a10/types/tuya-panel-kit/index.d.ts#L2824">MotionScalePullDownProps</a> | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/65d54ea9f8a91a28d45805aaa0f78ad7cec25a10/types/tuya-panel-kit/index.d.ts#L2848">MotionPushDownProps</a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Animation configuration
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/65d54ea9f8a91a28d45805aaa0f78ad7cec25a10/types/tuya-panel-kit/index.d.ts#L2767">MotionScaleFadeInProps</a> | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/65d54ea9f8a91a28d45805aaa0f78ad7cec25a10/types/tuya-panel-kit/index.d.ts#L2741">MotionFadeProps</a> | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/65d54ea9f8a91a28d45805aaa0f78ad7cec25a10/types/tuya-panel-kit/index.d.ts#L2754">MotionPullUpProps</a> | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/65d54ea9f8a91a28d45805aaa0f78ad7cec25a10/types/tuya-panel-kit/index.d.ts#L2824">MotionScalePullDownProps</a> | <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/65d54ea9f8a91a28d45805aaa0f78ad7cec25a10/types/tuya-panel-kit/index.d.ts#L2848">MotionPushDownProps</a>
     * @defaultValue {}
     */
    motionConfig?:
        | MotionScaleFadeInProps
        | MotionFadeProps
        | MotionPullUpProps
        | MotionScalePullDownProps
        | MotionPushDownProps;
    /**
     * @language zh-CN
     * @description 是否应用于 Popup 上，并伴有遮罩
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether it is applied to popup with mask
     * @defaultValue false
     */
    withModal?: boolean;
}
export class Tips extends React.Component<TipsProps> {}

// Toast
export interface ToastProps {
    /**
     * @language zh-CN
     * @description 最外层样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Outermost style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 内层包裹样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Inner wrapping style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 文字样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Text style
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 图片样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/image-style-props">StyleProp<ImageStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Image style
     * @types <a target="_blank" href="https://reactnative.dev/docs/image-style-props">StyleProp<ImageStyle></a>
     * @defaultValue null
     */
    imageStyle?: StyleProp<ImageStyle>;
    /**
     * @language zh-CN
     * @description 提示文字
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description Text
     * @defaultValue ''
     */
    text?: string;
    /**
     * @language zh-CN
     * @description 是否显示提示框
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Display prompt box
     * @defaultValue null
     */
    show: boolean;
    /**
     * @language zh-CN
     * @description 动画结束回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Animation end callback
     * @defaultValue () => {}
     */
    onFinish: () => void;
    /**
     * @language zh-CN
     * @description 显示位置
     * @defaultValue 'bottom'
     */
    /**
     * @language en-US
     * @description Display position
     * @defaultValue 'bottom'
     */
    showPosition?: 'top' | 'bottom' | 'center';
    /**
     * @language zh-CN
     * @description 图片
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Image
     * @defaultValue null
     */
    image?: number;
    /**
     * @language zh-CN
     * @description 嵌套子元素
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Nested sub elements
     * @defaultValue null
     */
    children?: React.ReactNode;
}
export interface ToastSuccessProps extends ToastProps {
    /**
     * @language zh-CN
     * @description 图标尺寸
     * @defaultValue cx(28)
     */
    /**
     * @language en-US
     * @description Icon size
     * @defaultValue cx(40)
     */
    size?: number;
    /**
     * @language zh-CN
     * @description 图标路径
     * @defaultValue <a target="_blank" href="https://github.com/tuya/tuya-panel-kit/blob/master/src/components/res/iconfont.json#L4">iconfont.correct</a>
     */
    /**
     * @language en-US
     * @description 图标路径
     * @defaultValue <a target="_blank" href="https://github.com/tuya/tuya-panel-kit/blob/master/src/components/res/iconfont.json#L4">iconfont.correct</a>
     */
    d?: string | any[];
    /**
     * @language zh-CN
     * @description 图标样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Icon style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    iconfontStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 图标颜色
     * @defaultValue '#FFF'
     */
    /**
     * @language en-US
     * @description Icon color
     * @defaultValue '#FFF'
     */
    color?: string;
}
export interface ToastWarningProps extends ToastProps {
    /**
     * @language zh-CN
     * @description 图标尺寸
     * @defaultValue cx(28)
     */
    /**
     * @language en-US
     * @description Icon size
     * @defaultValue cx(40)
     */
    size?: number;
    /**
     * @language zh-CN
     * @description 图标路径
     * @defaultValue <a target="_blank" href="https://github.com/tuya/tuya-panel-kit/blob/master/src/components/res/iconfont.json#L3">iconfont.warning</a>
     */
    /**
     * @language en-US
     * @description Icon path
     * @defaultValue <a target="_blank" href="https://github.com/tuya/tuya-panel-kit/blob/master/src/components/res/iconfont.json#L3">iconfont.warning</a>
     */
    d?: string;
    /**
     * @language zh-CN
     * @description 图标样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Icon style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    iconfontStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 图标颜色
     * @defaultValue '#FFF'
     */
    /**
     * @language en-US
     * @description Icon color
     * @defaultValue '#FFF'
     */
    color?: string;
}
export interface ToastErrorProps extends ToastProps {
    /**
     * @language zh-CN
     * @description 图标尺寸
     * @defaultValue cx(40)
     */
    /**
     * @language en-US
     * @description Icon size
     * @defaultValue cx(28)
     */
    size?: number;
    /**
     * @language zh-CN
     * @description 图标路径
     * @defaultValue <a target="_blank" href="https://github.com/tuya/tuya-panel-kit/blob/master/src/components/res/iconfont.json#L2">iconfont.error</a>
     */
    /**
     * @language en-US
     * @description Icon path
     * @defaultValue <a target="_blank" href="https://github.com/tuya/tuya-panel-kit/blob/master/src/components/res/iconfont.json#L2">iconfont.error</a>
     */
    d?: string;
    /**
     * @language zh-CN
     * @description 图标样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Icon style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue Icon null
     */
    iconfontStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 图标颜色
     * @defaultValue '#FFF'
     */
    /**
     * @language en-US
     * @description Icon color
     * @defaultValue '#FFF'
     */
    color?: string;
}
export interface ToastLoadingProps extends ToastProps {
    /**
     * @language zh-CN
     * @description 图标尺寸
     * @defaultValue cx(28)
     */
    /**
     * @language en-US
     * @description Icon size
     * @defaultValue cx(28)
     */
    size?: number;
    /**
     * @language zh-CN
     * @description 图标颜色
     * @defaultValue '#FFF'
     */
    /**
     * @language en-US
     * @description Icon color
     * @defaultValue '#FFF'
     */
    color?: string;
    /**
     * @language zh-CN
     * @description 图标是否转动
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Does the icon rotate
     * @defaultValue true
     */
    loading?: boolean;
    /**
     * @language zh-CN
     * @description  图标填充宽度
     * @defaultValue cx(4)
     */
    /**
     * @language en-US
     * @description The fill width of the icon
     * @defaultValue cx(4)
     */
    strokeWidth?: number;
    /**
     * @language zh-CN
     * @description 加载图标背景色
     * @defaultValue 'rgba(255,255,255,.1)'
     */
    /**
     * @language en-US
     * @description Loading icon background color
     * @defaultValue 'rgba(255,255,255,.1)'
     */
    loadingBackgroundColor?: string;
    /**
     * @language zh-CN
     * @description 加载图标样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Loading icon styles
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    loadingStyle?: StyleProp<ViewStyle>;
}
export class Toast extends React.Component<ToastProps> {
    static Success: React.ElementType<ToastSuccessProps>;
    static Warning: React.ElementType<ToastWarningProps>;
    static Error: React.ElementType<ToastErrorProps>;
    static Loading: React.ElementType<ToastLoadingProps>;
}

// TYFlatList
export interface TYSectionInputProps
    extends Omit<TYListItemProps, 'onBlur' | 'onFocus'>,
        Omit<TextInputProps, 'style'> {
    /**
     * @language zh-CN
     * @description 标题
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Title
     * @defaultValue null
     */
    title: string;
    /**
     * @language zh-CN
     * @description 标题样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Title style
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    titleStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 输入框样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Input box style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue {}
     */
    inputStyle?: StyleProp<ViewStyle>;
}
export interface TYFlatListData {
    /**
     * @language zh-CN
     * @description 其他属性
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Other attributes
     * @defaultValue null
     */
    [prop: string]: any;
    /**
     * @language zh-CN
     * @description Key 值
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Key Value
     * @defaultValue null
     */
    key?: string | number;
    /**
     * @language zh-CN
     * @description 右侧 Action 具体值
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Specific value of action on the right
     * @defaultValue null
     */
    Action?: any;
    /**
     * @language zh-CN
     * @description 标题
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Title
     * @defaultValue null
     */
    title?: string;
    /**
     * @language zh-CN
     * @description 副标题
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description SubTitle
     * @defaultValue null
     */
    subTitle?: string;
    /**
     * @language zh-CN
     * @description 是否已经选中
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Is it already selected
     * @defaultValue null
     */
    checked?: boolean;
    /**
     * @language zh-CN
     * @description 改变回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Change callback
     * @defaultValue () => {}
     */
    onChange?: () => void;
}
export interface TYFlatListProps<ItemT extends TYFlatListData> extends Omit<FlatListProps<ItemT>, 'renderItem'> {
    /**
     * @language zh-CN
     * @description 内容样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 数据源
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/84c8c92bc47dffbf2df6b0af1b8325573e6b91bc/types/tuya-panel-kit/index.d.ts#L8878">ItemT[]</a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Data source
     * @types <a target="_blank" href="https://github.com/tuya/DefinitelyTyped/blob/84c8c92bc47dffbf2df6b0af1b8325573e6b91bc/types/tuya-panel-kit/index.d.ts#L8878">ItemT[]</a>
     * @defaultValue null
     */
    data: ItemT[];
    /**
     * @language zh-CN
     * @description 分割线样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Separator style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    separatorStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 应用于滚动视图内容容器，该容器包装了所有子视图
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description These styles will be applied to the scroll view content container which wraps all of the child views.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue undefined
     */
    contentContainerStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 列表项实例
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description List item instance
     * @defaultValue null
     */
    flatListRef?: () => void;
    /**
     * @language zh-CN
     * @description 是否使用 ART 实现版本
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Is art used to implement the version
     * @defaultValue false
     */
    useART?: boolean;
    /**
     * @language zh-CN
     * @description 内容是否可以滚动
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Can content scroll
     * @defaultValue true
     */
    scrollEnabled?: boolean;
    /**
     * @language zh-CN
     * @description 自定义列表项
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Custom list items
     * @defaultValue null
     */
    renderItem?: ListRenderItem<ItemT> | null;
}
export interface TYFlatListCheckbox<ItemT extends TYFlatListData> extends TYFlatListProps<ItemT>, CheckboxProps {}
export class TYFlatList<ItemT extends TYFlatListData> extends React.Component<TYFlatListProps<ItemT>> {
    static CheckboxItem: React.ElementType<TYFlatListCheckbox<TYFlatListData>>;
    static Item: React.ElementType<TYListItemProps>;
    static InputItem: React.ElementType<TYSectionInputProps>;
    static SliderItem: React.ElementType<TYSectionSliderProps>;
    static SwitchItem: React.ElementType<TYSectionListProps>;
}

// TYListItem
export interface TYListItemProps extends TouchableOpacityProps {
    /**
     * @language zh-CN
     * @description 列表项的所有样式
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description All styles for list items
     * @defaultValue {}
     */
    styles?: {
        container?: StyleProp<ViewStyle>;
        content?: StyleProp<ViewStyle>;
        contentLeft?: StyleProp<ViewStyle>;
        contentCenter?: StyleProp<ViewStyle>;
        contentRight?: StyleProp<ViewStyle>;
        title?: StyleProp<TextStyle>;
        subTitle?: StyleProp<TextStyle>;
    };
    /**
     * @language zh-CN
     * @description 主题配置
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Theme configuration
     * @defaultValue {}
     */
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
    /**
     * @language zh-CN
     * @description 列表项右边区域是否显示 arrow 标签
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Is the arrow label displayed in the right area of the list item
     * @defaultValue false
     */
    arrow?: boolean;
    /**
     * @language zh-CN
     * @description arrow 图标颜色
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Arrow icon color
     * @defaultValue null
     */
    arrowColor?: string;
    /**
     * @language zh-CN
     * @description arrow 是否使用 IconFont 渲染
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Does arrow render with iconfont
     * @defaultValue false
     */
    arrowUseIcon?: boolean;
    /**
     * @language zh-CN
     * @description 是否禁用列表点击事件，注意: Action点击事件不被此影响
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to disable list click events. Note: action click events are not affected by this
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 是否禁用 `Action` 点击事件
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Disable 'action' click events
     * @defaultValue false
     */
    actionDisabled?: boolean;
    /**
     * @language zh-CN
     * @description 标题
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Title
     * @defaultValue null
     */
    title?: string;
    /**
     * @language zh-CN
     * @description 副标题
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description SubTitle
     * @defaultValue null
     */
    subTitle?: string;
    /**
     * @language zh-CN
     * @description 子元素
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Subelement
     * @defaultValue null
     */
    children?: React.ReactNode;
    /**
     * @language zh-CN
     * @description 图片的 tintColor 是否跟随 iconColor
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Does the tintColor of the image follow iconColor
     * @defaultValue true
     */
    imageFollowIconColor?: boolean;
    /**
     * @language zh-CN
     * @description 左侧 Icon 类型
     * @defaultValue 'auto'
     */
    /**
     * @language en-US
     * @description Icon type on the left
     * @defaultValue 'auto'
     */
    iconType?: 'auto' | 'image' | 'iconfont' | 'text';
    /**
     * @language zh-CN
     * @description 右侧 Action 类型
     * @defaultValue 'auto'
     */
    /**
     * @language en-US
     * @description Right action type
     * @defaultValue 'auto'
     */
    actionType?: 'auto' | 'image' | 'iconfont' | 'text';
    /**
     * @language zh-CN
     * @description 图标尺寸
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Icon size
     * @defaultValue null
     */
    iconSize?: number;
    /**
     * @language zh-CN
     * @description 图标颜色
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Icon Color
     * @defaultValue null
     */
    iconColor?: string;
    /**
     * @language zh-CN
     * @description 左侧 Icon 具体值，当类型为 string时，默认使用 IconFont
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Icon specific value on the left. When the type is string, Iconfont is used by default
     * @defaultValue null
     */
    Icon?: any;
    /**
     * @language zh-CN
     * @description 右侧 Action 具体值，当类型为 string时，默认使用 TYText
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Specific value of action on the right. When the type is string, TYText is used by default
     * @defaultValue null
     */
    Action?: any;
    /**
     * @language zh-CN
     * @description 是否需要重新渲染
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Do I need to render again
     * @defaultValue true
     */
    needUpdate?: boolean;
    /**
     * @language zh-CN
     * @description 是否使用 ART 实现版本
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Is art used to implement the version
     * @defaultValue false
     */
    useART?: boolean;
    /**
     * @language zh-CN
     * @description 列表项右边区域的触发回调
     * @defaultValue () => {}
     */
    /**
     * @language en-US
     * @description Trigger callback in the area to the right of the list item
     * @defaultValue () => {}
     */
    onActionPress?: () => void;
}
export class TYListItem extends React.Component<TYListItemProps> {}

// TYSectionList
export interface SectionDataProps {
    /**
     * @language zh-CN
     * @description Key 值
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Key Value
     * @defaultValue null
     */
    key?: string;
    /**
     * @language zh-CN
     * @description 分组列表的标题或者自定义头部渲染
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Group list title or custom header rendering
     * @defaultValue null
     */
    title?: string | React.ReactNode;
    /**
     * @language zh-CN
     * @description 列表项的具体值
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The specific value of the list item
     * @defaultValue null
     */
    value?: string | number | boolean;
    /**
     * @language zh-CN
     * @description 如果列表是开关类型，是否可以点击
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description If the list is of switch type, can I click
     * @defaultValue null
     */
    disabled?: boolean;
    /**
     * @language zh-CN
     * @description 分组列表的底部文本或者自定义渲染
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Text at the bottom of the group list or custom rendering
     * @defaultValue null
     */
    footer?: React.ReactNode;
    /**
     * @language zh-CN
     * @description 主题配置
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Theme configuration
     * @defaultValue null
     */
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
    /**
     * @language zh-CN
     * @description 数据源
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Data source
     * @defaultValue null
     */
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
export interface TYSectionListProps extends SectionListProps<SectionDataProps> {
    /**
     * @language zh-CN
     * @description 内容是否可以滚动
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether the content can be scrolled
     * @defaultValue true
     */
    scrollEnabled?: boolean;
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 头部样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Header style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    headerStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 应用于滚动视图内容容器，该容器包装了所有子视图
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description These styles will be applied to the scroll view content container which wraps all of the child views.
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    contentContainerStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 分割线样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Separator style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    separatorStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 列表项实例
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description List item instance
     * @defaultValue null
     */
    sectionListRef?: () => void;
    /**
     * @language zh-CN
     * @description 是否使用 ART 实现版本
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to use ART implementation version
     * @defaultValue false
     */
    useART?: boolean;
}
export interface TYSectionSliderProps extends Omit<SliderProps, 'theme'> {
    /**
     * @language zh-CN
     * @description 主题配置
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Theme configuration
     * @defaultValue {}
     */
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
    /**
     * @language zh-CN
     * @description 左侧 Icon 类型
     * @defaultValue 'auto'
     */
    /**
     * @language en-US
     * @description Icon type on the left
     * @defaultValue 'auto'
     */
    iconType?: 'auto' | 'image' | 'iconfont' | 'text';
    /**
     * @language zh-CN
     * @description 右侧 Action 类型
     * @defaultValue 'auto'
     */
    /**
     * @language en-US
     * @description Right action type
     * @defaultValue 'auto'
     */
    actionType?: 'auto' | 'image' | 'iconfont' | 'text';
    /**
     * @language zh-CN
     * @description 图标尺寸
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The size of icon
     * @defaultValue null
     */
    iconSize?: number;
    /**
     * @language zh-CN
     * @description 图标颜色
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description The Color of icon
     * @defaultValue null
     */
    iconColor?: string;
    /**
     * @language zh-CN
     * @description 左侧 Icon 具体值，当类型为 string时，默认使用 IconFont
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Icon specific value on the left. When the type is string, Iconfont is used by default
     * @defaultValue null
     */
    Icon?: any;
    /**
     * @language zh-CN
     * @description 右侧 Action 具体值，当类型为 string时，默认使用 TYText
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Specific value of action on the right. When the type is string, TYText is used by default
     * @defaultValue null
     */
    Action?: any;
    /**
     * @language zh-CN
     * @description 容器样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 内容样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Content Style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    contentStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 滑块样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Style of slider
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    sliderStyle?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 文字样式
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Style of text
     * @types <a target="_blank" href="https://reactnative.dev/docs/text-style-props">StyleProp<TextStyle></a>
     * @defaultValue null
     */
    textStyle?: StyleProp<TextStyle>;
    /**
     * @language zh-CN
     * @description 图片的 tintColor 是否跟随iconColor，默认为 true
     * @defaultValue true
     */
    /**
     * @language en-US
     * @description Whether the image's tintcolor follows icolor or not, the default is true
     * @defaultValue true
     */
    imageFollowIconColor?: boolean;
    /**
     * @language zh-CN
     * @description 是否使用 ART 实现版本
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Is art used to implement the version
     * @defaultValue false
     */
    useART?: boolean;
}
export interface TYSectionCheckboxProps extends TYListItemProps, CheckboxProps {}
export interface TYSectionSwitchProps extends Omit<TYListItemProps, 'theme'>, SwitchButtonProps {}
export class TYSectionList extends React.Component<TYSectionListProps> {
    static CheckboxItem: React.ElementType<TYSectionCheckboxProps>;
    static Item: React.ElementType<TYListItemProps>;
    static InputItem: React.ElementType<TYSectionInputProps>;
    static SliderItem: React.ElementType<TYSectionSliderProps>;
    static SwitchItem: React.ElementType<TYSectionSwitchProps>;
}

// TYText
export interface TYTextProps extends TextProps {
    /**
     * @language zh-CN
     * @description 字体类型
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Type of font
     * @defaultValue null
     */
    type?: 'heading' | 'title' | 'paragraph';
    /**
     * @language zh-CN
     * @description 字体尺寸
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Size of font
     * @defaultValue null
     */
    size?: ('large' | 'normal' | 'small') | number;
    /**
     * @language zh-CN
     * @description 字体对齐方式
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Font alignment
     * @defaultValue null
     */
    align?: 'left' | 'center' | 'right';
    /**
     * @language zh-CN
     * @description 字体粗细
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Font weight
     * @defaultValue null
     */
    weight?: number | string;
    /**
     * @language zh-CN
     * @description 字体颜色
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Font color
     * @defaultValue null
     */
    color?: string;
    /**
     * @language zh-CN
     * @description 文本
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Text
     * @defaultValue null
     */
    text?: string;
}
export class TYText extends React.Component<TYTextProps> {}

// UnitText
export interface UnitTextProps {
    /**
     * @language zh-CN
     * @description 是否使用 ART 形式展示
     * @defaultValue false
     */
    /**
     * @language en-US
     * @description Whether to use ART format display
     * @defaultValue false
     */
    useART?: boolean;
    /**
     * @language zh-CN
     * @description 内容样式
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Container style
     * @types <a target='_blank' href='https://reactnative.dev/docs/view-style-props'>StyleProp<ViewStyle></a>
     * @defaultValue null
     */
    style?: StyleProp<ViewStyle>;
    /**
     * @language zh-CN
     * @description 字体尺寸大小
     * @defaultValue 82
     */
    /**
     * @language en-US
     * @description Font size
     * @defaultValue 82
     */
    size?: number;
    /**
     * @language zh-CN
     * @description 具体值的尺寸大小
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Size of specific value
     * @defaultValue null
     */
    valueSize?: number;
    /**
     * @language zh-CN
     * @description 定制每个值的颜色
     * @defaultValue []
     */
    /**
     * @language en-US
     * @description Customize the color of each value
     * @defaultValue []
     */
    valueColors?: string[];
    /**
     * @language zh-CN
     * @description 具体值的颜色
     * @defaultValue "white"
     */
    /**
     * @language en-US
     * @description The color of the specific value
     * @defaultValue "white"
     */
    valueColor?: string;
    /**
     * @language zh-CN
     * @description 单位
     * @defaultValue ''
     */
    /**
     * @language en-US
     * @description Unit
     * @defaultValue ''
     */
    unit?: string;
    /**
     * @language zh-CN
     * @description 单位的尺寸大小
     * @defaultValue null
     */
    /**
     * @language en-US
     * @description Size of unit
     * @defaultValue null
     */
    unitSize?: number;
    /**
     * @language zh-CN
     * @description 单位的颜色
     * @defaultValue "white"
     */
    /**
     * @language en-US
     * @description The color of the unit
     * @defaultValue "white"
     */
    unitColor?: string;
    /**
     * @language zh-CN
     * @description 单位的左边距
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description The left margin of the unit
     * @defaultValue 0
     */
    unitPaddingLeft?: number;
    /**
     * @language zh-CN
     * @description 单位的上边距
     * @defaultValue 0
     */
    /**
     * @language en-US
     * @description The top margin of the unit
     * @defaultValue 0
     */
    unitPaddingTop?: number;
    /**
     * @language zh-CN
     * @description 单位的类型
     * @defaultValue 'icon'
     */
    /**
     * @language en-US
     * @description Type of unit
     * @defaultValue 'icon'
     */
    unitType?: 'icon' | 'text';
    /**
     * @language zh-CN
     * @description 具体值
     * @defaultValue undefined
     */
    /**
     * @language en-US
     * @description Value
     * @defaultValue undefined
     */
    value: string | number;
    /**
     * @language zh-CN
     * @description 自定义文字的宽度
     * @defaultValue 0.55
     */
    /**
     * @language en-US
     * @description Custom text width
     * @defaultValue 0.55
     */
    letterWidth?: number;
    /**
     * @language zh-CN
     * @description 自定义符号的宽度（如.,:等）
     * @defaultValue 0.35
     */
    /**
     * @language en-US
     * @description Custom symbol width (e.g.,,: etc.)
     * @defaultValue 0.35
     */
    symbolWidth?: number;
    /**
     * @language zh-CN
     * @description 被认作为 symbol 的字符串，并结合 symbolWidth 使用
     * @defaultValue ['.', ':', ',']
     */
    /**
     * @language en-US
     * @description String recognized as symbol and used in combination with symbol width
     * @defaultValue ['.', ':', ',']
     */
    symbols?: string[];
    /**
     * @language zh-CN
     * @description 额外的 svg 路径映射表，用于拓展内部的 svg path 或覆盖内部的 svg path
     * @defaultValue {}
     */
    /**
     * @language en-US
     * @description Additional SVG path mapping table is used to expand the internal SVG path or cover the internal SVG path
     * @defaultValue {}
     */
    svgMap?: {};
}
export class UnitText extends React.Component<UnitTextProps, ViewProps> {}

// i18n
export class I18N {
    constructor(...args: any[]);
    language: string;
    getDpLang: (code: string, value?: string | boolean) => string;
    getLang: (key: string, defaultString?: string) => string;
    getRangeStrings: (dpCode: string) => Record<string, string>;
    getFaultStrings: (faultCode: string, faultValue: string, onlyPrior: boolean) => string;
}

export interface ThemeProps {
    theme: {};
    children: React.ReactNode;
}
export class Theme extends React.Component<ThemeProps> {}
/**
 * The useTheme hook let's us access the currently active theme
 */
export function useTheme(): object;

export interface ThemeProviderProps {
    children: React.ReactNode;
    theme: any;
}

export interface ThemeConsumerProps {
    children?: React.ReactNode;
    theme?: GlobalTheme;
}

export let Utils: {
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
        dateFormat(fmt: string, date: Date): string;
        timezone(): string;
    };
};

export let defaultTheme: GlobalTheme;
// tslint:disable-next-line interface-name
export interface I18NLanMap {
    en: Record<string, string>;
    zh: Record<string, string>;
    [lanKey: string]: Record<string, string>;
}

export type DpType = 'bool' | 'value' | 'enum' | 'raw' | 'string' | 'bitmap';

export interface DpSchema {
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

export type NetworkType = 'WIFI' | 'GPRS' | 'BLE' | 'NONE';

export type DpValue = boolean | number | string;

export interface DevInfo<S = Record<string, DpType>> {
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
    parentId?: string;
    groupId?: string;
}

export type MobileService = 'AY' | 'AZ' | 'EU' | 'WE' | 'UE' | 'IN';

export interface MobileInfo {
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

export interface DeprecatedNavigatorRoute {
    id: string;
    [routeProp: string]: any;
}

export interface DeprecatedNavigator {
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

export interface LinearGradientBackgroundOffset {
    [offset: string]: string;
}

export interface NavigationOptions {
    params?: object;
    /**
     * 容器样式
     */
    style?: StyleProp<ViewStyle>;
    /**
     * 自定义面板背景
     * @label `number` 渲染本地图片
     * @label `string` 渲染颜色
     * @label `{ uri: string }` 渲染网络图片
     * @label `RadialGradientBackground` 渲染径向渐变
     * @label `LinearGradientBackground` 渲染线性渐变
     *
     */
    background?:
        | number
        | string
        | { uri: string }
        | RadialGradientBackground
        | (LinearGradientBackground & LinearGradientBackgroundOffset);
    /**
     * 自定义头部栏样式
     */
    topbarStyle?: StyleProp<ViewStyle>;
    /**
     * 自定义头部栏文字样式
     */
    topbarTextStyle?: StyleProp<TextStyle>;
    /**
     * 自定义面板背景样式
     */
    backgroundStyle?: StyleProp<ViewStyle>;
    /**
     * 自定义头部栏标题
     */
    title?: string;
    hideTopbar?: boolean;
    /**
     * 控制是否显示离线遮罩
     * @defaultValueValue true
     */
    showOfflineView?: boolean;
    /**
     * 是否允许手势
     */
    gesture?: boolean;
    /**
     * 是否启用首页手势返回 app 列表页面
     * @defaultValueValue true
     */
    enablePopGesture?: boolean;
    /**
     * @desc 蓝牙离线提示是否覆盖整个面板(除头部栏外)
     * @defaultValueValue true
     */
    isBleOfflineOverlay?: boolean;
    /**
     * 自定义渲染头部栏
     */
    renderTopBar?: () => JSX.Element;
    /**
     * 自定义渲染状态栏
     */
    renderStatusBar?: () => JSX.Element;
}

export class NavigatorLayout<P = {}, S = {}> extends React.Component<P, { modalVisible: boolean } & S> {
    hookRoute(route: DeprecatedNavigatorRoute): NavigationOptions;
    renderScene(route: DeprecatedNavigatorRoute, navigator: DeprecatedNavigator): JSX.Element | undefined;
}

export interface NavigationRoute {
    name: string;
    component: React.ComponentType;
    options?:
        | StackNavigationOptions
        | ((props: { route: RouteProp<ParamListBase, string>; navigation: any }) => StackNavigationOptions)
        | NavigationOptions;
}

export type ScreenOptions =
    | StackNavigationOptions
    | ((props: { route: RouteProp<ParamListBase, string>; navigation: any }) => StackNavigationOptions);

export interface NavigationParam {
    router: NavigationRoute[];
    screenOptions?: ScreenOptions;
}

export interface NavigationComponentClass<P = {}, S = {}> {
    new (props: P, context?: any): NavigatorLayout<P, S>;
}
// tslint:disable-next-line no-unnecessary-generics
export function createNavigator<P = {}, S = {}>(createNavigatorParam: NavigationParam): NavigationComponentClass<P, S>;

export type GotoDpAlarmData = Array<{
    dpId: string;
    dpName: string;
    selected: number;
    rangeKeys: DpValue[];
    rangeValues: string[];
}>;

export const TransitionPresets: {
    SlideFromRightIOS: TransitionPreset;
    ModalSlideFromBottomIOS: TransitionPreset;
    ModalPresentationIOS: TransitionPreset;
    FadeFromBottomAndroid: TransitionPreset;
    RevealFromBottomAndroid: TransitionPreset;
    ScaleFromCenterAndroid: TransitionPreset;
    DefaultTransition: TransitionPreset;
    ModalTransition: TransitionPreset;
    SlideFromRightWithMargin: TransitionPreset;
};

export interface StringType {
    [key: string]: string;
}
export let Strings: {
    /**
     * @param strings
     * @param force false
     */
    applyStrings: (
        strings: {
            [key: string]: StringType;
        },
        force?: boolean,
    ) => void;
    setLanguage: (language: string) => void;
    buildLanguage: (language: string) => void;
    formatString: (str: string, ...args: string[]) => string;
    formatValue: (key: string, value: string | number) => string;
    getDpLang: (code: string, value?: boolean | string) => string;
    getDpName: (code: string, defaultName?: string) => string;
    getDpsLang: (key: string) => { [key: string]: string };
    getLang: (key: string, defaultString?: string) => string;
    /**
     * 获取 picker 标题
     * @param dpCode
     */
    getRangeStrings: (dpCode: string | number) => string;
    /**
     *  开关倒计时转换为文案 time => 设备将在xxx后 关闭／开启
     *  精确到分钟
     * @param t 倒计时剩余(秒)
     * @param power 设备当前的开关状态 (如果当前设备为开启状态， 则倒计时显示为关闭)
     */
    parseCountdown: (t: number, power: 'on' | 'off') => string;
};

export let TYSdk: {
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
        is24Hour(): Promise<boolean>;

        /**
         * 跳转面板原生事件
         */
        uiIdNavEventEmitter: {
            createEmitter(): void;
            addListener(listener: AnyFunction): void;
            removeEmitter(): void;
            registerEventListener(): void;
            sendEvent(props: any): void;
            /**
             * 跳转面板, 等同于jumpSubPage, 只是传参形式的区别
             * @param uiId uiid
             * @param props 携带参数
             */
            pushWithUiID(uiId: string, props: any): void;
        };

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
        is24Hour: () => Promise<boolean>;
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
