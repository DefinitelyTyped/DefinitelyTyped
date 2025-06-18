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
