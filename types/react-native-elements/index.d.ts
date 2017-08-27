// Type definitions for react-native-elements 0.13
// Project: https://github.com/react-native-training/react-native-elements#readme
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import { ViewStyle, TextStyle, ImageStyle, ImageURISource } from 'react-native';

export interface Icon {
    name?: string;
    color?: string;
    size?: number;
    type?: 'material' | 'material-community' | 'simple-line-icon' | 'zocial' | 'font-awesome' | 'octicon' | 'ionicon' | 'foundation' | 'evilicon' | 'entypo';
}

export interface AvatarIcon extends Icon {
    iconStyle?: TextStyle;
}

export interface TextProps {
    /**
     * font size 40
     */
    h1?: boolean;

    /**
     * font size 34
     */
    h2?: boolean;

    /**
     * font size 28
     */
    h3?: boolean;

    /**
     * font size 22
     */
    h4?: boolean;

    /**
     * font family name
     */
    fontFamily?: string;

    /**
     * Additional styling for Text
     */
    style?: TextStyle;
}

/**
 * HTML Style Headings
 *
 * @see https://react-native-training.github.io/react-native-elements/API/HTML_style_headings/
 */
export class Text extends React.Component<TextProps, any> {}

export interface AvatarProps {
    /**
     * Component for enclosing element (eg: TouchableHighlight, View, etc)
     *
     * @default TouchableOpacity
     */
    component?: React.ComponentClass;

    /**
     * Width for the Avatar
     *
     * @default 34
     */
    width?: number;

    /**
     * Height for the Avatar
     *
     * @default 34
     */
    height?: number;

    /**
     * Callback function when pressing component
     */
    onPress?(): void;

    /**
     * Callback function when long pressing component
     */
    onLongPress?(): void;

    /**
     * Styling for outer container
     */
    containerStyle?: ViewStyle;

    /**
     * Image source
     */
    source?: ImageURISource;

    /**
     * Style for avatar image
     */
    avatarStyle?: ImageStyle;

    /**
     * Determines the shape of avatar
     *
     * @default false
     */
    rounded?: boolean;

    /**
     * Renders title in the avatar
     */
    title?: string;

    /**
     * Style for the title
     */
    titleStyle?: TextStyle;

    /**
     * Style for the view outside image or icon
     */
    overlayContainerStyle?: ViewStyle;

    /**
     * Opacity when pressed
     *
     * @default 0.2
     */
    activeOpacity?: number;

    /**
     * Icon for the avatar
     */
    icon?: AvatarIcon;

    /**
     * extra styling for icon component (optional)
     */
    iconStyle?: TextStyle;

    /**
     * Small sized icon
     */
    small?: boolean;

    /**
     * Medium sized icon
     */
    medium?: boolean;

    /**
     * Large sized icon
     */
    large?: boolean;

    /**
     * Extra-large sized icon
     */
    xlarge?: boolean;
}

/**
 * Avatar Component
 *
 * @see https://react-native-training.github.io/react-native-elements/API/avatar/
 */
export class Avatar extends React.Component<AvatarProps, any> {}

export interface ButtonIcon extends Icon {
    buttonStyle?: TextStyle;
}

export interface ButtonProperties {
    /**
     * Specify other component such as TouchableOpacity or other
     *
     * @default TouchableHighlight (iOS), TouchableNativeFeedback (android)
     */
    Component?: JSX.Element;

    /**
     * Additional styling for button component
     *
     * @default null
     */
    buttonStyle?: ViewStyle;

    /**
     * Button title
     */
    title: string;

    /**
     * Makes button large
     *
     * @default false
     */
    large?: boolean;

    /**
     * Specify different font family
     *
     * @default System font (iOS), Sans Serif (android)
     */
    fontFamily?: string;

    /**
     * Specify font weight for title
     *
     * @default null
     */
    fontWeight?: string;

    /**
     * Moves icon to right of title
     *
     * @default false
     */
    iconRight?: boolean;

    /**
     * onPress method
     */
    onPress(): void;

    /**
     * onLongPress method
     */
    onLongPress?(): void;

    /**
     * Icon configuration
     */
    icon?: ButtonIcon;

    /**
     * Specify other icon component instead of default. The component will have all values from the icon prop
     *
     * @default MaterialIcon
     * @see https://github.com/oblador/react-native-vector-icons#icon-component
     */
    iconComponent?: JSX.Element;

    /**
     * Background color of button
     *
     * @default #397af8
     */
    backgroundColor?: string;

    /**
     * Adds border radius to button
     *  (Note: if you set this, don't forget to also set borderRadius to containerViewStyle prop, otherwise unexpected behaviour might occur)
     *
     * @default 0
     */
    borderRadius?: number;

    /**
     * Font color
     *
     * @default #fff
     */
    color?: string;

    /**
     * Text styling
     *
     * @default null
     */
    textStyle?: TextStyle;

    /**
     * Font size
     *
     * @default 18
     */
    fontSize?: number;

    /**
     * Underlay color for button press
     *
     * @default transparent
     */
    underlayColor?: string;

    /**
     * Flag to add raised button styling
     *
     * @default false
     */
    raised?: boolean;

    /**
     * Indicates button is disabled
     *
     * @default false
     */
    disabled?: boolean;

    /**
     * Disabled button styling
     *
     * @default null
     */
    disabledStyle?: ViewStyle;

    /**
     * Styling for Component container
     *
     * @default null
     */
    containerViewStyle?: ViewStyle;
}

/**
 * Button component
 *
 * @see https://react-native-training.github.io/react-native-elements/API/buttons/
 */
export class Button extends React.Component<ButtonProperties, any> {}

export interface BadgeProperties {
    /**
     * Text value to be displayed by badge
     *
     * @default null
     */
    value?: string | number;

    /**
     * Style for the outer badge component
     */
    containerStyle?: ViewStyle;

    /**
     * Style for the outer-most badge component
     */
    wrapperStyle?: ViewStyle;

    /**
     * Style for the text in the badge
     */
    textStyle?: TextStyle;

    /**
     * Override the default badge contents, mutually exclusive with 'value' property
     */
    children?: JSX.Element;

    /**
     * Custom component to replace the badge outer component
     *
     * @default View, if onPress then TouchableOpacity
     */
    component?: React.ComponentClass;

    /**
     * Function called when pressed on the badge
     */
    onPress?(): void;
}

/**
 * Badge component
 *
 * @see https://react-native-training.github.io/react-native-elements/API/badge/
 */
export class Badge extends React.Component<BadgeProperties, any> {}

export interface CardProps {
    /**
     * Flex direction (row or column)
     *
     * @default 'column'
     */
    flexDirection?: 'column' | 'row';

    /**
     * Outer container style
     */
    containerStyle?: ViewStyle;

    /**
     * Inner container style
     */
    wrapperStyle?: ViewStyle;

    /**
     * Card title
     */
    title?: string;

    /**
     * Additional title styling (if title provided)
     */
    titleStyle?: TextStyle;

    /**
     * Title rendered over the image
     * (only works if image prop is present)
     */
    featuredTitle?: string;

    /**
     * Styling for featured title
     */
    featuredTitleStyle?: TextStyle;

    /**
     * Subtitle rendered over the image
     * (only works if image prop is present)
     */
    featuredSubtitle?: string;

    /**
     * Styling for featured subtitle
     */
    featuredSubtitleStyle?: TextStyle;

    /**
     * Additional divider styling
     * (if title provided)
     */
    dividerStyle?: ViewStyle;

    /**
     * Specify different font family
     *
     * @default System font bold (iOS), Sans Serif Bold (android)
     */
    fontFamily?: string;

    /**
     * Specify image styling if image is provided
     */
    imageStyle?: ImageStyle;

    /**
     * Specify styling for view surrounding image
     */
    imageWrapperStyle?: ViewStyle;

    /**
     * Add an image as the heading with the image prop
     */
    image?: ImageURISource;
}

/**
 * Card component
 *
 * @see https://react-native-training.github.io/react-native-elements/API/card/
 */
export class Card extends React.Component<CardProps, any> {}
