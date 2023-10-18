import * as React from "react";
import { Animated, TextStyle, ViewStyle } from "react-native";

export interface SnackbarComponentProps {
    accentColor?: string | undefined;
    actionText?: string | undefined;
    messageColor?: string | undefined;
    backgroundColor?: string | undefined;
    distanceCallback?: (() => void) | undefined;
    actionHandler?: (() => void) | undefined;
    left?: number | Animated.Value | undefined;
    right?: number | Animated.Value | undefined;
    top?: number | Animated.Value | undefined;
    bottom?: number | Animated.Value | undefined;
    position?: "bottom" | "top" | undefined;
    textMessage?: string | JSX.Element | undefined;
    autoHidingTime?: number | undefined;
    visible?: boolean | undefined;
    containerStyle?: ViewStyle | undefined;
    messageStyle?: TextStyle | undefined;
    actionStyle?: TextStyle | undefined;
}

export default class SnackbarComponent extends React.Component<SnackbarComponentProps> {}
