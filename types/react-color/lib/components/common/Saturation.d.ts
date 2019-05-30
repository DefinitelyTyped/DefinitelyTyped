import { Component, CSSProperties, ReactNode } from "react";
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
    pointer?: ReactNode;
}

export default class Saturation extends Component<SaturationProps> {}
