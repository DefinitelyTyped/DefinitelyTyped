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
    colors?: string[][] | undefined;
    height?: number | undefined;
    width?: number | undefined;
    styles?: Partial<Classes<SwatchesPickerStylesProps>> | undefined;
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class SwatchesPicker extends Component<SwatchesPickerProps> { }
