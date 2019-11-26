import { Component, CSSProperties, ComponentType } from "react";
import { CustomPickerInjectedProps } from "../../..";

export interface SaturationStyle {
    color?: CSSProperties;
    white?: CSSProperties;
    black?: CSSProperties;
    pointer?: CSSProperties;
    circle?: CSSProperties;
}

export interface SaturationProps extends CustomPickerInjectedProps {
    radius?: string;
    shadow?: string;
    style?: SaturationStyle;
    pointer?: ComponentType;
}

export default class Saturation extends Component<SaturationProps> {}
