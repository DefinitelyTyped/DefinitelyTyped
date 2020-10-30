import { Component, CSSProperties } from "react";
import { ColorPickerProps } from "../../..";
import { Classes } from "reactcss";

export interface AlphaPickerStylesProps {
    picker: CSSProperties;
    alpha: CSSProperties;
}

export interface AlphaPickerProps extends ColorPickerProps<AlphaPicker> {
    height?: string;
    width?: string;
    styles?: Partial<Classes<AlphaPickerStylesProps>>;
}

export default class AlphaPicker extends Component<AlphaPickerProps> { }
