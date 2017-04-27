import { Component } from "react";
import { CustomPickerProps, HSLColor } from "react-color";

export interface HueProps extends CustomPickerProps<Hue> {
    direction?: "horizontal" | "vertical";
    hsl: HSLColor;
}

export default class Hue extends Component<HueProps, any> {}
