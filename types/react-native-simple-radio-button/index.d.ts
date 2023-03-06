// Type definitions for react-native-simple-radio-button 2.7
// Project: https://github.com/moschan/react-native-simple-radio-button
// Definitions by: Frabanz <https://github.com/Frabanz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';

export interface DefaultRadioFormProps {
    accessible?: boolean | undefined;
    accessibilityLabel?: string | undefined;
    testID?: string | undefined;
    onPress?: ((val?: any) => any) | undefined;
}

export interface ReactNativeRadioFormProps extends DefaultRadioFormProps {
    children?: React.ReactNode;
    radio_props?: Array<{label: string, value: string | number}> | undefined;
    initial?: number | undefined;
    buttonColor?: string | undefined;
    labelColor?: string | undefined;
    formHorizontal?: boolean | undefined;
    labelHorizontal?: boolean | undefined;
    animation?: boolean | undefined;
}

export interface RadioButtonProps {
    children?: React.ReactNode;
    isSelected?: boolean | undefined;
    labelHorizontal?: boolean | undefined;
    buttonColor?: string | undefined;
    selectedButtonColor?: string | undefined;
    labelColor?: string | undefined;
    style?: StyleProp<ViewStyle> | undefined;
    wrapStyle?: StyleProp<ViewStyle> | undefined;
    idSeparator?: string | undefined;
}

export interface RadioButtonInputProps extends DefaultRadioFormProps {
    obj: object;
    index: number;
    isSelected?: boolean | undefined;
    buttonInnerColor?: string | undefined;
    buttonOuterColor?: string | undefined;
    buttonSize?: number | undefined;
    buttonOuterSize?: number | undefined;
    buttonStyle?: StyleProp<ViewStyle> | undefined;
    buttonWrapStyle?: StyleProp<ViewStyle> | undefined;
}

export interface RadioButtonLabelProps extends DefaultRadioFormProps {
    obj: object;
    index: number;
    labelHorizontal?: boolean | undefined;
    labelStyle?: StyleProp<TextStyle> | undefined;
    labelWrapStyle?: StyleProp<ViewStyle> | undefined;
}

export class RadioButton extends React.Component<RadioButtonProps> {}

export class RadioButtonInput extends React.Component<RadioButtonInputProps> {}

export class RadioButtonLabel extends React.Component<RadioButtonLabelProps> {}

export default class RadioForm extends React.Component<ReactNativeRadioFormProps> {}
