import { Component, CSSProperties } from "react";
import { ColorPickerProps, ColorResult } from "../../..";
import { Classes } from "reactcss";

export interface TwitterPickerStylesProps {
    card: CSSProperties;
    body: CSSProperties;
    label: CSSProperties;
    triangle: CSSProperties;
    triangleShadow: CSSProperties;
    hash: CSSProperties;
    input: CSSProperties;
    swatch: CSSProperties;
    clear: CSSProperties;
}

export interface TwitterPickerProps extends ColorPickerProps<TwitterPicker> {
    colors?: string[] | undefined;
    width?: string | undefined;
    triangle?: 'hide' | 'top-left' | 'top-right' | undefined;
    styles?: Partial<Classes<TwitterPickerStylesProps>> | undefined;
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class TwitterPicker extends Component<TwitterPickerProps> { }
