// Type definitions for react-native-simple-radio-button 2.7
// Project: https://github.com/moschan/react-native-simple-radio-button
// Definitions by: Frabanz <https://github.com/Frabanz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface DefaultRadioFormProps {
    accessible?: boolean;
    accessibilityLabel?: string;
    testID?: string;
    onPress?: (val?: any) => any;
}

export interface ReactNativeRadioFormProps extends DefaultRadioFormProps {
    radio_props?: Array<{label: string, value: string | number}>;
    initial?: number;
    buttonColor?: string;
    labelColor?: string;
    formHorizontal?: boolean;
    labelHorizontal?: boolean;
    animation?: boolean;
}

export interface RadioButtonProps {
    isSelected?: boolean;
    labelHorizontal?: boolean;
    buttonColor?: string;
    selectedButtonColor?: string;
    labelColor?: string;
    style?: StyleProp<ViewStyle>;
    wrapStyle?: StyleProp<ViewStyle>;
    idSeparator?: string;
}

export interface RadioButtonInputProps extends DefaultRadioFormProps {
    obj: object;
    index: number;
    isSelected?: boolean;
    buttonInnerColor?: string;
    buttonOuterColor?: string;
    buttonSize?: number;
    buttonOuterSize?: number;
    buttonStyle?: StyleProp<ViewStyle>;
    buttonWrapStyle?: StyleProp<ViewStyle>;
}

export interface RadioButtonLabelProps extends DefaultRadioFormProps {
    obj: object;
    index: number;
    labelHorizontal?: boolean;
    labelStyle?: StyleProp<TextStyle>;
    labelWrapStyle?: StyleProp<ViewStyle>;
}

export class RadioButton extends React.Component<RadioButtonProps> {}

export class RadioButtonInput extends React.Component<RadioButtonInputProps> {}

export class RadioButtonLabel extends React.Component<RadioButtonLabelProps> {}

export default class RadioForm extends React.Component<ReactNativeRadioFormProps> {}
