import { Component, CSSProperties } from "react";
import { ColorPickerProps, ColorResult } from "../../..";
import { Classes } from "reactcss";

export interface CirclePickerStylesProps {
    card: CSSProperties;
}

export interface CirclePickerProps extends ColorPickerProps<CirclePicker> {
    colors?: string[] | undefined;
    width?: string | undefined;
    circleSize?: number | undefined;
    circleSpacing?: number | undefined;
    styles?: Partial<Classes<CirclePickerStylesProps>> | undefined;
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class CirclePicker extends Component<CirclePickerProps> { }
