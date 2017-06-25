import { Component } from "react";
import { ColorPickerProps } from "react-color";

export interface BlockPickerProps extends ColorPickerProps<BlockPicker> {
    colors?: string[];
    width?: string;
}

export default class BlockPicker extends Component<BlockPickerProps> {}
