import { Component, CSSProperties } from "react";
import { ColorPickerProps, ColorResult } from "../../..";
import { Classes } from "reactcss";

export interface CompactPickerStylesProps {
    Compact: CSSProperties;
    compact: CSSProperties;
    clear: CSSProperties;
}

export interface CompactPickerProps extends ColorPickerProps<CompactPicker> {
    colors?: string[];
    styles?: Partial<Classes<CompactPickerStylesProps>>;
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class CompactPicker extends Component<CompactPickerProps> { }
