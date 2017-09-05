import { Component } from "react";
import { ColorPickerProps, Color } from "react-color";

export interface CompactPickerProps extends ColorPickerProps<CompactPicker> {
    colors?: string[];
    onSwatchHover?(color: Color, event: MouseEvent): void;
}

export default class CompactPicker extends Component<CompactPickerProps> {}
