import { Component } from "react";
import { ColorPickerProps, ColorResult } from "../../..";

export interface CirclePickerProps extends ColorPickerProps<CirclePicker> {
    colors?: string[];
    width?: string;
    circleSize?: number;
    circleSpacing?: number;
    onSwatchHover?(colorResult: ColorResult, event: MouseEvent): void;
}

export default class CirclePicker extends Component<CirclePickerProps> {}
