import { Component } from "react";
import { ColorPickerProps, ColorResult } from "../../..";

export interface GithubPickerProps extends ColorPickerProps<GithubPicker> {
    colors?: string[];
    width?: string;
    triangle?: 'hide' | 'top-left' | 'top-right';
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class GithubPicker extends Component<GithubPickerProps> {}
