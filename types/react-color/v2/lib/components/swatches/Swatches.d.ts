import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState } from "../../..";
import { Classes } from "reactcss";

export interface SwatchesPickerStylesProps {
    picker?: CSSProperties;
    overflow?: CSSProperties;
    body?: CSSProperties;
    clear?: CSSProperties;
}

export interface SwatchesPickerProps extends CustomPickerProps {
    colors?: string[][];
    height?: string;
    width?: string;
    onSwatchHover?(color: ColorState, event: MouseEvent): void;
    styles?: Partial<Classes<SwatchesPickerStylesProps>>;
}

export default class SwatchesPicker extends Component<SwatchesPickerProps> { }
