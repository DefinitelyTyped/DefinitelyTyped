import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState } from "../../..";
import { Classes } from "reactcss";

export interface TwitterPickerStylesProps {
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

export interface TwitterPickerProps extends CustomPickerProps {
    colors?: string[];
    width?: string;
    triangle?: "hide" | "top-left" | "top-right";
    styles?: Partial<Classes<TwitterPickerStylesProps>>;
    onSwatchHover?(color: ColorState, event: MouseEvent): void;
}

export default class TwitterPicker extends Component<TwitterPickerProps> { }
