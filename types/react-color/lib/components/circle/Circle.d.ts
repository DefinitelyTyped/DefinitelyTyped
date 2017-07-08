import { Component } from "react";
import { ColorPickerProps } from "react-color";

export interface CirclePickerProps extends ColorPickerProps<CirclePicker> {
    colors?: string[];
    width?: string;
}

export default class CirclePicker extends Component<CirclePickerProps> {}
