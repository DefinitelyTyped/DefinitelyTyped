import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState } from "../../..";
import { Classes } from "reactcss";

export interface CirclePickerStylesProps {
    card: CSSProperties;
}

export interface CirclePickerProps extends CustomPickerProps {
    colors?: string[] | undefined;
    width?: string | undefined;
    circleSize?: number | undefined;
    circleSpacing?: number | undefined;
    onSwatchHover?: ((color: ColorState, event: MouseEvent) => void) | undefined;
    styles?: Partial<Classes<CirclePickerStylesProps>> | undefined;
}

export default class CirclePicker extends Component<CirclePickerProps> { }
