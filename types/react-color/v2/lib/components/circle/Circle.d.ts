import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState } from "../../..";
import { Classes } from "reactcss";

export interface CirclePickerStylesProps {
    card: CSSProperties;
}

export interface CirclePickerProps extends CustomPickerProps {
    colors?: string[];
    width?: string;
    circleSize?: number;
    circleSpacing?: number;
    onSwatchHover?: (color: ColorState, event: MouseEvent) => void;
    styles?: Partial<Classes<CirclePickerStylesProps>>;
}

export default class CirclePicker extends Component<CirclePickerProps> { }
