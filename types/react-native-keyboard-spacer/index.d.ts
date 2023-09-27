// Type definitions for react-native-keyboard-spacer 0.4
// Project: https://github.com/Andr3wHur5t/react-native-keyboard-spacer#readme
// Definitions by: Vincent Langlet <https://github.com/VincentLanglet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import * as ReactNative from "react-native";

export interface KeyboardSpacerProps {
    topSpacing?: number | undefined;
    onToggle?: ((keyboardIsOpen: boolean, keyboardSpace: number) => void) | undefined;
    style?: ReactNative.StyleProp<ReactNative.ViewStyle> | undefined;
}

export default class KeyboardSpacer extends React.Component<KeyboardSpacerProps, any> {}
