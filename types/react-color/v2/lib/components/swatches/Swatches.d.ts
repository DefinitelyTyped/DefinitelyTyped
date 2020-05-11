import { Component, CSSProperties } from "react";
import { CustomPickerProps, ColorState } from "../../..";

export interface SwatchesPickerDefaultStyles {
    picker?: CSSProperties;
    overflow?: CSSProperties;
    body?: CSSProperties;
    clear?: CSSProperties;
}

export interface SwatchesPickerStyles {
    default?: SwatchesPickerDefaultStyles;
}

export interface SwatchesPickerProps extends CustomPickerProps {
    colors?: string[][];
    height?: string;
    width?: string;
    onSwatchHover?(color: ColorState, event: MouseEvent): void;
    styles?: SwatchesPickerStyles;
    className?: string;
}

export default class SwatchesPicker extends Component<SwatchesPickerProps> {}
