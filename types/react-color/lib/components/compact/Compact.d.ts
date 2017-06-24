import { Component } from "react";
import { ColorPickerProps } from "react-color";

export interface CompactPickerProps extends ColorPickerProps<CompactPicker> {
    colors?: string[];
}

export default class CompactPicker extends Component<CompactPickerProps> {}
