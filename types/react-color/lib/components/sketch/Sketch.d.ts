import { Component } from "react";
import { ColorPickerProps } from "react-color";

export interface SketchPickerProps extends ColorPickerProps<SketchPicker> {
    disableAlpha?: boolean;
    presetColors?: string[];
    width?: string;
}

export default class SketchPicker extends Component<SketchPickerProps> {}
