import { Component, CSSProperties } from "react";
import { Classes } from "reactcss";
import { ColorPickerProps } from "../../..";

export interface AlphaPickerStylesProps {
    picker: CSSProperties;
    alpha: CSSProperties;
}

export interface AlphaPickerProps extends ColorPickerProps<AlphaPicker> {
    height?: string | undefined;
    width?: string | undefined;
    styles?: Partial<Classes<AlphaPickerStylesProps>> | undefined;
}

export default class AlphaPicker extends Component<AlphaPickerProps> {}
