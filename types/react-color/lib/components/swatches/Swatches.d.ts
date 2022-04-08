import { Component, CSSProperties } from "react";
import { ColorPickerProps, ColorResult } from "../../..";
import { Classes } from "reactcss";

export interface SwatchesPickerStylesProps {
    picker: CSSProperties;
    overflow: CSSProperties;
    body: CSSProperties;
    clear: CSSProperties;
}

export interface SwatchesPickerProps extends ColorPickerProps<SwatchesPicker> {
    colors?: string[][];
    height?: number;
    width?: number;
    styles?: Partial<Classes<SwatchesPickerStylesProps>>;
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class SwatchesPicker extends Component<SwatchesPickerProps> { }
