import { Component } from "react";
import { ColorPickerProps, ColorResult } from "../../..";

export interface TwitterPickerProps extends ColorPickerProps<TwitterPicker> {
    colors?: string[];
    width?: string;
    triangle?: 'hide' | 'top-left' | 'top-right';
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class TwitterPicker extends Component<TwitterPickerProps> {}
