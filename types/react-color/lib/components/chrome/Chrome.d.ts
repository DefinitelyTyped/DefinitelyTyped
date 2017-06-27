import { Component } from "react";
import { ColorPickerProps } from "react-color";

export interface ChromePickerProps extends ColorPickerProps<ChromePicker> {
    disableAlpha?: boolean;
}

export default class ChromePicker extends Component<ChromePickerProps> {}
