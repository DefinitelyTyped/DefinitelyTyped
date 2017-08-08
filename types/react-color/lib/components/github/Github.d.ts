import { Component } from "react";
import { ColorPickerProps, Color } from "react-color";

export interface GithubPickerProps extends ColorPickerProps<GithubPicker> {
    colors?: string[];
    width?: string;
    triangle?: 'hide' | 'top-left' | 'top-right';
    onSwatchHover?(color: Color, event: MouseEvent): void;
}

export default class GithubPicker extends Component<GithubPickerProps> {}
