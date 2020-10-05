import { Component, ComponentType, CSSProperties } from "react";
import { CustomPickerProps } from "../../..";
import { Classes } from "reactcss";

export interface HuePickerStylesProps {
    picker: CSSProperties;
    hue: CSSProperties;
}

export interface HuePickerProps extends CustomPickerProps {
    height?: string;
    width?: string;
    direction?: "vertical" | "horizontal";
    pointer?: ComponentType;
    styles?: Partial<Classes<HuePickerStylesProps>>;
}

export default class HuePicker extends Component<HuePickerProps> { }
