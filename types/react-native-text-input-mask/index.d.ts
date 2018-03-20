// Type definitions for react-native-text-input-mask 0.7
// Project: https://github.com/react-native-community/react-native-text-input-mask
// Definitions by: Rodrigo Weber <https://github.com/RodrigoAWeber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import * as React from "react";
import * as ReactNative from "react-native";

export type onChangeTextCallback = (formatted: string, extracted: string) => void;

export interface TextInputMaskProps {
    maskDefaultValue?: boolean;
    mask: string;
    value?: string;
    onChangeText: onChangeTextCallback;
    keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad';
}

export default class TextInputMask extends React.Component<TextInputMaskProps> { }
