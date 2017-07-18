// Type definitions for react-native-elements 0.13
// Project: https://github.com/react-native-training/react-native-elements#readme
// Definitions by: Kyle Roach <https://github.com/iRoachie>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import { ViewStyle, TextStyle } from 'react-native';

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
 * @desc https://react-native-training.github.io/react-native-elements/API/HTML_style_headings/
 */
export class Text extends React.Component<TextProps, any> {}

export interface ButtonIcon {
    name?: string;
    color?: string;
    size?: number;
    type?: 'material' | 'material-community' | 'simple-line-icon' | 'zocial' | 'font-awesome' | 'octicon' | 'ionicon' | 'foundation' | 'evilicon' | 'entypo';
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
