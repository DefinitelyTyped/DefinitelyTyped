import { Component, ComponentType } from "react";
import { CustomPickerInjectedProps } from "../../..";

export interface HueProps extends CustomPickerInjectedProps {
    direction?: "horizontal" | "vertical";
    pointer?: ComponentType;
    radius?: string;
    shadow?: string;
}

export default class Hue extends Component<HueProps> {}
