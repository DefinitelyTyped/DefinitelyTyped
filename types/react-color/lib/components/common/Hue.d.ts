import { Component } from "react";
import { CustomPickerProps } from "../../..";

export interface HueProps extends CustomPickerProps<Hue> {
    direction?: "horizontal" | "vertical";
}

export default class Hue extends Component<HueProps> {}
