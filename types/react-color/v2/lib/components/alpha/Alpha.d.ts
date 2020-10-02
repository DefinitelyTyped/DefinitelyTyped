import { Component, ComponentType, CSSProperties } from "react";
import { RenderersProps, CustomPickerProps } from "../../..";
import { Classes } from "reactcss";

export interface AlphaPickerProps extends RenderersProps, CustomPickerProps {
    width?: string;
    height?: string;
    direction?: "horizontal" | "vertical";
    style?: any;
    pointer?: ComponentType;
    styles?: Partial<Classes<AlphaPickerStylesProps>>;
    className?: string;
}

export default class AlphaPicker extends Component<AlphaPickerProps> { }

export interface AlphaPickerStylesProps {
    picker: CSSProperties;
    alpha: CSSProperties;
}
