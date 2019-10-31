import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState } from "../../..";

export interface TwitterPickerDefaultStyle {
    card?: CSSProperties;
    body?: CSSProperties;
    label?: CSSProperties;
    triangle?: CSSProperties;
    triangleShadow?: CSSProperties;
    hash?: CSSProperties;
    input?: CSSProperties;
    swatch?: CSSProperties;
    clear?: CSSProperties;
}

export interface TwitterPickerTriangleStyle {
    triangle?: CSSProperties;
    triangleShadow?: CSSProperties;
}

export interface TwitterPickerStyle {
    default?: TwitterPickerDefaultStyle;
    "top-left-triangle"?: TwitterPickerTriangleStyle;
    "top-right-triangle"?: TwitterPickerTriangleStyle;
}

export interface TwitterPickerProps extends CustomPickerProps {
    colors?: string[];
    width?: string;
    triangle?: "hide" | "top-left" | "top-right";
    onSwatchHover?(color: ColorState, event: MouseEvent): void;
    styles?: TwitterPickerStyle;
    className?: string;
}

export default class TwitterPicker extends Component<TwitterPickerProps> {}
