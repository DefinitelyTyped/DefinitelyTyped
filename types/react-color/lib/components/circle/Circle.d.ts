import { Component, CSSProperties } from "react";
import { ColorPickerProps, ColorResult } from "../../..";
import { Classes } from "reactcss";

export interface CirclePickerStylesProps {
    card: CSSProperties;
}

export interface CirclePickerProps extends ColorPickerProps<CirclePicker> {
    colors?: string[];
    width?: string;
    circleSize?: number;
    circleSpacing?: number;
    styles?: Partial<Classes<CirclePickerStylesProps>>;
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class CirclePicker extends Component<CirclePickerProps> { }
