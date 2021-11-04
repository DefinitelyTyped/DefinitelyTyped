import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState } from "../../..";
import { Classes } from "reactcss";

export interface TwitterPickerStylesProps {
    card?: CSSProperties | undefined;
    body?: CSSProperties | undefined;
    label?: CSSProperties | undefined;
    triangle?: CSSProperties | undefined;
    triangleShadow?: CSSProperties | undefined;
    hash?: CSSProperties | undefined;
    input?: CSSProperties | undefined;
    swatch?: CSSProperties | undefined;
    clear?: CSSProperties | undefined;
}

export interface TwitterPickerProps extends CustomPickerProps {
    colors?: string[] | undefined;
    width?: string | undefined;
    triangle?: "hide" | "top-left" | "top-right" | undefined;
    styles?: Partial<Classes<TwitterPickerStylesProps>> | undefined;
    onSwatchHover?(color: ColorState, event: MouseEvent): void;
}

export default class TwitterPicker extends Component<TwitterPickerProps> { }
