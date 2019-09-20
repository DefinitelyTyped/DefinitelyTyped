import { Component } from "react";
import { ColorPickerProps, ColorResult } from "../../..";

export interface CompactPickerProps extends ColorPickerProps<CompactPicker> {
    colors?: string[];
    onSwatchHover?(color: ColorResult, event: MouseEvent): void;
}

export default class CompactPicker extends Component<CompactPickerProps> {}
