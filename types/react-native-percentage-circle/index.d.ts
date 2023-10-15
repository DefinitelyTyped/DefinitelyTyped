// Type definitions for react-native-percentage-circle 1.0
// Project: https://github.com/JackPu/react-native-percentage-circle
// Definitions by: Haseeb Majid <https://github.com/hmajid2301>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";
import { TextStyle } from "react-native";

export interface PercentageCircleProps {
    color?: string | undefined;
    bgcolor?: string | undefined;
    innerColor?: string | undefined;
    radius?: number | undefined;
    percent?: number | undefined;
    borderWidth?: number | undefined;
    textStyle?: TextStyle[] | undefined;
    disabled?: boolean | undefined;
}

export default class PercentageCircle extends React.Component<PercentageCircleProps> {}
