import { Component, CSSProperties } from "react";
import { Classes } from "reactcss";
import { ColorState, CustomPickerProps } from "../../..";

export interface SwatchesPickerStylesProps {
    picker?: CSSProperties | undefined;
    overflow?: CSSProperties | undefined;
    body?: CSSProperties | undefined;
    clear?: CSSProperties | undefined;
}

export interface SwatchesPickerProps extends CustomPickerProps {
    colors?: string[][] | undefined;
    height?: string | undefined;
    width?: string | undefined;
    onSwatchHover?(color: ColorState, event: MouseEvent): void;
    styles?: Partial<Classes<SwatchesPickerStylesProps>> | undefined;
}

export default class SwatchesPicker extends Component<SwatchesPickerProps> {}
