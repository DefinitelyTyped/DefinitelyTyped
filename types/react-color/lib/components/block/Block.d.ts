import { Component, CSSProperties } from "react";
import { ColorPickerProps, ColorResult } from "../../..";
import { Classes } from "reactcss";

export interface BlockPickerStylesProps {
    card: CSSProperties;
    head: CSSProperties;
    body: CSSProperties;
    label: CSSProperties;
    triangle: CSSProperties;
    input: CSSProperties;
}

export interface BlockPickerProps extends ColorPickerProps<BlockPicker> {
    colors?: string[];
    width?: string;
    triangle?: 'hide' | 'top';
    styles?: Partial<Classes<BlockPickerStylesProps>>;
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class BlockPicker extends Component<BlockPickerProps> { }
