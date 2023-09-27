import { Component, CSSProperties } from "react";
import { Classes } from "reactcss";
import { ColorState, CustomPickerProps } from "../../..";

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

export default class CirclePicker extends Component<CirclePickerProps> {}
