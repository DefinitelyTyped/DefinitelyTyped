import { Component } from "react";
import { ColorPickerProps } from "react-color";

export interface GithubPickerProps extends ColorPickerProps<GithubPicker> {
    colors?: string[];
    width?: string;
    triangle?: 'hide' | 'top-left' | 'top-right';
}

export default class GithubPicker extends Component<GithubPickerProps> {}
