import { Component, ComponentType } from "react";
import { CustomPickerInjectedProps, HSLColor } from "../../..";

export interface HueColorResult extends HSLColor {
    a: number;
    source: "hsl";
}

export interface HueProps extends CustomPickerInjectedProps<HueColorResult> {
    direction?: "horizontal" | "vertical" | undefined;
    pointer?: ComponentType | undefined;
    radius?: string | undefined;
    shadow?: string | undefined;
}

export default class Hue extends Component<HueProps> {}
