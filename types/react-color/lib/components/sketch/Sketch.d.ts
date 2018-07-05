import { Component } from "react";
import { ColorPickerProps, Color } from "../../..";

export interface SketchPickerProps extends ColorPickerProps<SketchPicker> {
    disableAlpha?: boolean;
    presetColors?: string[];
    width?: string;
    onSwatchHover?(color: Color, event: MouseEvent): void;
}

export default class SketchPicker extends Component<SketchPickerProps> {}
