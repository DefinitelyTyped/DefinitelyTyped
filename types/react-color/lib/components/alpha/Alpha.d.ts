import { Component } from "react";
import { ColorPickerProps } from "../../..";

export interface AlphaPickerProps extends ColorPickerProps<AlphaPicker> {
    height?: string;
    width?: string;
}

export default class AlphaPicker extends Component<AlphaPickerProps> {}
