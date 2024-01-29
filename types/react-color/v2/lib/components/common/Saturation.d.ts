import { Component, ComponentType, CSSProperties } from "react";
import { CustomPickerInjectedProps, HSVColor } from "../../..";

export interface SaturationStyle {
    color?: CSSProperties | undefined;
    white?: CSSProperties | undefined;
    black?: CSSProperties | undefined;
    pointer?: CSSProperties | undefined;
    circle?: CSSProperties | undefined;
}

export interface SaturationColorResult extends HSVColor {
    a: number;
    source: "hsv";
}

export interface SaturationProps extends CustomPickerInjectedProps<SaturationColorResult> {
    radius?: string | undefined;
    shadow?: string | undefined;
    style?: SaturationStyle | undefined;
    pointer?: ComponentType | undefined;
}

export default class Saturation extends Component<SaturationProps> {}
