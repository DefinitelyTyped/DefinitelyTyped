import { Component } from "react";
import { ColorPickerProps, ColorResult } from "../../..";

export interface SwatchesPickerProps extends ColorPickerProps<SwatchesPicker> {
    colors?: string[][];
    height?: number;
    width?: number;
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class SwatchesPicker extends Component<SwatchesPickerProps> {}
