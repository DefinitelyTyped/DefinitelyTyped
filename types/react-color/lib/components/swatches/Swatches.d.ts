import { Component } from "react";
import { ColorPickerProps } from "react-color";

export interface SwatchesPickerProps extends ColorPickerProps<SwatchesPicker> {
    colors?: string[][];
    height?: number;
    width?: number;
}

export default class SwatchesPicker extends Component<SwatchesPickerProps> {}
