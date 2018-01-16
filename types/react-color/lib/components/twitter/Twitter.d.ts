import { Component } from "react";
import { ColorPickerProps, Color } from "../../..";

export interface TwitterPickerProps extends ColorPickerProps<TwitterPicker> {
    colors?: string[];
    width?: string;
    triangle?: 'hide' | 'top-left' | 'top-right';
    onSwatchHover?(color: Color, event: MouseEvent): void;
}

export default class TwitterPicker extends Component<TwitterPickerProps> {}
