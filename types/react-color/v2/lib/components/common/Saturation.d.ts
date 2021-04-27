import { Component, CSSProperties, ComponentType } from "react";
import { CustomPickerInjectedProps, HSVColor } from "../../..";

export interface SaturationStyle {
    color?: CSSProperties;
    white?: CSSProperties;
    black?: CSSProperties;
    pointer?: CSSProperties;
    circle?: CSSProperties;
}

export interface SaturationColorResult extends HSVColor {
    a: number;
    source: "hsv";
}

export interface SaturationProps extends CustomPickerInjectedProps<SaturationColorResult> {
    radius?: string;
    shadow?: string;
    style?: SaturationStyle;
    pointer?: ComponentType;
}

export default class Saturation extends Component<SaturationProps> {}
