// Type definitions for react-native-input-spinner 1.2
// Project: https://github.com/marcocesarato/react-native-input-spinner#readme
// Definitions by: Manu Krishnan <https://github.com/mkrishnan-codes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface ReactNativeInputSpinnerProps {
    type?: 'int' | 'float' | undefined;
    min?: string | number | undefined;
    max?: string | number | undefined;
    value?: string | number | undefined;
    step?: string | number | undefined;
    precision?: number | undefined;
    rounded?: boolean | undefined;
    activeOpacity?: number | undefined;
    color?: string | undefined;
    colorPress?: string | undefined;
    colorRight?: string | undefined;
    colorLeft?: string | undefined;
    colorMax?: string | undefined;
    colorMin?: string | undefined;
    background?: string | undefined;
    textColor?: string | undefined;
    arrows?: boolean | undefined;
    showBorder?: boolean | undefined;
    fontSize?: number | undefined;
    fontFamily?: string | undefined;
    buttonFontSize?: number | undefined;
    buttonFontFamily?: string | undefined;
    buttonTextColor?: string | undefined;
    disabled?: boolean | undefined;
    editable?: boolean | undefined;
    width?: string | number | undefined;
    height?: string | number | undefined;
    onChange?: ((val?: any) => any) | undefined;
    onMin?: ((val: any) => any) | undefined;
    onMax?: ((val: any) => any) | undefined;
    onIncrease?: ((val: any) => any) | undefined;
    onDecrease?: ((val: any) => any) | undefined;
    buttonLeftDisabled?: boolean | undefined;
    buttonRightDisabled?: boolean | undefined;
    buttonLeftText?: string | undefined;
    buttonRightText?: string | undefined;
    buttonLeftImage?: React.ReactElement | undefined;
    buttonRightImage?: React.ReactElement | undefined;
    buttonPressLeftImage?: React.ReactElement | undefined;
    buttonPressRightImage?: React.ReactElement | undefined;
    buttonStyle?: StyleProp<ViewStyle> | undefined;
    buttonPressStyle?: StyleProp<ViewStyle> | undefined;
    inputStyle?: StyleProp<ViewStyle> | undefined;
    style?: StyleProp<ViewStyle> | undefined;
    append?: React.ReactElement | undefined;
    prepend?: React.ReactElement | undefined;
    initialValue?: number | undefined;
    buttonPressTextColor?: string | undefined;
}
export default class InputSpinner extends Component<ReactNativeInputSpinnerProps> { }
