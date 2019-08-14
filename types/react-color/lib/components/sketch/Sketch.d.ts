import { Component } from "react";
import { ColorPickerProps, ColorResult } from "../../..";

export interface SketchPickerProps extends ColorPickerProps<SketchPicker> {
    disableAlpha?: boolean;
    presetColors?: string[];
    width?: string;
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class SketchPicker extends Component<SketchPickerProps> {}
