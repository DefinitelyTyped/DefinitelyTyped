// Type definitions for react-native-material-textfield 0.15.1
// Project: https://github.com/n4kz/react-native-material-textfield
// Definitions by: Ville Venäläinen <https://github.com/mindhivefi>
//                 Deividi Cavarzan <https://github.com/cavarzan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { TextInputProps, TextStyle, ViewStyle, View } from 'react-native';

export interface TextFieldProps extends TextInputProps {
    animationDuration?: number;

    fontSize?: number;
    titleFontSize?: number;
    labelFontSize?: number;
    labelHeight?: number;
    labelPadding?: number;
    inputContainerPadding?: number;

    labelTextStyle?: TextStyle;
    titleTextStyle?: TextStyle;
    affixTextStyle?: TextStyle;

    tintColor?: string;
    textColor?: string;
    baseColor?: string;

    label?: string;
    title?: string;

    characterRestriction?: number;

    error?: string;
    errorColor?: string;

    lineWidth?: number;
    activeLineWidth?: number;

    disabled?: boolean;

    disabledLineWidth?: number;

    renderAccessory?(): JSX.Element;

    clearTextOnFocus?: boolean;

    prefix?: string;
    suffix?: string;

    containerStyle?: ViewStyle;
    inputContainerStyle?: ViewStyle;

    onPress?(event: Event): void;
    onChangeText?(text: string): void;
}

/**
 * Material Style Text Field
 * @see https://github.com/n4kz/react-native-material-textfield/blob/master/src/components/field/index.js
 */
export class TextField extends React.Component<TextFieldProps, any> {}

export class OutlinedTextField extends TextField {

}
export class FilledTextField extends TextField {
    
}