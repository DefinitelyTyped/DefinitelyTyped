import { Component, ComponentType, CSSProperties } from "react";
import { Classes } from "reactcss";
import { CustomPickerProps } from "../../..";

export interface HuePickerStylesProps {
    picker: CSSProperties;
    hue: CSSProperties;
}

export interface HuePickerProps extends CustomPickerProps {
    height?: string | undefined;
    width?: string | undefined;
    direction?: "vertical" | "horizontal" | undefined;
    pointer?: ComponentType | undefined;
    styles?: Partial<Classes<HuePickerStylesProps>> | undefined;
}

export default class HuePicker extends Component<HuePickerProps> {}
