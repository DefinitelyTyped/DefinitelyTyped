import { Component, CSSProperties } from "react";
import { Classes } from "reactcss";
import { ColorPickerProps } from "../../..";

export interface HuePickerStylesProps {
    picker: CSSProperties;
    hue: CSSProperties;
}

export interface HuePickerProps extends ColorPickerProps<HuePicker> {
    height?: string | undefined;
    width?: string | undefined;
    styles?: Partial<Classes<HuePickerStylesProps>> | undefined;
}

export default class HuePicker extends Component<HuePickerProps> {}
