// Type definitions for react-native-loading-spinner-overlay 0.5
// Project: https://github.com/joinspontaneous/react-native-loading-spinner-overlay
// Definitions by: fhelwanger <https://github.com/fhelwanger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import * as ReactNative from "react-native";

export interface SpinnerProps {
    cancelable?: boolean;
    color?: string;
    animation?: "none" | "slide" | "fade";
    overlayColor?: string;
    size?: "normal" | "small" | "large";
    textContent?: string;
    textStyle?: ReactNative.StyleProp<ReactNative.TextStyle>;
    visible?: boolean;
    customIndicator?: React.ReactElement;
}

export default class Spinner extends React.Component<SpinnerProps> {}
