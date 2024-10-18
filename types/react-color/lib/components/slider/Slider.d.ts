import { Component, CSSProperties } from "react";
import { Classes } from "reactcss";
import { ColorPickerProps } from "../../..";

export interface SliderPickerStylesProps {
    hue: CSSProperties;
    Hue: CSSProperties;
}

export interface SliderPickerProps extends ColorPickerProps<SliderPicker> {
    styles?: Partial<Classes<SliderPickerStylesProps>> | undefined;
}

export default class SliderPicker extends Component<SliderPickerProps> {}
