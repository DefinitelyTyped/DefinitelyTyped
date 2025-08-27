import * as React from "react";
import * as ReactNative from "react-native";

export interface KeyboardSpacerProps {
    topSpacing?: number | undefined;
    onToggle?: ((keyboardIsOpen: boolean, keyboardSpace: number) => void) | undefined;
    style?: ReactNative.StyleProp<ReactNative.ViewStyle> | undefined;
}

export default class KeyboardSpacer extends React.Component<KeyboardSpacerProps, any> {}
