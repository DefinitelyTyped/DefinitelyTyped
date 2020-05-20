// Type definitions for react-native-material-textfield 0.16
// Project: https://github.com/n4kz/react-native-material-textfield
// Definitions by: Ville Venäläinen <https://github.com/mindhivefi>
//                 Kyle Roach <https://github.com/iRoachie>
//                 Deividi Cavarzan <https://github.com/cavarzan>
//                 Neel bhasin <https://github.com/neelb2>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import {
    StyleProp,
    TextInputProps,
    TextStyle,
    ViewStyle,
    View
} from "react-native";

export interface ContentInset {
    top?: number;
    label?: number;
    input?: number;
}

export interface TextFieldProps extends TextInputProps {
    animationDuration?: number;

    fontSize?: number;
    labelFontSize?: number;
    contentInset?: ContentInset;

    style?: StyleProp<TextStyle>;
    labelTextStyle?: StyleProp<TextStyle>;
    titleTextStyle?: StyleProp<TextStyle>;
    affixTextStyle?: StyleProp<TextStyle>;

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

    clearTextOnFocus?: boolean;

    prefix?: string;
    suffix?: string;

    containerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;

    onPress?(event: Event): void;
    onChangeText?(text: string): void;

    renderLeftAccessory?(): JSX.Element;
    renderRightAccessory?(): JSX.Element;

    lineType?: 'solid' | 'dotted' | 'dashed' | 'none';
    disabledLineType?: 'solid' | 'dotted' | 'dashed' | 'none';

    editable?: boolean;
    multiline?: boolean;

    formatText?(text: string): string;
}

/**
 * Material Style Text Field
 * @see https://github.com/n4kz/react-native-material-textfield/blob/master/src/components/field/index.js
 */
export class TextField extends React.Component<TextFieldProps, any> {
    /*
     * Acquire focus
     */
    focus(): void;
    /*
     * Release focus
     */
    blur(): void;
    /*
     * Clear text field
     */
    clear(): void;
    /*
     * Get current value
     */
    value(): string;
    /*
     * Get current focus state
     */
    isFocused(): boolean;
    /*
     * Get current restriction state
     */
    isRestricted(): boolean;
    /*
     * Set current value
     */
    setValue(value?: string): void;
}

export class OutlinedTextField extends TextField {}
export class FilledTextField extends TextField {}
