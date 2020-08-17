import { Component, CSSProperties } from "react";
import { ColorPickerProps } from "../../..";
import { Classes } from "reactcss";

export interface SliderPickerStylesProps {
    hue: CSSProperties;
    Hue: CSSProperties;
}

export interface SliderPickerProps extends ColorPickerProps<SliderPicker> {
    styles?: Partial<Classes<SliderPickerStylesProps>>;
}

export default class SliderPicker extends Component<SliderPickerProps> { }
