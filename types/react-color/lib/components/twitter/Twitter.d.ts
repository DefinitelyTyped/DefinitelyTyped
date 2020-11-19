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
    colors?: string[];
    width?: string;
    triangle?: 'hide' | 'top-left' | 'top-right';
    styles?: Partial<Classes<TwitterPickerStylesProps>>;
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class TwitterPicker extends Component<TwitterPickerProps> { }
