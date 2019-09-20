import { Component } from "react";
import { ColorPickerProps, ColorResult } from "../../..";

export interface BlockPickerProps extends ColorPickerProps<BlockPicker> {
    colors?: string[];
    width?: string;
    triangle?: 'hide' | 'top';
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class BlockPicker extends Component<BlockPickerProps> {}
