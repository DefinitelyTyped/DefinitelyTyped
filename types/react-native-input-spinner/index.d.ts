// Type definitions for react-native-input-spinner 1.2
// Project: https://github.com/marcocesarato/react-native-input-spinner#readme
// Definitions by: Manu Krishnan <https://github.com/mkrishnan-codes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface ReactNativeInputSpinnerProps {
    type?: 'int' | 'float';
    min?: string | number;
    max?: string | number;
    value?: string | number;
    step?: string | number;
    precision?: number;
    rounded?: boolean;
    activeOpacity?: number;
    color?: string;
    colorPress?: string;
    colorRight?: string;
    colorLeft?: string;
    colorMax?: string;
    colorMin?: string;
    background?: string;
    textColor?: string;
    arrows?: boolean;
    showBorder?: boolean;
    fontSize?: number;
    fontFamily?: string;
    buttonFontSize?: number;
    buttonFontFamily?: string;
    buttonTextColor?: string;
    disabled?: boolean;
    editable?: boolean;
    width?: string | number;
    height?: string | number;
    onChange?: (val?: any) => any;
    onMin?: (val: any) => any;
    onMax?: (val: any) => any;
    onIncrease?: (val: any) => any;
    onDecrease?: (val: any) => any;
    buttonLeftDisabled?: boolean;
    buttonRightDisabled?: boolean;
    buttonLeftText?: string;
    buttonRightText?: string;
    buttonLeftImage?: React.ReactElement;
    buttonRightImage?: React.ReactElement;
    buttonPressLeftImage?: React.ReactElement;
    buttonPressRightImage?: React.ReactElement;
    buttonStyle?: StyleProp<ViewStyle>;
    buttonPressStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
    append?: React.ReactElement;
    prepend?: React.ReactElement;
    initialValue?: number;
    buttonPressTextColor?: string;
}
export default class InputSpinner extends Component<ReactNativeInputSpinnerProps> { }
