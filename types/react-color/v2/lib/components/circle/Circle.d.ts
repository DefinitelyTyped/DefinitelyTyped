import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState } from "../../..";

export interface CirclePickerDefaultStyles {
    card?: CSSProperties;
}

export interface CirclePickerStyles {
    default?: CirclePickerDefaultStyles;
}

export interface CirclePickerProps extends CustomPickerProps {
    colors?: string[];
    width?: string;
    circleSize?: number;
    circleSpacing?: number;
    onSwatchHover?: (color: ColorState, event: MouseEvent) => void;
    styles?: CirclePickerStyles;
    className?: string;
}

export default class CirclePicker extends Component<CirclePickerProps> {}
