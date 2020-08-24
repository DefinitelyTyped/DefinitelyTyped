import { Component, CSSProperties } from "react";
import { ColorPickerProps } from "../../..";
import { Classes } from "reactcss";

export interface HuePickerStylesProps {
    picker: CSSProperties;
    hue: CSSProperties;
}

export interface HuePickerProps extends ColorPickerProps<HuePicker> {
    height?: string;
    width?: string;
    styles?: Partial<Classes<HuePickerStylesProps>>;
}

export default class HuePicker extends Component<HuePickerProps> { }
