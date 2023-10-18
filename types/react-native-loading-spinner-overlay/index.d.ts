import * as React from "react";
import * as ReactNative from "react-native";

export interface SpinnerProps {
    cancelable?: boolean | undefined;
    color?: string | undefined;
    animation?: "none" | "slide" | "fade" | undefined;
    overlayColor?: string | undefined;
    size?: "normal" | "small" | "large" | undefined;
    textContent?: string | undefined;
    textStyle?: ReactNative.StyleProp<ReactNative.TextStyle> | undefined;
    visible?: boolean | undefined;
    customIndicator?: React.ReactElement | undefined;
}

export default class Spinner extends React.Component<SpinnerProps> {}
