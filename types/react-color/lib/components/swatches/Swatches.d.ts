import { Component } from "react";
import { ColorPickerProps, Color } from "../../..";

export interface SwatchesPickerProps extends ColorPickerProps<SwatchesPicker> {
    colors?: string[][];
    height?: number;
    width?: number;
    onSwatchHover?(color: Color, event: MouseEvent): void;
}

export default class SwatchesPicker extends Component<SwatchesPickerProps> {}
