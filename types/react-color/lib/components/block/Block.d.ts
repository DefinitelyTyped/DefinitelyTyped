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
    colors?: string[] | undefined;
    width?: string | undefined;
    triangle?: 'hide' | 'top' | undefined;
    styles?: Partial<Classes<BlockPickerStylesProps>> | undefined;
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class BlockPicker extends Component<BlockPickerProps> { }
