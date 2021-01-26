import { Component, ComponentType, CSSProperties } from "react";
import { CustomPickerInjectedProps, HSLColor, RenderersProps } from "../../..";

export interface AlphaStyle {
    alpha?: CSSProperties;
    checkboard?: CSSProperties;
    gradient?: CSSProperties;
    container?: CSSProperties;
    pointer?: CSSProperties;
    slider?: CSSProperties;
}

export interface AlphaColorResult extends HSLColor {
    a: number;
    source: "rgb";
}

export interface AlphaProps extends RenderersProps, CustomPickerInjectedProps<AlphaColorResult> {
    pointer?: ComponentType;
    radius?: string;
    shadow?: string;
    direction?: "vertical" | "horizontal";
    style?: AlphaStyle;
}

export default class Alpha extends Component<AlphaProps> {}
