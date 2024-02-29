import { Component, ComponentType, CSSProperties } from "react";
import { CustomPickerInjectedProps, HSLColor, RenderersProps } from "../../..";

export interface AlphaStyle {
    alpha?: CSSProperties | undefined;
    checkboard?: CSSProperties | undefined;
    gradient?: CSSProperties | undefined;
    container?: CSSProperties | undefined;
    pointer?: CSSProperties | undefined;
    slider?: CSSProperties | undefined;
}

export interface AlphaColorResult extends HSLColor {
    a: number;
    source: "rgb";
}

export interface AlphaProps extends RenderersProps, CustomPickerInjectedProps<AlphaColorResult> {
    pointer?: ComponentType | undefined;
    radius?: string | undefined;
    shadow?: string | undefined;
    direction?: "vertical" | "horizontal" | undefined;
    style?: AlphaStyle | undefined;
}

export default class Alpha extends Component<AlphaProps> {}
