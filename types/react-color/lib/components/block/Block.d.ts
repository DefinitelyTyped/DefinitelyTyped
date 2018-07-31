import { Component } from "react";
import { ColorPickerProps, Color } from "../../..";

export interface BlockPickerProps extends ColorPickerProps<BlockPicker> {
    colors?: string[];
    width?: string;
    triangle?: 'hide' | 'top';
    onSwatchHover?(color: Color, event: MouseEvent): void;
}

export default class BlockPicker extends Component<BlockPickerProps> {}
