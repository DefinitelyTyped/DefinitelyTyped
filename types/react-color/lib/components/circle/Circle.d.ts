import { Component } from "react";
import { ColorPickerProps, Color } from "../../..";

export interface CirclePickerProps extends ColorPickerProps<CirclePicker> {
    colors?: string[];
    width?: string;
    circleSize?: number;
    circleSpacing?: number;
    onSwatchHover?(color: Color, event: MouseEvent): void;
}

export default class CirclePicker extends Component<CirclePickerProps> {}
