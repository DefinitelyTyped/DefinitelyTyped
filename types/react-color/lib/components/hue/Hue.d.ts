import { Component, ReactNode, CSSProperties } from "react";
import { CustomPickerProps } from "../../..";

export interface HuePickerDefaultStyle {
    picker?: CSSProperties;
    hue?: CSSProperties;
}

export interface HuePickerStyle {
    default?: HuePickerDefaultStyle;
}

export interface HuePickerProps extends CustomPickerProps {
    height?: string;
    width?: string;
    direction?: "vertical" | "horizontal";
    pointer?: ReactNode;
    styles?: HuePickerStyle;
    className?: string;
}

export default class HuePicker extends Component<HuePickerProps> {}
